"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CategorySelector } from "@/components/landing/CategorySelector";
import { Button } from "@/components/ui/Button";

// Refined animation variants - subtle and professional
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
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
  }
};

export default function HomePage() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  return (
    <main className="min-h-screen relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle grid pattern - Applied to entire page */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Minimal accent line at top */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent z-50" />

      {/* Hero Section - Clean and Professional */}
      <section className="relative min-h-[90vh] flex items-center justify-center z-10 py-8">
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
                Est. 2008
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight"
            >
              Square Three
              <span className="block font-semibold mt-1">Sixty</span>
            </motion.h1>

            {/* Divider */}
            <motion.div variants={scaleIn} className="w-16 h-[1px] bg-amber-500 mx-auto mb-8" />

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-4"
            >
              Excellence in Real Estate & Travel
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
            >
              Building dreams, crafting journeys. Your trusted partner for premium construction solutions and unforgettable travel experiences.
            </motion.p>

            {/* CTA - Minimal */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                href="#services"
                variant="primary"
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium px-8"
              >
                Explore Services
              </Button>
              <Button
                asChild
                href="#contact"
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 px-8"
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator - subtle */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <motion.div
              className="w-[1px] h-16 bg-gradient-to-b from-slate-600 to-transparent"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Track Record Stats - Clean presentation */}
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
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto"
          >
            {[
              { value: "500+", label: "Projects Completed", sublabel: "Since 2008" },
              { value: "1,200+", label: "Happy Clients", sublabel: "Worldwide" },
              { value: "15+", label: "Years Experience", sublabel: "In Industry" },
              { value: "98%", label: "Client Satisfaction", sublabel: "Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="mb-3">
                  <div className="text-4xl md:text-5xl font-light text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-amber-500 font-medium tracking-wider uppercase">
                    {stat.sublabel}
                  </div>
                </div>
                <div className="text-sm md:text-base text-slate-300 font-light">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        ref={servicesRef}
        className="py-20 md:py-32 relative z-10 backdrop-blur-sm"
      >
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.span
              variants={fadeInUp}
              className="inline-block text-xs font-medium tracking-[0.2em] text-amber-600 uppercase mb-4"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6"
            >
              What We Do Best
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-slate-300 font-light leading-relaxed"
            >
              Choose your path and discover how we can bring your vision to life
            </motion.p>
          </motion.div>

          <CategorySelector />
        </div>
      </section>

      {/* Client Trust Section */}
      <section className="py-20 md:py-32 relative z-10 backdrop-blur-sm">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <span className="inline-block text-xs font-medium tracking-[0.2em] text-amber-500 uppercase mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                What Our Clients Say
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Square Three Sixty delivered our commercial complex ahead of schedule with exceptional quality. Their attention to detail is unmatched.",
                  author: "Ahmed Khan",
                  role: "CEO, Khan Enterprises"
                },
                {
                  quote: "Our corporate retreat organized by their travel team was flawless. Every detail was perfect, from accommodation to activities.",
                  author: "Sarah Johnson",
                  role: "HR Director, Tech Solutions Inc."
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-sm border border-white/20"
                >
                  <div className="text-amber-500 mb-4 text-3xl">"</div>
                  <p className="text-slate-200 leading-relaxed mb-6 font-light">
                    {testimonial.quote}
                  </p>
                  <div className="border-t border-white/20 pt-4">
                    <div className="font-medium text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-slate-300 font-light">
                      {testimonial.role}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      
    </main>
  );
}