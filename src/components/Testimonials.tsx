import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { useStudio } from "@/store/StudioStore";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const { testimonials } = useStudio();
  const [index, setIndex] = useState(0);
  const count = testimonials.length;
  const current = testimonials[Math.min(index, Math.max(count - 1, 0))];

  if (!current) return null;

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  return (
    <section id="testimonials" className="scroll-mt-20 bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Client Words" title="Trusted With Their Biggest Days" />

        <figure className="mx-auto mt-14 max-w-3xl text-center">
          <img
            src={current.avatar}
            alt={`Portrait of ${current.name}`}
            loading="lazy"
            className="mx-auto h-20 w-20 rounded-full object-cover ring-1 ring-gold/50"
          />
          <blockquote className="mt-8">
            <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">
              “{current.review}”
            </p>
          </blockquote>
          <div className="mt-5 text-gold" aria-label={`${current.rating} out of 5 stars`}>
            {"★".repeat(current.rating)}
          </div>
          <figcaption className="mt-4">
            <span className="block text-sm uppercase tracking-[0.2em] text-ink">
              {current.name}
            </span>
            <span className="mt-1 block text-[0.7rem] uppercase tracking-[0.18em] text-warmgray">
              {current.event} · {current.location}
            </span>
          </figcaption>
        </figure>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="h-10 w-10 rounded-full border border-border text-warmgray transition-colors hover:border-gold hover:text-ink"
          >
            ‹
          </button>
          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={cn(
                  "h-1.5 w-6 rounded-full transition-colors",
                  i === index ? "bg-gold" : "bg-border",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="h-10 w-10 rounded-full border border-border text-warmgray transition-colors hover:border-gold hover:text-ink"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
