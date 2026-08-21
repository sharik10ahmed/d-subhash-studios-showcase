import { useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { EVENT_TYPES } from "@/data/mockData";
import { useStudio } from "@/store/StudioStore";

const field =
  "w-full rounded-sm border border-border bg-card px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-warmgray/70 focus:border-gold";
const labelCls = "block text-[0.62rem] uppercase tracking-[0.2em] text-warmgray";

export function Contact() {
  const { contact } = useStudio();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="scroll-mt-20 bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Booking"
          title="Let's Create Something Worth Remembering."
          intro="Tell us about your date, your venue and the kind of coverage you have in mind."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <address className="not-italic">
            <h3 className="text-3xl text-ink">{contact.business}</h3>
            <span className="gold-rule mt-5" aria-hidden="true" />
            <dl className="mt-6 space-y-6 text-sm">
              <div>
                <dt className={labelCls}>Address</dt>
                <dd className="mt-1.5 text-ink">{contact.address}</dd>
              </div>
              <div>
                <dt className={labelCls}>Phone</dt>
                <dd className="mt-1.5">
                  <a href={`tel:${contact.phone}`} className="text-ink hover:text-gold">
                    {contact.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={labelCls}>Email</dt>
                <dd className="mt-1.5">
                  <a href={`mailto:${contact.email}`} className="text-ink hover:text-gold">
                    {contact.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={labelCls}>Studio</dt>
                <dd className="mt-1.5 text-ink">{contact.owner}</dd>
              </div>
            </dl>
          </address>

          <div className="rounded-sm border border-border bg-card p-6 sm:p-8">
            {sent ? (
              <div className="py-10 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold text-2xl text-gold">
                  ✓
                </span>
                <h3 className="mt-6 text-3xl text-ink">Thank You</h3>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-warmgray">
                  Your enquiry has been received. Our team will call you on the number you
                  shared within one working day.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mt-8 rounded-sm border border-gold/60 px-6 py-3 text-[0.65rem] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-ink"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelCls} htmlFor="name">
                    Full Name
                  </label>
                  <input id="name" name="name" required className={`mt-2 ${field}`} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className={`mt-2 ${field}`}
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={`mt-2 ${field}`}
                  />
                </div>
                <div>
                  <label className={labelCls} htmlFor="eventType">
                    Event Type
                  </label>
                  <select id="eventType" name="eventType" className={`mt-2 ${field}`}>
                    {EVENT_TYPES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelCls} htmlFor="date">
                    Event Date
                  </label>
                  <input id="date" name="date" type="date" className={`mt-2 ${field}`} />
                </div>
                <div>
                  <label className={labelCls} htmlFor="location">
                    Location
                  </label>
                  <input id="location" name="location" className={`mt-2 ${field}`} />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelCls} htmlFor="message">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={4} className={`mt-2 ${field}`} />
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full rounded-sm bg-ink px-7 py-3.5 text-xs uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-gold hover:text-ink"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
