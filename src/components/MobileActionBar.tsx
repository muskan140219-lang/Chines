import React from 'react';
import { hotel, translations } from '../data/hotelConfig';
import { Phone, MapPin, Calendar } from 'lucide-react';

interface MobileActionBarProps {
  lang: 'en' | 'zh';
  onOpenEnquiry: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({ lang, onOpenEnquiry }) => {
  const t = translations[lang];

  return (
    <aside
      id="mobile-action-bar"
      aria-label="Mobile quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0D0D0D]/95 backdrop-blur-md border-t border-[#2A2621] p-2 shadow-2xl"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* Call Hotel */}
        <a
          href={hotel.phoneTel}
          id="mobile-action-call"
          className="flex flex-col items-center justify-center min-h-[44px] py-1 text-white hover:text-[#B79A62] transition-colors active:bg-[#1A1816]"
        >
          <Phone className="w-4 h-4 text-[#B79A62] mb-0.5" />
          <span className="text-[10px] tracking-wider uppercase font-medium">
            {lang === 'zh' ? '致电酒店' : 'CALL'}
          </span>
        </a>

        {/* Map / Directions */}
        <a
          href={hotel.googleMapsURL}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-action-map"
          className="flex flex-col items-center justify-center min-h-[44px] py-1 text-white hover:text-[#B79A62] transition-colors active:bg-[#1A1816]"
        >
          <MapPin className="w-4 h-4 text-[#B79A62] mb-0.5" />
          <span className="text-[10px] tracking-wider uppercase font-medium">
            {lang === 'zh' ? '地图导航' : 'MAP'}
          </span>
        </a>

        {/* Book / Enquire */}
        <button
          type="button"
          id="mobile-action-book"
          onClick={onOpenEnquiry}
          className="flex flex-col items-center justify-center min-h-[44px] py-1 bg-[#B79A62] text-[#111111] hover:bg-[#C8AD78] transition-colors font-semibold active:opacity-90"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] tracking-wider uppercase">
            {lang === 'zh' ? '预订咨询' : 'ENQUIRE'}
          </span>
        </button>
      </div>
    </aside>
  );
};
