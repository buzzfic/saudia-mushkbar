import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import type { LandingStep } from "@/lib/landing-types";

/** Numbered process row, used where a page explains a sequence of steps. */
export function LandingSteps({
  title,
  items,
}: {
  title: string;
  items: LandingStep[];
}) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <SectionHeading as="h2" title={title} align="center" rule />

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <li key={item.title} className="text-center">
              <span
                className="mx-auto grid size-10 place-items-center rounded-full bg-brand font-mono text-sm text-white"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <h3 className="mt-5 font-display text-lg leading-snug">
                <span className="sr-only">Step {index + 1}: </span>
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
