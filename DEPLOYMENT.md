# Vercel Deployment Guide

This project is ready for deployment on Vercel.

## Quick Deploy

### Method 1: GitHub/GitLab/Bitbucket Integration (Recommended)

1. **Push your code to a Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your Git repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

### Method 2: Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **For production deployment:**
   ```bash
   vercel --prod
   ```

## Project Configuration

- **Framework:** Next.js 14 (auto-detected by Vercel)
- **Build Command:** `npm run build` (auto-detected)
- **Output Directory:** `.next` (auto-detected)
- **Node Version:** 18+ (configured in package.json)

## Environment Variables

If you need environment variables (currently none required):

1. Go to Project Settings → Environment Variables in Vercel
2. Add variables for all environments (Production, Preview, Development)
3. Redeploy after adding variables

## Custom Domain

To add a custom domain:

1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records as instructed by Vercel

## Build Logs

If deployment fails, check:

1. Build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Check that `next.config.mjs` is correct
4. Verify TypeScript types are correct

## Post-Deployment

After deployment:

1. ✅ Test all pages are working
2. ✅ Verify language switcher works (English/French)
3. ✅ Check mobile responsiveness
4. ✅ Test contact form
5. ✅ Verify WhatsApp button
6. ✅ Update contact information if needed

## Support

If you encounter issues:
- Check Vercel documentation: https://vercel.com/docs
- Check Next.js documentation: https://nextjs.org/docs
