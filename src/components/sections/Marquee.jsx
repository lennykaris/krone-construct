import React from 'react';

export default function Marquee() {
  const marqueeText = "COMMERCIAL BUILDS ◆ RESIDENTIAL TOWERS ◆ CIVIL ENGINEERING ◆ INFRASTRUCTURE ◆ RENOVATION ◆ PROJECT MANAGEMENT ◆ ";

  return (
    <section className="w-full bg-krone-charcoal py-4 border-y border-krone-amber/10 overflow-hidden select-none relative z-10">
      {/* Wrapper to handle layout and animation pause on hover */}
      <div className="flex w-max group">
        {/* First track */}
        <div className="animate-marquee-right group-hover:[animation-play-state:paused] flex items-center font-body font-medium text-[13px] uppercase tracking-[0.2em] text-krone-concrete">
          {Array(4).fill(marqueeText).map((text, idx) => (
            <span key={idx} className="flex items-center shrink-0">
              {text.split('◆').map((word, wIdx, arr) => (
                <span key={wIdx} className="flex items-center shrink-0">
                  <span className="px-4">{word.trim()}</span>
                  {wIdx < arr.length - 1 && (
                    <span className="text-krone-amber font-semibold font-sans">◆</span>
                  )}
                </span>
              ))}
            </span>
          ))}
        </div>
        
        {/* Second track for seamless loop */}
        <div className="animate-marquee-right group-hover:[animation-play-state:paused] flex items-center font-body font-medium text-[13px] uppercase tracking-[0.2em] text-krone-concrete" aria-hidden="true">
          {Array(4).fill(marqueeText).map((text, idx) => (
            <span key={idx} className="flex items-center shrink-0">
              {text.split('◆').map((word, wIdx, arr) => (
                <span key={wIdx} className="flex items-center shrink-0">
                  <span className="px-4">{word.trim()}</span>
                  {wIdx < arr.length - 1 && (
                    <span className="text-krone-amber font-semibold font-sans">◆</span>
                  )}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
