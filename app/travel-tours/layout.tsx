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
        
        {/* Premium Footer */}
        <footer className="relative bg-[var(--color-primary)] text-[var(--color-secondary)] overflow-hidden">
          {/* Accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--color-secondary)]" />
          
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[var(--color-secondary)]/5 to-transparent pointer-events-none" />
          
          <div className="container-custom py-16 lg:py-20 relative z-10">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              {/* Brand */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold mb-4">
                  <span className="text-[var(--color-secondary)]">Square</span> Three Sixty
                </h3>
                <p className="text-[var(--color-secondary)]/70 text-sm leading-relaxed mb-6">
                  Your journey starts here. Creating unforgettable travel experiences and memories that last a lifetime.
                </p>
                {/* Social icons placeholder */}
                <div className="flex space-x-4">
                  {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-[var(--color-secondary)]/10 flex items-center justify-center hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-all duration-300"
                      aria-label={social}
                    >
                      <span className="text-xs font-bold">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider text-[var(--color-secondary)]">
                  Quick Links
                </h4>
                <ul className="space-y-3 text-sm text-[var(--color-secondary)]/70">
                  {[
                    { href: "/travel-tours", label: "Home" },
                    { href: "/travel-tours/destinations", label: "Destinations" },
                    { href: "/travel-tours/tours", label: "Tours" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a 
                        href={link.href} 
                        className="hover:text-[var(--color-secondary)] transition-colors duration-300 inline-flex items-center group"
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
                <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider text-[var(--color-secondary)]">
                  Company
                </h4>
                <ul className="space-y-3 text-sm text-[var(--color-secondary)]/70">
                  {[
                    { href: "/travel-tours/about", label: "About Us" },
                    { href: "/travel-tours/contact", label: "Contact" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a 
                        href={link.href} 
                        className="hover:text-[var(--color-secondary)] transition-colors duration-300 inline-flex items-center group"
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
                <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider text-[var(--color-secondary)]">
                  Contact
                </h4>
                <ul className="space-y-3 text-sm text-[var(--color-secondary)]/70">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-3 mt-0.5 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (555) 987-6543
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-3 mt-0.5 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    travel@square360.com
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-3 mt-0.5 text-[var(--color-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Mon-Sat 9AM-7PM
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Bottom bar */}
            <div className="border-t border-[var(--color-secondary)]/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-[var(--color-secondary)]/60">
                © {new Date().getFullYear()} Square Three Sixty - Travel & Tours. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-[var(--color-secondary)]/60">
                <a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[var(--color-secondary)] transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
