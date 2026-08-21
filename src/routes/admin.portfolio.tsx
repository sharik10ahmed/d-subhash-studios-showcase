import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { CrudPage } from "@/components/admin/CrudPage";
import { useStudio } from "@/store/StudioStore";
import { img } from "@/data/images";
import type { Project } from "@/data/mockData";

export const Route = createFileRoute("/admin/portfolio")({
  head: () => ({
    meta: [
      { title: "Manage Portfolio | D Subhash Studios Admin" },
      { name: "description", content: "Add, edit and remove portfolio projects." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Manage Portfolio | D Subhash Studios Admin" },
      { property: "og:description", content: "Add, edit and remove portfolio projects." },
    ],
  }),
  component: AdminPortfolio,
});

function AdminPortfolio() {
  const { projects, saveProject, deleteProject } = useStudio();
  return (
    <AdminLayout title="Portfolio" description={`${projects.length} projects`}>
      <CrudPage<Project>
        singular="Project"
        items={projects}
        onSave={saveProject}
        onDelete={deleteProject}
        columns={["title", "category", "location"]}
        searchKeys={["title", "location", "description"]}
        filterKey="category"
        imageKey="image"
        fields={[
          { key: "title", label: "Title" },
          { key: "category", label: "Category" },
          { key: "location", label: "Location" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "image", label: "Image URL" },
        ]}
        blank={{
          title: "New Project",
          category: "Weddings",
          location: "Gadhinglaj, Maharashtra",
          description: "",
          image: img.pfRoyalWedding,
        }}
      />
    </AdminLayout>
  );
}
