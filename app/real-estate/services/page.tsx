import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "Services",
  description: "Comprehensive real estate and construction services",
};

export default function RealEstateServicesPage() {
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
      icon: "🏢",
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
      icon: "🔨",
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
      icon: "📊",
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
      icon: "📐",
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
      icon: "🔑",
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
      icon: "💼",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    },
  ];

  return (
    <>
      <Section variant="dark" className="border-b-4 border-[#FFD700]">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions for all your real estate and construction needs
          </p>
        </div>
      </Section>

      <Section variant="default">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} variant="elevated" hover className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-sm text-gray-700"
                    >
                      <span className="text-[#FFD700] mr-2 font-bold">✓</span>
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
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
