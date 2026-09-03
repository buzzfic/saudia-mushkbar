import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

import { Container } from "@/components/common/Container";
import { primaryNav, servicePages, medicarePages } from "@/lib/navigation";

const lookup = new Map(
  [...servicePages, ...medicarePages, ...primaryNav].map((item) => [
    item.href,
    item,
  ]),
);

/** Closing reassurance band plus contextual links to related care pages. */
export function LandingClosing({
  lead,
  script,
  related,
}: {
  lead: string;
  script: string;
  related: string[];
}) {
  const links = related
    .map((href) => lookup.get(href))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <>
      {links.length ? (
        <section className="pb-4">
          <Container>
            <h2 className="font-display text-display-4">Related Care</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex h-full items-start justify-between gap-4 rounded-card border border-hairline bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
                  >
                    <span>
                      <span className="block font-display text-lg text-brand">
                        {link.label}
                      </span>
                      {link.description ? (
                        <span className="mt-1 block text-sm leading-snug text-body">
                          {link.description}
                        </span>
                      ) : null}
                    </span>
                    <ArrowRight
                      className="mt-1 size-4 shrink-0 text-gold transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <section className="py-12 lg:py-16">
        <Container>
          <div className="flex flex-col items-center gap-5 rounded-card bg-accent-soft px-8 py-10 text-center sm:flex-row sm:text-left">
            <Heart
              className="size-10 shrink-0 text-gold"
              aria-hidden="true"
            />
            <p className="text-[1.0625rem] leading-relaxed text-brand">
              {lead}
              <span className="mt-1 block font-display text-xl italic text-gold">
                {script}
              </span>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
