import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Manage top bar transparency transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for floating bottom navigation
  useEffect(() => {
    const sections = ['work', 'services', 'about', 'contact'];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: '-40% 0px -50% 0px', // Detects the active center portion
          threshold: 0,
        }
      );
      observer.observe(el);
      observers.push({ observer, el });
    });

    // Fallback for top of the page
    const handleScrollTop = () => {
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScrollTop);

    return () => {
      observers.forEach(({ observer, el }) => observer.unobserve(el));
      window.removeEventListener('scroll', handleScrollTop);
    };
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top Header Navigation (Fixed at top) */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-krone-black/95 border-b border-krone-amber/40 py-4'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-baseline group select-none">
            <span className="font-display text-[28px] font-black text-krone-amber tracking-tight transition-transform duration-300 group-hover:scale-105">
              KRONE
            </span>
            <span className="font-body text-[13px] text-krone-white uppercase tracking-[0.2em] ml-2 font-medium">
              CONSTRUCT
            </span>
          </a>

          {/* Desktop Nav Links (Hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-[13px] uppercase tracking-[0.15em] text-krone-white/80 hover:text-krone-amber transition-colors duration-300 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-krone-amber after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Floating Bottom Navigation Bar (Mobile only, below 768px) */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50 bg-krone-black border border-krone-amber/40 py-2.5 px-3 rounded-[2px] flex justify-around items-center">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;

          // Render icons for mobile app layout
          let icon = null;
          if (link.id === 'work') {
            icon = (
              <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" className="transition-all duration-300" />
                <rect x="14" y="3" width="7" height="7" className="transition-all duration-300" />
                <rect x="14" y="14" width="7" height="7" className="transition-all duration-300" />
                <rect x="3" y="14" width="7" height="7" className="transition-all duration-300" />
              </svg>
            );
          } else if (link.id === 'services') {
            icon = (
              <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            );
          } else if (link.id === 'about') {
            icon = (
              <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 22V4h16v18M4 8h16M4 14h16" />
              </svg>
            );
          } else if (link.id === 'contact') {
            icon = (
              <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13" />
                <path d="M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            );
          }

          return (
            <a
              key={link.name}
              href={link.href}
              className={`flex flex-col items-center justify-center flex-1 py-1 rounded-[2px] transition-colors duration-300 ${
                isActive ? 'text-krone-amber font-semibold' : 'text-krone-concrete hover:text-krone-white'
              }`}
            >
              {icon}
              <span className="font-body text-[9px] uppercase tracking-wider select-none font-medium">
                {link.name}
              </span>
            </a>
          );
        })}
      </div>
    </>
  );
}
