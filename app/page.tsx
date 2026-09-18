import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { WhoFor } from "@/components/WhoFor";
import { OfferPricing, Pricing } from "@/components/OfferPricing";
import { Process } from "@/components/Process";
import { FAQ } from "@/components/FAQ";
import { Intake } from "@/components/Intake";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <WhoFor />
      <OfferPricing />
      <Pricing />
      <Process />
      <FAQ />
      <Intake />
    </>
  );
}
