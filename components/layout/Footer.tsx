import Link from "next/link";
import { Clock, ExternalLink, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/Logo";
import {
  CONTACT,
  CTA,
  MAPS,
  OFFICE_HOURS,
  PRACTICE,
  REVIEWS,
} from "@/lib/constants";
import { footerNav, servicePages } from "@/lib/navigation";

/**
 * Site footer. Carries the id="contact" anchor the WordPress site used, so any
 * external link to https://www.saudiamushkbar.com/#contact still lands here.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="mt-24 bg-brand text-white/80">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Logo tone="light" />

            <address className="mt-7 flex flex-col gap-4 not-italic">
              <a
                href={MAPS.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-[0.9375rem] leading-relaxed transition-colors hover:text-white"
              >
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>
                  {CONTACT.address.street}, {CONTACT.address.unit}
                  <br />
                  {CONTACT.address.city}, {CONTACT.address.stateFull}{" "}
                  {CONTACT.address.postalCode}
                </span>
              </a>

              <a
                href={CONTACT.phoneHref}
                className="flex items-center gap-3 text-[0.9375rem] transition-colors hover:text-white"
              >
                <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
                {CONTACT.phoneDisplay}
              </a>

              {OFFICE_HOURS ? (
                <div className="flex items-start gap-3 text-[0.9375rem]">
                  <Clock
                    className="mt-0.5 size-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span>
                    {OFFICE_HOURS.map((slot) => (
                      <span key={slot.days} className="block">
                        {slot.days}: {slot.hours}
                      </span>
                    ))}
                  </span>
                </div>
              ) : null}
            </address>
          </div>

          <nav aria-labelledby="footer-pages">
            <h2
              id="footer-pages"
              className="font-mono text-eyebrow uppercase tracking-[0.14em] text-accent"
            >
              Pages
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9375rem] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services">
            <h2
              id="footer-services"
              className="font-mono text-eyebrow uppercase tracking-[0.14em] text-accent"
            >
              Care We Provide
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {servicePages.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9375rem] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-eyebrow uppercase tracking-[0.14em] text-accent">
              Book Your Appointment
            </h2>
            <div className="mt-5 flex flex-col gap-3">
              <Button asChild variant="alert" size="md">
                <a href={CTA.callHref}>{CTA.callLabel}</a>
              </Button>
              <Button asChild variant="outline-light" size="md">
                <Link href={CTA.contactHref}>{CTA.contactLabel}</Link>
              </Button>
            </div>

            <h2 className="mt-9 font-mono text-eyebrow uppercase tracking-[0.14em] text-accent">
              Find Us Elsewhere
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <a
                  href={PRACTICE.affiliationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.9375rem] transition-colors hover:text-white"
                >
                  {PRACTICE.affiliation} profile
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={REVIEWS.google.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Google reviews
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={REVIEWS.healthgrades.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.9375rem] transition-colors hover:text-white"
                >
                  Healthgrades
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/15">
        <Container className="flex flex-col gap-2 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-base text-white">
            {PRACTICE.siteName}
          </p>
          <p>&copy; {year} {PRACTICE.doctorNameWithCredentials}. All Rights Reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
