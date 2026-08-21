import { SectionHeading } from "@/components/SectionHeading";
import { whyChooseUs } from "@/data/mockData";

export function WhyChooseUs() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Craft, Consistency & Calm On The Day"
          tone="dark"
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm bg-ivory/10 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((f) => (
            <li key={f.mark} className="bg-ink px-7 py-9">
              <span className="font-display text-3xl text-gold/70">{f.mark}</span>
              <h3 className="mt-4 text-2xl text-ivory">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/55">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
