# Vercel Deployment Checklist ✅

## Pre-Deployment Verification

### ✅ Build Status
- [x] Local build successful (`npm run build`)
- [x] No TypeScript errors
- [x] No ESLint errors
- [x] All pages compile successfully

### ✅ Configuration Files
- [x] `package.json` - Correct scripts and dependencies
- [x] `next.config.mjs` - Image domains configured
- [x] `tsconfig.json` - TypeScript configuration
- [x] `tailwind.config.ts` - Tailwind CSS configured
- [x] `vercel.json` - Vercel configuration
- [x] `.gitignore` - Proper exclusions
- [x] `.vercelignore` - Deployment exclusions

### ✅ Code Quality
- [x] All client-side code properly guarded (`typeof window !== 'undefined'`)
- [x] localStorage usage in useEffect only
- [x] No SSR-breaking code
- [x] All imports correct
- [x] No hardcoded paths

### ✅ Dependencies
- [x] All dependencies in `package.json`
- [x] Node version specified (>=18.0.0)
- [x] No missing peer dependencies

### ✅ Assets
- [x] Images in `public/images/portfolio/`
- [x] All images properly referenced
- [x] No broken image links

## Deployment Steps

### 1. Push to Git Repository
```bash
git init
git add .
git commit -m "Initial commit - MAESTRO Print website"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### 2. Deploy to Vercel

**Option A: Via Vercel Dashboard (Recommended)**
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import your Git repository
4. Vercel will auto-detect Next.js
5. Click "Deploy"

**Option B: Via Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel
```

### 3. Post-Deployment Checks
- [ ] Website loads correctly
- [ ] All pages accessible
- [ ] Language switcher works (EN/FR/AR)
- [ ] Images load properly
- [ ] Contact form works
- [ ] WhatsApp button works
- [ ] Mobile responsive
- [ ] RTL works for Arabic

## Environment Variables (if needed)
Currently: None required

If you need to add environment variables later:
1. Go to Project Settings → Environment Variables
2. Add variables for Production, Preview, Development
3. Redeploy

## Custom Domain Setup
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS as instructed
4. Wait for SSL certificate (automatic)

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all dependencies are in `package.json`
- Check for TypeScript errors locally
- Ensure Node version is compatible

### Images Not Loading
- Verify images are in `public/` folder
- Check image paths are correct
- Ensure `next.config.mjs` has correct image domains

### Language Not Working
- Check browser console for errors
- Verify translations file is complete
- Test localStorage in browser

## Support
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
