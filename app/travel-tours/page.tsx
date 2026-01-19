import { Hero } from "@/components/ui/Hero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "Home",
  description: "Travel & Tours - Discover Amazing Destinations",
};

export default function TravelHomePage() {
  const features = [
    {
      title: "Adventure Tours",
      description:
        "Thrilling adventures for the bold and adventurous traveler. Experience the world like never before.",
      icon: "🏔️",
      gradient: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1464822759844-d150ad6bfb06?w=600&h=400&fit=crop",
    },
    {
      title: "Cultural Experiences",
      description:
        "Immerse yourself in local cultures and traditions. Authentic experiences that enrich your soul.",
      icon: "🎭",
      gradient: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=600&h=400&fit=crop",
    },
    {
      title: "Beach Getaways",
      description:
        "Relax and unwind at the world's most beautiful beaches. Paradise is just a booking away.",
      icon: "🏖️",
      gradient: "from-cyan-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
    },
    {
      title: "City Breaks",
      description:
        "Explore vibrant cities and urban experiences. Discover hidden gems in the world's greatest metropolises.",
      icon: "🏙️",
      gradient: "from-pink-500 to-rose-500",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&h=400&fit=crop",
    },
    {
      title: "Nature & Wildlife",
      description:
        "Connect with nature and witness incredible wildlife. Unforgettable encounters with the natural world.",
      icon: "🦁",
      gradient: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&h=400&fit=crop",
    },
    {
      title: "Luxury Travel",
      description:
        "Premium travel experiences with world-class service. Indulge in the finest accommodations and experiences.",
      icon: "✨",
      gradient: "from-amber-500 to-orange-500",
      image: "https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600&h=400&fit=crop",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        variant="yellow"
        title="Travel & Tours"
        subtitle="Your Journey Starts Here"
        description="Embark on unforgettable journeys and discover the world's most beautiful destinations. Your adventure awaits."
        primaryCTA={{
          label: "Explore Destinations",
          href: "/travel-tours/destinations",
        }}
        secondaryCTA={{
          label: "View Tours",
          href: "/travel-tours/tours",
        }}
        className="border-b-4 border-black"
        backgroundImage="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=1080&fit=crop"
        imageAlt="Beautiful travel destination"
      />

      {/* Features Grid */}
      <Section variant="default">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Discover Your Next Adventure
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Curated experiences designed to create memories that last a lifetime
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
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-30`} />
              </div>
              <div className="p-8">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Button
                  asChild
                  href="/travel-tours/tours"
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Explore
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section variant="yellow">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Why Choose Us
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Curated Experiences", desc: "Handpicked destinations" },
            { title: "Expert Guides", desc: "Local knowledge & insights" },
            { title: "24/7 Support", desc: "Always here for you" },
            { title: "Best Value", desc: "Competitive pricing" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-bold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
            Let us help you plan the perfect trip. Contact us to begin your
            adventure and create memories that will last forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              href="/travel-tours/contact"
              variant="primary"
              size="lg"
            >
              Plan Your Trip
            </Button>
            <Button
              asChild
              href="/travel-tours/destinations"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Browse Destinations
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
