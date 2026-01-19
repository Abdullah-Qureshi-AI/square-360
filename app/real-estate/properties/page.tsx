"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardImage, CardContent, CardTitle, CardBadge, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { easings, durations } from "@/lib/motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: durations.slow,
      ease: easings.elegant,
    },
  },
};

const properties = [
  {
    title: "Modern Residential Complex",
    location: "Downtown District",
    type: "Residential",
    size: "2,500 sq ft",
    price: "$450,000",
    features: ["3 Bedrooms", "2 Bathrooms", "Parking"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
  },
  {
    title: "Commercial Office Space",
    location: "Business Park",
    type: "Commercial",
    size: "5,000 sq ft",
    price: "$850,000",
    features: ["Prime Location", "Modern Facilities", "Parking"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  },
  {
    title: "Luxury Condominium",
    location: "Waterfront Area",
    type: "Residential",
    size: "1,800 sq ft",
    price: "$625,000",
    features: ["Ocean View", "2 Bedrooms", "Balcony"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
  },
  {
    title: "Development Land",
    location: "Suburban Zone",
    type: "Land",
    size: "10 acres",
    price: "$1,200,000",
    features: ["Prime Location", "Zoned", "Utilities"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
  },
  {
    title: "Luxury Villa",
    location: "Hillside Estate",
    type: "Residential",
    size: "4,200 sq ft",
    price: "$1,850,000",
    features: ["5 Bedrooms", "Pool", "Garden"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
  },
  {
    title: "Retail Space",
    location: "Shopping District",
    type: "Commercial",
    size: "3,500 sq ft",
    price: "$750,000",
    features: ["High Traffic", "Corner Location", "Parking"],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
  },
];

export default function RealEstatePropertiesPage() {
  const propertiesRef = useRef<HTMLDivElement>(null);
  const isPropertiesInView = useInView(propertiesRef, { once: true, amount: 0.1 });

  return (
    <>
      {/* Header Section */}
      <Section variant="dark" size="md">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: durations.slow, ease: easings.elegant }}
        >
          <motion.p 
            className="text-[var(--color-primary)] text-sm sm:text-base font-semibold uppercase tracking-[0.15em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, ease: easings.smooth, delay: 0.1 }}
          >
            Browse Our Listings
          </motion.p>
          <motion.h1 
            className="text-[var(--text-5xl)] sm:text-[var(--text-6xl)] font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, ease: easings.elegant, delay: 0.2 }}
          >
            Our Properties
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-[var(--color-gray-300)] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, ease: easings.smooth, delay: 0.3 }}
          >
            Explore our carefully curated selection of premium properties
          </motion.p>
        </motion.div>

        {/* Animated accent bar */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-primary)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: durations.slower, ease: easings.elegant, delay: 0.4 }}
          style={{ transformOrigin: "left" }}
        />
      </Section>

      {/* Properties Grid */}
      <Section variant="default" size="lg">
        <motion.div 
          ref={propertiesRef}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={isPropertiesInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {properties.map((property, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card variant="elevated" hover className="h-full">
                <CardImage className="h-64 relative">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <CardBadge>{property.type}</CardBadge>
                  </div>
                </CardImage>
                <CardContent>
                  <CardTitle>{property.title}</CardTitle>
                  <p className="text-[var(--color-gray-500)] mb-5 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {property.location}
                  </p>
                  
                  <ul className="mb-5 space-y-2">
                    {property.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-[var(--color-gray-600)]">
                        <span className="text-[var(--color-primary)] mr-2 font-bold">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <CardFooter className="flex items-center justify-between">
                    <span className="text-sm text-[var(--color-gray-500)]">{property.size}</span>
                    <span className="text-2xl font-bold text-[var(--color-secondary)]">
                      {property.price}
                    </span>
                  </CardFooter>
                  
                  <Button
                    asChild
                    href="/real-estate/contact"
                    variant="secondary"
                    size="md"
                    className="w-full mt-6"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>
    </>
  );
}
