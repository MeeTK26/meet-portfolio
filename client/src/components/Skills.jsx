/**
 * Skills section: categories and items from data/skills.js.
 * Logos beside skill names. No gradients.
 */

import { skills, SKILL_ICON_BASE } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="relative max-w-4xl mx-auto">
        <div className="skills-highlight" />
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-3xl font-bold text-white">Skills</h2>
          <div className="h-1 w-20 rounded-full bg-orange-600" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {skills.map((group) => (
            <div
              key={group.category}
              className="relative rounded-xl p-6 border border-gray-800 bg-portfolio-card hover:border-orange-600/40 transition-colors"
            >
              <h3 className="text-orange-600 font-semibold mb-4">{group.category}</h3>
              <ul className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-300 bg-gray-800 border border-gray-700 hover:border-orange-600/30 hover:bg-orange-600/10 transition-colors"
                  >
                    {item.icon ? (
                      <img
                        src={`${SKILL_ICON_BASE}${item.icon}`}
                        alt=""
                        className="w-5 h-5 flex-shrink-0"
                        loading="lazy"
                      />
                    ) : null}
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
