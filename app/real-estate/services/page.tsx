"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card, CardImage, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
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

const services = [
  {
    title: "Property Development",
    description:
      "End-to-end property development services from land acquisition to project completion.",
    features: [
      "Site selection and analysis",
      "Feasibility studies",
      "Project planning and design",
      "Construction oversight",
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  },
  {
    title: "Construction Management",
    description:
      "Professional project management ensuring quality, budget, and timeline adherence.",
    features: [
      "Project planning and scheduling",
      "Budget management",
      "Quality control",
      "Contractor coordination",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f893dfe?w=600&h=400&fit=crop",
  },
  {
    title: "Real Estate Consulting",
    description:
      "Strategic advice for property investments, acquisitions, and development decisions.",
    features: [
      "Market analysis",
      "Investment strategies",
      "Property valuation",
      "Risk assessment",
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
  },
  {
    title: "Architectural Design",
    description:
      "Innovative architectural solutions that combine functionality with aesthetic appeal.",
    features: [
      "Conceptual design",
      "3D visualization",
      "Building permits",
      "Design implementation",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    title: "Property Management",
    description:
      "Comprehensive property management services for optimal returns and tenant satisfaction.",
    features: [
      "Tenant relations",
      "Maintenance coordination",
      "Financial management",
      "Property inspections",
    ],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
  },
  {
    title: "Investment Advisory",
    description:
      "Expert guidance for real estate investment opportunities and portfolio management.",
    features: [
      "Investment analysis",
      "Portfolio optimization",
      "Market insights",
      "Risk management",
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
];

export default function RealEstateServicesPage() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 });

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
            What We Offer
          </motion.p>
          <motion.h1 
            className="text-[var(--text-5xl)] sm:text-[var(--text-6xl)] font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, ease: easings.elegant, delay: 0.2 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-[var(--color-gray-300)] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: durations.slow, ease: easings.smooth, delay: 0.3 }}
          >
            Comprehensive solutions for all your real estate and construction needs
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

      {/* Services Grid */}
      <Section variant="default" size="lg">
        <motion.div 
          ref={servicesRef}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={isServicesInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card variant="elevated" hover className="h-full">
                <CardImage className="h-52">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </CardImage>
                <CardContent>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="mb-6">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-sm text-[var(--color-gray-600)]"
                      >
                        <span className="text-[var(--color-primary)] mr-2 font-bold">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    href="/real-estate/contact"
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Learn More
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
