import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

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
    },
    {
      name: "Mountain Adventure",
      location: "Swiss Alps",
      description: "Breathtaking peaks and alpine experiences",
      gradient: "from-slate-500 to-slate-700",
      price: "From $2,499",
    },
    {
      name: "Cultural Journey",
      location: "Southeast Asia",
      description: "Rich history and vibrant traditions",
      gradient: "from-orange-500 to-red-500",
      price: "From $899",
    },
    {
      name: "Urban Explorer",
      location: "European Capitals",
      description: "Historic cities and modern culture",
      gradient: "from-purple-500 to-pink-500",
      price: "From $1,599",
    },
    {
      name: "Safari Experience",
      location: "African Savanna",
      description: "Wildlife encounters and natural wonders",
      gradient: "from-yellow-500 to-orange-500",
      price: "From $3,299",
    },
    {
      name: "Island Hopping",
      location: "Mediterranean",
      description: "Charming islands and coastal beauty",
      gradient: "from-blue-500 to-cyan-500",
      price: "From $1,899",
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
              <div
                className={`h-64 bg-gradient-to-br ${destination.gradient} relative`}
              >
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
