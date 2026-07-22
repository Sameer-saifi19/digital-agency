import React from "react";
import { Typography } from "./typography";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ContactDetailCard({
  title,
  description,
  icon,
}: CardProps) {
  return (
    <>
      <div className="flex rounded-xl items-center gap-4 px-6 py-4 bg-primary-foreground/80 border group">
        <div className="rounded-full text-primary inline-flex items-center justify-center text-3xl bg-secondary h-12 w-12">
          {icon}
        </div>
        <div>
          <p className="text-sm text-muted-foreground font-mono uppercase">
            {title}
          </p>
          <p className="text-md text-foreground group-hover:text-primary duration-300 transition-colors">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
