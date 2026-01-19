import type { Metadata } from "next";
import { TravelNav } from "@/components/navigation/TravelNav";

export const metadata: Metadata = {
  title: "Travel & Tours",
  description:
    "Discover amazing destinations and unforgettable travel experiences. Your journey starts here.",
  keywords: [
    "travel",
    "tours",
    "vacation",
    "destinations",
    "adventure",
    "holiday",
  ],
  openGraph: {
    title: "Travel & Tours | Square Three Sixty",
    description: "Discover amazing destinations and unforgettable experiences.",
    type: "website",
  },
};

export default function TravelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex min-h-screen flex-col">
        <TravelNav />
        <main className="flex-1">{children}</main>
        <footer className="border-t-4 border-black bg-[#FFD700] text-black">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              <div>
                <h3 className="text-lg font-bold mb-4 text-black">
                  Square Three Sixty
                </h3>
                <p className="text-gray-700 text-sm">
                  Your Journey Starts Here
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide text-black">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <a href="/travel-tours" className="hover:text-black transition-colors font-medium">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/travel-tours/destinations" className="hover:text-black transition-colors font-medium">
                      Destinations
                    </a>
                  </li>
                  <li>
                    <a href="/travel-tours/tours" className="hover:text-black transition-colors font-medium">
                      Tours
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide text-black">
                  Company
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>
                    <a href="/travel-tours/about" className="hover:text-black transition-colors font-medium">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/travel-tours/contact" className="hover:text-black transition-colors font-medium">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4 uppercase tracking-wide text-black">
                  Contact
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>Phone: (555) 987-6543</li>
                  <li>Email: travel@square360.com</li>
                  <li>Hours: Mon-Sat 9AM-7PM</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-black/20 pt-8 text-center text-sm text-gray-700">
              <p>
                © {new Date().getFullYear()} Square Three Sixty - Travel &
                Tours. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
