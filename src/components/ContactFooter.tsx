import React, { useState } from 'react';
import { PROPERTY_INFO } from '../data/propertyData';
import { Logo } from './Logo';
import { 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle, 
  Star, 
  ExternalLink, 
  Send, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Heart 
} from 'lucide-react';

interface ContactFooterProps {
  onOpenBooking: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenBooking }) => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [selectedWhatsAppTarget, setSelectedWhatsAppTarget] = useState(PROPERTY_INFO.phones[0].whatsapp);
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Hillora Ella!\nMy name is ${inquiryName || 'Guest'}.\nContact: ${inquiryPhone || 'Not specified'}.\nInquiry: ${inquiryMessage || 'I would like to inquire about staying at Hillora Ella.'}`;
    const url = `https://wa.me/${selectedWhatsAppTarget}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setSubmittedFeedback(true);
    setTimeout(() => setSubmittedFeedback(false), 5000);
  };

  return (
    <footer id="contact" className="bg-[#18271B] text-[#E4EDE5] pt-20 pb-12 relative overflow-hidden">
      {/* Decorative backdrop shapes */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5E8E64] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Contact & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Left Column: Property Details & Direct Contact */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Brand Logo in Footer (using uploaded official logo emblem) */}
              <div className="mb-6">
                <Logo variant="horizontal" inverted={true} />
              </div>

              <p className="font-sans-clean text-sm text-[#B3CBB6] leading-relaxed mb-6 font-light">
                {PROPERTY_INFO.subtitle} Nestled quietly on the mist-kissed hillside of Kithal Ella,
                we welcome mindful travelers seeking organic simplicity, fresh mountain air, and true peace.
              </p>

              {/* Direct Location Address */}
              <div className="flex items-start gap-3.5 mb-5 p-4 rounded-2xl bg-white/5 border border-white/10 shadow-3d-card">
                <div className="p-2.5 rounded-xl bg-[#2D4D31] text-[#9FE5A6] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#A6C5A9] font-semibold">
                    Physical Address
                  </div>
                  <div className="text-sm font-medium text-white mt-0.5">
                    {PROPERTY_INFO.address}
                  </div>
                  <a
                    href={PROPERTY_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#E8D49E] hover:underline mt-1.5 font-medium"
                  >
                    <span>Open in Google Maps Navigation</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5 mb-5 p-3.5 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-2 rounded-xl bg-[#2D4D31] text-[#9FE5A6] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[11px] uppercase tracking-wider text-[#A6C5A9] font-semibold">
                    Email Inquiries
                  </div>
                  <a
                    href={`mailto:${PROPERTY_INFO.email}`}
                    className="text-sm text-white hover:text-[#C5EAC8] font-medium"
                  >
                    {PROPERTY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Direct Lines & WhatsApp */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-xs uppercase tracking-wider text-[#A6C5A9] font-semibold mb-3 flex items-center justify-between">
                  <span>Direct Lines / WhatsApp Assistance</span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Available Daily
                  </span>
                </div>

                <div className="space-y-2.5">
                  {PROPERTY_INFO.phones.map((phone, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-black/20 hover:bg-black/30 border border-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-3.5 h-3.5 text-[#9FE5A6]" />
                        <div>
                          <div className="text-xs font-semibold text-white">
                            {phone.number}
                          </div>
                          <div className="text-[10px] text-stone-400">
                            {phone.label}
                          </div>
                        </div>
                      </div>

                      <a
                        href={`https://wa.me/${phone.whatsapp}?text=${encodeURIComponent(
                          'Hello Hillora Ella, I would like to inquire about booking a room.'
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 px-2.5 rounded-lg bg-emerald-600/80 hover:bg-emerald-600 text-white text-xs font-medium flex items-center gap-1 shadow-sm"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">WhatsApp</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Business Profile Review Card */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#223B26] to-[#1D3220] border border-[#527E57]/40 shadow-3d-card flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">5.0 Star Rating</span>
                </div>
                <div className="text-xs text-stone-300">
                  Google Business Profile & Guest Reviews
                </div>
              </div>
              <a
                href={PROPERTY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl bg-white text-[#192F1C] hover:bg-stone-100 font-semibold text-xs flex items-center gap-1 shadow-sm cursor-pointer"
              >
                <span>Read Reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Quick Inquiry Form */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Embedded Google Map Section */}
            <div className="rounded-3xl overflow-hidden border border-white/15 shadow-3d-card bg-stone-900 relative">
              <div className="p-3.5 bg-[#203423] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-white">
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>Hillora Ella Location Map (Kithal Ella)</span>
                </div>
                <a
                  href={PROPERTY_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#EAD8A7] hover:underline flex items-center gap-1"
                >
                  <span>Open Fullscreen Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative h-64 sm:h-72 w-full bg-stone-800">
                <iframe
                  title="Google Map Location - Hillora Ella"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    'Hillora Ella, No. 54 Yahalegoda, Kithal Ella, Ella, Sri Lanka'
                  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0 filter saturate-90 contrast-105"
                  loading="lazy"
                  allowFullScreen
                />

                {/* Floating Map Pin Badge */}
                <div className="absolute bottom-3 left-3 bg-[#1C2F1F]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-xs text-white shadow-lg pointer-events-none">
                  <span className="font-semibold text-white">Hillora Ella</span> · Kithal Ella, Sri Lanka
                </div>
              </div>
            </div>

            {/* Quick Instant WhatsApp / Message Box */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 shadow-3d-card">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#9FE5A6]" />
                  <h4 className="font-serif-luxury text-xl font-bold text-white">
                    Send Direct Inquiry via WhatsApp
                  </h4>
                </div>
                <span className="text-[11px] text-[#A6C5A9]">
                  Instant Host Reply
                </span>
              </div>

              <form onSubmit={handleSendInquiry} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/30 border border-white/15 text-white placeholder-stone-400 text-xs focus:outline-hidden focus:border-[#9FE5A6]"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Your Phone / WhatsApp"
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/30 border border-white/15 text-white placeholder-stone-400 text-xs focus:outline-hidden focus:border-[#9FE5A6]"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-stone-300">
                  <span>Send to:</span>
                  <select
                    value={selectedWhatsAppTarget}
                    onChange={(e) => setSelectedWhatsAppTarget(e.target.value)}
                    className="px-2 py-1 rounded-lg bg-black/40 border border-white/15 text-xs text-[#9FE5A6] focus:outline-hidden"
                  >
                    <option value={PROPERTY_INFO.phones[0].whatsapp}>
                      Sri Lanka: {PROPERTY_INFO.phones[0].number}
                    </option>
                    <option value={PROPERTY_INFO.phones[1].whatsapp}>
                      Sri Lanka: {PROPERTY_INFO.phones[1].number}
                    </option>
                    <option value={PROPERTY_INFO.phones[2].whatsapp}>
                      France: {PROPERTY_INFO.phones[2].number}
                    </option>
                  </select>
                </div>

                <textarea
                  rows={2}
                  placeholder="Inquire about dates, room options, vegan dining, or airport transfers..."
                  value={inquiryMessage}
                  onChange={(e) => setInquiryMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/30 border border-white/15 text-white placeholder-stone-400 text-xs focus:outline-hidden focus:border-[#9FE5A6] resize-none"
                  required
                />

                <div className="flex items-center justify-between pt-1">
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-[#356139] hover:from-emerald-500 hover:to-[#3B6C40] text-white font-semibold text-xs shadow-3d-btn flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="text-xs text-[#EAD8A7] hover:underline"
                  >
                    Or use full booking form →
                  </button>
                </div>

                {submittedFeedback && (
                  <p className="text-xs text-emerald-400 mt-2">
                    ✓ WhatsApp opened in new tab. We look forward to connecting with you!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Eco Philosophy */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#87A48B] gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Hillora Ella. All Rights Reserved.</span>
            <span>·</span>
            <span className="text-[#B5CEB8]">A Quiet Stay in the Hills</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/30" />
              <span>Conscious Vegan & Eco Living</span>
            </span>
            <a href="#hero" className="hover:text-white transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
