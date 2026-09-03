"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";

import { primaryNav } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/**
 * Desktop navigation with disclosure menus.
 *
 * Kept deliberately small: a button with `aria-expanded` controlling a listbox
 * of links, closing on Escape, on outside pointer-down and on blur out of the
 * group. Hover opens the menu for mouse users; keyboard users get the same
 * behaviour through focus and Enter/Space on the trigger.
 */
export function DesktopNav() {
  const pathname = usePathname();
  const [openLabel, setOpenLabel] = React.useState<string | null>(null);
  const navRef = React.useRef<HTMLElement>(null);
  const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close any open menu when the route changes. Adjusting state during render
  // (rather than in an effect) avoids a second render pass on navigation.
  const [lastPathname, setLastPathname] = React.useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setOpenLabel(null);
  }

  React.useEffect(() => {
    if (!openLabel) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenLabel(null);
    }
    function onPointerDown(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) setOpenLabel(null);
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [openLabel]);

  React.useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenLabel(null), 120);
  }

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }

  function isActive(href: string) {
    return pathname === href || pathname === `${href}/`;
  }

  return (
    <nav
      ref={navRef}
      aria-label="Main"
      className="hidden xl:block"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setOpenLabel(null);
        }
      }}
    >
      <ul className="flex items-center gap-0.5">
        {primaryNav.map((item) => {
          const hasChildren = Boolean(item.children?.length);
          const isOpen = openLabel === item.label;
          const active =
            isActive(item.href) ||
            Boolean(item.children?.some((child) => isActive(child.href)));

          if (!hasChildren) {
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "inline-flex h-11 items-center rounded-[4px] px-2.5 text-[0.9375rem] transition-colors",
                    active
                      ? "text-brand font-medium"
                      : "text-brand/80 hover:text-brand",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          }

          const menuId = `nav-menu-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
          const children = item.children ?? [];
          // A trailing link back to the section index is pulled out of the
          // list and shown as a footer row rather than another menu item.
          const overviewLink =
            children.length > 1 && children[children.length - 1].href === item.href
              ? children[children.length - 1]
              : null;
          const menuItems = overviewLink ? children.slice(0, -1) : children;
          const isMega = menuItems.length > 4;

          return (
            <li
              key={item.label}
              className="relative"
              onMouseEnter={() => {
                cancelClose();
                setOpenLabel(item.label);
              }}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={menuId}
                onClick={() => setOpenLabel(isOpen ? null : item.label)}
                className={cn(
                  "inline-flex h-11 items-center gap-1 rounded-[4px] px-2.5 text-[0.9375rem] transition-colors",
                  active
                    ? "text-brand font-medium"
                    : "text-brand/80 hover:text-brand",
                )}
              >
                {item.label}
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "size-3.5 transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>

              <div
                id={menuId}
                hidden={!isOpen}
                onMouseEnter={cancelClose}
                onMouseLeave={scheduleClose}
                className={cn(
                  "absolute top-full z-50 pt-2",
                  // A long list becomes a two-column panel centred on its
                  // trigger, so it never runs off the bottom of the viewport.
                  isMega
                    ? "left-1/2 w-[46rem] -translate-x-1/2"
                    : "left-0 w-[23rem]",
                )}
              >
                <div className="animate-fade-in-up overflow-hidden rounded-card border border-hairline bg-white shadow-lift">
                  <ul
                    className={cn(
                      "gap-x-1 p-2",
                      isMega ? "grid grid-cols-2" : "flex flex-col",
                    )}
                  >
                    {menuItems.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          aria-current={
                            isActive(child.href) ? "page" : undefined
                          }
                          className={cn(
                            "block rounded-[4px] px-3 py-2 transition-colors hover:bg-brand-50",
                            isActive(child.href) && "bg-brand-50",
                          )}
                        >
                          <span className="block text-[0.9375rem] font-medium leading-snug text-brand">
                            {child.label}
                          </span>
                          {child.description ? (
                            <span className="mt-0.5 block truncate text-[0.8125rem] leading-snug text-body">
                              {child.description}
                            </span>
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {overviewLink ? (
                    <div className="border-t border-hairline bg-cream px-5 py-3.5">
                      <Link
                        href={overviewLink.href}
                        className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-brand transition-colors hover:text-brand-500"
                      >
                        {overviewLink.label}
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    </div>
                  ) : null}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
