"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easings, durations } from "@/lib/motion";

const navItems = [
  { href: "/travel-tours", label: "Home" },
  { href: "/travel-tours/destinations", label: "Destinations" },
  { href: "/travel-tours/tours", label: "Tours" },
  { href: "/travel-tours/about", label: "About" },
  { href: "/travel-tours/contact", label: "Contact" },
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

export function TravelNav() {
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
          ? "bg-[var(--color-primary)]/95 backdrop-blur-md shadow-lg"
          : "bg-[var(--color-primary)]"
      }`}
      initial="hidden"
      animate="visible"
      variants={navContainerVariants}
    >
      {/* Accent border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-secondary)]" />

      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.div variants={logoVariants}>
            <Link
              href="/travel-tours"
              className="flex items-center space-x-3 group"
            >
              <span className="text-xl sm:text-2xl font-bold text-[var(--color-secondary)] transition-opacity duration-300 group-hover:opacity-80">
                Square Three Sixty
              </span>
              <span className="text-[var(--color-secondary)]/40 text-2xl font-light">|</span>
              <span className="text-[var(--color-secondary)] font-semibold text-lg sm:text-xl">
                Travel & Tours
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex md:items-center md:space-x-1"
            variants={navContainerVariants}
          >
            {navItems.map((item) => (
              <motion.div key={item.href} variants={navItemVariants}>
                <Link
                  href={item.href}
                  className={`relative px-4 py-2.5 text-sm font-semibold transition-all duration-300 rounded-lg overflow-hidden ${
                    pathname === item.href
                      ? "bg-[var(--color-secondary)] text-[var(--color-primary)]"
                      : "text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10"
                  }`}
                >
                  {item.label}
                  {/* Hover underline effect for non-active items */}
                  {pathname !== item.href && (
                    <motion.span
                      className="absolute bottom-1 left-4 right-4 h-0.5 bg-[var(--color-secondary)]"
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
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-[var(--color-secondary)] hover:opacity-70 transition-opacity"
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
              className="border-t border-[var(--color-secondary)]/10 py-6 md:hidden overflow-hidden"
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
                          ? "bg-[var(--color-secondary)] text-[var(--color-primary)]"
                          : "text-[var(--color-secondary)] hover:bg-[var(--color-secondary)]/10"
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
