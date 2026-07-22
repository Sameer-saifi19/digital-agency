"use client";

import { services } from "@/data/services";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function ServiceBars() {
  return (
    <>
      <div className="border-t border-muted-foreground mt-10">
        {services.map((item, index) => (
          <Link key={index} href={item.url} className="group">
            <div className="flex items-center border-b border-muted-foreground justify-between px-8 py-6 hover:bg-foreground text-background">
              <div className="flex gap-4 lg:gap-8 items-center">
                <p className="text-md font-mono text-accent transition-all duration-500 group-hover:text-background">
                  {item.id}
                </p>
                <h3 className="text-2xl lg:text-5xl font-bold transition-all duration-500 font-bricolage group-hover:text-background text-foreground">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center gap-8 max-w-md transition-all duration-500">
                <p className="text-base hidden text-muted-foreground transition-all duration-500 group-hover:text-background">
                  {" "}
                  {item.description}
                </p>
                <ArrowUpRightIcon
                  weight="bold"
                  className="transition-all text-foreground h-6 w-6 group-hover:text-background duration-500 group-hover:rotate-45"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
