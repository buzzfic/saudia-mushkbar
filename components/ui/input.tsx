import * as React from "react";

import { cn } from "@/lib/utils";

const fieldStyles =
  "w-full rounded-[4px] border border-hairline bg-white px-4 py-3 text-[0.9375rem] text-ink placeholder:text-body/50 transition-colors hover:border-brand/40 focus:border-brand focus:outline-none aria-[invalid=true]:border-alert";

function Input({ className, type = "text", ...props }: React.ComponentProps<"input">) {
  return <input type={type} className={cn(fieldStyles, className)} {...props} />;
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(fieldStyles, "min-h-32 resize-y", className)}
      {...props}
    />
  );
}

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn(
        "block text-sm font-medium text-brand",
        className,
      )}
      {...props}
    />
  );
}

export { Input, Textarea, Label };
