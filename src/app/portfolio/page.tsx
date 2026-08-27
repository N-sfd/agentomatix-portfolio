import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import ProjectsSection from "@/components/ProjectsSection";
import {
  processSteps,
  projects,
  services,
  techGroups,
  whyItems,
} from "@/data/projects";

export const metadata: Metadata = {
  title: "Agentomatix AI Portfolio | Consult America",
  description:
    "AI web applications, SaaS dashboards, healthcare AI tools, e-commerce platforms, writing assistants, resume analyzers, booking systems, and business applications by Consult America.",
  openGraph: {
    title: "Agentomatix AI Portfolio | Consult America",
    description:
      "AI web applications, SaaS dashboards, healthcare AI tools, e-commerce platforms, writing assistants, resume analyzers, booking systems, and business applications by Consult America.",
    type: "website",
    url: "https://agentomatix-portfolio.pages.dev/portfolio/",
    siteName: "Agentomatix AI Portfolio",
  },
};

const CONTACT_EMAIL = "hello@consultamerica.com";

const trustBadges = [
  "AI commerce workflows",
  "Healthcare AI workflows",
  "Business automation platforms",
  "SaaS dashboard development",
  "E-commerce and service automation systems",
];

const stats = [
  { value: "9", label: "Live Projects" },
  { value: "6+", label: "Industries" },
  { value: "AI + Full Stack", label: "Builds" },
  { value: "Cloud Deployed", label: "Vercel / Cloudflare" },
];

const previewCards = [
  { title: "9 Live Projects", subtitle: "Production demos" },
  { title: "AI + Full Stack", subtitle: "End-to-end delivery" },
  { title: "Cloud Deployed", subtitle: "Vercel & Cloudflare" },
  { title: "Business Ready", subtitle: "Client-focused MVPs" },
];

export default function PortfolioPage() {
  return (
    <main id="top" className="relative overflow-x-hidden bg-[#070d1a] text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(56,189,248,0.18), transparent), radial-gradient(ellipse 40% 40% at 90% 10%, rgba(99,102,241,0.14), transparent), radial-gradient(ellipse 40% 30% at 10% 40%, rgba(34,211,238,0.08), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-28 sm:pt-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 lg:grid-cols-2 lg:gap-16 lg:pb-20">
          <div>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              <Image
                src="/logo.png"
                alt=""
                width={20}
                height={20}
                className="h-5 w-5 object-contain"
              />
              Consult America
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              Agentomatix AI Portfolio
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              AI web applications, healthcare AI tools, e-commerce platforms, SaaS dashboards,
              business websites, and service automation systems built from idea to deployment.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              Consult America builds AI-powered web applications, healthcare AI tools, e-commerce
              platforms, SaaS dashboards, resume and job platforms, writing assistants, booking
              systems, consulting websites, and service automation platforms.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_32px_rgba(34,211,238,0.25)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                View Featured Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                Contact for AI App Development
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-indigo-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1428]/90 p-5 shadow-2xl shadow-cyan-500/10 backdrop-blur-sm sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300/80">
                    Live Portfolio
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">Product Preview Panel</p>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Deployed
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-4">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-3 text-xs text-slate-500">agentomatix.app</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {previewCards.map((card, index) => (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-transform duration-500 hover:-translate-y-0.5"
                      style={{
                        boxShadow:
                          index % 2 === 0
                            ? "0 0 24px rgba(34,211,238,0.08)"
                            : "0 0 24px rgba(99,102,241,0.08)",
                      }}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-xs font-bold text-cyan-200">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <p className="mt-3 text-sm font-semibold text-white">{card.title}</p>
                      <p className="mt-1 text-xs text-slate-400">{card.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {projects.slice(0, 3).map((project) => (
                  <div
                    key={project.slug}
                    className="rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 px-3 py-3 text-center"
                  >
                    <p className="text-xs font-semibold text-white">
                      {project.name
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </p>
                    <p className="mt-1 truncate text-[10px] text-slate-400">{project.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-white/[0.02] py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-5 text-center"
            >
              <p className="text-lg font-semibold text-white sm:text-xl">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <ProjectsSection projects={projects} />

      {/* Services */}
      <section id="services" className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              AI and Web Development Services
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Practical development services for startups, agencies, small businesses, and growing
              companies.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-white/10 bg-[#0b1428]/70 p-6 transition-all hover:-translate-y-0.5 hover:border-cyan-400/30 hover:shadow-[0_16px_40px_-24px_rgba(34,211,238,0.45)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-300">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10 2a1 1 0 01.894.553l1.382 2.764 3.05.443a1 1 0 01.554 1.706l-2.207 2.151.521 3.038a1 1 0 01-1.451 1.054L10 12.27l-2.743 1.44a1 1 0 01-1.451-1.054l.52-3.038-2.206-2.15a1 1 0 01.554-1.706l3.05-.444 1.382-2.763A1 1 0 0110 2z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech-stack" className="scroll-mt-24 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Tech Stack
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Modern, production-ready tools used to ship reliable AI products and business
              platforms.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {techGroups.map((group) => (
              <div
                key={group.label}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  {group.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-[#0b1428] px-3 py-1.5 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why-us" className="scroll-mt-24 border-y border-white/5 bg-white/[0.02] py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Difference
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Why Work With Consult America
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Practical product development focused on real business use cases, not just design
              mockups.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-[#0b1428]/70 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-slate-950">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42l2.79 2.8 6.79-6.8a1 1 0 011.42 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-24 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
              Delivery
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              How We Build
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              A clear path from business idea to deployed product.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-sm font-semibold text-cyan-300">{step.step}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
                {index < processSteps.length - 1 ? (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-cyan-400/50 to-transparent lg:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="scroll-mt-24 px-6 pb-28 sm:pb-36">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-[#0d1b36] via-[#0a1630] to-[#111827] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_55%)]"
          />
          <div className="relative">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Have an AI product or business app idea?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
              Let&rsquo;s turn your idea into a working AI web application, SaaS dashboard,
              e-commerce platform, booking system, or automation tool.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_32px_rgba(34,211,238,0.25)] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:w-auto"
              >
                Start a Project
              </a>
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:w-auto"
              >
                View Live Projects
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-400">
              Available for freelance, contract, and remote AI development projects.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
