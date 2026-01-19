import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "Tours",
  description: "Browse our curated travel tours and packages",
};

export default function TravelToursPage() {
  const tours = [
    {
      title: "7-Day Adventure Package",
      duration: "7 days",
      price: "$1,299",
      type: "Adventure",
      description: "Thrilling activities and outdoor adventures",
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1464822759844-d150ad6bfb06?w=800&h=600&fit=crop",
    },
    {
      title: "Cultural Immersion Tour",
      duration: "10 days",
      price: "$1,899",
      type: "Cultural",
      description: "Deep dive into local cultures and traditions",
      gradient: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=800&h=600&fit=crop",
    },
    {
      title: "Luxury Beach Retreat",
      duration: "5 days",
      price: "$2,499",
      type: "Luxury",
      description: "Premium beachfront experience",
      gradient: "from-cyan-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    },
    {
      title: "City Explorer Package",
      duration: "4 days",
      price: "$899",
      type: "City",
      description: "Urban exploration and city highlights",
      gradient: "from-pink-500 to-rose-500",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop",
    },
    {
      title: "Wildlife Safari Expedition",
      duration: "12 days",
      price: "$3,299",
      type: "Adventure",
      description: "Unforgettable wildlife encounters",
      gradient: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
    },
    {
      title: "Romantic Getaway",
      duration: "6 days",
      price: "$1,599",
      type: "Luxury",
      description: "Perfect for couples and honeymooners",
      gradient: "from-amber-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800&h=600&fit=crop",
    },
  ];

  return (
    <>
      <Section variant="yellow" className="border-b-4 border-black">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            Tours & Packages
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Carefully curated tours designed for unforgettable experiences
          </p>
        </div>
      </Section>

      <Section variant="default">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, index) => (
            <Card key={index} variant="elevated" hover className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${tour.gradient} opacity-30`} />
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {tour.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">
                  {tour.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {tour.description}
                </p>
                <div className="flex items-center justify-between mb-4 pt-4 border-t-2 border-[#FFD700]">
                  <span className="text-sm text-gray-600">{tour.duration}</span>
                  <span className="text-2xl font-bold text-black">
                    {tour.price}
                  </span>
                </div>
                <Button
                  asChild
                  href="/travel-tours/contact"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
