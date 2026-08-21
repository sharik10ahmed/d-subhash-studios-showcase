import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", to: "/", hash: undefined as string | undefined },
  { label: "About", to: "/", hash: "about" },
  { label: "Services", to: "/", hash: "services" },
  { label: "Portfolio", to: "/portfolio", hash: undefined },
  { label: "Films", to: "/films", hash: undefined },
  { label: "Testimonials", to: "/", hash: "testimonials" },
  { label: "FAQ", to: "/", hash: "faq" },
  { label: "Contact", to: "/contact", hash: undefined },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "bg-ink/95 backdrop-blur-md" : "bg-gradient-to-b from-ink/70 to-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <Link to="/" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-lg tracking-[0.2em] text-ivory sm:text-xl">
            D SUBHASH
          </span>
          <span className="text-[0.55rem] tracking-[0.42em] text-gold">STUDIOS</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                hash={l.hash}
                className="text-[0.7rem] uppercase tracking-[0.22em] text-ivory/75 transition-colors hover:text-gold"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-sm border border-gold/60 px-5 py-2.5 text-[0.65rem] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-ink sm:inline-block"
          >
            Book Your Shoot
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={cn(
                "h-px w-6 bg-ivory transition-transform duration-300",
                open && "translate-y-[7px] rotate-45",
              )}
            />
            <span className={cn("h-px w-6 bg-ivory transition-opacity", open && "opacity-0")} />
            <span
              className={cn(
                "h-px w-6 bg-ivory transition-transform duration-300",
                open && "-translate-y-[7px] -rotate-45",
              )}
            />
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-ivory/10 bg-ink lg:hidden">
          <ul className="flex flex-col px-5 py-3 sm:px-8">
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ivory/5 py-3.5 text-xs uppercase tracking-[0.24em] text-ivory/80"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 block rounded-sm bg-gold px-5 py-3 text-center text-[0.65rem] uppercase tracking-[0.2em] text-ink"
              >
                Book Your Shoot
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
