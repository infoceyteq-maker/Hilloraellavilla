import React, { useState } from 'react';
import { GALLERY_ITEMS, PROPERTY_INFO } from '../data/propertyData';
import { GalleryItem } from '../types';
import { Sparkles, Maximize2, ExternalLink, MapPin, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface GallerySectionProps {
  isMapPlaceholdersMode: boolean;
  onOpenPhotoManager: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  isMapPlaceholdersMode,
  onOpenPhotoManager,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'terrace', label: 'Veranda & Terrace' },
    { id: 'exterior', label: 'Sanctuary & Grounds' },
    { id: 'views', label: 'Ella Mist Panoramas' },
    { id: 'dining', label: 'Vegan Dining' },
    { id: 'rooms', label: 'Quiet Suites' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F1EA] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5DFD1] text-[#2F4A32] text-xs font-semibold tracking-wider uppercase mb-3 shadow-3d-badge">
            <Sparkles className="w-3.5 h-3.5 text-[#3D6341]" />
            <span>Retreat Gallery</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D3020] tracking-tight">
            Moments of Stillness & Wonder
          </h2>
          <p className="font-sans-clean mt-4 text-base sm:text-lg text-[#556D58] font-light leading-relaxed">
            From misty mornings with hot Ceylon tea to rustic stone courtyards and crisp white suites.
            Take a visual walk through Hillora Ella.
          </p>

          {/* Action Row */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={PROPERTY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-stone-50 text-[#254228] font-semibold text-xs border border-[#D5CDBC] shadow-3d-card transition-all"
            >
              <MapPin className="w-4 h-4 text-rose-600" />
              <span>Explore Official Google Maps Photos (5.0 ★)</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>

            <button
              onClick={onOpenPhotoManager}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#E8E1D2] hover:bg-[#DDD4C3] text-[#2C4A30] font-semibold text-xs border border-[#C5BBA7] shadow-3d-btn transition-all cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#96631E]" />
              <span>Photo Slot Manager (Swap Real Images)</span>
            </button>
          </div>
        </div>

        {/* Filter Categories (Segmented Control) */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          <div className="p-1.5 bg-[#E6DFD2] rounded-2xl flex flex-wrap items-center justify-center gap-1 border border-[#D8CEBD] shadow-3d-inset">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#2E4F32] text-white shadow-3d-btn'
                    : 'text-[#3E5641] hover:text-[#1F3323] hover:bg-white/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-[#FAF7F2] rounded-2xl overflow-hidden border border-[#E3DCCF] shadow-3d-card hover:shadow-3d-card-hover transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              {/* Photo Area */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* 3D Placeholder Label Overlay */}
                <div
                  className={`absolute top-3 left-3 right-3 z-10 transition-opacity duration-200 ${
                    isMapPlaceholdersMode ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <div className="bg-[#FAF6EE]/95 backdrop-blur-md border border-dashed border-[#A87224] text-[#704917] p-2 rounded-xl text-xs font-mono shadow-md flex items-center justify-between">
                    <span className="font-bold text-[10px] tracking-wider truncate">
                      {item.placeholderLabel}
                    </span>
                    <span className="text-[9px] bg-[#E8DCC9] px-1.5 py-0.5 rounded font-bold shrink-0 ml-1">
                      1200×800
                    </span>
                  </div>
                </div>

                {/* Hover overlay with zoom button */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => openLightbox(index)}
                    className="p-3 rounded-full bg-white/90 text-[#213824] shadow-lg hover:scale-110 transition-transform cursor-pointer"
                    title="View fullscreen"
                  >
                    <Maximize2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Caption */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-luxury text-lg font-bold text-[#1F3323] group-hover:text-[#2E5233] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans-clean text-xs text-[#556D58] mt-1 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h4 className="font-serif-luxury text-xl font-bold">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="text-xs text-stone-300 mt-1 max-w-lg">
                {filteredItems[lightboxIndex].caption}
              </p>
              <div className="mt-2 text-[11px] font-mono text-[#D5B079]">
                {filteredItems[lightboxIndex].placeholderLabel}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
