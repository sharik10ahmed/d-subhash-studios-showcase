import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { CrudPage } from "@/components/admin/CrudPage";
import { useStudio } from "@/store/StudioStore";
import { img } from "@/data/images";
import type { Film } from "@/data/mockData";

export const Route = createFileRoute("/admin/films")({
  head: () => ({
    meta: [
      { title: "Manage Films | D Subhash Studios Admin" },
      { name: "description", content: "Add, edit and remove cinematic films." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Manage Films | D Subhash Studios Admin" },
      { property: "og:description", content: "Add, edit and remove cinematic films." },
    ],
  }),
  component: AdminFilms,
});

function AdminFilms() {
  const { films, saveFilm, deleteFilm } = useStudio();
  return (
    <AdminLayout title="Films" description={`${films.length} films`}>
      <CrudPage<Film>
        singular="Film"
        items={films}
        onSave={saveFilm}
        onDelete={deleteFilm}
        columns={["title", "client", "category", "duration"]}
        searchKeys={["title", "client", "location"]}
        filterKey="category"
        imageKey="thumbnail"
        fields={[
          { key: "title", label: "Title" },
          { key: "client", label: "Client / Couple" },
          { key: "location", label: "Location" },
          { key: "category", label: "Category" },
          { key: "duration", label: "Duration" },
          { key: "synopsis", label: "Synopsis", type: "textarea" },
          { key: "thumbnail", label: "Thumbnail URL" },
        ]}
        blank={{
          title: "New Film",
          client: "",
          location: "Gadhinglaj, Maharashtra",
          category: "Wedding Film",
          duration: "5:00",
          synopsis: "",
          thumbnail: img.filmRoyal,
        }}
      />
    </AdminLayout>
  );
}
