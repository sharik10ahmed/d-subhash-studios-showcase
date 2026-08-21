import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/data/mockData";

export function Process() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="How We Work" title="Four Steps, Start To Delivery" />
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s) => (
            <li key={s.step} className="border-t border-gold/40 pt-6">
              <span className="font-display text-4xl text-gold">{s.step}</span>
              <h3 className="mt-3 text-2xl text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-warmgray">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
