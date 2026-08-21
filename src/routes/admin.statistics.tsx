import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout, AdminButton } from "@/components/admin/AdminLayout";
import { useStudio } from "@/store/StudioStore";

export const Route = createFileRoute("/admin/statistics")({
  head: () => ({
    meta: [
      { title: "Manage Statistics | D Subhash Studios Admin" },
      { name: "description", content: "Update the studio statistics shown on the website." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Manage Statistics | D Subhash Studios Admin" },
      {
        property: "og:description",
        content: "Update the studio statistics shown on the website.",
      },
    ],
  }),
  component: AdminStatistics,
});

const fields = [
  { key: "events", label: "Events Captured" },
  { key: "weddings", label: "Wedding Stories" },
  { key: "commercial", label: "Commercial Projects" },
  { key: "experience", label: "Years of Creative Experience" },
] as const;

function AdminStatistics() {
  const { stats, setStats, toast } = useStudio();
  const [draft, setDraft] = useState(stats);

  return (
    <AdminLayout title="Statistics" description="Mock demo numbers">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setStats(draft);
          toast("Statistics updated");
        }}
        className="max-w-2xl rounded-sm border border-ink/10 bg-white p-6 sm:p-8"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {fields.map((f) => (
            <label key={f.key} className="flex flex-col gap-1.5">
              <span className="text-[0.62rem] uppercase tracking-[0.18em] text-warmgray">
                {f.label}
              </span>
              <input
                value={draft[f.key]}
                onChange={(e) => setDraft({ ...draft, [f.key]: e.target.value })}
                className="rounded-sm border border-ink/15 px-3 py-2 text-sm text-ink outline-none focus:border-gold"
              />
            </label>
          ))}
        </div>
        <div className="mt-8 flex justify-end">
          <AdminButton type="submit">Save Statistics</AdminButton>
        </div>
      </form>
    </AdminLayout>
  );
}
