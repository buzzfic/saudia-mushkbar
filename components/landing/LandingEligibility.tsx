import { Check } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";

/** "Is this right for you?" — the criteria a programme is suited to. */
export function LandingEligibility({
  title,
  intro,
  items,
}: {
  title: string;
  intro: string;
  items: string[];
}) {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="rounded-card border border-hairline bg-cream p-8 lg:p-12">
          <SectionHeading as="h2" title={title} description={intro} />

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-brand">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                <span className="text-[1.0625rem] leading-relaxed text-brand">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
