import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-krone-black flex items-center">
      {/* Background Image with Dark Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80"
          alt="Krone Construct construction site hero background"
          className="w-full h-full object-cover object-center filter grayscale contrast-125 opacity-40"
          loading="eager"
        />
        {/* Editorial-grade linear gradient mask */}
        <div className="absolute inset-0 bg-gradient-to-t from-krone-black via-transparent to-krone-black/70" />
      </div>

      {/* Amber Vertical Rule - absolute left-16, top-0, h-full, w-[2px], bg-krone-amber, opacity-40 */}
      <div className="hidden md:block absolute left-16 top-0 h-full w-[2px] bg-krone-amber opacity-40 z-10" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-24 pt-20 flex flex-col justify-center h-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-xs md:text-[11px] uppercase tracking-[0.25em] text-krone-amber mb-6 font-semibold flex items-center gap-2"
        >
          <span>EST. 2001</span>
          <span className="text-krone-concrete/55 font-light">|</span>
          <span>NAIROBI, KENYA</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display font-black text-krone-white uppercase leading-[0.9] tracking-tight max-w-[90%] md:max-w-[80%] text-[clamp(44px,10vw,140px)] select-none whitespace-pre-line"
        >
          WE BUILD
          {"\n"}WHAT OTHERS
          {"\n"}CALL IMPOSSIBLE
        </motion.h1>

        {/* Thin amber rule (80px wide, 1px) then body copy */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="my-6 md:my-8 flex flex-col md:flex-row md:items-center gap-6"
        >
          <div className="w-20 h-[1px] bg-krone-amber shrink-0" />
          <p className="font-body text-sm md:text-base text-krone-concrete max-w-md leading-relaxed">
            Engineering milestones and architectural marvels that redefine East Africa's skyline. Raw materials meets absolute precision.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap items-center gap-6 md:gap-10 mt-2"
        >
          <a
            href="#work"
            className="font-body text-xs md:text-sm font-semibold tracking-wider text-krone-amber hover:text-krone-white transition-colors duration-300 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-krone-amber hover:after:bg-krone-white after:transition-all"
          >
            VIEW OUR WORK →
          </a>
          <a
            href="tel:+254700000000"
            className="font-body text-xs md:text-sm tracking-wider text-krone-concrete hover:text-krone-white transition-colors duration-300"
          >
            CALL +254 700 000 000
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator: bottom-center, thin amber line that animates downward infinitely */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-10 select-none">
        <span className="font-body text-[9px] text-krone-amber uppercase tracking-[0.25em] mb-2 font-medium opacity-80">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-krone-amber/20 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-krone-amber origin-top animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
