import { createFileRoute } from "@tanstack/react-router";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { CrudPage } from "@/components/admin/CrudPage";
import { useStudio } from "@/store/StudioStore";
import type { Faq } from "@/data/mockData";

export const Route = createFileRoute("/admin/faq")({
  head: () => ({
    meta: [
      { title: "Manage FAQs | D Subhash Studios Admin" },
      { name: "description", content: "Add, edit and remove frequently asked questions." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Manage FAQs | D Subhash Studios Admin" },
      { property: "og:description", content: "Add, edit and remove frequently asked questions." },
    ],
  }),
  component: AdminFaq,
});

function AdminFaq() {
  const { faqs, saveFaq, deleteFaq } = useStudio();
  return (
    <AdminLayout title="FAQs" description={`${faqs.length} questions`}>
      <CrudPage<Faq>
        singular="FAQ"
        items={faqs}
        onSave={saveFaq}
        onDelete={deleteFaq}
        columns={["question", "answer"]}
        searchKeys={["question", "answer"]}
        fields={[
          { key: "question", label: "Question" },
          { key: "answer", label: "Answer", type: "textarea" },
        ]}
        blank={{ question: "New question?", answer: "" }}
      />
    </AdminLayout>
  );
}
