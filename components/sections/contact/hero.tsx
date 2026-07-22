import SectionBadge from "@/components/design/section-badge";
import Container from "@/components/layout/container";
import { Typography } from "@/components/ui/typography";

export default function ContactHero() {
  return (
    <>
      <section className="pt-32 lg:pt-40">
        <Container>
            <div>
                <SectionBadge>Contact</SectionBadge>
                <Typography variant="display">
                    Let&apos;s build <br/> something <br/> amazing together. 
                </Typography>
                <Typography className="pt-6 lg:max-w-xl">
                    Tell us where you want to go and we'll show you how to get there. Every great project starts with a conversation.
                </Typography>
            </div>
        </Container>
      </section>
    </>
  )
}