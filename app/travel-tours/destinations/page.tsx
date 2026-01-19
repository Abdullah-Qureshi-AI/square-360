import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "Destinations",
  description: "Explore our amazing travel destinations",
};

export default function TravelDestinationsPage() {
  const destinations = [
    {
      name: "Tropical Paradise",
      location: "Caribbean Islands",
      description: "Crystal clear waters and pristine beaches await you",
      gradient: "from-cyan-500 to-blue-500",
      price: "From $1,299",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    },
    {
      name: "Mountain Adventure",
      location: "Swiss Alps",
      description: "Breathtaking peaks and alpine experiences",
      gradient: "from-slate-500 to-slate-700",
      price: "From $2,499",
      image: "https://images.unsplash.com/photo-1464822759844-d150ad6bfb06?w=800&h=600&fit=crop",
    },
    {
      name: "Cultural Journey",
      location: "Southeast Asia",
      description: "Rich history and vibrant traditions",
      gradient: "from-orange-500 to-red-500",
      price: "From $899",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=800&h=600&fit=crop",
    },
    {
      name: "Urban Explorer",
      location: "European Capitals",
      description: "Historic cities and modern culture",
      gradient: "from-purple-500 to-pink-500",
      price: "From $1,599",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop",
    },
    {
      name: "Safari Experience",
      location: "African Savanna",
      description: "Wildlife encounters and natural wonders",
      gradient: "from-yellow-500 to-orange-500",
      price: "From $3,299",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop",
    },
    {
      name: "Island Hopping",
      location: "Mediterranean",
      description: "Charming islands and coastal beauty",
      gradient: "from-blue-500 to-cyan-500",
      price: "From $1,899",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    },
  ];

  return (
    <>
      <Section variant="yellow" className="border-b-4 border-black">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            Destinations
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Discover amazing places around the world
          </p>
        </div>
      </Section>

      <Section variant="default">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination, index) => (
            <Card key={index} variant="elevated" hover className="overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${destination.gradient} opacity-20`} />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-sm font-semibold text-gray-600 mb-1">
                      {destination.location}
                    </p>
                    <p className="text-2xl font-bold text-black">
                      {destination.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {destination.description}
                </p>
                <div className="flex items-center justify-between mb-4 pt-4 border-t-2 border-[#FFD700]">
                  <span className="text-sm text-gray-600">Starting at</span>
                  <span className="text-xl font-bold text-black">
                    {destination.price}
                  </span>
                </div>
                <Button
                  asChild
                  href="/travel-tours/tours"
                  variant="primary"
                  size="md"
                  className="w-full"
                >
                  Explore
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
