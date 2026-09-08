import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

import { Container } from "@/components/common/Container";
import { copy } from "@/lib/content";

/**
 * "Your Family Doctor in Toledo — Putting You First"
 *
 * Laid out as on the original site: the headline on the left with its second
 * line in red, a heart rule beneath it, and the copy in a second column behind
 * a hairline divider. No photograph — the headline carries the section.
 */
export function FamilyMedicineIntro() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-display-2">
              <span className="block">Your Family Doctor in Toledo —</span>{" "}
              <span className="block text-alert">Putting You First</span>
            </h2>

            <p
              aria-hidden="true"
              className="mt-10 flex items-center gap-4 text-brand/30"
            >
              <span className="h-px flex-1 bg-current" />
              <Heart className="size-4 shrink-0 text-brand/50" />
              <span className="h-px flex-1 bg-current" />
            </p>
          </div>

          <div className="lg:border-l lg:border-hairline lg:pl-16">
            <p className="max-w-prose text-lg leading-relaxed text-body">
              {copy.familyMedicineIntro}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 font-medium text-brand underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-brand-500"
            >
              Meet Dr. Mushkbar
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
