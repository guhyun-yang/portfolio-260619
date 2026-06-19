<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md

## Operational Commands

```bash
bun run dev          # local development (http://localhost:3000)
bun run build        # production build
bun run start        # serve production build
bun run lint         # ESLint
bunx shadcn@latest add <component>   # add ShadCN component
```

- Package manager: **bun only**. Do not use npm, yarn, or pnpm.
- ShadCN style: **radix-nova** (see `components.json`). Do not switch styles mid-project.

## Golden Rules

### Immutable

- Do not commit secrets, API keys, or `.env` files.
- Do not force-push to `main`/`master`.
- Before writing Next.js code, read `node_modules/next/dist/docs/` for this version (16.x). Training-data assumptions may be wrong.

### Do's

- Prefer ShadCN components (`@/components/ui`) over custom primitives.
- Use Lucide icons (`lucide-react`) for all iconography.
- Use `cn()` from `@/lib/utils` for conditional class merging.
- Keep pages as Server Components unless client interactivity is required.
- Define site metadata in `app/layout.tsx` via Next.js `Metadata` export.
- Match existing visual language: black background, white primary text, `#FFD024` accent, zinc secondary text.
- Write copy in English unless the user explicitly requests Korean.
- Minimize diff scope — change only what the task requires.

### Don'ts

- Do not add decorative libraries (Framer Motion, etc.) without explicit request.
- Do not introduce inline SVG icons when a Lucide equivalent exists.
- Do not duplicate README-style project descriptions in code comments.
- Do not use emoji in UI copy or agent-generated docs.
- Do not create one-off CSS files; extend `app/globals.css` or use Tailwind utilities.
- Do not hardcode colors scattered across files; prefer CSS variables in `globals.css` or documented tokens.

## Project Context

Personal portfolio and branding site for Guhyun Yang (UX Designer). Not a resume dump — an editorial, AI-era personal brand presence.

**Tech stack:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, ShadCN (radix-nova), Lucide, Geist + Noto Serif KR fonts.

## Design Principles

- **Apple-like clarity:** generous whitespace, restrained palette, typography-led hierarchy.
- **Linear-level precision:** consistent spacing scale, aligned grids, no visual noise.
- **ShadCN-first:** reach for existing `@/components/ui` before building from scratch. Add missing components via `bunx shadcn@latest add`.
- **Editorial layout:** corner-anchored navigation, full-viewport hero, section-based scroll (Hero, About, future Work/Contact).
- **Accent discipline:** yellow (`#FFD024`) highlights key words only — not backgrounds or large blocks.

## Standards and References

- Path alias: `@/*` maps to project root (see `tsconfig.json`).
- Component imports: `@/components/ui/<name>`, utilities `@/lib/utils`.
- Commit messages: imperative mood, concise (e.g. `add hero section layout`, `fix about section spacing`).
- Git: commit only when the user explicitly asks.

## Maintenance Policy

When code patterns diverge from these rules (new color tokens, new section conventions, added ShadCN components), propose an AGENTS.md update in the same PR or task.

## Context Map

- **[Pages and sections (App Router)](./app/AGENTS.md)** — layout, metadata, section composition, portfolio content structure.
- **[UI components (ShadCN / Lucide)](./components/AGENTS.md)** — component usage, adding primitives, styling constraints.
