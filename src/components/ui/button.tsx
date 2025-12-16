import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        fashion:
          "bg-foreground text-background tracking-[0.2em] uppercase text-xs py-4 px-8 hover:bg-foreground/90 transition-all duration-500",
        "fashion-outline":
          "bg-transparent border border-foreground text-foreground tracking-[0.2em] uppercase text-xs py-4 px-8 hover:bg-foreground hover:text-background transition-all duration-500",
        "fashion-white":
          "bg-background text-foreground tracking-[0.2em] uppercase text-xs py-4 px-8 hover:bg-background/90 transition-all duration-500",
        "fashion-white-outline":
          "bg-transparent border border-background text-background tracking-[0.2em] uppercase text-xs py-4 px-8 hover:bg-background hover:text-foreground transition-all duration-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        xl: "h-14 px-12 text-base",
        icon: "h-10 w-10",
        fashion: "h-auto py-4 px-8",
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
