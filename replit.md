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

**Server Framework**
- Express.js with TypeScript for the Node.js backend
- Dual entry points: development (index-dev.ts) and production (index-prod.ts)
- Custom logging middleware tracking API request timing and responses
- Raw body parsing support for webhook integrations

**Development vs Production**
- Development: Vite dev server integration with SSR-style middleware mode
- Production: Static file serving from pre-built dist/public directory
- Hot reload support in development with automatic process restart on errors

**Data Layer**
- In-memory storage (MemStorage) as default implementation with IStorage interface
- Storage interface defines CRUD operations (getUser, getUserByUsername, createUser)
- Designed for easy migration to PostgreSQL through Drizzle ORM

### External Dependencies

**Database (Configured but Not Yet Connected)**
- Drizzle ORM v0.39.1 configured for PostgreSQL dialect
- Neon Database serverless driver (@neondatabase/serverless v0.10.4) ready for connection
- Schema defined with users table (id, username, password fields)
- Migration system configured (drizzle-kit) with output to ./migrations directory
- Zod integration (drizzle-zod) for runtime schema validation

**Session Management**
- connect-pg-simple v10.0.0 configured for PostgreSQL session storage
- Designed to work with PostgreSQL once database connection is established

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