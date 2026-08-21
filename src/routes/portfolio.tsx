import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";

const title = "Portfolio | D Subhash Studios — Wedding & Commercial Photography";
const description =
  "Browse wedding, candid, pre-wedding, event, commercial and advertisement film work photographed by D Subhash Studios across Maharashtra.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Work"
        title="A Portfolio Of Moments, Rituals & Stories."
        intro="Every frame below belongs to a real celebration — filtered by the kind of story you are planning."
      />
      <Portfolio heading={false} />
      <Contact />
    </SiteLayout>
  );
}
