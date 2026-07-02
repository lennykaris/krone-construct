import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useRef(null);
  const hrContainerRef = useRef(null);

  useScrollReveal(containerRef, {
    stagger: 0.08,
    selector: '.service-row-item',
  });

  const services = [
    {
      num: '01',
      name: 'Commercial Construction',
      desc: 'From modern office complexes to retail plazas, we deliver structural excellence tailored to your commercial objectives. Our team handles everything from initial planning to occupancy.',
    },
    {
      num: '02',
      name: 'Infrastructure & Roads',
      desc: 'Building the arteries of East Africa. We construct bridges, highways, and wastewater systems that withstand the tests of time and heavy usage.',
    },
    {
      num: '03',
      name: 'High-Rise Residential',
      desc: 'Elevated luxury towers that combine aesthetics, engineering safety, and functional residential space. Built with premium materials for discerning developers.',
    },
    {
      num: '04',
      name: 'Industrial Facilities',
      desc: 'State-of-the-art warehouses, factories, and logistics parks optimized for efficient workflow, heavy machinery, and environmental compliance.',
    },
    {
      num: '05',
      name: 'Renovation & Retrofit',
      desc: 'Breathing new life into historic or outdated structures. We reinforce foundations, upgrade structural safety, and modernize systems without compromising character.',
    },
    {
      num: '06',
      name: 'Project Management',
      desc: 'Comprehensive oversight from groundbreaking to key handover. We manage cost, risk, schedules, and subcontractors to ensure seamless delivery.',
    },
  ];

  useEffect(() => {
    const element = hrContainerRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const hrElements = element.querySelectorAll('.services-hr');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              hrElements,
              { scaleX: 0, transformOrigin: 'left' },
              { scaleX: 1, duration: 1.2, ease: 'power2.out', stagger: 0.08 }
            );
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-krone-black border-b border-krone-charcoal select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="mb-16 flex flex-col items-start">
          <span className="font-body text-[11px] uppercase tracking-[0.25em] text-krone-concrete mb-2 font-semibold">
            Capabilities
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-black text-krone-amber uppercase leading-none">
            SERVICES
          </h2>
          <div className="w-12 h-[2px] bg-krone-amber mt-4" />
        </div>

        <div ref={hrContainerRef}>
          <div ref={containerRef} className="flex flex-col">
            {services.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={service.num}
                  className="service-row-item flex flex-col w-full group transition-colors duration-300 hover:bg-krone-amber-dim"
                >
                  <div
                    onClick={() => toggleAccordion(index)}
                    className="flex justify-between items-center py-6 md:py-8 px-4 cursor-pointer"
                  >
                    <span className="font-body text-xs md:text-sm font-medium text-krone-amber w-12">
                      {service.num}
                    </span>

                    <span className="flex-1 font-display text-2xl md:text-[40px] font-black text-krone-white uppercase tracking-wide leading-none transition-colors group-hover:text-krone-white">
                      {service.name}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="text-krone-amber pr-2 select-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="w-5 h-5 md:w-6 md:h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pl-16 pr-6 pb-8 flex flex-col items-start gap-4">
                          <p className="font-body text-sm md:text-base text-krone-concrete max-w-2xl leading-relaxed">
                            {service.desc}
                          </p>
                          <a
                            href="#contact"
                            className="font-body text-xs uppercase tracking-widest text-krone-amber hover:text-krone-white font-semibold flex items-center gap-1.5 transition-colors duration-300 mt-2"
                          >
                            <span>Learn more</span>
                            <span>→</span>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="w-full h-[1px] bg-krone-charcoal relative">
                    <div className="services-hr absolute top-0 left-0 w-full h-full bg-krone-amber/40 origin-left" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
