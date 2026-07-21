import SectionBadge from "@/components/design/section-badge";
import Container from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";
import { stats } from "@/data/ourStats";

export default function WhatWeDo() {
  return (
    <>
      <div className="lg:py-20 py-16">
        <Container>
          <div>
            <div className="max-w-3xl">
              <SectionBadge>
                What we do
              </SectionBadge>
              <Typography variant="heading" className="text-4xl">
                We build high-performing websites and growth systems that help
                ambitious businesses scale.
              </Typography>
            </div>
            <div className="border-t mt-8 grid grid-cols-2 lg:grid-cols-4">
              {stats.map((item, index) => (
                <div key={index} className="px-2 py-6">
                  <h3 className="text-5xl lg:text-6xl text-primary font-bricolage font-bold mb-2">
                    {item.numbers}
                  </h3>
                  <p className="text-muted-foreground text-sm font-sans">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
