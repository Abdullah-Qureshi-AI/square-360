"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easings, durations } from "@/lib/motion";

const navItems = [
  { href: "/real-estate", label: "Home" },
  { href: "/real-estate/properties", label: "Properties" },
  { href: "/real-estate/services", label: "Services" },
  { href: "/real-estate/about", label: "About" },
  { href: "/real-estate/contact", label: "Contact" },
];

// Animation variants
const navContainerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
};

const logoVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: durations.slow,
      ease: easings.elegant,
    },
  },
};

export function RealEstateNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-secondary)]/95 backdrop-blur-md shadow-lg"
          : "bg-[var(--color-secondary)]"
      }`}
      initial="hidden"
      animate="visible"
      variants={navContainerVariants}
    >
      {/* Accent border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-primary)]" />

      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div variants={logoVariants}>
            <Link
              href="/real-estate"
              className="flex items-center space-x-3 group"
            >
              <span className="text-xl sm:text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                Square Three Sixty
              </span>
              <span className="text-[var(--color-primary)] text-2xl font-light">|</span>
              <span className="text-[var(--color-primary)] font-semibold text-lg sm:text-xl">
                Real Estate
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex md:items-center md:space-x-1"
            variants={navContainerVariants}
          >
            {navItems.map((item, index) => (
              <motion.div key={item.href} variants={navItemVariants}>
                <Link
                  href={item.href}
                  className={`relative px-4 py-2.5 text-sm font-semibold transition-all duration-300 rounded-lg overflow-hidden ${
                    pathname === item.href
                      ? "bg-[var(--color-primary)] text-[var(--color-secondary)]"
                      : "text-white hover:text-[var(--color-primary)]"
                  }`}
                >
                  {item.label}
                  {/* Hover underline effect for non-active items */}
                  {pathname !== item.href && (
                    <motion.span
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-[var(--color-primary)]"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: durations.fast, ease: easings.smooth }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-[var(--color-primary)] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-6 h-5">
              <motion.span
                className="absolute left-0 w-6 h-0.5 bg-current rounded-full"
                animate={{
                  top: mobileMenuOpen ? "50%" : "0%",
                  rotate: mobileMenuOpen ? 45 : 0,
                  translateY: mobileMenuOpen ? "-50%" : "0%",
                }}
                transition={{ duration: durations.fast }}
              />
              <motion.span
                className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-current rounded-full"
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                  scaleX: mobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: durations.fast }}
              />
              <motion.span
                className="absolute left-0 w-6 h-0.5 bg-current rounded-full"
                animate={{
                  bottom: mobileMenuOpen ? "50%" : "0%",
                  rotate: mobileMenuOpen ? -45 : 0,
                  translateY: mobileMenuOpen ? "50%" : "0%",
                }}
                transition={{ duration: durations.fast }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="border-t border-white/10 py-6 md:hidden overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
            >
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <motion.div key={item.href} variants={mobileItemVariants}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                        pathname === item.href
                          ? "bg-[var(--color-primary)] text-[var(--color-secondary)]"
                          : "text-white hover:text-[var(--color-primary)] hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
