import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Modal } from "@/components/ui/Modal";
import { useStudio } from "@/store/StudioStore";
import type { Film } from "@/data/mockData";

export function Films() {
  const { films } = useStudio();
  const [active, setActive] = useState<Film | null>(null);

  return (
    <section id="films" className="scroll-mt-20 bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Cinematic Stories"
          title="Films Made To Be Watched Again"
          intro="Wedding films, pre-wedding shorts and brand stories, edited for emotion rather than length."
          tone="dark"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {films.map((f) => (
            <article key={f.id} className="group">
              <button
                type="button"
                onClick={() => setActive(f)}
                aria-label={`Play preview of ${f.title}`}
                className="relative block w-full overflow-hidden rounded-sm"
              >
                <img
                  src={f.thumbnail}
                  alt={`${f.title} — ${f.category} thumbnail`}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover frame-hover group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-ink/40" aria-hidden="true" />
                <span
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/70 bg-ink/50 text-gold transition-colors group-hover:bg-gold group-hover:text-ink"
                  aria-hidden="true"
                >
                  <span className="ml-1 block h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent border-l-current" />
                </span>
                <span className="absolute bottom-4 right-4 rounded-sm bg-ink/75 px-2.5 py-1 text-[0.6rem] tracking-[0.18em] text-ivory">
                  {f.duration}
                </span>
              </button>
              <div className="mt-5">
                <span className="text-[0.6rem] uppercase tracking-[0.24em] text-gold">
                  {f.category}
                </span>
                <h3 className="mt-2 text-3xl text-ivory">{f.title}</h3>
                <p className="mt-1 text-sm text-ivory/55">
                  {f.client} · {f.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title ?? ""} width="max-w-3xl">
        {active ? (
          <div>
            <div className="relative overflow-hidden rounded-sm bg-ink">
              <img
                src={active.thumbnail}
                alt={`${active.title} preview still`}
                className="aspect-video w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                <span className="label-eyebrow">Preview</span>
                <p className="max-w-sm px-6 text-sm text-ivory/80">
                  This is a demo presentation. The full {active.duration} film is shared
                  privately with clients.
                </p>
              </div>
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              {[
                ["Client", active.client],
                ["Location", active.location],
                ["Category", active.category],
                ["Duration", active.duration],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[0.6rem] uppercase tracking-[0.2em] text-warmgray">{k}</dt>
                  <dd className="mt-1 text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-warmgray">{active.synopsis}</p>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
