"use client";

import SectionBadge from "@/components/design/section-badge";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

export default function CTASection() {
  return (
    <>
      <div className="bg-primary lg:py-32">
        <Container>
          <div className="max-w-3xl">
            <SectionBadge className="text-foreground">start the conversation</SectionBadge>
            <h2 className="text-8xl text-primary-foreground font-black font-bricolage leading-tightest pb-8">
              Let's build your digital future
            </h2>
          </div>
          <div className="flex items-center justify-between">
            <p className="max-w-md text-base font-medium font-sans">
              Book a free, no-pressure consultation. We'll show you exactly
              where the biggest growth opportunities are.
            </p>
            <div className="flex items-center gap-4 ">
              <Button className="group text-foreground bg-primary-foreground hover:bg-secondary">
                Book consultation
                <ArrowUpRightIcon
                  weight="bold"
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              </Button>
              <Button className="border-primary-foreground">
                View Services
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
