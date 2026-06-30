import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects, services, techStack } from "@/data/projects";

export const metadata: Metadata = {
  title: "Agentomatic AI Portfolio",
  description:
    "AI web apps, OpenAI tools, SaaS dashboards, business automation, and AI agent workflows built by Consult America.",
};

const CONTACT_EMAIL = "hello@consultamerica.com";

export default function PortfolioPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-100 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:py-28">
          <p className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700">
            Consult America
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Agentomatic AI Portfolio
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
            AI web apps, OpenAI tools, SaaS dashboards, and business automation platforms.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500">
            Consult America builds AI-powered web applications, OpenAI tools, SaaS dashboards,
            resume/job platforms, writing assistants, booking systems, healthcare AI concepts, and
            AI agent human-handoff workflows.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="w-full rounded-full bg-gradient-to-r from-blue-600 to-teal-500 px-8 py-3.5 text-center text-base font-semibold text-white shadow-md transition-opacity hover:opacity-90 sm:w-auto"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full rounded-full border border-slate-300 bg-white px-8 py-3.5 text-center text-base font-semibold text-slate-700 shadow-sm transition-colors hover:border-blue-300 hover:text-blue-700 sm:w-auto"
            >
              Contact for AI App Development
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-slate-600">
            A selection of AI-powered web applications built end-to-end&mdash;from product design to
            deployment.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-slate-100 bg-slate-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Services
            </h2>
            <p className="mt-4 text-slate-600">
              Practical AI development services for startups, agencies, and growing businesses.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-teal-500 text-white">
                  <svg className="h-4.5 w-4.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10 2a1 1 0 01.894.553l1.382 2.764 3.05.443a1 1 0 01.554 1.706l-2.207 2.151.521 3.038a1 1 0 01-1.451 1.054L10 12.27l-2.743 1.44a1 1 0 01-1.451-1.054l.52-3.038-2.206-2.15a1 1 0 01.554-1.706l3.05-.444 1.382-2.763A1 1 0 0110 2z" />
                  </svg>
                </span>
                <span className="font-medium text-slate-800">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-4 text-slate-600">
            Modern, production-ready tools used to ship fast and reliable AI products.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Why Work With Consult America */}
      <section className="border-y border-slate-100 bg-slate-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Work With Consult America
            </h2>
            <p className="mt-4 text-slate-600">
              What sets these builds apart from a generic developer-for-hire.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Full-Stack + AI Integration",
                description:
                  "React, Next.js, and the OpenAI API combined into one production build, not just a UI mockup.",
              },
              {
                title: "Fast Delivery",
                description:
                  "Most projects go from concept to a working, deployed demo in 1-3 weeks.",
              },
              {
                title: "Clean UI/UX",
                description:
                  "Production-ready interfaces designed to feel like a real product, not a prototype.",
              },
              {
                title: "Cross-Industry Experience",
                description:
                  "Healthcare AI, resume/job platforms, booking systems, and AI agent handoff workflows.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-teal-500 text-white">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42l2.79 2.8 6.79-6.8a1 1 0 011.42 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-24">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have an AI app idea? Let&rsquo;s turn it into a working product.
          </h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-8 inline-flex rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-700 shadow-md transition-opacity hover:opacity-90"
          >
            Contact Consult America
          </a>
        </div>
      </section>
    </main>
  );
}
