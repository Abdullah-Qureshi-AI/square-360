"use client";

import { HTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { easings, durations } from "@/lib/motion";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined" | "dark";
  hover?: boolean;
  animate?: boolean;
}

// Card hover animation variants
const cardMotion = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "var(--shadow-card)",
  },
  hover: {
    y: -12,
    scale: 1.02,
    boxShadow: "var(--shadow-card-hover)",
    transition: {
      duration: durations.slow,
      ease: easings.elegant,
    },
  },
};

// Card entrance animation for scroll reveal
const cardEntrance = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.elegant,
    },
  },
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = false, animate = false, children, ...props }, ref) => {
    const variants = {
      default: "bg-white",
      elevated: "bg-white shadow-[var(--shadow-card)] border border-[var(--color-gray-100)]",
      outlined: "bg-white border-2 border-[var(--color-secondary)]/10",
      dark: "bg-[var(--color-secondary)] text-white shadow-[var(--shadow-elevated)]",
    };

    const baseStyles = cn(
      "rounded-[var(--radius-xl)] overflow-hidden",
      "transition-all duration-[var(--duration-slow)] ease-[var(--ease-elegant)]",
      variants[variant],
      className
    );

    if (hover) {
      return (
        <motion.div
          ref={ref}
          className={baseStyles}
          initial="rest"
          whileHover="hover"
          variants={cardMotion}
          {...(props as HTMLMotionProps<"div">)}
        >
          {children}
        </motion.div>
      );
    }

    if (animate) {
      return (
        <motion.div
          ref={ref}
          className={baseStyles}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardEntrance}
          {...(props as HTMLMotionProps<"div">)}
        >
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={baseStyles} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

// Card Image with zoom effect
export function CardImage({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden card-image-zoom", className)}>
      {children}
    </div>
  );
}

// Card Content wrapper
export function CardContent({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <div className={cn("p-6 sm:p-8", className)}>
      {children}
    </div>
  );
}

// Card Title
export function CardTitle({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <h3 className={cn(
      "text-xl sm:text-2xl font-bold text-[var(--color-secondary)] mb-3",
      className
    )}>
      {children}
    </h3>
  );
}

// Card Description
export function CardDescription({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <p className={cn(
      "text-[var(--color-gray-600)] leading-relaxed",
      className
    )}>
      {children}
    </p>
  );
}

// Card Badge
export function CardBadge({ 
  children, 
  className,
  variant = "primary"
}: { 
  children: React.ReactNode; 
  className?: string;
  variant?: "primary" | "dark";
}) {
  const badgeVariants = {
    primary: "bg-[var(--color-primary)] text-[var(--color-secondary)]",
    dark: "bg-[var(--color-secondary)] text-white",
  };

  return (
    <span className={cn(
      "inline-block px-4 py-1.5 rounded-full text-sm font-semibold",
      badgeVariants[variant],
      className
    )}>
      {children}
    </span>
  );
}

// Card Footer with accent border
export function CardFooter({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <div className={cn(
      "pt-4 mt-4 border-t border-[var(--color-gray-200)]",
      className
    )}>
      {children}
    </div>
  );
}
