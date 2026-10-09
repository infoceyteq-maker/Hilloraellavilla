export interface Room {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  pricePerNightUSD: number;
  capacity: string;
  bedType: string;
  sizeSqM: number;
  view: string;
  image: string;
  placeholderLabel: string;
  amenities: {
    icon: string;
    label: string;
  }[];
  highlights: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'exterior' | 'terrace' | 'views' | 'dining' | 'rooms';
  image: string;
  placeholderLabel: string;
  caption: string;
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomId: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
  dietaryPreference: string;
}

export type Currency = 'USD' | 'EUR' | 'LKR';
