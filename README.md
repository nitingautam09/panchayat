# अधिकृत ग्रामपंचायत पोर्टल (Gram Panchayat Portal)

A beautiful, fully responsive government portal for village council administration in Marathi language.

## 📋 Features

- ✅ Complete Marathi language interface
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Sticky navigation with 9 sections
- ✅ Noto Sans Devanagari typography
- ✅ Government portal design aesthetic
- ✅ 100% Frontend - No backend dependencies

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm (comes with Node.js)

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# Navigate to http://localhost:5173
```

### Build for Production

```bash
# Build the application
npm run build

# The built files will be in dist/public folder

# Preview production build
npm run preview
```

## 📁 Project Structure

```
gram-panchayat-portal/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── pages/        # React pages (home.tsx)
│   │   ├── components/   # Reusable components
│   │   ├── lib/          # Utilities and helpers
│   │   ├── hooks/        # Custom React hooks
│   │   ├── App.tsx       # Main app component
│   │   └── index.css     # Global styles
│   ├── index.html        # HTML entry point
│   └── public/           # Static files
├── attached_assets/      # Images and media
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind CSS config
├── tsconfig.json        # TypeScript config
└── package.json         # Dependencies

```

## 🎨 Sections

1. **Hero Section** - Welcome with statistics
2. **परिचय (Introduction)** - Gram Panchayat info, members, contact
3. **इतिहास (History)** - Ancient sites and cultural heritage
4. **योजना (Schemes)** - Government schemes (6 major programs)
5. **सुविधा (Infrastructure)** - Facilities and utilities
6. **आरोग्य (Health)** - Health centers and services
7. **शिक्षण (Education)** - Schools and educational institutions
8. **शेती (Agriculture)** - Crops and irrigation info
9. **गॅलरी (Gallery)** - Photo gallery of events
10. **बातम्या (News)** - Latest news and announcements

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server (Vite)
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run check    # Type check with TypeScript
```

## 🌐 Deployment

### Option 1: Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Option 2: Deploy to Netlify
```bash
npm run build
# Upload the dist/public folder to Netlify
```

### Option 3: Deploy to any static hosting
```bash
npm run build
# Upload contents of dist/public folder
```

## 🎯 Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool and dev server
- **Wouter** - Lightweight routing
- **Shadcn UI** - Component library
- **Lucide React** - Icons
- **Noto Sans Devanagari** - Marathi font

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Adding New Sections

1. Create a new component in `client/src/pages/` or add to `home.tsx`
2. Add an `id` attribute to the section
3. Add a navigation link in the navbar
4. The smooth scroll will work automatically

### Customizing Colors

Edit `client/src/index.css` to change the color variables in the `:root` section.

### Changing Content

All content is in `client/src/pages/home.tsx`. Edit the Marathi text directly in the JSX.

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues or questions, please contact:
- Email: grampanchayat@example.com
- Phone: +91 98765 43210

---

**Made with ❤️ for Gram Panchayat Administration**
