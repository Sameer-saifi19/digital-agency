import SectionBadge from "@/components/design/section-badge";
import Container from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";

export default function ServiceHero() {
  return (
    <>
      <div className="lg:pt-40">
        <Container>
          <div className="max-w-3xl">
            <SectionBadge>Services</SectionBadge>
            <Typography variant={"display"}>
              Everything you need to grow online.
            </Typography>
            <Typography className="lg:pt-6 pt-4 max-w-2xl">
              Three disciplines, one accountable partner. We plug into your
              business and own the outcomes — from first pixel to compounding
              results.
            </Typography>
          </div>
        </Container>
      </div>
    </>
  );
}
