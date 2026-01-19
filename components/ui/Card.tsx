import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = false, children, ...props }, ref) => {
    const variants = {
      default: "bg-white",
      elevated: "bg-white shadow-lg",
      outlined: "bg-white border-2 border-black",
    };

    const hoverEffect = hover
      ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      : "";

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg overflow-hidden",
          variants[variant],
          hoverEffect,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

