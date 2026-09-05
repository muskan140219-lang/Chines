import React from 'react';
import { nearbyAttractions, translations, hotel } from '../data/hotelConfig';
import { MapPin, Navigation, ArrowUpRight } from 'lucide-react';

interface ExperienceSectionProps {
  lang: 'en' | 'zh';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 bg-[#F5F1E8] text-[#1A1816] relative border-t border-[#D8D0C3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B79A62]" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#B79A62] uppercase font-semibold">
              {t.expEyebrow}
            </span>
            <span className="w-8 h-[1px] bg-[#B79A62]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.06em] font-serif-luxury text-[#111111] mb-4">
            {t.expTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#6F1D1B] font-serif-chinese italic tracking-wider mb-4">
            {t.expSub}
          </p>

          <p className="text-xs sm:text-sm text-[#706B64] max-w-2xl leading-relaxed font-sans-clean font-light">
            {t.expP1}
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nearbyAttractions.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFFFFF] border border-[#D8D0C3] overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:border-[#B79A62]"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0D0D0D]">
                  <img
                    src={item.image}
                    alt={lang === 'zh' ? item.nameCN : item.nameEN}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#111111]/85 text-white text-[10px] px-2.5 py-1 tracking-wider uppercase font-mono border-l-2 border-[#B79A62]">
                    {lang === 'zh' ? item.timeCN : item.timeEN}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center space-x-1 text-[#B79A62] text-[11px] font-medium mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{lang === 'zh' ? item.distanceCN : item.distanceEN}</span>
                  </div>

                  <h3 className="text-base font-medium font-serif-luxury text-[#111111] group-hover:text-[#6F1D1B] transition-colors leading-snug mb-2">
                    {lang === 'zh' ? item.nameCN : item.nameEN}
                  </h3>

                  <p className="text-xs text-[#706B64] leading-relaxed font-sans-clean font-light line-clamp-3">
                    {lang === 'zh' ? item.descriptionCN : item.descriptionEN}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={hotel.googleMapsURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-xs text-[#111111] font-medium hover:text-[#B79A62] transition-colors uppercase tracking-wider"
                >
                  <span>{t.viewOnMap}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B79A62]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Location Banner Bar */}
        <div className="mt-12 bg-[#FFFFFF] border border-[#D8D0C3] p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-[#F5F1E8] border border-[#D8D0C3] text-[#B79A62]">
              <Navigation className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-[#706B64] uppercase tracking-widest font-semibold">
                {lang === 'zh' ? '地铁直达换乘枢纽' : 'METRO INTERCHANGE'}
              </p>
              <p className="text-sm font-serif-luxury font-medium text-[#111111]">
                {lang === 'zh' ? hotel.subway.stationCN : hotel.subway.stationEN} · {lang === 'zh' ? hotel.subway.exitCN : hotel.subway.exitEN}
              </p>
            </div>
          </div>

          <a
            href={hotel.googleMapsURL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-[#111111] hover:bg-[#6F1D1B] text-white px-6 py-3 text-xs tracking-widest uppercase font-semibold transition-colors"
          >
            <span>{t.openGoogleMaps}</span>
            <ArrowUpRight className="w-4 h-4 text-[#B79A62]" />
          </a>
        </div>
      </div>
    </section>
  );
};
