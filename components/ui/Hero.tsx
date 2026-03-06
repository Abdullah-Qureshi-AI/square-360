"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { easings, durations } from "@/lib/motion";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  variant?: "default" | "dark" | "yellow";
  className?: string;
  children?: ReactNode;
  backgroundImage?: string;
  imageAlt?: string;
  size?: "default" | "large" | "fullscreen";
}

// Animation variants for cinematic entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const subtitleVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.elegant,
    },
  },
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    clipPath: "inset(100% 0% 0% 0%)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: durations.slower,
      ease: easings.elegant,
    },
  },
};

const descriptionVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    },
  },
};

const ctaVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    },
  },
};

const imageVariants = {
  hidden: { 
    scale: 1.1, 
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 0.25,
    transition: {
      duration: 1.2,
      ease: easings.elegant,
    },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: durations.slower,
      ease: easings.smooth,
    },
  },
};

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  variant = "default",
  className,
  children,
  backgroundImage,
  imageAlt,
  size = "default",
}: HeroProps) {
  const variants = {
    default: "bg-white text-[var(--color-secondary)]",
    dark: "bg-[var(--color-secondary)] text-white",
    yellow: "bg-[var(--color-primary)] text-[var(--color-secondary)]",
  };

  const sizeClasses = {
    default: "min-h-[60vh]",
    large: "min-h-[75vh]",
    fullscreen: "min-h-screen",
  };

  const subtitleColors = {
    default: "text-[var(--color-gray-600)]",
    dark: "text-[var(--color-primary)]",
    yellow: "text-[var(--color-secondary)]/80",
  };

  const descriptionColors = {
    default: "text-[var(--color-gray-600)]",
    dark: "text-[var(--color-gray-300)]",
    yellow: "text-[var(--color-secondary)]/90",
  };

  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        sizeClasses[size],
        variants[variant],
        className
      )}
    >
      {/* Background Image with Cinematic Animation */}
      {backgroundImage && (
        <motion.div 
          className="absolute inset-0 z-0"
          initial="hidden"
          animate="visible"
          variants={overlayVariants}
        >
          <motion.div
            className="absolute inset-0"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <Image
              src={backgroundImage}
              alt={imageAlt || title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
          <motion.div 
            className={cn(
              "absolute inset-0",
              variant === "dark" ? "bg-gradient-to-b from-black/70 via-black/60 to-black/70" : "bg-gradient-to-b from-black/50 via-black/40 to-black/50"
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: durations.slow, delay: 0.3 }}
          />
          {/* Premium grain overlay */}
          <div className="absolute inset-0 grain-overlay opacity-50" />
        </motion.div>
      )}

      {/* Content Container */}
      <motion.div 
        className="relative z-10 container-custom py-20 sm:py-28 lg:py-32 text-center w-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Subtitle */}
        {subtitle && (
          <motion.p 
            className={cn(
              "text-sm sm:text-base font-semibold uppercase tracking-[0.2em] mb-6",
              subtitleColors[variant]
            )}
            variants={subtitleVariants}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Title */}
        <motion.h1 
          className="text-[var(--text-5xl)] sm:text-[var(--text-6xl)] lg:text-[var(--text-7xl)] font-extrabold mb-8 leading-[1.05] tracking-tighter"
          variants={titleVariants}
        >
          {title}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p 
            className={cn(
              "text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed",
              descriptionColors[variant]
            )}
            variants={descriptionVariants}
          >
            {description}
          </motion.p>
        )}

        {/* CTA Buttons */}
        {(primaryCTA || secondaryCTA) && (
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={ctaVariants}
          >
            {primaryCTA && (
              <Button
                asChild
                href={primaryCTA.href}
                variant="primary"
                size="lg"
                className="w-full sm:w-auto min-w-[200px]"
              >
                {primaryCTA.label}
              </Button>
            )}
            {secondaryCTA && (
              <Button
                asChild
                href={secondaryCTA.href}
                variant={variant === "dark" ? "outline" : "secondary"}
                size="lg"
                className={cn(
                  "w-full sm:w-auto min-w-[200px]",
                  variant === "dark" && "border-white text-white hover:bg-white hover:text-[var(--color-secondary)]"
                )}
              >
                {secondaryCTA.label}
              </Button>
            )}
          </motion.div>
        )}

        {/* Additional Children */}
        {children && (
          <motion.div 
            className="mt-12"
            variants={ctaVariants}
          >
            {children}
          </motion.div>
        )}
      </motion.div>

      {/* Bottom Accent Line */}
      <motion.div
        className={cn(
          "absolute bottom-0 left-0 right-0 h-1",
          variant === "dark" ? "bg-[var(--color-primary)]" : "bg-[var(--color-secondary)]"
        )}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ 
          duration: durations.slower, 
          ease: easings.elegant,
          delay: 0.8,
        }}
        style={{ transformOrigin: "left" }}
      />
    </section>
  );
}
