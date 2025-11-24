# Setup Instructions for Local Development

## Step 1: Download the Code

Download the ZIP file and extract it to a folder.

## Step 2: Install Node.js

If you don't have Node.js installed, download it from: https://nodejs.org/

Verify installation:

```bash
node --version
npm --version
```

## Step 3: Install Dependencies

Open terminal/command prompt in the project folder and run:

```bash
npm install
```

This will install all required packages (React, Vite, Tailwind CSS, etc.)

## Step 4: Start Development Server

Run the development server:

```bash
npm run dev
```

Output will show:

```
VITE v5.4.20 ready in 123 ms

➜ Local:   http://localhost:5173/
```

Open http://localhost:5173/ in your browser to see the portal.

## Step 5: Make Changes

Edit files in `src/pages/home.tsx` and the changes will auto-reload in browser.

## Step 6: Build for Production

When ready to deploy, build the optimized version:

```bash
npm run build
```

Output folder: `dist/`

## Step 7: Deploy

### Deploy to Vercel (Easiest)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. `npm run build`
2. Go to https://app.netlify.com
3. Drag and drop the `dist` folder

### Deploy to any web server

Copy contents of the `dist` folder to your web server.

---

## Troubleshooting

### Port 5173 is already in use

Change the port:

```bash
npm run dev -- --port 3000
```

### Module not found error

Run:

```bash
npm install
```

### Vite not found

```bash
npm install
npm run dev
```

---

## Project Structure

```
├── src/                   # Frontend code
│   ├── pages/             # Home page
│   ├── components/        # UI components
│   ├── lib/               # Utilities
│   ├── hooks/             # Custom hooks
│   ├── index.css          # Global styles
│   └── App.tsx
├── public/                # Static assets
├── attached_assets/      # Images
├── vite.config.ts
├── tailwind.config.ts
└── package.json

```

## Key Files to Edit

- **Content**: `src/pages/home.tsx` - All text and sections
- **Colors**: `src/index.css` - Color variables
- **Fonts**: `index.html` - Font imports
- **Styling**: `src/index.css` - Global styles

---

Need help? Check the README.md file.
