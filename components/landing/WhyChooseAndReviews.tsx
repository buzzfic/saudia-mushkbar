import { CircleCheck, Quote } from "lucide-react";

import { Container } from "@/components/common/Container";
import { StarRating } from "@/components/common/ReviewBadges";
import { REVIEWS } from "@/lib/constants";
import { featuredTestimonials } from "@/lib/content";
import type { LandingReason } from "@/lib/landing-types";

/**
 * Two-column band: a reasons checklist beside the aggregate Google rating and
 * one featured review. Both the rating and the quote are published on the
 * original site — nothing here is written on the practice's behalf.
 */
export function WhyChooseAndReviews({
  title,
  items,
}: {
  title: string;
  items: LandingReason[];
}) {
  const review = featuredTestimonials[0];

  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-card border border-hairline bg-cream p-8 lg:p-10">
            <h2 className="font-display text-display-4">{title}</h2>
            <ul className="mt-7 flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.label} className="flex items-start gap-3">
                  <CircleCheck
                    className="mt-0.5 size-5 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <p className="text-[0.9375rem] leading-relaxed text-body">
                    <span className="font-medium text-brand">{item.label}</span>
                    {item.text ? ` — ${item.text}` : null}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-hairline bg-accent-soft p-8 lg:p-10">
            <h2 className="flex items-center gap-2.5 font-display text-display-4">
              <Quote className="size-6 text-accent-strong" aria-hidden="true" />
              What Our Patients Say
            </h2>

            <div className="mt-7 flex items-center gap-4">
              <p className="font-display text-5xl text-brand">
                {REVIEWS.google.rating}
              </p>
              <StarRating rating={REVIEWS.google.ratingValue} />
            </div>
            <p className="mt-2 font-medium text-brand">
              {REVIEWS.google.count} Google reviews
            </p>

            <figure className="mt-7">
              <blockquote className="text-[0.9375rem] leading-relaxed text-body">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-3 font-medium text-brand">
                — {review.author}
              </figcaption>
            </figure>

            <a
              href={REVIEWS.google.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex h-11 items-center rounded-[4px] border border-brand/30 bg-white px-5 text-[0.9375rem] font-medium text-brand transition-colors hover:border-brand hover:bg-brand hover:text-white"
            >
              Read Our Google Reviews
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
