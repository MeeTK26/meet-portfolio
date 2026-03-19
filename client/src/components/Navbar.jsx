/**
 * Navbar: fixed top, links to section IDs.
 * Hidden until Hero name is typed; then appears with blur-in (show prop from App).
 */

import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ show = false }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-portfolio-bg/90 backdrop-blur-md border-b border-gray-800 transition-[filter,opacity] duration-300 ${
        show ? 'navbar-blur-in' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <a
          href="#hero"
          className="font-semibold text-lg text-white hover:text-orange-500 transition-colors"
        >
          Meet Lad
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-300 hover:text-orange-500 text-sm font-medium relative after:absolute after:left-0 after:bottom-[-2px] after:h-px after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="md:hidden p-2 text-gray-300 hover:text-orange-500 transition-colors rounded-lg hover:bg-white/5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <ul className="md:hidden border-t border-gray-800 bg-portfolio-card px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2.5 px-3 text-gray-300 hover:text-orange-500 rounded-lg transition-colors font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
