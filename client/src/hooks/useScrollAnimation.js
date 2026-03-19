/**
 * useScrollAnimation: adds a class when the element enters the viewport.
 * Use with CSS classes for fade-in / slide-up on scroll.
 */

import { useEffect, useRef, useState } from 'react';

const defaultOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px',
  triggerOnce: true,
};

export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const opts = { ...defaultOptions, ...options };

  useEffect(() => {
    const el = ref.current;
    if (!el || (opts.triggerOnce && hasAnimated)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            if (opts.triggerOnce) setHasAnimated(true);
          }
        });
      },
      { threshold: opts.threshold, rootMargin: opts.rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [opts.threshold, opts.rootMargin, opts.triggerOnce, hasAnimated]);

  return ref;
}
