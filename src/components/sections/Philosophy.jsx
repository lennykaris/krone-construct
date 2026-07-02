import React, { useRef } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function Philosophy() {
  const containerRef = useRef(null);

  // Apply reveal to the left and right columns
  useScrollReveal(containerRef, {
    stagger: 0.15,
    selector: '.philosophy-reveal-item',
  });

  return (
    <section id="about" className="py-24 md:py-36 bg-krone-black border-b border-krone-charcoal select-none relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col items-start">
          <span className="font-body text-[11px] uppercase tracking-[0.25em] text-krone-concrete mb-2 font-semibold">
            Our Ethos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-krone-amber uppercase leading-none">
            PHILOSOPHY
          </h2>
          <div className="w-12 h-[2px] bg-krone-amber mt-3" />
        </div>

        {/* 2-Column Split Layout */}
        <div
          ref={containerRef}
          className="relative grid grid-cols-1 md:grid-cols-[55%_45%] gap-12 md:gap-20 items-center"
        >
          {/* Left Column: Texture-clipped Quote */}
          <div className="philosophy-reveal-item flex flex-col items-start pr-0 md:pr-8">
            <h3
              className="philosophy-text-clip font-display font-black leading-[0.9] text-[clamp(50px,6vw,90px)] uppercase select-none w-full"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1400&q=80')",
              }}
            >
              RAW.
              <br />
              PRECISE.
              <br />
              PERMANENT.
            </h3>
          </div>

          {/* Amber Vertical Rule (Hidden on mobile) */}
          <div className="hidden md:block absolute left-[53%] top-0 h-full w-[1px] bg-krone-amber/35" />

          {/* Right Column: Prose */}
          <div className="philosophy-reveal-item flex flex-col space-y-6 md:pl-10">
            <p className="font-body text-base md:text-lg text-krone-concrete leading-relaxed">
              We define the skyline. Our approach is elemental: harnessing raw materials with absolute precision to create permanent structures that endure. There is no compromise, only construction in its purest form.
            </p>
            <p className="font-body text-sm md:text-base text-krone-concrete/80 leading-relaxed">
              Since 2001, Krone Construct has stood as a beacon of architectural integrity in Nairobi, Kenya. Our builders, architects, and structural engineers combine decades of experience with advanced materials science to overcome the most complex engineering constraints.
            </p>
            <div className="pt-4 flex items-center gap-6">
              <div>
                <span className="font-display text-[32px] font-black text-krone-amber block leading-none">
                  25+
                </span>
                <span className="font-body text-[10px] text-krone-concrete/70 uppercase tracking-widest mt-1 block">
                  Design Awards
                </span>
              </div>
              <div className="w-[1px] h-8 bg-krone-charcoal" />
              <div>
                <span className="font-display text-[32px] font-black text-krone-amber block leading-none">
                  100%
                </span>
                <span className="font-body text-[10px] text-krone-concrete/70 uppercase tracking-widest mt-1 block">
                  Safety Record
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
