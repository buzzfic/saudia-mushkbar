"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, Menu, MapPin, Phone } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ADDRESS_ONE_LINE, CONTACT, CTA } from "@/lib/constants";
import { primaryNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // Close the drawer when the route changes, adjusted during render rather
  // than in an effect so navigation does not trigger a second render pass.
  const [lastPathname, setLastPathname] = React.useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  function isActive(href: string) {
    return pathname === href || pathname === `${href}/`;
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="inline-flex h-11 items-center gap-2 rounded-[4px] border border-brand/25 px-3.5 text-[0.9375rem] font-medium text-brand transition-colors hover:border-brand xl:hidden"
        >
          <Menu className="size-5" aria-hidden="true" />
          Menu
        </button>
      </SheetTrigger>

      <SheetContent aria-labelledby="mobile-nav-title">
        <SheetTitle id="mobile-nav-title" className="sr-only">
          Site navigation
        </SheetTitle>
        <SheetDescription className="sr-only">
          Links to every page, plus the office phone number and address.
        </SheetDescription>

        <div className="flex h-full flex-col overflow-y-auto overscroll-contain">
          <div className="border-b border-hairline px-6 py-5 pr-16">
            <p className="font-display text-lg text-brand">Menu</p>
          </div>

          <nav aria-label="Mobile" className="flex-1 px-4 py-4">
            <ul className="flex flex-col gap-1">
              {primaryNav.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-[4px] px-3 py-3 font-display text-lg transition-colors",
                      isActive(item.href)
                        ? "bg-brand-50 text-brand"
                        : "text-brand hover:bg-brand-50",
                    )}
                  >
                    {item.label}
                  </Link>

                  {item.children?.length ? (
                    <ul className="mb-2 ml-3 border-l border-hairline pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            aria-current={
                              isActive(child.href) ? "page" : undefined
                            }
                            className={cn(
                              "block rounded-[4px] px-3 py-2.5 text-[0.9375rem] transition-colors",
                              isActive(child.href)
                                ? "bg-brand-50 font-medium text-brand"
                                : "text-body hover:bg-brand-50 hover:text-brand",
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto border-t border-hairline bg-cream px-6 py-6">
            <div className="flex flex-col gap-3">
              <Button asChild variant="brand" size="md">
                <Link href={CTA.scheduleHref}>
                  <CalendarCheck className="size-4" aria-hidden="true" />
                  {CTA.requestLabel}
                </Link>
              </Button>
              <Button asChild variant="alert" size="md">
                <a href={CONTACT.phoneHref}>
                  <Phone className="size-4" aria-hidden="true" />
                  {CONTACT.phoneDisplay}
                </a>
              </Button>
            </div>

            <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-body">
              <MapPin
                className="mt-0.5 size-4 shrink-0 text-gold"
                aria-hidden="true"
              />
              {ADDRESS_ONE_LINE}
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
