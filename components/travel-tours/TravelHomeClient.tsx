"use client";

import { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Award, Calendar, MapPin, Star, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/Section";
import { Card, CardContent, CardImage } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { fadeInRight } from "@/lib/motion";
import type {
  DestinationSummary,
  OwnerProfile,
  Testimonial,
  TravelSiteSettings,
  TravelTour,
} from "@/lib/content/types";

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

const ownerIconMap = {
  award: Award,
  users: Users,
  mapPin: MapPin,
  calendar: Calendar,
} as const;

function formatDuration(days: number) {
  const nights = Math.max(days - 1, 0);
  return `${days} Days / ${nights} Nights`;
}

function formatHrefTelephone(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

function formatMailHref(email: string) {
  return `mailto:${email}`;
}

export function TravelHomeClient({
  featuredTours,
  destinations,
  testimonials,
  ownerProfile,
  siteSettings,
}: {
  featuredTours: TravelTour[];
  destinations: DestinationSummary[];
  testimonials: Testimonial[];
  ownerProfile: OwnerProfile;
  siteSettings: TravelSiteSettings;
}) {
  const packagesRef = useRef<HTMLDivElement>(null);
  const destinationsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const isPackagesInView = useInView(packagesRef, { once: true, amount: 0.05 });
  const isDestinationsInView = useInView(destinationsRef, { once: true, amount: 0.05 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.05 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.2 });

  const ownerStats = useMemo(
    () =>
      ownerProfile.stats.map((stat) => ({
        ...stat,
        Icon: ownerIconMap[stat.icon],
      })),
    [ownerProfile.stats]
  );

  return (
    <>
      <section className="relative z-10 py-8 sm:min-h-[72vh] sm:py-10 sm:flex sm:items-center">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="absolute top-1/3 left-0 h-72 w-72 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16 xl:gap-20 items-center">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
              <motion.div variants={fadeInUp} className="mb-4">
                <span className="inline-flex items-center rounded-full border border-amber-500/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-500 sm:px-4 sm:py-1.5">
                  Discover. Explore. Experience.
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-[2.6rem] font-light leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]"
              >
                Travel &amp; <span className="text-amber-400">Tours</span>
              </motion.h1>

              <motion.div variants={scaleIn} className="mt-4 h-[2px] w-12 bg-amber-500 sm:mt-6 sm:w-14" />

              <motion.p variants={fadeInUp} className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-lg md:text-xl">
                Curated journeys to the world&apos;s most breathtaking destinations
              </motion.p>
              <motion.p variants={fadeInUp} className="mt-2 max-w-xl text-xs leading-relaxed text-slate-500 sm:text-base sm:text-slate-400">
                Your adventure begins here. Experience unforgettable travel with our expertly crafted tours.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <Button
                  asChild
                  href="/travel-tours/tours"
                  variant="primary"
                  size="lg"
                  className="w-full bg-amber-500 px-8 font-semibold text-slate-900 hover:bg-amber-600 sm:w-auto"
                >
                  View Packages
                </Button>
                <Button
                  asChild
                  href="/travel-tours/contact"
                  variant="outline"
                  size="lg"
                  className="w-full border-slate-600 px-8 text-slate-300 hover:border-slate-500 hover:bg-slate-800 sm:w-auto"
                >
                  Plan Custom Trip
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-sm overflow-hidden sm:overflow-visible">
                <div className="absolute -inset-2 rounded-3xl border border-amber-500/10 sm:-inset-4" />
                <div className="absolute hidden rounded-3xl border border-amber-500/5 sm:block sm:-inset-8" />

                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl shadow-black/40">
                  <div className="relative h-44 w-full bg-gradient-to-br from-slate-700 to-slate-800 sm:h-60">
                  <Image
                      src={ownerProfile.image}
                      alt={`${ownerProfile.name} - ${ownerProfile.title}`}
                      fill
                      className="object-cover"
                      style={{ objectPosition: "center 15%", transform: "scale(0.92)", transformOrigin: "top center" }}
                      onError={(event) => {
                        (event.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-amber-500 px-2.5 py-1.5 text-[11px] font-bold text-slate-900 shadow-lg sm:top-4 sm:right-4 sm:px-3 sm:text-xs">
                      <Star className="h-3 w-3 fill-slate-900" />
                      {ownerProfile.badge}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="mb-2 flex items-start justify-between">
                      <div>
                        <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                          {ownerProfile.name}
                        </h3>
                        <p className="mt-0.5 text-xs font-medium text-amber-400">{ownerProfile.title}</p>
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-amber-500/25 bg-amber-500/15">
                        <Award className="h-4 w-4 text-amber-400" />
                      </div>
                    </div>

                    <p className="mb-4 text-xs leading-relaxed text-slate-400">{ownerProfile.bio}</p>

                    <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-3 sm:grid-cols-4 sm:gap-1">
                      {ownerStats.map(({ label, value, Icon }) => (
                        <div key={label} className="text-center">
                          <Icon className="mx-auto mb-1 h-3.5 w-3.5 text-amber-500" />
                          <p className="text-sm font-bold leading-none text-white">{value}</p>
                          <p className="mx-auto mt-0.5 max-w-[88px] text-[9px] leading-tight text-slate-500">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-2 left-2 h-4 w-4 rounded-full bg-amber-500 shadow-lg shadow-amber-500/40 sm:-bottom-3 sm:-left-3 sm:h-6 sm:w-6" />
                <div className="absolute top-2 right-2 h-3 w-3 rounded-full border border-amber-500/60 bg-amber-500/40 sm:-top-3 sm:-right-3 sm:h-4 sm:w-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={packagesRef} className="relative z-10 py-8 md:py-10">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Best Deals"
            title="Featured Tour Packages"
            description="Handpicked travel experiences with exclusive discounts and premium amenities"
            dark
            compact
          />

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5"
            initial="hidden"
            animate={isPackagesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {featuredTours.map((tour) => (
              <motion.div key={tour.id} variants={scaleIn}>
                <div className="group overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:shadow-xl">
                  <div className="relative h-44 overflow-hidden md:h-40">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    <div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-[11px] text-slate-900 backdrop-blur-sm">
                      <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                      <span className="font-semibold">{tour.rating}</span>
                      <span className="text-slate-600">({tour.reviews})</span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="rounded-full bg-amber-500 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-900 shadow-lg">
                        {tour.discount}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="mb-0.5 text-base font-semibold text-white sm:text-lg">{tour.title}</h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-300">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{tour.destination}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 md:p-4">
                    <div className="mb-2 flex flex-col gap-3 border-b border-white/10 pb-2 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5 text-amber-500" />
                        <div>
                          <div className="mb-0.5 text-[10px] uppercase tracking-wider text-slate-400">Duration</div>
                          <div className="text-xs font-medium text-white md:text-sm">{formatDuration(tour.durationDays)}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="mb-0.5 text-[11px] text-slate-400 line-through">{tour.originalPrice}</div>
                        <div className="text-lg font-bold text-amber-500 md:text-xl">{tour.price}</div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <div className="mb-1 text-[10px] uppercase tracking-wider text-slate-400">Key Highlights</div>
                      <div className="flex flex-wrap gap-1">
                        {tour.highlights.map((highlight) => (
                          <span key={highlight} className="rounded bg-white/10 px-2 py-0.5 text-[11px] text-slate-300">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="mb-1.5 text-[10px] uppercase tracking-wider text-slate-400">Includes</div>
                      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                        {tour.features.map((feature) => (
                          <div key={feature} className="flex items-center text-[11px] text-slate-300 md:text-xs">
                            <span className="mr-1.5 text-amber-500">✓</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      asChild
                      href={`/travel-tours/tours/${tour.slug}`}
                      variant="outline"
                      size="sm"
                      className="w-full border-amber-500 font-medium text-amber-500 hover:border-amber-500 hover:bg-amber-500 hover:text-slate-900"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-6 text-center"
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
              className="border-amber-500 px-8 font-medium text-amber-500 hover:border-amber-500 hover:bg-amber-500 hover:text-slate-900"
            >
              View All Tour Packages
            </Button>
          </motion.div>
        </div>
      </section>

      <section ref={destinationsRef} className="relative z-10 py-8 md:py-10 backdrop-blur-sm">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Explore"
            title="Popular Destinations"
            description="Discover our most beloved travel destinations around the world"
            dark
            compact
          />

          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate={isDestinationsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {destinations.map((destination) => (
              <motion.div key={destination.id} variants={scaleIn}>
                <Card variant="elevated" hover className="h-full group border border-white/10 bg-white/5 backdrop-blur-sm">
                  <CardImage className="relative h-44 overflow-hidden">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="mb-0.5 text-lg font-semibold text-white">{destination.name}</h3>
                      <p className="flex items-center gap-1 text-xs text-slate-300">
                        <MapPin className="h-3.5 w-3.5" />
                        {destination.country}
                      </p>
                    </div>
                  </CardImage>
                  <CardContent className="p-4">
                    <p className="mb-2 text-xs font-light leading-relaxed text-slate-300">
                      {destination.description}
                    </p>
                    <div className="flex items-center justify-between border-t border-white/10 pt-2">
                      <div>
                        <div className="mb-0.5 text-[10px] uppercase tracking-wider text-slate-400">Packages</div>
                        <div className="flex items-center gap-1 text-sm font-semibold text-white">
                          <Users className="h-3.5 w-3.5 text-amber-500" />
                          {destination.packages}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="mb-0.5 text-[10px] uppercase tracking-wider text-slate-400">From</div>
                        <div className="text-base font-bold text-amber-500">{destination.startingFrom}</div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Button
                        asChild
                        href={`/travel-tours/destinations/${destination.slug}`}
                        variant="outline"
                        size="sm"
                        className="w-full border-amber-500 text-amber-500 hover:border-amber-500 hover:bg-amber-500 hover:text-slate-900"
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

      <section ref={testimonialsRef} className="relative z-10 py-8 md:py-10">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            subtitle="Testimonials"
            title="Customer Feedback"
            description="Hear from our travelers about their amazing experiences with us"
            dark
            compact
          />

          <motion.div
            className="grid gap-4 md:grid-cols-2 md:gap-5"
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={scaleIn}>
                <Card variant="elevated" className="h-full border border-white/20 bg-white/10 backdrop-blur-md">
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <p className="mb-3 line-clamp-3 text-sm font-light italic leading-relaxed text-slate-200">
                      &quot;{testimonial.comment}&quot;
                    </p>
                    <div className="flex items-center gap-3 border-t border-white/20 pt-2">
                      <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-amber-500/20">
                        <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" sizes="40px" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                        <div className="text-xs text-slate-300">{testimonial.role}</div>
                        <div className="mt-0.5 truncate text-[10px] font-medium text-amber-500">
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

      <section className="relative z-10 py-8 md:py-12 backdrop-blur-sm">
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
            className="mb-3 text-2xl font-light text-white md:text-3xl lg:text-4xl"
            variants={fadeInUp}
          >
            Ready for Your Next
            <span className="mt-1 block font-medium text-amber-400">Adventure?</span>
          </motion.h2>

          <motion.div variants={scaleIn} className="mx-auto my-4 h-[1px] w-12 bg-amber-500" />

          <motion.p
            className="mb-6 text-sm font-light leading-relaxed text-slate-300 sm:text-base md:text-lg"
            variants={fadeInUp}
          >
            Apply for one of our packages or contact us to create a custom itinerary tailored to your dreams.
          </motion.p>

          <motion.div className="flex flex-col justify-center gap-3 sm:flex-row" variants={fadeInUp}>
            <Button
              asChild
              href="/travel-tours/contact"
              variant="secondary"
              size="lg"
              className="bg-amber-500 px-6 text-sm font-semibold text-slate-900 hover:bg-amber-600 sm:px-8 sm:text-base"
            >
              Apply for Package
            </Button>
            <Button
              asChild
              href="/travel-tours/contact"
              variant="outline"
              size="lg"
              className="border-amber-500 px-6 text-sm text-amber-500 hover:border-amber-500 hover:bg-amber-500 hover:text-slate-900 sm:px-8 sm:text-base"
            >
              Custom Itinerary
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-6 border-t border-white/10 pt-4">
            <p className="mb-2 text-xs text-slate-400">Questions? We&apos;re here to help</p>
            <div className="flex flex-col justify-center gap-2 text-sm text-slate-300 sm:flex-row sm:gap-4">
              <a href={formatHrefTelephone(siteSettings.phone)} className="text-sm transition-colors hover:text-amber-500">
                📞 {siteSettings.phone}
              </a>
              <span className="hidden text-slate-600 sm:inline">|</span>
              <a href={formatMailHref(siteSettings.email)} className="text-sm transition-colors hover:text-amber-500">
                ✉️ {siteSettings.email}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
