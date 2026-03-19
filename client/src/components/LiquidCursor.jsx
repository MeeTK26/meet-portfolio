/**
 * Liquid cursor: soft blob(s) that follow the mouse with a smooth, laggy motion.
 * Uses CSS transition for smooth follow; multiple blobs with different speeds for liquid effect.
 * Does not block pointer events. Hidden on touch devices.
 */

import { useState, useEffect, useRef } from 'react';

const BLOB_STYLES = [
  { size: 320, blur: 80, color: 'rgba(234, 88, 12, 0.14)', transition: '0.4s ease-out' },
  { size: 220, blur: 60, color: 'rgba(249, 115, 22, 0.1)', transition: '0.6s ease-out' },
  { size: 140, blur: 45, color: 'rgba(234, 88, 12, 0.08)', transition: '0.9s ease-out' },
];

export default function LiquidCursor() {
  const [position, setPosition] = useState({ x: -500, y: -500 });
  const [visible, setVisible] = useState(false);
  const rafRef = useRef(null);
  const latestRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let rafScheduled = false;

    const handleMove = (e) => {
      if (!visible) setVisible(true);
      latestRef.current = { x: e.clientX, y: e.clientY };
      if (!rafScheduled) {
        rafScheduled = true;
        rafRef.current = requestAnimationFrame(() => {
          setPosition({ x: latestRef.current.x, y: latestRef.current.y });
          rafScheduled = false;
        });
      }
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleLeave);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.documentElement.removeEventListener('mouseleave', handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  if (isTouch) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {BLOB_STYLES.map((blob, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            left: position.x - blob.size / 2,
            top: position.y - blob.size / 2,
            filter: `blur(${blob.blur}px)`,
            background: blob.color,
            opacity: visible ? 1 : 0,
            transition: `left ${blob.transition}, top ${blob.transition}, opacity 0.25s ease-out`,
            willChange: 'left, top',
          }}
        />
      ))}
    </div>
  );
}
