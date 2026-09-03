"use client";

import * as React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";

/**
 * Visitor-facing error boundary. The technical detail stays in the server logs
 * — only a digest is shown, never a stack trace.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="py-24 lg:py-32">
      <Container width="narrow">
        <h1 className="text-display-2">Something went wrong</h1>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-body">
          We hit an unexpected problem loading this page. Please try again — or
          call the office and we&rsquo;ll help you right away.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button type="button" variant="brand" size="lg" onClick={reset}>
            Try again
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={CONTACT.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              {CONTACT.phoneDisplay}
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <Link href="/">Back to the homepage</Link>
          </Button>
        </div>

        {error.digest ? (
          <p className="mt-10 font-mono text-xs text-body/70">
            Reference: {error.digest}
          </p>
        ) : null}
      </Container>
    </section>
  );
}
