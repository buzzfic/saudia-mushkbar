import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/Container";
import { copy } from "@/lib/content";

/** "Your Family Doctor in Toledo — Putting You First" */
export function FamilyMedicineIntro() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Image
              src="/images/general/family-medicine-care-2.png"
              alt="A physician sitting with an older patient during a primary care visit"
              width={570}
              height={840}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="aspect-[3/4] w-full rounded-card object-cover shadow-card"
            />
          </div>

          <div>
            <h2 className="text-display-2">
              Your Family Doctor in Toledo — Putting You First
            </h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-body">
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
