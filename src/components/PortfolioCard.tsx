import type { Project } from "@/data/mockData";

export function PortfolioCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-sm bg-ink">
      <img
        src={project.image}
        alt={`${project.title} — ${project.category} photography in ${project.location}`}
        loading="lazy"
        className="aspect-[4/5] w-full object-cover opacity-90 frame-hover group-hover:scale-105 group-hover:opacity-100"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="text-[0.6rem] uppercase tracking-[0.24em] text-gold">
          {project.category}
        </span>
        <h3 className="mt-2 text-2xl leading-tight text-ivory">{project.title}</h3>
        <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-ivory/50">
          {project.location}
        </p>
        <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-ivory/70 transition-all duration-500 group-hover:max-h-32">
          {project.description}
        </p>
      </div>
    </article>
  );
}
