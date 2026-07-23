import ApproachSection from "@/components/sections/home/approach";
import CTASection from "@/components/sections/home/cta";
import HomeHero from "@/components/sections/home/hero";
import OurWorkSection from "@/components/sections/home/ourWork";
import MarqueeSection from "@/components/sections/home/scroll";
import ServiceBars from "@/components/sections/home/service-bars";
import ServiceSection from "@/components/sections/home/services";
import WhatWeDo from "@/components/sections/home/wwd";

export default function page() {
  return (
    <>
      <HomeHero />
      <MarqueeSection />
      <WhatWeDo />
      <ServiceSection />
      <ServiceBars />
      <ApproachSection />
      <OurWorkSection />
      <CTASection
        badge="start the conversation"
        title="Let's build your digital future"
        desc="Book a free, no-pressure consultation. We'll show you exactly
              where the biggest growth opportunities are."
      />
      <MarqueeSection />
    </>
  );
}
