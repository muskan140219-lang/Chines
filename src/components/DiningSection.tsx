import React from 'react';
import { hotel, translations } from '../data/hotelConfig';
import { Clock, UtensilsCrossed, Users, Check } from 'lucide-react';

interface DiningSectionProps {
  lang: 'en' | 'zh';
  onOpenDiningEnquiry: () => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ lang, onOpenDiningEnquiry }) => {
  const t = translations[lang];

  return (
    <section
      id="dining"
      className="py-24 sm:py-32 bg-[#FFFFFF] text-[#1A1816] relative border-t border-[#D8D0C3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B79A62]" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#B79A62] uppercase font-semibold">
              {t.diningEyebrow}
            </span>
            <span className="w-8 h-[1px] bg-[#B79A62]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.06em] font-serif-luxury text-[#111111] mb-4">
            {t.diningTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#6F1D1B] font-serif-chinese italic tracking-wider">
            {t.diningSub}
          </p>
        </div>

        {/* Editorial Dining Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Service Details */}
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-center">
            <div className="space-y-5 text-sm sm:text-base leading-relaxed font-sans-clean font-light text-[#1A1816]">
              <p className="text-base sm:text-lg text-[#111111] font-serif-luxury font-normal leading-relaxed">
                {t.diningP1}
              </p>
              <p className="text-[#706B64]">
                {t.diningP2}
              </p>
            </div>

            {/* Dining Highlights Box */}
            <div className="mt-8 p-6 bg-[#F5F1E8] border border-[#D8D0C3] space-y-4">
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#111111]">
                <span className="p-1.5 bg-[#FFFFFF] border border-[#D8D0C3] text-[#B79A62]">
                  <Clock className="w-4 h-4" />
                </span>
                <span>{t.breakfastBuffet}</span>
              </div>

              <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#111111]">
                <span className="p-1.5 bg-[#FFFFFF] border border-[#D8D0C3] text-[#B79A62]">
                  <UtensilsCrossed className="w-4 h-4" />
                </span>
                <span>{t.allDayService}</span>
              </div>

              <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#111111]">
                <span className="p-1.5 bg-[#FFFFFF] border border-[#D8D0C3] text-[#B79A62]">
                  <Users className="w-4 h-4" />
                </span>
                <span>{t.privateRooms}</span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex items-center space-x-4">
              <button
                type="button"
                id="dining-enquire-btn"
                onClick={onOpenDiningEnquiry}
                className="inline-flex items-center justify-center space-x-2 bg-[#111111] hover:bg-[#6F1D1B] text-white px-7 py-3 text-xs tracking-[0.18em] uppercase font-semibold transition-all duration-300"
              >
                <span>{t.enquireDining}</span>
                <span>→</span>
              </button>

              <a
                href={hotel.phoneTel}
                className="text-xs tracking-wider uppercase text-[#706B64] hover:text-[#111111] font-medium transition-colors"
              >
                {hotel.phoneDisplay}
              </a>
            </div>
          </div>

          {/* Right Column: Imagery with layered composition */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-[#D8D0C3] p-2 bg-white shadow-lg">
                <div className="overflow-hidden aspect-[4/5]">
                  <img
                    src={hotel.images.dining}
                    alt="Tailong Chinese & Western Restaurant"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="text-[10px] tracking-wider uppercase text-[#706B64] text-center mt-2 font-mono">
                  {lang === 'zh' ? '泰龙餐厅雅席' : 'Tailong Dining'}
                </p>
              </div>

              <div className="border border-[#D8D0C3] p-2 bg-white shadow-lg mt-6 sm:mt-10">
                <div className="overflow-hidden aspect-[4/5]">
                  <img
                    src={hotel.images.diningTea}
                    alt="Chinese Tea and Banquet Details"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="text-[10px] tracking-wider uppercase text-[#706B64] text-center mt-2 font-mono">
                  {lang === 'zh' ? '中式品茗与宴叙' : 'Tea & Banquet Culture'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
