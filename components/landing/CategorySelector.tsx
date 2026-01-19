"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { easings, durations } from "@/lib/motion";

// Animation variants for cinematic entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.slower,
      ease: easings.elegant,
    },
  },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.08,
    transition: {
      duration: durations.slow,
      ease: easings.elegant,
    },
  },
};

const overlayVariants = {
  rest: { opacity: 0.85 },
  hover: {
    opacity: 0.7,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
};

const contentVariants = {
  rest: { y: 0 },
  hover: {
    y: -8,
    transition: {
      duration: durations.normal,
      ease: easings.elegant,
    },
  },
};

const arrowVariants = {
  rest: { x: 0, opacity: 0.8 },
  hover: {
    x: 8,
    opacity: 1,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
};

const accentBarVariants = {
  rest: { scaleX: 0.3 },
  hover: {
    scaleX: 1,
    transition: {
      duration: durations.normal,
      ease: easings.elegant,
    },
  },
};

const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: durations.normal,
      ease: easings.elegant,
    },
  },
};

export function CategorySelector() {
  const [hovered, setHovered] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    {
      id: "real-estate",
      title: "Real Estate & Construction",
      subtitle: "Building Excellence",
      description: "Professional real estate and construction services for your property needs",
      href: "/real-estate",
      gradient: "from-[var(--color-secondary)] via-[var(--color-secondary-soft)] to-[var(--color-secondary-muted)]",
      textColor: "text-white",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      imageAlt: "Modern building construction",
    },
    {
      id: "travel",
      title: "Travel & Tours",
      subtitle: "Discover the World",
      description: "Curated travel experiences and unforgettable destinations",
      href: "/travel-tours",
      gradient: "from-[var(--color-primary)] via-[var(--color-primary)] to-[var(--color-primary-hover)]",
      textColor: "text-[var(--color-secondary)]",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      imageAlt: "Beautiful travel destination",
    },
  ];

  return (
    <motion.div 
      ref={ref}
      className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:gap-12 max-w-6xl mx-auto"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {categories.map((category) => (
        <motion.div
          key={category.id}
          variants={cardVariants}
        >
          <Link
            href={category.href}
            className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-4 rounded-[var(--radius-2xl)]"
            onMouseEnter={() => setHovered(category.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <motion.div
              className="relative h-full overflow-hidden rounded-[var(--radius-2xl)] border-2 border-[var(--color-secondary)]/10"
              initial="rest"
              whileHover="hover"
              animate={hovered === category.id ? "hover" : "rest"}
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <motion.div
                  className="absolute inset-0"
                  variants={imageVariants}
                >
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </motion.div>
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`}
                  variants={overlayVariants}
                />
              </div>

              {/* Content */}
              <motion.div 
                className={`relative z-10 p-8 sm:p-10 lg:p-12 min-h-[480px] sm:min-h-[520px] flex flex-col justify-between ${category.textColor}`}
                variants={contentVariants}
              >
                <div>
                  {/* Icon placeholder - using subtle geometric shape */}
                  <motion.div 
                    className={`mb-8 w-16 h-16 rounded-[var(--radius-xl)] flex items-center justify-center ${
                      category.id === "real-estate" 
                        ? "bg-[var(--color-primary)]" 
                        : "bg-[var(--color-secondary)]"
                    }`}
                    variants={iconVariants}
                  >
                    {category.id === "real-estate" ? (
                      <svg className="w-8 h-8 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    ) : (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </motion.div>

                  {/* Subtitle */}
                  <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.15em] mb-4 opacity-80">
                    {category.subtitle}
                  </p>

                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1] tracking-tight">
                    {category.title}
                  </h2>

                  {/* Description */}
                  <p className="text-base sm:text-lg opacity-90 leading-relaxed max-w-md">
                    {category.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-10">
                  <motion.div 
                    className="inline-flex items-center font-semibold text-lg"
                    variants={arrowVariants}
                  >
                    <span className="mr-3">Explore</span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Accent Bar */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1.5 ${
                    category.id === "real-estate" 
                      ? "bg-[var(--color-primary)]" 
                      : "bg-[var(--color-secondary)]"
                  }`}
                  variants={accentBarVariants}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
