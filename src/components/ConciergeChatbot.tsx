import React, { useState, useRef, useEffect } from 'react';
import { CONCIERGE_QUICK_ACTIONS, ConciergeQuickAction } from '../data/hotelKnowledge';
import { hotel } from '../data/hotelConfig';
import {
  MessageSquare,
  X,
  Send,
  Phone,
  Calendar,
  MapPin,
  ExternalLink,
  Sparkles,
  RotateCcw,
  Minimize2,
  ChevronDown,
  Globe,
  Loader2,
} from 'lucide-react';

export type ConciergeLang = 'zh' | 'en' | 'ja';

interface Message {
  id: string;
  sender: 'user' | 'concierge';
  text: string;
  time: string;
  suggestions?: string[];
  actionButtons?: Array<{
    type: 'call' | 'book' | 'map' | 'custom';
    label: string;
    value: string;
  }>;
  isError?: boolean;
}

interface ConciergeChatbotProps {
  onOpenBookingEnquiry: (roomName?: string) => void;
  currentSiteLang: 'zh' | 'en';
}

export const ConciergeChatbot: React.FC<ConciergeChatbotProps> = ({
  onOpenBookingEnquiry,
  currentSiteLang,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<ConciergeLang>(currentSiteLang === 'zh' ? 'zh' : 'en');
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);

  // Synchronize language if site language changes, unless user manually picked Japanese
  useEffect(() => {
    if (lang !== 'ja') {
      setLang(currentSiteLang === 'zh' ? 'zh' : 'en');
    }
  }, [currentSiteLang]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Localized Strings for Chatbot UI
  const ui = {
    zh: {
      title: 'JINGTAILONG CONCIERGE',
      chineseTitle: '京泰龙智能礼宾',
      subtitle: 'Your Digital Hotel Concierge',
      badge: '在线待命 · 24/7',
      welcome:
        '您好！欢迎莅临北京京泰龙国际大酒店。\n我是您的专属数字化礼宾助手。请问今天有什么可以为您效劳？',
      quickTopics: '快捷服务指引',
      placeholder: '咨询客房、泰龙餐厅、地铁交通或预订…',
      send: '发送',
      callHotel: '致电前台',
      bookNow: '预订咨询',
      openMaps: '地图导航',
      retry: '重试发送',
      disclaimer: '基于酒店官方核验信息。如需实时房态与加急服务，欢迎随时致电总机。',
      emptyHint: '点击上方标签，或直接输入您想了解的问题',
    },
    en: {
      title: 'JINGTAILONG CONCIERGE',
      chineseTitle: 'Digital Hotel Concierge',
      subtitle: 'Your Digital Hotel Concierge',
      badge: 'Online · 24/7 Service',
      welcome:
        'Welcome to Jingtailong International Hotel Beijing.\nI am your dedicated digital concierge. How may I assist you today?',
      quickTopics: 'Quick Inquiries',
      placeholder: 'Ask about rooms, dining, subway transit, or reservations...',
      send: 'Send',
      callHotel: 'Call Hotel',
      bookNow: 'Check Availability',
      openMaps: 'Open Maps',
      retry: 'Retry',
      disclaimer: 'Verified property details. For immediate assistance, contact our 24-hour reception desk.',
      emptyHint: 'Select a quick action above or type your question below',
    },
    ja: {
      title: 'JINGTAILONG CONCIERGE',
      chineseTitle: '北京京泰龍 デジタルコンシェルジュ',
      subtitle: 'Your Digital Hotel Concierge',
      badge: 'オンライン案内 · 24時間対応',
      welcome:
        '北京京泰龍国際大飯店へようこそ。\n専任のデジタルコンシェルジュでございます。本日はどのようなご案内をいたしましょうか？',
      quickTopics: 'クイックメニュー',
      placeholder: '客室、レストラン、地下鉄アクセス、宿泊予約について質問…',
      send: '送信',
      callHotel: 'フロントへ電話',
      bookNow: '空室確認・問い合わせ',
      openMaps: 'マップを開く',
      retry: '再試行',
      disclaimer: '確認済みの公式情報を提供しています。緊急のお問い合わせは24時間フロントまで。',
      emptyHint: '上のクイックメニューを選択するか、直接ご入力ください',
    },
  }[lang];

  // Initial welcome message
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'concierge',
      text: ui.welcome,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestions: [
        lang === 'zh' ? '查看客房与套房' : lang === 'ja' ? '客室タイプと設備' : 'View room categories',
        lang === 'zh' ? '泰龙餐厅与早餐时间' : lang === 'ja' ? '朝食ビュッフェの時間' : 'Breakfast buffet & dining',
        lang === 'zh' ? '前往珠市口地铁站' : lang === 'ja' ? '最寄り駅とアクセス' : 'Nearest subway & transit',
        lang === 'zh' ? '如何预订客房？' : lang === 'ja' ? '宿泊予約方法' : 'How to reserve a room?',
      ],
      actionButtons: [
        { type: 'book', label: ui.bookNow, value: 'booking' },
        { type: 'call', label: `${ui.callHotel} (+86 10 6707 5888)`, value: 'tel:+861067075888' },
      ],
    },
  ]);

  // Update welcome message when language toggled if only welcome message exists
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome-1') {
        return [
          {
            ...prev[0],
            text: ui.welcome,
            suggestions: [
              lang === 'zh' ? '查看客房与套房' : lang === 'ja' ? '客室タイプと設備' : 'View room categories',
              lang === 'zh' ? '泰龙餐厅与早餐时间' : lang === 'ja' ? '朝食ビュッフェの時間' : 'Breakfast buffet & dining',
              lang === 'zh' ? '前往珠市口地铁站' : lang === 'ja' ? '最寄り駅とアクセス' : 'Nearest subway & transit',
              lang === 'zh' ? '如何预订客房？' : lang === 'ja' ? '宿泊予約方法' : 'How to reserve a room?',
            ],
            actionButtons: [
              { type: 'book', label: ui.bookNow, value: 'booking' },
              { type: 'call', label: `${ui.callHotel} (+86 10 6707 5888)`, value: 'tel:+861067075888' },
            ],
          },
        ];
      }
      return prev;
    });
  }, [lang, ui.welcome, ui.bookNow, ui.callHotel]);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Open chatbot handler
  const handleOpenChat = () => {
    setIsOpen(true);
    setUnreadCount(0);
    if (!hasOpenedOnce) {
      setHasOpenedOnce(true);
    }
    setTimeout(() => {
      inputRef.current?.focus();
    }, 200);
  };

  // Send message to backend Gemini route
  const sendMessage = async (userText: string) => {
    const trimmed = userText.trim();
    if (!trimmed || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Build conversation history (only plain user & concierge texts)
      const historyPayload = messages
        .filter((m) => !m.isError)
        .map((m) => ({
          role: m.sender === 'user' ? 'user' : 'model',
          text: m.text,
        }));

      const res = await fetch('/api/concierge/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: trimmed,
          conversationHistory: historyPayload,
          preferredLanguage: lang,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }

      const data = await res.json();

      // Automatically switch UI language if user clearly wrote in another language
      if (data.detectedLanguage && ['zh', 'en', 'ja'].includes(data.detectedLanguage)) {
        if (data.detectedLanguage !== lang) {
          setLang(data.detectedLanguage as ConciergeLang);
        }
      }

      const assistantMessage: Message = {
        id: `concierge-${Date.now()}`,
        sender: 'concierge',
        text: data.reply || 'I am at your service. How else may I assist you?',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: data.suggestions || [],
        actionButtons: data.actionButtons || [],
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Concierge request error:', err);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        sender: 'concierge',
        text:
          lang === 'zh'
            ? '智能服务连接稍有延迟。请您直接致电酒店24小时前台（+86 10 6707 5888），或点击下方按钮提交预订意向。'
            : lang === 'ja'
            ? '接続に問題が発生いたしました。お急ぎの場合は24時間フロント（+86 10 6707 5888）へ直接お電話いただくか、下記よりお問い合わせください。'
            : "I'm having trouble connecting right now. Please try again or contact the hotel directly at +86 10 6707 5888.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isError: true,
        suggestions: [
          lang === 'zh' ? '重新发送' : lang === 'ja' ? '再試行' : 'Retry',
          lang === 'zh' ? '预订客房' : lang === 'ja' ? '予約問い合わせ' : 'Check Availability',
        ],
        actionButtons: [
          { type: 'call', label: `${ui.callHotel} (+86 10 6707 5888)`, value: 'tel:+861067075888' },
          { type: 'book', label: ui.bookNow, value: 'booking' },
        ],
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = (action: ConciergeQuickAction) => {
    const promptText = lang === 'zh' ? action.labelZH : lang === 'ja' ? action.labelJA : action.labelEN;
    sendMessage(promptText);
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion);
  };

  const handleActionButtonClick = (button: { type: string; value: string }) => {
    if (button.type === 'book' || button.value === 'booking') {
      onOpenBookingEnquiry();
    } else if (button.type === 'call' || button.value.startsWith('tel:')) {
      window.location.href = button.value;
    } else if (button.type === 'map' || button.value.startsWith('http')) {
      window.open(button.value, '_blank', 'noopener,noreferrer');
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'concierge',
        text: ui.welcome,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestions: [
          lang === 'zh' ? '查看客房与套房' : lang === 'ja' ? '客室タイプと設備' : 'View room categories',
          lang === 'zh' ? '泰龙餐厅与早餐时间' : lang === 'ja' ? '朝食ビュッフェの時間' : 'Breakfast buffet & dining',
          lang === 'zh' ? '前往珠市口地铁站' : lang === 'ja' ? '最寄り駅とアクセス' : 'Nearest subway & transit',
          lang === 'zh' ? '如何预订客房？' : lang === 'ja' ? '宿泊予約方法' : 'How to reserve a room?',
        ],
        actionButtons: [
          { type: 'book', label: ui.bookNow, value: 'booking' },
          { type: 'call', label: `${ui.callHotel} (+86 10 6707 5888)`, value: 'tel:+861067075888' },
        ],
      },
    ]);
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. FLOATING TRIGGER BUTTON (Desktop & Mobile Clean Placement)            */}
      {/* ========================================================================= */}
      {!isOpen && (
        <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-40 flex flex-col items-end">
          <button
            type="button"
            id="open-concierge-btn"
            onClick={handleOpenChat}
            aria-label="Open Jingtailong AI Concierge"
            className="group relative flex items-center space-x-3 bg-[#111111] hover:bg-[#1A1816] text-white border border-[#B79A62] shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-4 sm:px-5 py-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* Pulsing Gold Online Light */}
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B79A62] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#B79A62]" />
            </span>

            {/* Icon Avatar */}
            <div className="w-8 h-8 rounded-full bg-[#1C1A17] border border-[#B79A62]/60 flex items-center justify-center text-[#B79A62] shrink-0">
              <Sparkles className="w-4 h-4 text-[#B79A62]" />
            </div>

            {/* Text Labels */}
            <div className="text-left">
              <div className="flex items-center space-x-2">
                <span className="text-xs sm:text-sm font-serif-luxury font-medium tracking-[0.14em] uppercase text-white group-hover:text-[#B79A62] transition-colors">
                  JINGTAILONG CONCIERGE
                </span>
                {unreadCount > 0 && (
                  <span className="bg-[#6F1D1B] text-white text-[10px] font-mono px-1.5 py-0.2 rounded-full">
                    1
                  </span>
                )}
              </div>
              <div className="text-[10px] text-[#A59F95] font-sans-clean font-light tracking-wide">
                Your Digital Hotel Concierge
              </div>
            </div>

            {/* Subtle Gold Corner Accent */}
            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#B79A62]" />
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. CHATBOT MODAL PANEL (Floating on desktop, full-screen on mobile)      */}
      {/* ========================================================================= */}
      {isOpen && (
        <div
          id="concierge-panel"
          className={`fixed z-50 transition-all duration-300 ease-out flex flex-col shadow-2xl border border-[#B79A62]/50 bg-[#FFFFFF] ${
            // Mobile: full viewport safe area; Desktop: bottom-right floating panel
            'inset-x-0 bottom-0 top-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[440px] sm:h-[650px] sm:max-h-[90vh]'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Jingtailong Hotel Concierge Chat"
        >
          {/* ----------------------------------------------------------------- */}
          {/* Header                                                            */}
          {/* ----------------------------------------------------------------- */}
          <div className="bg-[#0D0D0D] text-white p-4 sm:p-4.5 border-b border-[#2A2621] flex items-center justify-between shrink-0 relative select-none">
            {/* Hotel Brand & Status */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#1A1816] border border-[#B79A62] flex items-center justify-center text-[#B79A62]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0D0D0D]" />
              </div>

              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-sm sm:text-base font-serif-luxury tracking-wider text-white font-medium">
                    {ui.title}
                  </h3>
                </div>
                <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] text-[#A59F95]">
                  <span className="text-[#B79A62] font-serif-chinese font-normal">
                    {ui.chineseTitle}
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400 font-mono text-[10px]">{ui.badge}</span>
                </div>
              </div>
            </div>

            {/* Header Controls: Language Selector & Close */}
            <div className="flex items-center space-x-2">
              {/* Language Switcher Pill */}
              <div className="flex items-center bg-[#1C1A17] border border-[#3A352F] text-[11px] rounded-sm p-0.5">
                <button
                  type="button"
                  onClick={() => setLang('zh')}
                  className={`px-1.5 py-0.5 rounded-xs transition-colors font-medium ${
                    lang === 'zh' ? 'bg-[#B79A62] text-[#111111]' : 'text-[#A59F95] hover:text-white'
                  }`}
                  title="中文"
                >
                  中
                </button>
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-1.5 py-0.5 rounded-xs transition-colors font-medium ${
                    lang === 'en' ? 'bg-[#B79A62] text-[#111111]' : 'text-[#A59F95] hover:text-white'
                  }`}
                  title="English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang('ja')}
                  className={`px-1.5 py-0.5 rounded-xs transition-colors font-medium ${
                    lang === 'ja' ? 'bg-[#B79A62] text-[#111111]' : 'text-[#A59F95] hover:text-white'
                  }`}
                  title="日本語"
                >
                  日
                </button>
              </div>

              {/* Reset Conversation Button */}
              <button
                type="button"
                onClick={handleResetChat}
                title="Restart conversation"
                className="p-1.5 text-[#A59F95] hover:text-[#B79A62] transition-colors"
                aria-label="Restart chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Close Button */}
              <button
                type="button"
                id="close-concierge-btn"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-[#A59F95] hover:text-white transition-colors"
                aria-label="Close concierge panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* Quick Actions Scroll Bar                                          */}
          {/* ----------------------------------------------------------------- */}
          <div className="bg-[#FAF8F5] border-b border-[#D8D0C3] py-2 px-3 overflow-x-auto no-scrollbar shrink-0">
            <div className="flex items-center space-x-1.5 min-w-max">
              {CONCIERGE_QUICK_ACTIONS.map((action) => {
                const label = lang === 'zh' ? action.labelZH : lang === 'ja' ? action.labelJA : action.labelEN;
                return (
                  <button
                    key={action.id}
                    type="button"
                    onClick={() => handleQuickAction(action)}
                    className="inline-flex items-center space-x-1.5 bg-[#FFFFFF] hover:bg-[#111111] text-[#1A1816] hover:text-white border border-[#D8D0C3] hover:border-[#111111] px-2.5 py-1 text-xs transition-all duration-200 shadow-2xs font-sans-clean font-medium rounded-xs"
                  >
                    <span>{action.icon}</span>
                    <span className="text-[11px] tracking-wide">{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* Chat Messages List                                                */}
          {/* ----------------------------------------------------------------- */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-[#F5F1E8] overscroll-contain">
            {messages.map((message) => {
              const isConcierge = message.sender === 'concierge';
              return (
                <div
                  key={message.id}
                  className={`flex flex-col ${isConcierge ? 'items-start' : 'items-end'} space-y-1.5`}
                >
                  {/* Sender Label & Timestamp */}
                  <div className="flex items-center space-x-2 text-[10px] text-[#8C857B] px-1 font-mono">
                    <span>{isConcierge ? 'JINGTAILONG CONCIERGE' : 'GUEST'}</span>
                    <span>•</span>
                    <span>{message.time}</span>
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`max-w-[88%] p-3.5 sm:p-4 text-xs sm:text-[13px] leading-relaxed font-sans-clean font-light shadow-xs ${
                      isConcierge
                        ? 'bg-[#FFFFFF] text-[#1A1816] border border-[#D8D0C3] rounded-sm rounded-tl-none'
                        : 'bg-[#111111] text-white border border-[#2A2621] rounded-sm rounded-tr-none'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>

                    {/* Integrated Action Buttons (e.g. Call Hotel, Book, Maps) */}
                    {message.actionButtons && message.actionButtons.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-[#ECE7DD] flex flex-wrap gap-2">
                        {message.actionButtons.map((btn, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleActionButtonClick(btn)}
                            className="inline-flex items-center space-x-1.5 bg-[#B79A62] hover:bg-[#C8AD78] text-[#111111] px-3 py-1.5 text-[11px] font-medium tracking-wide uppercase shadow-2xs transition-colors rounded-xs"
                          >
                            {btn.type === 'call' && <Phone className="w-3 h-3" />}
                            {btn.type === 'book' && <Calendar className="w-3 h-3" />}
                            {btn.type === 'map' && <MapPin className="w-3 h-3" />}
                            <span>{btn.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Contextual Suggestions Chips */}
                  {isConcierge && message.suggestions && message.suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1 pl-1 max-w-[90%]">
                      {message.suggestions.map((suggestion, sIdx) => (
                        <button
                          key={sIdx}
                          type="button"
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="bg-[#FFFFFF]/80 hover:bg-[#FFFFFF] text-[#706B64] hover:text-[#111111] border border-[#D8D0C3] hover:border-[#B79A62] px-2.5 py-1 text-[10px] sm:text-[11px] rounded-full transition-all text-left shadow-2xs"
                        >
                          + {suggestion}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Loading / Typing Indicator */}
            {isLoading && (
              <div className="flex flex-col items-start space-y-1.5">
                <span className="text-[10px] text-[#8C857B] px-1 font-mono">
                  JINGTAILONG CONCIERGE • TYPING
                </span>
                <div className="bg-[#FFFFFF] border border-[#D8D0C3] p-3 rounded-sm rounded-tl-none flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 rounded-full bg-[#B79A62] animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 rounded-full bg-[#B79A62] animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-[#B79A62] animate-bounce" />
                  </div>
                  <span className="text-[11px] text-[#706B64] font-serif-luxury italic pl-1">
                    {lang === 'zh' ? '正在整理核验信息…' : lang === 'ja' ? '確認中…' : 'Consulting verified hotel knowledge…'}
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ----------------------------------------------------------------- */}
          {/* Input Bar & Micro-disclaimer                                      */}
          {/* ----------------------------------------------------------------- */}
          <div className="bg-[#FFFFFF] border-t border-[#D8D0C3] p-3 sm:p-3.5 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(input);
              }}
              className="flex items-center space-x-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={ui.placeholder}
                disabled={isLoading}
                className="flex-1 bg-[#F5F1E8] border border-[#D8D0C3] px-3.5 py-2.5 text-xs sm:text-sm text-[#111111] placeholder-[#8C857B] focus:outline-none focus:border-[#B79A62] transition-colors rounded-xs"
              />

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-[#111111] hover:bg-[#6F1D1B] disabled:opacity-40 text-white p-2.5 sm:px-4 sm:py-2.5 text-xs tracking-wider uppercase font-semibold transition-colors flex items-center justify-center rounded-xs shrink-0"
                aria-label={ui.send}
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin text-[#B79A62]" />
                ) : (
                  <>
                    <span className="hidden sm:inline mr-1.5">{ui.send}</span>
                    <Send className="w-3.5 h-3.5 text-[#B79A62]" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-2 text-[10px] text-[#8C857B] flex items-center justify-between px-1 font-sans-clean font-light">
              <span className="truncate max-w-[85%]">{ui.disclaimer}</span>
              <a
                href={hotel.phoneTel}
                className="text-[#B79A62] hover:underline font-mono shrink-0 ml-2"
                title="Direct 24-Hour Desk"
              >
                +86 10 6707 5888
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
