import React, { useState } from 'react';
import { verifiedFaqs, translations } from '../data/hotelConfig';
import { ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  lang: 'en' | 'zh';
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openId, setOpenId] = useState<string | null>(verifiedFaqs[0]?.id || null);
  const t = translations[lang];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-24 sm:py-32 bg-[#F5F1E8] text-[#1A1816] relative border-t border-[#D8D0C3]"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B79A62]" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#B79A62] uppercase font-semibold">
              {t.faqEyebrow}
            </span>
            <span className="w-8 h-[1px] bg-[#B79A62]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.06em] font-serif-luxury text-[#111111] mb-3">
            {t.faqTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#6F1D1B] font-serif-chinese italic tracking-wider">
            {t.faqSub}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {verifiedFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#FFFFFF] border border-[#D8D0C3] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 flex items-center justify-between space-x-4 focus:outline-none hover:bg-[#FAF8F5] transition-colors"
                >
                  <span className="text-base sm:text-lg font-serif-luxury text-[#111111] font-medium">
                    {lang === 'zh' ? faq.questionCN : faq.questionEN}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#B79A62] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#706B64] leading-relaxed font-sans-clean font-light border-t border-[#ECE7DD]">
                    {lang === 'zh' ? faq.answerCN : faq.answerEN}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
