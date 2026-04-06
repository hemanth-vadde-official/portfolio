"use client";

import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Work Experience</h2>
          <div className="section-divider" />
          <p className="section-subheading">
            My professional journey building scalable cloud infrastructure and DevOps solutions
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent-2/30 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative pl-16 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2 border-primary bg-background shadow-lg shadow-primary/20 z-10">
                  <div className="absolute inset-0.5 rounded-full bg-primary/30" />
                </div>

                {/* Year badge */}
                <div
                  className="absolute left-0 md:left-0 top-6 -translate-x-full -ml-8 hidden lg:flex items-center gap-2"
                >
                  <span className="text-sm font-bold text-foreground">
                    {exp.period}
                  </span>
                </div>

                {/* Card */}
                <div className="glass-card-hover rounded-2xl p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-secondary">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted border border-border">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted border border-border">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-secondary">
                        <svg
                          className="w-4 h-4 text-primary flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
