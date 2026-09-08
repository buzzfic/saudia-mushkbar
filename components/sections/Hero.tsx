import Image from "next/image";
import Link from "next/link";
import {
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Sprout,
} from "lucide-react";

import { Container } from "@/components/common/Container";
import { InsuranceLogos } from "@/components/common/InsuranceLogos";
import { Button } from "@/components/ui/button";
import { CONTACT, CTA } from "@/lib/constants";
import { insuranceSummary } from "@/lib/content";

/** The three points that sat beneath the plan logos on the original hero. */
const highlights = [
  {
    icon: ShieldCheck,
    title: "In-network with leading plans:",
    body: insuranceSummary,
  },
  {
    icon: CalendarDays,
    title: "Same-day & same-week appointments available.",
  },
  {
    icon: Sprout,
    title: "Weight Loss & Wellness",
    body: "GLP-1 programs and personalized plans to help you feel your best.",
  },
];

/**
 * Homepage hero, reproducing the original left column: the "NOW" rule, the
 * split red headline, the in-network subhead, the plan logos ending in
 * "+ Others", a heart rule, and the three highlights beneath it.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream via-accent-soft to-canvas pb-20 pt-14 lg:pb-24 lg:pt-16">
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 [&>*]:min-w-0">
          <div>
            <p className="flex items-center gap-3.5 font-mono text-eyebrow uppercase tracking-[0.2em] text-brand">
              <span className="rule-line w-16" />
              Now
              <span className="rule-line w-16" />
            </p>

            <h1 className="mt-6 text-display-hero">
              <span className="block">Accepting New</span>{" "}
              <span className="block text-alert">
                Medicare &amp; Medicare Advantage Patients
              </span>
            </h1>

            <p className="mt-5 font-display text-lg text-brand">
              In-network with leading Medicare Advantage plans
            </p>

            <InsuranceLogos
              className="mt-7 max-w-xl gap-x-7 sm:grid-cols-4 lg:grid-cols-4"
              priority
              showOthers
            />

            <p
              aria-hidden="true"
              className="mt-9 flex max-w-xl items-center gap-4 text-brand/25"
            >
              <span className="h-px flex-1 bg-current" />
              <span className="text-brand/50">&#9825;</span>
              <span className="h-px flex-1 bg-current" />
            </p>

            <ul className="mt-8 flex max-w-xl flex-col gap-5">
              {highlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3.5">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent-soft text-brand">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-display text-lg leading-snug text-brand">
                      {item.title}
                    </p>
                    {item.body ? (
                      <p className="mt-1 text-[0.9375rem] leading-relaxed text-body">
                        {item.body}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="brand" size="lg">
                <Link href={CTA.contactHref}>
                  <CalendarCheck className="size-4" aria-hidden="true" />
                  Schedule a Visit
                </Link>
              </Button>
              <Button asChild variant="alert" size="lg">
                <a href={CTA.callHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  {CONTACT.phoneDisplay}
                </a>
              </Button>
            </div>

            <p className="mt-4 flex items-start gap-2 text-sm text-body">
              <CheckCircle2
                className="mt-0.5 size-4 shrink-0 text-brand"
                aria-hidden="true"
              />
              Call to schedule or confirm your specific insurance plan.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <Image
              src="/images/doctor/doctor-saudia-mushkbar-hero.png"
              alt="Dr. Saudia Mushkbar, MD, family medicine and primary care physician in Toledo, Ohio"
              width={947}
              height={951}
              priority
              sizes="(max-width: 1024px) 90vw, 44vw"
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
