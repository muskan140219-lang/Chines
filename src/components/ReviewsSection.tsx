import React from 'react';
import { authenticFeedbackThemes, translations } from '../data/hotelConfig';
import { Star, ShieldCheck, MapPin, Sparkles, Clock, AlertCircle } from 'lucide-react';

interface ReviewsSectionProps {
  lang: 'en' | 'zh';
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section
      id="reviews"
      className="py-24 sm:py-32 bg-[#F5F1E8] text-[#1A1816] relative border-t border-[#D8D0C3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B79A62]" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#B79A62] uppercase font-semibold">
              {t.reviewsEyebrow}
            </span>
            <span className="w-8 h-[1px] bg-[#B79A62]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.06em] font-serif-luxury text-[#111111] mb-4">
            {t.reviewsTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#6F1D1B] font-serif-chinese italic tracking-wider mb-4">
            {t.reviewsSub}
          </p>

          <p className="text-xs sm:text-sm text-[#706B64] max-w-2xl leading-relaxed font-sans-clean font-light">
            {t.feedbackNotice}
          </p>
        </div>

        {/* Verified Aggregate Metric Bar */}
        <div className="bg-[#FFFFFF] border border-[#D8D0C3] p-8 mb-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center divide-y md:divide-y-0 md:divide-x divide-[#D8D0C3]">
            <div className="flex flex-col items-center py-2 md:py-0">
              <span className="text-[11px] uppercase tracking-widest text-[#706B64] font-semibold mb-1">
                {lang === 'zh' ? '综合好评核验' : 'OVERALL RATING'}
              </span>
              <span className="text-3xl sm:text-4xl font-serif-luxury font-medium text-[#111111]">
                {authenticFeedbackThemes.verifiedScore}
              </span>
              <span className="text-[11px] text-[#706B64] mt-1">
                {lang === 'zh' ? '公开旅行平台综合评分' : authenticFeedbackThemes.verifiedSource}
              </span>
            </div>

            <div className="flex flex-col items-center py-2 md:py-0">
              <div className="flex items-center space-x-1 text-[#B79A62] mb-1">
                <MapPin className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-widest text-[#706B64] font-semibold">
                  {lang === 'zh' ? '位置便利度' : 'LOCATION SCORE'}
                </span>
              </div>
              <span className="text-3xl sm:text-4xl font-serif-luxury font-medium text-[#111111]">
                {authenticFeedbackThemes.locationScore}
              </span>
              <span className="text-[11px] text-[#706B64] mt-1">
                {lang === 'zh' ? '邻近前门与珠市口双线地铁' : 'Adjacent to Qianmen & Metro Line 7/8'}
              </span>
            </div>

            <div className="flex flex-col items-center py-2 md:py-0">
              <div className="flex items-center space-x-1 text-[#B79A62] mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-[11px] uppercase tracking-widest text-[#706B64] font-semibold">
                  {lang === 'zh' ? '客房舒适度' : 'CLEANLINESS & COMFORT'}
                </span>
              </div>
              <span className="text-3xl sm:text-4xl font-serif-luxury font-medium text-[#111111]">
                {authenticFeedbackThemes.cleanlinessScore}
              </span>
              <span className="text-[11px] text-[#706B64] mt-1">
                {lang === 'zh' ? '开阔尺度与静音保障' : 'Generous room layouts & bed comfort'}
              </span>
            </div>
          </div>
        </div>

        {/* Transparent Guest Theme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {authenticFeedbackThemes.themes.map((theme, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] border border-[#D8D0C3] p-8 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-2 text-[#B79A62] text-xs uppercase tracking-widest font-semibold mb-3">
                  {index === 3 ? (
                    <AlertCircle className="w-4 h-4 text-[#706B64]" />
                  ) : (
                    <ShieldCheck className="w-4 h-4 text-[#B79A62]" />
                  )}
                  <span>{lang === 'zh' ? '真实主题归纳' : 'AUTHENTIC THEME'}</span>
                </div>

                <h3 className="text-xl font-normal font-serif-luxury text-[#111111] mb-3">
                  {lang === 'zh' ? theme.titleCN : theme.titleEN}
                </h3>

                <p className="text-xs sm:text-sm text-[#706B64] leading-relaxed font-sans-clean font-light">
                  {lang === 'zh' ? theme.textCN : theme.textEN}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#ECE7DD] flex items-center justify-between text-[11px] text-[#A59F95]">
                <span>{lang === 'zh' ? 'verified客评提炼' : 'Verified Guest Feedback Digest'}</span>
                <span>Jingtailong Hotel</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
