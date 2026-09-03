import type { Metadata } from "next";
import { Clock, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/common/Container";
import { JsonLd } from "@/components/common/JsonLd";
import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import {
  CONTACT,
  MAPS,
  OFFICE_HOURS,
  PRACTICE,
} from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbList, webPage } from "@/lib/structured-data";

const title = "Contact & Appointments — Toledo, Ohio";
const description =
  "Call 419-517-7687 or request an appointment with Dr. Saudia Mushkbar, MD at 4417 N. Holland-Sylvania Rd., Suite C, Toledo, OH 43623.";
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
        intro="The fastest way to book is by phone — our team can confirm your insurance plan and find the soonest opening. You can also send an appointment request and we will call you back."
        image={{
          src: "/images/doctor/doctor-saudia-mushkbar-white-coat.jpg",
          alt: "Dr. Saudia Mushkbar, MD, family medicine physician in Toledo, Ohio, in a Toledo Clinic white coat",
          width: 1706,
          height: 2560,
        }}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16 [&>*]:min-w-0">
            <div>
              <h2 className="font-display text-display-3">Office Details</h2>

              <dl className="mt-8 flex flex-col gap-7">
                <div className="flex min-w-0 items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-soft text-brand">
                    <Phone className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="font-mono text-eyebrow uppercase tracking-[0.14em] text-gold">
                      Phone
                    </dt>
                    <dd className="mt-1.5">
                      <a
                        href={CONTACT.phoneHref}
                        className="font-display text-2xl text-brand transition-colors hover:text-brand-400"
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
                    <dt className="font-mono text-eyebrow uppercase tracking-[0.14em] text-gold">
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
                      <dt className="font-mono text-eyebrow uppercase tracking-[0.14em] text-gold">
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

              <div className="mt-10 overflow-hidden rounded-card border border-hairline shadow-card">
                <iframe
                  src={MAPS.embed}
                  title={`Map showing ${PRACTICE.doctorNameWithCredentials} at ${CONTACT.address.street}, ${CONTACT.address.unit}, ${CONTACT.address.city}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-80 w-full min-w-0 border-0"
                />
              </div>
            </div>

            <div id="appointment" className="scroll-mt-28">
              <h2 className="font-display text-display-3">
                Request an Appointment
              </h2>
              <p className="mt-4 max-w-prose text-[0.9375rem] leading-relaxed text-body">
                Send us your details and our office will call you back to
                confirm a time. Same-day and same-week appointments are
                available.
              </p>

              <div className="mt-8 rounded-card border border-hairline bg-white p-5 shadow-card sm:p-7 lg:p-9">
                <AppointmentForm />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA
        title="Prefer to Book by Phone?"
        description="Our office can confirm your insurance plan and find the soonest opening."
        note="Same-Day & Same-Week Appointments Available"
      />
    </>
  );
}
