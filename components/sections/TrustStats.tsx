import { Award, HeartPulse, ShieldCheck, UserPlus } from "lucide-react";

import { Container } from "@/components/common/Container";
import { trustPoints } from "@/lib/content";

const icons = [Award, ShieldCheck, HeartPulse, UserPlus];

/**
 * Breaks a label onto two lines at the word boundary nearest its midpoint, so
 * every marker in the band is the same height however the copy is edited.
 */
function twoLines(label: string): [string, string] {
  const words = label.split(" ");
  const half = label.length / 2;
  let best = 1;
  let bestDelta = Infinity;
  for (let i = 1; i < words.length; i += 1) {
    const delta = Math.abs(words.slice(0, i).join(" ").length - half);
    if (delta < bestDelta) {
      bestDelta = delta;
      best = i;
    }
  }
  return [words.slice(0, best).join(" "), words.slice(best).join(" ")];
}

/**
 * The four trust markers that run under the homepage hero, as a dark band with
 * hairline dividers between them — the treatment the original site used.
 */
export function TrustStats() {
  return (
    <section
      aria-label="Why patients choose Dr. Mushkbar"
      className="bg-brand py-12 text-white lg:py-14"
    >
      <Container>
        <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, index) => {
            const IconComponent = icons[index] ?? ShieldCheck;
            return (
              <li
                key={point}
                className={
                  index === 0
                    ? "flex items-start gap-4"
                    : "flex items-start gap-4 sm:[&:nth-child(even)]:border-l sm:[&:nth-child(even)]:border-white/20 sm:[&:nth-child(even)]:pl-6 lg:[&:nth-child(n+2)]:border-l lg:[&:nth-child(n+2)]:border-white/20 lg:[&:nth-child(n+2)]:pl-6"
                }
              >
                <IconComponent
                  className="mt-0.5 size-9 shrink-0 text-white"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <p className="font-display text-lg uppercase leading-snug tracking-[0.04em] text-white">
                  {twoLines(point).map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
