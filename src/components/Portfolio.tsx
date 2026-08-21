import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioCard } from "@/components/PortfolioCard";
import { PORTFOLIO_CATEGORIES } from "@/data/mockData";
import { useStudio } from "@/store/StudioStore";
import { cn } from "@/lib/utils";

export function Portfolio({ heading = true }: { heading?: boolean }) {
  const { projects } = useStudio();
  const [filter, setFilter] = useState("All");

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [projects, filter],
  );

  return (
    <section id="portfolio" className="scroll-mt-20 bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {heading ? (
          <SectionHeading
            eyebrow="Selected Work"
            title="A Portfolio of Real Moments"
            intro="Weddings, candid frames, pre-wedding sessions, events and commercial campaigns across Maharashtra and Karnataka."
          />
        ) : null}

        <div className="-mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
          {PORTFOLIO_CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={cn(
                "shrink-0 rounded-sm border px-4 py-2 text-[0.65rem] uppercase tracking-[0.2em] transition-colors",
                filter === c
                  ? "border-gold bg-gold text-ink"
                  : "border-border text-warmgray hover:border-gold hover:text-ink",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <PortfolioCard key={p.id} project={p} />
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-12 text-center text-sm text-warmgray">
            No projects in this category yet.
          </p>
        ) : null}
      </div>
    </section>
  );
}
