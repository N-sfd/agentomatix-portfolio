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
    <section id="projects" className="relative scroll-mt-24 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
            Portfolio
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-400">
            Live AI-powered applications, business platforms, and full-stack web products built from
            product idea to deployed application.
          </p>
        </div>

        <div
          className="mt-10 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
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

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
