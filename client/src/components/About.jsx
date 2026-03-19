/**
 * About section: heading + paragraphs from profile.js.
 */

import { about } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-portfolio-card">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-3 mb-8">
          <h2 className="text-3xl font-bold text-white">{about.heading}</h2>
          <div className="h-1 w-24 rounded-full bg-orange-600" />
        </div>
        <div className="space-y-4 text-gray-300 leading-relaxed rounded-xl p-6 bg-portfolio-bg/50 border border-gray-800">
          {about.paragraphs.map((para, i) => (
            <p key={i} className="text-gray-300">{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
