import React, { useState } from 'react';
import { MessageCircle, X, Phone, Calendar } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Menu Popover */}
      {isOpen && (
        <div className="mb-3 w-72 bg-[#FAF8F3] rounded-2xl shadow-3d-floating border border-[#E4DCCE] p-4 text-[#1C2F1E] animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#E3DACB]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-serif-luxury font-bold text-base">Hillora Ella Host</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-stone-700 p-1 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-stone-600 my-3 leading-relaxed">
            Ayubowan! We are here to assist with your quiet mountain stay, vegan meals, or directions.
          </p>

          <div className="space-y-2">
            <a
              href={`https://wa.me/${PROPERTY_INFO.phones[0].whatsapp}?text=${encodeURIComponent(
                'Hello! I would like to inquire about booking a stay at Hillora Ella.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Primary (+94 71)</span>
            </a>

            <a
              href={`https://wa.me/${PROPERTY_INFO.phones[1].whatsapp}?text=${encodeURIComponent(
                'Hello! I would like to inquire about booking a stay at Hillora Ella.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-xl bg-emerald-700/80 hover:bg-emerald-700 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Mobile (+94 76)</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2 px-3 rounded-xl bg-[#2E4F32] hover:bg-[#223C26] text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Open Online Booking Form</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Floating 3D Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-[#2A5230] text-white shadow-3d-btn flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/60 cursor-pointer"
        aria-label="Direct WhatsApp Contact"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </button>
    </div>
  );
};
