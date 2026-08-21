import { Link } from "@tanstack/react-router";
import { img } from "@/data/images";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <img
        src={img.heroWedding}
        alt="Indian bride and groom photographed in cinematic evening light during their wedding ceremony"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/65" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/70"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-20 sm:px-8">
        <span className="label-eyebrow">D Subhash Studios</span>
        <h1 className="mt-6 max-w-3xl text-[2.6rem] leading-[1.05] text-ivory sm:text-6xl lg:text-7xl">
          Stories That Deserve
          <span className="block text-gold">To Be Remembered.</span>
        </h1>
        <span className="gold-rule mt-8" aria-hidden="true" />
        <p className="mt-6 max-w-xl text-sm tracking-[0.16em] text-ivory/70 uppercase sm:text-[0.8rem]">
          Premium Photography • Cinematography • Visual Storytelling
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/portfolio"
            className="rounded-sm bg-gold px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-soft"
          >
            Explore Portfolio
          </Link>
          <Link
            to="/contact"
            className="rounded-sm border border-ivory/40 px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
          >
            Book a Consultation
          </Link>
        </div>
      </div>

      <div
        className="absolute bottom-10 right-6 hidden h-24 w-px bg-gradient-to-b from-transparent to-gold sm:block"
        aria-hidden="true"
      />
    </section>
  );
}
