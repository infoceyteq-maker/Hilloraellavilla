import React, { useState } from 'react';
import { Mountain, Leaf, Sparkles, MapPin, Check, Heart, Sun, Coffee } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';

export const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features = [
    {
      id: 'views',
      icon: '⛰️',
      lucideIcon: Mountain,
      title: 'Panoramic Mountain Views',
      shortDesc: 'Front-row vantage over Ella Rock and Kithal Ella misty valley.',
      colorAccent: 'from-[#385B3C] to-[#253E28]',
      badge: 'Unobstructed Nature',
      fullStory:
        'Wake up to undulating green ridges draped in ethereal morning clouds. Whether enjoying hot Ceylon tea on the stone terrace or lounging by your balcony, the ever-changing mountain weather paints a living canvas of emerald peaks and peaceful silence.',
      bullets: [
        'Sweeping panoramas of Ella Rock and southern mountain passes',
        'Morning cloud inversions and golden hour sunsets',
        'Zero high-rise obstructions, pure horizon immersion',
      ],
    },
    {
      id: 'eco-vegan',
      icon: '🌿',
      lucideIcon: Leaf,
      title: 'Eco-Friendly & Organic Living',
      shortDesc: 'Mindful, vegan-inspired retreat dedicated to gentle footprint hospitality.',
      colorAccent: 'from-[#2D5A38] to-[#1E3E26]',
      badge: '100% Vegan Friendly',
      fullStory:
        'We believe luxury should nourish both you and the Earth. Our kitchen celebrates vibrant, 100% plant-based and vegan-friendly culinary traditions using homegrown herbs and local organic produce. Every detail respects nature — from solar-heated mountain showers to zero single-use plastics.',
      bullets: [
        'Wholesome vegan breakfasts: hoppers, organic tropical fruits & fresh coconut sambols',
        'Artisanal herbal infusions and freshly roasted single-origin Ceylon tea',
        'Solar thermal hot water & rainwater harvesting practices',
        'Completely cruelty-free and environmentally conscious amenities',
      ],
    },
    {
      id: 'simple-luxury',
      icon: '🛏️',
      lucideIcon: Sparkles,
      title: 'Simple Luxury',
      shortDesc: 'Crisp white linens, handcrafted teak woods, and quiet acoustic tranquility.',
      colorAccent: 'from-[#4F6E4C] to-[#364F34]',
      badge: 'Restorative Stillness',
      fullStory:
        'True luxury in the modern world is quiet. We strip away superficial distractions and prioritize deep restorative rest: crisp, high-thread-count white cotton linens, plush mattresses, bespoke teak furniture, open-air stone courtyards, and warm ambient pendant lighting.',
      bullets: [
        'Pristine, crisp white Egyptian-grade organic cotton bedsheets',
        'Handcrafted local teak wood and terracotta masonry',
        'Acoustically shielded from busy roads; only birdsong and breeze',
        'Thoughtful reading nooks and private veranda sanctuaries',
      ],
    },
    {
      id: 'location',
      icon: '📍',
      lucideIcon: MapPin,
      title: 'Prime Location',
      shortDesc: 'Quiet seclusion in Kithal Ella, just minutes from iconic attractions.',
      colorAccent: 'from-[#426645] to-[#2B472E]',
      badge: 'Kithal Ella, Ella',
      fullStory:
        'Tucked peacefully along Yahalegoda in Kithal Ella, Hillora Ella offers the best of both worlds: total seclusion from the buzzing tourist strip, yet quick and scenic access to the Ella Rock trailhead, Kithal Ella train crossing, Nine Arches Bridge, and Ella town cafes.',
      bullets: [
        'Only 10-15 minutes to Ella Rock trailhead & Nine Arches Bridge',
        'Easy access to Kithal Ella railway view for famous scenic trains',
        '8 minutes drive into central Ella town for dining & bakeries',
        'Surrounded by fragrant eucalyptus groves and green tea plantations',
      ],
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F6F0] relative">
      {/* Subtle organic background motifs */}
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5DFD1] text-[#2F4A32] text-xs font-semibold tracking-wider uppercase mb-3 shadow-3d-badge">
            <Leaf className="w-3.5 h-3.5 text-[#3D6341]" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1D3020] tracking-tight">
            Conscious Stays, Unhurried Days
          </h2>
          <p className="font-sans-clean mt-4 text-base sm:text-lg text-[#556D58] font-light leading-relaxed">
            Every element at Hillora Ella is intentionally designed to invite inner stillness,
            celebrate Sri Lanka’s lush highlands, and nurture conscious travelers.
          </p>
        </div>

        {/* 4 Interactive 3D Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feat, index) => {
            const isExpanded = activeFeature === index;
            const IconComponent = feat.lucideIcon;

            return (
              <div
                key={feat.id}
                onClick={() => setActiveFeature(isExpanded ? null : index)}
                className={`group relative bg-[#FCFAF6] rounded-2xl p-6 sm:p-7 border border-[#E8E2D4] transition-all duration-300 cursor-pointer ${
                  isExpanded
                    ? 'shadow-3d-card-hover ring-2 ring-[#406844] -translate-y-1.5'
                    : 'shadow-3d-card hover:shadow-3d-card-hover hover:-translate-y-1'
                }`}
              >
                {/* 3D Top Icon Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#EEF4ED] to-[#DCE6DA] border border-[#CBDCC8] flex items-center justify-center text-2xl shadow-3d-btn group-hover:scale-105 transition-transform duration-200">
                    <span role="img" aria-label={feat.title}>
                      {feat.icon}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md bg-[#EDE7DA] text-[#446047]">
                    {feat.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1A2C1E] mb-2 group-hover:text-[#2E5233] transition-colors">
                  {feat.title}
                </h3>

                {/* Short Desc */}
                <p className="font-sans-clean text-xs sm:text-sm text-[#5B735E] leading-relaxed mb-4">
                  {feat.shortDesc}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 pt-2 border-t border-[#EAE3D4]/80 text-xs text-[#394F3C]">
                  {feat.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-[#4E7952] font-bold text-xs mt-0.5">✓</span>
                      <span className="leading-tight">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Interactive Card Action Indicator */}
                <div className="mt-5 pt-3 flex items-center justify-between text-xs font-semibold text-[#3B623F]">
                  <span className="group-hover:underline">
                    {isExpanded ? 'Show less' : 'Learn more about this'}
                  </span>
                  <span className="text-sm font-mono transform group-hover:translate-x-1 transition-transform">
                    {isExpanded ? '↑' : '→'}
                  </span>
                </div>

                {/* Expanded Detailed Story */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-[#E3DCCF] text-xs text-stone-700 leading-relaxed bg-[#F4EFE6]/60 p-3 rounded-xl animate-in fade-in duration-200">
                    <p>{feat.fullStory}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Vegan & Eco Highlights Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#29462D] via-[#335638] to-[#1E3722] rounded-3xl p-6 sm:p-8 md:p-10 text-white shadow-3d-floating border border-[#527E57]/30 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden md:block">
            <svg viewBox="0 0 200 200" className="w-full h-full fill-white">
              <path d="M40 100 C20 40, 160 20, 160 100 C160 160, 40 160, 40 100 Z" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[#C9ECCB] text-xs font-semibold mb-3 border border-white/20">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Conscious Hospitality Commitment</span>
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold mb-3">
                100% Plant-Powered, Heart-Centered Hospitality
              </h3>
              <p className="text-stone-200 text-xs sm:text-sm font-light leading-relaxed max-w-2xl">
                Hillora Ella is Sri Lanka’s quiet haven for travelers seeking cruelty-free, organic, and earth-aligned stays.
                Our daily morning feast is naturally vegan, packed with local Ceylon spices, fresh coconuts, and love.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 justify-center">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 text-xs flex items-center gap-3">
                <Sun className="w-5 h-5 text-[#E6D19B] shrink-0" />
                <div>
                  <div className="font-semibold text-white">Solar Powered Stays</div>
                  <div className="text-stone-300 text-[11px]">Hot water fueled by mountain sunlight</div>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 text-xs flex items-center gap-3">
                <Coffee className="w-5 h-5 text-[#E6D19B] shrink-0" />
                <div>
                  <div className="font-semibold text-white">Herbal & Organic Garden</div>
                  <div className="text-stone-300 text-[11px]">Locally harvested native infusions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
