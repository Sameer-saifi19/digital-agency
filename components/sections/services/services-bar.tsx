import Container from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";

export default function ServiceBar() {
  return (
    <>
      <div className="bg-secondary mb-12 lg:mt-16">
        <Container>
          <div className="flex flex-wrap gap-4 max-w-xs py-4 lg:py-6 bg-secondary items-center justify-between">
            <p className="font-mono cursor-pointer hover:text-primary transition-colors duration-300 text-muted-foreground text-sm">
              <Link href={"/services/#website-development"}>
                01 Website Development
              </Link>
            </p>
            <p className="font-mono cursor-pointer hover:text-primary transition-colors duration-300 text-muted-foreground text-sm">
              <Link href={"/services/#website-support"}>
                02 Website support & maintainance
              </Link>
            </p>
            <p className="font-mono cursor-pointer hover:text-primary transition-colors duration-300 text-muted-foreground text-sm">
              <Link href={"/services/#seo-services"}>03 SEO services</Link>
            </p>
            <p className="font-mono cursor-pointer hover:text-primary transition-colors duration-300 text-muted-foreground text-sm">
              <Link href={"/services/#wordpress-development"}>
                04 Wordpress Development
              </Link>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
