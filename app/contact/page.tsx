import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/common/Container";
import { JsonLd } from "@/components/common/JsonLd";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import {
  CONTACT,
  CTA,
  MAPS,
  OFFICE_HOURS,
  PRACTICE,
} from "@/lib/constants";
import { medicarePages, servicePages } from "@/lib/navigation";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbList, webPage } from "@/lib/structured-data";

const title = "Contact & Appointments — Toledo, Ohio";
const description =
  "Call 419-517-7687 to book with Dr. Saudia Mushkbar, MD at 4417 N. Holland-Sylvania Rd., Suite C, Toledo, OH 43623. Same-day and same-week appointments available.";
const path = "/contact";

export const metadata: Metadata = pageMetadata({ title, description, path });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          webPage({ path, name: title, description }),
          breadcrumbList(crumbs),
        ]}
      />

      <PageHero
        crumbs={crumbs}
        eyebrow="Contact"
        title="Schedule a Visit with Dr. Mushkbar"
        intro="Appointments are booked by phone. Give the office a call and our team will confirm your insurance plan and find you the soonest opening — same-day and same-week appointments are available."
        image={{
          src: "/images/doctor/doctor-saudia-mushkbar-white-coat.jpg",
          alt: "Dr. Saudia Mushkbar, MD, family medicine physician in Toledo, Ohio, in a Toledo Clinic white coat",
          width: 1706,
          height: 2560,
        }}
      />

      <section className="py-16 lg:py-20">
        <Container>
          {/* Calling is the way to book, so the number gets its own band rather
              than sitting in a list beside the address. */}
          <div className="flex flex-col items-center gap-5 rounded-card bg-brand px-6 py-12 text-center text-white sm:px-8 lg:px-12">
            <p className="font-mono text-eyebrow uppercase tracking-[0.14em] text-accent">
              Call to book an appointment
            </p>
            <a
              href={CTA.callHref}
              className="font-display text-display-2 text-white transition-colors hover:text-accent"
            >
              {CONTACT.phoneDisplay}
            </a>
            <p className="max-w-prose text-white/85">
              New patients of all ages are welcome. We accept Medicare, Medicare
              Advantage and most major insurance plans — call and we will confirm
              your specific plan.
            </p>
            <Button asChild variant="alert" size="lg" className="mt-2">
              <a href={CTA.callHref}>
                <Phone className="size-4" aria-hidden="true" />
                {CTA.callLabel}
              </a>
            </Button>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16 [&>*]:min-w-0">
            <div>
              <h2 className="font-display text-display-3">Office Details</h2>

              <dl className="mt-8 flex flex-col gap-7">
                <div className="flex min-w-0 items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-soft text-brand">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="font-mono text-eyebrow uppercase tracking-[0.14em] text-brand-500">
                      Phone
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href={CTA.callHref}
                        className="font-display text-2xl text-brand transition-colors hover:text-brand-500"
                      >
                        {CONTACT.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex min-w-0 items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-soft text-brand">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="font-mono text-eyebrow uppercase tracking-[0.14em] text-brand-500">
                      Office address
                    </dt>
                    <dd className="mt-1.5">
                      <address className="not-italic leading-relaxed text-brand">
                        <span className="font-medium">
                          {PRACTICE.doctorNameWithCredentials}
                        </span>
                        <br />
                        {PRACTICE.affiliation}
                        <br />
                        {CONTACT.address.street}, {CONTACT.address.unit}
                        <br />
                        {CONTACT.address.city}, {CONTACT.address.stateFull}{" "}
                        {CONTACT.address.postalCode}
                      </address>
                      <a
                        href={MAPS.directions}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex h-11 items-center rounded-[4px] border border-brand/30 px-5 text-[0.9375rem] font-medium text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white"
                      >
                        Get Directions
                      </a>
                    </dd>
                  </div>
                </div>

                {OFFICE_HOURS ? (
                  <div className="flex min-w-0 items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-soft text-brand">
                      <Clock className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="font-mono text-eyebrow uppercase tracking-[0.14em] text-brand-500">
                        Office hours
                      </dt>
                      <dd className="mt-1.5">
                        <ul className="flex flex-col gap-1 text-brand">
                          {OFFICE_HOURS.map((slot) => (
                            <li key={slot.days}>
                              <span className="font-medium">{slot.days}:</span>{" "}
                              {slot.hours}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  </div>
                ) : null}
              </dl>

              <p className="mt-8 rounded-card border border-hairline bg-cream px-5 py-4 text-[0.9375rem] leading-relaxed text-body">
                For a medical emergency call 911 or go to the nearest emergency
                room.
              </p>
            </div>

            <div>
              <h2 className="font-display text-display-3">Find the Office</h2>
              <p className="mt-4 max-w-prose text-[0.9375rem] leading-relaxed text-body">
                Dr. Mushkbar sees patients at {PRACTICE.affiliation} on N.
                Holland-Sylvania Road in Toledo, caring for patients across
                Toledo and the surrounding Northwest Ohio communities.
              </p>

              <div className="mt-6 overflow-hidden rounded-card border border-hairline shadow-card">
                <iframe
                  src={MAPS.embed}
                  title={`Map showing ${PRACTICE.doctorNameWithCredentials} at ${CONTACT.address.street}, ${CONTACT.address.unit}, ${CONTACT.address.city}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[26rem] w-full min-w-0 border-0"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-hairline pt-12">
            <h2 className="font-display text-display-4">
              Not Sure Which Visit You Need?
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[...servicePages.slice(0, 3), ...medicarePages].map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="group flex h-full items-start justify-between gap-4 rounded-card border border-hairline bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                  >
                    <span>
                      <span className="block font-display text-lg text-brand">
                        {page.label}
                      </span>
                      <span className="mt-1 block text-sm leading-snug text-body">
                        {page.description}
                      </span>
                    </span>
                    <ArrowRight
                      className="mt-1 size-4 shrink-0 text-brand-400 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Ready to Book?"
        description="Our office can confirm your insurance plan and find the soonest opening."
        note="Same-Day & Same-Week Appointments Available"
      />
    </>
  );
}
