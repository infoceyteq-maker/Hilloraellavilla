import { Room, GalleryItem } from '../types';
import roomImage1 from '../assets/images/regenerated_image_1791491969280.png';
import roomImage2 from '../assets/images/regenerated_image_1791492050345.png';
import roomImage3 from '../assets/images/regenerated_image_1791492113863.png';
import gallerySunrise from '../assets/images/regenerated_image_1791493335594.jpg';
import galleryEntrance from '../assets/images/regenerated_image_1791493354259.webp';
import galleryCourtyard from '../assets/images/regenerated_image_1791493356708.jpg';

export const PROPERTY_INFO = {
  name: 'Hillora Ella',
  tagline: 'A Quiet Stay in the Hills',
  subtitle: 'Eco-friendly, vegan-inspired quiet luxury in the misty mountains of Sri Lanka.',
  address: 'No. 54, Yahalegoda, Kithal Ella, Ella, Sri Lanka',
  email: 'hilloraella@gmail.com',
  phones: [
    { label: 'Sri Lanka (Primary / WhatsApp)', number: '+94 71 24 18 114', tel: '+94712418114', whatsapp: '94712418114' },
    { label: 'Sri Lanka (Mobile / WhatsApp)', number: '+94 76 65 38 114', tel: '+94766538114', whatsapp: '94766538114' },
    { label: 'France (International Line)', number: '+33 75 840 3274', tel: '+33758403274', whatsapp: '33758403274' },
  ],
  googleMapsUrl: 'https://maps.app.goo.gl/st65DzDzJ9mktRhm9',
  googleMapsEmbedQuery: 'No. 54, Yahalegoda, Kithal Ella, Ella, Sri Lanka',
  socialLinks: {
    instagram: 'https://instagram.com/hilloraella',
    facebook: 'https://facebook.com/share/1CripESEts',
    youtube: 'https://youtube.com/@HilloraElla',
    tiktok: 'https://tiktok.com/@hilloraella',
    pinterest: 'https://pinterest.com/hillorae/_profile',
    threads: 'https://threads.net/@hilloraella',
  },
  altitude: '1,041 m above sea level',
  climate: 'Crisp mountain breezes & morning mist (18°C - 24°C)',
};

// Curated high-aesthetic images depicting Ella's tea hills, rustic stone veranda, and misty mornings
// Ready for user one-click swap with real Google Maps photos
export const PROPERTY_IMAGES = {
  hero: gallerySunrise, // User uploaded real Ella mountain retreat vista (regenerated_image_1791493335594.jpg)
  terrace: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80', // Mountain valley view
  teaGarden: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1600&q=80', // Sri Lanka tea estate
  diningVeranda: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80', // Eco outdoor dining
  roomDeluxe: roomImage1, // Suite 1 - Mountain Mist Deluxe (regenerated_image_1791491969280.png)
  roomSuite: roomImage2,  // Suite 2 - Tea Terrace Veranda (regenerated_image_1791492050345.png)
  roomCanopy: roomImage3, // Suite 3 - Kithal Serenity Sanctuary (regenerated_image_1791492113863.png)
  entrance: galleryEntrance, // Entrance steps & sign (regenerated_image_1791493354259.webp)
  sunrise: gallerySunrise,   // Misty sunrise panorama (regenerated_image_1791493335594.jpg)
  courtyard: galleryCourtyard, // Peaceful courtyard path (regenerated_image_1791493356708.jpg)
};

export const ROOMS: Room[] = [
  {
    id: 'mountain-mist-deluxe',
    name: 'Mountain Mist Deluxe Suite',
    subtitle: 'Private Balcony · Panoramic Ella Valley Vistas',
    description: 'Immerse yourself in stillness. Awaken to swirling cloud valleys through floor-to-ceiling glass doors, sink into crisp organic Egyptian cotton sheets, and sip fresh herbal infusions on your private teak balcony.',
    pricePerNightUSD: 85,
    capacity: '2 Guests · 1 King Bed',
    bedType: 'Custom Handcrafted King Bed',
    sizeSqM: 38,
    view: 'Panoramic Ella Rock & Kithal Ella Valley',
    image: PROPERTY_IMAGES.roomDeluxe,
    placeholderLabel: 'INSERT_REAL_MAPS_IMAGE_HERE (Suite 1 - Master Bedroom)',
    amenities: [
      { icon: 'bed', label: 'Crisp White Organic Linens' },
      { icon: 'eye', label: 'Private Valley Balcony' },
      { icon: 'coffee', label: 'Artisanal Herbal Tea Bar' },
      { icon: 'droplet', label: 'Solar Heated Rain Shower' },
      { icon: 'wifi', label: 'High-Speed Mountain Fiber Wi-Fi' },
      { icon: 'utensils', label: 'Complimentary Vegan Breakfast' },
    ],
    highlights: ['Bespoke stone accents', '100% plastic-free room amenities', 'Natural cross-ventilation system', 'Daily quiet meditation mat'],
  },
  {
    id: 'tea-terrace-canopy',
    name: 'The Tea Terrace Veranda Room',
    subtitle: 'Garden Level · Direct Access to Stone Courtyard',
    description: 'Stepping straight onto the sun-dappled stone courtyard and fragrant eucalyptus trees, this spacious room celebrates tactile clay brickwork, calming earth tones, and warm afternoon light.',
    pricePerNightUSD: 75,
    capacity: '2 - 3 Guests · 1 King + 1 Daybed',
    bedType: 'King Bed & Teak Daybed',
    sizeSqM: 42,
    view: 'Lush Tea Estate & Courtyard Gardens',
    image: PROPERTY_IMAGES.roomSuite,
    placeholderLabel: 'INSERT_REAL_MAPS_IMAGE_HERE (Suite 2 - Terrace Courtyard Room)',
    amenities: [
      { icon: 'bed', label: 'Luxury Cotton Bedding' },
      { icon: 'sun', label: 'Outdoor Shaded Seating' },
      { icon: 'leaf', label: 'Botanical Clay Toiletries' },
      { icon: 'droplet', label: 'Artisanal Rainshower' },
      { icon: 'wifi', label: 'Fast Mountain Wi-Fi' },
      { icon: 'utensils', label: 'Farm-Fresh Vegan Breakfast' },
    ],
    highlights: ['Handmade terracotta planters', 'Direct lawn & stone pathway access', 'Writing desk with valley perspective', 'Quiet acoustic insulation'],
  },
  {
    id: 'kithal-serenity-villa',
    name: 'Kithal Serenity Sanctuary',
    subtitle: 'Upper Level · 360° Mist & Forest Canopy',
    description: 'Our most secluded haven perched on the upper floor with vaulted wooden ceilings, panoramic wrapping windows, and front-row seats to spectacular morning mist rising through the valley.',
    pricePerNightUSD: 95,
    capacity: '2 Guests · 1 King Bed',
    bedType: 'Cloud King Bed with Goose-Down Alternative',
    sizeSqM: 46,
    view: 'Unobstructed Ella Mountain Ranges',
    image: PROPERTY_IMAGES.roomCanopy,
    placeholderLabel: 'INSERT_REAL_MAPS_IMAGE_HERE (Suite 3 - Upper Sanctuary)',
    amenities: [
      { icon: 'bed', label: 'Ultra-Soft Crisp White Linens' },
      { icon: 'mountain', label: 'Panoramic Dual Verandas' },
      { icon: 'coffee', label: 'Organic Ella Coffee & Tea Station' },
      { icon: 'bath', label: 'Stone Clad Luxury Bathroom' },
      { icon: 'wifi', label: 'Dedicated Fiber Wi-Fi' },
      { icon: 'utensils', label: 'Gourmet Vegan Morning Tasting' },
    ],
    highlights: ['Best sunrise photography angle', 'Complimentary evening herbal blend', 'Binoculars provided for birdwatching', 'Zero road noise guarantee'],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'The Open-Air Stone Dining Veranda',
    category: 'terrace',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    placeholderLabel: 'INSERT_REAL_MAPS_IMAGE_HERE (Stone Dining Veranda & Clay Pots)',
    caption: 'Handcrafted outdoor dining table overlooking the rolling emerald tea ridges of Kithal Ella.',
  },
  {
    id: 'gal-2',
    title: 'Hillora Ella Entrance & Stone Steps',
    category: 'exterior',
    image: galleryEntrance,
    placeholderLabel: 'INSERT_REAL_MAPS_IMAGE_HERE (Entrance Steps & Carved Wooden Sign)',
    caption: 'Welcoming stone pathway nestled under towering eucalyptus trees leading up to the quiet sanctuary.',
  },
  {
    id: 'gal-3',
    title: 'Misty Ella Sunrise Panorama',
    category: 'views',
    image: gallerySunrise,
    placeholderLabel: 'INSERT_REAL_MAPS_IMAGE_HERE (Morning Mountain Mist from Hillora)',
    caption: 'The sunrise spectacle: rolling mist through the Ella gorge bathed in golden morning light.',
  },
  {
    id: 'gal-4',
    title: 'Organic Farm-to-Table Vegan Breakfast',
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    placeholderLabel: 'INSERT_REAL_MAPS_IMAGE_HERE (Fresh Vegan Breakfast Table & Herbal Teas)',
    caption: 'Nourishing plant-based meals prepared with locally harvested organic fruits, coconut milk, and Ceylon spices.',
  },
  {
    id: 'gal-5',
    title: 'Clean Minimalist Suite with White Linens',
    category: 'rooms',
    image: roomImage1,
    placeholderLabel: 'INSERT_REAL_MAPS_IMAGE_HERE (Crisp White Linens & Suite Interior)',
    caption: 'Rest deeply in breathable natural fabrics with the quiet soundtrack of rustling mountain trees.',
  },
  {
    id: 'gal-6',
    title: 'Peaceful Courtyard & Garden Path',
    category: 'exterior',
    image: galleryCourtyard,
    placeholderLabel: 'INSERT_REAL_MAPS_IMAGE_HERE (Lush Courtyard, Lawn & White Villa)',
    caption: 'Manicured green lawn surrounded by wild tropical flora and rustic wooden boundary railings.',
  },
];

export const NEARBY_ATTRACTIONS = [
  { name: 'Kithal Ella Railway Viewpoint', distance: '10 min walk', desc: 'Watch the scenic mountain train glide gently through lush hillside cuttings.' },
  { name: 'Ella Rock Hiking Trail', distance: '15 min walk to trailhead', desc: 'Iconic trekking route through eucalyptus forests with dramatic precipice vistas.' },
  { name: 'Nine Arches Demodara Bridge', distance: '12 min drive', desc: 'World-renowned colonial viaduct bridge nestled amidst dense jungle greenery.' },
  { name: 'Little Adam’s Peak & Flying Ravana', distance: '10 min drive', desc: 'Gentle hiking ridge with 360-degree views, zip-lining, and sunset viewpoints.' },
  { name: 'Ravana Falls & Cave', distance: '15 min drive', desc: 'Cascading natural mountain waterfalls steeped in ancient Ramayana folklore.' },
  { name: 'Ella Town & Cafes', distance: '8 min drive / 2.5 km', desc: 'Vibrant local cafes, vegan eateries, and boutique shops just a quiet distance away.' },
];
