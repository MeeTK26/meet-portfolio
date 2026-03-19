/**
 * Projects section: cards from data/projects.js.
 */

import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-portfolio-card">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col gap-3 mb-10">
          <h2 className="text-3xl font-bold text-white">Projects</h2>
          <div className="h-1 w-24 rounded-full bg-orange-600" />
        </div>
        <div className="grid sm:grid-cols-2 gap-6 stagger-children">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-xl p-6 border border-gray-800 bg-portfolio-bg hover:border-orange-600/40 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-orange-600/20 text-orange-400 border border-orange-600/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-orange-600 hover:text-orange-500 transition-colors"
                  >
                    Live →
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-orange-600 hover:text-orange-500 transition-colors"
                  >
                    Repo →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
