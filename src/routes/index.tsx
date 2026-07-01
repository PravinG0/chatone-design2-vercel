import { createFileRoute } from "@tanstack/react-router";
import {
  Nav, Hero, Marquee, WhyChatOne, Features, HowItWorks,
  UseCases, Integrations, Pricing, FAQ, CTA, Footer,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground overflow-x-clip">
      <Nav />
      <Hero />
      <Marquee />
      <WhyChatOne />
      <Features />
      <HowItWorks />
      <UseCases />
      <Integrations />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
