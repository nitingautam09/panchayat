# 🚀 Quick Start Guide - After Downloading

## What You Need

1. **Node.js** (18 or newer) - Download from https://nodejs.org/

## Setup in 3 Steps

### Step 1: Open Terminal/Command Prompt

Navigate to your downloaded project folder:
```bash
cd gram-panchayat-portal
```

### Step 2: Install Dependencies

```bash
npm install
```

This downloads all required packages (~500MB). Takes 2-3 minutes.

### Step 3: Run Development Server

```bash
npm run dev
```

You'll see:
```
[express] serving on port 5000
```

Open: **http://localhost:5000**

---

## Commands Reference

### Start Development (Auto-reload)
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```
Creates optimized files in `dist/public/` folder

### Preview Production Build
```bash
npm run preview
```

### Check TypeScript Errors
```bash
npm run check
```

---

## 📦 What's Included

✅ Complete Marathi portal with 9 sections
✅ Responsive mobile design
✅ All components ready to use
✅ No backend code - pure frontend
✅ Tailwind CSS styling

---

## 📁 Where to Edit

| Want to Change | Edit This File |
|---|---|
| Portal text/content | `client/src/pages/home.tsx` |
| Colors | `client/src/index.css` |
| Fonts | `client/index.html` |
| Component styling | `client/src/index.css` |

---

## 🌍 Deploy to Internet

### Option A: Vercel (Fastest)
```bash
npm install -g vercel
vercel
```

### Option B: Netlify
```bash
npm run build
# Upload dist/public folder to Netlify
```

### Option C: GitHub Pages
```bash
npm run build
# Push dist/public to GitHub Pages
```

---

## ⚠️ Troubleshooting

### Port 5000 already in use?
```bash
npm run dev -- --port 3000
```

### Module errors?
```bash
npm install
npm run dev
```

### Build failing?
```bash
rm -rf node_modules
npm install
npm run build
```

---

## 📝 Project Structure

```
gram-panchayat-portal/
├── client/                    # All frontend code
│   ├── src/
│   │   ├── pages/home.tsx    # Main content file
│   │   ├── components/       # Reusable components
│   │   └── index.css         # Global styles
│   └── index.html
├── dist/                      # Build output (after npm run build)
├── package.json              # Dependencies
├── vite.config.ts           # Build config
└── README.md                # Full documentation
```

---

## ✨ What's Next?

1. Run `npm run dev`
2. Open http://localhost:5000
3. Edit `client/src/pages/home.tsx` to change content
4. When ready: `npm run build`
5. Deploy the `dist/public` folder anywhere

**Questions?** Check README.md or SETUP_INSTRUCTIONS.md

Happy coding! 🎉
