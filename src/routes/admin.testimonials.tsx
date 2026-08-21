import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { CrudPage } from "@/components/admin/CrudPage";
import { useStudio } from "@/store/StudioStore";
import { img } from "@/data/images";
import type { Testimonial } from "@/data/mockData";

export const Route = createFileRoute("/admin/testimonials")({
  head: () => ({
    meta: [
      { title: "Manage Testimonials | D Subhash Studios Admin" },
      { name: "description", content: "Add, edit and remove client testimonials." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Manage Testimonials | D Subhash Studios Admin" },
      { property: "og:description", content: "Add, edit and remove client testimonials." },
    ],
  }),
  component: AdminTestimonials,
});

function AdminTestimonials() {
  const { testimonials, saveTestimonial, deleteTestimonial } = useStudio();
  return (
    <AdminLayout title="Testimonials" description={`${testimonials.length} reviews`}>
      <CrudPage<Testimonial>
        singular="Testimonial"
        items={testimonials}
        onSave={saveTestimonial}
        onDelete={deleteTestimonial}
        columns={["name", "event", "location", "rating"]}
        searchKeys={["name", "review", "location"]}
        filterKey="event"
        imageKey="avatar"
        fields={[
          { key: "name", label: "Client Name" },
          { key: "event", label: "Event Type" },
          { key: "location", label: "Location" },
          { key: "rating", label: "Rating (1-5)", type: "number" },
          { key: "review", label: "Review", type: "textarea" },
          { key: "avatar", label: "Profile Image URL" },
        ]}
        blank={{
          name: "New Client",
          event: "Wedding",
          location: "Gadhinglaj, Maharashtra",
          rating: 5,
          review: "",
          avatar: img.t1,
        }}
      />
    </AdminLayout>
  );
}
