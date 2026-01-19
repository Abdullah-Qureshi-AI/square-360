"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { CategorySelector } from "@/components/landing/CategorySelector";
import { Button } from "@/components/ui/Button";
import { easings, durations } from "@/lib/motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    clipPath: "inset(100% 0% 0% 0%)",
  },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.9,
      ease: easings.elegant,
    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    },
  },
};

const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: durations.slower,
      ease: easings.elegant,
    },
  },
};

const sectionTitleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.elegant,
    },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.smooth,
    },
  },
};

export default function HomePage() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section - Cinematic Brand Introduction */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[var(--color-secondary)] overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        {/* Animated accent lines */}
        <motion.div 
          className="absolute top-0 left-0 w-1 h-full bg-[var(--color-primary)]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, ease: easings.elegant, delay: 0.5 }}
          style={{ transformOrigin: "top" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-1 h-1/2 bg-[var(--color-primary)]"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, ease: easings.elegant, delay: 0.8 }}
          style={{ transformOrigin: "bottom" }}
        />

        {/* Content */}
        <motion.div 
          className="relative z-10 container-custom text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Subtitle */}
          <motion.p 
            className="text-[var(--color-primary)] text-sm sm:text-base font-semibold uppercase tracking-[0.25em] mb-8"
            variants={subtitleVariants}
          >
            Premium Services
          </motion.p>

          {/* Main Title */}
          <motion.h1 
            className="text-white text-[var(--text-6xl)] sm:text-[var(--text-7xl)] font-extrabold mb-8 leading-[1.05] tracking-tight"
            variants={titleVariants}
          >
            Square Three Sixty
          </motion.h1>

          {/* Animated divider */}
          <motion.div 
            className="w-32 h-1 bg-[var(--color-primary)] mx-auto mb-10"
            variants={dividerVariants}
            style={{ transformOrigin: "center" }}
          />

          {/* Description */}
          <motion.p 
            className="text-[var(--color-gray-300)] text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed"
            variants={descriptionVariants}
          >
            Excellence in Real Estate, Construction, and Travel Experiences. 
            <span className="block mt-2 text-white/90">
              Your trusted partner for premium services.
            </span>
          </motion.p>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: durations.slow }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <div className="w-1 h-2 bg-[var(--color-primary)] rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom accent bar */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-primary)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: easings.elegant, delay: 0.6 }}
          style={{ transformOrigin: "left" }}
        />
      </section>

      {/* Category Selection Section */}
      <section 
        ref={sectionRef}
        className="section-py-lg bg-[var(--color-gray-50)]"
      >
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16 sm:mb-20"
            initial="hidden"
            animate={isSectionInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.p 
              className="text-[var(--color-gray-500)] text-sm sm:text-base font-semibold uppercase tracking-[0.15em] mb-4"
              variants={subtitleVariants}
            >
              Our Services
            </motion.p>
            <motion.h2 
              className="text-[var(--color-secondary)] text-[var(--text-4xl)] sm:text-[var(--text-5xl)] font-bold mb-6 leading-tight"
              variants={sectionTitleVariants}
            >
              Choose Your Path
            </motion.h2>
            <motion.p 
              className="text-[var(--color-gray-600)] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
              variants={descriptionVariants}
            >
              Select a category to explore our premium services tailored to your needs
            </motion.p>
          </motion.div>

          <CategorySelector />
        </div>
      </section>

      {/* Footer CTA Section */}
      <section 
        ref={ctaRef}
        className="section-py-md bg-[var(--color-secondary)] relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-primary)]/5 to-transparent" />
        <motion.div 
          className="absolute top-1/2 -translate-y-1/2 -right-20 w-40 h-40 border-2 border-[var(--color-primary)]/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate={isCtaInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3 
              className="text-white text-[var(--text-3xl)] sm:text-[var(--text-4xl)] font-bold mb-6"
              variants={sectionTitleVariants}
            >
              Ready to Get Started?
            </motion.h3>
            <motion.p 
              className="text-[var(--color-gray-300)] text-lg sm:text-xl mb-10 leading-relaxed"
              variants={descriptionVariants}
            >
              Contact us today to discover how we can help you achieve your goals
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={ctaVariants}
            >
              <Button
                asChild
                href="/real-estate/contact"
                variant="primary"
                size="lg"
                className="min-w-[200px]"
              >
                Real Estate Contact
              </Button>
              <Button
                asChild
                href="/travel-tours/contact"
                variant="outline"
                size="lg"
                className="min-w-[200px] border-white text-white hover:bg-white hover:text-[var(--color-secondary)]"
              >
                Travel Contact
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom accent bar */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-primary)]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: easings.elegant }}
          style={{ transformOrigin: "right" }}
        />
      </section>
    </main>
  );
}
