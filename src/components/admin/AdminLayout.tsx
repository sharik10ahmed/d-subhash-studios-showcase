import { useEffect, useState, type ReactNode } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { useStudio } from "@/store/StudioStore";

const nav = [
  { label: "Dashboard", to: "/admin" as const },
  { label: "Portfolio", to: "/admin/portfolio" as const },
  { label: "Services", to: "/admin/services" as const },
  { label: "Films", to: "/admin/films" as const },
  { label: "Testimonials", to: "/admin/testimonials" as const },
  { label: "FAQs", to: "/admin/faq" as const },
  { label: "Statistics", to: "/admin/statistics" as const },
  { label: "Contact Details", to: "/admin/settings" as const },
];

export function AdminLayout({
  title,
  description,
  actions,
  children,
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  const { isAuthed, logout, toast } = useStudio();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!isAuthed) navigate({ to: "/admin/login" });
  }, [isAuthed, navigate]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  if (!isAuthed) return null;

  return (
    <div className="flex min-h-screen w-full overflow-x-hidden bg-ivory">
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 shrink-0 overflow-y-auto bg-ink px-5 py-6 transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <Link to="/" className="block">
          <span className="block font-display text-lg tracking-[0.2em] text-ivory">D SUBHASH</span>
          <span className="text-[0.55rem] tracking-[0.42em] text-gold">STUDIOS ADMIN</span>
        </Link>
        <nav aria-label="Admin navigation" className="mt-8 flex flex-col gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/admin" }}
              className="rounded-sm px-3 py-2.5 text-[0.7rem] uppercase tracking-[0.18em] text-ivory/60 transition-colors hover:bg-ivory/5 hover:text-gold"
              activeProps={{ className: "bg-gold/15 text-gold" }}
            >
              {n.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              logout();
              toast("Logged out");
              navigate({ to: "/admin/login" });
            }}
            className="mt-4 rounded-sm border border-ivory/15 px-3 py-2.5 text-left text-[0.7rem] uppercase tracking-[0.18em] text-ivory/60 transition-colors hover:border-gold/50 hover:text-gold"
          >
            Logout
          </button>
        </nav>
      </aside>

      {open ? (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-ink/60 lg:hidden"
        />
      ) : null}

      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-ink/10 bg-ivory/95 px-5 py-4 backdrop-blur sm:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              aria-label="Open admin menu"
              onClick={() => setOpen(true)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 border border-ink/15 lg:hidden"
            >
              <span className="h-px w-4 bg-ink" />
              <span className="h-px w-4 bg-ink" />
              <span className="h-px w-4 bg-ink" />
            </button>
            <div className="min-w-0">
              <h1 className="truncate font-display text-xl text-ink sm:text-2xl">{title}</h1>
              {description ? (
                <p className="truncate text-[0.7rem] tracking-[0.12em] text-warmgray uppercase">
                  {description}
                </p>
              ) : null}
            </div>
          </div>
          {actions}
        </header>
        <main className="px-5 py-6 sm:px-8 sm:py-8">{children}</main>
      </div>
    </div>
  );
}

export function AdminButton({
  children,
  onClick,
  type = "button",
  variant = "primary",
}: {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "ghost" | "danger";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-sm px-4 py-2.5 text-[0.65rem] uppercase tracking-[0.2em] transition-colors",
        variant === "primary" && "bg-gold text-ink hover:bg-gold-soft",
        variant === "ghost" && "border border-ink/20 text-ink hover:border-gold hover:text-gold",
        variant === "danger" && "border border-destructive/50 text-destructive hover:bg-destructive/10",
      )}
    >
      {children}
    </button>
  );
}
