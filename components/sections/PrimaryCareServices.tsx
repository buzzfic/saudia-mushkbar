import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { primaryCareServices } from "@/lib/content";
import { servicePages } from "@/lib/navigation";

/** Maps the plain service names to the detail pages that cover them. */
const serviceLinks: Record<string, string> = {
  "Annual Physicals & Check-Ups": "/annual-physical-exam-toledo",
  "Chronic Disease Management": "/diabetes-doctor-toledo",
  "Women’s Health Services": "/womens-primary-care-doctor-toledo",
  "Senior Care": "/senior-primary-care-doctor-toledo",
  "Same-Day Sick Visits": "/same-day-primary-care-toledo",
};

/** "Patients Come to Me For Primary Care Services Such As:" */
export function PrimaryCareServices() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Services offered"
              title="Patients Come to Me For Primary Care Services Such As:"
            />

            <ul className="mt-10 flex flex-col gap-3">
              {primaryCareServices.map((service) => {
                const href = serviceLinks[service];
                return (
                  <li
                    key={service}
                    className="flex items-center gap-3.5 border-b border-hairline pb-3"
                  >
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent text-brand">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    {href ? (
                      <Link
                        href={href}
                        className="text-[1.0625rem] text-brand underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:decoration-accent"
                      >
                        {service}
                      </Link>
                    ) : (
                      <span className="text-[1.0625rem] text-brand">
                        {service}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>

            <p className="mt-8 text-[0.9375rem] leading-relaxed text-body">
              Looking for something specific?{" "}
              <Link
                href="/services"
                className="text-brand underline decoration-accent decoration-2 underline-offset-4"
              >
                Browse all {servicePages.length} care pages
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            <Image
              src="/images/general/family-medicine-care-1.webp"
              alt="A patient talking with her doctor during a routine primary care appointment"
              width={570}
              height={840}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 23vw"
              className="w-full rounded-card object-cover shadow-card"
            />
            <Image
              src="/images/general/family-medicine-care-2.png"
              alt="A clinician checking in with an older adult patient in a waiting area"
              width={570}
              height={840}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 23vw"
              className="w-full rounded-card object-cover shadow-card sm:mt-10"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
