/**
 * Griha Pravesh Invitation - Minimalist Single Card Website
 * Pure invitation card with taller side-lotus frame, single-line host name, and zero top bar
 */

import React, { useState } from 'react';
import { Copy, Phone, Check } from 'lucide-react';
import { AuspiciousSwastik } from './components/AuspiciousSwastik';
import { DecorativeDivider } from './components/DecorativeDivider';
import { SideFloralBorders } from './components/SideFloralBorders';
import { PetalShower } from './components/PetalShower';

export default function App() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const hostNames = "Mr. Pankaj Solanki & Mrs. Mittal Solanki";
  const addressLine1 = "A-313 Pragati Heights, Police chowki Canal road,";
  const addressLine2 = "Nr. Snow City, Sevasi, Vadodara";
  const fullAddress = `${addressLine1} ${addressLine2}`;
  const eventDate = "20TH OCT , 2026";
  const eventTime = "7:00 PM ONWARDS";
  const phone1 = "6354 213 598";
  const phone2 = "9925595590";

  const handleCopyAddress = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-800 flex flex-col items-center justify-center relative overflow-x-hidden selection:bg-rose-100 py-4 sm:py-8 px-2 sm:px-4">
      
      {/* Delicate white and soft pink floating petals */}
      <PetalShower active={true} />

      {/* Address Copied Toast */}
      {copiedAddress && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-stone-900 text-white text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>Address copied to clipboard!</span>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* THE INVITATION CARD (Zero Gap, Taller Side Lotuses, Pure)     */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full max-w-[490px] my-auto">
        <div className="relative w-full rounded-2xl sm:rounded-3xl shadow-[0_15px_45px_-10px_rgba(0,0,0,0.12)] border border-stone-200/90 bg-white overflow-hidden">
          
          {/* Taller & Fuller Side Floral Borders */}
          <SideFloralBorders />

          {/* Central Invitation Content */}
          <div className="relative z-10 w-full px-6 sm:px-12 pt-8 sm:pt-10 pb-8 sm:pb-10 flex flex-col items-center text-center">
            
            {/* Auspicious Golden Swastik with 4 Shubh Dots */}
            <div className="mb-3.5 sm:mb-4.5">
              <AuspiciousSwastik size={44} />
            </div>

            {/* Host Names (Single Line across all devices) */}
            <h2 className="text-[#1b4332] font-serif font-bold text-xs sm:text-base md:text-[17px] tracking-wide whitespace-nowrap leading-normal drop-shadow-xs max-w-full mb-2 sm:mb-2.5">
              {hostNames}
            </h2>

            {/* Invitation Phrase with Natural Breathing Space */}
            <p className="font-serif text-xs sm:text-sm md:text-base text-emerald-900/90 mb-3 sm:mb-4 tracking-wide font-medium">
              You're cordially invited to the
            </p>

            {/* Calligraphic Script Title in Floral Lotus Pink */}
            <div className="pt-0.5 pb-1 sm:pb-2">
              <h1 className="font-['Great_Vibes',cursive] text-5xl sm:text-6xl md:text-[68px] text-[#e0528e] leading-[1.12] drop-shadow-xs tracking-normal">
                Griha Pravesh
              </h1>
              <h2 className="font-['Great_Vibes',cursive] text-4xl sm:text-5xl md:text-[56px] text-[#e0528e] leading-[1.12] drop-shadow-xs -mt-1 sm:-mt-2">
                Ceremony
              </h2>
            </div>

            {/* Clean Botanical Green Line Divider */}
            <DecorativeDivider className="my-2" />

            {/* Subtext */}
            <p className="font-serif text-xs sm:text-sm md:text-base text-emerald-900 font-medium tracking-wide">
              of our new home on
            </p>

            {/* Date & Time */}
            <div className="my-2 space-y-0.5">
              <p className="font-serif font-bold tracking-wider text-sm sm:text-base md:text-lg text-emerald-950 uppercase">
                {eventDate}
              </p>
              <p className="font-serif font-bold tracking-wider text-xs sm:text-sm md:text-base text-emerald-950 uppercase">
                {eventTime}
              </p>
            </div>

            {/* Formatted Venue Address in Exact 2 Lines */}
            <div 
              onClick={handleCopyAddress} 
              title="Click to copy address"
              className="my-1.5 px-3 py-1.5 rounded-xl hover:bg-stone-50/80 transition-colors cursor-pointer group"
            >
              <p className="font-serif font-bold text-xs sm:text-sm md:text-base text-emerald-950 leading-snug tracking-wide">
                {addressLine1}
              </p>
              <p className="font-serif font-bold text-xs sm:text-sm md:text-base text-emerald-950 leading-snug tracking-wide">
                {addressLine2}
              </p>
              <span className="inline-flex items-center gap-1 text-[11px] text-stone-500 group-hover:text-stone-800 mt-1">
                <Copy className="w-3 h-3" />
                <span>Tap to copy address</span>
              </span>
            </div>

            {/* Clean Botanical Green Line Divider */}
            <DecorativeDivider className="my-2" />

            {/* Contact Details (With Click-to-Call) */}
            <div className="mt-1 mb-1 space-y-0.5">
              <p className="font-serif text-xs sm:text-sm md:text-base text-emerald-900 font-medium">
                Contact Number
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
                <a
                  href={`tel:${phone1.replace(/\s+/g, '')}`}
                  className="font-serif font-bold text-sm sm:text-base md:text-lg text-emerald-950 hover:text-[#e0528e] transition-colors underline decoration-dotted decoration-stone-300 underline-offset-4 inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-emerald-800 opacity-70" />
                  <span>{phone1}</span>
                </a>
                <span className="text-emerald-950 font-serif font-bold text-sm sm:text-base md:text-lg">,</span>
                <a
                  href={`tel:${phone2.replace(/\s+/g, '')}`}
                  className="font-serif font-bold text-sm sm:text-base md:text-lg text-emerald-950 hover:text-[#e0528e] transition-colors underline decoration-dotted decoration-stone-300 underline-offset-4 inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3 text-emerald-800 opacity-70" />
                  <span>{phone2}</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Gentle Footer */}
      <footer className="mt-3 mb-2 text-center text-xs text-stone-400 font-serif">
        <p>Solanki Parivar · Hearty Welcome</p>
      </footer>

    </div>
  );
}
