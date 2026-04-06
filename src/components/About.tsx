"use client";

import { personalInfo } from "@/data/portfolio";

const stats = [
  { value: "4+", label: "Years Experience", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "3", label: "Companies", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { value: "2", label: "Azure Certifications", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { value: "15+", label: "Tools & Technologies", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
];

export default function About() {
  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">About Me</h2>
          <div className="section-divider" />
          <p className="section-subheading">
            Get to know more about me and what drives my passion for technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-base text-secondary leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-base text-secondary leading-relaxed">
              I specialize in deploying GenAI workloads, microservices, and enterprise
              platforms on Azure Kubernetes Service (AKS) with Helm, Docker, and
              Terraform. I&apos;ve worked across companies like Accenture, Mars Infosol,
              and CodeSage, building CI/CD pipelines that cut deployment times by 30%
              and improving release reliability by 40%.
            </p>
            <p className="text-base text-secondary leading-relaxed">
              I hold Microsoft Azure Fundamentals and Azure AI Fundamentals
              certifications. My focus is on automation, reliability, cost optimization,
              and building scalable cloud architecture that delivers real business value.
            </p>
            <div className="flex gap-4 pt-6">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-primary to-accent-2 text-white rounded-xl font-medium hover:opacity-90 transition-all shadow-lg shadow-primary/20"
              >
                Let&apos;s Connect
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border text-foreground rounded-xl font-medium hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card-hover p-6 rounded-2xl text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={stat.icon}
                    />
                  </svg>
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
