"use client";

import Image from "next/image";
import SectionBadge from "@/components/design/section-badge";
import Container from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";
import { ArrowUpRightIcon, CheckIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const benefits = [
  "Sub-second load times & 95+ Lighthouse scores",
  "Conversion-focused UX and clear calls to action",
  "SEO foundations baked in from line one",
  "Headless CMS so non-developers can publish",
];

const process = [
  {
    number: "01",
    title: "Discovery",
    description: "Goals, audience, and a sitemap that earns its keep.",
  },
  {
    number: "02",
    title: "Design",
    description: "High-fidelity, on-brand interfaces and prototypes.",
  },
  {
    number: "03",
    title: "Build",
    description: "Next.js front-end, accessible and component-driven.",
  },
  {
    number: "04",
    title: "Launch",
    description: "QA, analytics, and a fast monitored go-live.",
  },
];

const deliverables = [
  "Custom responsive website",
  "CMS Integration",
  "Analytics & tracking setup",
  "Performance & SEO report",
];

export default function WebDevelopment() {
  return (
    <>
      <div className="lg:py-24 border-b">
        <Container>
          <div className="grid lg:grid-cols-2 lg:gap-x-4">
            <div>
              <Image
                src={"/services/website-development-service.jpg"}
                className="aspect-square object-cover lg:w-120 h-auto rounded-2xl overflow-hidden"
                width={1000}
                loading="eager"
                height={1000}
                alt="website-development-service"
              />
            </div>
            <div>
              <Typography variant={"heading"} className="text-3xl mt-4 mb-2 lg:mb-4">
                Website Development
              </Typography>
              <Typography variant={"body"}>
                We design and build high-performance websites that load
                instantly, rank well, and convert. Every build is bespoke — no
                bloated templates — with clean code, accessible markup, and a
                CMS your team can actually use.
              </Typography>

              <SectionBadge className="lg:text-md mt-6 mb-4 lg:mt-10">
                Key benefits
              </SectionBadge>
              <div className="grid gap-5 sm:grid-cols-2">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckIcon
                      size={22}
                      weight="bold"
                      className="mt-1 text-primary"
                    />

                    <p className="text-sm leading-5 text-muted-foreground">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <SectionBadge className="lg:text-md mt-8 mb-6 lg:mt-10">
                Process
              </SectionBadge>
              <div className="grid overflow-hidden bg-primary-foreground/80 rounded-xl border sm:grid-cols-2">
                {process.map((item) => (
                  <div key={item.number} className="p-4 border-l border-b">
                    <span className="text-sm font-mono text-muted-foreground">
                      {item.number}
                    </span>

                    <h3 className="mt-1 text-2xl font-bricolage font-bold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <SectionBadge className="lg:text-md mt-8 mb-6 lg:mt-10">
                Deliverables
              </SectionBadge>
              <div className="flex flex-wrap gap-4 lg:mb-8 mb-6">
                {deliverables.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border-2 px-4 py-1 text-sm text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <Link href="/contact">
                <Button variant="primary" size="large" className="group mb-8">
                  Start this project
                  <ArrowUpRightIcon
                    weight="bold"
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
