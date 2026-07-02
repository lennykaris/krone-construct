import React from 'react';
import Nav from './components/layout/Nav';
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import Projects from './components/sections/Projects';
import Philosophy from './components/sections/Philosophy';
import Services from './components/sections/Services';
import Stats from './components/sections/Stats';
import Testimonials from './components/sections/Testimonials';
import CTABand from './components/sections/CTABand';
import Footer from './components/sections/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-krone-black font-body text-krone-white select-none">
      <div className="grain-overlay" aria-hidden="true" />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Projects />
        <Philosophy />
        <Services />
        <Stats />
        <Testimonials />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
