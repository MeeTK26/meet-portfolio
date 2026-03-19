/**
 * Footer: copyright and quick links.
 */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-gray-800 bg-portfolio-bg">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {year} Portfolio. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="#hero"
            className="text-gray-500 hover:text-orange-500 text-sm font-medium transition-colors"
          >
            Top
          </a>
          <a
            href="#contact"
            className="text-gray-500 hover:text-orange-500 text-sm font-medium transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
