"use client";

import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Featured Projects</h2>
          <div className="section-divider" />
          <p className="section-subheading">
            Each project showcases different aspects of my cloud & DevOps expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((project) => project.featured)
            .map((project) => (
              <div
                key={project.id}
                className="glass-card-hover rounded-2xl overflow-hidden group"
              >
                {/* Project header with gradient */}
                <div className="relative h-44 bg-gradient-to-br from-primary/5 via-accent-2/5 to-accent/5 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <span className="text-5xl font-bold text-primary/15 group-hover:text-primary/25 transition-colors duration-500">
                      {project.title
                        .split(" ")
                        .map((w) => w[0])
                        .join("")}
                    </span>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="w-6 h-[1px] bg-primary/40" />
                      <span className="text-[10px] text-primary/60 font-mono uppercase tracking-widest">
                        View Project
                      </span>
                      <span className="w-6 h-[1px] bg-primary/40" />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-2 border-t border-border/50">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors pt-3"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors pt-3"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="https://github.com/hemanthvadde"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-3.5 border border-border text-foreground rounded-xl font-medium hover:border-primary/50 hover:bg-primary/5 transition-all"
          >
            View All Projects on GitHub
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
