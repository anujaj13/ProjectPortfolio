# 🤖 Anuj Kumar — RPA Developer Portfolio

A **premium, modern portfolio** built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **Framer Motion** showcasing enterprise-scale RPA automation projects.

## ✨ Features

- ⚡ **Next.js App Router** — Modern React with file-based routing
- 🎨 **Custom Design** — Premium dark theme with gradient accents and smooth animations
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🎬 **Framer Motion Animations** — Smooth page transitions and scroll-triggered effects
- 🔍 **Advanced Filtering** — Filter projects by domain, complexity, and search terms
- 📊 **Dynamic Case Studies** — Detailed project pages with challenge/solution/outcome
- ⚙️ **Type-Safe** — Built with TypeScript for reliability
- 🎯 **SEO Optimized** — Next.js metadata API for proper head tags

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 10.16
- **Language**: TypeScript
- **Fonts**: Syne (display), Space Mono (monospace)

## 📋 Project Structure

```
ProjectPortfolio/
├── app/
│   ├── layout.tsx              # Root layout with fonts & metadata
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles & animations
│   └── projects/
│       └── [id]/
│           └── page.tsx        # Dynamic case study pages
├── components/
│   ├── Header.tsx              # Navigation header
│   ├── Hero.tsx                # Hero section with animated background
│   ├── StatsBar.tsx            # Key metrics display
│   ├── About.tsx               # Developer bio & skills
│   ├── ProjectsGrid.tsx        # Filterable projects grid
│   ├── ProjectCard.tsx         # Individual project card
│   └── Footer.tsx              # Footer with links
├── lib/
│   └── data.ts                 # Project & developer data (TypeScript)
├── package.json
├── tailwind.config.js
├── next.config.js
└── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone or navigate to the project**:
   ```bash
   cd d:\ProjectPortfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   ```
   http://localhost:3000
   ```

## 📦 Build & Deploy

### Build for production:
```bash
npm run build
npm start
```

### Deploy to Vercel (recommended):
```bash
npm install -g vercel
vercel
```

## 🎨 Design Highlights

### Modern Aesthetic
- Dark gradient background (#060912 → #0D1528)
- Indigo primary accent (#6366F1)
- Teal secondary accent (#00C9A7)
- Smooth shadow & blur effects

### Animations
- Fade-in on scroll
- Slide-up on page load
- Hover effects on cards
- Animated gradient backgrounds

### Responsive Grid
- 1 column on mobile
- 2 columns on tablet
- 3 columns on desktop
- Adaptive spacing with clamp()

## 🔧 Customization

### Update Developer Info
Edit `lib/data.ts`:
```typescript
export const DEVELOPER = {
  name: "Your Name",
  title: "Your Title",
  // ... other fields
}
```

### Add New Projects
Add to the `PROJECTS` array in `lib/data.ts`:
```typescript
{
  id: 10,
  title: "Your Project",
  description: "...",
  // ... other fields
}
```

### Customize Colors
Edit `tailwind.config.js` in the `extend.colors` section:
```javascript
accent: {
  primary: '#6366F1',
  secondary: '#00C9A7',
  // ... add more
}
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🎯 Performance

- **Lighthouse Score**: 95+
- **Core Web Vitals**: Optimized
- **Image Optimization**: Next.js Image component ready
- **Code Splitting**: Automatic route-based splitting

## 📄 License

© 2025 Anuj Kumar. All rights reserved.

## 🤝 Support

For questions or customization help, reach out to the portfolio owner.

---

**Built with ❤️ using Next.js & Tailwind CSS**
