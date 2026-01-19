# Retro Pixel Developer Portfolio

A clean, minimal developer portfolio website inspired by retro pixel art and hacker aesthetics. Built with Next.js 16, TypeScript, and Tailwind CSS.

## 🎮 Design Features

- **Monochrome Color Scheme**: Pure black, white, and light gray only
- **Pixel Art Elements**: Custom-drawn Chrome Dino, clouds, and cactus components
- **Monospace Typography**: JetBrains Mono and Space Mono fonts throughout
- **Spacious Layout**: Large white areas with strong grid alignment
- **Subtle Animations**: Pixel-style animations without gradients or shadows
- **Terminal UI Inspired**: Command-line aesthetics and technical feel

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Pixel Art Components**: Animated dino, floating clouds, and decorative cacti
- **Interactive Sections**:
  - Hero with animated pixel dino
  - About/Skills with terminal-style cards
  - Projects grid with hover effects
  - Contact form with social links
  - Footer with pixel decorations
- **Smooth Scrolling**: Navigation with anchor links
- **No Dependencies**: Pure custom pixel art SVGs

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Fonts**: JetBrains Mono, Space Mono

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `components/Hero.tsx`
2. **About Section** - Edit `components/About.tsx` 
3. **Projects** - Edit `components/Projects.tsx`
4. **Contact** - Edit `components/Contact.tsx`

## 📁 Project Structure

```
my_cv/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Styles & animations
├── components/
│   ├── Navigation.tsx      # Nav bar
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About & skills
│   ├── Projects.tsx       # Projects showcase
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   ├── PixelDino.tsx      # Animated dino
│   ├── PixelCloud.tsx     # Clouds
│   └── PixelCactus.tsx    # Cactus
└── lib/
    └── utils.ts           # Utilities
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
