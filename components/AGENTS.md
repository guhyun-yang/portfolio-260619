# components/ — UI Layer

## Module Context

Shared UI primitives and composed components. ShadCN (radix-nova) lives in `ui/`. Future section-level components go in `sections/` or domain-named subfolders — not inside `ui/`.

## Tech Stack and Constraints

- ShadCN UI with **radix-nova** style (`components.json`).
- Icons: **lucide-react** only (`iconLibrary: lucide` in `components.json`).
- Styling: Tailwind CSS v4 + `cn()` from `@/lib/utils`.
- Radix UI primitives via `radix-ui` package (ShadCN v4 pattern).

## Adding Components

```bash
bunx shadcn@latest add button
bunx shadcn@latest add card
# etc.
```

- Do not hand-copy ShadCN source from the web — always use the CLI to match project config.
- After adding, verify import aliases resolve (`@/components/ui/<name>`).

## Implementation Patterns

- Import UI primitives: `import { Button } from "@/components/ui/button"`.
- Import icons: `import { ArrowDown } from "lucide-react"`.
- Extend variants via `className` prop and `cn()` — do not fork component files for one-off styles unless the variant is reused.
- Composed components (e.g. `SiteHeader`, `ExperienceList`) accept minimal props; keep presentation logic in the component, content as props or children.

## Styling Constraints

- Use ShadCN CSS variables from `globals.css` (`--background`, `--foreground`, `--primary`, etc.) for component theming.
- Portfolio accent `#FFD024` is page-level — do not add to ShadCN theme unless promoting to a global token in `globals.css`.
- Dark-first site: components should render correctly on black backgrounds. Test contrast before shipping.
- Match Linear/Apple restraint: default ShadCN sizes, no oversized padding or shadow unless intentional.

## Local Golden Rules

### Do's

- Use existing `Button` variants (`default`, `outline`, `ghost`, `link`) before creating custom button markup.
- Set Lucide icon size via `className="size-4"` or ShadCN's `[&_svg]:size-4` conventions.
- Place new composed components outside `ui/` — never edit generated ShadCN files for app-specific logic.

### Don'ts

- Do not install alternative icon libraries (react-icons, heroicons, etc.).
- Do not create custom `<button>` elements when `Button` covers the use case.
- Do not add CSS modules or styled-components — Tailwind only.
- Do not remove focus-visible rings — accessibility is non-negotiable.

## Testing

Visual check in browser after adding or modifying components. Run `bun run lint` to catch unused imports and type errors.
