# Atlas Demo

Admin Dashboard Demo built with the Atlas UI Framework.

## Tech Stack

- **Astro 5** - Static Site Generator
- **HTMX** - HTML-first interactivity
- **Alpine.js** - Lightweight reactivity
- **Tailwind CSS 4** - Utility-first CSS
- **Atlas UI** - CSS Framework & Components

## Getting Started

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build
```

## Project Structure

```
src/
├── atlas/           # Atlas UI Framework (local copy)
│   ├── styles/      # CSS (core, components, utilities, effects)
│   ├── components/  # JS Components (button, modal, toast, etc.)
│   └── effects/     # JS Effects (ripple, glow, parallax, etc.)
├── layouts/         # Astro layouts
├── pages/           # Astro pages
│   └── admin/       # Admin dashboard pages
└── styles/          # Project styles
```

## Requirements

- Node.js 24+ (managed via Volta)
- pnpm 9.14+
