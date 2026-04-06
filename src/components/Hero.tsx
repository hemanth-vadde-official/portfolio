"use client";

import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/8 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-2/4 rounded-full blur-[150px]" />

      <div className="container-max relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fadeInUp">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-primary-light font-medium">
                Available for opportunities
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp leading-tight"
              style={{ animationDelay: "0.1s" }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <h2
              className="text-xl md:text-2xl lg:text-3xl text-secondary mb-6 animate-fadeInUp font-light"
              style={{ animationDelay: "0.2s" }}
            >
              {personalInfo.title}
            </h2>

            <p
              className="text-base md:text-lg text-secondary/80 max-w-xl mb-10 animate-fadeInUp leading-relaxed"
              style={{ animationDelay: "0.3s" }}
            >
              {personalInfo.tagline}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#contact"
                className="group px-8 py-3.5 bg-gradient-to-r from-primary to-accent-2 text-white rounded-xl font-medium hover:opacity-90 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
              >
                Get In Touch
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#projects"
                className="px-8 py-3.5 border border-border text-foreground rounded-xl font-medium hover:border-primary/50 hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
              >
                View Projects
              </a>
            </div>

            <div
              className="flex gap-5 mt-10 justify-center lg:justify-start animate-fadeInUp"
              style={{ animationDelay: "0.5s" }}
            >
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-border bg-muted flex items-center justify-center text-secondary hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl border border-border bg-muted flex items-center justify-center text-secondary hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-11 h-11 rounded-xl border border-border bg-muted flex items-center justify-center text-secondary hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hero visual */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary via-accent-2 to-accent p-1 animate-float">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/profile.jpeg"
                    alt="Hemanth Vadde"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-accent/15 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-36 h-36 bg-primary/15 rounded-full blur-2xl" />
              <div className="absolute top-1/2 -right-3 w-6 h-6 bg-primary rounded-full animate-pulse-glow" />
              <div className="absolute bottom-8 -left-3 w-4 h-4 bg-accent rounded-full animate-pulse opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
