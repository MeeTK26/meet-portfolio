/**
 * Wraps content and adds scroll-triggered fade-in-up animation.
 * When the wrapper enters the viewport, .animate-in is added.
 */

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ScrollReveal({ children, className = '' }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={`section-animate ${className}`.trim()}>
      {children}
    </div>
  );
}
