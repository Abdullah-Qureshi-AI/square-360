import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with our travel and tours team",
};

export default function TravelContactPage() {
  return (
    <>
      <Section variant="yellow" className="border-b-4 border-black">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black mb-4">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
            Ready to plan your next adventure? Let's make it happen!
          </p>
        </div>
      </Section>

      <Section variant="default">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <Card variant="elevated" className="p-8">
                <h2 className="text-2xl font-bold text-black mb-6">
                  Plan Your Trip
                </h2>
                <ContactForm submitLabel="Send Message" />
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card variant="outlined" className="p-8">
                <h3 className="text-xl font-bold text-black mb-4">Office</h3>
                <p className="text-gray-700 leading-relaxed">
                  456 Travel Avenue
                  <br />
                  City, State 12345
                  <br />
                  United States
                </p>
              </Card>

              <Card variant="outlined" className="p-8">
                <h3 className="text-xl font-bold text-black mb-4">Contact</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Phone:</strong> (555) 987-6543
                  <br />
                  <strong>Email:</strong> travel@square360.com
                  <br />
                  <strong>Hours:</strong> Mon-Sat 9AM-7PM
                </p>
              </Card>

              <Card variant="default" className="p-8 bg-[#FFD700]">
                <h3 className="text-xl font-bold text-black mb-4">
                  Why Choose Us?
                </h3>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">✓</span>
                    <span>Curated Experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">✓</span>
                    <span>Expert Local Guides</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">✓</span>
                    <span>24/7 Support</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
