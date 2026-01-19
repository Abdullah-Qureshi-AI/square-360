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
        
        {/* Premium Footer */}
        <footer className="relative bg-[var(--color-secondary)] text-white overflow-hidden">
          {/* Accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-primary)]" />
          
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-primary)]/5 to-transparent pointer-events-none" />
          
          <div className="container-custom py-16 lg:py-20 relative z-10">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              {/* Brand */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold mb-4">
                  <span className="text-[var(--color-primary)]">Square</span> Three Sixty
                </h3>
                <p className="text-[var(--color-gray-400)] text-sm leading-relaxed mb-6">
                  Excellence in Real Estate & Construction. Building your vision with precision and expertise since 2008.
                </p>
                {/* Social icons placeholder */}
                <div className="flex space-x-4">
                  {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-all duration-300"
                      aria-label={social}
                    >
                      <span className="text-xs font-bold">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider text-[var(--color-primary)]">
                  Quick Links
                </h4>
                <ul className="space-y-3 text-sm text-[var(--color-gray-400)]">
                  {[
                    { href: "/real-estate", label: "Home" },
                    { href: "/real-estate/properties", label: "Properties" },
                    { href: "/real-estate/services", label: "Services" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a 
                        href={link.href} 
                        className="hover:text-[var(--color-primary)] transition-colors duration-300 inline-flex items-center group"
                      >
                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Company */}
              <div>
                <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider text-[var(--color-primary)]">
                  Company
                </h4>
                <ul className="space-y-3 text-sm text-[var(--color-gray-400)]">
                  {[
                    { href: "/real-estate/about", label: "About Us" },
                    { href: "/real-estate/contact", label: "Contact" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a 
                        href={link.href} 
                        className="hover:text-[var(--color-primary)] transition-colors duration-300 inline-flex items-center group"
                      >
                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contact */}
              <div>
                <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider text-[var(--color-primary)]">
                  Contact
                </h4>
                <ul className="space-y-3 text-sm text-[var(--color-gray-400)]">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-3 mt-0.5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (555) 123-4567
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-3 mt-0.5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@square360.com
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-3 mt-0.5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Mon-Fri 9AM-6PM
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Bottom bar */}
            <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-[var(--color-gray-500)]">
                © {new Date().getFullYear()} Square Three Sixty - Real Estate & Construction. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-[var(--color-gray-500)]">
                <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[var(--color-primary)] transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
