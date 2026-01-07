# Kensu Web - Landing Page (Next.js + TypeScript + Tailwind)

## Project Overview
Official marketing website for Kensu - Smart Family Management App. Built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Poppins (Google Fonts)
- **Deployment**: Vercel (recommended)

## Project Structure
```
kensu-web/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with fonts
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles + Tailwind
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Sticky navigation
│   │   └── Footer.tsx     # Site footer
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   └── CTASection.tsx
│   └── ui/                # Reusable UI components
├── public/
│   └── assets/
│       └── images/
│           ├── logo/      # Kensu logo variants
│           ├── hero/      # Hero section images
│           ├── features/  # Feature icons/images
│           └── screenshots/ # App screenshots
└── styles/                # Additional CSS if needed
```

## Design System

### Colors (Tailwind Config)
```typescript
kensu: {
  green: '#4CAF50',      // Primary brand color
  orange: '#FF9800',     // Secondary brand color
  'light-gray': '#f8f9fa' // Background color
}
```

### Typography
- **Font**: Poppins (400, 500, 600, 700)
- **Headings**: Bold, large scale (text-4xl to text-6xl)
- **Body**: Regular (400), text-gray-600

### Components Pattern
- All components use TypeScript with proper types
- Client components use 'use client' directive
- Responsive design: mobile-first approach
- Smooth scrolling enabled globally
- Hover states on interactive elements

## Development Commands
```bash
npm run dev        # Development server (localhost:3000)
npm run build      # Production build
npm run start      # Production server
npm run lint       # ESLint check
```

## Code Conventions
- **Components**: PascalCase (HeroSection.tsx)
- **Functions**: camelCase
- **CSS**: Tailwind utility classes (avoid custom CSS)
- **Icons**: Font Awesome with semantic classes
- **Images**: Next.js Image component with optimization

## Responsive Breakpoints
- **Mobile**: < 768px (default)
- **Tablet**: md: (768px+)
- **Desktop**: lg: (1024px+)

## SEO & Performance
- Metadata configured in layout.tsx
- Next.js Image optimization enabled
- Lazy loading for images
- Smooth scrolling for better UX
- Font optimization with next/font

## Integration with Kensu Ecosystem
- Links to App download pages
- Consistent branding with mobile app
- Same color scheme (green #4CAF50, orange #FF9800)
- Shared assets structure

## Assets Guidelines
- **Logo**: SVG or high-res PNG in /public/assets/images/logo/
- **Screenshots**: Optimize before uploading (WebP preferred)
- **Icons**: Font Awesome (already configured)
- Use Next.js Image component for all images

## Key Features to Highlight
1. Event Management
2. Family Collaboration
3. Smart Notifications
4. Real-time Sync
5. Privacy & Security

## Future Enhancements
- Blog section (MDX support)
- Testimonials/Reviews
- Pricing page (if freemium model)
- Help/Support center
- Multi-language support (i18n)
