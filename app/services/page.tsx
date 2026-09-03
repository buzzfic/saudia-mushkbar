import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Icon } from "@/components/common/Icon";
import { JsonLd } from "@/components/common/JsonLd";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Conditions } from "@/components/sections/Conditions";
import { BookingProcess } from "@/components/sections/BookingProcess";
import { LocationCard } from "@/components/sections/LocationCard";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import { Testimonials } from "@/components/sections/Testimonials";
import { primaryCareServices, services } from "@/lib/content";
import { medicarePages, servicePages } from "@/lib/navigation";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbList, webPage } from "@/lib/structured-data";

const title = "Primary Care Services in Toledo, Ohio";
const description =
  "Preventive care, chronic disease management, women’s health, pediatric and senior care, same-day sick visits and more from Dr. Saudia Mushkbar in Toledo.";
const path = "/services";

export const metadata: Metadata = pageMetadata({ title, description, path });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path },
];

export default function ServicesPage() {
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
        eyebrow="Services offered"
        title="Comprehensive Care for the Whole Family"
        intro="Dr. Saudia Mushkbar provides trusted Family Medicine and Primary Care for children, adults, and seniors. Her focus is on preventive care, chronic disease management, and personalized care for every patient."
        image={{
          src: "/images/doctor/doctor-saudia-mushkbar-white-coat.jpg",
          alt: "Dr. Saudia Mushkbar, MD, family medicine physician in Toledo, Ohio, in a Toledo Clinic white coat",
          width: 1706,
          height: 2560,
        }}
      />

      <section className="py-20 lg:py-24">
        <Container>
          <h2 className="sr-only">Areas of care</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service.title}>
                <article className="group relative flex h-full flex-col rounded-card border border-hairline bg-white p-8 shadow-card transition-shadow duration-200 hover:shadow-card-hover">
                  <span className="grid size-12 place-items-center rounded-full bg-accent-soft text-brand">
                    <Icon name={service.icon} className="size-6" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl leading-snug">
                    {service.href ? (
                      <Link
                        href={service.href}
                        className="after:absolute after:inset-0 focus-visible:outline-none"
                      >
                        {service.title}
                      </Link>
                    ) : (
                      service.title
                    )}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-body">
                    {service.description}
                  </p>
                  {service.href ? (
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors group-hover:text-brand-500">
                      Learn more
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  ) : null}
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <Container>
          <SectionHeading
            title="Every Care Page in One Place"
            description="Detailed information on the care Dr. Mushkbar provides most often, plus Medicare-specific pages for adults and seniors."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl text-brand">
                Primary care &amp; conditions
              </h3>
              <ul className="mt-5 flex flex-col">
                {servicePages.map((page) => (
                  <li key={page.href} className="border-b border-hairline">
                    <Link
                      href={page.href}
                      className="group flex items-start justify-between gap-4 py-4 transition-colors hover:text-brand"
                    >
                      <span>
                        <span className="block text-[1.0625rem] font-medium text-brand">
                          {page.label}
                        </span>
                        <span className="mt-0.5 block text-[0.9375rem] text-body">
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

            <div>
              <h3 className="font-display text-2xl text-brand">
                Medicare &amp; Medicare Advantage
              </h3>
              <ul className="mt-5 flex flex-col">
                {medicarePages.map((page) => (
                  <li key={page.href} className="border-b border-hairline">
                    <Link
                      href={page.href}
                      className="group flex items-start justify-between gap-4 py-4 transition-colors hover:text-brand"
                    >
                      <span>
                        <span className="block text-[1.0625rem] font-medium text-brand">
                          {page.label}
                        </span>
                        <span className="mt-0.5 block text-[0.9375rem] text-body">
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

              <h3 className="mt-12 font-display text-2xl text-brand">
                Patients come to me for
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {primaryCareServices.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent text-brand">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    <span className="text-[1.0625rem] text-brand">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <Conditions
        eyebrow="Symptoms & conditions"
        title="My Practice Covers a Wide Range of Care, Including:"
      />

      <BookingProcess />
      <Testimonials />
      <LocationCard />
      <FinalCTA />
    </>
  );
}
