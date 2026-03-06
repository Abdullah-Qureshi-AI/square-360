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
    <div className="min-h-screen relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle grid pattern - Applied to entire page */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Minimal accent line at top */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent z-50" />

      <div className="flex min-h-screen flex-col relative z-10">
        <RealEstateNav />
        <main className="flex-1">{children}</main>
        
        {/* Premium Footer */}
        <footer className="relative bg-slate-900/95 backdrop-blur-sm text-white overflow-hidden border-t border-white/10">
          {/* Premium accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
          </div>
          
          <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20 relative z-10">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              {/* Brand */}
              <div className="lg:col-span-1">
                <h3 className="text-xl font-bold mb-4">
                  <span className="text-amber-500">Square</span> Three Sixty
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Excellence in Real Estate & Construction. Building your vision with precision and expertise since 2008.
                </p>
                {/* Social icons placeholder */}
                <div className="flex space-x-4">
                  {["LinkedIn", "Twitter", "Instagram"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
                      aria-label={social}
                    >
                      <span className="text-xs font-bold">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Quick Links */}
              <div>
                <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider text-amber-500">
                  Quick Links
                </h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  {[
                    { href: "/real-estate", label: "Home" },
                    { href: "/real-estate/properties", label: "Properties" },
                    { href: "/real-estate/services", label: "Services" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a 
                        href={link.href} 
                        className="hover:text-amber-500 transition-colors duration-300 inline-flex items-center group"
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
                <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider text-amber-500">
                  Company
                </h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  {[
                    { href: "/real-estate/about", label: "About Us" },
                    { href: "/real-estate/contact", label: "Contact" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a 
                        href={link.href} 
                        className="hover:text-amber-500 transition-colors duration-300 inline-flex items-center group"
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
                <h4 className="text-sm font-semibold mb-5 uppercase tracking-wider text-amber-500">
                  Contact
                </h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-3 mt-0.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (555) 123-4567
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-3 mt-0.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    info@square360.com
                  </li>
                  <li className="flex items-start">
                    <svg className="w-4 h-4 mr-3 mt-0.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Mon-Fri 9AM-6PM
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Bottom bar */}
            <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} Square Three Sixty - Real Estate & Construction. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-slate-500">
                <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
