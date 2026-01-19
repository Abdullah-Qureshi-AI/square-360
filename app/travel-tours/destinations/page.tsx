"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card, CardImage, CardContent, CardFooter } from "@/components/ui/Card";
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

const destinations = [
  {
    name: "Tropical Paradise",
    location: "Caribbean Islands",
    description: "Crystal clear waters and pristine beaches await you",
    price: "From $1,299",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
  },
  {
    name: "Mountain Adventure",
    location: "Swiss Alps",
    description: "Breathtaking peaks and alpine experiences",
    price: "From $2,499",
    image: "https://images.unsplash.com/photo-1464822759844-d150ad6bfb06?w=800&h=600&fit=crop",
  },
  {
    name: "Cultural Journey",
    location: "Southeast Asia",
    description: "Rich history and vibrant traditions",
    price: "From $899",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=800&h=600&fit=crop",
  },
  {
    name: "Urban Explorer",
    location: "European Capitals",
    description: "Historic cities and modern culture",
    price: "From $1,599",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop",
  },
  {
    name: "Safari Experience",
    location: "African Savanna",
    description: "Wildlife encounters and natural wonders",
    price: "From $3,299",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
  },
  {
    name: "Island Hopping",
    location: "Mediterranean",
    description: "Charming islands and coastal beauty",
    price: "From $1,899",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
  },
];

export default function TravelDestinationsPage() {
  const destinationsRef = useRef<HTMLDivElement>(null);
  const isDestinationsInView = useInView(destinationsRef, { once: true, amount: 0.1 });

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
            Explore The World
          </motion.p>
          <motion.h1 
            className="text-[var(--text-5xl)] sm:text-[var(--text-6xl)] font-bold text-[var(--color-secondary)] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, ease: easings.elegant, delay: 0.2 }}
          >
            Destinations
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-[var(--color-secondary)]/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, ease: easings.smooth, delay: 0.3 }}
          >
            Discover amazing places around the world
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

      {/* Destinations Grid */}
      <Section variant="default" size="lg">
        <motion.div 
          ref={destinationsRef}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={isDestinationsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {destinations.map((destination, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card variant="elevated" hover className="h-full group">
                <CardImage className="h-72 relative overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Floating content on image */}
                  <motion.div 
                    className="absolute bottom-5 left-5 right-5 z-10"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: durations.normal }}
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <p className="text-sm font-semibold text-[var(--color-gray-500)] mb-1 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {destination.location}
                      </p>
                      <p className="text-2xl font-bold text-[var(--color-secondary)]">
                        {destination.name}
                      </p>
                    </div>
                  </motion.div>
                </CardImage>
                <CardContent>
                  <p className="text-[var(--color-gray-600)] mb-5 leading-relaxed">
                    {destination.description}
                  </p>
                  <CardFooter className="flex items-center justify-between">
                    <span className="text-sm text-[var(--color-gray-500)]">Starting at</span>
                    <span className="text-xl font-bold text-[var(--color-secondary)]">
                      {destination.price}
                    </span>
                  </CardFooter>
                  <Button
                    asChild
                    href="/travel-tours/tours"
                    variant="primary"
                    size="md"
                    className="w-full mt-6"
                  >
                    Explore
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
