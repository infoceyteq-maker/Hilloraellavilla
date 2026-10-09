import React, { useState } from 'react';
import { Room, Currency } from '../types';
import { ROOMS } from '../data/propertyData';
import { 
  Users, 
  Maximize2, 
  Eye, 
  Wifi, 
  Droplet, 
  Coffee, 
  Leaf, 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  X,
  ExternalLink 
} from 'lucide-react';

interface RoomsSectionProps {
  onSelectRoom: (roomId: string) => void;
  currency: Currency;
  isMapPlaceholdersMode: boolean;
  onOpenPhotoManager: () => void;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  onSelectRoom,
  currency,
  isMapPlaceholdersMode,
  onOpenPhotoManager,
}) => {
  const [selectedRoomForDetails, setSelectedRoomForDetails] = useState<Room | null>(null);

  // Currency converters (USD base)
  const formatPrice = (usd: number) => {
    switch (currency) {
      case 'EUR':
        return `€${Math.round(usd * 0.92)}`;
      case 'LKR':
        return `Rs ${Math.round(usd * 305).toLocaleString()}`;
      case 'USD':
      default:
        return `$${usd}`;
    }
  };

  const renderAmenityIcon = (iconName: string) => {
    const className = 'w-3.5 h-3.5 text-[#3D6341]';
    switch (iconName) {
      case 'bed':
        return <Sparkles className={className} />;
      case 'eye':
      case 'mountain':
        return <Eye className={className} />;
      case 'coffee':
        return <Coffee className={className} />;
      case 'droplet':
      case 'bath':
        return <Droplet className={className} />;
      case 'wifi':
        return <Wifi className={className} />;
      case 'leaf':
      case 'utensils':
      default:
        return <Leaf className={className} />;
    }
  };

  return (
    <section id="rooms" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F2EB] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4DDD0] text-[#28442B] text-xs font-semibold tracking-wider uppercase mb-3 shadow-3d-badge">
            <Sparkles className="w-3.5 h-3.5 text-[#385E3B]" />
            <span>Eco-Luxury Sanctuaries</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B2F1F] tracking-tight">
            Rest in Misty Solitude
          </h2>
          <p className="font-sans-clean mt-4 text-base sm:text-lg text-[#526B55] font-light leading-relaxed">
            Crafted with local timber, cool mountain stone, and crisp white organic bedding.
            Fall asleep to the sound of whispering pines and wake to floating clouds.
          </p>

          {/* Real Maps Placeholder Info Banner */}
          <div className="mt-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/70 border border-[#DCD5C6] text-xs text-stone-600 shadow-xs">
            <span className="font-semibold text-[#2C4930]">Photo Slots:</span>
            <span>Room cards support direct photo replacement from Google Maps</span>
            <button
              onClick={onOpenPhotoManager}
              className="text-[#96631E] font-semibold hover:underline ml-1 cursor-pointer"
            >
              (Open Photo Guide)
            </button>
          </div>
        </div>

        {/* 3D Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((room) => (
            <div
              key={room.id}
              className="group bg-[#FCFAF6] rounded-3xl overflow-hidden border border-[#E5DFD1] shadow-3d-card hover:shadow-3d-card-hover transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              {/* Room Image Container & Map Slot Overlay */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-200">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Always-on or toggled 3D Placeholder label for Google Maps swaps */}
                <div
                  className={`absolute top-3 left-3 right-3 z-10 transition-opacity duration-300 ${
                    isMapPlaceholdersMode ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                >
                  <div className="bg-[#FAF6EE]/95 backdrop-blur-md border border-dashed border-[#A87224] text-[#704917] p-2 rounded-xl text-xs font-mono shadow-md flex items-center justify-between">
                    <span className="font-bold text-[10px] tracking-wider truncate">
                      {room.placeholderLabel}
                    </span>
                    <span className="text-[9px] bg-[#E8DCC9] px-1.5 py-0.5 rounded font-bold">
                      800×600
                    </span>
                  </div>
                </div>

                {/* Room View Pill */}
                <div className="absolute bottom-3 left-3 z-10">
                  <span className="px-3 py-1 rounded-full bg-black/55 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                    {room.view}
                  </span>
                </div>

                {/* Inspect Button */}
                <button
                  onClick={() => setSelectedRoomForDetails(room)}
                  className="absolute bottom-3 right-3 z-10 p-2 rounded-xl bg-white/85 text-[#1F3323] hover:bg-white shadow-md transition-colors"
                  title="View full room details & amenities"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title & Subtitle */}
                  <div className="mb-2">
                    <h3 className="font-serif-luxury text-2xl font-bold text-[#1B2F1F] group-hover:text-[#2E5233] transition-colors leading-tight">
                      {room.name}
                    </h3>
                    <p className="text-xs text-[#6A816D] font-medium mt-1">
                      {room.subtitle}
                    </p>
                  </div>

                  {/* Room Meta Specs */}
                  <div className="flex items-center gap-3 text-xs text-stone-600 my-4 pb-3 border-b border-[#EAE3D4]">
                    <div className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-[#3D6341]" />
                      <span>{room.capacity}</span>
                    </div>
                    <span>·</span>
                    <div>
                      <span>{room.sizeSqM} m²</span>
                    </div>
                    <span>·</span>
                    <div className="truncate">
                      <span>{room.bedType}</span>
                    </div>
                  </div>

                  {/* Room Description */}
                  <p className="font-sans-clean text-xs sm:text-sm text-[#4A604D] line-clamp-3 leading-relaxed mb-4">
                    {room.description}
                  </p>

                  {/* Eco-Friendly Amenities Grid */}
                  <div className="grid grid-cols-2 gap-2 my-4">
                    {room.amenities.slice(0, 4).map((amenity, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-1.5 p-2 rounded-lg bg-[#F3EDE2]/70 text-[11px] text-[#2C442F] font-medium"
                      >
                        {renderAmenityIcon(amenity.icon)}
                        <span className="truncate">{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & 3D Interactive Action */}
                <div className="pt-4 border-t border-[#EAE3D4] mt-auto">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-[11px] text-stone-500 uppercase tracking-wider block font-medium">
                        Nightly Retreat
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1F3622]">
                          {formatPrice(room.pricePerNightUSD)}
                        </span>
                        <span className="text-xs text-stone-500 font-medium">
                          / night
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-medium">
                        Vegan Breakfast Included
                      </span>
                    </div>
                  </div>

                  {/* Interactive Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedRoomForDetails(room)}
                      className="py-2.5 px-3 rounded-xl border border-[#3C6440]/30 text-[#2D4D31] font-semibold text-xs hover:bg-[#EBE4D5] transition-colors cursor-pointer"
                    >
                      Details & Photos
                    </button>
                    <button
                      onClick={() => onSelectRoom(room.id)}
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-b from-[#4A724E] via-[#355A39] to-[#254228] text-white font-semibold text-xs shadow-3d-btn hover:brightness-105 active:translate-y-0.5 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Book This Room</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Detail Modal Drawer */}
      {selectedRoomForDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/60 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedRoomForDetails(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-stone-200 hover:bg-stone-300 text-stone-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Room Image */}
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 shadow-md">
              <img
                src={selectedRoomForDetails.image}
                alt={selectedRoomForDetails.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#FAF6EE]/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-mono font-bold text-[#865719] border border-[#865719]/40">
                {selectedRoomForDetails.placeholderLabel}
              </div>
            </div>

            <h3 className="font-serif-luxury text-3xl font-bold text-[#1E3322]">
              {selectedRoomForDetails.name}
            </h3>
            <p className="text-sm text-[#4E6852] mt-1 mb-4 font-medium">
              {selectedRoomForDetails.subtitle}
            </p>

            <p className="text-sm text-stone-700 leading-relaxed mb-6">
              {selectedRoomForDetails.description}
            </p>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#355339] mb-3">
                Sanctuary Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                {selectedRoomForDetails.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-[#EFE9DD]/70">
                    <CheckCircle className="w-3.5 h-3.5 text-[#355339] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities list */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#355339] mb-3">
                All Eco-Friendly Amenities
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {selectedRoomForDetails.amenities.map((a, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-[#E3DCCF] text-xs text-[#2A442E]">
                    {renderAmenityIcon(a.icon)}
                    <span className="font-medium truncate">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="flex items-center justify-between pt-6 border-t border-[#E3DCCF]">
              <div>
                <span className="text-xs text-stone-500">Nightly rate:</span>
                <div className="font-serif-luxury text-3xl font-bold text-[#203623]">
                  {formatPrice(selectedRoomForDetails.pricePerNightUSD)}
                </div>
              </div>
              <button
                onClick={() => {
                  const id = selectedRoomForDetails.id;
                  setSelectedRoomForDetails(null);
                  onSelectRoom(id);
                }}
                className="px-6 py-3 rounded-xl font-semibold text-white bg-[#355A39] shadow-3d-btn hover:bg-[#2B4B2F] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Reserve This Suite</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
