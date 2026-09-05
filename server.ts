import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { HOTEL_KNOWLEDGE_TEXT } from "./src/data/hotelKnowledge";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let genAIClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!genAIClient) {
    genAIClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return genAIClient;
}

// Health check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    hotel: "Jingtailong International Hotel",
    geminiConfigured: !!process.env.GEMINI_API_KEY,
  });
});

// Concierge Chat Endpoint
app.post("/api/concierge/chat", async (req, res) => {
  try {
    const { message, conversationHistory = [], preferredLanguage = "auto" } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message string is required" });
    }

    const ai = getGenAI();

    // Fallback if API key is not yet configured
    if (!ai) {
      return res.json({
        reply: preferredLanguage === "zh"
          ? "您好！我是北京京泰龙国际大酒店的智能礼宾助手。目前在线智能服务正在连线中。您可以直接致电酒店24小时前台总机：+86 10 6707 5888，或直接在页面中提交预订意向表单，我们将竭诚为您服务。"
          : preferredLanguage === "ja"
          ? "こんにちは！北京京泰龍国際大飯店のデジタルコンシェルジュです。現在接続の準備中です。ご質問やご予約は、24時間対応のフロント（+86 10 6707 5888）または予約問い合わせフォームをご利用ください。"
          : "Welcome to Jingtailong International Hotel. Our AI concierge connection is initializing. You can contact our 24-hour reception desk directly at +86 10 6707 5888, or use our website inquiry form for immediate assistance.",
        detectedLanguage: preferredLanguage === "auto" ? "en" : preferredLanguage,
        suggestions: ["Call Hotel: +86 10 6707 5888", "Check Availability", "View Rooms", "Open Maps"],
        actionButtons: [
          { type: "call", label: "Call Hotel (+86 10 6707 5888)", value: "tel:+861067075888" },
          { type: "book", label: "Check Availability", value: "booking" },
          { type: "map", label: "Open Maps", value: "https://maps.app.goo.gl/AUZruh1kdMRmo7NdA?g_st=ac" },
        ],
      });
    }

    // Prepare system instructions with strict anti-hallucination mandate
    const systemInstruction = `
You are the official, highly courteous, and sophisticated Digital Concierge for Jingtailong International Hotel Beijing (北京京泰龙国际大酒店).
Your role is to assist guests with verified information regarding the hotel, rooms, dining, facilities, location, directions, and stay policies.

[PRIMARY SOURCE OF TRUTH]
${HOTEL_KNOWLEDGE_TEXT}

[CRITICAL ANTI-HALLUCINATION & INTEGRITY RULES]
1. ONLY provide facts verified in the HOTEL KNOWLEDGE above. NEVER invent or extrapolate room prices, discounts, live inventory numbers, ratings, awards, or fake policies.
2. If asked about something NOT in the knowledge base, you MUST respond:
   - In English: "I'm sorry, I don't have verified information about that at the moment. Please contact the hotel directly at +86 10 6707 5888 for the most accurate information."
   - In Chinese: "十分抱歉，目前我没有关于此项的准确核验信息。请您直接致电酒店前台总机 +86 10 6707 5888，我们将竭诚为您解答。"
   - In Japanese: "申し訳ございません。現在その点に関する確認済みの情報がございません。最も正確な情報につきましては、ホテル代表番号（+86 10 6707 5888）まで直接お問い合わせください。"
3. LIVE AVAILABILITY & BOOKINGS:
   You CANNOT access live booking inventory. If asked to check live availability or make an instant booking:
   - State clearly: "I can help you with general booking information, but I can't confirm live availability from here."
   - Invite the guest to click 'Check Availability' or 'Book Now' to submit a direct reservation enquiry, or call +86 10 6707 5888.
4. UNVERIFIED FACILITIES:
   The hotel DOES NOT have a swimming pool, fitness gym, spa center, or pet rooms. Never say yes to these.
5. LANGUAGE HANDLING:
   - Automatically detect the guest's language.
   - If the user writes in Chinese (Simplified or Traditional) -> reply in elegant Chinese.
   - If the user writes in English -> reply in refined English.
   - If the user writes in Japanese -> reply in polite Japanese (keigo).
   - If preferredLanguage is specified ("zh", "en", "ja"), prioritize that language unless the user clearly wrote in another language.
6. OUTPUT STRUCTURE:
   Provide an elegant, helpful answer. At the end, propose 2 to 4 concise, relevant follow-up suggestions (e.g. "How to reach from subway?", "Tailong Restaurant hours", "Check Availability", "Nearby attractions").
`;

    // Format conversation history for Gemini
    const contents: any[] = [];
    if (Array.isArray(conversationHistory)) {
      for (const msg of conversationHistory.slice(-8)) {
        if (msg.role === "user" || msg.role === "model") {
          contents.push({
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: msg.text }],
          });
        }
      }
    }
    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const candidateModels = ["gemini-3.6-flash", "gemini-flash-latest", "gemini-3.8-flash"];
    let response: any = null;
    let lastError: any = null;

    for (let i = 0; i < candidateModels.length; i++) {
      const modelName = candidateModels[i];
      try {
        response = await ai.models.generateContent({
          model: modelName,
          contents,
          config: {
            systemInstruction,
            responseMimeType: "application/json",
            responseSchema: {
              type: Type.OBJECT,
              properties: {
                reply: {
                  type: Type.STRING,
                  description: "The refined, courteous answer from the digital concierge.",
                },
                detectedLanguage: {
                  type: Type.STRING,
                  description: "The language of the response: 'zh', 'en', 'ja', or other.",
                },
                suggestions: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "2-4 contextual follow-up questions or chips the guest might click next.",
                },
                actionTypes: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: "Recommended quick action buttons: e.g. ['call', 'book', 'map', 'rooms'].",
                },
              },
              required: ["reply", "detectedLanguage", "suggestions"],
            },
          },
        });
        if (response && response.text) {
          break;
        }
      } catch (err: any) {
        lastError = err;
        console.warn(`Model ${modelName} attempt failed:`, err?.message || err);
        // If not last attempt, short backoff before fallback
        if (i < candidateModels.length - 1) {
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
    }

    if (!response || !response.text) {
      throw lastError || new Error("No response generated from Gemini models");
    }

    const parsed = JSON.parse(response.text || "{}");

    // Standardize action buttons
    const actionButtons: any[] = [];
    const actions = parsed.actionTypes || [];
    if (actions.includes("call") || parsed.reply.includes("6707 5888")) {
      actionButtons.push({
        type: "call",
        label: parsed.detectedLanguage === "zh" ? "致电前台 (+86 10 6707 5888)" : parsed.detectedLanguage === "ja" ? "フロントに電話" : "Call Hotel (+86 10 6707 5888)",
        value: "tel:+861067075888",
      });
    }
    if (actions.includes("book") || /book|reserv|availab|预订|房态|空房|予約/i.test(message)) {
      actionButtons.push({
        type: "book",
        label: parsed.detectedLanguage === "zh" ? "预订意向咨询" : parsed.detectedLanguage === "ja" ? "宿泊空室確認" : "Check Availability",
        value: "booking",
      });
    }
    if (actions.includes("map") || /locat|where|address|metro|subway|airport|位置|地址|地铁|交通|行き方/i.test(message)) {
      actionButtons.push({
        type: "map",
        label: parsed.detectedLanguage === "zh" ? "Google 地图导航" : parsed.detectedLanguage === "ja" ? "Googleマップを開く" : "Open Google Maps",
        value: "https://maps.app.goo.gl/AUZruh1kdMRmo7NdA?g_st=ac",
      });
    }

    return res.json({
      reply: parsed.reply,
      detectedLanguage: parsed.detectedLanguage || "en",
      suggestions: parsed.suggestions || [],
      actionButtons,
    });
  } catch (error: any) {
    console.error("Error in /api/concierge/chat:", error);
    const isChinese = /[\u4e00-\u9fa5]/.test(req.body?.message || "") || req.body?.preferredLanguage === "zh";
    const isJapanese = /[\u3040-\u30ff]/.test(req.body?.message || "") || req.body?.preferredLanguage === "ja";

    const reply = isChinese
      ? "非常抱歉，智能礼宾系统响应稍有延迟。请您直接致电酒店24小时前台（+86 10 6707 5888），或点击下方按钮发起预订意向咨询。"
      : isJapanese
      ? "申し訳ございません。接続に一時的な遅延が発生しております。24時間フロント（+86 10 6707 5888）へお電話いただくか、下記よりお問い合わせください。"
      : "I'm having trouble connecting right now. Please try again or contact the hotel directly at +86 10 6707 5888.";

    return res.status(500).json({
      error: "Failed to generate concierge response",
      reply,
      detectedLanguage: isChinese ? "zh" : isJapanese ? "ja" : "en",
      suggestions: isChinese
        ? ["重新发送", "致电前台: +86 10 6707 5888", "预订客房"]
        : isJapanese
        ? ["再試行", "フロントへ電話: +86 10 6707 5888", "空室確認"]
        : ["Retry", "Call Hotel: +86 10 6707 5888", "Check Availability"],
      actionButtons: [
        {
          type: "call",
          label: isChinese ? "致电前台 (+86 10 6707 5888)" : isJapanese ? "フロントに電話" : "Call Hotel (+86 10 6707 5888)",
          value: "tel:+861067075888",
        },
        {
          type: "book",
          label: isChinese ? "预订意向咨询" : isJapanese ? "宿泊空室確認" : "Check Availability",
          value: "booking",
        },
      ],
    });
  }
});

// Setup Vite middleware in dev or static serving in prod
async function start() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Jingtailong Concierge Server listening on http://0.0.0.0:${PORT}`);
  });
}

start();
