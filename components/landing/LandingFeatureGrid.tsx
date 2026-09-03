import { Container } from "@/components/common/Container";
import { Icon } from "@/components/common/Icon";
import { SectionHeading } from "@/components/common/SectionHeading";
import type { LandingFeature } from "@/lib/landing-types";

/**
 * The wide "Comprehensive … Services" row: a divided grid of icon, title and a
 * one-line description. Collapses to two columns on tablet and one on phones.
 */
export function LandingFeatureGrid({
  title,
  items,
}: {
  title: string;
  items: LandingFeature[];
}) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <SectionHeading as="h2" title={title} align="center" rule />

        <ul className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {items.map((item, index) => (
            <li
              key={item.title}
              className={
                index === 0
                  ? "text-center"
                  : "text-center sm:border-l sm:border-hairline sm:pl-8 sm:[&:nth-child(odd)]:border-l-0 sm:[&:nth-child(odd)]:pl-0 lg:[&:nth-child(odd)]:border-l lg:[&:nth-child(odd)]:pl-8 lg:[&:nth-child(3n+1)]:border-l-0 lg:[&:nth-child(3n+1)]:pl-0 xl:[&:nth-child(3n+1)]:border-l xl:[&:nth-child(3n+1)]:pl-8"
              }
            >
              <span className="mx-auto grid size-14 place-items-center rounded-full bg-accent-soft text-brand">
                <Icon name={item.icon} className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-lg leading-snug">
                {item.title}
              </h3>
              {item.description ? (
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {item.description}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
