# MAESTRO Print - Premium Printing & Advertising Website

A modern, elegant, premium website for MAESTRO Print - a printing and advertising company.

## Features

- 🎨 Modern, elegant design with premium feel
- 📱 Fully responsive layout
- 🚀 Built with Next.js 14 and TypeScript
- 💨 Tailwind CSS for styling
- ✨ Smooth animations with Framer Motion
- 📄 SEO-friendly pages
- 💬 Floating WhatsApp button
- 🎭 Professional typography and spacing

## Pages

- **Home** - Hero section with services preview
- **Services** - Detailed service listings
- **Portfolio** - Image gallery with lightbox
- **About** - Company information, mission, and values
- **Contact** - Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

This project is ready to deploy on Vercel. Follow these steps:

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI globally:
```bash
npm i -g vercel
```

2. Deploy to Vercel:
```bash
vercel
```

3. Follow the prompts to configure your deployment.

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket).

2. Import your repository:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your Git repository

3. Vercel will automatically detect Next.js and configure the build settings.

4. Click "Deploy" - your site will be live in minutes!

### Environment Variables

If you need any environment variables, add them in the Vercel project settings:
- Go to Project Settings → Environment Variables
- Add any required variables

### Custom Domain

To add a custom domain:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow the DNS configuration instructions

## Configuration

### WhatsApp Button

Update the phone number in `components/WhatsAppButton.tsx`:
```typescript
const phoneNumber = 'YOUR_WHATSAPP_NUMBER';
```

### Contact Information

Update contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Google Maps

Add your Google Maps embed code in `app/contact/page.tsx` (currently has a placeholder).

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:
- Primary: Green accent color
- Dark: Dark gray/black backgrounds

### Fonts

Fonts are loaded from Google Fonts in `app/globals.css`. Customize as needed.

## Project Structure

```
├── app/
│   ├── about/         # About page
│   ├── contact/       # Contact page
│   ├── portfolio/     # Portfolio page
│   ├── services/      # Services page
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Home page
├── components/
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   └── WhatsAppButton.tsx
└── public/            # Static assets
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## License

© 2024 MAESTRO Print. All rights reserved.
