import React from 'react';

export const ToranHeader: React.FC = () => {
  return (
    <div className="w-full relative pointer-events-none select-none overflow-hidden">
      {/* Top garland with mango leaves & flowers */}
      <div className="w-full relative">
        <svg
          viewBox="0 0 1000 120"
          className="w-full h-auto drop-shadow-sm transition-transform duration-1000 ease-in-out"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Mango Leaf Gradient */}
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#70a644" />
              <stop offset="50%" stopColor="#558b2f" />
              <stop offset="100%" stopColor="#33691e" />
            </linearGradient>

            {/* Light leaf gradient */}
            <linearGradient id="leafGradLight" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8bc34a" />
              <stop offset="100%" stopColor="#689f38" />
            </linearGradient>

            {/* Pink Flower Gradient */}
            <radialGradient id="pinkFlowerGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="70%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#be123c" />
            </radialGradient>

            {/* Flower Center Yellow */}
            <radialGradient id="flowerCenter" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#eab308" />
            </radialGradient>

            {/* Yellow Marigold bead */}
            <radialGradient id="goldBead" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="60%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </radialGradient>

            {/* Toran String */}
            <linearGradient id="ropeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#eab308" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#eab308" />
            </linearGradient>

            {/* Single Mango Leaf Def */}
            <g id="mangoLeaf">
              <path
                d="M 0,0 C -12,25 -16,65 0,105 C 16,65 12,25 0,0 Z"
                fill="url(#leafGrad)"
              />
              {/* Leaf spine */}
              <line x1="0" y1="5" x2="0" y2="95" stroke="#a3e635" strokeWidth="1.2" strokeOpacity="0.7" />
            </g>

            {/* Light mango leaf */}
            <g id="mangoLeafLight">
              <path
                d="M 0,0 C -11,25 -14,60 0,95 C 14,60 11,25 0,0 Z"
                fill="url(#leafGradLight)"
              />
              <line x1="0" y1="5" x2="0" y2="88" stroke="#bef264" strokeWidth="1" strokeOpacity="0.8" />
            </g>

            {/* 8-Petal Blossom */}
            <g id="flowerBlossom">
              <circle cx="0" cy="0" r="14" fill="none" />
              {/* Petals */}
              <circle cx="0" cy="-10" r="7" fill="url(#pinkFlowerGrad)" />
              <circle cx="7" cy="-7" r="7" fill="url(#pinkFlowerGrad)" />
              <circle cx="10" cy="0" r="7" fill="url(#pinkFlowerGrad)" />
              <circle cx="7" cy="7" r="7" fill="url(#pinkFlowerGrad)" />
              <circle cx="0" cy="10" r="7" fill="url(#pinkFlowerGrad)" />
              <circle cx="-7" cy="7" r="7" fill="url(#pinkFlowerGrad)" />
              <circle cx="-10" cy="0" r="7" fill="url(#pinkFlowerGrad)" />
              <circle cx="-7" cy="-7" r="7" fill="url(#pinkFlowerGrad)" />
              {/* Center disc */}
              <circle cx="0" cy="0" r="5" fill="url(#flowerCenter)" />
            </g>
          </defs>

          {/* Top connecting garland rope */}
          <path
            d="M 0,12 Q 250,22 500,12 T 1000,12"
            stroke="url(#ropeGrad)"
            strokeWidth="5"
            fill="none"
          />

          {/* Hanging mango leaves array across the width */}
          <use href="#mangoLeafLight" x="25" y="10" transform="scale(0.85)" />
          <use href="#mangoLeaf" x="70" y="10" transform="scale(0.9)" />
          <use href="#mangoLeafLight" x="120" y="10" transform="scale(0.85)" />
          <use href="#mangoLeaf" x="170" y="10" transform="scale(0.9)" />
          <use href="#mangoLeafLight" x="220" y="10" transform="scale(0.85)" />
          <use href="#mangoLeaf" x="270" y="10" transform="scale(0.9)" />
          <use href="#mangoLeafLight" x="320" y="10" transform="scale(0.85)" />
          <use href="#mangoLeaf" x="370" y="10" transform="scale(0.9)" />
          <use href="#mangoLeafLight" x="420" y="10" transform="scale(0.85)" />
          <use href="#mangoLeaf" x="470" y="10" transform="scale(0.9)" />
          <use href="#mangoLeafLight" x="520" y="10" transform="scale(0.85)" />
          <use href="#mangoLeaf" x="570" y="10" transform="scale(0.9)" />
          <use href="#mangoLeafLight" x="620" y="10" transform="scale(0.85)" />
          <use href="#mangoLeaf" x="670" y="10" transform="scale(0.9)" />
          <use href="#mangoLeafLight" x="720" y="10" transform="scale(0.85)" />
          <use href="#mangoLeaf" x="770" y="10" transform="scale(0.9)" />
          <use href="#mangoLeafLight" x="820" y="10" transform="scale(0.85)" />
          <use href="#mangoLeaf" x="870" y="10" transform="scale(0.9)" />
          <use href="#mangoLeafLight" x="920" y="10" transform="scale(0.85)" />
          <use href="#mangoLeaf" x="970" y="10" transform="scale(0.9)" />

          {/* Saffron / Pink blossoms along the rope line */}
          <use href="#flowerBlossom" x="60" y="14" transform="scale(0.85)" />
          <use href="#flowerBlossom" x="200" y="16" transform="scale(0.85)" />
          <use href="#flowerBlossom" x="350" y="15" transform="scale(0.85)" />
          <use href="#flowerBlossom" x="500" y="14" transform="scale(0.85)" />
          <use href="#flowerBlossom" x="650" y="15" transform="scale(0.85)" />
          <use href="#flowerBlossom" x="800" y="16" transform="scale(0.85)" />
          <use href="#flowerBlossom" x="940" y="14" transform="scale(0.85)" />
        </svg>
      </div>

      {/* Left Hanging Garland Tassels (exact match to image) */}
      <div className="absolute top-2 left-3 md:left-6 w-10 md:w-14 animate-sway">
        <svg viewBox="0 0 50 320" className="w-full h-auto drop-shadow-sm">
          {/* Tassel 1 */}
          <path d="M 25,0 C 15,10 10,25 25,32 C 40,25 35,10 25,0" fill="#e11d48" />
          <circle cx="25" cy="36" r="2.5" fill="#f59e0b" />
          <circle cx="25" cy="46" r="2.5" fill="#f59e0b" />
          <circle cx="25" cy="56" r="2.5" fill="#f59e0b" />

          {/* Tassel 2 */}
          <g transform="translate(0, 65)">
            <path d="M 25,0 C 12,12 8,26 25,32 C 42,26 38,12 25,0" fill="#e11d48" />
            <circle cx="25" cy="38" r="2.5" fill="#f59e0b" />
            <circle cx="25" cy="48" r="2.5" fill="#f59e0b" />
            <circle cx="25" cy="58" r="2.5" fill="#f59e0b" />
          </g>

          {/* Tassel 3 */}
          <g transform="translate(0, 135)">
            <path d="M 25,0 C 12,12 8,26 25,32 C 42,26 38,12 25,0" fill="#e11d48" />
            <circle cx="25" cy="38" r="2.5" fill="#f59e0b" />
            <circle cx="25" cy="48" r="2.5" fill="#f59e0b" />
            <circle cx="25" cy="58" r="2.5" fill="#f59e0b" />
          </g>

          {/* Tassel 4 */}
          <g transform="translate(0, 205)">
            <path d="M 25,0 C 12,12 8,26 25,32 C 42,26 38,12 25,0" fill="#e11d48" />
            <circle cx="25" cy="38" r="2.5" fill="#f59e0b" />
            <circle cx="25" cy="48" r="2.5" fill="#f59e0b" />
          </g>

          {/* Green terminal leaf cluster */}
          <g transform="translate(25, 275) scale(0.6)">
            <path d="M 0,0 C -15,15 -12,30 0,40 C 12,30 15,15 0,0" fill="#558b2f" />
            <path d="M 0,5 C -20,10 -25,25 -10,32 C -5,25 -2,15 0,5" fill="#7cb342" />
            <path d="M 0,5 C 20,10 25,25 10,32 C 5,25 2,15 0,5" fill="#7cb342" />
          </g>
        </svg>
      </div>

      {/* Right Hanging Garland Tassels (exact match to image) */}
      <div className="absolute top-2 right-3 md:right-6 w-10 md:w-14 animate-sway" style={{ animationDelay: '-3s' }}>
        <svg viewBox="0 0 50 320" className="w-full h-auto drop-shadow-sm">
          {/* Tassel 1 */}
          <path d="M 25,0 C 15,10 10,25 25,32 C 40,25 35,10 25,0" fill="#e11d48" />
          <circle cx="25" cy="36" r="2.5" fill="#f59e0b" />
          <circle cx="25" cy="46" r="2.5" fill="#f59e0b" />
          <circle cx="25" cy="56" r="2.5" fill="#f59e0b" />

          {/* Tassel 2 */}
          <g transform="translate(0, 65)">
            <path d="M 25,0 C 12,12 8,26 25,32 C 42,26 38,12 25,0" fill="#e11d48" />
            <circle cx="25" cy="38" r="2.5" fill="#f59e0b" />
            <circle cx="25" cy="48" r="2.5" fill="#f59e0b" />
            <circle cx="25" cy="58" r="2.5" fill="#f59e0b" />
          </g>

          {/* Tassel 3 */}
          <g transform="translate(0, 135)">
            <path d="M 25,0 C 12,12 8,26 25,32 C 42,26 38,12 25,0" fill="#e11d48" />
            <circle cx="25" cy="38" r="2.5" fill="#f59e0b" />
            <circle cx="25" cy="48" r="2.5" fill="#f59e0b" />
            <circle cx="25" cy="58" r="2.5" fill="#f59e0b" />
          </g>

          {/* Tassel 4 */}
          <g transform="translate(0, 205)">
            <path d="M 25,0 C 12,12 8,26 25,32 C 42,26 38,12 25,0" fill="#e11d48" />
            <circle cx="25" cy="38" r="2.5" fill="#f59e0b" />
            <circle cx="25" cy="48" r="2.5" fill="#f59e0b" />
          </g>

          {/* Green terminal leaf cluster */}
          <g transform="translate(25, 275) scale(0.6)">
            <path d="M 0,0 C -15,15 -12,30 0,40 C 12,30 15,15 0,0" fill="#558b2f" />
            <path d="M 0,5 C -20,10 -25,25 -10,32 C -5,25 -2,15 0,5" fill="#7cb342" />
            <path d="M 0,5 C 20,10 25,25 10,32 C 5,25 2,15 0,5" fill="#7cb342" />
          </g>
        </svg>
      </div>
    </div>
  );
};
