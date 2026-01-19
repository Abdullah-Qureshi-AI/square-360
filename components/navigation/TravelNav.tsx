"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/travel-tours", label: "Home" },
  { href: "/travel-tours/destinations", label: "Destinations" },
  { href: "/travel-tours/tours", label: "Tours" },
  { href: "/travel-tours/about", label: "About" },
  { href: "/travel-tours/contact", label: "Contact" },
];

export function TravelNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b-4 border-black bg-[#FFD700] shadow-lg sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/travel-tours"
            className="flex items-center space-x-3 text-xl font-bold text-black hover:opacity-80 transition-opacity"
          >
            <span className="text-2xl">Square Three Sixty</span>
            <span className="text-black/50">|</span>
            <span className="text-black">Travel & Tours</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-semibold transition-colors rounded-lg ${
                  pathname === item.href
                    ? "bg-black text-[#FFD700]"
                    : "text-black hover:bg-black/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-black hover:opacity-70 transition-opacity"
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
          <div className="border-t border-black/20 py-4 md:hidden">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 text-base font-semibold rounded-lg transition-colors ${
                    pathname === item.href
                      ? "bg-black text-[#FFD700]"
                      : "text-black hover:bg-black/10"
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
