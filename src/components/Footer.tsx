import { Link } from "@tanstack/react-router";
import { useStudio } from "@/store/StudioStore";

const quickLinks = [
  { label: "Home", to: "/", hash: undefined as string | undefined },
  { label: "About", to: "/", hash: "about" },
  { label: "Services", to: "/", hash: "services" },
  { label: "Portfolio", to: "/portfolio", hash: undefined },
  { label: "Films", to: "/films", hash: undefined },
  { label: "Contact", to: "/contact", hash: undefined },
];

const socials = ["Instagram", "Facebook", "YouTube"];

export function Footer() {
  const { contact } = useStudio();

  return (
    <footer className="border-t border-ivory/10 bg-ink py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-3">
        <div>
          <span className="font-display text-2xl tracking-[0.18em] text-ivory">
            D SUBHASH STUDIOS
          </span>
          <p className="mt-3 text-[0.65rem] uppercase tracking-[0.24em] text-gold">
            Photography • Cinematography • Advertisement Filmmaking
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/50">
            Premium wedding films, candid photography, event coverage and customised visual
            media from Gadhinglaj, Maharashtra.
          </p>
        </div>

        <div>
          <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-ivory/80">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  hash={l.hash}
                  className="text-sm text-ivory/55 transition-colors hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[0.65rem] uppercase tracking-[0.24em] text-ivory/80">Contact</h2>
          <address className="mt-5 space-y-2.5 text-sm not-italic text-ivory/55">
            <p>{contact.address}</p>
            <p>
              <a href={`tel:${contact.phone}`} className="hover:text-gold">
                {contact.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contact.email}`} className="hover:text-gold">
                {contact.email}
              </a>
            </p>
          </address>
          <ul className="mt-6 flex gap-3">
            {socials.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  aria-label={s}
                  className="inline-block rounded-sm border border-ivory/20 px-3 py-2 text-[0.6rem] uppercase tracking-[0.18em] text-ivory/60 transition-colors hover:border-gold hover:text-gold"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-ivory/10 px-5 pt-6 text-[0.65rem] tracking-[0.14em] text-ivory/35 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} D Subhash Studios. All rights reserved.</p>
        <Link to="/admin/login" className="uppercase tracking-[0.22em] hover:text-gold">
          Admin Login
        </Link>
      </div>
    </footer>
  );
}
