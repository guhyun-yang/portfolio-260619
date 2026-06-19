# app/ — Pages and Sections

## Module Context

Next.js App Router entry point. `layout.tsx` owns global fonts, metadata, and body defaults. `page.tsx` and future routes compose portfolio sections.

## Tech Stack and Constraints

- Next.js App Router with React Server Components by default.
- Fonts: Geist Sans, Geist Mono, Noto Serif KR — loaded in `layout.tsx` via `next/font/google`.
- Global styles: `globals.css` (Tailwind v4, ShadCN CSS variables).
- Body defaults: `bg-black text-white` — pages inherit this; do not reset unless a section requires contrast (e.g. white About block later).

## Section Composition Pattern

Each portfolio section follows this structure:

```tsx
<section id="section-name" className="...">
  {/* optional section label: text-[10px] uppercase tracking-[0.2em] text-zinc-600 */}
  {/* content */}
</section>
```

Current sections:

- **hero** — full viewport (`h-screen`), name/role top-left, main statement center-left, contact bottom-left, About link top-right.
- **about** — bio left column, experience + contact right column, separated by `border-zinc-800` rules.

When adding sections (Work, Contact, etc.), preserve the horizontal padding rhythm: `px-8 sm:px-12`, max content width `max-w-5xl mx-auto` where appropriate.

## Typography Conventions

- Hero headline: `text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight`.
- Section headings: `text-2xl font-bold` or uppercase micro-labels (`text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600`).
- Body text: `text-sm leading-7 text-zinc-400`.
- Accent keywords: `text-[#FFD024]` inline spans — use sparingly.

## Metadata

- Update `export const metadata` in `layout.tsx` for site-wide title/description.
- Per-route metadata: export `metadata` or `generateMetadata` from the route file.

## Implementation Patterns

- Anchor navigation: `href="#about"` for in-page scroll links.
- Contact email: `mailto:augustino82@gmail.com` — single source; update both hero footer and about contact if changed.
- Prefer semantic HTML: `<header>`, `<section>`, `<footer>`, `<nav>`, `<ol>` for experience timeline.
- Extract repeated section UI into `@/components` only when used in 2+ places.

## Local Golden Rules

### Do's

- Keep `page.tsx` readable — extract complex sections into `@/components/sections/` when they grow beyond ~80 lines.
- Use `whitespace-nowrap` to prevent unwanted phrase breaks (e.g. "crafting experiences").
- Add `aria-label` on icon-only links.

### Don'ts

- Do not add `"use client"` to pages unless hooks or event handlers require it.
- Do not embed raw SVG icons — import from `lucide-react` or use ShadCN components.
- Do not introduce page-level state libraries for static portfolio content.

## Testing

No test suite configured. Verify changes manually:

```bash
bun run dev
bun run build   # must pass before deploy
bun run lint
```
