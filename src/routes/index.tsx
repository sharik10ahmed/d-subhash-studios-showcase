import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Films } from "@/components/Films";
import { FeaturedWork } from "@/components/FeaturedWork";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Process } from "@/components/Process";
import { Statistics } from "@/components/Statistics";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";

const title = "D Subhash Studios | Photography & Cinematography in Gadhinglaj";
const description =
  "D Subhash Studios offers premium wedding photography, candid photography, cinematography, event coverage, pre-wedding shoots, and advertisement filmmaking in Gadhinglaj, Maharashtra.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Films />
      <FeaturedWork />
      <WhyChooseUs />
      <Process />
      <Statistics />
      <Testimonials />
      <FAQ />
      <Contact />
    </SiteLayout>
  );
}
