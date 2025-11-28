import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-brand-primary text-white hover:bg-brand-primary/90 shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40",
        destructive:
          "bg-red-500 text-white hover:bg-red-500/90 shadow-lg shadow-red-500/20",
        outline:
          "border border-border-subtle bg-transparent hover:bg-bg-soft text-text-primary hover:border-brand-primary/30",
        secondary:
          "bg-brand-accent text-brand-primary hover:bg-brand-accent/90 shadow-lg shadow-brand-accent/25 font-semibold",
        ghost: "hover:bg-bg-soft text-text-primary",
        link: "text-brand-primary underline-offset-4 hover:underline",
        glass: "glass-panel hover:bg-white/10 text-text-primary border-border-subtle hover:border-brand-primary/30",
        nebula: "bg-gradient-to-r from-brand-primary to-brand-xp text-white shadow-lg shadow-brand-primary/30 hover:shadow-brand-primary/50 border border-white/10",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
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
