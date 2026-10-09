import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AboutSection } from './components/AboutSection';
import { RoomsSection } from './components/RoomsSection';
import { GallerySection } from './components/GallerySection';
import { SocialGrid } from './components/SocialGrid';
import { ContactFooter } from './components/ContactFooter';
import { BookingModal } from './components/BookingModal';
import { PhotoPlaceholderModal } from './components/PhotoPlaceholderModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Currency } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPhotoManagerOpen, setIsPhotoManagerOpen] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  const [currency, setCurrency] = useState<Currency>('USD');
  const [isMapPlaceholdersMode, setIsMapPlaceholdersMode] = useState(false);

  // Search parameters from Hero widget
  const [bookingParams, setBookingParams] = useState<{
    checkIn?: string;
    checkOut?: string;
    guests?: number;
  }>({});

  const handleOpenBooking = (roomId?: string) => {
    setSelectedRoomId(roomId);
    setIsBookingOpen(true);
  };

  const handleHeroSearch = (params: {
    checkIn: string;
    checkOut: string;
    guests: number;
    roomId?: string;
  }) => {
    setBookingParams({
      checkIn: params.checkIn,
      checkOut: params.checkOut,
      guests: params.guests,
    });
    setSelectedRoomId(params.roomId);
    setIsBookingOpen(true);
  };

  const toggleMapPlaceholders = () => {
    setIsMapPlaceholdersMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F0] text-[#2C3E2D] font-sans-clean antialiased selection:bg-[#7A9A78] selection:text-white">
      {/* Sticky Glassmorphic Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
        currency={currency}
        onCurrencyChange={setCurrency}
        isMapPlaceholdersMode={isMapPlaceholdersMode}
        onToggleMapPlaceholders={toggleMapPlaceholders}
      />

      <main>
        {/* Hero Section with Floating 3D Booking Widget */}
        <Hero
          onSearchAvailability={handleHeroSearch}
          isMapPlaceholdersMode={isMapPlaceholdersMode}
          onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
        />

        {/* Why Choose Us (3D Features Section) */}
        <Features />

        {/* About Us & Retreat Story */}
        <AboutSection
          isMapPlaceholdersMode={isMapPlaceholdersMode}
          onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
        />

        {/* Rooms & Booking Section */}
        <RoomsSection
          onSelectRoom={(id) => handleOpenBooking(id)}
          currency={currency}
          isMapPlaceholdersMode={isMapPlaceholdersMode}
          onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
        />

        {/* Photo Gallery with Google Maps image slots */}
        <GallerySection
          isMapPlaceholdersMode={isMapPlaceholdersMode}
          onOpenPhotoManager={() => setIsPhotoManagerOpen(true)}
        />

        {/* Social Media & Community Grid */}
        <SocialGrid />
      </main>

      {/* Footer & Contact Section */}
      <ContactFooter onOpenBooking={() => handleOpenBooking()} />

      {/* Floating WhatsApp Quick Action */}
      <FloatingWhatsApp onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Reservation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        currency={currency}
        initialRoomId={selectedRoomId}
        initialCheckIn={bookingParams.checkIn}
        initialCheckOut={bookingParams.checkOut}
        initialGuests={bookingParams.guests}
      />

      {/* Photo Placeholder & Maps Swap Guide Modal */}
      <PhotoPlaceholderModal
        isOpen={isPhotoManagerOpen}
        onClose={() => setIsPhotoManagerOpen(false)}
        isMapPlaceholdersMode={isMapPlaceholdersMode}
        onToggleMapPlaceholders={toggleMapPlaceholders}
      />
    </div>
  );
}
