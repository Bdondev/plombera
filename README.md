# Plombera

Plombera is a responsive plumbing services website built with Astro and Tailwind CSS v4. The site uses a static-first architecture, reusable section components, supplied brand imagery, and a focused visual system built around deep navy, vivid blue, and warm yellow accents.

## Tech stack

- Astro 7.4 with static output
- Tailwind CSS v4
- TypeScript support through Astro's tooling
- Astro image optimization for local assets
- Semantic HTML with responsive CSS

## Requirements

- Node.js `22.22.0` or newer
- npm

## Getting started

Install dependencies, then start the local development server:

```sh
npm install
npm run dev
```

The site is available at [http://localhost:4321](http://localhost:4321) by default.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Astro development server. |
| `npm run build` | Build the production site into `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run astro` | Run the Astro CLI directly. |

## Project structure

```text
src/
├── assets/       Supplied brand, plumbing, and section imagery
├── components/   Shared Astro components
├── layouts/      Page layouts and document metadata
├── pages/        Astro routes
├── sections/     Homepage sections
└── styles/       Global styles and Tailwind theme tokens

docs/
└── DESIGN_SYSTEM.md   Brand tokens and layout guidance

reference/              Visual design references
screenshots/            Local visual verification captures
```

## Homepage sections

The homepage is composed from reusable Astro sections:

- Header with responsive navigation and contact action
- Hero with responsive image composition and primary CTA
- About section with trust metrics
- Services section with featured plumbing service and service cards

Sections are integrated in `src/pages/index.astro`. Section-specific styling remains colocated with each `.astro` component, while shared colors, typography, spacing, radii, and shadows are defined in `src/styles/global.css`.

## Design and accessibility

The implementation follows the project design system in [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) and is built with the following goals:

- Semantic headings, sections, navigation, articles, lists, and links
- Visible keyboard focus states
- Responsive layouts for desktop and mobile viewports
- Accessible color contrast for primary interface elements
- Reduced-motion support for animated interactions
- Crawlable content rendered as static HTML

## Visual verification

Reference images are stored in `reference/`. Generated desktop and mobile captures are stored in `screenshots/` for local comparison during implementation.

Run the production build before reviewing a deployment or submitting changes:

```sh
npm run build
```

## License

This project is distributed under the terms in [`LICENSE`](LICENSE).
