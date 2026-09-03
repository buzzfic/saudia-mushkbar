import Image from "next/image";
import Link from "next/link";

import { PRACTICE } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Brand lockup: the practice name set in the display face beside The Toledo
 * Clinic mark used on the live site. The mark links home rather than off-site
 * so the primary logo behaves the way visitors expect; the Toledo Clinic
 * profile stays linked from the footer.
 */
export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3.5", className)}
      aria-label={`${PRACTICE.doctorNameWithCredentials} — home`}
    >
      <span
        className={cn(
          "flex shrink-0 items-center rounded-[4px]",
          // The mark is dark ink on white, so on the dark footer it sits on a
          // white chip rather than being inverted into a solid block.
          tone === "light" && "bg-white px-2.5 py-1.5",
        )}
      >
        <Image
          src="/images/logo/saudia-mushkbar-logo.png"
          alt="The Toledo Clinic"
          width={200}
          height={78}
          priority
          className="h-8 w-auto sm:h-9"
        />
      </span>
      <span
        className={cn(
          "hidden min-w-0 border-l pl-3.5 leading-tight sm:block",
          tone === "light" ? "border-white/25" : "border-hairline",
        )}
      >
        <span
          className={cn(
            "block font-display text-[1.0625rem] tracking-tight",
            tone === "light" ? "text-white" : "text-brand",
          )}
        >
          {PRACTICE.doctorNameWithCredentials}
        </span>
        <span
          className={cn(
            "block font-mono text-[0.625rem] uppercase tracking-[0.13em]",
            tone === "light" ? "text-white/65" : "text-brand-500",
          )}
        >
          {PRACTICE.tagline}
        </span>
      </span>
    </Link>
  );
}
