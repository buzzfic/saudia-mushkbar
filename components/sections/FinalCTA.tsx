import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { CONTACT, CTA } from "@/lib/constants";

export function FinalCTA({
  title = "Looking for a Family Doctor in Toledo?",
  description = "Dr. Saudia Mushkbar is welcoming new patients.",
  note = "Same-Day & Same-Week Appointments Available",
}: {
  title?: string;
  description?: string;
  note?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-brand py-20 text-white lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/images/general/texture-band.webp')] bg-cover bg-center opacity-20"
      />

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-display-2 text-white">{title}</h2>
          <p className="mt-5 text-lg text-white/85">{description}</p>
          {note ? (
            <p className="mt-2 font-medium text-accent">{note}</p>
          ) : null}

          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild variant="alert" size="lg">
              <a href={CONTACT.phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                {CTA.callLabel}
              </a>
            </Button>
            <Button asChild variant="primary" size="lg">
              <Link href={CTA.scheduleHref}>
                <CalendarCheck className="size-4" aria-hidden="true" />
                {CTA.requestLabel}
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
