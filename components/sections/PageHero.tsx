import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

import { Breadcrumbs, type Crumb } from "@/components/common/Breadcrumbs";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { CTA } from "@/lib/constants";

/**
 * Shared hero for the non-landing pages (About, Services, Contact) so every
 * page opens with the same shape: breadcrumbs, eyebrow, H1, intro, the red
 * call button beside the appointment button, and Dr. Mushkbar's portrait.
 */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  intro,
  image,
  children,
  showCtas = true,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  intro: string;
  image: { src: string; alt: string; width: number; height: number };
  /** Optional extra content below the intro, e.g. a trust list. */
  children?: React.ReactNode;
  showCtas?: boolean;
}) {
  return (
    <section className="bg-gradient-to-b from-cream to-canvas pb-16 pt-10 lg:pb-20 lg:pt-14">
      <Container>
        <Breadcrumbs items={crumbs} />

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 [&>*]:min-w-0">
          <div>
            <p className="font-mono text-eyebrow uppercase tracking-[0.14em] text-brand-500">
              {eyebrow}
            </p>
            <h1 className="mt-4 text-display-1">{title}</h1>

            <span
              aria-hidden="true"
              className="mt-6 block h-0.5 w-16 bg-accent"
            />

            <p className="mt-6 max-w-prose text-[1.0625rem] leading-relaxed text-body">
              {intro}
            </p>

            {children}

            {showCtas ? (
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="alert" size="lg">
                  <a href={CTA.callHref}>
                    <Phone className="size-4" aria-hidden="true" />
                    {CTA.callLabel}
                  </a>
                </Button>
                <Button asChild variant="brand" size="lg">
                  <Link href={CTA.bookHref}>
                    <CalendarCheck className="size-4" aria-hidden="true" />
                    {CTA.bookLabel}
                  </Link>
                </Button>
              </div>
            ) : null}
          </div>

          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            priority
            sizes="(max-width: 1024px) 90vw, 44vw"
            className="mx-auto aspect-[4/5] w-full max-w-md rounded-card object-cover object-top shadow-card lg:mx-0 lg:max-w-none"
          />
        </div>
      </Container>
    </section>
  );
}
