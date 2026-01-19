import { CategorySelector } from "@/components/landing/CategorySelector";
import { Hero } from "@/components/ui/Hero";

export const metadata = {
  title: "Square Three Sixty",
  description: "Choose your category: Real Estate & Construction or Travel & Tours",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        variant="default"
        title="Square Three Sixty"
        subtitle="Premium Services"
        description="Excellence in Real Estate, Construction, and Travel Experiences"
        className="border-b-4 border-black"
      />

      {/* Category Selection */}
      <section className="py-20 sm:py-32 bg-[#F5F5F5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Choose Your Path
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Select a category to explore our premium services
            </p>
          </div>
          <CategorySelector />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-black text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today to discover how we can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/real-estate/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#FFD700] text-black font-semibold rounded-lg hover:bg-[#FFC700] transition-colors"
            >
              Real Estate Contact
            </a>
            <a
              href="/travel-tours/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              Travel Contact
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
