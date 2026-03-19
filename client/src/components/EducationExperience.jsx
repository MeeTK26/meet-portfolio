/**
 * Education & Experience section: timeline-style from profile.js.
 */

import { education, experience } from '../data/profile';

const entries = [...education, ...experience];

export default function EducationExperience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-3xl font-bold text-white">Education & Experience</h2>
          <div className="h-1 w-32 rounded-full bg-orange-600" />
        </div>
        <div className="space-y-6 stagger-children">
          {entries.map((entry, i) => (
            <div
              key={i}
              className="relative rounded-xl p-6 border border-gray-800 bg-portfolio-card hover:border-orange-600/30 transition-colors pl-7"
            >
              <div className="timeline-line">
                <div className="timeline-line__pulse" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wide text-orange-600">
                {entry.type}
              </span>
              <h3 className="text-xl font-semibold text-white mt-1">{entry.title}</h3>
              <p className="text-gray-400 text-sm">
                {entry.institution || entry.company} · {entry.period}
              </p>
              <p className="text-gray-300 mt-2 text-sm">{entry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
