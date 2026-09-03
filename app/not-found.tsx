import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { CTA } from "@/lib/constants";
import { primaryNav } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you were looking for is not available. Browse the site or call the office to book an appointment.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32">
      <Container width="narrow">
        <p className="font-mono text-eyebrow uppercase tracking-[0.14em] text-brand-500">
          Error 404
        </p>
        <h1 className="mt-4 text-display-2">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-body">
          The page may have moved or the link may be out of date. You can start
          again from the homepage, or call the office and we&rsquo;ll help you
          directly.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="brand" size="lg">
            <Link href="/">Go to the homepage</Link>
          </Button>
          <Button asChild variant="alert" size="lg">
            <a href={CTA.callHref}>
              <Phone className="size-4" aria-hidden="true" />
              {CTA.callLabel}
            </a>
          </Button>
        </div>

        <nav aria-label="Site pages" className="mt-16 border-t border-hairline pt-10">
          <h2 className="font-display text-xl text-brand">
            Where would you like to go?
          </h2>
          <ul className="mt-5 flex flex-col gap-2.5">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[1.0625rem] text-brand underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-brand-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
