import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex w-full border-0 border-b border-border-dark bg-transparent px-0 py-2 text-base text-foreground-inv sm:text-sm placeholder:text-muted-inv/70 focus-visible:outline-none focus-visible:border-accent focus-visible:shadow-[0_1px_0_0_#5EC4B6] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
