import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Button styles follow the original site: solid peach and solid teal pills with
 * a 4px radius, plus outline and quiet variants for secondary actions.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[4px] font-sans font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-brand hover:bg-brand hover:text-white active:bg-brand-700",
        brand:
          "bg-brand text-white hover:bg-brand-700 active:bg-brand-800",
        alert:
          "bg-alert text-white hover:bg-[#c8181c] active:bg-[#ab1417]",
        berry:
          "bg-berry text-white hover:bg-[#a51555] active:bg-[#8c1147]",
        navy:
          "bg-navy text-white hover:bg-[#0a4a72] active:bg-[#052a42]",
        indigo:
          "bg-indigo text-white hover:bg-[#33188a] active:bg-[#1c0c4d]",
        pink:
          "bg-pink-strong text-white hover:bg-[#ad376f] active:bg-[#95305f]",
        violet:
          "bg-violet text-white hover:bg-[#2b0fbd] active:bg-[#17086a]",
        forest:
          "bg-forest text-white hover:bg-[#1d7454] active:bg-[#104330]",
        rose:
          "bg-rose text-white hover:bg-[#9d3d60] active:bg-[#843351]",
        crimson:
          "bg-crimson text-white hover:bg-[#c00848] active:bg-[#a2073d]",
        ultramarine:
          "bg-ultramarine text-white hover:bg-[#3d34bd] active:bg-[#241e70]",
        cobalt:
          "bg-cobalt text-white hover:bg-[#04509f] active:bg-[#022c62]",
        sky:
          "bg-sky-strong text-white hover:bg-[#2579bd] active:bg-[#195586]",
        outline:
          "border border-brand/30 bg-transparent text-brand hover:border-brand hover:bg-brand hover:text-white",
        "outline-light":
          "border border-white/50 bg-transparent text-white hover:bg-white hover:text-brand",
        ghost: "text-brand hover:bg-brand-50",
        link: "text-brand underline underline-offset-4 hover:text-brand-500",
      },
      size: {
        sm: "h-10 px-3.5 text-sm sm:px-4",
        md: "h-12 px-4 text-[0.9375rem] sm:px-6",
        lg: "h-[3.25rem] px-5 text-[0.9375rem] sm:px-8 sm:text-base",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export type { ButtonProps };
