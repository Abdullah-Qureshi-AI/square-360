import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "Properties",
  description: "Browse our available properties and real estate listings",
};

export default function RealEstatePropertiesPage() {
  const properties = [
    {
      title: "Modern Residential Complex",
      location: "Downtown District",
      type: "Residential",
      size: "2,500 sq ft",
      price: "$450,000",
      features: ["3 Bedrooms", "2 Bathrooms", "Parking"],
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    },
    {
      title: "Commercial Office Space",
      location: "Business Park",
      type: "Commercial",
      size: "5,000 sq ft",
      price: "$850,000",
      features: ["Prime Location", "Modern Facilities", "Parking"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    },
    {
      title: "Luxury Condominium",
      location: "Waterfront Area",
      type: "Residential",
      size: "1,800 sq ft",
      price: "$625,000",
      features: ["Ocean View", "2 Bedrooms", "Balcony"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    },
    {
      title: "Development Land",
      location: "Suburban Zone",
      type: "Land",
      size: "10 acres",
      price: "$1,200,000",
      features: ["Prime Location", "Zoned", "Utilities"],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop",
    },
    {
      title: "Luxury Villa",
      location: "Hillside Estate",
      type: "Residential",
      size: "4,200 sq ft",
      price: "$1,850,000",
      features: ["5 Bedrooms", "Pool", "Garden"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    },
    {
      title: "Retail Space",
      location: "Shopping District",
      type: "Commercial",
      size: "3,500 sq ft",
      price: "$750,000",
      features: ["High Traffic", "Corner Location", "Parking"],
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop",
    },
  ];

  return (
    <>
      <Section variant="dark" className="border-b-4 border-[#FFD700]">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Our Properties
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our carefully curated selection of premium properties
          </p>
        </div>
      </Section>

      <Section variant="default">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, index) => (
            <Card key={index} variant="elevated" hover className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FFD700] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-600 mb-4">{property.location}</p>
                <ul className="mb-4 space-y-2">
                  {property.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <span className="text-[#FFD700] mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-4 pt-4 border-t-2 border-[#FFD700]">
                  <span className="text-sm text-gray-600">{property.size}</span>
                  <span className="text-2xl font-bold text-black">
                    {property.price}
                  </span>
                </div>
                <Button
                  asChild
                  href="/real-estate/contact"
                  variant="secondary"
                  size="md"
                  className="w-full"
                >
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
