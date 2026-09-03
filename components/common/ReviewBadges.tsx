import Image from "next/image";
import { Star } from "lucide-react";

import { REVIEWS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function StarRating({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          aria-hidden="true"
          className={cn(
            "size-4",
            star <= Math.round(rating)
              ? "fill-gold text-gold"
              : "fill-none text-gold/40",
          )}
        />
      ))}
    </span>
  );
}

/**
 * The "Trusted By Patients in Toledo" pair of rating cards, reproduced from the
 * homepage and the Medicare page. Ratings are the ones published on the site.
 */
export function ReviewBadges({ className }: { className?: string }) {
  return (
    <div className={cn("grid gap-6 sm:grid-cols-2", className)}>
      <article className="flex flex-col items-start gap-4 rounded-card border border-hairline bg-white p-7 shadow-card">
        <Image
          src="/images/reviews/google-logo.png"
          alt="Google"
          width={2560}
          height={1067}
          sizes="112px"
          className="h-8 w-auto"
        />
        <div className="flex items-baseline gap-3">
          <p className="font-display text-4xl text-brand">
            {REVIEWS.google.rating}
          </p>
          <StarRating rating={REVIEWS.google.ratingValue} />
        </div>
        <p className="text-[0.9375rem] text-body">
          {REVIEWS.google.count} Google reviews
        </p>
        <a
          href={REVIEWS.google.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex h-11 items-center rounded-[4px] bg-accent px-5 text-[0.9375rem] font-medium text-brand transition-colors hover:bg-brand hover:text-white"
        >
          Read Our Google Reviews
        </a>
      </article>

      <article className="flex flex-col items-start gap-4 rounded-card border border-hairline bg-white p-7 shadow-card">
        <p className="font-display text-2xl text-brand">
          {REVIEWS.healthgrades.label}
        </p>
        <div className="flex items-baseline gap-3">
          <p className="font-display text-4xl text-brand">
            {REVIEWS.healthgrades.rating}
          </p>
          <StarRating rating={REVIEWS.healthgrades.ratingValue} />
        </div>
        <p className="text-[0.9375rem] text-body">
          {REVIEWS.healthgrades.count} Reviews
        </p>
        <a
          href={REVIEWS.healthgrades.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex h-11 items-center rounded-[4px] bg-accent px-5 text-[0.9375rem] font-medium text-brand transition-colors hover:bg-brand hover:text-white"
        >
          Read Our Healthgrades Reviews
        </a>
      </article>
    </div>
  );
}
