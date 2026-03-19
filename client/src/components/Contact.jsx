/**
 * Contact section: email and social links from profile.js.
 * Uses icon-only buttons (email, GitHub, LinkedIn, etc.) that navigate on click.
 */

import { contact } from '../data/profile';

const SOCIAL_ICON_BASE = 'https://skillicons.dev/icons?i=';

function getSocialIconId(label) {
  const key = label.toLowerCase();
  if (key.includes('github')) return 'github';
  if (key.includes('linkedin')) return 'linkedin';
  if (key.includes('twitter') || key.includes('x')) return 'twitter';
  return null;
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-portfolio-card">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col items-center gap-3 mb-8">
          <h2 className="text-3xl font-bold text-white">Contact</h2>
          <div className="h-1 w-20 rounded-full bg-orange-600" />
        </div>
        <p className="text-gray-400 mb-8">
          Open to opportunities and conversations. Reach out via email or socials.
        </p>

        <div className="flex items-center justify-center gap-6 mb-6">
          {/* Email icon button */}
          <a
            href={`mailto:${contact.email}`}
            className="w-12 h-12 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center text-gray-200 hover:border-orange-600 hover:text-orange-400 transition-colors"
            aria-label="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M4.5 5.25A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25h15a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 19.5 5.25h-15ZM4.5 7.5l7.5 4.5 7.5-4.5v-.75h-15v.75Zm0 2.178v6.822h15V9.678l-7.11 4.266a.75.75 0 0 1-.78 0L4.5 9.678Z" />
            </svg>
          </a>

          {/* Social icons (GitHub, LinkedIn, etc.) */}
          {contact.links.map((link) => {
            const iconId = getSocialIconId(link.label);
            const hasIcon = Boolean(iconId);
            return (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-900 border border-gray-700 flex items-center justify-center hover:border-orange-600 transition-colors"
                aria-label={link.label}
              >
                {hasIcon ? (
                  <img
                    src={`${SOCIAL_ICON_BASE}${iconId}`}
                    alt={link.label}
                    className="w-7 h-7"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-sm text-gray-300">{link.label}</span>
                )}
              </a>
            );
          })}
        </div>

        {/* Optional: show email text for quick copy reference */}
        <p className="text-xs text-gray-500">
          {contact.email}
        </p>
      </div>
    </section>
  );
}
