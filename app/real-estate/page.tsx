"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Hero } from "@/components/ui/Hero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
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
    y: 40,
    scale: 0.98,
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

const statVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9,
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

const features = [
  {
    title: "Property Development",
    description:
      "Comprehensive property development services from planning to completion. We handle every aspect of your project with precision and expertise.",
    stats: "500+ Projects",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  },
  {
    title: "Construction Management",
    description:
      "Expert project management ensuring quality, timely delivery, and budget adherence. Your vision, our execution.",
    stats: "15+ Years Experience",
    image: "https://images.unsplash.com/photo-1504307651254-35680f893dfe?w=600&h=400&fit=crop",
  },
  {
    title: "Real Estate Consulting",
    description:
      "Strategic advice for your real estate investments and decisions. Data-driven insights for optimal returns.",
    stats: "1000+ Clients",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    title: "Architectural Design",
    description:
      "Innovative and functional architectural solutions. Modern designs that stand the test of time.",
    stats: "Award Winning",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    title: "Property Management",
    description:
      "Professional property management services for optimal returns and tenant satisfaction.",
    stats: "24/7 Support",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
  {
    title: "Investment Advisory",
    description:
      "Expert guidance for real estate investment opportunities. Maximize your portfolio potential.",
    stats: "Trusted Partner",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "1000+", label: "Satisfied Clients" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Expert Team" },
];

export default function RealEstateHomePage() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <>
      {/* Hero Section */}
      <Hero
        variant="dark"
        size="large"
        title="Real Estate & Construction"
        subtitle="Building Excellence Since 2008"
        description="Trusted partners for your property and construction needs. We deliver excellence in every project, from concept to completion."
        primaryCTA={{
          label: "View Properties",
          href: "/real-estate/properties",
        }}
        secondaryCTA={{
          label: "Our Services",
          href: "/real-estate/services",
        }}
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
        imageAlt="Modern building construction"
      />

      {/* Features Grid Section */}
      <Section variant="default" size="lg">
        <SectionHeader
          subtitle="What We Do"
          title="Our Expertise"
          description="Comprehensive solutions for all your real estate and construction needs"
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
              <Card variant="elevated" hover className="h-full">
                <CardImage className="h-52">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </CardImage>
                <CardContent className="flex flex-col h-full">
                  <div className="flex-1">
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription className="mb-6">
                      {feature.description}
                    </CardDescription>
                  </div>
                  <CardFooter>
                    <p className="text-sm font-bold text-[var(--color-secondary)] uppercase tracking-wider">
                      {feature.stats}
                    </p>
                  </CardFooter>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Stats Section */}
      <Section variant="yellow" size="md">
        <motion.div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              variants={statVariants}
            >
              <motion.div 
                className="text-[var(--text-4xl)] sm:text-[var(--text-5xl)] font-extrabold text-[var(--color-secondary)] mb-3"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isStatsInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{ 
                  duration: durations.slow, 
                  ease: easings.elegant,
                  delay: index * 0.1 
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[var(--color-secondary)]/80">
                {stat.label}
              </div>
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
            Ready to Build Your Vision?
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-[var(--color-gray-300)] mb-10 leading-relaxed"
            variants={cardVariants}
          >
            Contact us today to discuss your real estate or construction project.
            Let&apos;s turn your ideas into reality.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={cardVariants}
          >
            <Button
              asChild
              href="/real-estate/contact"
              variant="primary"
              size="lg"
              className="min-w-[180px]"
            >
              Get Started
            </Button>
            <Button
              asChild
              href="/real-estate/about"
              variant="outline"
              size="lg"
              className="min-w-[180px] border-white text-white hover:bg-white hover:text-[var(--color-secondary)]"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
