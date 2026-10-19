import React, { useState, useEffect } from 'react';
import { Heart, Send, Sparkles } from 'lucide-react';
import { triggerPushpaVarsha } from './PetalShower';

interface Blessing {
  id: string;
  name: string;
  message: string;
  date: string;
}

const DEFAULT_BLESSINGS: Blessing[] = [
  {
    id: '1',
    name: 'Rameshbhai & Kokilaben Solanki',
    message: 'Nutan Gruh Pravesh ni hardik shubhechha! May Lord Ganesha bless your new home with endless prosperity, health and eternal happiness.',
    date: '19 Oct 2026',
  },
  {
    id: '2',
    name: 'Ketan & Dimple Patel',
    message: 'Congratulations Pankaj & Mittal on this wonderful milestone! Looking forward to celebrating with you both on the 20th.',
    date: '19 Oct 2026',
  },
];

export const Guestbook: React.FC = () => {
  const [blessings, setBlessings] = useState<Blessing[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('griha_pravesh_blessings');
      if (saved) {
        setBlessings(JSON.parse(saved));
      } else {
        setBlessings(DEFAULT_BLESSINGS);
      }
    } catch {
      setBlessings(DEFAULT_BLESSINGS);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newBlessing: Blessing = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      date: 'Today',
    };

    const updated = [newBlessing, ...blessings];
    setBlessings(updated);
    try {
      localStorage.setItem('griha_pravesh_blessings', JSON.stringify(updated));
    } catch {}

    setName('');
    setMessage('');
    setSubmitted(true);
    triggerPushpaVarsha();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-amber-200/90 shadow-sm mt-8">
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-50 text-rose-600 mb-2">
          <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
        </div>
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-emerald-950">
          Shubhkaamnayein & Blessings
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 mt-1">
          Leave your heartfelt warm wishes for Pankaj & Mittal Solanki
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            Your Name / Family
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Anand & Family"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 bg-stone-50/50 text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden focus:border-emerald-600 focus:bg-white transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            Your Blessing Message
          </label>
          <textarea
            required
            rows={2}
            placeholder="Wishing you abundance, peace, and joyous memories in your new abode..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 bg-stone-50/50 text-sm text-stone-800 placeholder-stone-400 focus:outline-hidden focus:border-emerald-600 focus:bg-white transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-emerald-800 to-emerald-700 hover:from-emerald-900 hover:to-emerald-800 text-white font-medium text-sm rounded-lg shadow-xs hover:shadow-md transition-all active:scale-[0.99] cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Send Your Blessings 🌸</span>
        </button>

        {submitted && (
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-emerald-800 bg-emerald-50 py-2 rounded-lg border border-emerald-200">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            Thank you! Your auspicious blessings have been shared.
          </div>
        )}
      </form>

      {/* List of Recent Blessings */}
      <div className="space-y-3 max-h-64 overflow-y-auto pr-1">
        {blessings.map((b) => (
          <div
            key={b.id}
            className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-100 text-left transition-all"
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-xs sm:text-sm font-semibold text-emerald-950 font-serif">
                {b.name}
              </span>
              <span className="text-[10px] text-stone-500">{b.date}</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
              "{b.message}"
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
