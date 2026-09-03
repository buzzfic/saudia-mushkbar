import { Quote } from "lucide-react";

import { Container } from "@/components/common/Container";
import { ReviewBadges } from "@/components/common/ReviewBadges";
import { SectionHeading } from "@/components/common/SectionHeading";
import { featuredTestimonials, type Testimonial } from "@/lib/content";

/**
 * "Trusted By Patients in Toledo" — the two rating cards plus three featured
 * reviews. All review text is quoted as published on the original site.
 */
export function Testimonials({
  title = "Trusted By Patients in Toledo",
  reviews = featuredTestimonials,
}: {
  title?: string;
  reviews?: Testimonial[];
}) {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Patient reviews"
          title={title}
          align="center"
          rule
        />

        <ReviewBadges className="mt-14 lg:mx-auto lg:max-w-3xl" />

        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <li key={review.author}>
              <figure className="flex h-full flex-col rounded-card border border-hairline bg-white p-8 shadow-card">
                <Quote
                  className="size-7 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <blockquote className="mt-5 flex-1 text-[0.9375rem] leading-relaxed text-body">
                  {review.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-hairline pt-5">
                  <span className="block font-display text-lg text-brand">
                    {review.author}
                  </span>
                  <span className="mt-0.5 block font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-gold">
                    Posted on {review.source}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
