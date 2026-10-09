import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, Menu, X, Calendar, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';
import { Currency } from '../types';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenPhotoManager: () => void;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  isMapPlaceholdersMode: boolean;
  onToggleMapPlaceholders: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenPhotoManager,
  currency,
  onCurrencyChange,
  isMapPlaceholdersMode,
  onToggleMapPlaceholders,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F9F7F2]/90 backdrop-blur-md shadow-md py-3 border-b border-[#2C3E2D]/10'
            : 'bg-gradient-to-b from-[#17251A]/60 via-[#17251A]/30 to-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="group flex items-center transition-opacity hover:opacity-95">
              <Logo
                variant="horizontal"
                inverted={!isScrolled}
                className="transform group-hover:scale-[1.02] transition-transform duration-200"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:transition-all hover:after:w-full ${
                    isScrolled
                      ? 'text-[#243627] hover:text-[#3B5B3E] after:bg-[#3B5B3E]'
                      : 'text-white/90 hover:text-white after:bg-[#E3D4B6]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Actions & CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Currency Selector */}
              <div
                className={`flex items-center rounded-lg p-0.5 text-xs font-semibold border ${
                  isScrolled
                    ? 'bg-[#EAE5D9]/70 border-[#2C3E2D]/15 text-[#2C3E2D]'
                    : 'bg-black/30 border-white/20 text-white backdrop-blur-sm'
                }`}
              >
                {(['USD', 'EUR', 'LKR'] as Currency[]).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => onCurrencyChange(curr)}
                    className={`px-2 py-1 rounded transition-all ${
                      currency === curr
                        ? isScrolled
                          ? 'bg-[#2E4F32] text-white shadow-xs'
                          : 'bg-white text-[#203423] shadow-xs'
                        : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>

              {/* Photo Mode / Maps Inspector Toggle */}
              <button
                onClick={onToggleMapPlaceholders}
                title="Toggle Google Maps image slot placeholders"
                className={`text-xs px-2.5 py-1.5 rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer ${
                  isMapPlaceholdersMode
                    ? 'bg-[#C58B35] text-white border-[#A87224] shadow-xs font-semibold'
                    : isScrolled
                    ? 'bg-white/80 text-[#3E5240] border-[#2C3E2D]/15 hover:bg-white'
                    : 'bg-black/30 text-white border-white/20 hover:bg-black/40 backdrop-blur-sm'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{isMapPlaceholdersMode ? 'Maps Slots: ON' : 'Maps Slots'}</span>
              </button>

              {/* Direct WhatsApp link */}
              <a
                href={`https://wa.me/${PROPERTY_INFO.phones[0].whatsapp}?text=${encodeURIComponent(
                  'Hello Hillora Ella, I am interested in inquiring about a quiet stay in the hills.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-xl transition-all border ${
                  isScrolled
                    ? 'bg-[#F2ECE1] text-[#2D4A30] border-[#2D4A30]/20 hover:bg-[#E7DFCF]'
                    : 'bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm'
                }`}
                title="Message on WhatsApp (+94 71 24 18 114)"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 fill-emerald-600/30" />
              </a>

              {/* 3D Elevated Book Now Button */}
              <button
                onClick={onOpenBooking}
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-gradient-to-b from-[#4A724E] via-[#355A39] to-[#254228] border border-[#5E8C63]/40 shadow-3d-btn active:translate-y-0.5 transition-all duration-150 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#CDE3CE]" />
                <span className="tracking-wide font-semibold">Book Now</span>
              </button>
            </div>

            {/* Mobile Hamburger & Quick CTA */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#355A39] shadow-3d-btn"
              >
                Book
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg border transition-colors ${
                  isScrolled
                    ? 'text-[#203423] border-[#203423]/20 bg-[#F2EDE2]'
                    : 'text-white border-white/20 bg-black/25'
                }`}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Glass Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FBF9F4]/98 backdrop-blur-xl border-b border-[#2C3E2D]/15 shadow-xl px-4 py-5 text-[#243627] mt-2 animate-in slide-in-from-top-2">
            <nav className="flex flex-col gap-3 font-medium text-base mb-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg hover:bg-[#EAE4D5] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#849C86] text-xs">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-[#2C3E2D]/10 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-600 font-medium">Currency Display:</span>
                <div className="flex items-center gap-1 bg-[#EAE5D9] p-1 rounded-lg">
                  {(['USD', 'EUR', 'LKR'] as Currency[]).map((c) => (
                    <button
                      key={c}
                      onClick={() => onCurrencyChange(c)}
                      className={`px-2 py-0.5 rounded font-semibold ${
                        currency === c ? 'bg-[#2E4F32] text-white' : 'text-stone-700'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => {
                    onToggleMapPlaceholders();
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex-1 py-2 text-xs rounded-xl font-medium border flex items-center justify-center gap-1.5 ${
                    isMapPlaceholdersMode
                      ? 'bg-[#C58B35] text-white border-[#A87224]'
                      : 'bg-white text-[#2E4F32] border-[#2C3E2D]/20'
                  }`}
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{isMapPlaceholdersMode ? 'Hide Maps Slots' : 'Inspect Maps Slots'}</span>
                </button>
                <button
                  onClick={() => {
                    onOpenPhotoManager();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex-1 py-2 text-xs rounded-xl font-medium border bg-[#F0EBE1] text-[#2E4F32] border-[#2C3E2D]/20 flex items-center justify-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#A67E42]" />
                  <span>Photo Guide</span>
                </button>
              </div>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#3C6440] to-[#28482B] shadow-3d-btn flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Your Stay</span>
              </button>

              <div className="flex items-center justify-center gap-4 pt-2 text-xs text-stone-500">
                <a
                  href={`tel:${PROPERTY_INFO.phones[0].tel}`}
                  className="flex items-center gap-1 hover:text-[#2E4F32]"
                >
                  <Phone className="w-3 h-3" />
                  <span>{PROPERTY_INFO.phones[0].number}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
