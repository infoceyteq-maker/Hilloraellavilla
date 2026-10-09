import React from 'react';
import { Leaf, MapPin, Coffee, Sun, Heart, Sparkles, ExternalLink } from 'lucide-react';
import { PROPERTY_INFO, PROPERTY_IMAGES } from '../data/propertyData';

interface AboutSectionProps {
  isMapPlaceholdersMode: boolean;
  onOpenPhotoManager: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  isMapPlaceholdersMode,
  onOpenPhotoManager,
}) => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase (3D photo stack with real retreat aspects) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Terrace Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-3d-card border-4 border-white aspect-4/3 z-10 bg-stone-200">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
                  alt="Hillora Ella Stone Dining Terrace"
                  className="w-full h-full object-cover"
                />
                {/* 3D Maps placeholder tag */}
                <div
                  className={`absolute top-4 left-4 right-4 z-20 transition-opacity ${
                    isMapPlaceholdersMode ? 'opacity-100' : 'opacity-0 hover:opacity-100'
                  }`}
                >
                  <div className="bg-[#FAF6EE]/95 border border-dashed border-[#A87224] text-[#704917] p-2 rounded-xl text-xs font-mono shadow-md">
                    INSERT_REAL_MAPS_IMAGE_HERE (Open-Air Stone Dining Veranda)
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#1C2F1F]/80 backdrop-blur-md rounded-2xl p-3 text-white text-xs border border-white/20">
                  <div className="flex items-center gap-1.5 font-semibold text-[#BDE7C2]">
                    <Sparkles className="w-3.5 h-3.5 text-[#E6D19B]" />
                    <span>The Open Terrace Dining Veranda</span>
                  </div>
                  <p className="text-[11px] text-stone-200 mt-0.5">
                    Hand-carved wooden furniture & rustic stone floors overlooking Kithal Ella
                  </p>
                </div>
              </div>

              {/* Secondary Floating Card: Stone steps & Wooden sign */}
              <div className="hidden sm:block absolute -bottom-10 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-3d-floating border-4 border-white aspect-4/3 z-20 bg-stone-200">
                <img
                  src={PROPERTY_IMAGES.entrance}
                  alt="Entrance Steps at Hillora Ella"
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute top-2 left-2 right-2 z-20 transition-opacity ${
                    isMapPlaceholdersMode ? 'opacity-100' : 'opacity-0 hover:opacity-100'
                  }`}
                >
                  <div className="bg-[#FAF6EE]/95 border border-dashed border-[#A87224] text-[#704917] p-1.5 rounded-lg text-[10px] font-mono shadow-md">
                    INSERT_REAL_MAPS_IMAGE_HERE (Stone Steps & Wooden Sign)
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -top-6 -left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-3d-card border border-[#E7E0D3] max-w-[190px]">
                <div className="text-2xl font-serif-luxury font-bold text-[#2A472E]">1,041 m</div>
                <div className="text-[11px] text-stone-600 font-medium">Altitude in Ella Hills</div>
                <div className="text-[10px] text-emerald-700 font-semibold mt-1">Fresh Highland Air</div>
              </div>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5DFD1] text-[#2F4A32] text-xs font-semibold tracking-wider uppercase mb-4 shadow-3d-badge w-fit">
              <Leaf className="w-3.5 h-3.5 text-[#3D6341]" />
              <span>About Hillora Ella</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#192E1C] tracking-tight leading-tight">
              A Gentle Sanctuary Where Nature Takes the Lead
            </h2>

            <p className="font-sans-clean mt-5 text-sm sm:text-base text-[#4F6852] leading-relaxed">
              Born from a desire for genuine quietude, <strong>Hillora Ella</strong> was built in harmony
              with the natural contours of Kithal Ella. Perched amidst fragrant eucalyptus stands and
              mist-brushed tea ridges, our retreat is a sanctuary for travelers seeking peace away from
              crowds.
            </p>

            <p className="font-sans-clean mt-3 text-sm sm:text-base text-[#4F6852] leading-relaxed">
              We champion conscious living: completely <strong>vegan-friendly hospitality</strong>,
              organic locally sourced breakfasts, crisp biodegradable cotton linens, solar heated showers,
              and simple architecture that honors the earth.
            </p>

            {/* 3 Pillar Micro-blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
              <div className="p-4 rounded-2xl bg-white border border-[#E8E1D2] shadow-3d-card text-left">
                <div className="w-9 h-9 rounded-xl bg-[#EAF2E9] flex items-center justify-center text-[#2F5332] mb-3">
                  <Sun className="w-4 h-4" />
                </div>
                <div className="font-serif-luxury text-base font-bold text-[#1B2F1F]">Eco Architecture</div>
                <p className="text-[11px] text-stone-600 mt-1">Natural cross-breezes and solar water systems.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E1D2] shadow-3d-card text-left">
                <div className="w-9 h-9 rounded-xl bg-[#EAF2E9] flex items-center justify-center text-[#2F5332] mb-3">
                  <Heart className="w-4 h-4" />
                </div>
                <div className="font-serif-luxury text-base font-bold text-[#1B2F1F]">Vegan Kitchen</div>
                <p className="text-[11px] text-stone-600 mt-1">100% plant-based Ceylon organic breakfasts.</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E1D2] shadow-3d-card text-left">
                <div className="w-9 h-9 rounded-xl bg-[#EAF2E9] flex items-center justify-center text-[#2F5332] mb-3">
                  <Coffee className="w-4 h-4" />
                </div>
                <div className="font-serif-luxury text-base font-bold text-[#1B2F1F]">Slow Living</div>
                <p className="text-[11px] text-stone-600 mt-1">Herbal tea ceremonies, birdsong, and quiet reading.</p>
              </div>
            </div>

            {/* Google Maps link & Address CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
              <a
                href={PROPERTY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EBE4D5] hover:bg-[#E0D7C4] text-[#243E27] font-semibold transition-colors border border-[#243E27]/20"
              >
                <MapPin className="w-4 h-4 text-rose-700" />
                <span>Locate on Google Maps (Ella, Sri Lanka)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <span className="text-stone-500">
                No. 54, Yahalegoda, Kithal Ella
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
