import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHeader } from "@/components/SiteLayout";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";

const title = "Contact & Booking | D Subhash Studios, Gadhinglaj";
const description =
  "Book wedding photography, cinematography or commercial production with D Subhash Studios. Call 7776998123 or write to support@dsubhashstudios.com.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Book Your Shoot"
        title="Let's Create Something Worth Remembering."
        intro="Share your dates and vision — we will get back with availability and a tailored plan."
      />
      <Contact />
      <FAQ />
    </SiteLayout>
  );
}
