import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About Us",
  description: "Learn about our real estate and construction expertise",
};

export default function RealEstateAboutPage() {
  return (
    <>
      <Section variant="dark" className="border-b-4 border-[#FFD700]">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Building excellence in real estate and construction
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
              At Square Three Sixty, we are committed to delivering exceptional
              real estate and construction services. Our mission is to build
              lasting relationships with our clients through trust, transparency,
              and outstanding results.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that every project is unique and deserves personalized
              attention. From initial consultation to final delivery, we ensure
              that every detail is executed with precision and care.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Our Expertise
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              With years of experience in the industry, we bring comprehensive
              knowledge and expertise to every project. From property development
              to construction management, we handle projects of all sizes with
              precision and care.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team consists of experienced professionals who are passionate
              about what they do. We stay updated with the latest industry trends
              and technologies to provide you with the best solutions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Why Choose Us
            </h2>
            <ul className="space-y-4 list-none">
              {[
                "Proven track record of successful projects",
                "Experienced and professional team",
                "Transparent communication throughout the process",
                "Commitment to quality and excellence",
                "Client-focused approach",
                "Competitive pricing and value",
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
              href="/real-estate/contact"
              variant="secondary"
              size="lg"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
