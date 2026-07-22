import { ArrowUpRightIcon, CalendarCheckIcon, ClockIcon } from "@phosphor-icons/react";
import { Typography } from "../ui/typography";
import Link from "next/link";
import { Button } from "../ui/button";

export default function BookingCard() {
  return (
    <>
      <div className="bg-linear-to-br from-secondary to-primary-foreground/80 px-6 py-4 rounded-xl border">
        <div className="flex items-center gap-2">
          <CalendarCheckIcon className="h-6 w-6 text-primary" />
          <p className="text-md text-primary font-medium font-mono uppercase">
            Book a consultation
          </p>
        </div>
        <h4 className="text-3xl mt-4 font-semibold font-bricolage text-foreground">
          Prefer to grab a time?
        </h4>
        <div className="flex items-center gap-2 pt-2 pb-4">
          <ClockIcon className="text-muted-foreground" />
          <Typography variant={"caption"}>
            Free 30-minute strategy call
          </Typography>
        </div>
        <Link href="#">
          <Button
            variant="primary"
            size="xl"
            className="group w-full lg:w-auto"
          >
            Open Calendar
            <ArrowUpRightIcon
              weight="bold"
              className="transition-transform duration-500 group-hover:rotate-45"
            />
          </Button>
        </Link>
      </div>
    </>
  );
}
