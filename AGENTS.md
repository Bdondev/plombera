# Plombera — Agent Instructions

## Mission

Build a pixel-accurate, accessible, performant, SEO/AEO, GEO-friendly static website matching the supplied mockup.

## Stack

- Astro (static output)
- Tailwind CSS v4
- TypeScript only when necessary
- No unnecessary frameworks or dependencies

## Design

- Reference: `reference/homepage-desktop.jpeg` (current file; use its actual path if it changes).
- Follow `docs/DESIGN_SYSTEM.md` and existing design tokens when available.
- Use supplied assets; never invent replacements.
- Preserve layout, typography, colors, spacing, proportions, and imagery.
- Treat the desktop mockup as authoritative; adapt mobile layouts accessibly.
- Use semantic HTML for meaningful content.

## Workflow

1. Inspect relevant files, assets, and reference.
2. Implement only the requested section or task.
3. Reuse existing components and design tokens.
4. Run the build and relevant checks.
5. For visual changes, capture desktop (1440px) and mobile (390px) screenshots.
6. Compare desktop output with the reference and correct major differences.
7. Report results and stop.

## Accessibility

- Target WCAG 2.2 AA.
- Use semantic HTML and logical headings.
- Support keyboard navigation and visible focus.
- Check contrast and accessible names.
- Respect reduced-motion preferences.

## SEO / AEO

- Render meaningful content as crawlable HTML.
- Use descriptive headings and links.
- Never fabricate business claims, reviews, or structured data.
- Handle metadata and sitemap at the appropriate page or site level.

## Engineering

- Prefer CSS over unnecessary JavaScript.
- Keep components reusable and lightweight.
- Avoid unrelated changes or refactoring.
- Never suppress test failures.
- Report checks that could not be performed.
- Do not commit without approval.
- Suggest git commit message in the format: "feat: add new section" or "fix: bug fix".

## Completion Report

Briefly report:

- Files changed
- Tests run and results
- Visual differences remaining
- Accessibility issues or blockers

## Development

When starting the dev server, use background mode:

```sh
astro dev --background
```

Manage it with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Astro documentation: https://docs.astro.build

Consult relevant guides when needed:

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling and Tailwind](https://docs.astro.build/en/guides/styling/)
- [Internationalization](https://docs.astro.build/en/guides/internationalization/)
