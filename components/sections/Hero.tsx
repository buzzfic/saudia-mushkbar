import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

import { Container } from "@/components/common/Container";
import { InsuranceLogos } from "@/components/common/InsuranceLogos";
import { Button } from "@/components/ui/button";
import { CONTACT, CTA } from "@/lib/constants";
import { insuranceSummary } from "@/lib/content";

/**
 * Homepage hero, reproducing the original section: the "NOW" rule, the split
 * red headline, the in-network subhead and the Medicare Advantage logo row,
 * with Dr. Mushkbar's portrait alongside as on every other hero in the site.
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

            <h1 className="mt-6 text-display-1">
              <span className="block">Accepting New</span>{" "}
              <span className="block text-alert">
                Medicare &amp; Medicare Advantage Patients
              </span>
            </h1>

            <p className="mt-6 font-display text-display-4 text-brand">
              In-network with leading Medicare Advantage plans
            </p>

            <span aria-hidden="true" className="mt-7 block h-0.5 w-16 bg-accent" />

            <p className="mt-6 max-w-prose text-[1.0625rem] leading-relaxed text-body">
              {insuranceSummary}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="alert" size="lg">
                <a href={CONTACT.phoneHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  {CTA.callLabel}
                </a>
              </Button>
              <Button asChild variant="brand" size="lg">
                <Link href={CTA.scheduleHref}>
                  <CalendarCheck className="size-4" aria-hidden="true" />
                  {CTA.scheduleLabel}
                </Link>
              </Button>
            </div>

            <p className="mt-4 text-sm text-body">
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

            <div className="rounded-card border border-hairline bg-white/90 p-5 shadow-card backdrop-blur-sm sm:p-7 lg:absolute lg:-bottom-2 lg:-left-6 lg:w-[19rem]">
              <h2 className="font-display text-lg leading-snug text-brand">
                Same-day &amp; same-week appointments
              </h2>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-body">
                Plus GLP-1 weight loss programs and personalized wellness plans
                to help you feel your best.
              </p>
              <Link
                href="/same-day-primary-care-toledo"
                className="mt-4 inline-flex text-[0.9375rem] font-medium text-brand underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-brand-400"
              >
                See how same-day care works
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-hairline pt-12">
          <h2 className="text-center font-mono text-eyebrow uppercase tracking-[0.14em] text-gold">
            In-network with leading plans
          </h2>
          <InsuranceLogos className="mt-8" priority />
          <p className="mt-6 text-center font-display text-2xl text-brand">
            + Others
          </p>
        </div>
      </Container>
    </section>
  );
}
