import React, { useRef } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import useCounter from '../../hooks/useCounter';

function StatItem({ value, label, prefix = '', suffix = '', borderClass }) {
  const ref = useRef(null);
  const animatedValue = useCounter(value, ref, 2.0);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center justify-center text-center p-6 ${borderClass}`}
    >
      <div className="font-display font-black text-6xl md:text-8xl text-krone-amber leading-none select-none flex items-baseline">
        {prefix && (
          <span className="text-xl md:text-3xl font-body font-medium text-krone-amber/70 mr-1 select-none">
            {prefix}
          </span>
        )}
        <span>{animatedValue}</span>
        {suffix && (
          <span className="text-3xl md:text-4xl font-display font-black text-krone-amber select-none">
            {suffix}
          </span>
        )}
      </div>
      <span className="font-body text-xs md:text-[13px] font-semibold uppercase tracking-[0.25em] text-krone-concrete mt-4">
        {label}
      </span>
    </div>
  );
}

export default function Stats() {
  const containerRef = useRef(null);

  // Apply reveal to the stats container
  useScrollReveal(containerRef);

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-28 bg-krone-black border-b border-krone-charcoal overflow-hidden select-none"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=20"
          alt="Stats background"
          className="w-full h-full object-cover object-center filter grayscale opacity-20"
          loading="lazy"
          width={1800}
          height={600}
        />
        <div className="absolute inset-0 bg-krone-black/85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-0">
          <StatItem
            value={23}
            label="YEARS ESTABLISHED"
            borderClass="border-r border-krone-amber/20"
          />
          <StatItem
            value={400}
            label="PROJECTS COMPLETED"
            suffix="+"
            borderClass="border-none lg:border-r lg:border-krone-amber/20"
          />
          <StatItem
            value={12}
            label="DELIVERED VALUE"
            prefix="KSh "
            suffix="B"
            borderClass="border-r border-krone-amber/20"
          />
          <StatItem
            value={98}
            label="ON TIME DELIVERY"
            suffix="%"
            borderClass="border-none"
          />
        </div>
      </div>
    </section>
  );
}
