import React from 'react';
import { verifiedFacilities, translations } from '../data/hotelConfig';
import { Clock, Wifi, Utensils, Briefcase, ShieldCheck, Sparkles } from 'lucide-react';

interface FacilitiesSectionProps {
  lang: 'en' | 'zh';
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#B79A62]" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-[#B79A62]" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-[#B79A62]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#B79A62]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#B79A62]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#B79A62]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#B79A62]" />;
    }
  };

  return (
    <section
      id="facilities"
      className="py-24 sm:py-32 bg-[#F5F1E8] text-[#1A1816] relative border-t border-[#D8D0C3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B79A62]" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#B79A62] uppercase font-semibold">
              {t.facilitiesEyebrow}
            </span>
            <span className="w-8 h-[1px] bg-[#B79A62]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.06em] font-serif-luxury text-[#111111] mb-4">
            {t.facilitiesTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#6F1D1B] font-serif-chinese italic tracking-wider">
            {t.facilitiesSub}
          </p>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {verifiedFacilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-[#FFFFFF] border border-[#D8D0C3] p-8 transition-all duration-300 hover:shadow-lg hover:border-[#B79A62] flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 bg-[#F5F1E8] border border-[#D8D0C3] flex items-center justify-center mb-6 group-hover:border-[#B79A62] transition-colors">
                  {getIcon(facility.iconName)}
                </div>

                <h3 className="text-lg font-normal font-serif-luxury text-[#111111] group-hover:text-[#6F1D1B] transition-colors mb-2">
                  {lang === 'zh' ? facility.titleCN : facility.titleEN}
                </h3>

                <p className="text-xs sm:text-sm text-[#706B64] leading-relaxed font-sans-clean font-light">
                  {lang === 'zh' ? facility.descriptionCN : facility.descriptionEN}
                </p>
              </div>

              <div className="w-6 h-[1.5px] bg-[#B79A62]/40 mt-6 group-hover:w-12 group-hover:bg-[#B79A62] transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
