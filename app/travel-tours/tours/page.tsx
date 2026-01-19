"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardBadge, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { easings, durations } from "@/lib/motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: durations.slow,
      ease: easings.elegant,
    },
  },
};

const tours = [
  {
    title: "7-Day Adventure Package",
    duration: "7 days",
    price: "$1,299",
    type: "Adventure",
    description: "Thrilling activities and outdoor adventures",
    image: "https://images.unsplash.com/photo-1464822759844-d150ad6bfb06?w=800&h=600&fit=crop",
  },
  {
    title: "Cultural Immersion Tour",
    duration: "10 days",
    price: "$1,899",
    type: "Cultural",
    description: "Deep dive into local cultures and traditions",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=800&h=600&fit=crop",
  },
  {
    title: "Luxury Beach Retreat",
    duration: "5 days",
    price: "$2,499",
    type: "Luxury",
    description: "Premium beachfront experience",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
  },
  {
    title: "City Explorer Package",
    duration: "4 days",
    price: "$899",
    type: "City",
    description: "Urban exploration and city highlights",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop",
  },
  {
    title: "Wildlife Safari Expedition",
    duration: "12 days",
    price: "$3,299",
    type: "Adventure",
    description: "Unforgettable wildlife encounters",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
  },
  {
    title: "Romantic Getaway",
    duration: "6 days",
    price: "$1,599",
    type: "Luxury",
    description: "Perfect for couples and honeymooners",
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800&h=600&fit=crop",
  },
];

export default function TravelToursPage() {
  const toursRef = useRef<HTMLDivElement>(null);
  const isToursInView = useInView(toursRef, { once: true, amount: 0.1 });

  return (
    <>
      {/* Header Section */}
      <Section variant="yellow" size="md">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: durations.slow, ease: easings.elegant }}
        >
          <motion.p 
            className="text-[var(--color-secondary)]/70 text-sm sm:text-base font-semibold uppercase tracking-[0.15em] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, ease: easings.smooth, delay: 0.1 }}
          >
            Curated Experiences
          </motion.p>
          <motion.h1 
            className="text-[var(--text-5xl)] sm:text-[var(--text-6xl)] font-bold text-[var(--color-secondary)] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, ease: easings.elegant, delay: 0.2 }}
          >
            Tours & Packages
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-[var(--color-secondary)]/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, ease: easings.smooth, delay: 0.3 }}
          >
            Carefully curated tours designed for unforgettable experiences
          </motion.p>
        </motion.div>

        {/* Animated accent bar */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-[var(--color-secondary)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: durations.slower, ease: easings.elegant, delay: 0.4 }}
          style={{ transformOrigin: "left" }}
        />
      </Section>

      {/* Tours Grid */}
      <Section variant="default" size="lg">
        <motion.div 
          ref={toursRef}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={isToursInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {tours.map((tour, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card variant="elevated" hover className="h-full group">
                <CardImage className="h-56 relative overflow-hidden">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 z-10">
                    <CardBadge variant="dark">{tour.type}</CardBadge>
                  </div>
                </CardImage>
                <CardContent>
                  <CardTitle>{tour.title}</CardTitle>
                  <CardDescription className="mb-5">
                    {tour.description}
                  </CardDescription>
                  <CardFooter className="flex items-center justify-between">
                    <span className="text-sm text-[var(--color-gray-500)] flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {tour.duration}
                    </span>
                    <span className="text-2xl font-bold text-[var(--color-secondary)]">
                      {tour.price}
                    </span>
                  </CardFooter>
                  <Button
                    asChild
                    href="/travel-tours/contact"
                    variant="primary"
                    size="md"
                    className="w-full mt-6"
                  >
                    Book Now
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
