"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Inline SVG icons to avoid dependency issues in preview
const CompassIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
);

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 16v-4M12 8h.01"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.64 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 5.36 5.36l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const navItems = [
  { href: "/travel-tours", label: "Home", icon: HomeIcon },
  { href: "/travel-tours/about", label: "About", icon: InfoIcon },
  { href: "/travel-tours/contact", label: "Contact", icon: MailIcon },
] as const;

const toursMenuItems = [
  { href: "/travel-tours/tours", label: "All Tours", icon: StarIcon },
  { href: "/travel-tours/destinations", label: "Destinations", icon: MapPinIcon },
  { href: "/travel-tours/customize", label: "Customize Package", icon: CompassIcon },
] as const;

export function TravelNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [toursOpen, setToursOpen] = useState(false);
  const [mobileToursOpen, setMobileToursOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    queueMicrotask(() => {
      setMobileMenuOpen(false);
      setToursOpen(false);
    });
  }, [pathname]);

  const isToursActive = useMemo(() => {
    if (!pathname) return false;
    return (
      pathname === "/travel-tours/tours" ||
      pathname.startsWith("/travel-tours/tours/") ||
      pathname === "/travel-tours/destinations" ||
      pathname.startsWith("/travel-tours/destinations/") ||
      pathname === "/travel-tours/customize" ||
      pathname.startsWith("/travel-tours/customize/")
    );
  }, [pathname]);
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --navy: #0f1c2e;
          --navy-light: #162236;
          --amber: #f5a623;
          --amber-dark: #e09310;
          --amber-light: rgba(245, 166, 35, 0.12);
          --white: #ffffff;
          --gray-300: #d1d5db;
          --gray-400: #9ca3af;
        }

        /* Limit box-sizing reset to the navbar so we don't override global page spacing */
        .nav-wrapper,
        .nav-wrapper * {
          box-sizing: border-box;
        }

        .nav-wrapper {
          font-family: 'DM Sans', sans-serif;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          transition: all 0.4s ease;
        }

        .nav-wrapper.scrolled {
          box-shadow: 0 4px 30px rgba(0,0,0,0.4);
        }

        /* Top announcement bar */
        .top-bar {
          background: var(--amber);
          color: var(--navy);
          text-align: center;
          padding: 6px 16px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .top-bar-phone {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--navy);
          text-decoration: none;
          font-weight: 600;
        }

        .top-bar-divider {
          width: 1px;
          height: 12px;
          background: rgba(15, 28, 46, 0.3);
        }

        /* Main nav */
        .main-nav {
          background: var(--navy);
          border-bottom: 1px solid rgba(245, 166, 35, 0.15);
        }

        /* When page is scrolled, darken the main nav background */
        .main-nav.scrolled {
          background: rgba(15, 28, 46, 0.98);
          backdrop-filter: blur(20px);
        }

        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }

        /* Logo */
        .logo-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: opacity 0.2s;
        }
        .logo-link:hover { opacity: 0.9; }

        .logo-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--amber), var(--amber-dark));
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--navy);
          box-shadow: 0 4px 16px rgba(245, 166, 35, 0.35);
          flex-shrink: 0;
        }

        .logo-text-group { display: flex; flex-direction: column; }

        .logo-main {
          font-family: 'Playfair Display', serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--white);
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .logo-main span { color: var(--amber); }

        .logo-sub {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: var(--amber);
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* Desktop Nav Links */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 500;
          color: var(--gray-300);
          transition: all 0.25s ease;
          cursor: pointer;
          border: none;
          background: transparent;
        }

        .nav-link:hover {
          color: var(--white);
          background: rgba(255,255,255,0.06);
        }

        .nav-link.active {
          color: var(--amber);
          background: var(--amber-light);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2px;
          background: var(--amber);
          border-radius: 2px;
        }

        /* Dropdown */
        .dropdown {
          position: relative;
          display: inline-flex;
          align-items: center;
        }

        .dropdown-trigger {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .chevron {
          width: 10px;
          height: 10px;
          opacity: 0.8;
          transition: transform 0.2s ease;
          transform: rotate(0deg);
        }

        .dropdown.open .chevron {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          min-width: 240px;
          background: rgba(15, 28, 46, 0.98);
          border: 1px solid rgba(245, 166, 35, 0.2);
          border-radius: 12px;
          padding: 8px;
          box-shadow: 0 16px 50px rgba(0,0,0,0.45);
          backdrop-filter: blur(18px);
          opacity: 0;
          transform: translateY(-8px);
          pointer-events: none;
          transition: opacity 0.2s ease, transform 0.2s ease;
          z-index: 60;
        }

        .dropdown.open .dropdown-menu {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 10px;
          text-decoration: none;
          color: var(--gray-300);
          font-size: 13.5px;
          font-weight: 500;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .dropdown-item:hover {
          background: rgba(255,255,255,0.06);
          color: var(--white);
        }

        .dropdown-item.active {
          color: var(--amber);
          background: rgba(245, 166, 35, 0.12);
        }

        .dropdown-divider {
          height: 1px;
          background: rgba(255,255,255,0.08);
          margin: 6px 8px;
        }

        /* CTA Button */
        .cta-btn {
          margin-left: 12px;
          padding: 9px 20px;
          background: var(--amber);
          color: var(--navy);
          border: none;
          border-radius: 8px;
          font-size: 13.5px;
          font-weight: 700;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.01em;
          cursor: pointer;
          transition: all 0.25s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 2px 12px rgba(245, 166, 35, 0.3);
        }

        .cta-btn:hover {
          background: var(--amber-dark);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(245, 166, 35, 0.45);
        }

        .cta-btn:active { transform: translateY(0); }

        /* Mobile button */
        .mobile-toggle {
          display: none;
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          border: 1px solid rgba(245, 166, 35, 0.25);
          background: transparent;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          padding: 10px;
          transition: background 0.2s;
        }

        .mobile-toggle:hover { background: var(--amber-light); }

        .hamburger-line {
          width: 20px;
          height: 2px;
          background: var(--amber);
          border-radius: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .mobile-toggle.open .hamburger-line:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .mobile-toggle.open .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .mobile-toggle.open .hamburger-line:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile Menu */
        .mobile-menu {
          background: var(--navy-light);
          border-top: 1px solid rgba(245, 166, 35, 0.15);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .mobile-menu.open {
          max-height: 400px;
        }

        .mobile-menu-inner {
          padding: 12px 16px 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mobile-submenu {
          padding-left: 12px;
          margin-top: 2px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .mobile-subtitle {
          padding: 8px 16px 2px;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(245, 166, 35, 0.8);
          font-weight: 700;
        }

        .mobile-sub-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          color: var(--gray-300);
          transition: all 0.2s;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
        }

        .mobile-sub-link:hover {
          color: var(--white);
          background: rgba(255,255,255,0.06);
        }

        .mobile-sub-link.active {
          color: var(--amber);
          background: rgba(245, 166, 35, 0.10);
          border-color: rgba(245, 166, 35, 0.25);
        }

        .mobile-expand {
          margin-left: auto;
          width: 28px;
          height: 28px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.03);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--gray-300);
        }

        .mobile-expand.open {
          background: rgba(245, 166, 35, 0.10);
          border-color: rgba(245, 166, 35, 0.25);
          color: var(--amber);
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          color: var(--gray-300);
          transition: all 0.2s;
          cursor: pointer;
          border: none;
          background: transparent;
          font-family: 'DM Sans', sans-serif;
        }

        .mobile-nav-link:hover {
          color: var(--white);
          background: rgba(255,255,255,0.06);
        }

        .mobile-nav-link.active {
          color: var(--amber);
          background: var(--amber-light);
        }

        .mobile-dot {
          margin-left: auto;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--amber);
        }

        .mobile-cta {
          margin-top: 8px;
          padding: 12px 20px;
          background: var(--amber);
          color: var(--navy);
          border: none;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          display: block;
          transition: background 0.2s;
        }

        .mobile-cta:hover { background: var(--amber-dark); }

        /* Responsive */
        @media (max-width: 768px) {
          .desktop-nav { display: none; }
          .cta-btn { display: none; }
          .mobile-toggle { display: flex; }
          .top-bar-extra { display: none; }
          .logo-main { font-size: 16px; }
        }

        @media (min-width: 769px) {
          .mobile-menu { display: none; }
        }
      `}</style>

      <header
        className={`nav-wrapper${scrolled ? " scrolled" : ""}`}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}
      >
        {/* Top announcement bar */}
        <div className="top-bar">
          <span>✈️ Exclusive deals on Pakistan & International tours</span>
          <div className="top-bar-divider" />
          <a href="tel:+923001234567" className="top-bar-phone">
            <PhoneIcon />
            +92 300 1234567
          </a>
          <div className="top-bar-divider top-bar-extra" />
          <span className="top-bar-extra">✉ travel@square360.com</span>
        </div>

        {/* Main navigation */}
        <div className={`main-nav${scrolled ? " scrolled" : ""}`}>
          <div className="nav-inner">
            {/* Logo */}
            <Link href="/travel-tours" className="logo-link">
              <div className="logo-icon">
                <CompassIcon />
              </div>
              <div className="logo-text-group">
                <span className="logo-main">
                  Square <span>Three</span> Sixty
                </span>
                <span className="logo-sub">Travel &amp; Tours</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="desktop-nav">
              <div
                className={`dropdown${toursOpen ? " open" : ""}`}
                onMouseEnter={() => setToursOpen(true)}
                onMouseLeave={() => setToursOpen(false)}
              >
                <button
                  type="button"
                  className={`nav-link dropdown-trigger${isToursActive ? " active" : ""}`}
                  onClick={() => setToursOpen((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={toursOpen}
                >
                  <StarIcon />
                  Tours
                  <svg className="chevron" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="dropdown-menu" role="menu">
                  {toursMenuItems.map((item, idx) => {
                    const Icon = item.icon;
                    const active =
                      pathname === item.href || (item.href !== "/travel-tours/tours" && pathname?.startsWith(item.href + "/"));
                    return (
                      <div key={item.href}>
                        <Link href={item.href} className={`dropdown-item${active ? " active" : ""}`} role="menuitem">
                          <Icon />
                          {item.label}
                        </Link>
                        {idx === 0 && <div className="dropdown-divider" />}
                      </div>
                    );
                  })}
                </div>
              </div>

              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive =
                  pathname === item.href || (item.href !== "/travel-tours" && pathname?.startsWith(item.href + "/"));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-link${isActive ? ' active' : ''}`}
                  >
                    <Icon />
                    {item.label}
                  </Link>
                );
              })}
              <Link href="/travel-tours/customize" className="cta-btn">
                Book a Tour ✈
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button
              className={`mobile-toggle${mobileMenuOpen ? ' open' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="hamburger-line" />
              <div className="hamburger-line" />
              <div className="hamburger-line" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`mobile-menu${mobileMenuOpen ? ' open' : ''}`}>
          <div className="mobile-menu-inner">
            {/* Tours group (mobile) */}
            <button
              type="button"
              className={`mobile-nav-link${isToursActive ? " active" : ""}`}
              onClick={() => setMobileToursOpen((v) => !v)}
            >
              <StarIcon />
              Tours
              <span className={`mobile-expand${mobileToursOpen ? " open" : ""}`}>
                <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.25a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
            {mobileToursOpen && (
              <div className="mobile-submenu">
                <div className="mobile-subtitle">Tours</div>
                {toursMenuItems.map((item) => {
                  const Icon = item.icon;
                  const active =
                    pathname === item.href || (item.href !== "/travel-tours/tours" && pathname?.startsWith(item.href + "/"));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`mobile-sub-link${active ? " active" : ""}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <Icon />
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            )}

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive =
                pathname === item.href || (item.href !== "/travel-tours" && pathname?.startsWith(item.href + "/"));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav-link${isActive ? " active" : ""}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon />
                  {item.label}
                  {isActive && <span className="mobile-dot" />}
                </Link>
              );
            })}
            <Link href="/travel-tours/customize" className="mobile-cta" onClick={() => setMobileMenuOpen(false)}>
              ✈ Book a Tour Now
            </Link>
          </div>
        </div>
      </header>

    </>
  );
}