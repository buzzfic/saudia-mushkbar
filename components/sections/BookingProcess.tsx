import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { CONTACT, CTA } from "@/lib/constants";
import { bookingIntro, bookingSteps } from "@/lib/content";

/** "Simple Booking Process" */
export function BookingProcess() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Simple Booking Process"
          description={bookingIntro}
          align="center"
          rule
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bookingSteps.map((item) => (
            <li
              key={item.step}
              className="flex h-full flex-col gap-5 rounded-card border border-hairline bg-white p-8 shadow-card"
            >
              <span
                className="font-display text-4xl text-accent-strong"
                aria-hidden="true"
              >
                {item.step}
              </span>
              <h3 className="font-display text-xl leading-snug">
                <span className="sr-only">Step {item.step}: </span>
                {item.title}
              </h3>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="alert" size="lg">
            <a href={CONTACT.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              {CTA.callLabel}
            </a>
          </Button>
          <Button asChild variant="brand" size="lg">
            <Link href={CTA.scheduleHref}>
              <CalendarCheck className="size-4" aria-hidden="true" />
              {CTA.scheduleLabel}
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
