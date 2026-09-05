/**
 * Jingtailong International Hotel (北京京泰龙国际大酒店)
 * Official Luxury Hospitality Digital Experience
 * 
 * Verified Google Maps Reference: https://maps.app.goo.gl/AUZruh1kdMRmo7NdA?g_st=ac
 * Address: No. 19 East Avenue Zhushikou, Dongcheng District, Beijing 100050, China
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookingBar, BookingCriteria } from './components/BookingBar';
import { HotelIntro } from './components/HotelIntro';
import { RoomsSection } from './components/RoomsSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { DiningSection } from './components/DiningSection';
import { BusinessEvents } from './components/BusinessEvents';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { EnquiryModal } from './components/EnquiryModal';
import { ConciergeChatbot } from './components/ConciergeChatbot';

export default function App() {
  // Bilingual state: default to 'zh' with instant toggle to 'en'
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  
  // Enquiry Modal state
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryRoomName, setEnquiryRoomName] = useState<string | undefined>(undefined);
  const [enquiryCriteria, setEnquiryCriteria] = useState<BookingCriteria | null>(null);

  const handleOpenEnquiry = (roomName?: string) => {
    setEnquiryRoomName(roomName);
    setIsEnquiryOpen(true);
  };

  const handleBookingSearch = (criteria: BookingCriteria) => {
    setEnquiryCriteria(criteria);
    setIsEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-[#1A1816] flex flex-col selection:bg-[#B79A62]/30 selection:text-[#111111] overflow-x-hidden">
      {/* 1 & 2: Top Utility Announcement & Transparent Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      <main className="flex-1">
        {/* 3: Full-screen Cinematic Hero */}
        <Hero
          lang={lang}
          onOpenEnquiry={() => handleOpenEnquiry()}
        />

        {/* 4: Luxury Search / Booking Interface */}
        <BookingBar
          lang={lang}
          onSearch={handleBookingSearch}
        />

        {/* 5: Hotel Introduction (A Central Stay in Beijing / 东城文脉) */}
        <HotelIntro
          lang={lang}
          onOpenEnquiry={() => handleOpenEnquiry()}
        />

        {/* 6: Rooms & Suites (6 Verified Room Categories) */}
        <RoomsSection
          lang={lang}
          onEnquireRoom={(room) => handleOpenEnquiry(room)}
        />

        {/* 7: Verified Hotel Facilities & Services */}
        <FacilitiesSection
          lang={lang}
        />

        {/* 8: Dining (Tailong Restaurant / 泰龙中西餐厅) */}
        <DiningSection
          lang={lang}
          onOpenDiningEnquiry={() => handleOpenEnquiry(lang === 'zh' ? '泰龙中西餐厅预订' : 'Tailong Restaurant Enquiry')}
        />

        {/* 9: Business & Events (Meet in Beijing / 京华商务) */}
        <BusinessEvents
          lang={lang}
          onOpenBusinessEnquiry={() => handleOpenEnquiry(lang === 'zh' ? '会议及会务场地预订' : 'Meeting & Event Enquiry')}
        />

        {/* 10: Discover Beijing / Destination Experience */}
        <ExperienceSection
          lang={lang}
        />

        {/* 11: Immersive Gallery & Lightbox */}
        <GallerySection
          lang={lang}
        />

        {/* 12: Authentic Guest Feedback & Reviews */}
        <ReviewsSection
          lang={lang}
        />

        {/* 13: Location & Transit (Google Maps & Coordinates) */}
        <LocationSection
          lang={lang}
        />

        {/* 14: Frequently Asked Questions (FAQ) */}
        <FaqSection
          lang={lang}
        />

        {/* 15: Final Booking CTA */}
        <FinalCtaSection
          lang={lang}
          onOpenEnquiry={() => handleOpenEnquiry()}
        />
      </main>

      {/* 16: Polish Hotel Footer */}
      <Footer
        lang={lang}
        setLang={setLang}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* 17: Mobile Sticky Action Bar */}
      <MobileActionBar
        lang={lang}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* 18: Integrated Gemini AI Concierge */}
      <ConciergeChatbot
        onOpenBookingEnquiry={(room) => handleOpenEnquiry(room)}
        currentSiteLang={lang}
      />

      {/* 19: Universal Reservation & Meeting Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        initialRoomName={enquiryRoomName}
        initialCriteria={enquiryCriteria}
        lang={lang}
        onClose={() => {
          setIsEnquiryOpen(false);
          setEnquiryRoomName(undefined);
          setEnquiryCriteria(null);
        }}
      />
    </div>
  );
}
