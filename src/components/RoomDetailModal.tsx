import React from 'react';
import { RoomCategory, hotel, translations } from '../data/hotelConfig';
import { X, Check, Bed, Maximize2, Users, Calendar } from 'lucide-react';

interface RoomDetailModalProps {
  room: RoomCategory | null;
  lang: 'en' | 'zh';
  onClose: () => void;
  onEnquire: (roomName: string) => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  lang,
  onClose,
  onEnquire
}) => {
  if (!room) return null;
  const t = translations[lang];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#000000]/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-[#FFFFFF] border border-[#D8D0C3] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label={t.modalClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[#111111]/80 hover:bg-[#111111] text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Room Modal Header Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#0D0D0D]">
          <img
            src={room.image}
            alt={lang === 'zh' ? room.nameCN : room.nameEN}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[11px] tracking-[0.25em] text-[#B79A62] uppercase font-semibold">
              {hotel.nameEN} · {hotel.address.districtEN}
            </span>
            <h3 className="text-2xl sm:text-3xl font-light font-serif-luxury mt-1">
              {lang === 'zh' ? room.nameCN : room.nameEN}
            </h3>
            <p className="text-sm font-serif-chinese text-[#D8D0C3] mt-0.5">
              {lang === 'zh' ? room.nameEN : room.nameCN}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {/* Key Metric Specs */}
          <div className="grid grid-cols-3 gap-4 pb-6 mb-6 border-b border-[#ECE7DD] text-center">
            <div className="flex flex-col items-center">
              <Maximize2 className="w-4 h-4 text-[#B79A62] mb-1" />
              <span className="text-[11px] uppercase tracking-wider text-[#706B64]">{t.roomSize}</span>
              <span className="text-sm sm:text-base font-medium text-[#111111]">{room.size}</span>
            </div>
            <div className="flex flex-col items-center">
              <Bed className="w-4 h-4 text-[#B79A62] mb-1" />
              <span className="text-[11px] uppercase tracking-wider text-[#706B64]">{t.roomBed}</span>
              <span className="text-sm sm:text-base font-medium text-[#111111]">
                {lang === 'zh' ? room.bedCN : room.bedEN}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-4 h-4 text-[#B79A62] mb-1" />
              <span className="text-[11px] uppercase tracking-wider text-[#706B64]">{t.roomOccupancy}</span>
              <span className="text-sm sm:text-base font-medium text-[#111111]">
                {lang === 'zh' ? room.occupancyCN : room.occupancyEN}
              </span>
            </div>
          </div>

          {/* Room Narrative Description */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#706B64] mb-2">
              {lang === 'zh' ? '房型概览' : 'ROOM OVERVIEW'}
            </h4>
            <p className="text-sm sm:text-base text-[#1A1816] leading-relaxed font-sans-clean font-light">
              {lang === 'zh' ? room.descriptionCN : room.descriptionEN}
            </p>
          </div>

          {/* Verified Amenities */}
          <div className="mb-8">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#706B64] mb-3">
              {lang === 'zh' ? '客房核验设施与服务' : 'VERIFIED IN-ROOM AMENITIES'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {(lang === 'zh' ? room.amenitiesCN : room.amenitiesEN).map((amenity, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-[#1A1816]">
                  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#B79A62]/15 text-[#B79A62] shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#ECE7DD]">
            <div className="text-xs text-[#706B64]">
              <span>{hotel.phoneDisplay} · 24h Front Desk</span>
            </div>
            <div className="flex items-center space-x-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 sm:w-auto px-5 py-2.5 border border-[#D8D0C3] text-xs uppercase tracking-wider text-[#706B64] hover:text-[#111111] transition-colors"
              >
                {t.modalClose}
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onEnquire(lang === 'zh' ? room.nameCN : room.nameEN);
                }}
                className="w-1/2 sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-[#B79A62] hover:bg-[#C8AD78] text-[#111111] text-xs uppercase tracking-widest font-semibold transition-all shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{t.enquireRoom}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
