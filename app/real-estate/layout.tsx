import type { Metadata } from "next";
import { RealEstateNav } from "@/components/navigation/RealEstateNav";

export const metadata: Metadata = {
  title: "Real Estate & Construction",
  description:
    "Professional real estate services and construction solutions. Trusted partners for your property needs.",
  keywords: [
    "real estate",
    "construction",
    "property",
    "building",
    "development",
    "architecture",
  ],
  openGraph: {
    title: "Real Estate & Construction | Square Three Sixty",
    description:
      "Professional real estate services and construction solutions.",
    type: "website",
  },
};

export default function RealEstateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen flex-col">
        <RealEstateNav />
        <main className="flex-1">{children}</main>
        <footer className="border-t-4 border-[#FFD700] bg-black text-white">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-[#FFD700]">
                  Square Three Sixty
                </h3>
                <p className="text-gray-400 text-sm">
                  Excellence in Real Estate & Construction
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="/real-estate" className="hover:text-[#FFD700] transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/real-estate/properties" className="hover:text-[#FFD700] transition-colors">
                      Properties
                    </a>
                  </li>
                  <li>
                    <a href="/real-estate/services" className="hover:text-[#FFD700] transition-colors">
                      Services
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">
                  Company
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <a href="/real-estate/about" className="hover:text-[#FFD700] transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/real-estate/contact" className="hover:text-[#FFD700] transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide">
                  Contact
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>Phone: (555) 123-4567</li>
                  <li>Email: info@square360.com</li>
                  <li>Hours: Mon-Fri 9AM-6PM</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 pt-8 text-center text-sm text-gray-400">
              <p>
                © {new Date().getFullYear()} Square Three Sixty - Real Estate
                & Construction. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
