import React from 'react';
import { hotel, translations } from '../data/hotelConfig';
import { Briefcase, Presentation, Monitor, Mail } from 'lucide-react';

interface BusinessEventsProps {
  lang: 'en' | 'zh';
  onOpenBusinessEnquiry: () => void;
}

export const BusinessEvents: React.FC<BusinessEventsProps> = ({
  lang,
  onOpenBusinessEnquiry
}) => {
  const t = translations[lang];

  return (
    <section
      id="business-events"
      className="py-20 sm:py-28 bg-[#0D0D0D] text-white relative overflow-hidden"
    >
      {/* Background Architectural Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={hotel.images.meeting}
          alt="Conference and Meeting Facilities"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0D0D0D]/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B79A62]" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#B79A62] uppercase font-semibold">
              {t.businessEyebrow}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.06em] font-serif-luxury text-white mb-3">
            {t.businessTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#B79A62] font-serif-chinese italic tracking-wider mb-6">
            {t.businessSub}
          </p>

          <p className="text-sm sm:text-base text-[#D8D0C3] font-sans-clean font-light leading-relaxed mb-10">
            {t.businessP1}
          </p>

          {/* Key verified business features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 pt-6 border-t border-[#2A2621]">
            <div className="flex items-start space-x-3">
              <Presentation className="w-5 h-5 text-[#B79A62] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-white">
                  {lang === 'zh' ? '多功能会议厅' : 'Multifunction Halls'}
                </h4>
                <p className="text-xs text-[#706B64] mt-1">
                  {lang === 'zh' ? '支持报告会、研讨会及讲座' : 'Flexible layouts for seminars & assemblies'}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Monitor className="w-5 h-5 text-[#B79A62] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-white">
                  {lang === 'zh' ? '视听设备支持' : 'Audiovisual Aids'}
                </h4>
                <p className="text-xs text-[#706B64] mt-1">
                  {lang === 'zh' ? '投影视讯与音响设备协调' : 'Projection, sound & meeting connectivity'}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Briefcase className="w-5 h-5 text-[#B79A62] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-white">
                  {lang === 'zh' ? '商务接待与茶歇' : 'Catering & Tea Breaks'}
                </h4>
                <p className="text-xs text-[#706B64] mt-1">
                  {lang === 'zh' ? '泰龙餐厅专业餐饮配合' : 'Coordinated by Tailong Restaurant'}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              id="business-enquire-btn"
              onClick={onOpenBusinessEnquiry}
              className="inline-flex items-center justify-center space-x-2 bg-[#B79A62] hover:bg-[#C8AD78] text-[#111111] px-8 py-3.5 text-xs sm:text-sm tracking-[0.18em] uppercase font-semibold transition-all duration-300 shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>{t.businessCTA}</span>
            </button>

            <a
              href={hotel.phoneTel}
              className="inline-flex items-center justify-center border border-[#333] hover:border-[#B79A62] text-white hover:text-[#B79A62] px-6 py-3.5 text-xs tracking-widest uppercase transition-colors"
            >
              {hotel.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
