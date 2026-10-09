import React from 'react';
import { PROPERTY_INFO } from '../data/propertyData';
import { Sparkles, ExternalLink, Heart, MessageCircle, Share2, Instagram } from 'lucide-react';

export const SocialGrid: React.FC = () => {
  const socialPlatforms = [
    {
      name: 'Instagram',
      handle: '@hilloraella',
      url: PROPERTY_INFO.socialLinks.instagram,
      tag: 'Daily Hillside Stories & Morning Mist',
      gradient: 'from-[#E1306C]/10 via-[#F77737]/10 to-[#5851DB]/10',
      borderAccent: 'group-hover:border-[#E1306C]/50',
      iconSvg: (
        <svg className="w-6 h-6 fill-current text-[#C13584]" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      handle: 'Hillora Ella Official',
      url: PROPERTY_INFO.socialLinks.facebook,
      tag: 'Updates, Reviews & Community Stays',
      gradient: 'from-[#1877F2]/10 to-[#0C5DC7]/10',
      borderAccent: 'group-hover:border-[#1877F2]/50',
      iconSvg: (
        <svg className="w-6 h-6 fill-current text-[#1877F2]" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      handle: '@HilloraElla',
      url: PROPERTY_INFO.socialLinks.youtube,
      tag: 'Cinematic Mountain Drone & Ambient Walks',
      gradient: 'from-[#FF0000]/10 to-[#B80000]/10',
      borderAccent: 'group-hover:border-[#FF0000]/50',
      iconSvg: (
        <svg className="w-6 h-6 fill-current text-[#FF0000]" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'TikTok',
      handle: '@hilloraella',
      url: PROPERTY_INFO.socialLinks.tiktok,
      tag: 'Misty Mornings & Vegan Breakfast Videos',
      gradient: 'from-[#00F2FE]/10 via-[#4FACFE]/10 to-[#FE0979]/10',
      borderAccent: 'group-hover:border-black/40',
      iconSvg: (
        <svg className="w-6 h-6 fill-current text-[#111111]" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
      ),
    },
    {
      name: 'Pinterest',
      handle: 'hillorae',
      url: PROPERTY_INFO.socialLinks.pinterest,
      tag: 'Eco Architecture & Ceylon Moodboards',
      gradient: 'from-[#BD081C]/10 to-[#8A0614]/10',
      borderAccent: 'group-hover:border-[#BD081C]/50',
      iconSvg: (
        <svg className="w-6 h-6 fill-current text-[#BD081C]" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.911 2.171-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
        </svg>
      ),
    },
    {
      name: 'Threads',
      handle: '@hilloraella',
      url: PROPERTY_INFO.socialLinks.threads,
      tag: 'Quiet Musings & Mountain Reflections',
      gradient: 'from-stone-500/10 to-stone-800/10',
      borderAccent: 'group-hover:border-stone-900/40',
      iconSvg: (
        <svg className="w-6 h-6 fill-current text-[#141414]" viewBox="0 0 24 24">
          <path d="M12.001 0C5.372 0 0 5.373 0 12c0 6.626 5.372 12 12.001 12 6.626 0 11.999-5.374 11.999-12 0-6.627-5.373-12-11.999-12zm4.845 13.914c-.201 2.378-1.745 3.73-4.145 3.73-2.695 0-4.495-1.89-4.495-4.718 0-2.915 1.88-4.767 4.67-4.767 2.457 0 4.092 1.49 4.195 3.702h-2.128c-.143-1.123-.974-1.758-2.067-1.758-1.554 0-2.474 1.144-2.474 2.823 0 1.637.893 2.775 2.404 2.775 1.155 0 1.942-.647 2.052-1.787h1.988z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F6F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E4DDD0] text-[#28442B] text-xs font-semibold tracking-wider uppercase mb-3 shadow-3d-badge">
            <Sparkles className="w-3.5 h-3.5 text-[#385E3B]" />
            <span>Community & Stories</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#192F1C] tracking-tight">
            Connect & Follow Our Journey
          </h2>
          <p className="font-sans-clean mt-4 text-base sm:text-lg text-[#526B55] font-light leading-relaxed">
            Follow along as we capture the changing mountain light, our organic vegan culinary creations,
            and gentle moments from the heart of Ella, Sri Lanka.
          </p>
        </div>

        {/* 3D Social Media Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mb-16">
          {socialPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white rounded-2xl p-5 border border-[#E5DFD1] shadow-3d-card hover:shadow-3d-card-hover transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1.5 cursor-pointer ${platform.borderAccent}`}
            >
              {/* 3D Elevated Icon Shell */}
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${platform.gradient} border border-stone-200/80 shadow-3d-btn flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}
              >
                {platform.iconSvg}
              </div>

              <div className="font-serif-luxury font-bold text-base text-[#1D3020] group-hover:text-[#2E5233] transition-colors">
                {platform.name}
              </div>

              <div className="text-[11px] font-mono text-[#6A816D] mt-0.5 font-medium truncate max-w-full">
                {platform.handle}
              </div>

              <span className="text-[10px] text-stone-500 mt-2 line-clamp-1 leading-tight">
                {platform.tag}
              </span>

              <div className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-[#3B623F] group-hover:underline">
                <span>Visit</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          ))}
        </div>

        {/* Community Visual Moments (Simulated Instagram Grid) */}
        <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-[#E6DFD2] shadow-3d-card">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#EAE3D4] gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-[#C13584]" />
                <span className="font-serif-luxury text-xl font-bold text-[#1E3220]">
                  @hilloraella on Instagram
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-1">
                Tag your stay with #HilloraElla #QuietStayInTheHills to be featured
              </p>
            </div>

            <a
              href={PROPERTY_INFO.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-b from-[#3E6542] to-[#2B4B2F] text-white font-semibold text-xs shadow-3d-btn hover:brightness-105 transition-all"
            >
              <span>Follow On Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
                caption: 'Mornings on the stone veranda with Ceylon tea ✨',
                likes: '142',
              },
              {
                img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
                caption: '100% plant-based coconut hoppers & fresh fruit bowl 🌿',
                likes: '189',
              },
              {
                img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
                caption: 'Sunrise clouds rolling over Kithal Ella valley ⛰️',
                likes: '230',
              },
              {
                img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80',
                caption: 'Crisp white cotton linens and total stillness 🤍',
                likes: '175',
              },
            ].map((story, i) => (
              <a
                key={i}
                href={PROPERTY_INFO.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden aspect-square shadow-sm bg-stone-200"
              >
                <img
                  src={story.img}
                  alt={story.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white text-xs">
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-rose-300 mb-1">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    <span>{story.likes}</span>
                  </div>
                  <p className="line-clamp-2 text-[10px] text-stone-200 leading-snug">
                    {story.caption}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
