import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { CrudPage } from "@/components/admin/CrudPage";
import { useStudio } from "@/store/StudioStore";
import { img } from "@/data/images";
import type { Service } from "@/data/mockData";

export const Route = createFileRoute("/admin/services")({
  head: () => ({
    meta: [
      { title: "Manage Services | D Subhash Studios Admin" },
      { name: "description", content: "Add, edit and remove studio services." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Manage Services | D Subhash Studios Admin" },
      { property: "og:description", content: "Add, edit and remove studio services." },
    ],
  }),
  component: AdminServices,
});

function AdminServices() {
  const { services, saveService, deleteService } = useStudio();
  return (
    <AdminLayout title="Services" description={`${services.length} services`}>
      <CrudPage<Service>
        singular="Service"
        items={services}
        onSave={saveService}
        onDelete={deleteService}
        columns={["title", "description"]}
        searchKeys={["title", "description"]}
        imageKey="image"
        fields={[
          { key: "title", label: "Title" },
          { key: "description", label: "Description", type: "textarea" },
          { key: "image", label: "Image URL" },
        ]}
        blank={{ title: "New Service", description: "", image: img.svcWedding }}
      />
    </AdminLayout>
  );
}
