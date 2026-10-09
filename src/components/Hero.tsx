import React, { useState } from 'react';
import { Calendar, Users, ArrowRight, ShieldCheck, Leaf, Sparkles, MapPin, ExternalLink } from 'lucide-react';
import { PROPERTY_INFO, PROPERTY_IMAGES } from '../data/propertyData';

interface HeroProps {
  onSearchAvailability: (searchParams: { checkIn: string; checkOut: string; guests: number; roomId?: string }) => void;
  isMapPlaceholdersMode: boolean;
  onOpenPhotoManager: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSearchAvailability,
  isMapPlaceholdersMode,
  onOpenPhotoManager,
}) => {
  // Default dates: tomorrow and +2 days
  const today = new Date();
  const defaultCheckIn = new Date(today);
  defaultCheckIn.setDate(today.getDate() + 1);
  const defaultCheckOut = new Date(today);
  defaultCheckOut.setDate(today.getDate() + 3);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [checkIn, setCheckIn] = useState<string>(formatDate(defaultCheckIn));
  const [checkOut, setCheckOut] = useState<string>(formatDate(defaultCheckOut));
  const [guests, setGuests] = useState<number>(2);
  const [selectedRoomId, setSelectedRoomId] = useState<string>('any');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchAvailability({
      checkIn,
      checkOut,
      guests,
      roomId: selectedRoomId === 'any' ? undefined : selectedRoomId,
    });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={PROPERTY_IMAGES.hero}
          alt="Hillora Ella Mountain Retreat View"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-slow"
          loading="eager"
        />
        {/* Soft Organic Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#142316] via-[#142316]/50 to-[#142316]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/20 via-transparent to-[#101C12]/70" />
      </div>

      {/* Real Maps Placeholder Badge (when enabled or on hover) */}
      {isMapPlaceholdersMode && (
        <div className="absolute top-28 left-6 right-6 md:left-12 md:right-auto z-20 max-w-lg bg-[#FAF6EE]/95 border-2 border-dashed border-[#A87224] text-[#2F4432] p-4 rounded-2xl shadow-2xl backdrop-blur-md animate-in fade-in zoom-in-95">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#EADBCE] text-[#865719] shrink-0 font-mono text-xs font-bold">
              SLOT 01
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-[#865719] uppercase tracking-wider">
                INSERT_REAL_MAPS_IMAGE_HERE
              </div>
              <p className="text-xs text-stone-700 mt-1 font-medium">
                Hero Full-Bleed Panorama (1920 × 1080px). Replace with real mountain vista from{' '}
                <a
                  href={PROPERTY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#244E28] font-semibold inline-flex items-center gap-0.5"
                >
                  Google Maps Link <ExternalLink className="w-3 h-3" />
                </a>
              </p>
              <button
                onClick={onOpenPhotoManager}
                className="mt-2 text-[11px] px-2.5 py-1 bg-[#2F4E34] text-white rounded-md font-semibold hover:bg-[#233C27]"
              >
                Upload / Configure Real Images
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center w-full flex flex-col items-center">
        {/* Transparent Embossed Logo Crest */}
        <div className="mb-4 transform hover:scale-105 transition-transform duration-300">
          <img
            src="/logo.svg"
            alt="Hillora Ella Official Logo"
            className="w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-2xl mx-auto"
          />
        </div>

        {/* Organic Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white/95 text-xs sm:text-sm font-medium mb-5 shadow-sm">
          <Leaf className="w-3.5 h-3.5 text-[#A3E0A8]" />
          <span>Kithal Ella, Ella · Sri Lanka</span>
          <span className="w-1 h-1 rounded-full bg-[#E5D7B7]" />
          <span className="text-[#E7DCBA]">Vegan & Eco Conscious Sanctuary</span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] max-w-4xl drop-shadow-md">
          Welcome to Hillora Ella — A Quiet Stay in the Hills <span className="inline-block animate-bounce-slow">⛰️✨</span>
        </h1>

        {/* Sub-headline */}
        <p className="font-sans-clean mt-5 text-base sm:text-lg md:text-xl text-[#E9EDE7] max-w-2xl font-light leading-relaxed drop-shadow-sm">
          Eco-friendly, vegan-inspired quiet luxury in the misty mountains of Sri Lanka.
          Unplug, breathe fresh eucalyptus air, and embrace slow, mindful living.
        </p>

        {/* Key Retreat Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-xs sm:text-sm text-[#F1EFEA]">
          <div className="flex items-center gap-1.5 backdrop-blur-xs px-3 py-1 rounded-lg bg-black/20 border border-white/10">
            <span className="text-base">🌿</span>
            <span>Organic Plant-Based Dining</span>
          </div>
          <div className="flex items-center gap-1.5 backdrop-blur-xs px-3 py-1 rounded-lg bg-black/20 border border-white/10">
            <span className="text-base">🛏️</span>
            <span>Crisp White Luxury Linens</span>
          </div>
          <div className="flex items-center gap-1.5 backdrop-blur-xs px-3 py-1 rounded-lg bg-black/20 border border-white/10">
            <span className="text-base">⛰️</span>
            <span>Ella Rock Panoramic Vista</span>
          </div>
        </div>

        {/* Floating 3D Booking Widget */}
        <div className="w-full mt-10 max-w-4xl">
          <div className="bg-[#FAF7F2]/95 backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-7 shadow-3d-floating border border-white/70 relative">
            {/* Top decorative accent */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#2C3E2D]/10 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#2C3E2D] font-semibold">
                <Sparkles className="w-4 h-4 text-[#C2964C]" />
                <span>Direct Retreat Reservation · Best Rate & Personalized Welcome</span>
              </div>
              <div className="hidden sm:flex items-center gap-1 text-[11px] text-stone-500 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant Confirmation & WhatsApp Care</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-left">
              {/* Check-in */}
              <div className="bg-white/80 rounded-xl p-3 border border-[#E3DCCF] shadow-3d-inset focus-within:border-[#3D6341] focus-within:ring-2 focus-within:ring-[#3D6341]/20 transition-all">
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#546E57]">
                  Check-In
                </label>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4 text-[#3D6341] shrink-0" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    min={formatDate(today)}
                    className="w-full text-xs sm:text-sm font-semibold text-[#1F3323] bg-transparent focus:outline-hidden cursor-pointer"
                    required
                  />
                </div>
              </div>

              {/* Check-out */}
              <div className="bg-white/80 rounded-xl p-3 border border-[#E3DCCF] shadow-3d-inset focus-within:border-[#3D6341] focus-within:ring-2 focus-within:ring-[#3D6341]/20 transition-all">
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#546E57]">
                  Check-Out
                </label>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4 text-[#3D6341] shrink-0" />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    min={checkIn || formatDate(today)}
                    className="w-full text-xs sm:text-sm font-semibold text-[#1F3323] bg-transparent focus:outline-hidden cursor-pointer"
                    required
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="bg-white/80 rounded-xl p-3 border border-[#E3DCCF] shadow-3d-inset focus-within:border-[#3D6341] focus-within:ring-2 focus-within:ring-[#3D6341]/20 transition-all">
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#546E57]">
                  Guests
                </label>
                <div className="flex items-center gap-2 mt-1">
                  <Users className="w-4 h-4 text-[#3D6341] shrink-0" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full text-xs sm:text-sm font-semibold text-[#1F3323] bg-transparent focus:outline-hidden cursor-pointer"
                  >
                    <option value={1}>1 Guest (Solo Retreat)</option>
                    <option value={2}>2 Guests (Couple / Pair)</option>
                    <option value={3}>3 Guests (Small Group)</option>
                    <option value={4}>4 Guests (Family / Sanctuary)</option>
                  </select>
                </div>
              </div>

              {/* 3D Elevated Search Button */}
              <div className="flex items-stretch">
                <button
                  type="submit"
                  className="w-full min-h-[48px] px-4 py-3 rounded-xl font-semibold text-sm sm:text-base text-white bg-gradient-to-b from-[#4A724E] via-[#355A39] to-[#254228] border border-[#6B9E70]/40 shadow-3d-btn hover:brightness-105 active:translate-y-0.5 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Check Availability</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Quick Micro-guarantee */}
            <div className="mt-3 text-center sm:text-right">
              <span className="text-[11px] text-stone-600 font-medium">
                ★ 100% Vegan breakfast & mountain herbal tea included with all direct bookings
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Wave Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#F8F6F0] to-transparent pointer-events-none" />
    </section>
  );
};
