import Image from "next/image";

import { insurancePlans } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * The Medicare Advantage plan logo row from the hero and the Medicare page.
 * Logos are the plans' own marks and are used only to identify the plans the
 * practice participates with, exactly as the original site does.
 *
 * Each mark gets its own rendered height rather than a shared one. These are
 * different kinds of lockup — Humana is a single word that fills its artwork,
 * while MediGold and UnitedHealthcare are an icon stacked above two lines of
 * small type. Sizing them all to the same height leaves the stacked marks'
 * lettering half the size of the wordmarks', so each is sized until its
 * lettering reads at about the same size. See `displayHeight` in
 * lib/content.ts. A shared width cap keeps the widest wordmarks in their cell.
 */
export function InsuranceLogos({
  className,
  priority = false,
  showOthers = false,
}: {
  className?: string;
  priority?: boolean;
  /** Appends a "+ Others" item to the end of the row. */
  showOthers?: boolean;
}) {
  return (
    <ul
      className={cn(
        "grid grid-cols-2 items-center gap-x-4 gap-y-6 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6",
        className,
      )}
    >
      {insurancePlans.map((plan, index) => (
        <li key={plan.name} className="flex h-14 items-center justify-center">
          <Image
            src={plan.logo}
            alt={`${plan.name} logo`}
            width={plan.width}
            height={plan.height}
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 160px"
            priority={priority && index < 3}
            style={{ height: `${plan.displayHeight}px` }}
            className="w-auto max-w-[7.5rem] object-contain sm:max-w-[9.5rem]"
          />
        </li>
      ))}

      {showOthers ? (
        <li className="flex h-14 items-center justify-center">
          <span className="font-display text-lg text-brand">+ Others</span>
        </li>
      ) : null}
    </ul>
  );
}
