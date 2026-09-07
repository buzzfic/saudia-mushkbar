import Image from "next/image";
import Link from "next/link";
import { Check, MapPin, Phone } from "lucide-react";

import { Breadcrumbs, type Crumb } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { Icon } from "@/components/common/Icon";
import { StarRating } from "@/components/common/ReviewBadges";
import { Button } from "@/components/ui/button";
import { CTA, REVIEWS } from "@/lib/constants";
import type { LandingHeroData } from "@/lib/landing-types";
import { cn } from "@/lib/utils";

const trustItems = [
  { icon: "UserRound", title: "20+ Years", body: "of clinical experience" },
  { icon: "ShieldCheck", title: "Board-Certified", body: "in Family Medicine" },
  { icon: "HeartHandshake", title: "Trusted Care", body: "for Toledo families" },
];

export function LandingHero({
  data,
  crumbs,
}: {
  data: LandingHeroData;
  crumbs: Crumb[];
}) {
  return (
    <section className="bg-gradient-to-b from-cream to-canvas pb-16 pt-10 lg:pb-20 lg:pt-14">
      <Container>
        <Breadcrumbs items={crumbs} />

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 [&>*]:min-w-0">
          <div>
            {data.badge ? (
              <p
                className="inline-flex items-center gap-2 rounded-pill bg-accent px-4 py-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-brand"
              >
                <Icon name={data.badge.icon} className="size-4" />
                {data.badge.label}
              </p>
            ) : null}

            <h1 className={cn("text-display-hero", data.badge ? "mt-6" : "mt-0")}>
              <span className="block">{data.headingLead}</span>{" "}
              <span className="block text-alert">{data.headingAccent}</span>
            </h1>

            <p className="mt-5 font-display text-display-4 text-brand-500">
              {data.tagline}
            </p>

            <span
              aria-hidden="true"
              className="mt-6 block h-0.5 w-16 bg-accent"
            />

            <p className="mt-6 max-w-prose text-[1.0625rem] leading-relaxed text-body">
              {data.intro}
            </p>

            {data.points?.length ? (
              <ul className="mt-9 grid grid-cols-2 gap-x-5 gap-y-7 lg:grid-cols-4">
                {data.points.map((point) => (
                  <li key={point.title}>
                    <span className="grid size-11 place-items-center rounded-full bg-accent-soft text-brand">
                      <Icon name={point.icon} className="size-5" />
                    </span>
                    <p className="mt-3 text-[0.9375rem] font-medium leading-snug text-brand">
                      {point.title}
                    </p>
                    {point.description ? (
                      <p className="mt-1 text-sm leading-snug text-body">
                        {point.description}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}

            {data.checklist?.length ? (
              <ul className="mt-9 flex flex-col gap-3">
                {data.checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-brand">
                      <Check className="size-3" aria-hidden="true" />
                    </span>
                    <span className="text-[1.0625rem] text-brand">{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="alert" size="lg">
                <a href={CTA.callHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  {CTA.callLabel}
                </a>
              </Button>
              <Button asChild variant="brand" size="lg">
                <Link href={CTA.contactHref}>
                  <MapPin className="size-4" aria-hidden="true" />
                  {CTA.contactLabel}
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              width={data.image.width}
              height={data.image.height}
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="mx-auto aspect-[4/5] w-full max-w-md rounded-card object-cover object-top shadow-card lg:mx-0 lg:max-w-none"
            />

            {data.aside ? (
              <div className="mt-6 rounded-card border border-hairline bg-white p-6 shadow-lift sm:p-7 lg:absolute lg:right-3 lg:top-1/2 lg:mt-0 lg:w-[17.5rem] lg:-translate-y-1/2 lg:p-6">
                {data.aside.kind === "checklist" ? (
                  <>
                    <h2 className="font-display text-xl leading-snug text-brand">
                      {data.aside.title}
                    </h2>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {data.aside.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[0.9375rem] leading-snug text-body"
                        >
                          <Check
                            className="mt-1 size-3.5 shrink-0 text-brand"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {data.aside.note ? (
                      <div className="mt-5 border-t border-hairline pt-5">
                        <p className="font-display text-lg text-brand">
                          {data.aside.note.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-body">
                          {data.aside.note.body}
                        </p>
                      </div>
                    ) : null}
                  </>
                ) : (
                  <>
                    <h2 className="sr-only">Why patients trust Dr. Mushkbar</h2>
                    <ul className="flex flex-col gap-5">
                      <li className="flex items-start gap-3">
                        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent-soft text-brand">
                          <Icon name="Heart" className="size-4" />
                        </span>
                        <span>
                          <span className="block text-[0.9375rem] font-medium text-brand">
                            {REVIEWS.google.rating} Google rating
                          </span>
                          <StarRating
                            rating={REVIEWS.google.ratingValue}
                            className="mt-1"
                          />
                          <span className="mt-1 block text-sm text-body">
                            {REVIEWS.google.count} reviews
                          </span>
                        </span>
                      </li>
                      {trustItems.map((item) => (
                        <li key={item.title} className="flex items-start gap-3">
                          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent-soft text-brand">
                            <Icon name={item.icon} className="size-4" />
                          </span>
                          <span>
                            <span className="block text-[0.9375rem] font-medium text-brand">
                              {item.title}
                            </span>
                            <span className="block text-sm text-body">
                              {item.body}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
