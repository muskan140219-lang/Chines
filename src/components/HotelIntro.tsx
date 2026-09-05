import React from 'react';
import { hotel, translations } from '../data/hotelConfig';
import { Compass, Train, Clock, Building2 } from 'lucide-react';

interface HotelIntroProps {
  lang: 'en' | 'zh';
  onOpenEnquiry: () => void;
}

export const HotelIntro: React.FC<HotelIntroProps> = ({ lang, onOpenEnquiry }) => {
  const t = translations[lang];

  return (
    <section
      id="hotel-intro"
      className="py-24 sm:py-32 bg-[#F5F1E8] text-[#1A1816] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B79A62]" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#B79A62] uppercase font-semibold">
              {t.introEyebrow}
            </span>
            <span className="w-8 h-[1px] bg-[#B79A62]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.06em] font-serif-luxury text-[#111111] mb-4">
            {t.introTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#6F1D1B] font-serif-chinese italic tracking-wider">
            {t.introSub}
          </p>
        </div>

        {/* Editorial Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Architectural Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative border border-[#D8D0C3] p-3 sm:p-4 bg-white shadow-xl">
              <div className="overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={hotel.images.lobby}
                  alt="Jingtailong International Hotel Welcome Lobby"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Cultural Caption Badge */}
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 bg-[#111111]/90 text-white px-4 py-2 border-l-2 border-[#B79A62] backdrop-blur-sm">
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#B79A62] font-semibold">
                  Dongcheng District · Beijing
                </p>
                <p className="text-xs font-serif-chinese text-[#E8E4DC]">
                  北京市东城区珠市口东大街19号
                </p>
              </div>
            </div>

            {/* Subtle Gold Offset Border Accent */}
            <div className="absolute -top-4 -left-4 w-28 h-28 border-t-2 border-l-2 border-[#B79A62]/60 pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Narrative & Verified Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="space-y-6 text-[#1A1816] text-sm sm:text-base leading-relaxed font-sans-clean font-light">
              <p className="text-[#111111] font-normal leading-relaxed text-base sm:text-lg font-serif-luxury">
                {t.introP1}
              </p>
              <p className="text-[#706B64] leading-relaxed">
                {t.introP2}
              </p>
            </div>

            {/* Verified Fact Metrics Grid */}
            <div className="grid grid-cols-2 gap-6 mt-10 pt-8 border-t border-[#D8D0C3]">
              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-[#FFFFFF] border border-[#D8D0C3] text-[#B79A62] shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-serif-luxury font-medium text-[#111111]">
                    316
                  </span>
                  <span className="text-xs text-[#706B64] tracking-wide font-sans-clean">
                    {t.statRooms}
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-[#FFFFFF] border border-[#D8D0C3] text-[#B79A62] shrink-0">
                  <Train className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-serif-luxury font-medium text-[#111111]">
                    150m
                  </span>
                  <span className="text-xs text-[#706B64] tracking-wide font-sans-clean">
                    {t.statSubway}
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-[#FFFFFF] border border-[#D8D0C3] text-[#B79A62] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-serif-luxury font-medium text-[#111111]">
                    24h
                  </span>
                  <span className="text-xs text-[#706B64] tracking-wide font-sans-clean">
                    {t.statFrontDesk}
                  </span>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2.5 bg-[#FFFFFF] border border-[#D8D0C3] text-[#B79A62] shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-serif-luxury font-medium text-[#111111]">
                    800m
                  </span>
                  <span className="text-xs text-[#706B64] tracking-wide font-sans-clean">
                    {t.statHeritage}
                  </span>
                </div>
              </div>
            </div>

            {/* Inquire Action Button */}
            <div className="mt-8">
              <button
                type="button"
                id="intro-enquire-btn"
                onClick={onOpenEnquiry}
                className="inline-flex items-center space-x-2 text-xs tracking-[0.18em] uppercase font-semibold text-[#111111] border-b-2 border-[#6F1D1B] pb-1 hover:text-[#6F1D1B] transition-colors"
              >
                <span>{lang === 'zh' ? '了解更多客房预订与接待信息' : 'DISCOVER RESERVATION OPTIONS'}</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
