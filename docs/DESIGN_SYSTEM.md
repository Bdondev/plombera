# Plombera Design System

Status: foundation only. Homepage sections remain unimplemented.

## Source and confidence

Primary reference: `reference/homepage-desktop.jpeg` at 1200 × 7882 px.

- **Measured** means read or estimated directly against the supplied screenshot canvas. Pixel values describe the reference image, not guaranteed production CSS values.
- **Estimated** means inferred from visual rhythm, image scaling, or missing source design data. Treat these as starting tokens and validate during implementation.
- No local font files exist in `src/assets/`. Font choices below are dependency-free fallback stacks, not claims about the original typeface.

## Visual direction

Plombera uses a confident plumbing-service identity: deep navy for trust and structure, vivid blue for action and hero surfaces, warm yellow for calls to action, and generous white space around compact service content.

## Color tokens

| Token | Value | Confidence | Use |
| --- | --- | --- | --- |
| `plombera-navy-950` | `#102B63` | Estimated | Footer, dark hero overlays, strongest text |
| `plombera-navy-900` | `#17366F` | Estimated | Dark section surfaces, headings |
| `plombera-blue-600` | `#1558D6` | Estimated | Primary buttons, hero blue |
| `plombera-blue-500` | `#2563EB` | Estimated | Hover and secondary blue actions |
| `plombera-yellow-400` | `#FFD21F` | Estimated | Primary CTA, badges, highlights |
| `plombera-yellow-300` | `#FFE45C` | Estimated | Soft highlight and hover state |
| `plombera-ink` | `#1F2D43` | Estimated | Body copy and dark UI text |
| `plombera-muted` | `#6B7280` | Estimated | Supporting copy and metadata |
| `plombera-surface` | `#F5F6F8` | Estimated | Alternating light-gray sections |
| `plombera-line` | `#E5E7EB` | Estimated | Card borders and separators |

Tailwind usage:

```astro
<button class="bg-plombera-yellow-400 text-plombera-navy-950">
  Get a free estimate
</button>
```

## Typography

### Display and headings

- Reference uses bold, condensed, uppercase headings. **Estimated.**
- Use `font-display`, backed by `Arial Narrow`, `Roboto Condensed`, and system fallbacks.
- Avoid adding a font package until source font licensing is known.
- Recommended scale: `text-display-xl` for hero title, `text-display-lg` for major section title, `text-heading` for card and subsection headings.
- Headings use tight line-height (`0.92–1.05`) and slight negative tracking. **Estimated.**

### Body and labels

- Use `font-sans` for body copy, navigation, metadata, and buttons.
- Body copy appears compact, approximately 14–16px in the reference. **Estimated.**
- Eyebrows and service labels are uppercase, bold, and small, approximately 10–12px. **Estimated.**

## Layout and spacing

| Token | Value | Confidence | Use |
| --- | --- | --- | --- |
| `spacing-container` | `1.25rem` | Estimated | Small-screen page gutter |
| `max-w-6xl` | `72rem` | Estimated | Desktop content container; screenshot content is roughly 976px wide inside a 1200px canvas |
| `spacing-section-sm` | `4.5rem` | Estimated | Compact section padding |
| `spacing-section` | `7rem` | Estimated | Desktop section padding |
| `gap-4` | `1rem` | Existing Tailwind scale | Tight card and control gaps |
| `gap-6` | `1.5rem` | Existing Tailwind scale | Standard card grid gap |
| `gap-8` | `2rem` | Existing Tailwind scale | Feature and content separation |

Recommended container pattern:

```astro
<section class="px-container py-section-sm lg:py-section">
  <div class="mx-auto w-full max-w-6xl">
    <!-- section content -->
  </div>
</section>
```

The reference is a desktop capture. Mobile breakpoints and exact responsive behavior are **estimated** and should be defined when sections are implemented.

## Shape and elevation

| Token | Value | Confidence | Use |
| --- | --- | --- | --- |
| `rounded-card` | `1rem` | Estimated | Feature, service, testimonial, and blog cards |
| `rounded-panel` | `1.25rem` | Estimated | Large image/content panels |
| `rounded-pill` | `999px` | Standard CSS | Buttons, badges, eyebrow chips |
| `shadow-card` | `0 0.5rem 2rem rgb(16 43 99 / 0.08)` | Estimated | Lifted cards |
| `shadow-float` | `0 1rem 3rem rgb(16 43 99 / 0.14)` | Estimated | Floating hero or CTA elements |

The screenshot favors soft borders and low-contrast shadows over hard outlines. Use one elevation treatment per component; do not stack shadows.

## Component patterns

Patterns are documented for later implementation only. No homepage sections are created in this task.

1. **Header:** white rounded navigation shell, compact logo, small utility links, yellow primary CTA.
2. **Hero:** blue or image-led split composition, oversized condensed title, short supporting copy, yellow CTA, rounded media treatment.
3. **Eyebrow:** tiny uppercase label in a pill or small blue text marker above heading.
4. **Trust cards:** three compact white cards with image/icon, bold metric, and short explanation.
5. **Service list:** light-gray section with stacked bordered rows, service title, description, tags, CTA, and supporting image.
6. **Process steps:** numbered vertical list with strong two-digit index and short explanation.
7. **Project/testimonial cards:** image-first cards with white metadata panel and rounded corners.
8. **Emergency CTA:** high-contrast blue section, white heading, yellow action, phone action beside it.
9. **Footer:** navy base, compact columns, contact details, social links, and oversized wordmark treatment.

## Existing asset map

Assets already available in `src/assets/`:

- `logo.png`: brand mark or wordmark candidate.
- `hero.png`, `hero-2.png`: hero imagery candidates.
- `about-1.png`, `about-2.png`, `about-3.png`: about/trust imagery candidates.
- `services.png`, `water-heater-expert.png`, `Senior-plumber-technician.png`: service or technician imagery candidates.
- `portfolio.png`: project imagery candidate.
- `testimonial-1.png`, `testimonial-2.png`: testimonial imagery candidates.
- `blog-1.png`, `blog-2.png`: article card imagery candidates.
- `lead-plomber.png`, `apprentice-plomber.png`: team imagery candidates.

Asset roles are **estimated from filenames and dimensions**. Confirm visual fit while implementing each section. Existing assets should be reused before adding new imagery.

## Token source

Tailwind CSS v4 tokens live in `src/styles/global.css` inside the `@theme` block. This keeps utilities available without adding a config file or dependency.
