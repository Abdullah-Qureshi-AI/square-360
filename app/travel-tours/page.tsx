"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Star, MapPin, Calendar, Users, Award } from "lucide-react";
import { SectionHeader } from "@/components/ui/Section";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { fadeInRight } from "@/lib/motion";

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

// Featured tour packages
const featuredPackages = [
  {
    name: "Northern Pakistan Adventure",
    destination: "Hunza, Skardu & Fairy Meadows",
    duration: "8 Days / 7 Nights",
    price: "₨85,000",
    originalPrice: "₨95,000",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    features: ["Accommodation", "Transportation", "Meals", "Guide", "Sightseeing"],
    rating: 4.9,
    reviews: 127,
    discount: "10% OFF",
    highlights: ["Attabad Lake", "Khunjerab Pass", "Baltit Fort"]
  },
  {
    name: "Dubai Luxury Experience",
    destination: "Dubai, UAE",
    duration: "5 Days / 4 Nights",
    price: "₨120,000",
    originalPrice: "₨135,000",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    features: ["5-Star Hotel", "Desert Safari", "City Tours", "Flights", "Breakfast"],
    rating: 4.8,
    reviews: 89,
    discount: "11% OFF",
    highlights: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall"]
  },
  {
    name: "Turkey Cultural Journey",
    destination: "Istanbul & Cappadocia",
    duration: "7 Days / 6 Nights",
    price: "₨150,000",
    originalPrice: "₨165,000",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop",
    features: ["Hotels", "Hot Air Balloon", "Tours", "Transfers", "Meals"],
    rating: 4.9,
    reviews: 156,
    discount: "9% OFF",
    highlights: ["Hagia Sophia", "Cappadocia", "Bosphorus Cruise"]
  },
  {
    name: "Maldives Paradise",
    destination: "Maldives Islands",
    duration: "6 Days / 5 Nights",
    price: "₨180,000",
    originalPrice: "₨200,000",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    features: ["Water Villa", "All Meals", "Snorkeling", "Transfers", "Spa"],
    rating: 5.0,
    reviews: 94,
    discount: "10% OFF",
    highlights: ["Crystal Waters", "Coral Reefs", "Sunset Views"]
  },
  {
    name: "Thailand Discovery",
    destination: "Bangkok & Phuket",
    duration: "6 Days / 5 Nights",
    price: "₨95,000",
    originalPrice: "₨110,000",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
    features: ["Hotels", "Flights", "Tours", "Meals", "Transfers"],
    rating: 4.7,
    reviews: 203,
    discount: "14% OFF",
    highlights: ["Grand Palace", "Phi Phi Islands", "Floating Market"]
  },
  {
    name: "Switzerland Alpine",
    destination: "Zurich, Interlaken & Lucerne",
    duration: "8 Days / 7 Nights",
    price: "₨220,000",
    originalPrice: "₨245,000",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    features: ["Hotels", "Train Pass", "Tours", "Breakfast", "Guide"],
    rating: 4.9,
    reviews: 78,
    discount: "10% OFF",
    highlights: ["Jungfraujoch", "Lake Lucerne", "Swiss Alps"]
  }
];

// Popular destinations
const popularDestinations = [
  {
    name: "Northern Areas",
    country: "Pakistan",
    packages: "25+",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    description: "Majestic mountains, crystal-clear lakes, and breathtaking valleys",
    startingFrom: "₨45,000"
  },
  {
    name: "Dubai",
    country: "UAE",
    packages: "18+",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    description: "Luxury shopping, stunning architecture, and desert adventures",
    startingFrom: "₨85,000"
  },
  {
    name: "Turkey",
    country: "Turkey",
    packages: "22+",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop",
    description: "Rich history, unique landscapes, and vibrant culture",
    startingFrom: "₨95,000"
  },
  {
    name: "Maldives",
    country: "Maldives",
    packages: "15+",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    description: "Pristine beaches, turquoise waters, and luxury resorts",
    startingFrom: "₨150,000"
  },
  {
    name: "Thailand",
    country: "Thailand",
    packages: "20+",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
    description: "Tropical paradise with rich culture and delicious cuisine",
    startingFrom: "₨65,000"
  },
  {
    name: "Switzerland",
    country: "Switzerland",
    packages: "12+",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    description: "Alpine beauty, charming cities, and world-class hospitality",
    startingFrom: "₨180,000"
  }
];

// Customer testimonials
const testimonials = [
  {
    name: "Ayesha Malik",
    role: "Travel Enthusiast",
    rating: 5,
    comment: "The Northern Pakistan tour exceeded all expectations! The guides were knowledgeable, accommodations were comfortable, and the scenery was absolutely breathtaking. Highly recommend!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    tour: "Northern Pakistan Adventure",
    date: "March 2024"
  },
  {
    name: "Hassan Ali",
    role: "Photographer",
    rating: 5,
    comment: "Dubai Luxury package was worth every rupee! From the desert safari to the city tours, everything was perfectly organized. The hotel was amazing and the service was top-notch.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    tour: "Dubai Luxury Experience",
    date: "February 2024"
  },
  {
    name: "Fatima Khan",
    role: "Travel Blogger",
    rating: 5,
    comment: "Turkey was magical! The hot air balloon ride in Cappadocia was a dream come true. The tour guides were friendly and the food was incredible. Can't wait to book another trip!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    tour: "Turkey Cultural Journey",
    date: "January 2024"
  },
  {
    name: "Ahmed Sheikh",
    role: "Business Executive",
    rating: 5,
    comment: "Maldives was paradise! The water villa was stunning, the food was excellent, and the snorkeling experience was unforgettable. Square Three Sixty made our honeymoon perfect!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    tour: "Maldives Paradise",
    date: "December 2023"
  }
];

// Owner stats used in the founder card
const ownerStats = [
  {
    icon: Award,
    value: "10+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: "5k+",
    label: "Happy Travelers",
  },
  {
    icon: MapPin,
    value: "40+",
    label: "Destinations",
  },
  {
    icon: Calendar,
    value: "300+",
    label: "Trips / Year",
  },
];

export default function TravelHomePage() {
  const packagesRef = useRef<HTMLDivElement>(null);
  const destinationsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const isPackagesInView = useInView(packagesRef, { once: true, amount: 0.1 });
  const isDestinationsInView = useInView(destinationsRef, { once: true, amount: 0.1 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.1 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <>
      {/* Hero Section - Fits in single viewport */}
      <section className="relative flex items-center z-10 py-8 sm:min-h-[65vh] sm:py-10">

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/4 h-64 w-64 sm:h-96 sm:w-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 h-48 w-48 sm:h-64 sm:w-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:gap-12 items-center">

          {/* ── LEFT: Hero copy ─────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Brand mark */}
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-block px-3 py-1 text-[10px] font-medium tracking-[0.2em] text-amber-500 border border-amber-500/30 rounded-full uppercase">
                Discover. Explore. Experience.
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light text-white mb-4 tracking-tight leading-[1.05]"
            >
              Travel &amp;{" "}
              <span className="text-amber-400">Tours</span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              variants={scaleIn}
              className="w-12 h-[2px] bg-amber-500 mb-5 origin-left"
            />

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-2"
            >
              Curated journeys to the world&apos;s most breathtaking destinations
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-sm md:text-base text-slate-400 max-w-xl leading-relaxed"
            >
              Your adventure begins here. Experience unforgettable travel with
              our expertly crafted tours.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="mt-6 flex flex-col sm:flex-row gap-3"
            >
              <Button
                asChild
                href="/travel-tours/tours"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 rounded-xl"
              >
                View Packages
              </Button>
              <Button
                asChild
                href="/travel-tours/contact"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 px-8 rounded-xl"
              >
                Plan Custom Trip
              </Button>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Owner card ────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm overflow-hidden sm:overflow-visible">

              {/* Decorative ring behind the card */}
              <div className="absolute -inset-2 rounded-3xl border border-amber-500/10 sm:-inset-4" />
              <div className="absolute hidden rounded-3xl border border-amber-500/5 sm:block sm:-inset-8" />

              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl shadow-black/40">

                {/* Owner photo */}
                <div className="relative h-44 w-full bg-gradient-to-br from-slate-700 to-slate-800 sm:h-52">
                  {/* Replace src with your actual owner image */}
                  <Image
                    src="/travel-tours/owner.jpg"
                    alt="Owner"
                    fill
                    className="object-cover object-top"
                    onError={(e) => {
                      // Fallback placeholder if image missing
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />

                  {/* Floating badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-amber-500 text-slate-900 text-[11px] font-bold px-2.5 py-1.5 rounded-full shadow-lg sm:top-4 sm:right-4 sm:text-xs sm:px-3">
                    <Star className="w-3 h-3 fill-slate-900" />
                    Verified Guide
                  </div>
                </div>

                {/* Info block */}
                <div className="p-4 sm:p-5">
                  {/* Name & title */}
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                        Muhammad Ali
                      </h3>
                      <p className="text-amber-400 text-xs font-medium mt-0.5">
                        Founder &amp; Head of Tours
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/25 flex items-center justify-center">
                      <Award className="w-4 h-4 text-amber-400" />
                    </div>
                  </div>

                  {/* Short bio */}
                  <p className="text-slate-400 text-xs leading-relaxed mb-3">
                    With over 10 years crafting unforgettable journeys across Pakistan
                    and beyond, I founded Square Three Sixty to share the world&apos;s hidden
                    gems with passionate explorers like you.
                  </p>

                  {/* Stats grid */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 sm:grid-cols-4 sm:gap-1.5">
                    {ownerStats.map(({ icon: Icon, value, label }) => (
                      <div key={label} className="text-center">
                        <div className="flex justify-center mb-1">
                          <Icon className="w-3.5 h-3.5 text-amber-500" />
                        </div>
                        <p className="text-white font-bold text-sm leading-none">{value}</p>
                        <p className="text-slate-500 text-[10px] mt-0.5 leading-tight max-w-[88px] mx-auto">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating accent dot */}
              <div className="absolute bottom-2 left-2 h-4 w-4 rounded-full bg-amber-500 shadow-lg shadow-amber-500/40 sm:-bottom-3 sm:-left-3 sm:h-6 sm:w-6" />
              <div className="absolute top-2 right-2 h-3 w-3 rounded-full bg-amber-500/40 border border-amber-500/60 sm:-top-3 sm:-right-3 sm:h-4 sm:w-4" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>

      

      {/* Travel Experiences Section 
      <Section variant="gray" size="lg">
        <SectionHeader
          subtitle="Experiences"
          title="Types of Adventures"
          description="Choose your style of travel and let us craft the perfect journey"
        />

        <motion.div 
          ref={experiencesRef}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate={isExperiencesInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={scaleIn}>
              <Card variant="elevated" hover className="h-full group bg-white">
                <CardImage className="h-48 relative overflow-hidden">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-4xl">
                    {experience.icon}
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium bg-white/90 text-slate-900 rounded-full uppercase tracking-wider">
                      {experience.category}
                    </span>
                  </div>
                </CardImage>
                <CardContent>
                  <CardTitle className="text-slate-900 mb-3">
                    {experience.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 font-light leading-relaxed">
                    {experience.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Section> */}

      {/* Featured Tour Packages Section */}
      <section
        ref={packagesRef}
        className="py-8 md:py-10 relative z-10 min-h-0"
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Best Deals"
            title="Featured Tour Packages"
            description="Handpicked travel experiences with exclusive discounts and premium amenities"
            dark={true}
            compact
          />

          <motion.div
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-5"
            initial="hidden"
            animate={isPackagesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {featuredPackages.map((pkg, index) => (
              <motion.div key={index} variants={scaleIn}>
                <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-md overflow-hidden hover:shadow-xl transition-all duration-500">
                  <div className="relative h-44 md:h-40 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    
                    {/* Discount Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 text-[11px] font-bold bg-amber-500 text-slate-900 rounded-full uppercase tracking-wider shadow-lg">
                        {pkg.discount}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span className="text-[11px] font-semibold text-slate-900">{pkg.rating}</span>
                      <span className="text-[11px] text-slate-600">({pkg.reviews})</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-0.5">
                        {pkg.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-300">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{pkg.destination}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 md:p-4">
                    {/* Duration and Price */}
                    <div className="mb-2 flex flex-col gap-3 border-b border-white/10 pb-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        <div>
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">
                            Duration
                          </div>
                          <div className="text-xs md:text-sm font-medium text-white">
                            {pkg.duration}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] text-slate-400 line-through mb-0.5">
                          {pkg.originalPrice}
                        </div>
                        <div className="text-lg md:text-xl font-bold text-amber-500">
                          {pkg.price}
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-2">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                        Key Highlights
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {pkg.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 text-[11px] bg-white/10 text-slate-300 rounded"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-3">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1.5">
                        Includes
                      </div>
                      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                        {pkg.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-[11px] md:text-xs text-slate-300"
                          >
                            <span className="text-amber-500 mr-1.5">✓</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      asChild
                      href={`/travel-tours/tours/${pkg.name.toLowerCase().replace(/\s+/g, '-')}`}
                      variant="outline"
                      size="sm"
                      className="w-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 font-medium"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button
              asChild
              href="/travel-tours/tours"
              variant="outline"
              size="lg"
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 font-medium px-8"
            >
              View All Tour Packages
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section
        ref={destinationsRef}
        className="py-8 md:py-10 relative z-10 backdrop-blur-sm"
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Explore"
            title="Popular Destinations"
            description="Discover our most beloved travel destinations around the world"
            dark={true}
            compact
          />

          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate={isDestinationsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {popularDestinations.map((destination, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card variant="elevated" hover className="h-full group bg-white/5 backdrop-blur-sm border border-white/10">
                <CardImage className="h-44 relative overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-lg font-semibold text-white mb-0.5">
                      {destination.name}
                    </h3>
                    <p className="text-xs text-slate-300 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {destination.country}
                    </p>
                  </div>
                </CardImage>
                <CardContent className="p-4">
                  <p className="text-slate-300 font-light leading-relaxed mb-2 text-xs">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">
                        Packages
                      </div>
                      <div className="text-sm font-semibold text-white flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-amber-500" />
                        {destination.packages}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">
                        From
                      </div>
                      <div className="text-base font-bold text-amber-500">
                        {destination.startingFrom}
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Button
                      asChild
                      href={`/travel-tours/destinations/${destination.name.toLowerCase().replace(/\s+/g, '-')}`}
                      variant="outline"
                      size="sm"
                      className="w-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500"
                    >
                      Explore {destination.name}
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
        className="py-8 md:py-10 relative z-10"
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            subtitle="Testimonials"
            title="Customer Feedback"
            description="Hear from our travelers about their amazing experiences with us"
            dark={true}
            compact
          />

          <motion.div
            className="grid gap-4 md:grid-cols-2 md:gap-5"
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card variant="elevated" className="h-full bg-white/10 backdrop-blur-md border border-white/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-500 text-amber-500"
                        />
                      ))}
                    </div>
                    <p className="text-slate-200 font-light leading-relaxed mb-3 text-sm italic line-clamp-3">
                      &quot;{testimonial.comment}&quot;
                    </p>
                    <div className="flex items-center gap-3 pt-2 border-t border-white/20">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-amber-500/20">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-white text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-slate-300">
                          {testimonial.role}
                        </div>
                        <div className="text-[10px] text-amber-500 mt-0.5 font-medium truncate">
                          {testimonial.tour} • {testimonial.date}
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

      {/* Application CTA Section */}
      <section className="py-8 md:py-12 relative z-10 backdrop-blur-sm">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <motion.div 
          ref={ctaRef}
          className="container relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"
          initial="hidden"
          animate={isCtaInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-3"
            variants={fadeInUp}
          >
            Ready for Your Next
            <span className="block font-medium mt-1">Adventure?</span>
          </motion.h2>

          <motion.div variants={scaleIn} className="w-12 h-[1px] bg-amber-500 mx-auto my-4" />

          <motion.p 
            className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 font-light leading-relaxed"
            variants={fadeInUp}
          >
            Apply for one of our packages or contact us to create a custom itinerary 
            tailored to your dreams. Let&apos;s make your travel dreams a reality.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-3 justify-center"
            variants={fadeInUp}
          >
            <Button
              asChild
              href="/travel-tours/contact"
              variant="secondary"
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium px-8"
            >
              Apply for Package
            </Button>
            <Button
              asChild
              href="/travel-tours/contact"
              variant="outline"
              size="lg"
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 hover:border-amber-500 px-8"
            >
              Custom Itinerary
            </Button>
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 pt-4 border-t border-white/10"
          >
            <p className="text-slate-400 text-xs mb-1">Questions? We&apos;re here to help</p>
            <div className="flex flex-col gap-3 justify-center text-sm text-slate-300 sm:flex-row sm:gap-4">
              <a href="tel:+923001234567" className="break-all hover:text-amber-500 transition-colors sm:break-normal">
                📞 +92 300 1234567
              </a>
              <span className="hidden sm:inline text-slate-600">|</span>
              <a href="mailto:travel@square360.com" className="break-all hover:text-amber-500 transition-colors sm:break-normal">
                ✉️ travel@square360.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}