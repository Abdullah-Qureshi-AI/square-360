"use client";

import { HTMLAttributes, forwardRef, useRef } from "react";
import { motion, useInView, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { easings, durations, staggerContainer, fadeInUp } from "@/lib/motion";

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  variant?: "default" | "dark" | "yellow" | "gray";
  container?: boolean;
  animate?: boolean;
  stagger?: boolean;
  size?: "sm" | "md" | "lg";
}

// Section entrance animation
const sectionEntrance = {
  hidden: { 
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    },
  },
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    variant = "default", 
    container = true, 
    animate = false,
    stagger = false,
    size = "md",
    children, 
    ...props 
  }, ref) => {
    const internalRef = useRef<HTMLElement>(null);
    const sectionRef = (ref as React.RefObject<HTMLElement>) || internalRef;
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    const variants = {
      default: "bg-white",
      dark: "bg-[var(--color-secondary)] text-white",
      yellow: "bg-[var(--color-primary)] text-[var(--color-secondary)]",
      gray: "bg-[var(--color-gray-50)]",
    };

    const sizeClasses = {
      sm: "section-py-sm",
      md: "section-py-md",
      lg: "section-py-lg",
    };

    const baseClasses = cn(
      variants[variant],
      sizeClasses[size],
      className
    );

    const contentClasses = cn(
      container && "container-custom"
    );

    if (animate || stagger) {
      return (
        <motion.section
          ref={sectionRef as React.RefObject<HTMLElement>}
          className={baseClasses}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={stagger ? staggerContainer : sectionEntrance}
          {...(props as HTMLMotionProps<"section">)}
        >
          {container ? (
            <div className={contentClasses}>
              {stagger ? (
                // Wrap children in stagger-aware context
                children
              ) : (
                children
              )}
            </div>
          ) : (
            children
          )}
        </motion.section>
      );
    }

    return (
      <section
        ref={sectionRef}
        className={baseClasses}
        {...props}
      >
        {container ? (
          <div className={contentClasses}>{children}</div>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = "Section";

// Section Header component for consistent section titles
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  animate?: boolean;
  dark?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  animate = true,
  dark = false,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const alignClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  const content = (
    <div 
      ref={ref}
      className={cn("mb-12 sm:mb-16 max-w-3xl", alignClasses[align])}
    >
      {subtitle && (
        <motion.p 
          className={cn(
            "text-sm sm:text-base font-semibold uppercase tracking-[0.15em] mb-4",
            dark ? "text-[var(--color-primary)]" : "text-[var(--color-gray-500)]"
          )}
          initial={animate ? { opacity: 0, y: 20 } : undefined}
          animate={animate && isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: durations.slow, ease: easings.elegant }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2 
        className={cn(
          "text-[var(--text-4xl)] sm:text-[var(--text-5xl)] font-bold mb-6 leading-tight",
          dark ? "text-white" : "text-[var(--color-secondary)]"
        )}
        initial={animate ? { opacity: 0, y: 30 } : undefined}
        animate={animate && isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: durations.slow, ease: easings.elegant, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          className={cn(
            "text-lg sm:text-xl leading-relaxed",
            dark ? "text-[var(--color-gray-300)]" : "text-[var(--color-gray-600)]"
          )}
          initial={animate ? { opacity: 0, y: 20 } : undefined}
          animate={animate && isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: durations.slow, ease: easings.elegant, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );

  return content;
}

// Section Divider with animation
export function SectionDivider({ 
  className,
  variant = "primary" 
}: { 
  className?: string;
  variant?: "primary" | "dark" | "light";
}) {
  const variants = {
    primary: "bg-[var(--color-primary)]",
    dark: "bg-[var(--color-secondary)]",
    light: "bg-[var(--color-gray-200)]",
  };

  return (
    <motion.div
      className={cn("h-1 w-24", variants[variant], className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: durations.slow, ease: easings.elegant }}
      style={{ transformOrigin: "left" }}
    />
  );
}

// Animated Section Item for use within stagger containers
export function SectionItem({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <motion.div 
      className={className}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
}
