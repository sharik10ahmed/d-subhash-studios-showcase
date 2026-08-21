import { useStudio } from "@/store/StudioStore";

export function Statistics() {
  const { stats } = useStudio();
  const cells = [
    { value: stats.events, label: "Events Captured" },
    { value: stats.weddings, label: "Wedding Stories" },
    { value: stats.commercial, label: "Commercial Projects" },
    { value: stats.experience, label: "Years of Creative Experience" },
  ];

  return (
    <section className="bg-ink-soft py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <dl className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {cells.map((c) => (
            <div key={c.label}>
              <dt className="sr-only">{c.label}</dt>
              <dd>
                <span className="block font-display text-5xl text-gold sm:text-6xl">
                  {c.value}
                </span>
                <span className="mt-3 block text-[0.62rem] uppercase tracking-[0.24em] text-ivory/60">
                  {c.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
