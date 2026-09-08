import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { CONTACT, CTA, MAPS, OFFICE_HOURS, PRACTICE } from "@/lib/constants";
import type { PageAccent } from "@/lib/landing-types";

/**
 * The location / office photo / CTA strip used at the foot of the service
 * pages. Address and phone match the practice NAP exactly.
 */
export function LocationCard({
  ctaTitle = "Ready to Schedule?",
  ctaDescription = "We make it easy to get the care you need.",
  accent = "alert",
}: {
  ctaTitle?: string;
  ctaDescription?: string;
  /** Matches the page's hero accent so the two call buttons agree. */
  accent?: PageAccent;
}) {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_0.9fr_1.5fr] [&>*]:min-w-0">
          <div className="rounded-card border border-hairline bg-white p-6 shadow-card sm:p-7">
            <h2 className="flex items-center gap-2.5 font-display text-xl text-brand">
              <MapPin className="size-5 text-brand-400" aria-hidden="true" />
              Conveniently Located in Toledo
            </h2>

            <address className="mt-5 not-italic">
              <p className="font-medium text-brand">
                {PRACTICE.doctorNameWithCredentials}
              </p>
              <p className="text-[0.9375rem] text-body">
                {PRACTICE.affiliation}
              </p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-brand">
                {CONTACT.address.street}, {CONTACT.address.unit}
                <br />
                {CONTACT.address.city}, {CONTACT.address.state}{" "}
                {CONTACT.address.postalCode}
              </p>
              <a
                href={CONTACT.phoneHref}
                className="mt-3 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-brand transition-colors hover:text-brand-500"
              >
                <Phone className="size-4 text-brand-400" aria-hidden="true" />
                {CONTACT.phoneDisplay}
              </a>
            </address>

            {OFFICE_HOURS ? (
              <dl className="mt-5 border-t border-hairline pt-5 text-[0.9375rem]">
                <dt className="flex items-center gap-2 font-medium text-brand">
                  <Clock className="size-4 text-brand-400" aria-hidden="true" />
                  Office hours
                </dt>
                {OFFICE_HOURS.map((slot) => (
                  <dd key={slot.days} className="mt-1 text-body">
                    {slot.days}: {slot.hours}
                  </dd>
                ))}
              </dl>
            ) : null}

            <a
              href={MAPS.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 items-center rounded-[4px] border border-brand/30 px-5 text-[0.9375rem] font-medium text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              Get Directions
            </a>
          </div>

          <Image
            src="/images/general/toledo-clinic-office-exterior.webp"
            alt="The medical office building on N. Holland-Sylvania Road in Toledo where Dr. Mushkbar sees patients, with parking directly outside the entrance"
            width={2976}
            height={3204}
            sizes="(max-width: 1024px) 100vw, 30vw"
            className="h-full min-h-56 w-full rounded-card object-cover shadow-card"
          />

          <div className="flex flex-col justify-center rounded-card bg-brand p-6 text-white sm:p-8 lg:p-10">
            <h2 className="font-display text-display-4 text-white">
              {ctaTitle}
            </h2>
            <p className="mt-3 text-white/85">{ctaDescription}</p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Button asChild variant={accent} size="md">
                <a href={CTA.callHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  {CTA.callLabel}
                </a>
              </Button>
              <Button asChild variant="outline-light" size="md">
                <a href={MAPS.directions} target="_blank" rel="noopener noreferrer">
                  <MapPin className="size-4" aria-hidden="true" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
