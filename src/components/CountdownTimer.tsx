import React, { useState, useEffect } from 'react';

export const CountdownTimer: React.FC = () => {
  // Target: 20 October 2026, 19:00:00 IST (UTC+05:30)
  const targetDate = new Date('2026-10-20T19:00:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isPast: boolean;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-md mx-auto my-6 px-4">
      <div className="text-center mb-2">
        <span className="text-xs uppercase tracking-widest text-emerald-900 font-semibold">
          {timeLeft.isPast ? 'The Auspicious Ceremony Has Begun' : 'Countdown to Auspicious Muhurat'}
        </span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="flex flex-col items-center justify-center py-2.5 px-1 bg-white/80 backdrop-blur-xs rounded-xl border border-amber-200/80 shadow-xs hover:border-amber-400 transition-all"
          >
            <span className="text-xl sm:text-2xl font-bold font-serif text-emerald-950 tabular-nums leading-none">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs text-stone-600 font-medium uppercase tracking-wider mt-1">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
