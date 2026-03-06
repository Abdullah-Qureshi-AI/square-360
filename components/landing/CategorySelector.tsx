"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building2, Compass } from "lucide-react";
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
    scale: 1.05,
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
      duration: durations.slow,
      ease: easings.elegant,
    },
  },
};

const contentVariants = {
  rest: { y: 0 },
  hover: {
    y: -4,
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
    scale: 1.15,
    rotate: 0,
    transition: {
      duration: durations.normal,
      ease: easings.elegant,
    },
  },
};

const cardHoverVariants = {
  rest: { 
    y: 0,
    boxShadow: "0 2px 8px -2px rgba(0, 0, 0, 0.06), 0 4px 16px -4px rgba(0, 0, 0, 0.08)",
  },
  hover: {
    y: -6,
    boxShadow: "0 8px 24px -4px rgba(0, 0, 0, 0.12), 0 16px 48px -8px rgba(0, 0, 0, 0.16)",
    transition: {
      duration: durations.slow,
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
      gradient: "from-slate-900/95 via-slate-800/95 to-slate-900/95",
      textColor: "text-white",
      iconBg: "bg-amber-500",
      iconColor: "text-slate-900",
      borderColor: "border-amber-500/30",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      imageAlt: "Modern building construction",
    },
    {
      id: "travel",
      title: "Travel & Tours",
      subtitle: "Discover the World",
      description: "Curated travel experiences and unforgettable destinations",
      href: "/travel-tours",
      gradient: "from-amber-500/95 via-amber-500/95 to-amber-600/95",
      textColor: "text-slate-900",
      iconBg: "bg-slate-900",
      iconColor: "text-amber-500",
      borderColor: "border-slate-900/30",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      imageAlt: "Beautiful travel destination",
    },
  ];

  return (
    <motion.div 
      ref={ref}
      className="grid gap-6 sm:grid-cols-2 sm:gap-8 max-w-5xl mx-auto"
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
            className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-4 rounded-sm"
            onMouseEnter={() => setHovered(category.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <motion.div
              className="relative h-full overflow-hidden rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm"
              initial="rest"
              whileHover="hover"
              animate={hovered === category.id ? "hover" : "rest"}
              variants={cardHoverVariants}
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
                {/* Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`}
                  variants={overlayVariants}
                />
                {/* Additional dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <motion.div 
                className={`relative z-10 p-6 sm:p-8 min-h-[420px] sm:min-h-[460px] flex flex-col justify-between ${category.textColor}`}
                variants={contentVariants}
              >
                <div>
                  {/* Icon */}
                  <motion.div 
                    className={`mb-6 w-12 h-12 rounded-lg ${category.iconBg} flex items-center justify-center shadow-lg`}
                    variants={iconVariants}
                  >
                    {category.id === "real-estate" ? (
                      <Building2 className={`w-6 h-6 ${category.iconColor}`} strokeWidth={2} />
                    ) : (
                      <Compass className={`w-6 h-6 ${category.iconColor}`} strokeWidth={2} />
                    )}
                  </motion.div>

                  {/* Subtitle */}
                  <p className={`text-xs font-medium uppercase tracking-[0.2em] mb-3 ${
                    category.id === "real-estate" 
                      ? "text-amber-500" 
                      : "text-slate-700"
                  }`}>
                    {category.subtitle}
                  </p>

                  {/* Title */}
                  <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-light mb-4 leading-tight tracking-tight ${
                    category.id === "real-estate" 
                      ? "text-white" 
                      : "text-slate-900"
                  }`}>
                    {category.title}
                  </h2>

                  {/* Description */}
                  <p className={`text-sm sm:text-base leading-relaxed max-w-sm font-light ${
                    category.id === "real-estate" 
                      ? "text-slate-300" 
                      : "text-slate-700"
                  }`}>
                    {category.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-5 border-t border-white/10">
                  <motion.div 
                    className={`inline-flex items-center font-medium text-sm ${
                      category.id === "real-estate" 
                        ? "text-white" 
                        : "text-slate-900"
                    }`}
                    variants={arrowVariants}
                  >
                    <span className="mr-2">Explore</span>
                    <svg
                      className="w-4 h-4"
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
                  className={`absolute bottom-0 left-0 right-0 h-[2px] ${
                    category.id === "real-estate" 
                      ? "bg-amber-500" 
                      : "bg-slate-900"
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
