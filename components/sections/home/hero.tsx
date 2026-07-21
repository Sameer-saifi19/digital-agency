"use client";

import Link from "next/link";
import { Button } from "../../ui/button";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Container from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";

export default function HomeHero() {
  return (
    <>
      <div className="pt-10 pb-6 lg:pt-30 lg:pb-20">
        <Container>
          <h1 className="font-black text-foreground font-bricolage lg:text-display-2xl text-5xl lg:leading-40 leading-snug">
            Empowering <br /> your <br />{" "}
            <span className="text-primary">digital future</span>
          </h1>
          <Typography variant="body" className="lg:max-w-lg lg:pt-10 pt-4">
            Digital media helps businesses grow through websites, mobile apps,
            marketing, SEO, automation, and innovative technology solutions.
          </Typography>
          <div className="pt-6 lg:pt-8 flex gap-2 lg:flex">
            <Link href="/contact">
              <Button variant="primary" size="xl" className="group w-full lg:w-auto">
                Book Consultation
                <ArrowUpRightIcon
                  weight="bold"
                  className="transition-transform duration-500 group-hover:rotate-45"
                />
              </Button>
            </Link>

            <Link href="/services">
              <Button variant={"outline"} size={"xl"} className="w-full lg:w-auto">
                View Services
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
}
