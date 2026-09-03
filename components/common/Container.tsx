import * as React from "react";

import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentProps<"div"> & {
  /** `wide` is the site-wide 1400px content width. */
  width?: "wide" | "default" | "narrow";
};

const widths = {
  wide: "max-w-[87.5rem]",
  default: "max-w-[76rem]",
  narrow: "max-w-[54rem]",
} as const;

export function Container({
  className,
  width = "wide",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", widths[width], className)}
      {...props}
    />
  );
}
