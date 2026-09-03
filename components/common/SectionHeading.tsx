import * as React from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Small mono label above the heading, as used across the original site. */
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Heading level — pick the one the document outline needs, not the size. */
  as?: "h2" | "h3";
  align?: "left" | "center";
  size?: "lg" | "md";
  className?: string;
  /** Renders the short accent rule under the heading, as in the layouts. */
  rule?: boolean;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Tag = "h2",
  align = "left",
  size = "lg",
  className,
  rule = false,
  id,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="font-mono text-eyebrow uppercase tracking-[0.14em] text-gold">
          {eyebrow}
        </p>
      ) : null}

      <Tag
        id={id}
        className={cn(
          size === "lg" ? "text-display-2" : "text-display-3",
          "max-w-[22ch] sm:max-w-[26ch]",
          centered && "mx-auto",
        )}
      >
        {title}
      </Tag>

      {rule ? (
        <span
          aria-hidden="true"
          className={cn("h-0.5 w-16 bg-accent", centered && "mx-auto")}
        />
      ) : null}

      {description ? (
        <p
          className={cn(
            "max-w-prose text-[1.0625rem] leading-relaxed text-body",
            centered && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
