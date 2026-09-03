import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Container } from "@/components/common/Container";
import { JsonLd } from "@/components/common/JsonLd";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { Conditions } from "@/components/sections/Conditions";
import { Publications } from "@/components/sections/Publications";
import { MediaAppearances } from "@/components/sections/MediaAppearances";
import { LocationCard } from "@/components/sections/LocationCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import { PRACTICE } from "@/lib/constants";
import { copy, trustPoints } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbList, webPage } from "@/lib/structured-data";

const title = "About Dr. Saudia Mushkbar, MD — Family Medicine in Toledo";
const description =
  "Meet Dr. Saudia Mushkbar, a board-certified family medicine physician with over 20 years of experience caring for children, adults and seniors in Toledo, Ohio.";
const path = "/about";

export const metadata: Metadata = pageMetadata({ title, description, path });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
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
        eyebrow="About Dr. Saudia Mushkbar"
        title="Meet Your Family Medicine Doctor"
        intro={copy.doctorBio}
        image={{
          src: "/images/doctor/doctor-saudia-mushkbar-scrubs.jpeg",
          alt: "Dr. Saudia Mushkbar, family medicine physician in Toledo, Ohio, wearing navy scrubs with a stethoscope",
          width: 899,
          height: 1320,
        }}
      >
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="rounded-[4px] border border-hairline bg-white px-4 py-3 text-[0.9375rem] text-brand"
            >
              {point}
            </li>
          ))}
        </ul>

        <a
          href={PRACTICE.affiliationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 font-medium text-brand underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-brand-500"
        >
          View the {PRACTICE.affiliation} profile
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      </PageHero>

      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading title="What is Family Medicine?" />
              <p className="mt-7 max-w-prose text-[1.0625rem] leading-relaxed text-body">
                {copy.whatIsFamilyMedicine}
              </p>
              <Link
                href="/primary-care-doctor-toledo"
                className="mt-7 inline-flex items-center gap-2 font-medium text-brand underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-brand-500"
              >
                Primary care in Toledo
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <div>
              <SectionHeading title="A Patient-Focused Approach" />
              <p className="mt-7 max-w-prose text-[1.0625rem] leading-relaxed text-body">
                {copy.familyMedicineIntro}
              </p>
              <Link
                href="/services"
                className="mt-7 inline-flex items-center gap-2 font-medium text-brand underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-brand-500"
              >
                Explore every service
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="sr-only">Patient ratings</h2>
            <ReviewBadges className="lg:mx-auto lg:max-w-3xl" />
          </div>
        </Container>
      </section>

      <Conditions
        eyebrow="Scope of care"
        title="Dr. Mushkbar’s Practice Covers a Wide Range of Care"
      />

      <MediaAppearances />
      <Publications />
      <LocationCard ctaTitle="Become a Patient" />
      <FinalCTA
        title="Ready to Meet Dr. Mushkbar?"
        description="She is welcoming new patients of all ages."
      />
    </>
  );
}
