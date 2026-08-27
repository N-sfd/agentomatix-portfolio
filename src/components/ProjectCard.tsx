import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  onViewDetails: () => void;
};

export default function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-3xl p-[1px] transition-transform duration-300 hover:-translate-y-1.5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/15 via-white/5 to-white/10 opacity-100 transition-opacity duration-300 group-hover:opacity-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-300 via-blue-500 to-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex h-full flex-col overflow-hidden rounded-[23px] bg-[#0b1428] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] transition-shadow duration-300 group-hover:shadow-[0_24px_70px_-24px_rgba(34,211,238,0.45)]">
        <div className="relative border-b border-white/10 bg-slate-950/80 p-3 sm:p-3.5">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-inner">
            <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-rose-400/90" />
              <span className="h-2 w-2 rounded-full bg-amber-400/90" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
              <span className="ml-2 truncate rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-500">
                {project.liveUrl.replace(/^https?:\/\//, "")}
              </span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
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
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1428]/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="inline-flex w-fit max-w-full items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-cyan-200">
            <span className="truncate">{project.category}</span>
          </div>

          <h3 className="mt-3 text-lg font-semibold tracking-tight text-white sm:text-xl">
            {project.name}
          </h3>

          <p className="mt-2.5 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-400">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 6).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium text-slate-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
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
