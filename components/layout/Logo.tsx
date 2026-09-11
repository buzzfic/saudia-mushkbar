import Image from "next/image";
import Link from "next/link";

import { PRACTICE } from "@/lib/constants";
import { cn } from "@/lib/utils";

/**
 * Brand lockup: The Toledo Clinic mark beside the practice name set in the
 * display face.
 *
 * The two halves link to different places, so they are siblings rather than
 * one nested link (an anchor inside an anchor is invalid HTML): the clinic
 * mark opens Dr. Mushkbar's profile on toledoclinic.com, and the name goes
 * home. Below `sm` the name is hidden for width, so the mark carries the home
 * link there instead and the drawer's "Home" item covers the rest.
 */
export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const mark = (
    <Image
      src="/images/logo/saudia-mushkbar-logo.png"
      alt="The Toledo Clinic"
      width={200}
      height={78}
      priority
      className="h-8 w-auto sm:h-9"
    />
  );

  const chip = cn(
    "flex shrink-0 items-center rounded-[4px] transition-opacity hover:opacity-80",
    // The mark is dark ink on white, so on the dark footer it sits on a white
    // chip rather than being inverted into a solid block.
    tone === "light" && "bg-white px-2.5 py-1.5",
  );

  return (
    <div className={cn("flex items-center gap-3.5", className)}>
      {/* Home on phones, where the name beside it is hidden. */}
      <Link href="/" className={cn(chip, "sm:hidden")} aria-label="Home">
        {mark}
      </Link>

      <a
        href={PRACTICE.affiliationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(chip, "hidden sm:flex")}
        aria-label={`${PRACTICE.doctorName} on The Toledo Clinic website (opens in a new tab)`}
      >
        {mark}
      </a>

      <Link
        href="/"
        className={cn(
          "hidden min-w-0 border-l pl-3.5 leading-tight transition-opacity hover:opacity-80 sm:block",
          tone === "light" ? "border-white/25" : "border-hairline",
        )}
        aria-label={`${PRACTICE.doctorNameWithCredentials} — home`}
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
      </Link>
    </div>
  );
}
