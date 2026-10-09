import React, { useState } from 'react';
import { ROOMS, PROPERTY_INFO } from '../data/propertyData';
import { Currency } from '../types';
import { 
  X, 
  Calendar, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  Mail, 
  ShieldCheck, 
  ArrowRight,
  Leaf 
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  initialRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  currency,
  initialRoomId,
  initialCheckIn,
  initialCheckOut,
  initialGuests = 2,
}) => {
  // Tomorrow's date
  const today = new Date();
  const defCheckIn = new Date(today);
  defCheckIn.setDate(today.getDate() + 1);
  const defCheckOut = new Date(today);
  defCheckOut.setDate(today.getDate() + 3);

  const formatDate = (d: Date) => d.toISOString().split('T')[0];

  const [roomId, setRoomId] = useState<string>(initialRoomId || ROOMS[0].id);
  const [checkIn, setCheckIn] = useState<string>(initialCheckIn || formatDate(defCheckIn));
  const [checkOut, setCheckOut] = useState<string>(initialCheckOut || formatDate(defCheckOut));
  const [guests, setGuests] = useState<number>(initialGuests);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [dietary, setDietary] = useState<string>('Strict Vegan (Standard)');
  const [specialNotes, setSpecialNotes] = useState<string>('');
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  if (!isOpen) return null;

  const selectedRoom = ROOMS.find((r) => r.id === roomId) || ROOMS[0];

  // Calculate nights
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const diffTime = Math.max(0, checkOutDate.getTime() - checkInDate.getTime());
  const nights = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

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

  const totalPrice = selectedRoom.pricePerNightUSD * nights;

  const generateBookingMessage = () => {
    return `*HILLORA ELLA - RESERVATION INQUIRY* ⛰️🌿
Guest Name: ${guestName || 'Guest'}
Phone/WhatsApp: ${guestPhone || 'Not provided'}
Email: ${guestEmail || 'Not provided'}
Room: ${selectedRoom.name}
Check-In: ${checkIn}
Check-Out: ${checkOut} (${nights} Night${nights > 1 ? 's' : ''})
Guests: ${guests} Guest${guests > 1 ? 's' : ''}
Dietary: ${dietary}
Estimated Total: ${formatPrice(totalPrice)}
Notes: ${specialNotes || 'None'}

Please confirm availability and booking details. Thank you!`;
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const text = generateBookingMessage();
    const url = `https://wa.me/${PROPERTY_INFO.phones[0].whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsConfirmed(true);
  };

  const handleEmailBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Reservation Request: ${selectedRoom.name} (${checkIn} to ${checkOut})`);
    const body = encodeURIComponent(generateBookingMessage());
    window.location.href = `mailto:${PROPERTY_INFO.email}?subject=${subject}&body=${body}`;
    setIsConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-[#FAF7F2] rounded-3xl max-w-3xl w-full my-8 shadow-3d-floating border border-white/80 overflow-hidden relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#203623] via-[#2A472E] to-[#1E3321] text-white p-6 sm:p-7 relative flex items-center justify-between">
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[#B6E4BD] text-xs font-semibold mb-2 border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Retreat Reservation</span>
            </div>

            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold tracking-tight">
              Reserve Your Stay at Hillora Ella
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 font-light">
              A quiet, conscious mountain escape in Kithal Ella, Sri Lanka.
            </p>
          </div>

          <div className="hidden sm:block shrink-0 mr-10 opacity-90">
            <img
              src="/logo.svg"
              alt="Hillora Ella Logo"
              className="w-20 h-20 object-contain drop-shadow-md"
            />
          </div>

          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {!isConfirmed ? (
          <div className="p-6 sm:p-8">
            <form onSubmit={handleWhatsAppBooking} className="space-y-6">
              {/* Room Choice */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#355339] mb-2">
                  Select Sanctuary
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {ROOMS.map((room) => (
                    <div
                      key={room.id}
                      onClick={() => setRoomId(room.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        roomId === room.id
                          ? 'bg-[#EBF3EB] border-[#385E3B] ring-2 ring-[#385E3B]/20 shadow-sm'
                          : 'bg-white border-[#E4DDD0] hover:bg-stone-50'
                      }`}
                    >
                      <div>
                        <div className="font-serif-luxury font-bold text-sm text-[#1B2F1F] leading-tight">
                          {room.name}
                        </div>
                        <div className="text-[11px] text-[#5A735E] mt-0.5 line-clamp-1">
                          {room.capacity}
                        </div>
                      </div>
                      <div className="mt-3 pt-2 border-t border-[#DFD8CB] flex items-baseline justify-between text-xs">
                        <span className="font-semibold text-[#27422B]">
                          {formatPrice(room.pricePerNightUSD)}
                        </span>
                        <span className="text-[10px] text-stone-500">/ night</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white p-3 rounded-xl border border-[#E4DDD0] shadow-3d-inset">
                  <label className="block text-[10px] uppercase font-bold text-stone-500 mb-1">
                    Check-in Date
                  </label>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#355339]" />
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full text-xs font-semibold text-[#1A2D1E] bg-transparent focus:outline-hidden"
                      required
                    />
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#E4DDD0] shadow-3d-inset">
                  <label className="block text-[10px] uppercase font-bold text-stone-500 mb-1">
                    Check-out Date
                  </label>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#355339]" />
                    <input
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      min={checkIn}
                      className="w-full text-xs font-semibold text-[#1A2D1E] bg-transparent focus:outline-hidden"
                      required
                    />
                  </div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#E4DDD0] shadow-3d-inset">
                  <label className="block text-[10px] uppercase font-bold text-stone-500 mb-1">
                    Guests
                  </label>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#355339]" />
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full text-xs font-semibold text-[#1A2D1E] bg-transparent focus:outline-hidden"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#355339] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-[#E4DDD0] text-xs focus:ring-2 focus:ring-[#385E3B]/20 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#355339] mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +44 7911 123456"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-[#E4DDD0] text-xs focus:ring-2 focus:ring-[#385E3B]/20 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#355339] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. elena@example.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-[#E4DDD0] text-xs focus:ring-2 focus:ring-[#385E3B]/20 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#355339] mb-1">
                    Dietary Preferences
                  </label>
                  <select
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-white border border-[#E4DDD0] text-xs focus:ring-2 focus:ring-[#385E3B]/20 focus:outline-hidden"
                  >
                    <option value="Strict Vegan (Plant-Powered)">Strict Vegan (Plant-Powered)</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Gluten-Free & Vegan">Gluten-Free & Vegan</option>
                    <option value="Standard Organic Food">Standard Organic Food</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#355339] mb-1">
                  Special Notes or Arrival Time
                </label>
                <textarea
                  rows={2}
                  placeholder="Need train station pickup from Kithal Ella / Ella town? Let us know..."
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-white border border-[#E4DDD0] text-xs focus:ring-2 focus:ring-[#385E3B]/20 focus:outline-hidden resize-none"
                />
              </div>

              {/* Pricing Breakdown Summary */}
              <div className="p-4 rounded-2xl bg-[#F0EBE0] border border-[#DDD5C5]">
                <div className="flex items-center justify-between text-xs text-stone-600 mb-1">
                  <span>
                    {formatPrice(selectedRoom.pricePerNightUSD)} × {nights} Night{nights > 1 ? 's' : ''}
                  </span>
                  <span className="font-semibold text-stone-800">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-stone-600 mb-1">
                  <span className="flex items-center gap-1 text-emerald-700">
                    <Leaf className="w-3.5 h-3.5" />
                    <span>Organic Vegan Breakfast (Daily)</span>
                  </span>
                  <span className="font-semibold text-emerald-700">Included ($0)</span>
                </div>
                <div className="flex items-center justify-between text-xs text-stone-600 mb-2">
                  <span>Eco Tourism Taxes & Wi-Fi</span>
                  <span className="font-semibold text-stone-700">Included</span>
                </div>

                <div className="pt-2 border-t border-[#D5CBBA] flex items-baseline justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold text-[#1B301F]">
                      Total Estimated Stay:
                    </span>
                    <span className="text-[10px] text-stone-500 block">
                      Pay directly to host at or before check-in
                    </span>
                  </div>
                  <div className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1F3622]">
                    {formatPrice(totalPrice)}
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-4 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-600 to-[#2A4D2E] hover:from-emerald-500 hover:to-[#315A36] shadow-3d-btn flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Reserve via WhatsApp (Fastest)</span>
                </button>

                <button
                  type="button"
                  onClick={handleEmailBooking}
                  className="w-full sm:flex-1 py-3.5 px-4 rounded-xl font-semibold text-sm text-[#27442B] bg-white border border-[#3C6440]/30 hover:bg-stone-50 shadow-3d-card flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Mail className="w-4 h-4 text-[#3C6440]" />
                  <span>Reserve via Email</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero prepayment required upfront. Free cancellation up to 48h before arrival.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="font-serif-luxury text-3xl font-bold text-[#1F3323]">
              Reservation Request Dispatched!
            </h4>

            <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
              We have opened your message to Hillora Ella. Our hosts will verify your requested dates
              ({checkIn} to {checkOut}) and respond promptly.
            </p>

            <div className="p-4 rounded-2xl bg-[#EFE9DC] max-w-sm mx-auto text-xs text-left space-y-1">
              <div><strong>Sanctuary:</strong> {selectedRoom.name}</div>
              <div><strong>Dates:</strong> {checkIn} — {checkOut} ({nights} nights)</div>
              <div><strong>Total:</strong> {formatPrice(totalPrice)}</div>
            </div>

            <button
              onClick={() => {
                setIsConfirmed(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#2A4D2E] text-white font-semibold text-xs shadow-3d-btn hover:bg-[#1E3721]"
            >
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
