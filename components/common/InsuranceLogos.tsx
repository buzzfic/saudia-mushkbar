import Image from "next/image";

import { insurancePlans } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * The Medicare Advantage plan logo row from the hero and the Medicare page.
 * Logos are the plans' own marks and are used only to identify the plans the
 * practice participates with, exactly as the original site does.
 */
export function InsuranceLogos({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <ul
      className={cn(
        "grid grid-cols-2 items-center gap-x-4 gap-y-7 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-6",
        className,
      )}
    >
      {insurancePlans.map((plan, index) => (
        <li key={plan.name} className="flex items-center justify-center">
          <Image
            src={plan.logo}
            alt={`${plan.name} logo`}
            width={plan.width}
            height={plan.height}
            sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 150px"
            priority={priority && index < 3}
            className="h-7 w-auto max-w-[7.5rem] object-contain sm:h-9 sm:max-w-[9rem]"
          />
        </li>
      ))}
    </ul>
  );
}
