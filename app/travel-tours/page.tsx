"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Hero } from "@/components/ui/Hero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardImage, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { easings, durations } from "@/lib/motion";

// Animation variants - lighter, more playful for travel
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
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

const featureVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
};

const features = [
  {
    title: "Adventure Tours",
    description:
      "Thrilling adventures for the bold and adventurous traveler. Experience the world like never before.",
    image: "https://images.unsplash.com/photo-1464822759844-d150ad6bfb06?w=600&h=400&fit=crop",
  },
  {
    title: "Cultural Experiences",
    description:
      "Immerse yourself in local cultures and traditions. Authentic experiences that enrich your soul.",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=600&h=400&fit=crop",
  },
  {
    title: "Beach Getaways",
    description:
      "Relax and unwind at the world's most beautiful beaches. Paradise is just a booking away.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
  },
  {
    title: "City Breaks",
    description:
      "Explore vibrant cities and urban experiences. Discover hidden gems in the world's greatest metropolises.",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&h=400&fit=crop",
  },
  {
    title: "Nature & Wildlife",
    description:
      "Connect with nature and witness incredible wildlife. Unforgettable encounters with the natural world.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
  },
  {
    title: "Luxury Travel",
    description:
      "Premium travel experiences with world-class service. Indulge in the finest accommodations and experiences.",
    image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600&h=400&fit=crop",
  },
];

const benefits = [
  { 
    title: "Curated Experiences", 
    desc: "Handpicked destinations and activities tailored to create unforgettable memories",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  { 
    title: "Expert Guides", 
    desc: "Local knowledge and insider insights for authentic travel experiences",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  { 
    title: "24/7 Support", 
    desc: "Round-the-clock assistance wherever you are in the world",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  { 
    title: "Best Value", 
    desc: "Competitive pricing without compromising on quality or experience",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
];

export default function TravelHomePage() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.1 });
  const isBenefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <>
      {/* Hero Section */}
      <Hero
        variant="yellow"
        size="large"
        title="Travel & Tours"
        subtitle="Your Journey Starts Here"
        description="Embark on unforgettable journeys and discover the world's most beautiful destinations. Your adventure awaits."
        primaryCTA={{
          label: "Explore Destinations",
          href: "/travel-tours/destinations",
        }}
        secondaryCTA={{
          label: "View Tours",
          href: "/travel-tours/tours",
        }}
        backgroundImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop"
        imageAlt="Beautiful travel destination"
      />

      {/* Features Grid Section */}
      <Section variant="default" size="lg">
        <SectionHeader
          subtitle="Explore"
          title="Discover Your Next Adventure"
          description="Curated experiences designed to create memories that last a lifetime"
        />

        <motion.div 
          ref={featuresRef}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={isFeaturesInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card variant="elevated" hover className="h-full group">
                <CardImage className="h-56 relative overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </CardImage>
                <CardContent>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="mb-6">
                    {feature.description}
                  </CardDescription>
                  <Button
                    asChild
                    href="/travel-tours/tours"
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-[var(--color-secondary)] group-hover:text-white group-hover:border-[var(--color-secondary)] transition-all duration-300"
                  >
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Why Choose Us Section */}
      <Section variant="yellow" size="md">
        <motion.div 
          ref={benefitsRef}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isBenefitsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: durations.slow, ease: easings.elegant }}
        >
          <h2 className="text-[var(--text-4xl)] sm:text-[var(--text-5xl)] font-bold text-[var(--color-secondary)] mb-4">
            Why Choose Us
          </h2>
        </motion.div>

        <motion.div 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate={isBenefitsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {benefits.map((item, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              variants={featureVariants}
            >
              {/* Icon */}
              <motion.div 
                className="w-14 h-14 mx-auto mb-5 bg-[var(--color-secondary)] text-[var(--color-primary)] rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: durations.fast }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-3">
                {item.title}
              </h3>
              <p className="text-[var(--color-secondary)]/80 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark" size="lg">
        <motion.div 
          ref={ctaRef}
          className="text-center max-w-3xl mx-auto"
          initial="hidden"
          animate={isCtaInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-[var(--text-4xl)] sm:text-[var(--text-5xl)] font-bold text-white mb-6"
            variants={cardVariants}
          >
            Start Your Journey Today
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-[var(--color-gray-300)] mb-10 leading-relaxed"
            variants={cardVariants}
          >
            Let us help you plan the perfect trip. Contact us to begin your
            adventure and create memories that will last forever.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={cardVariants}
          >
            <Button
              asChild
              href="/travel-tours/contact"
              variant="primary"
              size="lg"
              className="min-w-[180px]"
            >
              Plan Your Trip
            </Button>
            <Button
              asChild
              href="/travel-tours/destinations"
              variant="outline"
              size="lg"
              className="min-w-[180px] border-white text-white hover:bg-white hover:text-[var(--color-secondary)]"
            >
              Browse Destinations
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
