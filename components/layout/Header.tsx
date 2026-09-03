import Link from "next/link";
import { CalendarCheck, Phone } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import { DesktopNav } from "@/components/layout/DesktopNav";
import { Logo } from "@/components/layout/Logo";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { CONTACT, CTA } from "@/lib/constants";

/**
 * Sticky header. The original site used an absolutely positioned header over
 * the hero; a sticky bar is kept here because the site is now many pages deep
 * and the appointment CTA should stay reachable. Height is fixed so nothing
 * shifts as the page loads.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-canvas/95 backdrop-blur supports-[backdrop-filter]:bg-canvas/80">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-2.5">
          {/* Full number once the inline nav appears, icon-only below that. */}
          <Button asChild variant="alert" size="sm" className="hidden xl:inline-flex">
            <a href={CONTACT.phoneHref}>
              <Phone className="size-4" aria-hidden="true" />
              <span className="sr-only">Call the office at </span>
              {CONTACT.phoneDisplay}
            </a>
          </Button>
          <Button asChild variant="alert" size="icon" className="xl:hidden">
            <a
              href={CONTACT.phoneHref}
              aria-label={`Call the office at ${CONTACT.phoneDisplay}`}
            >
              <Phone className="size-5" aria-hidden="true" />
            </a>
          </Button>

          <Button asChild variant="brand" size="sm" className="hidden sm:inline-flex">
            <Link href={CTA.scheduleHref}>
              <CalendarCheck className="size-4" aria-hidden="true" />
              {CTA.scheduleLabel}
            </Link>
          </Button>

          <MobileNavigation />
        </div>
      </Container>
    </header>
  );
}
