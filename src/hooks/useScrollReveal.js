import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function useScrollReveal(ref, options = {}) {
  const {
    stagger = 0,
    selector = '',
    duration = 0.7,
    ease = 'power2.out',
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Set to final visible state immediately and return
      if (stagger && selector) {
        const targets = element.querySelectorAll(selector);
        gsap.set(targets, { opacity: 1, y: 0 });
      } else {
        gsap.set(element, { opacity: 1, y: 0 });
      }
      return;
    }

    // Set initial hidden states
    if (stagger && selector) {
      const targets = element.querySelectorAll(selector);
      gsap.set(targets, { opacity: 0, y: 40 });
    } else {
      gsap.set(element, { opacity: 0, y: 40 });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (stagger && selector) {
              const targets = element.querySelectorAll(selector);
              gsap.to(targets, {
                opacity: 1,
                y: 0,
                duration: duration,
                ease: ease,
                stagger: stagger,
                overwrite: 'auto',
              });
            } else {
              gsap.to(element, {
                opacity: 1,
                y: 0,
                duration: duration,
                ease: ease,
                overwrite: 'auto',
              });
            }
            observer.unobserve(element);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, stagger, selector, duration, ease, threshold, rootMargin]);
}
