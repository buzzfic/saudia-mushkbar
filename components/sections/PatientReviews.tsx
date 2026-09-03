import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StarRating } from "@/components/common/ReviewBadges";
import { REVIEWS } from "@/lib/constants";
import { patientReviews } from "@/lib/content";

/**
 * "Trusted by Our Patients" — the Google review wall.
 *
 * On WordPress this was a Trustindex widget that rendered client-side. Here the
 * same reviews are plain server-rendered HTML, so the content is crawlable and
 * costs no third-party JavaScript.
 */
export function PatientReviews() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <Container>
        <SectionHeading
          title="Trusted by Our Patients"
          align="center"
          rule
          description={`${REVIEWS.google.rating} out of 5 across ${REVIEWS.google.count} Google reviews.`}
        />

        <ul className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>li]:mb-6 [&>li]:break-inside-avoid">
          {patientReviews.map((review) => (
            <li key={review.author}>
              <figure className="rounded-card border border-hairline bg-white p-7 shadow-card">
                <StarRating rating={5} />
                <blockquote className="mt-4 text-[0.9375rem] leading-relaxed text-body">
                  {review.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-baseline justify-between gap-3">
                  <span className="font-display text-lg text-brand">
                    {review.author}
                  </span>
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-gold">
                    {review.source}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-center">
          <a
            href={REVIEWS.google.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-brand-400"
          >
            Read more reviews on Google
          </a>
        </p>
      </Container>
    </section>
  );
}
