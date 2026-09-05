import React, { useState } from 'react';
import { hotel, translations } from '../data/hotelConfig';
import { LegalModal } from './LegalModal';
import { MapPin, Phone, Globe, ExternalLink, Calendar } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'zh';
  setLang: (lang: 'en' | 'zh') => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, setLang, onOpenEnquiry }) => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const t = translations[lang];

  return (
    <footer
      id="main-footer"
      className="bg-[#0D0D0D] text-[#D8D0C3] border-t border-[#2A2621] pt-16 sm:pt-20 pb-24 sm:pb-16 relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#222222]">
          {/* Brand Identity Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-2xl sm:text-3xl font-serif-chinese tracking-widest text-white font-medium">
              {hotel.nameCN}
            </div>
            <div className="text-xs sm:text-sm text-[#B79A62] font-serif-luxury tracking-[0.25em] uppercase font-light">
              {hotel.nameEN}
            </div>
            <p className="text-xs text-[#A59F95] font-sans-clean font-light leading-relaxed max-w-sm pt-2">
              {t.footerDisclaimer}
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-[#B79A62]">
              <Globe className="w-3.5 h-3.5" />
              <button
                type="button"
                onClick={() => setLang('zh')}
                className={`hover:text-white ${lang === 'zh' ? 'text-[#B79A62] font-semibold' : 'text-[#706B64]'}`}
              >
                中文
              </button>
              <span className="text-[#444]">/</span>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`hover:text-white ${lang === 'en' ? 'text-[#B79A62] font-semibold' : 'text-[#706B64]'}`}
              >
                ENGLISH
              </button>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs tracking-[0.2em] uppercase text-white font-semibold mb-4">
              {lang === 'zh' ? '快速导航' : 'HOTEL NAVIGATION'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#rooms" className="text-[#A59F95] hover:text-[#B79A62] transition-colors">
                  {t.navRooms}
                </a>
              </li>
              <li>
                <a href="#dining" className="text-[#A59F95] hover:text-[#B79A62] transition-colors">
                  {t.navDining}
                </a>
              </li>
              <li>
                <a href="#facilities" className="text-[#A59F95] hover:text-[#B79A62] transition-colors">
                  {t.navFacilities}
                </a>
              </li>
              <li>
                <a href="#experience" className="text-[#A59F95] hover:text-[#B79A62] transition-colors">
                  {t.navExperience}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-[#A59F95] hover:text-[#B79A62] transition-colors">
                  {t.navGallery}
                </a>
              </li>
              <li>
                <a href="#location" className="text-[#A59F95] hover:text-[#B79A62] transition-colors">
                  {t.navLocation}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#A59F95] hover:text-[#B79A62] transition-colors">
                  {t.navFaq}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs tracking-[0.2em] uppercase text-white font-semibold mb-4">
              {lang === 'zh' ? '地址与联系方式' : 'ADDRESS & CONTACT'}
            </h4>

            <div className="flex items-start space-x-3 text-xs text-[#D8D0C3]">
              <MapPin className="w-4 h-4 text-[#B79A62] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">{hotel.address.fullAddressCN}</p>
                <p className="text-[#706B64] mt-0.5">{hotel.address.fullAddressEN}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-xs text-[#D8D0C3]">
              <Phone className="w-4 h-4 text-[#B79A62] shrink-0" />
              <a href={hotel.phoneTel} className="hover:text-[#B79A62] transition-colors font-mono">
                {hotel.phone}
              </a>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch gap-2.5">
              <button
                type="button"
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center space-x-1.5 bg-[#B79A62] hover:bg-[#C8AD78] text-[#111111] px-4 py-2.5 text-xs tracking-wider uppercase font-semibold transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{t.bookNow}</span>
              </button>

              <a
                href={hotel.googleMapsURL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-1.5 border border-[#333] hover:border-[#B79A62] text-white hover:text-[#B79A62] px-4 py-2.5 text-xs tracking-wider uppercase font-medium transition-colors"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#706B64] gap-4">
          <p>{t.footerRights}</p>

          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={() => setLegalModalType('privacy')}
              className="hover:text-[#D8D0C3] transition-colors"
            >
              {t.footerPrivacy}
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => setLegalModalType('terms')}
              className="hover:text-[#D8D0C3] transition-colors"
            >
              {t.footerTerms}
            </button>
          </div>
        </div>
      </div>

      {/* Legal Information Modal */}
      <LegalModal
        type={legalModalType}
        lang={lang}
        onClose={() => setLegalModalType(null)}
      />
    </footer>
  );
};
