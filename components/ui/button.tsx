import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-xs font-semibold uppercase tracking-[0.08em] transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0",
  {
    variants: {
      variant: {
        default:
          "bg-accent text-foreground-inv shadow-[0_1px_2px_rgba(22,24,29,0.15)] hover:bg-accent-dark hover:shadow-[0_10px_24px_-8px_rgba(52,87,213,0.5)]",
        outline:
          "border border-foreground/25 bg-transparent text-foreground hover:border-foreground/60 hover:bg-foreground/5",
        "outline-inverse":
          "border border-foreground-inv/30 bg-transparent text-foreground-inv hover:border-foreground-inv/70 hover:bg-foreground-inv/5",
        ghost: "bg-transparent hover:bg-foreground/5",
        link: "normal-case tracking-normal text-accent-dark underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-[11px]",
        lg: "h-[52px] px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
