import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Modal } from "@/components/ui/Modal";
import { useStudio } from "@/store/StudioStore";
import type { Service } from "@/data/mockData";

export function Services() {
  const { services } = useStudio();
  const [active, setActive] = useState<Service | null>(null);

  return (
    <section id="services" className="scroll-mt-20 bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Services Built Around Your Story"
          intro="Photography, cinematography and commercial production, delivered by one crew working to a single visual plan."
          tone="dark"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.id}
              className="group overflow-hidden rounded-sm border border-ivory/10 bg-ink-soft"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover frame-hover group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent"
                  aria-hidden="true"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl text-ivory">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/55">{s.description}</p>
                <button
                  type="button"
                  onClick={() => setActive(s)}
                  className="mt-5 text-[0.65rem] uppercase tracking-[0.22em] text-gold transition-opacity hover:opacity-70"
                >
                  View Details →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal open={!!active} onClose={() => setActive(null)} title={active?.title ?? ""}>
        {active ? (
          <div>
            <img
              src={active.image}
              alt={active.title}
              className="aspect-[16/9] w-full rounded-sm object-cover"
            />
            <p className="mt-5 text-sm leading-relaxed text-warmgray">{active.description}</p>
            <p className="mt-4 text-sm leading-relaxed text-warmgray">
              Coverage hours, crew size and deliverables are tailored after a short
              consultation. Call 7776998123 to plan your shoot.
            </p>
          </div>
        ) : null}
      </Modal>
    </section>
  );
}
