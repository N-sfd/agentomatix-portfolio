import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  onViewDetails: () => void;
};

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.35)]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-slate-900">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <ProjectPlaceholder project={project} />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070d1a]/50 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="inline-flex w-fit items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-cyan-200">
          {project.category}
        </div>

        <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">{project.name}</h3>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-1 flex-col justify-end gap-3 sm:flex-row">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            View Live Demo
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 100-2H5z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={onViewDetails}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}

function ProjectPlaceholder({ project }: { project: Project }) {
  const initials = project.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-blue-700 via-cyan-600 to-indigo-700 px-6 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-xl font-bold text-white ring-1 ring-white/25">
        {initials}
      </span>
      <p className="mt-3 text-base font-semibold text-white">{project.name}</p>
      <p className="mt-1 text-xs font-medium text-white/80">{project.category}</p>
    </div>
  );
}
