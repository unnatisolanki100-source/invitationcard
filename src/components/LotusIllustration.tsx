import React from 'react';

interface LotusProps {
  position?: 'left' | 'right' | 'bottom';
  className?: string;
}

export const LotusIllustration: React.FC<LotusProps> = ({
  position = 'left',
  className = ''
}) => {
  return (
    <div
      className={`pointer-events-none select-none transition-transform duration-700 ${className} ${
        position === 'right' ? 'scale-x-[-1]' : ''
      }`}
    >
      <svg
        viewBox="0 0 260 220"
        className="w-full h-auto drop-shadow-sm"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Petal Gradient */}
          <linearGradient id="lotusPetalMain" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="60%" stopColor="#fb7185" />
            <stop offset="100%" stopColor="#fda4af" />
          </linearGradient>

          {/* Deep Pink Shadow Petal */}
          <linearGradient id="lotusPetalDark" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#be123c" />
            <stop offset="60%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#f43f5e" />
          </linearGradient>

          {/* Soft Accent Petal */}
          <linearGradient id="lotusPetalLight" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#fda4af" />
            <stop offset="100%" stopColor="#ffe4e6" />
          </linearGradient>

          {/* Lotus Leaf Gradient */}
          <radialGradient id="lotusLeafGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#9ccc65" />
            <stop offset="70%" stopColor="#689f38" />
            <stop offset="100%" stopColor="#437319" />
          </radialGradient>

          {/* Stem gradient */}
          <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8bc34a" />
            <stop offset="100%" stopColor="#558b2f" />
          </linearGradient>
        </defs>

        {/* Background Lotus Leaf (Lily Pad) */}
        <g transform="translate(10, 80) rotate(-15)">
          <path
            d="M 50,20 C 15,20 0,60 10,95 C 20,130 65,145 100,140 C 135,135 150,90 140,55 C 130,20 85,20 50,20 Z"
            fill="url(#lotusLeafGrad)"
            opacity="0.9"
          />
          {/* Leaf veins */}
          <path d="M 60,75 Q 30,50 20,40" stroke="#bef264" strokeWidth="1.2" strokeOpacity="0.7" fill="none" />
          <path d="M 60,75 Q 25,85 15,100" stroke="#bef264" strokeWidth="1.2" strokeOpacity="0.7" fill="none" />
          <path d="M 60,75 Q 60,110 70,135" stroke="#bef264" strokeWidth="1.2" strokeOpacity="0.7" fill="none" />
          <path d="M 60,75 Q 100,105 130,110" stroke="#bef264" strokeWidth="1.2" strokeOpacity="0.7" fill="none" />
          <path d="M 60,75 Q 105,60 130,45" stroke="#bef264" strokeWidth="1.2" strokeOpacity="0.7" fill="none" />
        </g>

        {/* Secondary small leaf */}
        <path
          d="M 0,140 C -10,170 20,200 45,195 C 70,190 75,165 60,145 C 45,125 10,115 0,140 Z"
          fill="url(#lotusLeafGrad)"
          opacity="0.8"
        />

        {/* Stem 1 (For small bud) */}
        <path
          d="M 120,210 Q 115,145 105,100"
          stroke="url(#stemGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Small Lotus Bud */}
        <g transform="translate(105, 100) rotate(-10)">
          {/* Calyx / Sepals */}
          <path d="M 0,0 C -6,-10 -6,-25 0,-30 C 6,-25 6,-10 0,0" fill="#7cb342" />
          {/* Bud Petal Tip */}
          <path d="M 0,-8 C -8,-18 -6,-36 0,-44 C 6,-36 8,-18 0,-8" fill="url(#lotusPetalMain)" />
          <path d="M -4,-12 C -10,-22 -7,-35 -2,-41" stroke="#f43f5e" strokeWidth="0.8" fill="none" />
        </g>

        {/* Main Lotus Flower */}
        <g transform="translate(130, 160)">
          {/* Main Stem */}
          <path
            d="M 0,35 Q -5,15 -10,-10"
            stroke="url(#stemGrad)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Outer / Back Petals */}
          <path
            d="M 0,0 C -45,-15 -75,-40 -85,-75 C -55,-70 -30,-45 0,0"
            fill="url(#lotusPetalDark)"
          />
          <path
            d="M 0,0 C 45,-15 75,-40 85,-75 C 55,-70 30,-45 0,0"
            fill="url(#lotusPetalDark)"
          />

          {/* Intermediate Petals */}
          <path
            d="M 0,0 C -35,-25 -60,-65 -55,-100 C -30,-85 -15,-50 0,0"
            fill="url(#lotusPetalMain)"
          />
          <path
            d="M 0,0 C 35,-25 60,-65 55,-100 C 30,-85 15,-50 0,0"
            fill="url(#lotusPetalMain)"
          />

          {/* Center Tall Petal */}
          <path
            d="M 0,0 C -22,-35 -22,-85 0,-115 C 22,-85 22,-35 0,0"
            fill="url(#lotusPetalMain)"
          />
          {/* Center Petal Highlight */}
          <path
            d="M 0,-15 C -12,-45 -12,-80 0,-105 C 12,-80 12,-45 0,-15"
            fill="url(#lotusPetalLight)"
            opacity="0.85"
          />

          {/* Front Opening Petals */}
          <path
            d="M 0,5 C -25,-5 -45,-30 -40,-55 C -20,-45 -8,-25 0,5"
            fill="url(#lotusPetalLight)"
            opacity="0.95"
          />
          <path
            d="M 0,5 C 25,-5 45,-30 40,-55 C 20,-45 8,-25 0,5"
            fill="url(#lotusPetalLight)"
            opacity="0.95"
          />

          {/* Golden Pistil / Stamen glow at heart */}
          <ellipse cx="0" cy="-18" rx="8" ry="4" fill="#fde047" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
};
