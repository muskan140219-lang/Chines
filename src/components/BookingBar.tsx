import React, { useState } from 'react';
import { hotel, verifiedRooms, translations } from '../data/hotelConfig';
import { Calendar, Users, Home, Search, Info } from 'lucide-react';

interface BookingBarProps {
  lang: 'en' | 'zh';
  onSearch: (criteria: BookingCriteria) => void;
}

export interface BookingCriteria {
  checkIn: string;
  checkOut: string;
  roomType: string;
  guests: string;
  rooms: string;
}

export const BookingBar: React.FC<BookingBarProps> = ({ lang, onSearch }) => {
  const t = translations[lang];

  // Initialize with tomorrow and day after tomorrow
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(dayAfter.getDate() + 2);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(dayAfter));
  const [roomType, setRoomType] = useState('all');
  const [guests, setGuests] = useState('2');
  const [roomsCount, setRoomsCount] = useState('1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hotel.bookingURL && hotel.bookingURL.trim().length > 0) {
      window.open(hotel.bookingURL, '_blank', 'noopener,noreferrer');
      return;
    }
    // Launch reservation enquiry modal with selected details
    onSearch({
      checkIn,
      checkOut,
      roomType,
      guests,
      rooms: roomsCount
    });
  };

  return (
    <div
      id="booking-panel"
      className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 -mt-8 sm:-mt-12"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-[#FFFFFF] border border-[#D8D0C3] shadow-2xl p-4 sm:p-6 md:p-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 items-end">
          {/* Check-In Date */}
          <div className="flex flex-col space-y-1.5">
            <label
              htmlFor="booking-checkin"
              className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#706B64] flex items-center space-x-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B79A62]" />
              <span>{t.checkInLabel}</span>
            </label>
            <input
              id="booking-checkin"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-[#F5F1E8] border border-[#D8D0C3] px-3.5 py-2.5 text-sm text-[#1A1816] focus:outline-none focus:border-[#B79A62] font-sans-clean"
              required
            />
          </div>

          {/* Check-Out Date */}
          <div className="flex flex-col space-y-1.5">
            <label
              htmlFor="booking-checkout"
              className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#706B64] flex items-center space-x-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#B79A62]" />
              <span>{t.checkOutLabel}</span>
            </label>
            <input
              id="booking-checkout"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-[#F5F1E8] border border-[#D8D0C3] px-3.5 py-2.5 text-sm text-[#1A1816] focus:outline-none focus:border-[#B79A62] font-sans-clean"
              required
            />
          </div>

          {/* Room Type Preference */}
          <div className="flex flex-col space-y-1.5">
            <label
              htmlFor="booking-roomtype"
              className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#706B64] flex items-center space-x-1.5"
            >
              <Home className="w-3.5 h-3.5 text-[#B79A62]" />
              <span>{t.roomTypeLabel}</span>
            </label>
            <select
              id="booking-roomtype"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full bg-[#F5F1E8] border border-[#D8D0C3] px-3.5 py-2.5 text-sm text-[#1A1816] focus:outline-none focus:border-[#B79A62] font-sans-clean"
            >
              <option value="all">{t.allRoomTypes}</option>
              {verifiedRooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {lang === 'zh' ? room.nameCN : room.nameEN}
                </option>
              ))}
            </select>
          </div>

          {/* Guests & Rooms */}
          <div className="flex flex-col space-y-1.5">
            <label
              htmlFor="booking-guests"
              className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#706B64] flex items-center space-x-1.5"
            >
              <Users className="w-3.5 h-3.5 text-[#B79A62]" />
              <span>{t.guestsLabel}</span>
            </label>
            <select
              id="booking-guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full bg-[#F5F1E8] border border-[#D8D0C3] px-3.5 py-2.5 text-sm text-[#1A1816] focus:outline-none focus:border-[#B79A62] font-sans-clean"
            >
              <option value="1">{t.guestsOption1}</option>
              <option value="2">{t.guestsOption2}</option>
              <option value="3">{t.guestsOption3}</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex flex-col justify-end">
            <button
              type="submit"
              id="booking-submit-btn"
              className="w-full bg-[#111111] hover:bg-[#6F1D1B] text-white px-4 py-3 text-xs sm:text-sm tracking-[0.16em] uppercase font-semibold transition-all duration-300 flex items-center justify-center space-x-2 active:translate-y-0.5"
            >
              <Search className="w-4 h-4 text-[#B79A62]" />
              <span>{t.checkAvailability}</span>
            </button>
          </div>
        </div>

        {/* Transparent Booking Integration Note */}
        <div className="mt-4 pt-3 border-t border-[#ECE7DD] flex items-center justify-between text-[11px] text-[#706B64]">
          <div className="flex items-center space-x-1.5">
            <Info className="w-3.5 h-3.5 text-[#B79A62] shrink-0" />
            <span>{t.bookingIntegrationNotice}</span>
          </div>
          <a
            href={hotel.phoneTel}
            className="text-[#111111] hover:text-[#B79A62] font-medium hidden sm:inline-block"
          >
            {hotel.phoneDisplay}
          </a>
        </div>
      </form>
    </div>
  );
};
