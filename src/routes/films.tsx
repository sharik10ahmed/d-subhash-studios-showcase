import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { Films } from "@/components/Films";
import { Contact } from "@/components/Contact";

const title = "Cinematic Films | D Subhash Studios";
const description =
  "Watch cinematic wedding films, pre-wedding stories and brand films produced by D Subhash Studios in Gadhinglaj, Maharashtra.";

export const Route = createFileRoute("/films")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: FilmsPage,
});

function FilmsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Cinematic Stories"
        title="Films Made To Be Watched Again And Again."
        intro="Wedding films, pre-wedding stories and brand documentaries — edited with music, movement and emotion."
      />
      <Films />
      <Contact />
    </SiteLayout>
  );
}
