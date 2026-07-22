"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Typography } from "../ui/typography";

export default function ContactForm() {
  return (
    <section className="rounded-2xl border bg-primary-foreground/80 p-6 md:p-10">
      <form className="space-y-6">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground tracking-wider font-mono uppercase">
              Name <span className="text-primary">*</span>
            </Label>
            <Input
              placeholder="Name"
              className="h-12 placeholder:text-muted-foreground/70 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground tracking-wider font-mono uppercase">
              Email <span className="text-primary">*</span>
            </Label>
            <Input
              type="email"
              placeholder="Email"
              className="h-12 placeholder:text-muted-foreground/70 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground tracking-wider font-mono uppercase">
              Phone
            </Label>
            <Input
              type="tel"
              placeholder="Phone"
              className="h-12 placeholder:text-muted-foreground/70 rounded-xl"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm text-muted-foreground tracking-wider font-mono uppercase">
              Company
            </Label>
            <Input
              placeholder="Company"
              className="h-12 placeholder:text-muted-foreground/70 rounded-xl"
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label className="text-sm text-muted-foreground tracking-wider font-mono uppercase">
            Project Details <span className="text-primary">*</span>
          </Label>

          <Textarea
            placeholder="Tell us about your goals, timeline and budget..."
            className="min-h-32 placeholder:text-muted-foreground/70 rounded-xl"
          />
        </div>

        <Button variant="primary" size="xl" className="w-full lg:w-full">
          Send Message
        </Button>

        <Typography variant={"caption"} className="text-center">
          By submitting you agree to our privacy policy. We never share your
          data.
        </Typography>
      </form>
    </section>
  );
}
