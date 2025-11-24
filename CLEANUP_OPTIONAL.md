# Optional Files to Delete (After Download)

This project is **100% frontend only**. If you want to further clean up unnecessary files after downloading, here are files you can safely delete:

## Safe to Delete

```
# Configuration files for backend (not used)
components.json          # Shadcn config (optional)
tsconfig.json            # TypeScript config (can keep for IDE support)

# Design documentation (optional)
design_guidelines.md     # Design reference (keep if helpful)
replit.md               # Replit-specific metadata (can delete)
```

## Files to KEEP

```
├── client/                      # ✅ KEEP - Frontend app
├── attached_assets/             # ✅ KEEP - Images/assets
├── server/index-dev.ts          # ✅ KEEP - Dev server
├── vite.config.ts               # ✅ KEEP - Build config
├── tailwind.config.ts           # ✅ KEEP - Tailwind config
├── package.json                 # ✅ KEEP - Dependencies
├── postcss.config.js            # ✅ KEEP - CSS processing
├── .gitignore                   # ✅ KEEP - Git config
├── README.md                    # ✅ KEEP - Documentation
├── QUICK_START.md               # ✅ KEEP - Setup guide
└── SETUP_INSTRUCTIONS.md        # ✅ KEEP - Detailed setup
```

## Minimal Project (Most Cleaned)

If you want the **absolute minimal** frontend-only setup:

```bash
# Keep only essential folders
client/              # Frontend React app
attached_assets/     # Images

# Keep only essential files
package.json         # Dependencies (required)
vite.config.ts       # Build config (required)
tailwind.config.ts   # Styling (required)
postcss.config.js    # CSS (required)
.gitignore          # Git config

# Optional docs
README.md           # Recommended to keep
QUICK_START.md      # Setup reference
```

## What to Delete

```bash
# These are auto-generated and not needed
.replit             # Replit metadata
server/             # Optional (if using npm scripts differently)
components.json     # Shadcn config
tsconfig.json       # Optional (if not using TypeScript in IDE)
design_guidelines.md # Just a reference
replit.md           # Replit metadata
```

---

## Total Size Reduction

- **Current size**: ~2-3 MB (with node_modules)
- **After cleanup**: Same (node_modules size doesn't change)
- **Build size**: ~200 KB (dist/public folder)

## Recommendation

We recommend **keeping all files as-is** because:
1. ✅ Everything is needed for npm commands to work
2. ✅ Documentation files help with maintenance
3. ✅ Configuration files are referenced by build tools
4. ✅ No performance impact from extra files

---

## If You Delete Files Accidentally

```bash
# Reinstall everything
npm install
npm run dev
```

This will restore the working state.
