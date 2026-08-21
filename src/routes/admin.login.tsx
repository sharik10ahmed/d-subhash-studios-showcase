import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useStudio } from "@/store/StudioStore";
import { ADMIN_CREDENTIALS } from "@/data/mockData";

export const Route = createFileRoute("/admin/login")({
  head: () => ({
    meta: [
      { title: "Admin Login | D Subhash Studios" },
      { name: "description", content: "Studio admin access for D Subhash Studios." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Admin Login | D Subhash Studios" },
      { property: "og:description", content: "Studio admin access for D Subhash Studios." },
    ],
  }),
  component: AdminLogin,
});

function AdminLogin() {
  const { login, isAuthed, toast } = useStudio();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthed) navigate({ to: "/admin" });
  }, [isAuthed, navigate]);

  return (
    <div className="flex min-h-screen items-center justify-center overflow-x-hidden bg-ink px-5 py-16">
      <div className="w-full max-w-md">
        <Link to="/" className="block text-center">
          <span className="block font-display text-2xl tracking-[0.2em] text-ivory">D SUBHASH</span>
          <span className="text-[0.55rem] tracking-[0.42em] text-gold">STUDIOS</span>
        </Link>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (login(email, password)) {
              toast("Welcome back");
              navigate({ to: "/admin" });
            } else {
              setError("Incorrect email or password.");
            }
          }}
          className="mt-10 rounded-sm border border-ivory/10 bg-ivory/[0.03] p-6 sm:p-8"
        >
          <h1 className="font-display text-2xl text-ivory">Admin Login</h1>
          <p className="mt-1 text-xs tracking-[0.14em] text-ivory/45 uppercase">
            Frontend demo access
          </p>

          <label className="mt-6 flex flex-col gap-1.5">
            <span className="text-[0.62rem] uppercase tracking-[0.18em] text-ivory/50">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-sm border border-ivory/15 bg-ink px-3 py-2.5 text-sm text-ivory outline-none focus:border-gold"
            />
          </label>
          <label className="mt-4 flex flex-col gap-1.5">
            <span className="text-[0.62rem] uppercase tracking-[0.18em] text-ivory/50">
              Password
            </span>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-sm border border-ivory/15 bg-ink px-3 py-2.5 text-sm text-ivory outline-none focus:border-gold"
            />
          </label>

          {error ? <p className="mt-4 text-xs text-destructive">{error}</p> : null}

          <button
            type="submit"
            className="mt-6 w-full rounded-sm bg-gold px-5 py-3 text-[0.65rem] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-gold-soft"
          >
            Sign In
          </button>

          <p className="mt-6 text-center text-[0.65rem] leading-relaxed tracking-[0.1em] text-ivory/35">
            Demo credentials — {ADMIN_CREDENTIALS.email} / {ADMIN_CREDENTIALS.password}
          </p>
        </form>

        <Link
          to="/"
          className="mt-6 block text-center text-[0.62rem] uppercase tracking-[0.22em] text-ivory/40 hover:text-gold"
        >
          Back to website
        </Link>
      </div>
    </div>
  );
}
