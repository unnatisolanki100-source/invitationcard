import React from 'react';

interface AuspiciousSwastikProps {
  className?: string;
  size?: number;
}

export const AuspiciousSwastik: React.FC<AuspiciousSwastikProps> = ({
  className = "w-12 h-12",
  size = 48
}) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} title="Shubh Swastik">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-[0_2px_4px_rgba(234,88,12,0.25)] transition-transform duration-700 hover:scale-110"
      >
        <defs>
          <linearGradient id="swastikGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>

        {/* Central Auspicious Swastik Lines with traditional thickness */}
        {/* Horizontal center */}
        <line x1="20" y1="50" x2="80" y2="50" stroke="url(#swastikGold)" strokeWidth="10" strokeLinecap="round" />
        {/* Left vertical arm up */}
        <line x1="20" y1="50" x2="20" y2="25" stroke="url(#swastikGold)" strokeWidth="10" strokeLinecap="round" />
        {/* Right vertical arm down */}
        <line x1="80" y1="50" x2="80" y2="75" stroke="url(#swastikGold)" strokeWidth="10" strokeLinecap="round" />

        {/* Vertical center */}
        <line x1="50" y1="20" x2="50" y2="80" stroke="url(#swastikGold)" strokeWidth="10" strokeLinecap="round" />
        {/* Top horizontal arm right */}
        <line x1="50" y1="20" x2="75" y2="20" stroke="url(#swastikGold)" strokeWidth="10" strokeLinecap="round" />
        {/* Bottom horizontal arm left */}
        <line x1="50" y1="80" x2="25" y2="80" stroke="url(#swastikGold)" strokeWidth="10" strokeLinecap="round" />

        {/* Traditional 4 Shubh Dots (representing Dharma, Artha, Kama, Moksha) */}
        <circle cx="34" cy="34" r="3.5" fill="#ea580c" />
        <circle cx="66" cy="34" r="3.5" fill="#ea580c" />
        <circle cx="34" cy="66" r="3.5" fill="#ea580c" />
        <circle cx="66" cy="66" r="3.5" fill="#ea580c" />
      </svg>
    </div>
  );
};
