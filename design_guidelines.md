# Design Guidelines: Gram Panchayat Portal

## Design Approach
**System-Based Approach**: Material Design principles adapted for government portal requirements, emphasizing accessibility, clarity, and information hierarchy suitable for Marathi content and diverse user demographics.

## Core Design Elements

### Typography
**Primary Font**: Noto Sans Devanagari (via Google Fonts) for Marathi text
- Headings: 700 weight, sizes from text-4xl to text-lg
- Body: 400 weight, text-base to text-sm
- Numbers/Stats: 600-700 weight for emphasis

**Hierarchy**:
- H1: text-4xl md:text-5xl (Hero headlines)
- H2: text-3xl md:text-4xl (Section headers)
- H3: text-xl md:text-2xl (Subsections)
- Body: text-base (Descriptions, lists)
- Small: text-sm (Labels, metadata)

### Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm
- Section padding: py-12 md:py-20
- Container max-width: max-w-7xl with px-4 md:px-6
- Card spacing: p-6 md:p-8
- Grid gaps: gap-6 md:gap-8

**Grid Patterns**:
- Stats section: 2x2 grid (md:grid-cols-2 lg:grid-cols-4)
- Quick links: 3-column grid (md:grid-cols-2 lg:grid-cols-3)
- Schemes/News: 2-3 column grid (md:grid-cols-2 lg:grid-cols-3)
- Member profiles: Single column md:grid-cols-3

### Component Library

**Navigation**:
- Fixed header with 🇮🇳 flag emoji + portal title in Marathi
- Clean horizontal layout with max-w-7xl container
- Mobile: Hamburger menu pattern

**Hero Section**:
- Full-width gradient background (subtle, governmental)
- Centered content with h-[600px] md:h-[700px]
- Large Marathi headline with subtitle
- Two CTA buttons side-by-side
- Stats grid below hero (4 columns on desktop)

**Cards**:
- Elevated cards with subtle shadow and rounded corners (rounded-xl)
- Icon + Title + Description pattern for quick links
- Hover state: subtle lift effect (transform scale)
- White background with border or shadow

**Information Sections**:
- Two-column layout for contacts/details (left: info, right: contact form)
- List items with checkmarks (✓) for features
- Timeline display for historical events (vertical line with year markers)

**Data Display**:
- Stats cards: Large number (text-4xl) + small label below
- Profile cards: Avatar/initial + name + role + contact (stacked vertically)
- Scheme cards: Title + eligibility + icon, equal height grid

**Forms & CTAs**:
- Primary buttons: Full rounded (rounded-full) with padding px-8 py-3
- Input fields: Rounded borders (rounded-lg), clear labels in Marathi
- Form sections with background differentiation

**News/Gallery**:
- Card-based layout with image placeholder + date badge
- Category tags as small pills
- Truncated text with "read more" pattern

### Images
**Hero Section**: Use a vibrant image showing rural Indian village landscape or panchayat office building with community gathering. Image should evoke trust, community, and development. Place text overlay with semi-transparent blur backdrop for readability.

**Gallery Placeholders**: Use 📷 emoji or placeholder boxes with descriptive Marathi text for event categories (festivals, health camps, meetings).

**Profile Images**: Avatar circles or initials for panchayat members in colored backgrounds.

### Accessibility & RTL Support
- High contrast text ratios (WCAG AA minimum)
- Clear focus states on interactive elements
- Proper heading hierarchy for screen readers
- Generous touch targets (min 44x44px)
- Marathi Devanagari script properly rendered

### Visual Rhythm
- Consistent section alternation (white → subtle background → white)
- Generous whitespace between sections (py-16 to py-24)
- Card grids with equal heights using min-h utilities
- Icons consistently sized (w-8 h-8 to w-12 h-12)

### Information Architecture
1. Hero with stats overlay
2. Quick links grid (9 services)
3. Panchayat introduction (3-column: info, members, contact)
4. Village history (timeline + heritage cards)
5. Schemes grid (6 major programs)
6. Infrastructure (4-column feature grid)
7. Health facilities (2-column split)
8. Education institutions (3-column cards)
9. Agriculture info (crops grid + irrigation)
10. Photo gallery (6-card grid)
11. News section (4-card horizontal scroll or grid)
12. Footer (multi-column with links, contact, social)