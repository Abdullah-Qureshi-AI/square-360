"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Building2, Wrench, Info, Mail } from "lucide-react";

const navItems = [
  { href: "/real-estate", label: "Home", icon: Home },
  { href: "/real-estate/properties", label: "Properties", icon: Building2 },
  { href: "/real-estate/services", label: "Services", icon: Wrench },
  { href: "/real-estate/about", label: "About", icon: Info },
  { href: "/real-estate/contact", label: "Contact", icon: Mail },
];

// Refined animation variants
const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function RealEstateNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-slate-200/50"
          : "bg-white/80 backdrop-blur-md"
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/real-estate"
            className="group flex items-center gap-3 transition-transform hover:scale-[1.02]"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-light)] shadow-lg ring-2 ring-[var(--color-primary)]/20">
                <Building2 className="h-5 w-5 text-[var(--color-primary)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-[var(--color-secondary)] sm:text-xl">
                  Square Three Sixty
                </span>
                <span className="text-xs font-medium tracking-wider text-[var(--color-primary)]">
                  REAL ESTATE
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.href}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={item.href}
                    className={`group relative flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "text-[var(--color-secondary)]"
                        : "text-[var(--color-gray-600)] hover:text-[var(--color-secondary)]"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-lg bg-[var(--color-primary-light)]"
                        style={{ zIndex: -1 }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover effect */}
                    {!isActive && (
                      <div className="absolute inset-0 -z-10 rounded-lg bg-[var(--color-primary-light)]/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--color-secondary)] transition-colors hover:bg-[var(--color-primary-light)]/30 md:hidden"
            aria-label="Toggle menu"
          >
            <div className="relative h-5 w-6">
              <motion.span
                className="absolute left-0 h-0.5 w-6 rounded-full bg-[var(--color-secondary)]"
                animate={{
                  top: mobileMenuOpen ? "50%" : "20%",
                  rotate: mobileMenuOpen ? 45 : 0,
                  translateY: mobileMenuOpen ? "-50%" : "0%",
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded-full bg-[var(--color-secondary)]"
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                  scaleX: mobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="absolute left-0 h-0.5 w-6 rounded-full bg-[var(--color-secondary)]"
                animate={{
                  bottom: mobileMenuOpen ? "50%" : "20%",
                  rotate: mobileMenuOpen ? -45 : 0,
                  translateY: mobileMenuOpen ? "50%" : "0%",
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="border-t border-[var(--color-gray-200)]/50 pb-6 pt-4 md:hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all ${
                        isActive
                          ? "bg-[var(--color-primary-light)] text-[var(--color-secondary)]"
                          : "text-[var(--color-gray-600)] hover:bg-[var(--color-primary-light)]/30 hover:text-[var(--color-secondary)]"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.label}</span>
                      {isActive && (
                        <div className="ml-auto h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}