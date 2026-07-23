"use client";

import Image from "next/image";
import SectionBadge from "@/components/design/section-badge";
import Container from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";
import { ArrowUpRightIcon, CheckIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const benefits = [
  "Lightning-fast performance with clean, optimized code",
  "Easy-to-manage content with a user-friendly CMS",
  "SEO-ready structure and responsive design",
  "Secure, scalable, and easy to maintain",
];

export const process = [
  {
    number: "01",
    title: "Plan",
    description: "Define goals, sitemap, and the right WordPress architecture.",
  },
  {
    number: "02",
    title: "Design",
    description: "Create custom, responsive designs tailored to your brand.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Build a fast, secure WordPress website with custom functionality.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Test, optimize, deploy, and provide post-launch support.",
  },
];

export const deliverables = [
  "Custom WordPress website",
  "Theme & plugin configuration",
  "Performance & security optimization",
  "CMS training & launch support",
];

export default function Wordpress() {
  return (
    <>
      <div className="lg:py-24 border-b">
        <Container>
          <div className="grid lg:grid-cols-2 lg:gap-16">
            <div>
              <Typography variant={"heading"} className="leading-14 lg:mb-4">
                Wordpress Development
              </Typography>
              <Typography variant={"body"}>
                We keep your website secure, fast, and running flawlessly long after launch. Every maintenance plan is tailored to your business, covering updates, monitoring, backups, performance optimization, and ongoing technical support—so your website remains reliable while you focus on growth.
              </Typography>

              <SectionBadge className="lg:text-md lg:mt-10">
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
              <SectionBadge className="lg:text-md lg:mt-10">
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
              <SectionBadge className="lg:text-md lg:mt-10">
                Deliverables
              </SectionBadge>
              <div className="flex flex-wrap gap-3 lg:mb-8">
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
                <Button variant="primary" size="large" className="group">
                  Start this project
                  <ArrowUpRightIcon
                    weight="bold"
                    className="transition-transform duration-500 group-hover:rotate-45"
                  />
                </Button>
              </Link>
            </div>
            <div className="justify-items-end">
              <Image
                src={"/services/website-development.jpg"}
                className="aspect-square object-cover lg:w-120 h-auto rounded-2xl overflow-hidden"
                width={1000}
                height={1000}
                alt="website-development-service"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
