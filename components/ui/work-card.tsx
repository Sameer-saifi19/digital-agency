"use client";

import Image from "next/image";
import Link from "next/link";

interface WorkCardProps {
  href: string;
  category: string;
  image: string;
  alt: string;
  title: string;
  url: string;
  services: string[];
}

export default function WorkCard({
  href,
  category,
  image,
  alt,
  title,
  url,
  services,
}: WorkCardProps) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-4xl shadow-lg transition-all duration-500"
    >
      {/* Image */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          {/* Category */}
          <div>
            <span className="rounded-full bg-foreground/60 px-4 py-2 font-mono text-xs tracking-widest text-primary-foreground backdrop-blur-md">
              {category}
            </span>
          </div>

          {/* Bottom */}
          <div className="flex items-end justify-between gap-4">
            <div className="min-w-0">
              <h3 className="text-3xl font-bold text-primary-foreground font-bricolage">
                {title}
              </h3>

              <p className="mt-2 truncate font-mono text-sm text-primary-foreground/70">
                {url}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="flex flex-wrap gap-3 border-muted-foreground bg-[#121413] p-4">
        {services.map((service) => (
          <span
            key={service}
            className="rounded-full border border-muted-foreground px-3 py-1 text-xs text-primary-foreground transition-colors duration-300 hover:border-primary"
          >
            {service}
          </span>
        ))}
      </div>
    </Link>
  );
}