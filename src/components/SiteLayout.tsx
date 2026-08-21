import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ivory">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="bg-ink px-5 pt-36 pb-16 sm:px-8 sm:pt-44 sm:pb-20">
      <div className="mx-auto max-w-7xl">
        <span className="label-eyebrow">{eyebrow}</span>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.08] text-ivory sm:text-6xl">{title}</h1>
        <span className="gold-rule mt-6" aria-hidden="true" />
        {intro ? (
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ivory/60 sm:text-base">
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  );
}
