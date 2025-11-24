# START HERE - Complete Setup Guide

Welcome to **अधिकृत ग्रामपंचायत पोर्टल** (Official Gram Panchayat Portal)

---

## ✅ What You Have

A **100% frontend-only** Gram Panchayat portal with:

- ✅ Marathi language interface
- ✅ 9 main sections with smooth navigation
- ✅ Responsive mobile design
- ✅ Sticky navbar with all menu options
- ✅ Zero backend code
- ✅ Zero database dependencies

---

## 🚀 Run Locally in 30 Seconds

### 1. Install Node.js

Download from: https://nodejs.org/ (version 18+)

### 2. Navigate to Project Folder

```bash
cd gram-panchayat-portal
```

### 3. Install & Run

```bash
npm install
npm run dev
```

### 4. Open Browser

Go to: **http://localhost:5173**

---

## 📚 Documentation Files

| File                      | Purpose                        |
| ------------------------- | ------------------------------ |
| **QUICK_START.md**        | Fast setup instructions        |
| **SETUP_INSTRUCTIONS.md** | Detailed step-by-step guide    |
| **README.md**             | Complete project documentation |
| **CLEANUP_OPTIONAL.md**   | Optional file deletion guide   |
| **package.json**          | Lists all dependencies         |

---

## 🎯 Key Commands

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check TypeScript errors
npm run check
```

---

## 📝 Edit Content

All Marathi content is in: **`src/pages/home.tsx`**

Find sections like:

- Line 55: Header/Title
- Line 221: Quick Links (9 services)
- Line 318: Panchayat Introduction
- Line 425: Village History
- Line 498: Government Schemes
- Line 524: Infrastructure
- Line 580: Health Services
- Line 652: Education
- Line 716: Agriculture
- Line 763: Photo Gallery
- Line 790: News

---

## 🎨 Change Colors & Styling

Edit: **`src/index.css`**

Find color variables in `:root` section:

```css
:root {
  --primary: 24 94% 52%; /* Orange - Government colors */
  --secondary: 217 33% 17%; /* Dark blue */
  /* ... more colors ... */
}
```

---

## 🚀 Deploy to Internet

### Option 1: Vercel (Recommended - Fastest)

```bash
npm install -g vercel
vercel
```

Takes 2 minutes, automatic HTTPS

### Option 2: Netlify

```bash
npm run build
# Drag the dist folder to Netlify
```

### Option 3: Any Web Server

```bash
npm run build
# Copy dist contents to your server
```

---

## ⚠️ Common Issues

### "Port 5173 already in use"

```bash
npm run dev -- --port 3000
```

### "Module not found"

```bash
npm install
npm run dev
```

### "npm: command not found"

Install Node.js from https://nodejs.org/

---

## 📁 Project Structure

```
gram-panchayat-portal/
│
├── src/                      ← Frontend React app
│   ├── pages/
│   │   └── home.tsx          ← EDIT THIS FOR CONTENT
│   ├── components/           ← UI components (buttons, cards, etc)
│   ├── lib/                  ← Utilities
│   ├── hooks/                ← Custom hooks
│   └── index.css             ← EDIT THIS FOR COLORS
│
├── public/                   ← Static assets (favicon)
├── attached_assets/          ← Images & media
├── dist/                     ← Build output (created after npm run build)
├── vite.config.ts            ← Build configuration
├── tailwind.config.ts        ← Tailwind CSS config
├── package.json              ← Dependencies list
├── postcss.config.js         ← CSS processing
│
└── README.md & guides        ← Documentation

```

---

## 🎯 Typical Workflow

1. **Edit content** → Edit `src/pages/home.tsx`
2. **Save file** → Browser auto-refreshes (hot reload)
3. **See changes** → Instant in browser
4. **Ready to deploy?** → Run `npm run build`
5. **Deploy** → Upload the `dist` folder

---

## 💡 Tips

✅ Use `npm run dev` for editing (hot reload works great)
✅ Use `npm run build` only when deploying
✅ Keep all config files - they're needed
✅ Edit only `src/pages/home.tsx` and `src/index.css`
✅ Test on mobile - responsive design is important

---

## 🔧 Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn UI** - Component library
- **Lucide Icons** - Icon set
- **Noto Sans Devanagari** - Marathi font

---

## 📞 Quick Reference

| Task                 | Command            |
| -------------------- | ------------------ |
| Start development    | `npm run dev`      |
| Build for production | `npm run build`    |
| Preview build        | `npm run preview`  |
| Check errors         | `npm run check`    |
| See dependencies     | `cat package.json` |

---

## ✨ Next Steps

1. ✅ Run `npm install && npm run dev`
2. ✅ Open http://localhost:5173
3. ✅ Click navbar links to test all sections
4. ✅ Edit `src/pages/home.tsx` to customize
5. ✅ Run `npm run build` when ready
6. ✅ Deploy to Vercel/Netlify/or your server

---

## 🎉 You're All Set!

Everything is ready to use. No backend, no database, no complicated setup.

**Questions?** Check the other documentation files:

- QUICK_START.md
- SETUP_INSTRUCTIONS.md
- README.md

Happy coding! 🚀
