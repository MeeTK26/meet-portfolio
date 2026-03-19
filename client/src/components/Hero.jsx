/**
 * Hero: typewriter name on load, then title/tagline/button blur-in.
 * "Meet Lad" has a continuous grey-to-white liquid animation (no hover).
 */

import { useState, useEffect } from 'react';
import { hero } from '../data/profile';

const TYPEWRITER_DELAY_MS = 80;

export default function Hero({ onNameComplete }) {
  const [typedLength, setTypedLength] = useState(0);
  const [nameComplete, setNameComplete] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  // Typewriter: reveal name character by character; notify parent when done (for navbar)
  useEffect(() => {
    if (typedLength >= hero.name.length) {
      setNameComplete(true);
      onNameComplete?.();
      return;
    }
    const t = setTimeout(() => setTypedLength((n) => n + 1), TYPEWRITER_DELAY_MS);
    return () => clearTimeout(t);
  }, [typedLength, onNameComplete]);

  // After name is fully typed, show subtitle (title, tagline, button) with blur-in
  useEffect(() => {
    if (!nameComplete) return;
    const t = setTimeout(() => setShowSubtitle(true), 300);
    return () => clearTimeout(t);
  }, [nameComplete]);

  const displayName = hero.name.slice(0, typedLength);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-14 px-4 overflow-hidden"
    >
      {/* Floating background dots behind the name area */}
      <div className="pointer-events-none absolute inset-0 max-w-3xl mx-auto">
        <div className="relative w-full h-full mx-auto">
          {/* Dots: each has its own delay and duration for varied timing */}
          <span
            className="hero-dot"
            style={{ top: '18%', left: '18%', animationDelay: '0s', animationDuration: '7s' }}
          />
          <span
            className="hero-dot"
            style={{ top: '22%', left: '65%', animationDelay: '0.9s', animationDuration: '6s' }}
          />
          <span
            className="hero-dot"
            style={{ top: '30%', left: '40%', animationDelay: '1.8s', animationDuration: '5.4s' }}
          />
          <span
            className="hero-dot"
            style={{ top: '35%', left: '80%', animationDelay: '0.6s', animationDuration: '6.8s' }}
          />
          <span
            className="hero-dot"
            style={{ top: '42%', left: '12%', animationDelay: '2.1s', animationDuration: '5.8s' }}
          />
          <span
            className="hero-dot"
            style={{ top: '48%', left: '55%', animationDelay: '1.2s', animationDuration: '6.4s' }}
          />
          <span
            className="hero-dot"
            style={{ top: '52%', left: '32%', animationDelay: '2.4s', animationDuration: '5.2s' }}
          />
          <span
            className="hero-dot"
            style={{ top: '58%', left: '75%', animationDelay: '0.3s', animationDuration: '7.2s' }}
          />
          <span
            className="hero-dot"
            style={{ top: '62%', left: '20%', animationDelay: '1.7s', animationDuration: '5.6s' }}
          />
          <span
            className="hero-dot"
            style={{ top: '66%', left: '50%', animationDelay: '2.9s', animationDuration: '6.1s' }}
          />
          <span
            className="hero-dot"
            style={{ top: '70%', left: '68%', animationDelay: '1.4s', animationDuration: '5.9s' }}
          />
          <span
            className="hero-dot"
            style={{ top: '24%', left: '32%', animationDelay: '3.2s', animationDuration: '6.6s' }}
          />
          <span
            className="hero-dot"
            style={{ top: '38%', left: '52%', animationDelay: '2.6s', animationDuration: '5.5s' }}
          />
          <span
            className="hero-dot"
            style={{ top: '54%', left: '85%', animationDelay: '3.5s', animationDuration: '7.4s' }}
          />
          <span
            className="hero-dot"
            style={{ top: '72%', left: '10%', animationDelay: '1.9s', animationDuration: '6.2s' }}
          />
          <span
            className="hero-dot"
            style={{ top: '76%', left: '40%', animationDelay: '2.8s', animationDuration: '5.7s' }}
          />
        </div>
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Name: typewriter then continuous liquid grey→white */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 min-h-[1.2em] flex items-center justify-center flex-wrap gap-0">
          {!nameComplete ? (
            <span className="text-white">{displayName}</span>
          ) : (
            <span className="hero-name-liquid">{hero.name}</span>
          )}
        </h1>

        {/* Subtitle: Software Developer, tagline, Get in touch — blur to visible, staggered */}
        {showSubtitle && (
          <>
            <p
              className="text-xl sm:text-2xl font-semibold text-orange-600 mb-4 hero-blur-in"
              style={{ animationDelay: '0ms' }}
            >
              {hero.title}
            </p>
            <p
              className="text-gray-400 text-lg max-w-xl mx-auto mb-6 hero-blur-in"
              style={{ animationDelay: '200ms' }}
            >
              {hero.tagline}
            </p>
            <div
              className="mt-6 hero-blur-in"
              style={{ animationDelay: '400ms' }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-medium text-white bg-orange-600 hover:bg-orange-500 transition-colors border border-orange-600/50"
              >
                <span>Get in touch</span>
                <span className="inline-flex items-center justify-center transform translate-x-0 opacity-80 transition-all duration-200 group-hover:translate-x-1.5 group-hover:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 12h13m0 0L13 7m4 5-4 5"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
