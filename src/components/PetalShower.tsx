import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

interface PetalShowerProps {
  active?: boolean;
}

export const triggerPushpaVarsha = () => {
  // Palette matching user request: White, soft blush pink, and light purple/lavender
  const colors = [
    '#ffffff', // Pure white
    '#fbcfe8', // Soft blush pink
    '#f472b6', // Rose pink
    '#e9d5ff', // Light lavender
    '#d8b4fe', // Light purple
    '#c084fc', // Lilac accent
  ];

  // Left burst
  confetti({
    particleCount: 35,
    angle: 60,
    spread: 55,
    origin: { x: 0.05, y: 0.7 },
    colors: colors,
    shapes: ['circle'],
    scalar: 1.1,
    ticks: 200,
  });

  // Right burst
  confetti({
    particleCount: 35,
    angle: 120,
    spread: 55,
    origin: { x: 0.95, y: 0.7 },
    colors: colors,
    shapes: ['circle'],
    scalar: 1.1,
    ticks: 200,
  });

  // Soft center cascade
  setTimeout(() => {
    confetti({
      particleCount: 40,
      spread: 80,
      origin: { x: 0.5, y: 0.15 },
      colors: colors,
      shapes: ['circle'],
      scalar: 1.2,
      gravity: 0.6,
      ticks: 240,
    });
  }, 200);
};

export const PetalShower: React.FC<PetalShowerProps> = ({ active = true }) => {
  const [petals, setPetals] = useState<Array<{
    id: number;
    left: number;
    delay: number;
    duration: number;
    size: number;
    rotation: number;
    color: string;
    opacity: number;
  }>>([]);

  useEffect(() => {
    if (!active) {
      setPetals([]);
      return;
    }

    // White, blush pink, and gentle light purple/lilac petals
    const petalColors = [
      'rgba(255, 255, 255, 0.92)',   // White
      'rgba(253, 242, 248, 0.85)',  // Soft ivory pink
      'rgba(251, 207, 232, 0.8)',   // Blush pink
      'rgba(244, 114, 182, 0.7)',   // Gentle rose
      'rgba(233, 213, 255, 0.85)',  // Light lavender
      'rgba(216, 180, 254, 0.75)',  // Lilac purple
    ];

    // Minimal, peaceful drifting count
    const generated = Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: Math.random() * 92 + 4,
      delay: Math.random() * 9,
      duration: Math.random() * 8 + 10,
      size: Math.random() * 11 + 10,
      rotation: Math.random() * 360,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
      opacity: Math.random() * 0.3 + 0.65,
    }));

    setPetals(generated);
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: '-25px',
            animation: `petalDrift ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            opacity: petal.opacity,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.3}
            viewBox="0 0 24 32"
            fill="none"
            style={{
              transform: `rotate(${petal.rotation}deg)`,
              filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.04))',
            }}
          >
            <path
              d="M 12,0 C 4,10 0,20 12,32 C 24,20 20,10 12,0 Z"
              fill={petal.color}
            />
          </svg>
        </div>
      ))}

      <style>{`
        @keyframes petalDrift {
          0% {
            transform: translateY(0vh) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.85;
          }
          50% {
            transform: translateY(50vh) translateX(18px) rotate(180deg);
          }
          85% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(105vh) translateX(-15px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
