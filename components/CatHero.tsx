import React from 'react';

export const CatHero: React.FC = () => {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
      {/* 
        SVG composition:
        1. Define a mask which is the cat shape.
        2. Fill the masked area with a rotating sunflower/sun graphic.
      */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* The Rotating Pattern to go inside the cat */}
          <pattern id="sunflowerPattern" x="0" y="0" width="500" height="500" patternUnits="userSpaceOnUse">
            <g className="origin-center animate-spin-slow" style={{ transformOrigin: '250px 250px' }}>
                {/* Sun Core */}
                <circle cx="250" cy="250" r="50" fill="#FFD700" />
                {/* Petals/Rays */}
                {[...Array(12)].map((_, i) => (
                    <path
                        key={i}
                        d="M250 250 L250 50 L280 150 Z"
                        fill={i % 2 === 0 ? "#FFA500" : "#F0E68C"}
                        transform={`rotate(${i * 30} 250 250)`}
                    />
                ))}
                 {[...Array(12)].map((_, i) => (
                    <path
                        key={`inner-${i}`}
                        d="M250 250 L250 120 L265 180 Z"
                        fill="#FF8C00"
                        transform={`rotate(${i * 30 + 15} 250 250)`}
                        opacity="0.7"
                    />
                ))}
            </g>
            {/* Overlay Gradient for depth */}
            <rect width="500" height="500" fill="url(#gradientOverlay)" style={{ mixBlendMode: 'overlay'}} />
          </pattern>

          <radialGradient id="gradientOverlay" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.5" />
          </radialGradient>

          {/* The Mask Shape (White reveals, Black hides) */}
          <mask id="catMask">
            {/* A simplified sitting cat silhouette */}
            <path 
                d="M350 450 
                   H150 
                   C130 450 120 430 125 410
                   L140 300
                   C130 250 140 200 180 170
                   L170 120 
                   L200 135
                   C220 130 280 130 300 135
                   L330 120
                   L320 170
                   C360 200 370 250 360 300
                   L375 410
                   C380 430 370 450 350 450
                   Z"
                fill="white"
            />
            {/* Tail */}
            <path 
                d="M375 410 Q420 380 420 300 Q420 250 400 250 Q380 250 380 270"
                fill="none"
                stroke="white"
                strokeWidth="20"
                strokeLinecap="round"
            />
          </mask>
        </defs>

        {/* Render the pattern masked by the cat */}
        <rect x="0" y="0" width="500" height="500" fill="url(#sunflowerPattern)" mask="url(#catMask)" />
        
        {/* Optional: Subtle Outline for definition */}
        <path 
            d="M350 450 H150 C130 450 120 430 125 410 L140 300 C130 250 140 200 180 170 L170 120 L200 135 C220 130 280 130 300 135 L330 120 L320 170 C360 200 370 250 360 300 L375 410 C380 430 370 450 350 450 Z"
            fill="none"
            stroke="rgba(255,215,0,0.3)"
            strokeWidth="2"
        />
      </svg>
    </div>
  );
};