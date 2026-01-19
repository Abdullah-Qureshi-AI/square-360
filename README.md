# Square Three Sixty

A premium, production-ready Next.js website representing two distinct business domains: Real Estate & Construction, and Travel & Tours.

## 🎨 Brand Identity

- **Brand Colors**: Yellow (#FFD700), Black (#000000), White (#FFFFFF)
- **Design Philosophy**: Bold, Modern, Clean, High Contrast
- **Visual Style**: Premium real-estate feel with professional corporate aesthetics

## ✨ Features

### Core Functionality
- **Dual Business Domains**: Separate sections for Real Estate/Construction and Travel & Tours
- **Category Selection**: Premium landing page with hero section and interactive category cards
- **Separate Themes**: Each domain has its own distinct visual identity
  - Real Estate: Black background with yellow accents (corporate, trust-focused)
  - Travel & Tours: Yellow background with black accents (vibrant, experiential)

### Design System
- **Reusable Components**: Button, Card, Section, Hero components
- **Typography Hierarchy**: Responsive font scaling with proper line heights
- **Spacing System**: Consistent padding and margins throughout
- **Color System**: Brand-consistent color palette with CSS variables

### Technical Excellence
- **TypeScript**: Fully typed codebase
- **Security**: HTTP security headers, XSS protection, Zod form validation
- **SEO Optimized**: Metadata, sitemap, and robots.txt configured
- **Performance**: Optimized images, lazy loading, fast initial load
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Form Validation**: Zod + React Hook Form
- **Font**: Inter (Google Fonts) with optimized loading

## 📁 Project Structure

```
square-360/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Premium landing page
│   ├── globals.css             # Brand colors & typography
│   ├── real-estate/            # Real Estate section
│   │   ├── layout.tsx          # Black/yellow theme layout
│   │   ├── page.tsx            # Hero + features + stats
│   │   ├── about/              # About page
│   │   ├── contact/            # Contact form page
│   │   ├── properties/         # Property listings
│   │   └── services/           # Services grid
│   └── travel-tours/           # Travel & Tours section
│       ├── layout.tsx          # Yellow/black theme layout
│       ├── page.tsx            # Hero + features
│       ├── about/              # About page
│       ├── contact/            # Contact form page
│       ├── destinations/       # Destination cards
│       └── tours/              # Tour packages
├── components/
│   ├── ui/                     # Reusable UI components
│   │   ├── Button.tsx          # Brand-styled buttons
│   │   ├── Card.tsx            # Elevated cards
│   │   ├── Section.tsx         # Section containers
│   │   └── Hero.tsx            # Hero sections
│   ├── landing/                # Landing page components
│   │   └── CategorySelector.tsx # Premium category cards
│   ├── navigation/             # Navigation components
│   │   ├── RealEstateNav.tsx   # Black nav with yellow accents
│   │   └── TravelNav.tsx       # Yellow nav with black accents
│   └── forms/                  # Form components
│       └── ContactForm.tsx     # Validated contact form
├── lib/
│   ├── validations.ts          # Zod schemas
│   └── utils.ts                # Utility functions
├── middleware.ts               # Security headers
└── next.config.ts              # Next.js configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Design Highlights

### Landing Page
- **Hero Section**: Bold typography with brand colors
- **Category Cards**: Large, interactive cards with hover effects
- **Clear CTAs**: Prominent call-to-action buttons
- **Footer CTA**: Additional conversion opportunities

### Real Estate Section
- **Corporate Theme**: Black background with yellow accents
- **Hero Section**: Trust-focused messaging
- **Feature Grid**: 6-column grid with icons and stats
- **Stats Section**: Yellow background with key metrics
- **Premium Cards**: Elevated cards with hover effects

### Travel & Tours Section
- **Vibrant Theme**: Yellow background with black accents
- **Hero Section**: Adventure-focused messaging
- **Feature Grid**: Colorful gradient cards
- **Why Choose Us**: Trust signals section
- **Tour Cards**: Engaging visual design

## 🔒 Security Features

- HTTP Security Headers (HSTS, X-Frame-Options, X-Content-Type-Options, etc.)
- XSS Protection
- Form validation with Zod
- Safe routing practices
- No XSS vectors in user inputs

## ⚡ Performance Optimizations

- Image optimization with Next.js Image component
- Lazy loading for non-critical sections
- Font optimization with next/font
- Compressed responses
- Optimized bundle size
- Server Components by default

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly interactive elements
- Optimized typography scaling

## ♿ Accessibility

- ARIA labels and roles
- Semantic HTML
- Keyboard navigation support
- Focus states on interactive elements
- Proper color contrast ratios

## 🌐 SEO

- Dynamic metadata per route
- Open Graph tags
- Structured data ready
- Sitemap generation
- Robots.txt configuration

## 📝 Environment Variables

Create a `.env.local` file for production:

```env
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

## 🚢 Deployment

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy!

The project is configured for optimal Vercel deployment with all necessary settings.

## 📄 License

Private - All rights reserved

## 🎨 Brand Guidelines

### Colors
- **Primary Yellow**: #FFD700
- **Primary Black**: #000000
- **Primary White**: #FFFFFF
- **Yellow Dark**: #FFC700
- **Yellow Light**: #FFF4CC
- **Black Soft**: #1A1A1A

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, tight letter spacing (-0.02em)
- **Body**: Regular weight, relaxed line height

### Spacing
- Consistent padding: 16px, 24px, 32px, 48px, 64px
- Section spacing: py-16 sm:py-24
- Card padding: p-6, p-8

---

**Built with ❤️ for Square Three Sixty**
