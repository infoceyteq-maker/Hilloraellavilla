import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'emblem-only';
  inverted?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'horizontal',
  inverted = false,
  size = 'md',
}) => {
  const primaryColor = inverted ? '#FAF7F2' : '#142918'; // Deep Forest Green
  const accentGold = '#C19A5B'; // Metallic 3D Gold
  const accentGoldLight = '#E4CE98';
  const sageColor = inverted ? '#A2BEA5' : '#45624A';

  // SVG representation replicating the embossed official Hillora Ella emblem without background
  const EmblemSvg = (
    <svg
      viewBox="0 0 320 280"
      className="w-full h-full drop-shadow-sm"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hillora Ella Official Transparent Emblem"
    >
      <defs>
        <linearGradient id="embossGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFBF7E" />
          <stop offset="45%" stopColor="#B68E49" />
          <stop offset="75%" stopColor="#E5C98D" />
          <stop offset="100%" stopColor="#9C7736" />
        </linearGradient>

        <linearGradient id="embossGoldLeaf" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#CBB078" />
          <stop offset="50%" stopColor="#E9D7A5" />
          <stop offset="100%" stopColor="#A8823F" />
        </linearGradient>

        <filter id="soft3DShadow" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Outer circular gold arc (embossed 3D look) */}
      <circle
        cx="160"
        cy="125"
        r="110"
        stroke="url(#embossGoldGrad)"
        strokeWidth="3.2"
        strokeDasharray="640 40"
        strokeDashoffset="70"
        filter="url(#soft3DShadow)"
      />

      {/* Birds soaring in sky */}
      <path
        d="M 120 48 Q 125 43 130 48 Q 135 43 140 48"
        stroke={primaryColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 142 38 Q 146 34 150 38 Q 154 34 158 38"
        stroke={primaryColor}
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 164 45 Q 168 41 172 45 Q 176 41 180 45"
        stroke={primaryColor}
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Mountain Peaks with Woodcut Hatching */}
      {/* Background Ridge */}
      <path
        d="M 70 160 L 115 105 L 140 125 L 175 90 L 225 150"
        fill="none"
        stroke={sageColor}
        strokeWidth="1.5"
        opacity="0.5"
      />
      {/* Majestic Mountain (Ella Rock / Central Peak) */}
      <polygon
        points="138,72 195,140 158,160 138,72"
        fill={inverted ? '#2D4432' : '#233F28'}
        opacity="0.18"
      />
      <path
        d="M 80 165 L 138 72 L 195 140"
        stroke={primaryColor}
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Ridge line & shaded slope */}
      <path
        d="M 138 72 L 148 115 L 158 160"
        stroke={primaryColor}
        strokeWidth="2"
        fill="none"
      />
      {/* Shading lines on mountain slope */}
      <path
        d="M 130 92 L 138 90 M 122 108 L 139 104 M 115 122 L 142 118 M 102 140 L 146 135 M 92 155 L 152 148"
        stroke={primaryColor}
        strokeWidth="1.2"
        opacity="0.85"
      />

      {/* Retreat Villa / Two-story Chalet */}
      <g id="villa">
        {/* Upper floor & roof */}
        <polygon
          points="150,140 195,112 250,132 205,160"
          fill={inverted ? '#1E2E21' : '#F6F4ED'}
          stroke={primaryColor}
          strokeWidth="2"
        />
        {/* Balcony structure */}
        <rect
          x="154"
          y="136"
          width="48"
          height="14"
          fill="none"
          stroke={primaryColor}
          strokeWidth="1.6"
        />
        {/* Balcony cross railings */}
        <line x1="154" y1="136" x2="166" y2="150" stroke={primaryColor} strokeWidth="1.2" />
        <line x1="166" y1="136" x2="154" y2="150" stroke={primaryColor} strokeWidth="1.2" />
        <line x1="166" y1="136" x2="178" y2="150" stroke={primaryColor} strokeWidth="1.2" />
        <line x1="178" y1="136" x2="166" y2="150" stroke={primaryColor} strokeWidth="1.2" />
        <line x1="178" y1="136" x2="190" y2="150" stroke={primaryColor} strokeWidth="1.2" />
        <line x1="190" y1="136" x2="178" y2="150" stroke={primaryColor} strokeWidth="1.2" />
        <line x1="190" y1="136" x2="202" y2="150" stroke={primaryColor} strokeWidth="1.2" />
        <line x1="202" y1="136" x2="190" y2="150" stroke={primaryColor} strokeWidth="1.2" />

        {/* Lower Ground floor & Porch */}
        <rect
          x="158"
          y="150"
          width="44"
          height="22"
          fill={inverted ? '#1A291E' : '#FFFFFF'}
          stroke={primaryColor}
          strokeWidth="2"
        />
        {/* Lower windows / doors */}
        <rect x="175" y="155" width="12" height="17" fill={primaryColor} fillOpacity="0.85" />
        <line x1="181" y1="155" x2="181" y2="172" stroke="#FFF" strokeWidth="1" />
        <rect x="162" y="157" width="8" height="8" fill={primaryColor} fillOpacity="0.3" stroke={primaryColor} strokeWidth="1" />

        {/* Supporting Pillars */}
        <line x1="156" y1="148" x2="156" y2="172" stroke={primaryColor} strokeWidth="2.2" />
        <line x1="200" y1="148" x2="200" y2="172" stroke={primaryColor} strokeWidth="2.2" />

        {/* Steps */}
        <line x1="154" y1="172" x2="204" y2="172" stroke={primaryColor} strokeWidth="2" />
        <line x1="151" y1="175" x2="207" y2="175" stroke={primaryColor} strokeWidth="2" />
      </g>

      {/* Tall Iconic Hillside Tree (Breaking the gold arc with 3D depth) */}
      <g id="tree">
        {/* Trunk */}
        <path
          d="M 226 172 Q 224 100 227 60 Q 230 40 232 30"
          stroke={primaryColor}
          strokeWidth="3.4"
          strokeLinecap="round"
          fill="none"
        />
        {/* Foliage clusters */}
        <path
          d="M 210 50 Q 232 20 255 52 Q 265 70 240 75 Q 215 78 210 50 Z"
          fill={primaryColor}
          filter="url(#soft3DShadow)"
        />
        <path
          d="M 188 78 Q 206 62 224 80 Q 226 95 204 94 Q 186 92 188 78 Z"
          fill={primaryColor}
        />
        <path
          d="M 225 90 Q 242 75 258 92 Q 260 105 240 106 Q 222 104 225 90 Z"
          fill={primaryColor}
        />
      </g>

      {/* Hillside foliage & foreground bushes */}
      <path
        d="M 60 185 Q 110 165 170 178 Q 220 185 270 170"
        stroke={primaryColor}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Organic Swooping Arch (the logo's characteristic base wave) */}
      <path
        d="M 45 198 Q 120 175 185 192 T 285 178"
        stroke={primaryColor}
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
        filter="url(#soft3DShadow)"
      />
    </svg>
  );

  if (variant === 'emblem-only') {
    const sizeClasses = {
      sm: 'w-10 h-10',
      md: 'w-14 h-14',
      lg: 'w-20 h-20',
      xl: 'w-28 h-28',
    }[size];

    return (
      <div className={`relative flex items-center justify-center ${sizeClasses} ${className}`}>
        {EmblemSvg}
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <div className="w-24 h-24 md:w-32 md:h-32 mb-1 drop-shadow-sm">
          {EmblemSvg}
        </div>

        {/* HILLORA with botanical sprig on 'A' */}
        <div className="relative inline-flex items-center">
          <span
            className="tracking-[0.24em] font-serif-luxury text-2xl md:text-3xl font-bold uppercase transition-colors"
            style={{ color: primaryColor }}
          >
            HILLORA
          </span>

          {/* Golden Botanical Sprig Branch branching out of 'A' */}
          <div className="absolute -right-4 -bottom-1 pointer-events-none">
            <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
              <path
                d="M 4 28 Q 16 22 28 14"
                stroke={accentGold}
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M 18 18 C 20 12, 28 10, 32 14 C 28 20, 20 22, 18 18 Z"
                fill={accentGold}
              />
              <path
                d="M 28 14 C 34 10, 38 16, 36 22 C 30 22, 26 18, 28 14 Z"
                fill={accentGoldLight}
              />
              <path
                d="M 12 24 C 14 18, 20 18, 22 22 C 18 26, 14 26, 12 24 Z"
                fill={accentGold}
              />
            </svg>
          </div>
        </div>

        {/* ELLA with Golden Accent Rules */}
        <div className="flex items-center gap-2 my-1.5">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: accentGold }} />
            <div className="h-[1.5px] w-8 md:w-12" style={{ backgroundColor: accentGold }} />
          </div>

          <span
            className="tracking-[0.38em] text-sm md:text-base font-serif-luxury font-bold uppercase"
            style={{ color: accentGold }}
          >
            ELLA
          </span>

          <div className="flex items-center gap-1">
            <div className="h-[1.5px] w-8 md:w-12" style={{ backgroundColor: accentGold }} />
            <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: accentGold }} />
          </div>
        </div>

        {/* Subtitle */}
        <div
          className="tracking-[0.24em] text-[10px] md:text-xs font-sans-clean uppercase font-semibold mt-0.5"
          style={{ color: inverted ? '#D0DDD2' : '#4C6650' }}
        >
          A QUIET STAY IN THE HILLS
        </div>

        {/* Centered Golden Botanical Leaf Ornament */}
        <div className="flex items-center justify-center gap-2 mt-2 opacity-90">
          <div className="w-4 h-[1px]" style={{ backgroundColor: accentGold }} />
          <div className="flex items-center gap-0.5">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill={accentGold}>
              <path d="M12 3 C14 8, 20 10, 19 16 C 18 20, 13 21, 12 21 C 11 21, 6 20, 5 16 C 4 10, 10 8, 12 3 Z" />
            </svg>
          </div>
          <div className="w-4 h-[1px]" style={{ backgroundColor: accentGold }} />
        </div>
      </div>
    );
  }

  // Horizontal variant (Ideal for sticky navigation bar)
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="w-12 h-12 md:w-13 md:h-13 shrink-0 drop-shadow-sm transition-transform duration-300 hover:scale-105">
        {EmblemSvg}
      </div>
      <div className="flex flex-col justify-center text-left leading-tight">
        <div className="flex items-baseline gap-1.5 relative">
          <span
            className="font-serif-luxury text-xl md:text-2xl font-bold tracking-[0.16em] uppercase transition-colors"
            style={{ color: primaryColor }}
          >
            HILLORA
          </span>
          <span
            className="font-serif-luxury text-sm md:text-base font-bold tracking-[0.22em] uppercase"
            style={{ color: accentGold }}
          >
            ELLA
          </span>

          {/* Golden sprig leaf accent */}
          <span className="inline-block transform -translate-y-1 text-xs" style={{ color: accentGold }}>
            🌿
          </span>
        </div>
        <span
          className="font-sans-clean text-[9px] md:text-[10px] tracking-[0.22em] uppercase font-semibold mt-0.5"
          style={{ color: inverted ? '#C2D5C4' : '#526E55' }}
        >
          A QUIET STAY IN THE HILLS
        </span>
      </div>
    </div>
  );
};
