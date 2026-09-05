import React from 'react';
import { hotel, translations } from '../data/hotelConfig';
import { Calendar, Phone } from 'lucide-react';

interface FinalCtaSectionProps {
  lang: 'en' | 'zh';
  onOpenEnquiry: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ lang, onOpenEnquiry }) => {
  const t = translations[lang];

  return (
    <section
      id="final-cta"
      className="py-24 sm:py-32 bg-[#0D0D0D] text-white relative overflow-hidden"
    >
      {/* Background Architectural Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src={hotel.images.exterior}
          alt="Jingtailong Hotel Architectural Stature"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0D0D0D]/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-12 text-center flex flex-col items-center">
        {/* Subtle Gold Rule */}
        <div className="w-12 h-[1px] bg-[#B79A62] mb-6" />

        <span className="text-xs sm:text-sm tracking-[0.25em] text-[#B79A62] uppercase font-serif-chinese mb-3">
          {lang === 'zh' ? '京华胜境 · 静候君临' : 'BEIJING HOSPITALITY'}
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.06em] font-serif-luxury text-white mb-6">
          {t.finalCtaTitle}
        </h2>

        <p className="text-sm sm:text-base text-[#D8D0C3] max-w-2xl font-sans-clean font-light leading-relaxed mb-10">
          {t.finalCtaSub}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            id="final-cta-enquire-btn"
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-[#B79A62] hover:bg-[#C8AD78] text-[#111111] px-9 py-4 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-xl"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.finalCtaButton}</span>
          </button>

          <a
            href={hotel.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-[#B79A62]/40 hover:border-[#B79A62] text-white hover:text-[#B79A62] px-8 py-4 text-xs sm:text-sm tracking-[0.18em] uppercase transition-colors"
          >
            <Phone className="w-4 h-4 text-[#B79A62]" />
            <span>{hotel.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
