"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { easings, durations } from "@/lib/motion";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
  href?: string;
}

// Button hover animation variants
const buttonMotion = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.02,
    transition: {
      duration: durations.fast,
      ease: easings.smooth,
    },
  },
  tap: { 
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, href, children, disabled, ...props }, ref) => {
    const baseStyles = cn(
      "relative inline-flex items-center justify-center font-semibold",
      "transition-all duration-[var(--duration-normal)] ease-[var(--ease-elegant)]",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      "overflow-hidden"
    );
    
    const variants = {
      primary: cn(
        "bg-[var(--color-primary)] text-[var(--color-secondary)]",
        "hover:bg-[var(--color-primary-hover)]",
        "focus-visible:ring-[var(--color-primary)]",
        "shadow-md hover:shadow-lg",
        "btn-shine" // Premium shine effect from globals.css
      ),
      secondary: cn(
        "bg-[var(--color-secondary)] text-white",
        "hover:bg-[var(--color-secondary-soft)]",
        "focus-visible:ring-[var(--color-secondary)]",
        "shadow-md hover:shadow-lg"
      ),
      outline: cn(
        "border-2 border-[var(--color-secondary)] text-[var(--color-secondary)]",
        "hover:bg-[var(--color-secondary)] hover:text-white",
        "focus-visible:ring-[var(--color-secondary)]"
      ),
      ghost: cn(
        "text-[var(--color-secondary)]",
        "hover:bg-[var(--color-primary-light)]",
        "focus-visible:ring-[var(--color-primary)]"
      ),
    };

    const sizes = {
      sm: "px-5 py-2.5 text-sm rounded-lg",
      md: "px-7 py-3.5 text-base rounded-xl",
      lg: "px-9 py-4.5 text-lg rounded-xl",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (asChild && href) {
      return (
        <motion.div
          initial="rest"
          whileHover={disabled ? "rest" : "hover"}
          whileTap={disabled ? "rest" : "tap"}
          variants={buttonMotion}
          className="inline-block"
        >
          <Link href={href} className={classes}>
            <span className="relative z-10">{children}</span>
          </Link>
        </motion.div>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        disabled={disabled}
        initial="rest"
        whileHover={disabled ? "rest" : "hover"}
        whileTap={disabled ? "rest" : "tap"}
        variants={buttonMotion}
        {...(props as object)}
      >
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";
