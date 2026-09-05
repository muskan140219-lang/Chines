import React from 'react';
import { hotel, translations } from '../data/hotelConfig';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface HeroProps {
  lang: 'en' | 'zh';
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenEnquiry }) => {
  const t = translations[lang];

  return (
    <section
      id="hero-section"
      className="relative h-screen w-full min-h-[640px] flex items-center justify-center overflow-hidden bg-[#0D0D0D]"
    >
      {/* Cinematic Background Image with Slow Zoom Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={hotel.images.hero}
          alt="Jingtailong International Hotel Beijing Architecture"
          className="w-full h-full object-cover object-center animate-hero-scale opacity-65 scale-100"
          loading="eager"
        />
        {/* Dark Cinematic Gradients & Fine Grain */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/45 to-[#111111]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/70 via-transparent to-[#111111]/70" />
      </div>

      {/* Decorative Fine Gold Architectural Borders */}
      <div className="absolute inset-x-6 sm:inset-x-12 top-24 bottom-12 border border-[#B79A62]/20 pointer-events-none hidden md:block" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 text-center flex flex-col items-center justify-center pt-16 sm:pt-20">
        {/* Cultural / Architectural Eyebrow */}
        <div className="flex items-center space-x-3 mb-4 sm:mb-6">
          <div className="w-8 sm:w-12 h-[1px] bg-[#B79A62]" />
          <span className="text-[#B79A62] text-xs sm:text-sm tracking-[0.28em] uppercase font-serif-chinese font-medium">
            {t.heroEyebrow}
          </span>
          <div className="w-8 sm:w-12 h-[1px] bg-[#B79A62]" />
        </div>

        {/* Primary Bilingual Titles */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-[0.08em] font-serif-luxury leading-tight max-w-4xl">
          {lang === 'zh' ? hotel.nameCN : hotel.nameEN}
        </h1>

        <div className="text-lg sm:text-2xl text-[#E8E4DC] font-serif-chinese tracking-[0.2em] font-light mt-2 sm:mt-3 opacity-90">
          {lang === 'zh' ? hotel.nameEN : hotel.nameCN}
        </div>

        {/* Gold Architectural Divider */}
        <div className="w-16 h-[1.5px] bg-[#B79A62] my-6 sm:my-8" />

        {/* Supporting Editorial Copy */}
        <p className="text-sm sm:text-base md:text-lg text-[#D8D0C3] max-w-2xl font-sans-clean font-light leading-relaxed tracking-wide opacity-95 mb-8 sm:mb-10">
          {t.heroSubtitle}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#hotel-intro"
            id="hero-explore-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 border border-[#D8D0C3] text-white hover:border-[#B79A62] hover:text-[#B79A62] px-8 py-3.5 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 group"
          >
            <span>{t.heroCtaExplore}</span>
            <ArrowRight className="w-4 h-4 text-[#B79A62] group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            type="button"
            id="hero-enquire-btn"
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-[#B79A62] hover:bg-[#C8AD78] text-[#111111] px-8 py-3.5 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300 shadow-lg active:translate-y-0.5"
          >
            {t.heroCtaEnquire}
          </button>
        </div>

        {/* Micro Heritage Details */}
        <div className="mt-12 hidden md:flex items-center space-x-8 text-[11px] text-[#A59F95] tracking-[0.2em] uppercase font-light">
          <span>{hotel.address.districtEN}</span>
          <span className="text-[#B79A62]">·</span>
          <span>{hotel.coordinates}</span>
          <span className="text-[#B79A62]">·</span>
          <span>{hotel.roomCount} {t.statRooms}</span>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#booking-panel"
        aria-label="Scroll to booking section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-[#B79A62] hover:text-[#C8AD78] transition-colors group cursor-pointer"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-sans-clean mb-1 opacity-80 group-hover:opacity-100">
          SCROLL
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
};
