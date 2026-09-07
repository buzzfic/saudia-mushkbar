import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Icon } from "@/components/common/Icon";
import { InsuranceLogos } from "@/components/common/InsuranceLogos";
import { JsonLd } from "@/components/common/JsonLd";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { SectionHeading } from "@/components/common/SectionHeading";
import { LandingHero } from "@/components/landing/LandingHero";
import { LocationCard } from "@/components/sections/LocationCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { copy, medicareAssurances, medicareServices } from "@/lib/content";
import type { LandingHeroData } from "@/lib/landing-types";
import { medicarePages } from "@/lib/navigation";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbList, medicalWebPage } from "@/lib/structured-data";

/**
 * The Medicare page keeps the URL it was indexed under on WordPress
 * (/medicare-primary-care-doctor-toledo/). /primary-medicare and /medicare
 * both 301 here — see the redirect map in next.config.ts.
 */
const title = "Medicare Primary Care Doctor in Toledo, OH";
const description =
  "Dr. Saudia Mushkbar, MD is accepting new Medicare and Medicare Advantage patients in Toledo, Ohio — comprehensive primary care for adults and seniors.";
const path = "/medicare-primary-care-doctor-toledo";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path,
  ogType: "article",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Medicare", path },
];

const hero: LandingHeroData = {
  headingLead: "Medicare Primary Care",
  headingAccent: "Doctor in Toledo, OH",
  tagline: "Now Accepting New Medicare & Medicare Advantage Patients",
  intro: copy.medicareIntro,
  checklist: [
    "Same-Day & Same-Week Appointments",
    "Accepting New Medicare & Medicare Advantage Patients",
    "Board Certified in Family Medicine",
    "20+ Years of Experience",
  ],
  image: {
    src: "/images/doctor/primary-care.jpg",
    // The panel is part of the image file, so its wording has to live in the
    // alt text — otherwise screen readers and crawlers get none of it.
    alt: "Dr. Saudia Mushkbar, MD in her Toledo, Ohio family medicine office, beside a panel headed “We Help You” listing: monitor and manage blood pressure, lower your risk of heart attack and stroke, create a personalized treatment plan, improve your lifestyle and overall health, and feel your best every day",
    width: 1024,
    height: 1536,
  },
};

const experiencePoints = [
  "20+ Years of Experience",
  "Board Certified in Family Medicine",
  "Personalized, Patient-Focused Care",
];

export default function MedicarePrimaryCarePage() {
  return (
    <>
      <JsonLd
        data={[
          medicalWebPage({
            path,
            name: title,
            description,
            serviceName: "Medicare primary care",
          }),
          breadcrumbList(crumbs),
        ]}
      />

      <LandingHero data={hero} crumbs={crumbs} />

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <SectionHeading
            title="Medicare & Medicare Advantage Plans"
            description={copy.medicareParticipation}
            align="center"
            rule
          />

          <div className="mt-12">
            <InsuranceLogos />
            <p className="mt-8 text-center font-display text-2xl text-brand">
              + Others
            </p>
          </div>

          <p className="mx-auto mt-10 max-w-prose rounded-card border border-hairline bg-cream px-6 py-5 text-center text-[0.9375rem] leading-relaxed text-body">
            {copy.medicareDisclaimer}
          </p>
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading title="Comprehensive Primary Care for Adults & Seniors" />
              <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                {medicareServices.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-brand">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    <span className="text-[0.9375rem] text-brand">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading title="Experienced Family Medicine Care in Toledo" />
              <ul className="mt-9 flex flex-col gap-3">
                {experiencePoints.map((point) => (
                  <li
                    key={point}
                    className="rounded-[4px] border border-hairline bg-white px-4 py-3 text-[0.9375rem] text-brand"
                  >
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-7 max-w-prose text-[1.0625rem] leading-relaxed text-body">
                {copy.medicareBio}
              </p>
              <Link
                href="/about"
                className="mt-7 inline-flex items-center gap-2 font-medium text-brand underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-brand-500"
              >
                Meet Dr. Mushkbar
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 lg:py-24">
        <Container>
          <SectionHeading
            title="Trusted By Patients in Toledo"
            align="center"
            rule
          />
          <ReviewBadges className="mt-12 lg:mx-auto lg:max-w-3xl" />
        </Container>
      </section>

      <section className="py-20 lg:py-24">
        <Container>
          <h2 className="sr-only">What to expect</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {medicareAssurances.map((item) => (
              <li
                key={item.title}
                className="flex h-full flex-col rounded-card border border-hairline bg-white p-7 shadow-card"
              >
                <span className="grid size-12 place-items-center rounded-full bg-accent-soft text-brand">
                  <Icon name={item.icon} className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-14">
            <h2 className="font-display text-display-4">More Medicare Care</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {medicarePages
                .filter((page) => page.href !== path)
                .map((page) => (
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

      <LocationCard
        ctaTitle="Ready to Schedule?"
        ctaDescription="Call to confirm your specific Medicare plan and book your visit."
      />

      <FinalCTA
        title="Looking for a Medicare Primary Care Doctor in Toledo?"
        description="Dr. Saudia Mushkbar is welcoming new patients."
        note="Same-Day & Same-Week Appointments Available"
      />
    </>
  );
}
