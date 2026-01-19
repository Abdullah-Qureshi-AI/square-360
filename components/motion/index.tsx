"use client";

// ============================================
// MOTION COMPONENTS - Reusable Animation Wrappers
// ============================================
// Pre-configured motion components for consistent animations

import { motion, HTMLMotionProps, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  scaleInUp,
  staggerContainer,
  staggerContainerSlow,
  cardHover,
  buttonHover,
  heroTitle,
  heroSubtitle,
  heroDescription,
  heroCTA,
  scrollRevealConfig,
  durations,
  easings,
} from "@/lib/motion";

// ============================================
// BASE MOTION DIV
// ============================================

export function MotionDiv({
  children,
  className,
  ...props
}: HTMLMotionProps<"div"> & { children: ReactNode }) {
  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}

// ============================================
// FADE IN COMPONENTS
// ============================================

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
  amount?: number;
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration,
  direction = "up",
  once = true,
  amount = 0.2,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const variants = {
    up: fadeInUp,
    down: fadeInDown,
    left: fadeInLeft,
    right: fadeInRight,
    none: fadeIn,
  };

  const selectedVariant = variants[direction];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={selectedVariant}
      className={className}
      transition={{
        duration: duration || durations.slow,
        ease: easings.elegant,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// SCALE IN COMPONENT
// ============================================

interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  withTranslate?: boolean;
}

export function ScaleIn({
  children,
  className,
  delay = 0,
  once = true,
  withTranslate = false,
}: ScaleInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={withTranslate ? scaleInUp : scaleIn}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// STAGGER CONTAINER
// ============================================

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  slow?: boolean;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
  slow = false,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={slow ? staggerContainerSlow : staggerContainer}
      className={className}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// STAGGER ITEM
// ============================================

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div variants={fadeInUp} className={className}>
      {children}
    </motion.div>
  );
}

// ============================================
// HOVER CARD WRAPPER
// ============================================

interface HoverCardProps {
  children: ReactNode;
  className?: string;
}

export function HoverCard({ children, className }: HoverCardProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      variants={cardHover}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// HOVER BUTTON WRAPPER
// ============================================

interface HoverButtonProps {
  children: ReactNode;
  className?: string;
}

export function HoverButton({ children, className }: HoverButtonProps) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonHover}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// HERO ANIMATION COMPONENTS
// ============================================

interface HeroAnimationProps {
  children: ReactNode;
  className?: string;
}

export function HeroTitleAnimation({ children, className }: HeroAnimationProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={heroTitle}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroSubtitleAnimation({ children, className }: HeroAnimationProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={heroSubtitle}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroDescriptionAnimation({ children, className }: HeroAnimationProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={heroDescription}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function HeroCTAAnimation({ children, className }: HeroAnimationProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={heroCTA}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// PARALLAX COMPONENT
// ============================================

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  offset?: number;
}

export function Parallax({ children, className, offset = 50 }: ParallaxProps) {
  return (
    <motion.div
      className={className}
      initial={{ y: offset }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: durations.slower,
        ease: easings.elegant,
      }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// TEXT REVEAL COMPONENT
// ============================================

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20, clipPath: "inset(100% 0% 0% 0%)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }
          : { opacity: 0, y: 20, clipPath: "inset(100% 0% 0% 0%)" }
      }
      transition={{
        duration: durations.slow,
        ease: easings.elegant,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// IMAGE REVEAL COMPONENT
// ============================================

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ImageReveal({ children, className, delay = 0 }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={
        isInView
          ? { opacity: 1, scale: 1 }
          : { opacity: 0, scale: 1.05 }
      }
      transition={{
        duration: durations.slower,
        ease: easings.elegant,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================

export function ScrollProgress({ className }: { className?: string }) {
  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-[#FFD700] origin-left z-[100] ${className}`}
      style={{
        scaleX: 0,
      }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
    />
  );
}

