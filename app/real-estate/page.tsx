"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, CardImage, CardContent, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

// Refined animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
  }
};

// Services data
const services = [
  {
    title: "Property Development",
    description: "End-to-end property development from land acquisition to final handover. We specialize in residential, commercial, and mixed-use projects.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    icon: "🏗️"
  },
  {
    title: "Construction Management",
    description: "Professional construction management ensuring quality, timelines, and budget control with transparent project tracking.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f893dfe?w=800&h=600&fit=crop",
    icon: "📋"
  },
  {
    title: "Architectural Design",
    description: "Innovative architectural solutions blending aesthetics with functionality. From concept to detailed drawings.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
    icon: "📐"
  },
  {
    title: "Real Estate Consulting",
    description: "Expert guidance on property investments, market analysis, and strategic planning for maximum returns.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    icon: "💼"
  },
  {
    title: "Interior Design",
    description: "Comprehensive interior design services creating spaces that inspire and function beautifully.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
    icon: "🎨"
  },
  {
    title: "Property Management",
    description: "Full-service property management including maintenance, tenant relations, and financial reporting.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    icon: "🔑"
  }
];

// Portfolio projects
const portfolio = [
  {
    name: "Skyline Residences",
    type: "Residential Complex",
    year: "2023",
    units: "120 Units",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
  },
  {
    name: "Commerce Plaza",
    type: "Commercial Tower",
    year: "2022",
    area: "80,000 sq ft",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
  },
  {
    name: "Green Valley Villas",
    type: "Luxury Housing",
    year: "2023",
    units: "45 Villas",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
  }
];

// Featured tour packages (property viewing packages)
const featuredPackages = [
  {
    name: "Premium Property Tour",
    description: "Exclusive guided tours of luxury properties with personalized consultation",
    duration: "3 Hours",
    price: "₨15,000",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    features: ["Expert Guide", "5 Properties", "Consultation", "Transportation"],
    type: "Luxury"
  },
  {
    name: "Investment Portfolio Tour",
    description: "Comprehensive tour of high-return investment properties with market analysis",
    duration: "4 Hours",
    price: "₨20,000",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    features: ["Market Analysis", "8 Properties", "ROI Report", "Expert Advice"],
    type: "Investment"
  },
  {
    name: "First-Time Buyer Package",
    description: "Perfect introduction to property ownership with educational sessions",
    duration: "2 Hours",
    price: "₨10,000",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
    features: ["Education Session", "3 Properties", "Financing Guide", "Support"],
    type: "Starter"
  }
];

// Popular destinations (property locations)
const popularDestinations = [
  {
    name: "DHA Phase 5",
    location: "Lahore",
    properties: "250+",
    avgPrice: "₨8.5M",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    description: "Premium residential area with modern infrastructure"
  },
  {
    name: "Bahria Town",
    location: "Islamabad",
    properties: "180+",
    avgPrice: "₨6.2M",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    description: "Gated community with world-class amenities"
  },
  {
    name: "Gulberg",
    location: "Lahore",
    properties: "320+",
    avgPrice: "₨12M",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
    description: "Prime commercial and residential hub"
  },
  {
    name: "Clifton",
    location: "Karachi",
    properties: "200+",
    avgPrice: "₨15M",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop",
    description: "Beachfront luxury properties with stunning views"
  },
  {
    name: "F-7 Sector",
    location: "Islamabad",
    properties: "150+",
    avgPrice: "₨9.5M",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
    description: "Elite diplomatic enclave with premium residences"
  },
  {
    name: "Model Town",
    location: "Lahore",
    properties: "280+",
    avgPrice: "₨7.8M",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    description: "Established neighborhood with excellent connectivity"
  }
];

// Customer feedback
const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Property Investor",
    rating: 5,
    comment: "Exceptional service from start to finish. The team helped me find the perfect investment property and guided me through every step. Highly professional and knowledgeable.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    property: "Skyline Residences"
  },
  {
    name: "Fatima Ali",
    role: "First-Time Buyer",
    rating: 5,
    comment: "As a first-time buyer, I was nervous about the process. Square Three Sixty made everything so easy and transparent. I couldn't be happier with my new home!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    property: "Green Valley Villas"
  },
  {
    name: "Hassan Malik",
    role: "Business Owner",
    rating: 5,
    comment: "We needed a commercial space for our expanding business. They found us the perfect location in Commerce Plaza. The entire process was smooth and efficient.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    property: "Commerce Plaza"
  },
  {
    name: "Sara Ahmed",
    role: "Real Estate Developer",
    rating: 5,
    comment: "Working with Square Three Sixty on our development project was a game-changer. Their expertise in construction management and market insights are unmatched.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    property: "Multiple Projects"
  }
];

export default function RealEstateHomePage() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const packagesRef = useRef<HTMLDivElement>(null);
  const destinationsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.1 });
  const isPortfolioInView = useInView(portfolioRef, { once: true, amount: 0.1 });
  const isPackagesInView = useInView(packagesRef, { once: true, amount: 0.1 });
  const isDestinationsInView = useInView(destinationsRef, { once: true, amount: 0.1 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.2 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <>
      {/* Hero Section - Clean and Professional */}
      <section className="relative min-h-[85vh] flex items-center justify-center z-10 py-8">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Brand mark */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-[0.2em] text-amber-500 border border-amber-500/30 rounded-full uppercase">
                Building Excellence Since 2008
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight"
            >
              Real Estate
              <span className="block font-semibold mt-1">& Construction</span>
            </motion.h1>

            {/* Divider */}
            <motion.div variants={scaleIn} className="w-16 h-[1px] bg-amber-500 mx-auto mb-8" />

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-4"
            >
              From groundbreaking to grand opening
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              We deliver construction excellence and real estate solutions that stand the test of time.
            </motion.p>

            {/* CTA - Minimal */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                href="/real-estate/properties"
                variant="primary"
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium px-8"
              >
                View Projects
              </Button>
              <Button
                asChild
                href="/real-estate/contact"
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 px-8"
              >
                Apply for Service
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Track Record Section */}
      <section
        ref={statsRef}
        className="py-20 md:py-32 relative z-10"
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block text-xs font-medium tracking-[0.2em] text-amber-500 uppercase mb-4">
                Our Track Record
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                Proven Excellence
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto font-light">
                Over 15 years of delivering exceptional results
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {[
                { value: "500+", label: "Projects", sublabel: "Completed" },
                { value: "1,200+", label: "Clients", sublabel: "Satisfied" },
                { value: "₨50B+", label: "Value", sublabel: "Delivered" },
                { value: "98%", label: "On-Time", sublabel: "Delivery" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-6 border border-white/10 rounded-sm bg-white/5 backdrop-blur-sm"
                >
                  <div className="text-3xl md:text-4xl font-light text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-300 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-amber-500 uppercase tracking-wider">
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Achievements */}
            <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🏆",
                  title: "Award Winning",
                  description: "Multiple industry awards for excellence in construction and design"
                },
                {
                  icon: "✓",
                  title: "Quality Certified",
                  description: "ISO 9001:2015 certified for quality management systems"
                },
                {
                  icon: "🌿",
                  title: "Sustainable",
                  description: "Green building practices and eco-friendly construction methods"
                }
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-sm border border-white/10"
                >
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <h3 className="text-lg font-medium text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-light">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={servicesRef}
        className="py-20 md:py-32 relative z-10 backdrop-blur-sm"
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Our Services"
            title="Comprehensive Solutions"
            description="From concept to completion, we offer full-spectrum real estate and construction services"
            dark={true}
          />

          <motion.div 
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card variant="elevated" hover className="h-full group bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardImage className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-4xl">
                      {service.icon}
                    </div>
                  </CardImage>
                  <CardContent>
                    <CardTitle className="text-white mb-3">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300 font-light leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Tour Packages Section */}
      <section className="py-20 md:py-32 relative z-10">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Property Tours"
            title="Featured Tour Packages"
            description="Experience our properties through expertly guided tours tailored to your needs"
            dark={true}
          />

          <motion.div
            ref={packagesRef}
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate={isPackagesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {featuredPackages.map((pkg, index) => (
              <motion.div key={index} variants={scaleIn}>
                <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden hover:shadow-xl transition-shadow duration-500">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-amber-500 text-slate-900 rounded-full uppercase tracking-wider">
                      {pkg.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-medium text-white mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-sm text-slate-300">
                      {pkg.duration}
                    </p>
                  </div>
                </div>
                
                  <div className="p-6">
                  <p className="text-sm text-slate-300 font-light mb-4 leading-relaxed">
                    {pkg.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                        Starting From
                      </div>
                      <div className="text-xl font-semibold text-amber-500">
                        {pkg.price}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-xs text-slate-400 uppercase tracking-wider mb-3">
                      Includes
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-300">
                          <span className="text-amber-500 mr-2">✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    asChild
                    href="/real-estate/contact"
                    variant="outline"
                    size="sm"
                    className="w-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500"
                  >
                    Book Tour
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section
        ref={destinationsRef}
        className="py-20 md:py-32 relative z-10 backdrop-blur-sm"
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Property Locations"
            title="Popular Destinations"
            description="Explore our most sought-after property locations across Pakistan"
            dark={true}
          />

          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate={isDestinationsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {popularDestinations.map((destination, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card variant="elevated" hover className="h-full group bg-white/5 backdrop-blur-sm border border-white/10">
                <CardImage className="h-48 relative overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-medium text-white mb-1">
                      {destination.name}
                    </h3>
                    <p className="text-sm text-slate-300">
                      {destination.location}
                    </p>
                  </div>
                </CardImage>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                        Properties Available
                      </div>
                      <div className="text-lg font-semibold text-white">
                        {destination.properties}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">
                        Avg. Price
                      </div>
                      <div className="text-lg font-semibold text-amber-500">
                        {destination.avgPrice}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-slate-300 font-light leading-relaxed">
                    {destination.description}
                  </CardDescription>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <Button
                      asChild
                      href={`/real-estate/properties?location=${destination.name.toLowerCase().replace(/\s+/g, '-')}`}
                      variant="outline"
                      size="sm"
                      className="w-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500"
                    >
                      View Properties
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          </motion.div>
        </div>
      </section>

      {/* Customer Feedback Section */}
      <section
        ref={testimonialsRef}
        className="py-20 md:py-32 relative z-10"
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Testimonials"
            title="Customer Feedback"
            description="Hear from our satisfied clients about their experience with us"
            dark={true}
          />

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card variant="elevated" className="h-full bg-white/10 backdrop-blur-md border border-white/20">
                  <CardContent>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-amber-500 text-amber-500"
                        />
                      ))}
                    </div>
                    <p className="text-slate-200 font-light leading-relaxed mb-6 text-base">
                      "{testimonial.comment}"
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-white/20">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-amber-500/20">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-slate-300">
                          {testimonial.role}
                        </div>
                        <div className="text-xs text-amber-500 mt-1">
                          {testimonial.property}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        ref={portfolioRef}
        className="py-20 md:py-32 relative z-10 backdrop-blur-sm"
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Recent Work"
            title="Featured Projects"
            description="A glimpse of our recent completed projects"
            dark={true}
          />

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            animate={isPortfolioInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {portfolio.map((project, index) => (
              <motion.div key={index} variants={scaleIn}>
                <div className="group relative overflow-hidden rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="text-xs uppercase tracking-wider text-amber-400 mb-2">
                      {project.type} • {project.year}
                    </div>
                    <h3 className="text-xl font-medium mb-1">{project.name}</h3>
                    <p className="text-sm text-slate-300">
                      {project.units || project.area}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button
              asChild
              href="/real-estate/properties"
              variant="outline"
              size="lg"
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 font-medium px-8"
            >
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Application CTA Section */}
      <section className="py-20 md:py-32 relative z-10 backdrop-blur-sm">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <motion.div 
          ref={ctaRef}
          className="text-center max-w-3xl mx-auto container mx-auto px-6 lg:px-8 relative z-10"
          initial="hidden"
          animate={isCtaInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6"
            variants={fadeInUp}
          >
            Start Your Project
            <span className="block font-medium mt-2">With Confidence</span>
          </motion.h2>

          <motion.div variants={scaleIn} className="w-16 h-[1px] bg-amber-500 mx-auto my-8" />

          <motion.p 
            className="text-lg md:text-xl text-slate-300 mb-12 font-light leading-relaxed"
            variants={fadeInUp}
          >
            Ready to turn your vision into reality? Apply for our services or schedule 
            a consultation with our expert team today.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Button
              asChild
              href="/real-estate/contact"
              variant="secondary"
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium px-8"
            >
              Apply Now
            </Button>
            <Button
              asChild
              href="/real-estate/services"
              variant="outline"
              size="lg"
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 px-8"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-slate-400 text-sm mb-2">Or reach us directly</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-slate-300">
              <a href="tel:+923001234567" className="hover:text-amber-500 transition-colors">
                📞 +92 300 1234567
              </a>
              <span className="hidden sm:inline text-slate-600">|</span>
              <a href="mailto:info@square360.com" className="hover:text-amber-500 transition-colors">
                ✉️ info@square360.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}