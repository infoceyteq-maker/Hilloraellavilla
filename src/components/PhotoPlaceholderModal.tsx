import React from 'react';
import { PROPERTY_INFO } from '../data/propertyData';
import { X, ExternalLink, MapPin, Sparkles, Check, Info, Image as ImageIcon } from 'lucide-react';

interface PhotoPlaceholderModalProps {
  isOpen: boolean;
  onClose: () => void;
  isMapPlaceholdersMode: boolean;
  onToggleMapPlaceholders: () => void;
}

export const PhotoPlaceholderModal: React.FC<PhotoPlaceholderModalProps> = ({
  isOpen,
  onClose,
  isMapPlaceholdersMode,
  onToggleMapPlaceholders,
}) => {
  if (!isOpen) return null;

  const imageSlots = [
    {
      slot: 'Hero Panorama',
      dimensions: '1920 × 1080 px',
      label: 'INSERT_REAL_MAPS_IMAGE_HERE (Hero Background)',
      desc: 'Misty Ella morning vista or full mountain panorama taken from the Hillora Ella property terrace.',
    },
    {
      slot: 'Room Suite 1',
      dimensions: '800 × 600 px',
      label: 'INSERT_REAL_MAPS_IMAGE_HERE (Suite 1 - Master Bedroom)',
      desc: 'Crisp white linens, wooden bedframe, natural stone walls, and private balcony door.',
    },
    {
      slot: 'Room Suite 2',
      dimensions: '800 × 600 px',
      label: 'INSERT_REAL_MAPS_IMAGE_HERE (Suite 2 - Terrace Courtyard Room)',
      desc: 'Ground floor veranda room with direct stone courtyard garden and daylight.',
    },
    {
      slot: 'Room Suite 3',
      dimensions: '800 × 600 px',
      label: 'INSERT_REAL_MAPS_IMAGE_HERE (Suite 3 - Upper Sanctuary)',
      desc: 'Top-level wooden ceiling sanctuary with dual mountain view balconies.',
    },
    {
      slot: 'Gallery 01: Stone Dining Veranda',
      dimensions: '1200 × 800 px',
      label: 'INSERT_REAL_MAPS_IMAGE_HERE (Stone Dining Veranda & Clay Pots)',
      desc: 'Rustic outdoor dining table, string lighting, decorative clay pots with purple and yellow flowers.',
    },
    {
      slot: 'Gallery 02: Stone Steps Entrance',
      dimensions: '1200 × 800 px',
      label: 'INSERT_REAL_MAPS_IMAGE_HERE (Entrance Steps & Carved Wooden Sign)',
      desc: 'Natural stone stairs leading up to the retreat with the carved wooden sign "HILLORA ELLA".',
    },
    {
      slot: 'Gallery 03: Misty Mountain Trail',
      dimensions: '1200 × 800 px',
      label: 'INSERT_REAL_MAPS_IMAGE_HERE (Trail & Eucalyptus Trees)',
      desc: 'Path leading towards the view framed by eucalyptus trees and rustic wooden boundary logs.',
    },
    {
      slot: 'Gallery 04: Villa Architecture',
      dimensions: '1200 × 800 px',
      label: 'INSERT_REAL_MAPS_IMAGE_HERE (Villa Exterior, White Facade & Green Lawn)',
      desc: 'Modern white two-story retreat villa with black iron balcony railings and gravel walkway.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-[#FAF7F2] rounded-3xl max-w-3xl w-full my-8 shadow-3d-floating border border-white/80 overflow-hidden relative">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#203623] to-[#2B4A2F] text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[#B6E4BD] text-xs font-semibold mb-2 border border-white/15">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>Google Maps Image Integration Guide</span>
          </div>

          <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold">
            Real Google Maps Photo Slot Directory
          </h3>
          <p className="text-xs sm:text-sm text-stone-300 mt-1 font-light">
            Every photo container is perfectly sized and labeled with <code>INSERT_REAL_MAPS_IMAGE_HERE</code> for effortless swapping.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Actions */}
          <div className="p-4 rounded-2xl bg-[#EDE7DA] border border-[#DDD3C2] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#355339]">
                Toggle On-Screen Maps Badges
              </div>
              <p className="text-xs text-stone-600 mt-0.5">
                Displays yellow dashed outline tags over each photo container across the entire website.
              </p>
            </div>

            <button
              onClick={onToggleMapPlaceholders}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border flex items-center gap-1.5 cursor-pointer transition-all ${
                isMapPlaceholdersMode
                  ? 'bg-[#C58B35] text-white border-[#9E6B22] shadow-sm'
                  : 'bg-white text-[#2B4B2F] border-[#2B4B2F]/30 hover:bg-stone-50'
              }`}
            >
              <Check className={`w-3.5 h-3.5 ${isMapPlaceholdersMode ? 'opacity-100' : 'opacity-0'}`} />
              <span>{isMapPlaceholdersMode ? 'Slots Highlighted (ON)' : 'Turn Highlight ON'}</span>
            </button>
          </div>

          {/* Direct Link to Google Maps */}
          <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E0D7C6]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-rose-50 text-rose-600">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-semibold text-[#1F3323]">
                  Source Google Maps Listing
                </div>
                <div className="text-[11px] text-stone-500 font-mono">
                  https://maps.app.goo.gl/st65DzDzJ9mktRhm9
                </div>
              </div>
            </div>

            <a
              href={PROPERTY_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-[#2E4F32] hover:bg-[#233F27] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs"
            >
              <span>Open Link</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Directory of Image Containers */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#355339] mb-3">
              Configured Image Slots & Recommended Dimensions
            </h4>

            <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
              {imageSlots.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-white border border-[#E2DBD0] hover:border-[#385E3B]/40 transition-colors text-xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="font-semibold text-[#1C3220]">{item.slot}</span>
                    <span className="font-mono text-[10px] bg-[#EBE4D5] px-2 py-0.5 rounded text-[#5D461E] font-bold shrink-0">
                      {item.dimensions}
                    </span>
                  </div>
                  <div className="font-mono text-[11px] text-[#A67123] font-bold mt-1">
                    {item.label}
                  </div>
                  <p className="text-stone-500 text-[11px] mt-1 leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-[#E3DCCF] flex items-center justify-between text-xs text-stone-500">
            <span>To permanently replace photos, update URLs in <code>src/data/propertyData.ts</code></span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#2E4F32] text-white font-semibold hover:bg-[#233F27]"
            >
              Close Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
