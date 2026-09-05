import React, { useState, useEffect, useCallback } from 'react';
import { galleryItems, GalleryItem, translations } from '../data/hotelConfig';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface GallerySectionProps {
  lang: 'en' | 'zh';
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hotel' | 'rooms' | 'dining' | 'beijing'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const t = translations[lang];

  const filteredItems = galleryItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 bg-[#FFFFFF] text-[#1A1816] relative border-t border-[#D8D0C3]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center space-x-3 mb-3">
            <span className="w-8 h-[1px] bg-[#B79A62]" />
            <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#B79A62] uppercase font-semibold">
              {t.galleryEyebrow}
            </span>
            <span className="w-8 h-[1px] bg-[#B79A62]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.06em] font-serif-luxury text-[#111111] mb-4">
            {t.galleryTitle}
          </h2>

          <p className="text-base sm:text-lg text-[#6F1D1B] font-serif-chinese italic tracking-wider mb-8">
            {t.gallerySub}
          </p>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { key: 'all', label: t.filterAll },
              { key: 'hotel', label: t.filterHotel },
              { key: 'rooms', label: t.filterRooms },
              { key: 'dining', label: t.filterDining },
              { key: 'beijing', label: t.filterBeijing },
            ].map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key as any)}
                className={`px-4 py-1.5 text-xs tracking-widest uppercase transition-all duration-300 font-medium ${
                  activeCategory === cat.key
                    ? 'bg-[#111111] text-white'
                    : 'bg-[#F5F1E8] border border-[#D8D0C3] text-[#706B64] hover:text-[#111111]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Editorial Asymmetrical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative cursor-pointer overflow-hidden border border-[#D8D0C3] bg-[#0D0D0D] aspect-[4/3] sm:aspect-[16/11]"
            >
              <img
                src={item.image}
                alt={lang === 'zh' ? item.titleCN : item.titleEN}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />

              {/* Gradient & Hover Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] tracking-[0.25em] text-[#B79A62] uppercase font-medium">
                  {lang === 'zh' ? item.categoryLabelCN : item.categoryLabelEN}
                </span>
                <h4 className="text-base sm:text-lg font-serif-luxury text-white mt-1">
                  {lang === 'zh' ? item.titleCN : item.titleEN}
                </h4>
                <div className="flex items-center space-x-1.5 text-[11px] text-[#D8D0C3] mt-2">
                  <Maximize2 className="w-3.5 h-3.5 text-[#B79A62]" />
                  <span>{lang === 'zh' ? '点击查看大图' : 'View Full Image'}</span>
                </div>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="absolute bottom-0 inset-x-0 h-1 bg-[#B79A62] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-[#000000]/95 flex items-center justify-center p-4 sm:p-8 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-10 p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-7 h-7" />
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={lang === 'zh' ? filteredItems[lightboxIndex].titleCN : filteredItems[lightboxIndex].titleEN}
              className="max-h-[75vh] w-auto object-contain border border-[#333] shadow-2xl"
            />

            <div className="mt-4 text-center text-white">
              <span className="text-xs text-[#B79A62] tracking-[0.2em] uppercase font-mono">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <h3 className="text-lg sm:text-xl font-serif-luxury mt-1">
                {lang === 'zh'
                  ? filteredItems[lightboxIndex].titleCN
                  : filteredItems[lightboxIndex].titleEN}
              </h3>
              <p className="text-xs text-[#A59F95] mt-0.5">
                {lang === 'zh'
                  ? filteredItems[lightboxIndex].titleEN
                  : filteredItems[lightboxIndex].titleCN}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
