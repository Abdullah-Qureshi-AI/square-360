"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Card } from "@/components/ui/Card";

export function CategorySelector() {
  const [hovered, setHovered] = useState<string | null>(null);

  const categories = [
    {
      id: "real-estate",
      title: "Real Estate / Construction",
      subtitle: "Building Excellence",
      description: "Professional real estate and construction services for your property needs",
      href: "/real-estate",
      icon: "🏗️",
      gradient: "from-black to-[#1A1A1A]",
      accent: "bg-[#FFD700]",
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
      icon: "✈️",
      gradient: "from-[#FFD700] to-[#FFC700]",
      accent: "bg-black",
      textColor: "text-black",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
      imageAlt: "Beautiful travel destination",
    },
  ];

  return (
    <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 max-w-5xl mx-auto">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={category.href}
          className="group block"
          onMouseEnter={() => setHovered(category.id)}
          onMouseLeave={() => setHovered(null)}
        >
          <Card
            variant="elevated"
            hover
            className="h-full relative overflow-hidden border-2 border-black"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src={category.image}
                alt={category.imageAlt}
                fill
                className={`object-cover transition-opacity duration-300 ${
                  hovered === category.id ? "opacity-30" : "opacity-20"
                }`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} transition-opacity duration-300 ${
                  hovered === category.id ? "opacity-70" : "opacity-80"
                }`}
              />
            </div>

            {/* Content */}
            <div className={`relative z-10 p-8 sm:p-12 min-h-[400px] flex flex-col justify-between ${category.textColor}`}>
              <div>
                <div className="mb-6 text-6xl sm:text-7xl opacity-90">
                  {category.icon}
                </div>
                <p className="text-sm sm:text-base font-semibold uppercase tracking-wider mb-3 opacity-80">
                  {category.subtitle}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {category.title}
                </h2>
                <p className="text-base sm:text-lg opacity-90 leading-relaxed max-w-md">
                  {category.description}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-8 flex items-center group-hover:translate-x-2 transition-transform duration-300">
                <span className="font-semibold text-lg mr-2">Explore</span>
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>

              {/* Accent Bar */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 ${category.accent} transition-all duration-300 ${
                  hovered === category.id ? "h-2" : ""
                }`}
              />
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
