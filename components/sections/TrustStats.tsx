import { Award, HeartHandshake, ShieldCheck, UserPlus } from "lucide-react";

import { Container } from "@/components/common/Container";
import { trustPoints } from "@/lib/content";

const icons = [Award, ShieldCheck, HeartHandshake, UserPlus];

/** The four trust markers that run under the homepage hero. */
export function TrustStats() {
  return (
    <section aria-label="Why patients choose Dr. Mushkbar" className="border-y border-hairline bg-white py-12">
      <Container>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => {
            const IconComponent = icons[index] ?? ShieldCheck;
            return (
              <li key={point} className="flex items-start gap-3.5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-soft text-brand">
                  <IconComponent className="size-5" aria-hidden="true" />
                </span>
                <p className="font-display text-lg leading-snug text-brand">
                  {point}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
