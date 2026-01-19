"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/real-estate", label: "Home" },
  { href: "/real-estate/properties", label: "Properties" },
  { href: "/real-estate/services", label: "Services" },
  { href: "/real-estate/about", label: "About" },
  { href: "/real-estate/contact", label: "Contact" },
];

export function RealEstateNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b-4 border-[#FFD700] bg-black shadow-lg sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/real-estate"
            className="flex items-center space-x-3 text-xl font-bold text-white hover:text-[#FFD700] transition-colors"
          >
            <span className="text-2xl">Square Three Sixty</span>
            <span className="text-[#FFD700]">|</span>
            <span className="text-[#FFD700]">Real Estate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold transition-colors rounded-lg ${
                  pathname === item.href
                    ? "bg-[#FFD700] text-black"
                    : "text-white hover:text-[#FFD700] hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white hover:text-[#FFD700] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-white/20 py-4 md:hidden">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 text-base font-semibold rounded-lg transition-colors ${
                    pathname === item.href
                      ? "bg-[#FFD700] text-black"
                      : "text-white hover:text-[#FFD700] hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
