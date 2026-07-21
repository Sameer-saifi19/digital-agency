import SectionBadge from "@/components/design/section-badge";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

export default function ServiceSection() {
  return (
    <>
      <div className="lg:pb-10">
        <Container>
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="max-w-md">
              <SectionBadge>Services</SectionBadge>
              <Typography variant="heading" className="text-5xl">
                Full-Stack Digital growth
              </Typography>
            </div>
            <Button variant="outline" size="xl">
              All services
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
