# Atomic Organizations Website

Premium B2B website for Atomic Organizations - specialist coaching partner for sales organizations.

## Project Overview

This is a Next.js 15+ website designed to appeal to CROs, VPs of Sales, Commercial Directors and Revenue Leaders. The site helps sales teams hit target more often through expert coaching and performance programs.

## Tech Stack

- **Next.js 15+** with App Router
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for animations
- Semantic HTML, WCAG compliant
- Fully responsive (desktop, tablet, mobile)

## Content Rules

**IMPORTANT: No em dashes or en dashes anywhere. Only use standard hyphens "-" at all times.**

All content follows this rule to maintain consistency and avoid typographic issues.

## Key Features

- Sticky header with scroll effects
- Mobile-friendly burger menu
- Calendly integration for booking consultations
- Smooth fade-in animations on scroll
- Premium B2B aesthetic inspired by modern SaaS sites
- Sales-focused messaging and CTAs throughout

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file with your Calendly URL:
```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-calendly-link
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/app
  layout.tsx              # Root layout with metadata
  page.tsx                # Home page
  globals.css             # Global styles and fonts
  /about
    layout.tsx            # About page layout
    page.tsx              # About page content
  /components
    Header.tsx            # Sticky header with navigation
    Hero.tsx              # Hero section
    Section.tsx           # Reusable section wrapper with animations
    CTAButton.tsx         # Consistent CTA button
    CalendlyModal.tsx     # Calendly booking modal
    SalesImportance.tsx   # Why sales matters section
    SalesProblems.tsx     # Problems we solve
    SalesPrograms.tsx     # Our programs
    HowWeWork.tsx         # Our approach
    MetricsSection.tsx    # Performance metrics
    Testimonials.tsx      # Client testimonials
    GlobalPresence.tsx    # Partner logos and regions
    ClosingCTA.tsx        # Final call to action
```

## Branding

### Colors (Tailwind: `ao.*`)

- `navy`: #04142F
- `navy-soft`: #0B1E46
- `teal`: #14D0C5
- `teal-soft`: #5EE0D6
- `coral`: #F26A3D
- `magenta`: #B4307A
- `sky`: #1CA4F5
- `white`: #FFFFFF
- `offwhite`: #F5F7FB
- `gray100`: #E3E7F0
- `gray500`: #687086
- `gray800`: #1F2430
- `black`: #02040A

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

Typography scale available:
- `text-display`: 3.5rem
- `text-h1`: 2.375rem
- `text-h2`: 1.875rem
- `text-h3`: 1.5rem
- `text-h4`: 1.25rem
- `text-body-lg`: 1.125rem
- `text-body`: 1rem
- `text-caption`: 0.875rem

## Build & Deploy

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

Run linting:
```bash
npm run lint
```

## Assets

Place your logo files and wave backgrounds in:
- `/public/logos/`
- `/public/waves/`
- `/public/clients/`

Update the Hero component and other sections to reference these assets as needed.

## License

Private project for Atomic Organizations.
