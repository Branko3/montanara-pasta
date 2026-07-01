# Montanara — Freška Domaća Pašta

A modern, minimalist product showcase site for **Montanara**, a fresh handmade pasta brand based in Podgorica, Montenegro. Built as a fully static, bilingual (Montenegrin / English) site — no ordering, no backend, pure presentation.

---

## Features

- **Bilingual** — full Montenegrin and English translations via a React context i18n system
- **Animated** — scroll-triggered reveals, staggered grids, and entrance animations powered by Framer Motion
- **Responsive** — mobile-first layout with smart content reduction on small screens
- **Static** — zero backend, deploys to any CDN or static host

## Stack

| Tool | Role |
|---|---|
| [Vite](https://vitejs.dev) | Build tool |
| [React 18](https://react.dev) | UI framework |
| [TypeScript](https://www.typescriptlang.org) | Type safety |
| [Tailwind CSS v3](https://tailwindcss.com) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lucide React](https://lucide.dev) | Icons |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/       # One file per section (Hero, About, Products…)
├── context/          # LanguageContext — lang state + t() accessor
├── i18n/             # translations.ts — typed CNR + EN strings
└── index.css         # Tailwind base + marquee animation
public/
├── logo.png          # Brand mark
├── img-hero.jpeg     # Hero section photo
├── img-story.jpeg    # About section photo
├── img-tagliatelle.jpeg
└── img-contact.jpeg
```

## i18n

Language is controlled by a `LanguageProvider` wrapper in `App.tsx`. Components access translations via the `useLanguage()` hook:

```tsx
const { t, lang, setLang } = useLanguage()
// t.hero.h1_1, t.nav.products, etc.
```

All strings live in `src/i18n/translations.ts` as a typed `Record<Lang, Translations>` object.

## Deployment

Deployed on [Render](https://render.com) as a **Static Site**:

- **Build command:** `npm install && npm run build`
- **Publish directory:** `dist`

---

Montanara · Podgorica, Crna Gora · [Instagram](https://instagram.com/montanara_fresh_pasta)
