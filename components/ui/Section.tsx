import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "dark" | "yellow";
  container?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", container = true, children, ...props }, ref) => {
    const variants = {
      default: "bg-white",
      dark: "bg-black text-white",
      yellow: "bg-[#FFD700] text-black",
    };

    return (
      <section
        ref={ref}
        className={cn(variants[variant], className)}
        {...props}
      >
        {container ? (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = "Section";

