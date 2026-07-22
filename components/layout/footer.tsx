"use client";

import { footerServices, navItems } from "@/data/navItems";
import { Typography } from "../ui/typography";
import Container from "./container";
import Link from "next/link";
import {
  EnvelopeSimpleIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="lg:max-w-7xl lg:mx-auto lg:px-16 px-6">
          <div className="grid grid-cols-2 py-16 lg:grid-cols-4 justify-items-start lg:justify-items-center gap-y-12 lg:gap-y-0 ">
            <div className="col-span-2 lg:col-span-1">
              <h2 className="text-[32px] text-foreground ">DIGITAL</h2>
              <Typography variant={"bodySmall"}>
                Smarter digital marketing. Better results. An Indian based
                digital agency building websites and growth systems for
                businesses.
              </Typography>
            </div>
            <div className="flex lg:items-center flex-col gap-4 col-span-2 lg:col-span-1">
              <p className="text-md text-muted-foreground font-mono uppercase">
                Pages
              </p>
              <nav className="flex flex-col lg:items-center gap-2 text-base font-normal text-foreground">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="transition-color duration-300 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex lg:items-center flex-col gap-4 col-span-2 lg:col-span-1">
              <p className="text-md text-muted-foreground font-mono uppercase">
                Services
              </p>
              <nav className="flex flex-col lg:items-center gap-2 text-base font-normal text-foreground">
                {footerServices.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="transition-color duration-300 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-col gap-4 lg:items-center col-span-2 lg:col-span-1">
              <p className="text-md text-muted-foreground font-mono uppercase">
                Get in touch
              </p>

              <ul className="flex flex-col gap-2 text-base font-normal text-foreground">
                <li className="flex items-center gap-2 ">
                  <EnvelopeSimpleIcon className="h-5 w-5 text-primary" />
                  <Link
                    className="transition-all duration-300 hover:text-primary"
                    href={"mailto:info@digital.com"}
                  >
                    info@digital.com
                  </Link>
                </li>
                <li className="flex items-center gap-2 ">
                  <PhoneIcon className="h-5 w-5 text-primary" />
                  <Link
                    className="transition-all duration-300 hover:text-primary"
                    href={"tel:9639927762"}
                  >
                    +91-96399 27782
                  </Link>
                </li>
                <div className="flex items-center gap-2 ">
                  <MapPinIcon className="h-5 w-5 text-primary" />
                  <li>Uttar Pradesh, India</li>
                </div>
              </ul>
            </div>
          </div>
          <div className="border-t border-border flex flex-wrap items-center justify-center gap-2 py-6 lg:justify-between">
            <p className="text-muted-foreground text-sm font-normal">
              © {new Date().getFullYear()} Digital. All rights reserved.
            </p>
            <p className="text-muted-foreground font-mono text-sm font-normal">
              Smarter digital marketing — better results.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
