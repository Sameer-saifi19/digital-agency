"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

import { navItems } from "@/data/navItems";
import { Button } from "../ui/button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 4);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="lg:block fixed top-4 left-0 z-50 w-full">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-10 px-4">
        <div
          className={`
            flex h-16  items-center justify-between rounded-[36px] px-4 lg:px-6
            transition-all duration-300
            ${
              scrolled
                ? "border-2 bg-background/80 shadow-lg backdrop-blur-xl"
                : "bg-transparent"
            }
          `}
        >
          <h2 className="text-[32px] text-foreground">DIGITAL</h2>

          <nav className="lg:flex hidden items-center gap-8 text-base font-normal text-foreground">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-all duration-300 hover:scale-105 hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact">
            <Button variant="primary" size="large" className="group">
              Book a call
              <ArrowUpRightIcon
                weight="bold"
                className="transition-transform duration-500 group-hover:rotate-45"
              />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
