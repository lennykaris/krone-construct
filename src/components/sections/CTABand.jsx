import React from 'react';
import { motion } from 'framer-motion';

export default function CTABand() {
  return (
    <section className="bg-krone-amber text-krone-black py-16 md:py-24 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* Left Column: Big Headline */}
          <div>
            <h2 className="font-display font-black text-5xl md:text-[72px] leading-[0.9] uppercase tracking-tight">
              START YOUR
              <br />
              PROJECT TODAY
            </h2>
          </div>

          {/* Right Column: CTA Button and Subtext */}
          <div className="flex flex-col items-start md:items-end md:text-right">
            <motion.a
              href="#contact"
              whileHover={{ backgroundColor: '#1A1C20' }}
              whileTap={{ scale: 0.98 }}
              className="bg-krone-black text-krone-white font-body font-medium text-[13px] uppercase tracking-[0.15em] py-4 px-10 rounded-[2px] transition-colors duration-300 inline-block text-center select-none"
            >
              Get In Touch
            </motion.a>
            <p className="font-body text-xs md:text-[13px] text-krone-black/60 mt-3 tracking-wide">
              Free consultation · No commitment
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
