import { img } from "@/data/images";
import { useStudio } from "@/store/StudioStore";

export function About() {
  const { stats } = useStudio();

  const cells = [
    { value: stats.events, label: "Events Captured" },
    { value: stats.weddings, label: "Wedding Stories" },
    { value: stats.commercial, label: "Commercial Projects" },
    { value: stats.experience, label: "Years of Experience" },
  ];

  return (
    <section id="about" className="scroll-mt-20 bg-ivory py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <img
            src={img.aboutStudio}
            alt="D Subhash Studios photographer composing a frame during a studio portrait session"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-sm object-cover"
          />
          <div
            className="absolute -bottom-4 -right-4 hidden h-32 w-32 border-r border-b border-gold sm:block"
            aria-hidden="true"
          />
        </div>

        <div>
          <span className="label-eyebrow">About The Studio</span>
          <h2 className="mt-4 text-4xl leading-[1.1] text-ink sm:text-5xl">
            We Capture More Than Moments.
          </h2>
          <span className="gold-rule mt-6" aria-hidden="true" />
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-warmgray sm:text-base">
            <p>
              D Subhash Studios works in photography, cinematography and advertisement
              filmmaking from Gadhinglaj, Maharashtra — capturing, producing and delivering
              premium wedding films, candid photography, event coverage and customised visual
              media for individual and commercial projects.
            </p>
            <p>
              Our photography philosophy is simple: authentic emotion first. We stay close
              enough to see the moment and far enough to let it happen, then compose it with
              the discipline of a filmmaker.
            </p>
            <p>
              Every wedding, event and campaign is planned personally with the client — a
              concept, a shoot plan and a delivery timeline agreed before the first frame is
              ever made.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-4">
            {cells.map((c) => (
              <div key={c.label} className="bg-ivory px-4 py-5 text-center">
                <dt className="sr-only">{c.label}</dt>
                <dd>
                  <span className="block font-display text-3xl text-gold">{c.value}</span>
                  <span className="mt-1 block text-[0.6rem] uppercase tracking-[0.18em] text-warmgray">
                    {c.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
