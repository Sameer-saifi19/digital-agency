"use client";

import SectionBadge from "@/components/design/section-badge";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { features } from "@/data/approachStats";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

export default function ApproachSection() {
  return (
    <>
      <div className="py-30">
        <Container>
          <div className="flex justify-between items-end flex-wrap gap-16">
            <div className="max-w-md">
              <SectionBadge>The Approach</SectionBadge>
              <Typography variant="heading" >
                How we drive growth
              </Typography>
              <p className="text-muted-foreground text-lg leading-relaxed pt-4 lg:pt-10">
                A proven process that turns marketing from a cost centre into
                your most reliable growth engine.
              </p>
              <Button className="group lg:mt-8 mt-8">
                About the team{" "}
                <ArrowUpRightIcon
                  weight="bold"
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              </Button>
            </div>
            <div>
              {features.map((item, index) => (
                <div
                  className="flex lg:justify-between lg:items-center gap-6 pb-12 last:pb-0"
                  key={index}
                >
                  <p className="text-md font-mono mt-2 lg:mt-0 text-muted-foreground">
                    {item.id}
                  </p>
                  <div className="max-w-lg">
                    <h4 className="text-3xl pb-2 font-bricolage font-bold text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
