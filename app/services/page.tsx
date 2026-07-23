import ServiceSection from "@/components/custom/service-section";
import CTASection from "@/components/sections/home/cta";
import MarqueeSection from "@/components/sections/home/scroll";
import ServiceHero from "@/components/sections/services/hero";
import ServiceBar from "@/components/sections/services/services-bar";

export default function Page() {
  return (
    <>
      <ServiceHero />
      <ServiceBar />
      <ServiceSection />
      <CTASection
        badge="Not sure where to start?"
        title="Let's find your fastest path to growth."
        desc="Tell us your goals and we&apos;ll recommend exactly which services will move the needle first."
      />
      <MarqueeSection/>
    </>
  );
}
