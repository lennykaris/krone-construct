import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

export default function useCounter(targetNumber, ref, duration = 2) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(targetNumber);
      return;
    }

    const obj = { value: 0 };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(obj, {
              value: targetNumber,
              duration: duration,
              ease: 'power2.out',
              onUpdate: () => {
                setCount(Math.floor(obj.value));
              },
              onComplete: () => {
                setCount(targetNumber);
              },
            });
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
  }, [targetNumber, ref, duration]);

  return count;
}
