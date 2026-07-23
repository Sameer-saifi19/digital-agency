"use client";

import Image from "next/image";
import SectionBadge from "@/components/design/section-badge";
import Container from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";
import { ArrowUpRightIcon, CheckIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const benefits = [
  "Higher rankings for high-intent keywords",
  "Technical fixes that unblock crawl & indexation",
  "Content that earns links and traffic",
  "Transparent reporting tied to revenue",
];

export const process = [
  {
    number: "01",
    title: "Audit",
    description: "Technical, content, and backlink deep-dive.",
  },
  {
    number: "02",
    title: "Strategy",
    description: "Keyword map prioritised by intent and value.",
  },
  {
    number: "03",
    title: "Execute",
    description: "On-page, technical, and content rollout.",
  },
  {
    number: "04",
    title: "Grow",
    description: "Iterate on data, expand what's working.",
  },
];

export const deliverables = [
  "Technical SEO audit",
  "Keyword & content strategy",
  "On-page optimisation",
  "Monthly ranking reports",
];

export default function SEO() {
  return (
    <>
      <div className="lg:py-24 border-b pt-12">
        <Container>
          <div className="grid lg:grid-cols-2 lg:gap-x-4">
            <div>
              <Image
                src={"/services/seo-service.jpg"}
                className="aspect-square object-cover lg:w-120 h-auto rounded-2xl overflow-hidden"
                loading="eager"
                width={1000}
                height={1000}
                alt="website-development-service"
              />
            </div>
            <div>
              <Typography variant={"heading"} className="text-3xl lg:mb-4 mt-4 mb-2">
                SEO Services
              </Typography>
              <Typography variant={"body"}>
                Technical, on-page, and content SEO that compounds. We fix
                what's holding you back, target keywords that actually convert,
                and build authority that keeps paying off month after month.
              </Typography>

              <SectionBadge className="lg:text-md lg:mt-10 mt-8 mb-6">
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
              <SectionBadge className="lg:text-md lg:mt-10 mt-8 mb-6">
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
              <SectionBadge className="lg:text-md lg:mt-10 mt-8 mb-6">
                Deliverables
              </SectionBadge>
              <div className="flex flex-wrap gap-3 lg:mb-8 mb-8">
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
