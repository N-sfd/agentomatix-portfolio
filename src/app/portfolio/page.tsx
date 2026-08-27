import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects, services, techStack } from "@/data/projects";

export const metadata: Metadata = {
  title: "Agentomatix AI Portfolio",
  description:
    "AI web apps, business platforms, healthcare AI, e-commerce systems, and SaaS dashboards built by Consult America.",
};

const CONTACT_EMAIL = "hello@consultamerica.com";

// Freelance profiles. For freelance work, linking to Upwork/Fiverr converts
// better than personal email. Paste your profile URL(s) here to turn the
// contact button into a direct "Hire" link. If both are empty, the button
// gracefully falls back to email.
const UPWORK_PROFILE_URL = ""; // e.g. https://www.upwork.com/freelancers/~01abc123
const FIVERR_PROFILE_URL = ""; // e.g. https://www.fiverr.com/yourusername

const whyItems = [
  {
    title: "Full-Stack + AI Integration",
    description:
      "Frontend, backend, APIs, databases, and AI workflows combined into complete working applications.",
  },
  {
    title: "Business-Focused Product Thinking",
    description:
      "Each project is designed around a real use case, user workflow, and business outcome.",
  },
  {
    title: "Fast MVP Delivery",
    description:
      "Product ideas can move quickly from concept to deployed demo with clean, testable implementation.",
  },
  {
    title: "Clean UI and Responsive Design",
    description:
      "Interfaces are built to feel modern, professional, and usable across desktop and mobile devices.",
  },
  {
    title: "Cross-Industry Experience",
    description:
      "Experience across healthcare AI, resume platforms, writing tools, commerce systems, booking apps, consulting websites, and service marketplaces.",
  },
  {
    title: "Deployment-Ready Builds",
    description:
      "Projects are deployed using platforms such as Cloudflare Pages, Vercel, Netlify, Firebase, and Supabase.",
  },
];

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
            Agentomatix AI Portfolio
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl">
            AI web apps, business platforms, healthcare AI, e-commerce systems, and SaaS dashboards
            built with modern full-stack technologies.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500">
            Agentomatix is the AI product and web application portfolio of Consult America,
            showcasing practical AI tools, SaaS dashboards, business platforms, healthcare AI
            concepts, e-commerce systems, and service automation applications built from idea to
            deployment.
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
            A selection of AI-powered applications, business platforms, and full-stack web products
            built from product design to live deployment.
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
              Practical product development focused on real business use cases, not just design
              mockups.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item) => (
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
            Have an AI product or business app idea?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Let&rsquo;s turn your idea into a working web application, AI tool, SaaS dashboard, or
            automation platform.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {UPWORK_PROFILE_URL ? (
              <a
                href={UPWORK_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-700 shadow-md transition-opacity hover:opacity-90 sm:w-auto"
              >
                Hire on Upwork
              </a>
            ) : null}

            {FIVERR_PROFILE_URL ? (
              <a
                href={FIVERR_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center rounded-full border border-white/70 bg-white/10 px-8 py-3.5 text-base font-semibold text-white shadow-md transition-colors hover:bg-white/20 sm:w-auto"
              >
                Hire on Fiverr
              </a>
            ) : null}

            {!UPWORK_PROFILE_URL && !FIVERR_PROFILE_URL ? (
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex w-full justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-700 shadow-md transition-opacity hover:opacity-90 sm:w-auto"
              >
                Contact Consult America
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
