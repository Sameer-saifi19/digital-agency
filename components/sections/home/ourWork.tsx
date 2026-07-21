import SectionBadge from "@/components/design/section-badge";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import WorkCard from "@/components/ui/work-card";
import { projects } from "@/data/workCard";

export default function OurWorkSection() {
  return (
    <>
      <div className="bg-foreground lg:pt-30 lg:pb-10 py-16">
        <Container>
          <div className="flex flex-wrap gap-4 items-end justify-between">
            <div className="max-w-lg">
              <SectionBadge>Selected Work</SectionBadge>
              <Typography variant="heading" className="text-primary-foreground">Proof, not promises</Typography>
            </div>
            <Button variant="darkOutline" className="mb-2">
              View all work
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
            {projects.map((item, index) => (
              <WorkCard
                href={item.href}
                image={item.image}
                services={item.services}
                key={index}
                title={item.title}
                category={item.category}
                url={item.url}
                alt={item.title}
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
