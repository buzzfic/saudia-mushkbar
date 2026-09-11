import type { Metadata } from "next";
import {
  Building2,
  CalendarCheck,
  ExternalLink,
  GraduationCap,
  Phone,
  ShieldCheck,
} from "lucide-react";

import { Container } from "@/components/common/Container";
import { JsonLd } from "@/components/common/JsonLd";
import { StarRating } from "@/components/common/ReviewBadges";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import { BOOKING, CONTACT, CTA, PRACTICE, REVIEWS } from "@/lib/constants";
import {
  acceptedInsuranceNames,
  bookingHighlights,
  education,
  hospitalCredentials,
} from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbList, webPage } from "@/lib/structured-data";

const title = "Schedule an Appointment — Dr. Saudia Mushkbar, MD";
const description =
  "Book with Dr. Saudia Mushkbar, MD in Toledo, Ohio. New patients call 419-517-7687; established patients can schedule follow-up visits online through Healow.";
const path = "/book-online";

export const metadata: Metadata = pageMetadata({ title, description, path });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Book Online", path },
];

/** Healow opens in a new tab — it is a separate portal, not part of this site. */
function HealowButton({
  variant = "brand",
}: {
  variant?: "brand" | "primary";
}) {
  return (
    <Button asChild variant={variant} size="lg">
      <a href={BOOKING.healowUrl} target="_blank" rel="noopener noreferrer">
        <CalendarCheck className="size-4" aria-hidden="true" />
        {BOOKING.healowLabel}
        <ExternalLink className="size-3.5 opacity-70" aria-hidden="true" />
      </a>
    </Button>
  );
}

export default function BookOnlinePage() {
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
        eyebrow="Appointments"
        title="Schedule Your Appointment"
        intro={`${PRACTICE.doctorNameWithCredentials} is board-certified in Family Medicine and cares for children, adults and seniors. New patients schedule by phone so our staff can register you and confirm your plan; established patients can book a follow-up online through Healow.`}
        image={{
          src: "/images/doctor/doctor-saudia-mushkbar-white-coat.jpg",
          alt: "Dr. Saudia Mushkbar, MD, board-certified family medicine physician in Toledo, Ohio",
          width: 1706,
          height: 2560,
        }}
        showCtas={false}
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="alert" size="lg">
            <a href={CTA.callHref}>
              <Phone className="size-4" aria-hidden="true" />
              {CTA.callLabel}
            </a>
          </Button>
          <HealowButton />
        </div>
      </PageHero>

      {/* The two booking routes, kept side by side so nobody has to guess which
          one applies to them. */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="flex flex-col rounded-card border border-hairline bg-white p-8 shadow-card lg:p-10">
              <span className="grid size-12 place-items-center rounded-full bg-alert/10 text-alert">
                <Phone className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-display-3">New Patients</h2>
              <p className="mt-4 max-w-prose leading-relaxed text-body">
                Please call {CONTACT.phoneDisplay} to schedule your first
                appointment. Our friendly staff will be happy to assist you.
              </p>
              <div className="mt-7">
                <Button asChild variant="alert" size="lg">
                  <a href={CTA.callHref}>
                    <Phone className="size-4" aria-hidden="true" />
                    {CTA.callLabel}
                  </a>
                </Button>
              </div>
            </article>

            <article className="flex flex-col rounded-card border border-hairline bg-white p-8 shadow-card lg:p-10">
              <span className="grid size-12 place-items-center rounded-full bg-accent-soft text-brand">
                <CalendarCheck className="size-6" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-display-3">
                Established Patients
              </h2>
              <p className="mt-4 max-w-prose leading-relaxed text-body">
                You may schedule your follow-up appointment through Healow, or
                call {CONTACT.phoneDisplay} if you need assistance.
              </p>
              <div className="mt-7">
                <HealowButton />
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0">
            <div>
              <SectionHeading
                eyebrow="About"
                title="About Dr. Mushkbar"
                size="md"
                rule
              />
              <p className="mt-7 max-w-prose leading-relaxed text-body">
                Dr. Saudia Mushkbar is a board-certified Family Medicine
                physician with more than 20 years of experience caring for
                children, adults, and seniors.
              </p>
              <p className="mt-4 max-w-prose leading-relaxed text-body">
                She provides preventive care, annual wellness visits, women’s
                health, senior care, and chronic disease management. Dr.
                Mushkbar takes time to listen to her patients and provides
                thoughtful, personalized care.
              </p>
            </div>

            <div>
              <SectionHeading
                eyebrow="Why patients choose her"
                title="Why Choose Dr. Mushkbar?"
                size="md"
                rule
              />

              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
                <StarRating rating={REVIEWS.google.ratingValue} />
                <p className="font-medium text-brand">
                  {REVIEWS.google.rating} Google Rating
                </p>
                <span aria-hidden="true" className="text-brand-500/50">
                  |
                </span>
                <p className="text-body">
                  {REVIEWS.google.count} Reviews
                </p>
              </div>

              <p className="mt-5 max-w-prose leading-relaxed text-body">
                Patients appreciate Dr. Mushkbar for her compassionate care,
                thorough approach, and willingness to listen and explain.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2.5">
                {bookingHighlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-hairline bg-white px-4 py-2 text-sm font-medium text-brand"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            eyebrow="Insurance"
            title="Accepted Insurance Plans"
            description="We accept most major insurance plans."
            size="md"
            rule
          />

          <ul className="mt-9 grid gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {acceptedInsuranceNames.map((plan) => (
              <li key={plan} className="flex items-start gap-2.5 text-body">
                <ShieldCheck
                  className="mt-0.5 size-4 shrink-0 text-brand-500"
                  aria-hidden="true"
                />
                {plan}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-prose leading-relaxed text-body">
            Please call{" "}
            <a
              href={CTA.callHref}
              className="font-medium text-brand underline underline-offset-4 hover:text-brand-500"
            >
              {CONTACT.phoneDisplay}
            </a>{" "}
            to confirm your specific plan.
          </p>
        </Container>
      </section>

      <section className="bg-cream py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 [&>*]:min-w-0">
            <div>
              <h2 className="flex items-center gap-3 font-display text-display-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-soft text-brand">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </span>
                Education
              </h2>
              <ul className="mt-6 flex flex-col gap-2">
                {education.map((item) => (
                  <li key={item.school} className="text-body">
                    <span className="font-medium text-brand">
                      {item.school}
                    </span>{" "}
                    — {item.year}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="flex items-center gap-3 font-display text-display-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-soft text-brand">
                  <Building2 className="size-5" aria-hidden="true" />
                </span>
                Hospital Credentials
              </h2>
              <ul className="mt-6 flex flex-col gap-2">
                {hospitalCredentials.map((hospital) => (
                  <li key={hospital} className="text-body">
                    {hospital}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <div className="flex flex-col items-center gap-5 rounded-card bg-brand px-6 py-14 text-center text-white sm:px-8 lg:px-12">
            <p className="font-mono text-eyebrow uppercase tracking-[0.14em] text-accent">
              Our commitment
            </p>
            <h2 className="max-w-[24ch] font-display text-display-2 text-white">
              Your Health Matters
            </h2>
            <p className="max-w-prose text-white/85">
              Dr. Mushkbar is committed to providing personal, respectful, and
              comprehensive primary care for you and your family.
            </p>
            <p className="max-w-prose font-medium text-accent">
              New patients: Call {CONTACT.phoneDisplay} to schedule your first
              appointment.
            </p>
            <Button asChild variant="alert" size="lg" className="mt-2">
              <a href={CTA.callHref}>
                <Phone className="size-4" aria-hidden="true" />
                {CTA.callLabel}
              </a>
            </Button>
          </div>
        </Container>
      </section>

      <FinalCTA
        showBook={false}
        title="Ready to Book?"
        description="Established patients can schedule on Healow. New patients, give the office a call and we will find you the soonest opening."
        note="Same-Day & Same-Week Appointments Available"
      />
    </>
  );
}
