import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useScrollReveal(containerRef);

  const testimonials = [
    {
      quote:
        "Krone Construct delivered Skyline Towers ahead of schedule and with unmatched structural integrity. Their precision and attention to detail are what makes them our preferred partner in East Africa.",
      author: 'JOHN GITHONGO',
      company: 'Centum Real Estate',
    },
    {
      quote:
        "Building infrastructure in Athi River presented massive logistics challenges. Krone's civil engineering team solved every geological constraint with raw, unflinching expertise. Truly world-class.",
      author: 'AMINA MOHAMED',
      company: 'Kenya Urban Roads Authority (KURA)',
    },
    {
      quote:
        "The craftsmanship on The Kite Residences is exceptional. Every finish, alignment, and concrete casting is flawless. They don't just build structures; they build monuments.",
      author: 'DAVID NYONGESA',
      company: 'Vanguard Developers Ltd',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 bg-krone-charcoal border-b border-krone-amber/10 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-24 relative z-10 flex flex-col items-center">
        <div className="absolute top-12 left-6 md:left-24 font-display text-[180px] md:text-[240px] text-krone-amber opacity-10 select-none pointer-events-none leading-none font-black">
          “
        </div>

        <div className="w-full max-w-4xl min-h-[220px] flex flex-col justify-center items-center text-center mt-12 md:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="flex flex-col items-center"
            >
              <p className="font-body text-lg md:text-2xl italic text-krone-white max-w-[90%] md:max-w-[80%] leading-relaxed">
                "{testimonials[activeIndex].quote}"
              </p>

              <div className="mt-8 flex flex-col items-center">
                <span className="font-body text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-krone-amber">
                  {testimonials[activeIndex].author}
                </span>
                <span className="font-body text-xs text-krone-concrete mt-1 tracking-wide">
                  {testimonials[activeIndex].company}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-12 mt-12">
          <button
            onClick={handlePrev}
            className="text-krone-concrete hover:text-krone-amber transition-colors duration-300 focus:outline-none p-2 group"
            aria-label="Previous Testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 group-hover:-translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-[2px] transition-all duration-300 ${
                  activeIndex === index ? 'w-8 bg-krone-amber' : 'w-3 bg-krone-concrete/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="text-krone-concrete hover:text-krone-amber transition-colors duration-300 focus:outline-none p-2 group"
            aria-label="Next Testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 group-hover:translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
