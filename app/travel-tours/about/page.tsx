import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About Us",
  description: "Learn about our travel and tours expertise",
};

export default function TravelAboutPage() {
  return (
    <>
      <Section variant="yellow" className="border-b-4 border-black">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Creating unforgettable travel experiences
          </p>
        </div>
      </Section>

      <Section variant="default">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <section className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At Square Three Sixty Travel & Tours, we believe that travel is
              more than just visiting places—it&apos;s about creating memories,
              experiencing cultures, and discovering the world. Our mission is to
              make every journey extraordinary.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We curate experiences that go beyond the ordinary, connecting you
              with destinations in meaningful ways that leave lasting impressions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              With a passion for travel and years of experience, we curate
              exceptional tours and travel experiences. From adventure-packed
              expeditions to relaxing beach getaways, we design trips that match
              your dreams and exceed your expectations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team of travel experts works tirelessly to ensure every detail
              of your journey is perfect, from the moment you book until you
              return home with unforgettable memories.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Why Choose Us
            </h2>
            <ul className="space-y-4 list-none">
              {[
                "Curated experiences tailored to your preferences",
                "Expert local guides and insider knowledge",
                "24/7 support during your travels",
                "Best value for your travel budget",
                "Commitment to sustainable and responsible tourism",
                "Unforgettable memories guaranteed",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#FFD700] mr-3 text-2xl font-bold">✓</span>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-12 text-center">
            <Button
              asChild
              href="/travel-tours/contact"
              variant="primary"
              size="lg"
            >
              Plan Your Trip
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
