"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Star, MapPin, Calendar, Users, Award } from "lucide-react";
import { SectionHeader } from "@/components/ui/Section";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { fadeInRight } from "@/lib/motion";

// ── Animation Variants ─────────────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ── Data ───────────────────────────────────────────────────────────────────
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
    highlights: ["Attabad Lake", "Khunjerab Pass", "Baltit Fort"],
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
    highlights: ["Burj Khalifa", "Palm Jumeirah", "Dubai Mall"],
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
    highlights: ["Hagia Sophia", "Cappadocia", "Bosphorus Cruise"],
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
    highlights: ["Crystal Waters", "Coral Reefs", "Sunset Views"],
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
    highlights: ["Grand Palace", "Phi Phi Islands", "Floating Market"],
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
    highlights: ["Jungfraujoch", "Lake Lucerne", "Swiss Alps"],
  },
];

const popularDestinations = [
  {
    name: "Northern Areas",
    country: "Pakistan",
    packages: "25+",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    description: "Majestic mountains, crystal-clear lakes, and breathtaking valleys",
    startingFrom: "₨45,000",
  },
  {
    name: "Dubai",
    country: "UAE",
    packages: "18+",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
    description: "Luxury shopping, stunning architecture, and desert adventures",
    startingFrom: "₨85,000",
  },
  {
    name: "Turkey",
    country: "Turkey",
    packages: "22+",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop",
    description: "Rich history, unique landscapes, and vibrant culture",
    startingFrom: "₨95,000",
  },
  {
    name: "Maldives",
    country: "Maldives",
    packages: "15+",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    description: "Pristine beaches, turquoise waters, and luxury resorts",
    startingFrom: "₨150,000",
  },
  {
    name: "Thailand",
    country: "Thailand",
    packages: "20+",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
    description: "Tropical paradise with rich culture and delicious cuisine",
    startingFrom: "₨65,000",
  },
  {
    name: "Switzerland",
    country: "Switzerland",
    packages: "12+",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    description: "Alpine beauty, charming cities, and world-class hospitality",
    startingFrom: "₨180,000",
  },
];

const testimonials = [
  {
    name: "Ayesha Malik",
    role: "Travel Enthusiast",
    rating: 5,
    comment:
      "The Northern Pakistan tour exceeded all expectations! The guides were knowledgeable, accommodations were comfortable, and the scenery was absolutely breathtaking. Highly recommend!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    tour: "Northern Pakistan Adventure",
    date: "March 2024",
  },
  {
    name: "Hassan Ali",
    role: "Photographer",
    rating: 5,
    comment:
      "Dubai Luxury package was worth every rupee! From the desert safari to the city tours, everything was perfectly organized. The hotel was amazing and the service was top-notch.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    tour: "Dubai Luxury Experience",
    date: "February 2024",
  },
  {
    name: "Fatima Khan",
    role: "Travel Blogger",
    rating: 5,
    comment:
      "Turkey was magical! The hot air balloon ride in Cappadocia was a dream come true. The tour guides were friendly and the food was incredible. Can't wait to book another trip!",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    tour: "Turkey Cultural Journey",
    date: "January 2024",
  },
  {
    name: "Ahmed Sheikh",
    role: "Business Executive",
    rating: 5,
    comment:
      "Maldives was paradise! The water villa was stunning, the food was excellent, and the snorkeling experience was unforgettable. Square Three Sixty made our honeymoon perfect!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    tour: "Maldives Paradise",
    date: "December 2023",
  },
];

const ownerStats = [
  { icon: Award,   value: "10+", label: "Years Exp." },
  { icon: Users,   value: "5k+", label: "Travelers" },
  { icon: MapPin,  value: "40+", label: "Destinations" },
  { icon: Calendar,value: "300+",label: "Trips/Year" },
];

// ── Component ──────────────────────────────────────────────────────────────
export default function TravelHomePage() {
  const packagesRef      = useRef<HTMLDivElement>(null);
  const destinationsRef  = useRef<HTMLDivElement>(null);
  const testimonialsRef  = useRef<HTMLDivElement>(null);
  const ctaRef           = useRef<HTMLDivElement>(null);

  const isPackagesInView     = useInView(packagesRef,     { once: true, amount: 0.05 });
  const isDestinationsInView = useInView(destinationsRef, { once: true, amount: 0.05 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.05 });
  const isCtaInView          = useInView(ctaRef,          { once: true, amount: 0.2  });

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative z-10 pt-[30px] pb-8 sm:pt-8 sm:pb-12 sm:min-h-[75vh] sm:flex sm:items-center">

        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        {/* Ambient glows */}
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

          {/* ════════════════════════════════════════
              MOBILE LAYOUT  (< sm)
              - Full-width hero text block
              - Owner card below, full-width horizontal
          ════════════════════════════════════════ */}
          <div className="sm:hidden">

            {/* Hero text */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>

              <motion.div variants={fadeInUp} className="mb-3">
                <span className="inline-flex items-center px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-amber-500 border border-amber-500/40 rounded-full uppercase">
                  Discover. Explore. Experience.
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-[2.6rem] font-light text-white tracking-tight leading-[1.05] mb-3"
              >
                Travel &amp;{" "}
                <span className="text-amber-400">Tours</span>
              </motion.h1>

              <motion.div variants={scaleIn} className="w-10 h-[2px] bg-amber-500 mb-4 origin-left" />

              <motion.p variants={fadeInUp} className="text-sm text-slate-300 leading-relaxed mb-1">
                Curated journeys to the world&apos;s most breathtaking destinations
              </motion.p>
              <motion.p variants={fadeInUp} className="text-xs text-slate-500 leading-relaxed mb-5">
                Your adventure begins here — expertly crafted tours await.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeInUp} className="flex gap-2.5 mb-6">
                <Button
                  asChild href="/travel-tours/tours" variant="primary"
                  className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold rounded-xl text-sm py-2.5 h-auto"
                >
                  View Packages
                </Button>
                <Button
                  asChild href="/travel-tours/contact" variant="outline"
                  className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800 rounded-xl text-sm py-2.5 h-auto"
                >
                  Plan Custom Trip
                </Button>
              </motion.div>
            </motion.div>

            {/* Owner card – horizontal pill on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-sm shadow-xl shadow-black/30">

                {/* Top accent line */}
                <div className="h-[2px] w-full bg-gradient-to-r from-amber-500 via-amber-400 to-transparent" />

                <div className="flex items-stretch gap-0">

                  {/* Photo column */}
                  <div className="relative w-[100px] flex-shrink-0 bg-gradient-to-br from-slate-700 to-slate-800">
                    <Image
                      src="/travel-tours/owner.jpg"
                      alt="Hamza Tahir"
                      fill
                      className="object-cover object-top"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/50" />
                    {/* Verified badge pinned to photo */}
                    <div className="absolute bottom-2 left-1.5 flex items-center gap-0.5 bg-amber-500 text-slate-900 text-[8px] font-black px-1.5 py-0.5 rounded-full">
                      <Star className="w-2 h-2 fill-slate-900" /> Verified
                    </div>
                  </div>

                  {/* Info column */}
                  <div className="flex-1 px-3 py-3">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-white font-semibold text-sm leading-none">Hamza Tahir</h3>
                        <p className="text-amber-400 text-[11px] mt-0.5">Founder &amp; Head of Tours</p>
                      </div>
                      <div className="w-7 h-7 rounded-lg bg-amber-500/15 border border-amber-500/25 flex items-center justify-center flex-shrink-0">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                    </div>

                    {/* 4 stats in a row */}
                    <div className="grid grid-cols-4 gap-1 pt-2 border-t border-white/10">
                      {ownerStats.map(({ icon: Icon, value, label }) => (
                        <div key={label} className="text-center">
                          <Icon className="w-3 h-3 text-amber-500 mx-auto mb-0.5" />
                          <p className="text-white font-bold text-[11px] leading-none">{value}</p>
                          <p className="text-slate-500 text-[9px] mt-0.5 leading-tight">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>

              {/* Subtle accent dot */}
              <div className="mt-3 flex justify-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/15" />
              </div>
            </motion.div>

          </div>

          {/* ════════════════════════════════════════
              DESKTOP LAYOUT  (sm+)
              - 2-column: text left, full card right
          ════════════════════════════════════════ */}
          <div className="hidden sm:grid sm:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">

            {/* Left – text */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="mb-5">
                <span className="inline-block px-4 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-amber-500 border border-amber-500/30 rounded-full uppercase">
                  Discover. Explore. Experience.
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-light text-white mb-4 tracking-tight leading-[1.05]"
              >
                Travel &amp;{" "}
                <span className="text-amber-400">Tours</span>
              </motion.h1>

              <motion.div variants={scaleIn} className="w-14 h-[2px] bg-amber-500 mb-6 origin-left" />

              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-3">
                Curated journeys to the world&apos;s most breathtaking destinations
              </motion.p>
              <motion.p variants={fadeInUp} className="text-base text-slate-400 max-w-xl leading-relaxed">
                Your adventure begins here. Experience unforgettable travel with our expertly crafted tours.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-8 flex gap-4">
                <Button
                  asChild href="/travel-tours/tours" variant="primary" size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 rounded-xl"
                >
                  View Packages
                </Button>
                <Button
                  asChild href="/travel-tours/contact" variant="outline" size="lg"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 px-8 rounded-xl"
                >
                  Plan Custom Trip
                </Button>
              </motion.div>
            </motion.div>

            {/* Right – owner card */}
            <motion.div
              initial="hidden" animate="visible" variants={fadeInRight}
              className="flex justify-end"
            >
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-4 rounded-3xl border border-amber-500/10" />
                <div className="absolute -inset-8 rounded-3xl border border-amber-500/5" />

                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl shadow-black/40">
                  <div className="relative h-60 w-full bg-gradient-to-br from-slate-700 to-slate-800">
                    <Image
                      src="/travel-tours/owner.jpg"
                      alt="Hamza Tahir – Founder"
                      fill
                      className="object-cover object-top"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                      <Star className="w-3 h-3 fill-slate-900" />
                      Verified Guide
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-white tracking-tight">Hamza Tahir</h3>
                        <p className="text-amber-400 text-xs font-medium mt-0.5">Founder &amp; Head of Tours</p>
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/25 flex items-center justify-center">
                        <Award className="w-4 h-4 text-amber-400" />
                      </div>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">
                      With over 10 years crafting unforgettable journeys across Pakistan and beyond, I founded Square Three Sixty to share the world&apos;s hidden gems with passionate explorers like you.
                    </p>
                    <div className="grid grid-cols-4 gap-1 pt-3 border-t border-white/10">
                      {ownerStats.map(({ icon: Icon, value, label }) => (
                        <div key={label} className="text-center">
                          <Icon className="w-3.5 h-3.5 text-amber-500 mx-auto mb-1" />
                          <p className="text-white font-bold text-sm leading-none">{value}</p>
                          <p className="text-slate-500 text-[9px] mt-0.5 leading-tight">{label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-amber-500 shadow-lg shadow-amber-500/40" />
                <div className="absolute -top-3 -right-3 w-4 h-4 rounded-full bg-amber-500/40 border border-amber-500/60" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FEATURED PACKAGES ─────────────────────────────────────────────── */}
      <section ref={packagesRef} className="py-8 md:py-10 relative z-10">
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
            className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-5"
            initial="hidden"
            animate={isPackagesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {featuredPackages.map((pkg, index) => (
              <motion.div key={index} variants={scaleIn}>
                {/* ── Mobile card: horizontal strip layout ── */}
                <div className="sm:hidden group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500">
                  <div className="flex gap-0">
                    {/* Left – image column */}
                    <div className="relative w-28 flex-shrink-0">
                      <Image
                        src={pkg.image}
                        alt={pkg.name}
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/60" />
                      {/* Discount badge */}
                      <span className="absolute top-2 left-2 px-1.5 py-0.5 text-[9px] font-bold bg-amber-500 text-slate-900 rounded-md">
                        {pkg.discount}
                      </span>
                    </div>

                    {/* Right – content column */}
                    <div className="flex-1 p-3 flex flex-col justify-between min-w-0">
                      {/* Rating */}
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1 bg-white/10 px-1.5 py-0.5 rounded-full">
                          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                          <span className="text-[10px] font-semibold text-white">{pkg.rating}</span>
                          <span className="text-[10px] text-slate-400">({pkg.reviews})</span>
                        </div>
                        <span className="text-lg font-bold text-amber-500 leading-none">{pkg.price}</span>
                      </div>

                      {/* Name */}
                      <h3 className="text-sm font-semibold text-white leading-tight mb-0.5 truncate">{pkg.name}</h3>

                      {/* Destination + duration */}
                      <div className="flex items-center gap-1 text-[10px] text-slate-400 mb-1.5">
                        <MapPin className="w-3 h-3 flex-shrink-0 text-amber-500" />
                        <span className="truncate">{pkg.destination}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-slate-400 mb-2">
                        <Calendar className="w-3 h-3 flex-shrink-0 text-amber-500" />
                        <span>{pkg.duration}</span>
                      </div>

                      {/* Highlights pills */}
                      <div className="flex gap-1 mb-2 flex-wrap">
                        {pkg.highlights.slice(0, 2).map((h, i) => (
                          <span key={i} className="px-1.5 py-0.5 text-[9px] bg-white/10 text-slate-300 rounded">
                            {h}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <Button
                        asChild
                        href={`/travel-tours/tours/${pkg.name.toLowerCase().replace(/\s+/g, "-")}`}
                        variant="outline"
                        size="sm"
                        className="w-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 text-[11px] py-1.5 h-auto rounded-lg font-semibold"
                      >
                        Book Now →
                      </Button>
                    </div>
                  </div>
                </div>

                {/* ── Desktop card: original vertical layout ── */}
                <div className="hidden sm:block group bg-white/5 backdrop-blur-sm border border-white/10 rounded-md overflow-hidden hover:shadow-xl transition-all duration-500">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 text-[11px] font-bold bg-amber-500 text-slate-900 rounded-full uppercase tracking-wider shadow-lg">
                        {pkg.discount}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span className="text-[11px] font-semibold text-slate-900">{pkg.rating}</span>
                      <span className="text-[11px] text-slate-600">({pkg.reviews})</span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-lg font-semibold text-white mb-0.5">{pkg.name}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-300">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{pkg.destination}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-2">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        <div>
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Duration</div>
                          <div className="text-xs font-medium text-white">{pkg.duration}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[11px] text-slate-400 line-through mb-0.5">{pkg.originalPrice}</div>
                        <div className="text-xl font-bold text-amber-500">{pkg.price}</div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Key Highlights</div>
                      <div className="flex flex-wrap gap-1">
                        {pkg.highlights.map((h, i) => (
                          <span key={i} className="px-2 py-0.5 text-[11px] bg-white/10 text-slate-300 rounded">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-1.5">Includes</div>
                      <div className="grid grid-cols-2 gap-1">
                        {pkg.features.map((f, i) => (
                          <div key={i} className="flex items-center text-xs text-slate-300">
                            <span className="text-amber-500 mr-1.5">✓</span>
                            {f}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      asChild
                      href={`/travel-tours/tours/${pkg.name.toLowerCase().replace(/\s+/g, "-")}`}
                      variant="outline"
                      size="sm"
                      className="w-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 font-medium"
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
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 font-medium px-8"
            >
              View All Tour Packages
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── POPULAR DESTINATIONS ─────────────────────────────────────────── */}
      <section ref={destinationsRef} className="py-8 md:py-10 relative z-10 backdrop-blur-sm">
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

          {/* Mobile: 2-col compact grid */}
          <motion.div
            className="grid gap-3 grid-cols-2 sm:hidden"
            initial="hidden"
            animate={isDestinationsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {popularDestinations.map((dest, index) => (
              <motion.div key={index} variants={scaleIn}>
                <div className="group relative rounded-xl overflow-hidden border border-white/10 aspect-[3/4]">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                  {/* Content pinned to bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-3">
                    <h3 className="text-sm font-semibold text-white leading-tight">{dest.name}</h3>
                    <p className="text-[10px] text-slate-300 flex items-center gap-0.5 mb-1.5">
                      <MapPin className="w-3 h-3" />{dest.country}
                    </p>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-slate-400">{dest.packages} pkgs</span>
                      <span className="text-xs font-bold text-amber-400">{dest.startingFrom}</span>
                    </div>
                    <Button
                      asChild
                      href={`/travel-tours/destinations/${dest.name.toLowerCase().replace(/\s+/g, "-")}`}
                      variant="outline"
                      size="sm"
                      className="w-full border-amber-500/60 text-amber-400 hover:bg-amber-500 hover:text-slate-900 text-[10px] py-1 h-auto rounded-lg"
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop: original 3-col card grid */}
          <motion.div
            className="hidden sm:grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
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
                      sizes="(max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-lg font-semibold text-white mb-0.5">{destination.name}</h3>
                      <p className="text-xs text-slate-300 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />{destination.country}
                      </p>
                    </div>
                  </CardImage>
                  <CardContent className="p-4">
                    <p className="text-slate-300 font-light leading-relaxed mb-2 text-xs">{destination.description}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Packages</div>
                        <div className="text-sm font-semibold text-white flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-amber-500" />{destination.packages}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">From</div>
                        <div className="text-base font-bold text-amber-500">{destination.startingFrom}</div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Button
                        asChild
                        href={`/travel-tours/destinations/${destination.name.toLowerCase().replace(/\s+/g, "-")}`}
                        variant="outline"
                        size="sm"
                        className="w-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900"
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

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section ref={testimonialsRef} className="py-8 md:py-10 relative z-10">
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
            className="grid gap-3 grid-cols-1 sm:grid-cols-2 sm:gap-4 md:gap-5"
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={scaleIn}>
                {/* Mobile: compact horizontal layout */}
                <div className="sm:hidden bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                  {/* Stars row */}
                  <div className="flex items-center gap-0.5 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                    ))}
                    <span className="ml-auto text-[10px] text-slate-500">{testimonial.date}</span>
                  </div>

                  {/* Quote */}
                  <p className="text-slate-300 text-xs leading-relaxed italic mb-3 line-clamp-3">
                    &quot;{testimonial.comment}&quot;
                  </p>

                  {/* Author row */}
                  <div className="flex items-center gap-2.5 pt-2 border-t border-white/10">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-amber-500/30">
                      <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" sizes="32px" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white text-xs font-semibold truncate">{testimonial.name}</p>
                      <p className="text-amber-500 text-[10px] truncate">{testimonial.tour}</p>
                    </div>
                  </div>
                </div>

                {/* Desktop: original card */}
                <Card variant="elevated" className="hidden sm:block h-full bg-white/10 backdrop-blur-md border border-white/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <p className="text-slate-200 font-light leading-relaxed mb-3 text-sm italic line-clamp-3">
                      &quot;{testimonial.comment}&quot;
                    </p>
                    <div className="flex items-center gap-3 pt-2 border-t border-white/20">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-amber-500/20">
                        <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" sizes="40px" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                        <div className="text-xs text-slate-300">{testimonial.role}</div>
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

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-8 md:py-12 relative z-10 backdrop-blur-sm">
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
            <span className="block font-medium mt-1 text-amber-400">Adventure?</span>
          </motion.h2>

          <motion.div variants={scaleIn} className="w-12 h-[1px] bg-amber-500 mx-auto my-4" />

          <motion.p
            className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 font-light leading-relaxed"
            variants={fadeInUp}
          >
            Apply for one of our packages or contact us to create a custom itinerary tailored to your dreams.
          </motion.p>

          <motion.div className="flex flex-row gap-3 justify-center" variants={fadeInUp}>
            <Button
              asChild
              href="/travel-tours/contact"
              variant="secondary"
              size="lg"
              className="flex-1 sm:flex-none bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-6 sm:px-8 text-sm sm:text-base"
            >
              Apply for Package
            </Button>
            <Button
              asChild
              href="/travel-tours/contact"
              variant="outline"
              size="lg"
              className="flex-1 sm:flex-none border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 px-6 sm:px-8 text-sm sm:text-base"
            >
              Custom Itinerary
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-6 pt-4 border-t border-white/10">
            <p className="text-slate-400 text-xs mb-2">Questions? We&apos;re here to help</p>
            <div className="flex flex-col gap-2 justify-center text-sm text-slate-300 sm:flex-row sm:gap-4">
              <a href="tel:+923001234567" className="hover:text-amber-500 transition-colors text-sm">
                📞 +92 300 1234567
              </a>
              <span className="hidden sm:inline text-slate-600">|</span>
              <a href="mailto:travel@square360.com" className="hover:text-amber-500 transition-colors text-sm">
                ✉️ travel@square360.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}