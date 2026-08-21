import { createFileRoute, Link } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { useStudio } from "@/store/StudioStore";
import { img } from "@/data/images";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard | D Subhash Studios" },
      { name: "description", content: "Manage portfolio, films and studio content." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Admin Dashboard | D Subhash Studios" },
      { property: "og:description", content: "Manage portfolio, films and studio content." },
    ],
  }),
  component: AdminDashboard,
});

function AdminDashboard() {
  const { projects, services, films, testimonials, faqs } = useStudio();

  const cards = [
    { label: "Portfolio Projects", value: projects.length, to: "/admin/portfolio" as const },
    { label: "Services", value: services.length, to: "/admin/services" as const },
    { label: "Testimonials", value: testimonials.length, to: "/admin/testimonials" as const },
    { label: "Films", value: films.length, to: "/admin/films" as const },
    { label: "FAQs", value: faqs.length, to: "/admin/faq" as const },
    { label: "Gallery Images", value: Object.keys(img).length, to: "/admin/portfolio" as const },
  ];

  return (
    <AdminLayout title="Dashboard" description="Session overview">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.label}
            to={c.to}
            className="group rounded-sm border border-ink/10 bg-white p-6 transition-colors hover:border-gold"
          >
            <p className="text-[0.62rem] uppercase tracking-[0.2em] text-warmgray">{c.label}</p>
            <p className="mt-3 font-display text-4xl text-ink group-hover:text-gold">{c.value}</p>
          </Link>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-sm leading-relaxed text-warmgray">
        All changes made in this panel live in React state for the current browser session only.
        There is no database or backend — refreshing the page restores the original demo content.
      </p>
    </AdminLayout>
  );
}
