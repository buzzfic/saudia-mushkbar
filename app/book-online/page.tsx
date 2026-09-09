import type { Metadata } from "next";
import { CalendarClock, Phone } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CONTACT, CTA } from "@/lib/constants";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbList, webPage } from "@/lib/structured-data";

const title = "Book Online — Coming Soon";
const description =
  "Online appointment booking with Dr. Saudia Mushkbar, MD is coming soon. In the meantime, call 419-517-7687 to schedule your visit.";
const path = "/book-online";

/**
 * Placeholder for online scheduling.
 *
 * Deliberately `noIndex`: there is nothing here for a searcher yet, and an
 * indexed "coming soon" page competes with the real contact page. It stays out
 * of the sitemap for the same reason. Remove `noIndex` and add the route to
 * `allRoutes` once a booking provider is connected.
 */
export const metadata: Metadata = pageMetadata({
  title,
  description,
  path,
  noIndex: true,
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Book Online", path },
];

export default function BookOnlinePage() {
  return (
    <>
      <JsonLd
        data={[
          webPage({ path, name: title, description }),
          breadcrumbList(crumbs),
        ]}
      />

      <section className="bg-gradient-to-b from-cream to-canvas pb-16 pt-10 lg:pb-20 lg:pt-14">
        <Container width="narrow">
          <Breadcrumbs items={crumbs} />

          <div className="mt-12 flex flex-col items-center text-center">
            <span className="grid size-16 place-items-center rounded-full bg-accent-soft text-brand">
              <CalendarClock className="size-8" aria-hidden="true" />
            </span>

            <p className="mt-7 font-mono text-eyebrow uppercase tracking-[0.14em] text-brand-500">
              Online booking
            </p>

            <h1 className="mt-4 text-display-hero">
              <span className="block">Online Appointment</span>{" "}
              <span className="block text-alert">Booking Coming Soon</span>
            </h1>

            <span aria-hidden="true" className="mt-7 block h-0.5 w-16 bg-accent" />

            <p className="mt-7 max-w-prose text-lg leading-relaxed text-body">
              We are getting online scheduling ready. Until it goes live, the
              fastest way to book is to call the office — our team can confirm
              your insurance plan and find you the soonest opening, including
              same-day and same-week appointments.
            </p>

            <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button asChild variant="alert" size="lg">
                <a href={CTA.callHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  {CTA.callLabel}
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-body">
              Prefer to plan ahead? Call {CONTACT.phoneDisplay} and we will book
              you in.
            </p>
          </div>
        </Container>
      </section>

      <FinalCTA
        showBook={false}
        title="Ready to Book?"
        description="Our office can confirm your insurance plan and find the soonest opening."
        note="Same-Day & Same-Week Appointments Available"
      />
    </>
  );
}
