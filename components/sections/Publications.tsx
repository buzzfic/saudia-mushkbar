import { ExternalLink } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { copy, publications } from "@/lib/content";

/** "Publications & Educational Resources" */
export function Publications() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Resources"
          title="Publications & Educational Resources"
          description={copy.publicationsIntro}
          align="center"
          rule
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {publications.map((publication) => (
            <li key={publication.href}>
              <article className="flex h-full flex-col rounded-card border border-hairline bg-white p-7 shadow-card transition-shadow duration-200 hover:shadow-card-hover">
                <h3 className="font-display text-xl leading-snug">
                  {publication.title}
                </h3>
                <p className="mt-2 text-sm italic text-body">
                  {publication.source}
                </p>
                {publication.byline ? (
                  <p className="mt-1 text-sm text-body">— {publication.byline}</p>
                ) : null}

                <a
                  href={publication.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex h-11 items-center justify-center gap-2 self-start rounded-[4px] bg-accent px-5 text-[0.9375rem] font-medium text-brand transition-colors hover:bg-brand hover:text-white"
                >
                  {publication.linkLabel}
                  <ExternalLink className="size-4" aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
