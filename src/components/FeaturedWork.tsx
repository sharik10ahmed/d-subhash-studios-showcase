import { Link } from "@tanstack/react-router";
import { featuredWork } from "@/data/mockData";

export function FeaturedWork() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <img
          src={featuredWork.image}
          alt="Night baraat procession lit by fireworks during a Maharashtrian wedding celebration"
          loading="lazy"
          className="aspect-[3/2] w-full rounded-sm object-cover"
        />
        <div>
          <span className="label-eyebrow">{featuredWork.eyebrow}</span>
          <h2 className="mt-4 text-4xl leading-[1.1] text-ink sm:text-5xl">
            {featuredWork.title}
          </h2>
          <span className="gold-rule mt-6" aria-hidden="true" />
          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <dt className="text-[0.6rem] uppercase tracking-[0.2em] text-warmgray">Location</dt>
              <dd className="mt-1 text-sm text-ink">{featuredWork.location}</dd>
            </div>
            <div>
              <dt className="text-[0.6rem] uppercase tracking-[0.2em] text-warmgray">Type</dt>
              <dd className="mt-1 text-sm text-ink">{featuredWork.type}</dd>
            </div>
          </dl>
          <p className="mt-6 text-sm leading-relaxed text-warmgray sm:text-base">
            {featuredWork.story}
          </p>
          <Link
            to="/portfolio"
            className="mt-8 inline-block rounded-sm bg-ink px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-ink-soft"
          >
            View Full Story
          </Link>
        </div>
      </div>
    </section>
  );
}
