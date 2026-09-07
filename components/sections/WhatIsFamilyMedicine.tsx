import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/common/Container";
import { copy } from "@/lib/content";

/** "What is Family Medicine?" */
export function WhatIsFamilyMedicine() {
  return (
    <section className="relative overflow-hidden bg-brand py-20 text-white/85 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/images/general/texture-band.webp')] bg-cover bg-center opacity-25"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-display-2 text-white">What is Family Medicine?</h2>
          <p className="mt-7 text-lg leading-relaxed">
            {copy.whatIsFamilyMedicine}
          </p>
          <Link
            href="/services"
            className="mt-9 inline-flex items-center gap-2 font-medium text-accent underline decoration-accent/60 decoration-2 underline-offset-[6px] transition-colors hover:text-white"
          >
            Find Out More
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
