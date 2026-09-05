import React, { useState } from 'react';
import { verifiedRooms, RoomCategory, translations } from '../data/hotelConfig';
import { RoomDetailModal } from './RoomDetailModal';
import { Maximize2, Bed, ArrowRight, Eye, Calendar } from 'lucide-react';

interface RoomsSectionProps {
  lang: 'en' | 'zh';
  onEnquireRoom: (roomName: string) => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({ lang, onEnquireRoom }) => {
  const [selectedRoom, setSelectedRoom] = useState<RoomCategory | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'rooms' | 'suites'>('all');
  const t = translations[lang];

  const filteredRooms = verifiedRooms.filter((room) => {
    if (filterType === 'rooms') return !room.id.includes('suite');
    if (filterType === 'suites') return room.id.includes('suite');
    return true;
  });

  return (
    <section
      id="rooms"
      className="py-24 sm:py-32 bg-[#FFFFFF] text-[#1A1816] relative border-t border-[#D8D0C3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B79A62]" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#B79A62] uppercase font-semibold">
              {t.roomsEyebrow}
            </span>
            <span className="w-8 h-[1px] bg-[#B79A62]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.06em] font-serif-luxury text-[#111111] mb-3">
            {t.roomsTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#6F1D1B] font-serif-chinese italic tracking-wider">
            {t.roomsSub}
          </p>

          {/* Category Filter Tabs */}
          <div className="flex items-center space-x-2 mt-8 p-1 bg-[#F5F1E8] border border-[#D8D0C3]">
            <button
              type="button"
              onClick={() => setFilterType('all')}
              className={`px-5 py-1.5 text-xs tracking-widest uppercase transition-colors font-medium ${
                filterType === 'all'
                  ? 'bg-[#111111] text-white'
                  : 'text-[#706B64] hover:text-[#111111]'
              }`}
            >
              {lang === 'zh' ? '全部客房' : 'ALL ACCOMMODATIONS'}
            </button>
            <button
              type="button"
              onClick={() => setFilterType('rooms')}
              className={`px-5 py-1.5 text-xs tracking-widest uppercase transition-colors font-medium ${
                filterType === 'rooms'
                  ? 'bg-[#111111] text-white'
                  : 'text-[#706B64] hover:text-[#111111]'
              }`}
            >
              {lang === 'zh' ? '标准与豪华客房' : 'GUEST ROOMS'}
            </button>
            <button
              type="button"
              onClick={() => setFilterType('suites')}
              className={`px-5 py-1.5 text-xs tracking-widest uppercase transition-colors font-medium ${
                filterType === 'suites'
                  ? 'bg-[#111111] text-white'
                  : 'text-[#706B64] hover:text-[#111111]'
              }`}
            >
              {lang === 'zh' ? '行政与商务套房' : 'SUITES'}
            </button>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredRooms.map((room) => (
            <div
              key={room.id}
              className="group bg-[#FFFFFF] border border-[#D8D0C3] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-[#B79A62]/70"
            >
              {/* Room Image Container */}
              <div className="relative overflow-hidden aspect-[16/10] bg-[#0D0D0D]">
                <img
                  src={room.image}
                  alt={lang === 'zh' ? room.nameCN : room.nameEN}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Size Badge */}
                <div className="absolute top-4 right-4 bg-[#111111]/80 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 border-l-2 border-[#B79A62] font-mono">
                  {room.size}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-normal font-serif-luxury text-[#111111] group-hover:text-[#6F1D1B] transition-colors">
                    {lang === 'zh' ? room.nameCN : room.nameEN}
                  </h3>

                  <div className="text-xs text-[#706B64] font-serif-chinese mt-1">
                    {lang === 'zh' ? room.nameEN : room.nameCN}
                  </div>

                  <p className="text-xs sm:text-sm text-[#706B64] leading-relaxed mt-3 line-clamp-2 font-sans-clean font-light">
                    {lang === 'zh' ? room.descriptionCN : room.descriptionEN}
                  </p>

                  {/* Key specs */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-[#ECE7DD] text-[11px] text-[#1A1816]">
                    <div className="flex items-center space-x-1.5 text-[#706B64]">
                      <Maximize2 className="w-3.5 h-3.5 text-[#B79A62]" />
                      <span>{room.size}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-[#706B64] truncate">
                      <Bed className="w-3.5 h-3.5 text-[#B79A62] shrink-0" />
                      <span className="truncate">{lang === 'zh' ? room.bedCN : room.bedEN}</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-[#ECE7DD] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedRoom(room)}
                    className="inline-flex items-center space-x-1 text-xs uppercase tracking-wider text-[#706B64] hover:text-[#111111] transition-colors font-medium"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#B79A62]" />
                    <span>{t.viewDetails}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onEnquireRoom(lang === 'zh' ? room.nameCN : room.nameEN)}
                    className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-wider text-[#111111] font-semibold hover:text-[#6F1D1B] transition-colors"
                  >
                    <span>{t.enquireRoom}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B79A62] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={selectedRoom}
        lang={lang}
        onClose={() => setSelectedRoom(null)}
        onEnquire={(roomName) => onEnquireRoom(roomName)}
      />
    </section>
  );
};
