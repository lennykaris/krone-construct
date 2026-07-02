import React, { useRef } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function Projects() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef, {
    stagger: 0.08,
    selector: '.project-grid-item',
  });

  const projects = [
    {
      id: '01',
      name: 'Skyline Towers',
      location: 'Westlands',
      year: '2023',
      type: 'Commercial',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
      gridClass: 'md:col-span-2 md:row-span-2 h-[400px] md:h-[624px]',
    },
    {
      id: '02',
      name: 'Meridian Bridge',
      location: 'Athi River',
      year: '2022',
      type: 'Infrastructure',
      imageUrl: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=1200&q=80',
      gridClass: 'md:col-span-1 md:row-span-1 h-[280px] md:h-[300px]',
    },
    {
      id: '03',
      name: 'The Kite Residences',
      location: 'Karen',
      year: '2023',
      type: 'Residential',
      imageUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
      gridClass: 'md:col-span-1 md:row-span-1 h-[280px] md:h-[300px]',
    },
    {
      id: '04',
      name: 'Embakasi Hub',
      location: 'Embakasi',
      year: '2021',
      type: 'Industrial',
      imageUrl: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?w=1200&q=80',
      gridClass: 'md:col-span-1 md:row-span-1 h-[280px] md:h-[300px]',
    },
    {
      id: '05',
      name: 'Longonot Plaza',
      location: 'CBD',
      year: '2024',
      type: 'Mixed-Use',
      imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
      gridClass: 'md:col-span-2 md:row-span-1 h-[280px] md:h-[300px]',
    },
  ];

  return (
    <section id="work" className="py-24 md:py-32 bg-krone-black border-b border-krone-charcoal select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="mb-16 flex flex-col items-start">
          <span className="font-body text-[11px] uppercase tracking-[0.25em] text-krone-concrete mb-2 font-semibold">
            Featured Projects
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-black text-krone-amber uppercase leading-none">
            OUR WORK
          </h2>
          <div className="w-12 h-[2px] bg-krone-amber mt-4" />
        </div>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-grid-item group overflow-hidden relative cursor-pointer bg-krone-charcoal ${project.gridClass}`}
            >
              <img
                src={project.imageUrl}
                alt={`${project.name} project in ${project.location}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                width={project.gridClass.includes('col-span-2') ? 1200 : 800}
                height={project.gridClass.includes('row-span-2') ? 624 : 300}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-krone-black/60 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
              
              <div className="absolute bottom-6 left-6 z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                <span className="font-body text-[11px] text-krone-amber uppercase tracking-wider block mb-1">
                  {project.type}
                </span>
                <span className="font-display text-2xl font-black text-krone-white uppercase tracking-wide">
                  {project.name}
                </span>
              </div>

              <div className="absolute inset-0 bg-krone-black/95 p-8 flex flex-col justify-between transform translate-y-full group-hover:translate-y-0 transition-transform duration-[400ms] ease-out z-20">
                <span className="absolute top-8 right-8 font-body text-sm font-semibold text-krone-amber select-none">
                  {project.id}
                </span>

                <div className="pt-2">
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-krone-amber/70 block mb-2 font-medium">
                    {project.type}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-[32px] md:text-[38px] font-black text-krone-white leading-none uppercase tracking-wide">
                    {project.name}
                  </h3>
                  <p className="font-body text-[13px] text-krone-concrete mt-3 font-medium flex items-center gap-2">
                    <span>{project.location}</span>
                    <span className="text-krone-concrete/40 font-light">|</span>
                    <span>{project.year}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
