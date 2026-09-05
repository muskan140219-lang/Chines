import React, { useState, useEffect } from 'react';
import { hotel, translations } from '../data/hotelConfig';
import { Phone, MapPin, Globe, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  lang: 'en' | 'zh';
  setLang: (lang: 'en' | 'zh') => void;
  onOpenEnquiry: (roomName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hotel-intro', label: t.navStay },
    { href: '#rooms', label: t.navRooms },
    { href: '#facilities', label: t.navFacilities },
    { href: '#dining', label: t.navDining },
    { href: '#experience', label: t.navExperience },
    { href: '#gallery', label: t.navGallery },
    { href: '#reviews', label: t.navReviews },
    { href: '#location', label: t.navLocation },
  ];

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <header
        id="luxury-header"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        {/* Very Thin Premium Utility Bar */}
        <div
          id="top-utility-bar"
          className="bg-[#0D0D0D] text-[#D8D0C3] border-b border-[#222222] text-[11px] tracking-wider py-1.5 px-4 sm:px-8 hidden md:block"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <span className="flex items-center space-x-1.5 text-[#B79A62]">
                <MapPin className="w-3.5 h-3.5" />
                <span className="tracking-widest uppercase font-medium">{t.utilityCity}</span>
              </span>
              <span className="text-[#706B64]">|</span>
              <span className="text-[#A59F95]">{hotel.address.districtEN}, {hotel.coordinates}</span>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href={hotel.phoneTel}
                id="utility-call-link"
                className="flex items-center space-x-1.5 hover:text-[#B79A62] transition-colors"
              >
                <Phone className="w-3 h-3 text-[#B79A62]" />
                <span>{t.callUs}: {hotel.phoneDisplay}</span>
              </a>

              <span className="text-[#706B64]">|</span>

              {/* Language Switcher */}
              <div id="language-switcher" className="flex items-center space-x-2">
                <Globe className="w-3 h-3 text-[#B79A62]" />
                <button
                  type="button"
                  id="lang-zh-button"
                  onClick={() => setLang('zh')}
                  className={`px-1.5 py-0.5 transition-colors ${
                    lang === 'zh' ? 'text-[#B79A62] font-semibold' : 'text-[#888] hover:text-white'
                  }`}
                >
                  中文
                </button>
                <span className="text-[#444]">/</span>
                <button
                  type="button"
                  id="lang-en-button"
                  onClick={() => setLang('en')}
                  className={`px-1.5 py-0.5 transition-colors ${
                    lang === 'en' ? 'text-[#B79A62] font-semibold' : 'text-[#888] hover:text-white'
                  }`}
                >
                  ENGLISH
                </button>
              </div>

              <span className="text-[#706B64]">|</span>

              <button
                type="button"
                id="utility-reservation-btn"
                onClick={() => onOpenEnquiry()}
                className="text-[#B79A62] hover:text-[#C8AD78] transition-colors uppercase tracking-widest font-medium"
              >
                {t.reservations}
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav
          id="main-navigation"
          className={`transition-all duration-500 ${
            isScrolled
              ? 'bg-[#111111]/95 backdrop-blur-md py-3.5 border-b border-[#2A2621] shadow-xl'
              : 'bg-gradient-to-b from-[#111111]/80 via-[#111111]/40 to-transparent py-5'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
            {/* Logo Treatment */}
            <a
              href="#"
              id="header-brand-logo"
              className="group flex flex-col focus:outline-none"
            >
              <div className="flex items-center space-x-2">
                <span className="text-base sm:text-lg tracking-[0.18em] font-medium text-white font-serif-chinese group-hover:text-[#B79A62] transition-colors">
                  {hotel.nameCN}
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] text-[#D8D0C3] uppercase font-light font-serif-luxury">
                {hotel.nameEN}
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[12px] uppercase tracking-[0.16em] text-[#E8E4DC] hover:text-[#B79A62] transition-colors font-medium relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#B79A62] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Right Action: Book Now & Mobile Hamburger */}
            <div className="flex items-center space-x-3">
              {/* Language switcher for tablet/mobile header */}
              <button
                type="button"
                onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
                className="lg:hidden text-xs uppercase tracking-widest text-[#B79A62] border border-[#B79A62]/40 px-2.5 py-1.5 rounded-none"
                aria-label="Toggle language"
              >
                {lang === 'en' ? '中文' : 'EN'}
              </button>

              <button
                type="button"
                id="header-book-btn"
                onClick={() => onOpenEnquiry()}
                className="hidden sm:inline-flex items-center space-x-2 bg-[#B79A62] hover:bg-[#C8AD78] text-[#111111] text-[12px] tracking-[0.16em] font-semibold uppercase px-5 py-2.5 transition-all shadow-md active:translate-y-0.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{t.bookNow}</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-[#B79A62] transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Full-Screen Mobile Navigation Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`fixed inset-0 z-40 bg-[#0D0D0D] text-white flex flex-col justify-between pt-24 pb-8 px-8 lg:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col space-y-5">
          <div className="border-b border-[#2A2621] pb-4 mb-2">
            <div className="text-xl font-serif-chinese tracking-widest text-white">
              {hotel.nameCN}
            </div>
            <div className="text-xs text-[#B79A62] tracking-[0.2em] uppercase font-light">
              {hotel.nameEN}
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg tracking-wider text-[#E8E4DC] hover:text-[#B79A62] transition-colors flex items-center justify-between border-b border-[#1E1B17] pb-2 font-serif-luxury"
              >
                <span>{link.label}</span>
                <span className="text-[#B79A62] text-xs">→</span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-4 pt-6 border-t border-[#2A2621]">
          <div className="flex items-center justify-between text-xs tracking-widest text-[#A59F95]">
            <span>{lang === 'zh' ? '切换语言 / LANGUAGE' : 'LANGUAGE SELECTION'}</span>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => { setLang('zh'); setIsMobileMenuOpen(false); }}
                className={`px-3 py-1 ${lang === 'zh' ? 'bg-[#B79A62] text-[#111]' : 'border border-[#333] text-white'}`}
              >
                中文
              </button>
              <button
                type="button"
                onClick={() => { setLang('en'); setIsMobileMenuOpen(false); }}
                className={`px-3 py-1 ${lang === 'en' ? 'bg-[#B79A62] text-[#111]' : 'border border-[#333] text-white'}`}
              >
                ENGLISH
              </button>
            </div>
          </div>

          <a
            href={hotel.phoneTel}
            className="flex items-center justify-center space-x-2 border border-[#B79A62] text-[#B79A62] py-3 text-xs tracking-widest uppercase font-medium"
          >
            <Phone className="w-4 h-4" />
            <span>{t.callHotel}: {hotel.phone}</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenEnquiry();
            }}
            className="w-full bg-[#B79A62] text-[#111111] py-3 text-xs tracking-widest uppercase font-semibold text-center"
          >
            {t.bookNow}
          </button>
        </div>
      </div>
    </>
  );
};
