import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "Home",
  description: "Real Estate & Construction Services",
};

export default function RealEstateHomePage() {
  const features = [
    {
      title: "Property Development",
      description:
        "Comprehensive property development services from planning to completion. We handle every aspect of your project with precision and expertise.",
      icon: "🏢",
      stats: "500+ Projects",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    },
    {
      title: "Construction Management",
      description:
        "Expert project management ensuring quality, timely delivery, and budget adherence. Your vision, our execution.",
      icon: "🔨",
      stats: "15+ Years Experience",
      image: "https://images.unsplash.com/photo-1504307651254-35680f893dfe?w=600&h=400&fit=crop",
    },
    {
      title: "Real Estate Consulting",
      description:
        "Strategic advice for your real estate investments and decisions. Data-driven insights for optimal returns.",
      icon: "📊",
      stats: "1000+ Clients",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    },
    {
      title: "Architectural Design",
      description:
        "Innovative and functional architectural solutions. Modern designs that stand the test of time.",
      icon: "📐",
      stats: "Award Winning",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    },
    {
      title: "Property Management",
      description:
        "Professional property management services for optimal returns and tenant satisfaction.",
      icon: "🔑",
      stats: "24/7 Support",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    },
    {
      title: "Investment Advisory",
      description:
        "Expert guidance for real estate investment opportunities. Maximize your portfolio potential.",
      icon: "💼",
      stats: "Trusted Partner",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        variant="dark"
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
        className="border-b-4 border-[#FFD700]"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
        imageAlt="Modern building construction"
      />

      {/* Features Grid */}
      <Section variant="default">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Our Expertise
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your real estate and construction needs
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} variant="elevated" hover className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="pt-4 border-t-2 border-[#FFD700]">
                  <p className="text-sm font-semibold text-black uppercase tracking-wide">
                    {feature.stats}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section variant="yellow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-black mb-2">
              500+
            </div>
            <div className="text-sm sm:text-base font-semibold uppercase tracking-wide opacity-80">
              Projects Completed
            </div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-black mb-2">
              1000+
            </div>
            <div className="text-sm sm:text-base font-semibold uppercase tracking-wide opacity-80">
              Satisfied Clients
            </div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-black mb-2">
              15+
            </div>
            <div className="text-sm sm:text-base font-semibold uppercase tracking-wide opacity-80">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-4xl sm:text-5xl font-bold text-black mb-2">
              50+
            </div>
            <div className="text-sm sm:text-base font-semibold uppercase tracking-wide opacity-80">
              Expert Team
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Vision?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            Contact us today to discuss your real estate or construction project.
            Let's turn your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              href="/real-estate/contact"
              variant="primary"
              size="lg"
            >
              Get Started
            </Button>
            <Button
              asChild
              href="/real-estate/about"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
