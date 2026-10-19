import React from 'react';

export const SideFloralBorders: React.FC = () => {
  return (
    <>
      {/* Shared Gradient Definitions */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          {/* Lotus Petal Outer Gradient */}
          <linearGradient id="lotusPinkDark" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="60%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#fda4af" />
          </linearGradient>

          {/* Lotus Petal Main Soft Pink */}
          <linearGradient id="lotusPinkMain" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#fb7185" />
            <stop offset="50%" stopColor="#fbcfe8" />
            <stop offset="100%" stopColor="#fff1f2" />
          </linearGradient>

          {/* Lotus Petal Light Highlight */}
          <linearGradient id="lotusPinkLight" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#fda4af" />
            <stop offset="70%" stopColor="#fff0f3" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          {/* Calla Lily Petal Gradient */}
          <linearGradient id="callaPetal" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="40%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>

          {/* Calla Spadix Golden Yellow */}
          <linearGradient id="callaSpadix" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>

          {/* Stems & Leaves Soft Sage Green */}
          <linearGradient id="stemGreen" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#4d7c0f" />
            <stop offset="60%" stopColor="#65a30d" />
            <stop offset="100%" stopColor="#84cc16" />
          </linearGradient>

          {/* Tender Leaf Gradient */}
          <linearGradient id="leafGreenSoft" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#65a30d" />
            <stop offset="50%" stopColor="#84cc16" />
            <stop offset="100%" stopColor="#bef264" />
          </linearGradient>
        </defs>
      </svg>

      {/* Left Floral Border - Taller in length & bigger in size */}
      <div className="absolute left-0 bottom-0 top-0 w-16 sm:w-22 md:w-26 pointer-events-none select-none z-10 overflow-hidden flex flex-col justify-end">
        <svg
          viewBox="0 0 135 760"
          className="w-full h-full drop-shadow-xs"
          preserveAspectRatio="xMinYMax meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Continuous slender stems rising all the way from bottom to top */}
          <path
            d="M 30,760 Q 35,580 28,420 Q 22,260 26,70"
            stroke="url(#stemGreen)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M 48,760 Q 52,600 40,480 Q 32,320 38,160"
            stroke="url(#stemGreen)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M 18,760 Q 22,630 18,520 Q 14,380 22,250"
            stroke="url(#stemGreen)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />

          {/* Elegant Leaves along stems */}
          <path d="M 28,540 C 10,515 4,480 18,470 C 26,495 27,520 28,540 Z" fill="url(#leafGreenSoft)" opacity="0.85" />
          <path d="M 40,400 C 58,375 62,340 48,330 C 40,355 40,380 40,400 Z" fill="url(#leafGreenSoft)" opacity="0.85" />
          <path d="M 26,240 C 10,220 8,190 22,185 C 26,205 26,225 26,240 Z" fill="url(#leafGreenSoft)" opacity="0.85" />
          <path d="M 36,120 C 52,100 55,75 42,70 C 36,90 36,110 36,120 Z" fill="url(#leafGreenSoft)" opacity="0.85" />

          {/* Highest Lotus Bud (near the top at y=70) */}
          <g transform="translate(26, 70) scale(0.75)">
            <path d="M 0,0 C -14,-22 -10,-50 0,-68 C 10,-50 14,-22 0,0 Z" fill="url(#lotusPinkDark)" />
            <path d="M 0,-6 C -9,-25 -6,-46 0,-62 C 6,-46 9,-25 0,-6 Z" fill="url(#lotusPinkMain)" />
            <path d="M 0,-12 C -5,-28 -2,-42 0,-52 C 2,-42 5,-28 0,-12 Z" fill="url(#lotusPinkLight)" />
          </g>

          {/* Upper Elegant Lotus Blossom (at ~y=180) - Bigger size */}
          <g transform="translate(36, 185) scale(0.9)">
            <path d="M 0,0 C -38,-18 -55,-45 -50,-70 C -28,-60 -12,-38 0,0" fill="url(#lotusPinkDark)" opacity="0.9" />
            <path d="M 0,0 C 38,-18 55,-45 50,-70 C 28,-60 12,-38 0,0" fill="url(#lotusPinkDark)" opacity="0.9" />
            <path d="M 0,0 C -28,-28 -40,-70 -28,-92 C -12,-75 0,-48 0,0" fill="url(#lotusPinkMain)" />
            <path d="M 0,0 C 28,-28 40,-70 28,-92 C 12,-75 0,-48 0,0" fill="url(#lotusPinkMain)" />
            <path d="M 0,0 C -16,-32 -16,-75 0,-102 C 16,-75 16,-32 0,0" fill="url(#lotusPinkMain)" />
            <path d="M 0,-18 C -9,-44 -9,-70 0,-90 C 9,-70 9,-44 0,-18" fill="url(#lotusPinkLight)" />
            <ellipse cx="0" cy="-22" rx="7" ry="3.5" fill="#fde047" opacity="0.95" />
          </g>

          {/* Middle Lotus Bud & Bloom (at ~y=340) */}
          <g transform="translate(22, 345) rotate(-12) scale(0.75)">
            <path d="M 0,0 C -14,-22 -10,-50 0,-68 C 10,-50 14,-22 0,0 Z" fill="url(#lotusPinkDark)" />
            <path d="M 0,-6 C -9,-25 -6,-46 0,-62 C 6,-46 9,-25 0,-6 Z" fill="url(#lotusPinkMain)" />
            <path d="M 0,-12 C -5,-28 -2,-42 0,-52 C 2,-42 5,-28 0,-12 Z" fill="url(#lotusPinkLight)" />
          </g>

          {/* Main Full Blooming Lotus (at ~y=490) - Noticeably bigger */}
          <g transform="translate(40, 495) scale(1.05)">
            {/* Back spreading petals */}
            <path d="M 0,0 C -50,-18 -68,-50 -62,-85 C -34,-72 -16,-45 0,0" fill="url(#lotusPinkDark)" />
            <path d="M 0,0 C 50,-18 68,-50 62,-85 C 34,-72 16,-45 0,0" fill="url(#lotusPinkDark)" />
            {/* Mid petals */}
            <path d="M 0,0 C -34,-34 -45,-85 -34,-112 C -14,-90 0,-55 0,0" fill="url(#lotusPinkMain)" />
            <path d="M 0,0 C 34,-34 45,-85 34,-112 C 14,-90 0,-55 0,0" fill="url(#lotusPinkMain)" />
            {/* Center petals */}
            <path d="M 0,0 C -20,-38 -20,-90 0,-122 C 20,-90 20,-38 0,0" fill="url(#lotusPinkMain)" />
            <path d="M 0,-18 C -12,-50 -12,-85 0,-106 C 12,-85 12,-50 0,-18" fill="url(#lotusPinkLight)" />
            {/* Front petals */}
            <path d="M 0,5 C -28,-12 -40,-40 -34,-62 C -14,-50 0,-28 0,5" fill="url(#lotusPinkLight)" />
            <path d="M 0,5 C 28,-12 40,-40 34,-62 C 14,-50 0,-28 0,5" fill="url(#lotusPinkLight)" />
            <ellipse cx="0" cy="-25" rx="8" ry="4" fill="#fde047" opacity="0.95" />
          </g>

          {/* Bottom Elegant White Calla Lilies (at ~y=670) - Scaled up */}
          <g transform="translate(30, 675) scale(1.05)">
            {/* Calla Lily 1 */}
            <g transform="rotate(-16)">
              <path d="M 0,-18 Q -2,-52 2,-72" stroke="url(#callaSpadix)" strokeWidth="4.5" strokeLinecap="round" />
              <path
                d="M 0,0 C -28,-22 -40,-62 -28,-102 C -18,-130 18,-112 24,-90 C 30,-68 18,-22 0,0 Z"
                fill="url(#callaPetal)"
                stroke="#e2e8f0"
                strokeWidth="0.9"
              />
              <path d="M -6,-34 Q -12,-68 -2,-90" stroke="#f1f5f9" strokeWidth="1.8" fill="none" />
            </g>

            {/* Calla Lily 2 */}
            <g transform="translate(28, 34) rotate(16) scale(0.8)">
              <path d="M 0,-14 Q -1,-40 2,-56" stroke="url(#callaSpadix)" strokeWidth="3.5" strokeLinecap="round" />
              <path
                d="M 0,0 C -22,-18 -32,-52 -22,-80 C -14,-102 14,-90 18,-74 C 22,-58 14,-18 0,0 Z"
                fill="url(#callaPetal)"
                stroke="#e2e8f0"
                strokeWidth="0.9"
              />
            </g>
          </g>
        </svg>
      </div>

      {/* Right Floral Border - Mirrored, taller and bigger */}
      <div className="absolute right-0 bottom-0 top-0 w-16 sm:w-22 md:w-26 pointer-events-none select-none z-10 overflow-hidden flex flex-col justify-end">
        <svg
          viewBox="0 0 135 760"
          className="w-full h-full drop-shadow-xs"
          preserveAspectRatio="xMaxYMax meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'scaleX(-1)' }}
        >
          <path
            d="M 30,760 Q 35,580 28,420 Q 22,260 26,70"
            stroke="url(#stemGreen)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M 48,760 Q 52,600 40,480 Q 32,320 38,160"
            stroke="url(#stemGreen)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <path
            d="M 18,760 Q 22,630 18,520 Q 14,380 22,250"
            stroke="url(#stemGreen)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />

          <path d="M 28,540 C 10,515 4,480 18,470 C 26,495 27,520 28,540 Z" fill="url(#leafGreenSoft)" opacity="0.85" />
          <path d="M 40,400 C 58,375 62,340 48,330 C 40,355 40,380 40,400 Z" fill="url(#leafGreenSoft)" opacity="0.85" />
          <path d="M 26,240 C 10,220 8,190 22,185 C 26,205 26,225 26,240 Z" fill="url(#leafGreenSoft)" opacity="0.85" />
          <path d="M 36,120 C 52,100 55,75 42,70 C 36,90 36,110 36,120 Z" fill="url(#leafGreenSoft)" opacity="0.85" />

          {/* Top Lotus Bud */}
          <g transform="translate(26, 70) scale(0.75)">
            <path d="M 0,0 C -14,-22 -10,-50 0,-68 C 10,-50 14,-22 0,0 Z" fill="url(#lotusPinkDark)" />
            <path d="M 0,-6 C -9,-25 -6,-46 0,-62 C 6,-46 9,-25 0,-6 Z" fill="url(#lotusPinkMain)" />
            <path d="M 0,-12 C -5,-28 -2,-42 0,-52 C 2,-42 5,-28 0,-12 Z" fill="url(#lotusPinkLight)" />
          </g>

          {/* Upper Lotus Blossom */}
          <g transform="translate(36, 185) scale(0.9)">
            <path d="M 0,0 C -38,-18 -55,-45 -50,-70 C -28,-60 -12,-38 0,0" fill="url(#lotusPinkDark)" opacity="0.9" />
            <path d="M 0,0 C 38,-18 55,-45 50,-70 C 28,-60 12,-38 0,0" fill="url(#lotusPinkDark)" opacity="0.9" />
            <path d="M 0,0 C -28,-28 -40,-70 -28,-92 C -12,-75 0,-48 0,0" fill="url(#lotusPinkMain)" />
            <path d="M 0,0 C 28,-28 40,-70 28,-92 C 12,-75 0,-48 0,0" fill="url(#lotusPinkMain)" />
            <path d="M 0,0 C -16,-32 -16,-75 0,-102 C 16,-75 16,-32 0,0" fill="url(#lotusPinkMain)" />
            <path d="M 0,-18 C -9,-44 -9,-70 0,-90 C 9,-70 9,-44 0,-18" fill="url(#lotusPinkLight)" />
            <ellipse cx="0" cy="-22" rx="7" ry="3.5" fill="#fde047" opacity="0.95" />
          </g>

          {/* Middle Lotus Bud & Bloom */}
          <g transform="translate(22, 345) rotate(-12) scale(0.75)">
            <path d="M 0,0 C -14,-22 -10,-50 0,-68 C 10,-50 14,-22 0,0 Z" fill="url(#lotusPinkDark)" />
            <path d="M 0,-6 C -9,-25 -6,-46 0,-62 C 6,-46 9,-25 0,-6 Z" fill="url(#lotusPinkMain)" />
            <path d="M 0,-12 C -5,-28 -2,-42 0,-52 C 2,-42 5,-28 0,-12 Z" fill="url(#lotusPinkLight)" />
          </g>

          {/* Main Full Blooming Lotus */}
          <g transform="translate(40, 495) scale(1.05)">
            <path d="M 0,0 C -50,-18 -68,-50 -62,-85 C -34,-72 -16,-45 0,0" fill="url(#lotusPinkDark)" />
            <path d="M 0,0 C 50,-18 68,-50 62,-85 C 34,-72 16,-45 0,0" fill="url(#lotusPinkDark)" />
            <path d="M 0,0 C -34,-34 -45,-85 -34,-112 C -14,-90 0,-55 0,0" fill="url(#lotusPinkMain)" />
            <path d="M 0,0 C 34,-34 45,-85 34,-112 C 14,-90 0,-55 0,0" fill="url(#lotusPinkMain)" />
            <path d="M 0,0 C -20,-38 -20,-90 0,-122 C 20,-90 20,-38 0,0" fill="url(#lotusPinkMain)" />
            <path d="M 0,-18 C -12,-50 -12,-85 0,-106 C 12,-85 12,-50 0,-18" fill="url(#lotusPinkLight)" />
            <path d="M 0,5 C -28,-12 -40,-40 -34,-62 C -14,-50 0,-28 0,5" fill="url(#lotusPinkLight)" />
            <path d="M 0,5 C 28,-12 40,-40 34,-62 C 14,-50 0,-28 0,5" fill="url(#lotusPinkLight)" />
            <ellipse cx="0" cy="-25" rx="8" ry="4" fill="#fde047" opacity="0.95" />
          </g>

          {/* Bottom Calla Lilies */}
          <g transform="translate(30, 675) scale(1.05)">
            <g transform="rotate(-16)">
              <path d="M 0,-18 Q -2,-52 2,-72" stroke="url(#callaSpadix)" strokeWidth="4.5" strokeLinecap="round" />
              <path
                d="M 0,0 C -28,-22 -40,-62 -28,-102 C -18,-130 18,-112 24,-90 C 30,-68 18,-22 0,0 Z"
                fill="url(#callaPetal)"
                stroke="#e2e8f0"
                strokeWidth="0.9"
              />
              <path d="M -6,-34 Q -12,-68 -2,-90" stroke="#f1f5f9" strokeWidth="1.8" fill="none" />
            </g>

            <g transform="translate(28, 34) rotate(16) scale(0.8)">
              <path d="M 0,-14 Q -1,-40 2,-56" stroke="url(#callaSpadix)" strokeWidth="3.5" strokeLinecap="round" />
              <path
                d="M 0,0 C -22,-18 -32,-52 -22,-80 C -14,-102 14,-90 18,-74 C 22,-58 14,-18 0,0 Z"
                fill="url(#callaPetal)"
                stroke="#e2e8f0"
                strokeWidth="0.9"
              />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};
