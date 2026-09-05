import React, { useState, useEffect } from 'react';
import { hotel, verifiedRooms, translations } from '../data/hotelConfig';
import { X, Phone, CheckCircle, Calendar, Send, Info } from 'lucide-react';
import { BookingCriteria } from './BookingBar';

interface EnquiryModalProps {
  isOpen: boolean;
  initialRoomName?: string;
  initialCriteria?: BookingCriteria | null;
  lang: 'en' | 'zh';
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  initialRoomName,
  initialCriteria,
  lang,
  onClose
}) => {
  if (!isOpen) return null;

  const t = translations[lang];

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [selectedRoom, setSelectedRoom] = useState(initialRoomName || 'all');
  const [checkIn, setCheckIn] = useState(initialCriteria?.checkIn || '');
  const [checkOut, setCheckOut] = useState(initialCriteria?.checkOut || '');
  const [guests, setGuests] = useState(initialCriteria?.guests || '2');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialRoomName) {
      setSelectedRoom(initialRoomName);
    }
  }, [initialRoomName]);

  useEffect(() => {
    if (initialCriteria) {
      if (initialCriteria.checkIn) setCheckIn(initialCriteria.checkIn);
      if (initialCriteria.checkOut) setCheckOut(initialCriteria.checkOut);
      if (initialCriteria.guests) setGuests(initialCriteria.guests);
    }
  }, [initialCriteria]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Record enquiry submission
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#000000]/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-[#FFFFFF] border border-[#D8D0C3] w-full max-w-xl max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-[#706B64] hover:text-[#111111] transition-colors"
          aria-label={t.modalClose}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="text-[10px] tracking-[0.25em] uppercase text-[#B79A62] font-semibold">
            {hotel.nameCN} · {hotel.nameEN}
          </div>
          <h3 className="text-2xl font-serif-luxury text-[#111111] font-medium mt-1">
            {t.enquiryTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#706B64] mt-1 font-sans-clean">
            {t.enquirySubtitle}
          </p>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#B79A62]/15 text-[#B79A62] flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h4 className="text-xl font-serif-luxury text-[#111111] mb-2">
              {lang === 'zh' ? '预订意向已妥善记录' : 'Enquiry Received'}
            </h4>

            <p className="text-sm text-[#706B64] max-w-md mb-6 leading-relaxed">
              {t.enquirySuccess}
            </p>

            <div className="p-4 bg-[#F5F1E8] border border-[#D8D0C3] w-full text-left text-xs text-[#1A1816] mb-6 space-y-1.5">
              <p><strong>{lang === 'zh' ? '联系人：' : 'Guest Name: '}</strong>{name}</p>
              <p><strong>{lang === 'zh' ? '联系电话：' : 'Contact: '}</strong>{contact}</p>
              {email && <p><strong>{lang === 'zh' ? '电子邮箱：' : 'Email: '}</strong>{email}</p>}
              {checkIn && <p><strong>{lang === 'zh' ? '入住周期：' : 'Dates: '}</strong>{checkIn} ~ {checkOut || '-'}</p>}
              <p><strong>{lang === 'zh' ? '房型选择：' : 'Room: '}</strong>{selectedRoom}</p>
            </div>

            <div className="border-t border-[#ECE7DD] pt-4 w-full flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={hotel.phoneTel}
                className="inline-flex items-center space-x-2 text-xs text-[#B79A62] font-medium hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{hotel.phoneDisplay} (24h)</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#111111] text-white text-xs uppercase tracking-wider font-semibold"
              >
                {t.modalClose}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#706B64] font-semibold mb-1">
                  {t.enquiryName} *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === 'zh' ? '例如：王先生 / 张女士' : 'e.g. Mr. Robert Smith'}
                  required
                  className="w-full bg-[#F5F1E8] border border-[#D8D0C3] px-3.5 py-2.5 text-sm text-[#1A1816] focus:outline-none focus:border-[#B79A62]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#706B64] font-semibold mb-1">
                  {t.enquiryPhone} *
                </label>
                <input
                  type="tel"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder={lang === 'zh' ? '+86 138-xxxx-xxxx' : '+1 (555) 000-0000'}
                  required
                  className="w-full bg-[#F5F1E8] border border-[#D8D0C3] px-3.5 py-2.5 text-sm text-[#1A1816] focus:outline-none focus:border-[#B79A62]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#706B64] font-semibold mb-1">
                {t.enquiryEmail}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-[#F5F1E8] border border-[#D8D0C3] px-3.5 py-2.5 text-sm text-[#1A1816] focus:outline-none focus:border-[#B79A62]"
              />
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#706B64] font-semibold mb-1">
                  {t.checkInLabel}
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#F5F1E8] border border-[#D8D0C3] px-3.5 py-2.5 text-sm text-[#1A1816] focus:outline-none focus:border-[#B79A62]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#706B64] font-semibold mb-1">
                  {t.checkOutLabel}
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#F5F1E8] border border-[#D8D0C3] px-3.5 py-2.5 text-sm text-[#1A1816] focus:outline-none focus:border-[#B79A62]"
                />
              </div>
            </div>

            {/* Room Type & Guests */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#706B64] font-semibold mb-1">
                  {t.roomTypeLabel}
                </label>
                <select
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="w-full bg-[#F5F1E8] border border-[#D8D0C3] px-3.5 py-2.5 text-sm text-[#1A1816] focus:outline-none focus:border-[#B79A62]"
                >
                  <option value="all">{t.allRoomTypes}</option>
                  {verifiedRooms.map((room) => (
                    <option key={room.id} value={lang === 'zh' ? room.nameCN : room.nameEN}>
                      {lang === 'zh' ? room.nameCN : room.nameEN}
                    </option>
                  ))}
                  <option value="Dining / Banquet Enquiry">{lang === 'zh' ? '餐饮 / 私宴包房预订' : 'Dining / Banquet Enquiry'}</option>
                  <option value="Meeting / Conference Enquiry">{lang === 'zh' ? '会议 / 研讨会场地预订' : 'Meeting / Conference Enquiry'}</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#706B64] font-semibold mb-1">
                  {t.guestsLabel}
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full bg-[#F5F1E8] border border-[#D8D0C3] px-3.5 py-2.5 text-sm text-[#1A1816] focus:outline-none focus:border-[#B79A62]"
                >
                  <option value="1">{t.guestsOption1}</option>
                  <option value="2">{t.guestsOption2}</option>
                  <option value="3">{t.guestsOption3}</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#706B64] font-semibold mb-1">
                {t.enquiryNotes}
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                placeholder={lang === 'zh' ? '无烟房需求、抵达时间或会务安排等…' : 'Non-smoking preference, estimated arrival time, or event inquiries...'}
                className="w-full bg-[#F5F1E8] border border-[#D8D0C3] px-3.5 py-2 text-sm text-[#1A1816] focus:outline-none focus:border-[#B79A62]"
              />
            </div>

            {/* Direct Phone Assistance Prompt */}
            <div className="p-3 bg-[#F5F1E8] border border-[#D8D0C3] flex items-center justify-between text-xs text-[#706B64]">
              <div className="flex items-center space-x-1.5">
                <Info className="w-3.5 h-3.5 text-[#B79A62] shrink-0" />
                <span>{t.directCallPrompt}</span>
              </div>
              <a
                href={hotel.phoneTel}
                className="text-[#111111] hover:text-[#B79A62] font-semibold font-mono"
              >
                {hotel.phoneDisplay}
              </a>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                id="submit-enquiry-btn"
                className="w-full bg-[#111111] hover:bg-[#6F1D1B] text-white py-3.5 text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4 text-[#B79A62]" />
                <span>{t.enquirySubmit}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
