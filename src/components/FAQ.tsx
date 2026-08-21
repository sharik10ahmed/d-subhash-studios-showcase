import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { useStudio } from "@/store/StudioStore";

export function FAQ() {
  const { faqs } = useStudio();
  const [open, setOpen] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section id="faq" className="scroll-mt-20 bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading eyebrow="Questions" title="Everything You Might Ask" tone="dark" />
        <div className="mt-12 divide-y divide-ivory/10 border-y border-ivory/10">
          {faqs.map((f) => {
            const isOpen = open === f.id;
            return (
              <div key={f.id}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : f.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-sans text-sm text-ivory sm:text-base">
                      {f.question}
                    </span>
                    <span className="shrink-0 text-xl text-gold">{isOpen ? "−" : "+"}</span>
                  </button>
                </h3>
                {isOpen ? (
                  <p className="pb-6 text-sm leading-relaxed text-ivory/60">{f.answer}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
