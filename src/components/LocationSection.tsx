import React, { useState } from 'react';
import { hotel, translations } from '../data/hotelConfig';
import { MapPin, Phone, ExternalLink, Copy, Check, Navigation, Train, Plane } from 'lucide-react';

interface LocationSectionProps {
  lang: 'en' | 'zh';
}

export const LocationSection: React.FC<LocationSectionProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const t = translations[lang];

  const handleCopyAddress = () => {
    const addressToCopy = `${hotel.nameCN} (${hotel.nameEN})\n${hotel.address.fullAddressCN}\n${hotel.address.fullAddressEN}\nTel: ${hotel.phone}`;
    navigator.clipboard.writeText(addressToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section
      id="location"
      className="py-24 sm:py-32 bg-[#FFFFFF] text-[#1A1816] relative border-t border-[#D8D0C3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B79A62]" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#B79A62] uppercase font-semibold">
              {t.locationEyebrow}
            </span>
            <span className="w-8 h-[1px] bg-[#B79A62]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.06em] font-serif-luxury text-[#111111] mb-3">
            {t.locationTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#6F1D1B] font-serif-chinese italic tracking-wider">
            {t.locationSub}
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Contact & Transit Guide */}
          <div className="lg:col-span-5 bg-[#F5F1E8] border border-[#D8D0C3] p-8 flex flex-col justify-between">
            <div>
              <div className="border-b border-[#D8D0C3] pb-6 mb-6">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#B79A62] font-semibold">
                  {lang === 'zh' ? '酒店确切地址' : 'VERIFIED PROPERTY ADDRESS'}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif-chinese text-[#111111] mt-1 font-medium">
                  {hotel.nameCN}
                </h3>
                <p className="text-xs sm:text-sm font-serif-luxury text-[#706B64] mt-0.5">
                  {hotel.nameEN}
                </p>

                <p className="text-sm font-medium text-[#111111] mt-4">
                  {hotel.address.fullAddressCN}
                </p>
                <p className="text-xs text-[#706B64] font-sans-clean mt-1">
                  {hotel.address.fullAddressEN}
                </p>

                <div className="flex items-center space-x-2 text-xs text-[#B79A62] font-mono mt-3">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{hotel.coordinates}</span>
                </div>
              </div>

              {/* Transit Details */}
              <div className="space-y-4 text-xs text-[#1A1816]">
                <div className="flex items-start space-x-3">
                  <Train className="w-4 h-4 text-[#B79A62] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#111111] block">
                      {lang === 'zh' ? '地铁线路 (Subway)' : 'Subway Lines 7 & 8'}
                    </span>
                    <span className="text-[#706B64]">
                      {lang === 'zh' ? hotel.subway.stationCN : hotel.subway.stationEN} · {lang === 'zh' ? hotel.subway.exitCN : hotel.subway.exitEN}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Navigation className="w-4 h-4 text-[#B79A62] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#111111] block">
                      {lang === 'zh' ? '主要火车站' : 'Railway Connections'}
                    </span>
                    <span className="text-[#706B64]">
                      {lang === 'zh'
                        ? '距北京站约3.5公里；距北京西站乘坐7号线直达约20分钟'
                        : 'Beijing Railway Station ~3.5km; Beijing West Station direct via Line 7 (~20 mins)'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Plane className="w-4 h-4 text-[#B79A62] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#111111] block">
                      {lang === 'zh' ? '首都及大兴国际机场' : 'Airport Access'}
                    </span>
                    <span className="text-[#706B64]">
                      {lang === 'zh'
                        ? '首都国际机场约32公里 (车程约40-50分钟)；大兴国际机场约45公里'
                        : 'Beijing Capital Airport ~32km (~45 mins drive); Beijing Daxing Airport ~45km'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-8 border-t border-[#D8D0C3] space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={hotel.googleMapsURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-1.5 bg-[#111111] hover:bg-[#6F1D1B] text-white py-3 px-3 text-xs tracking-wider uppercase font-semibold transition-colors text-center"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#B79A62]" />
                  <span>{t.getDirections}</span>
                </a>

                <a
                  href={hotel.phoneTel}
                  className="inline-flex items-center justify-center space-x-1.5 border border-[#111111] hover:border-[#B79A62] text-[#111111] hover:text-[#B79A62] py-3 px-3 text-xs tracking-wider uppercase font-semibold transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t.callHotel}</span>
                </a>
              </div>

              <button
                type="button"
                id="copy-address-btn"
                onClick={handleCopyAddress}
                className="w-full flex items-center justify-center space-x-2 border border-[#D8D0C3] bg-[#FFFFFF] hover:bg-[#F5F1E8] text-[#1A1816] py-2.5 text-xs tracking-wider uppercase font-medium transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 text-[#B79A62]" />}
                <span>{copied ? t.addressCopied : t.copyAddress}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Styled Map Representation & External Google Maps Card */}
          <div className="lg:col-span-7 bg-[#0D0D0D] border border-[#D8D0C3] p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden group">
            {/* Map Graphical Presentation */}
            <div className="relative w-full h-80 sm:h-96 bg-[#161616] border border-[#2A2621] overflow-hidden flex items-center justify-center">
              {/* Map grid lines simulation */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(#B79A62 1px, transparent 1px), radial-gradient(#B79A62 1px, #161616 1px)`,
                  backgroundSize: '32px 32px',
                  backgroundPosition: '0 0, 16px 16px'
                }}
              />

              {/* Stylized Street Grid Lines */}
              <svg className="absolute inset-0 w-full h-full stroke-[#B79A62]/20" strokeWidth="1.5" fill="none">
                {/* East Avenue Zhushikou */}
                <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#B79A62" strokeWidth="2.5" />
                <line x1="30%" y1="0" x2="30%" y2="100%" />
                <line x1="70%" y1="0" x2="70%" y2="100%" stroke="#6F1D1B" strokeWidth="2" />
                {/* Subway Line 7 */}
                <line x1="0" y1="52%" x2="100%" y2="52%" stroke="#B79A62" strokeDasharray="4,4" />
                {/* Subway Line 8 */}
                <line x1="45%" y1="0" x2="45%" y2="100%" stroke="#B79A62" strokeDasharray="4,4" />
              </svg>

              {/* Hotel Pin Marker */}
              <div className="relative z-10 flex flex-col items-center animate-pulse">
                <div className="w-12 h-12 rounded-full bg-[#6F1D1B] border-2 border-[#B79A62] flex items-center justify-center text-white shadow-2xl">
                  <MapPin className="w-6 h-6 text-[#B79A62]" />
                </div>
                <div className="mt-2 bg-[#111111]/95 text-white px-3 py-1.5 border border-[#B79A62] text-center shadow-xl">
                  <p className="text-xs font-serif-chinese font-semibold tracking-wider text-[#B79A62]">
                    北京京泰龙国际大酒店
                  </p>
                  <p className="text-[10px] text-[#D8D0C3] uppercase tracking-widest font-mono">
                    No. 19 Zhushikou East Ave
                  </p>
                </div>
              </div>

              {/* Metro Station Indicator */}
              <div className="absolute left-[38%] top-[38%] bg-[#111111]/80 text-[#B79A62] text-[10px] px-2 py-0.5 border border-[#444]">
                <span>{lang === 'zh' ? '珠市口站 (7/8号线)' : 'Zhushikou Stn (L7/8)'}</span>
              </div>

              {/* Qianmen Direction Indicator */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase text-[#706B64] font-mono">
                ↑ {lang === 'zh' ? '前门大街 / 天安门方向' : 'North to Qianmen & Tiananmen'}
              </div>

              {/* Tiantan Direction Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] tracking-widest uppercase text-[#706B64] font-mono">
                ↓ {lang === 'zh' ? '天坛公园方向' : 'South to Temple of Heaven'}
              </div>
            </div>

            {/* Bottom Google Maps Anchor Prompt */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#2A2621]">
              <div className="text-left">
                <p className="text-xs text-[#D8D0C3] font-medium">
                  {lang === 'zh' ? '已收录于 Google Maps 官方商业档案' : 'Verified Google Maps Business Profile'}
                </p>
                <p className="text-[11px] text-[#706B64]">
                  {hotel.googleMapsURL}
                </p>
              </div>

              <a
                href={hotel.googleMapsURL}
                target="_blank"
                rel="noopener noreferrer"
                id="location-google-maps-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#B79A62] hover:bg-[#C8AD78] text-[#111111] px-6 py-2.5 text-xs tracking-widest uppercase font-semibold transition-colors"
              >
                <span>{t.openGoogleMaps}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
