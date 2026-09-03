import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Icon } from "@/components/common/Icon";
import { SectionHeading } from "@/components/common/SectionHeading";
import { services } from "@/lib/content";

/** "Comprehensive Care for the Whole Family" — the homepage services grid. */
export function ServicesOverview() {
  return (
    <section id="services" className="scroll-mt-28 bg-cream py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Services offered"
          title="Comprehensive Care for the Whole Family"
          align="center"
          rule
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors group-hover:text-brand-400">
                    Learn more
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                ) : null}
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-medium text-brand underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-brand-400"
          >
            See all primary care services
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </p>
      </Container>
    </section>
  );
}
