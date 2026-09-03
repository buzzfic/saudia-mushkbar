import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({
  items,
  className,
  tone = "dark",
}: {
  /** Ordered trail including "Home" but excluding nothing; the last item is the current page. */
  items: Crumb[];
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol
        className={cn(
          "flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm",
          tone === "dark" ? "text-body" : "text-white/70",
        )}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight
                  className="size-3.5 shrink-0 opacity-50"
                  aria-hidden="true"
                />
              ) : null}
              {isLast ? (
                <span
                  aria-current="page"
                  className={cn(
                    "font-medium",
                    tone === "dark" ? "text-brand" : "text-white",
                  )}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className={cn(
                    "underline-offset-4 transition-colors hover:underline",
                    tone === "dark" ? "hover:text-brand" : "hover:text-white",
                  )}
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
