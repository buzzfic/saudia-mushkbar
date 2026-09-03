import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/Container";
import { copy, trustPoints } from "@/lib/content";

/** "Meet Your Family Medicine Doctor" — the About Dr. Mushkbar section. */
export function DoctorIntroduction({
  headingLevel: Heading = "h2",
  showLink = true,
}: {
  headingLevel?: "h1" | "h2";
  showLink?: boolean;
}) {
  return (
    <section id="about" className="scroll-mt-28 py-20 lg:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <Image
              src="/images/doctor/doctor-saudia-mushkbar-white-coat.jpg"
              alt="Dr. Saudia Mushkbar, family medicine physician in Toledo, Ohio, wearing a Toledo Clinic white coat"
              width={1706}
              height={2560}
              sizes="(max-width: 1024px) 90vw, 34vw"
              className="w-full rounded-card object-cover shadow-card"
            />
          </div>

          <div>
            <p className="font-mono text-eyebrow uppercase tracking-[0.14em] text-brand-500">
              About Dr. Saudia Mushkbar
            </p>
            <Heading className="mt-4 text-display-2">
              Meet Your Family Medicine Doctor
            </Heading>

            <p className="mt-7 max-w-prose text-[1.0625rem] leading-relaxed text-body">
              {copy.doctorBio}
            </p>

            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-[4px] border border-hairline bg-white px-4 py-3 text-[0.9375rem] text-brand"
                >
                  {point}
                </li>
              ))}
            </ul>

            {showLink ? (
              <Link
                href="/about"
                className="mt-9 inline-flex items-center gap-2 font-medium text-brand underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-brand-500"
              >
                Read more about Dr. Mushkbar
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
