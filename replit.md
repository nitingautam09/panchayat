# Gram Panchayat Portal

## Overview

A government portal application built for Gram Panchayat (village council) administration in Maharashtra, India. The portal serves as a transparent interface for citizens to access government services, information, and resources. The application is designed with Marathi language support, featuring Material Design principles adapted for government accessibility requirements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**

- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server, providing fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing
- TanStack React Query for server state management and data fetching

**UI Component System**

- Shadcn UI component library (New York style variant) with Radix UI primitives
- Tailwind CSS for utility-first styling with custom design tokens
- Component aliases configured for clean imports (@/components, @/lib, @/hooks)
- CSS variables for theming with support for light/dark modes

**Typography & Internationalization**

- Noto Sans Devanagari font (Google Fonts) as primary typeface for Marathi content
- Responsive typography scale (text-4xl to text-sm) with specific weights for headings (700), body (400), and stats (600-700)
- Design system enforces governmental accessibility standards

**Layout System**

- Responsive grid patterns using Tailwind's grid system
- Consistent spacing primitives (4, 6, 8, 12, 16, 20 units)
- Max-width containers (max-w-7xl) with responsive padding
- Mobile-first breakpoint system (md, lg)

### Backend Architecture

This project is intentionally **frontend-only**:

- Development uses Vite's dev server for hot-module reloads
- Production output is a static bundle (HTML/CSS/JS) generated into `dist/`
- No Express server, database layer, or runtime APIs are included
- Deploy to any static host (Vercel, Netlify, GitHub Pages, S3, etc.)

### External Dependencies

**Form Handling & Validation**

- React Hook Form with @hookform/resolvers for form state management
- Zod for schema validation and type safety

**UI Component Libraries**

- Radix UI v1.x family for accessible, unstyled component primitives (30+ components)
- Class Variance Authority for component variant management
- Embla Carousel for image/content carousels
- CMDK for command palette interfaces
- Lucide React for icon system

**Utility Libraries**

- date-fns v3.6.0 for date manipulation
- clsx and tailwind-merge for conditional className composition
- nanoid for unique ID generation

**Development Tools**

- Replit-specific plugins for development banner, cartographer, and runtime error overlay
- TypeScript with strict mode enabled
- ESBuild for production bundling
