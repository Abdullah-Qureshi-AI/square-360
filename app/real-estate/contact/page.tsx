import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with our real estate and construction team",
};

export default function RealEstateContactPage() {
  return (
    <>
      <Section variant="dark" className="border-b-4 border-[#FFD700]">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question or ready to start your project? We'd love to hear from you.
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
                  Send us a Message
                </h2>
                <ContactForm submitLabel="Send Message" />
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card variant="outlined" className="p-8">
                <h3 className="text-xl font-bold text-black mb-4">Office</h3>
                <p className="text-gray-700 leading-relaxed">
                  123 Business Street
                  <br />
                  City, State 12345
                  <br />
                  United States
                </p>
              </Card>

              <Card variant="outlined" className="p-8">
                <h3 className="text-xl font-bold text-black mb-4">Contact</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Phone:</strong> (555) 123-4567
                  <br />
                  <strong>Email:</strong> info@square360.com
                  <br />
                  <strong>Hours:</strong> Mon-Fri 9AM-6PM
                </p>
              </Card>

              <Card variant="default" className="p-8 bg-[#FFD700]">
                <h3 className="text-xl font-bold text-black mb-4">
                  Why Choose Us?
                </h3>
                <ul className="space-y-2 text-gray-800">
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">✓</span>
                    <span>15+ Years Experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">✓</span>
                    <span>500+ Projects Completed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-black mr-2 font-bold">✓</span>
                    <span>1000+ Satisfied Clients</span>
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
