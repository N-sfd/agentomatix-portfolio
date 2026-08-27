"use client";

import { useState } from "react";
import type { Project, ProjectFilter } from "@/data/projects";
import { projectFilters } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectDetailsModal from "@/components/ProjectDetailsModal";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.filters.includes(activeFilter));

  return (
    <section id="projects" className="relative scroll-mt-24 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            Portfolio
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            Live AI-powered applications, business platforms, and full-stack web products built from
            product idea to deployed application.
          </p>
        </div>

        <div
          className="-mx-4 mt-8 flex gap-2.5 overflow-x-auto px-4 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:px-0 [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Filter projects"
        >
          {projectFilters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`min-h-10 shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? "border-cyan-400/50 bg-cyan-400/15 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid auto-rows-fr grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onViewDetails={() => setSelected(project)}
            />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-sm text-slate-400">
            No projects match this filter yet.
          </p>
        ) : null}
      </div>

      <ProjectDetailsModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
