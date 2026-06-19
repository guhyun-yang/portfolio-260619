export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  thumb: string;
  description: string;
  tags: string[];
  body: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "design-system",
    title: "Design System",
    category: "Systems Design",
    year: "2026",
    thumb: "/work-design-system.png",
    description:
      "Scalable component library and token system built to unify product consistency across teams.",
    tags: ["Figma", "Tokens", "Components", "Documentation"],
    body: `Architected a design system from the ground up — defining typography scales, color tokens, spacing primitives, and a reusable component library in Figma. The system became the single source of truth shared across design and engineering.

Documented contribution guidelines and component usage patterns, enabling the wider team to extend the system without breaking consistency. Handoff time between design and development decreased as engineers adopted the token-based structure directly.`,
  },
  {
    slug: "mobile-ux",
    title: "Mobile UX",
    category: "UX Research & Design",
    year: "2025",
    thumb: "/work-mobile-ux.png",
    description:
      "End-to-end UX process for a mobile application — from research and IA to high-fidelity prototyping.",
    tags: ["Research", "Prototyping", "Usability", "iOS"],
    body: `Conducted user interviews and competitive benchmarking to surface pain points and opportunity areas. Synthesized findings into a clear information architecture and defined the core interaction model for the application.

Translated insights into high-fidelity Figma prototypes and ran usability tests with target users. Iterated across multiple rounds based on test results, progressively improving task completion rates and reducing user errors.`,
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    category: "Visual Identity",
    year: "2026",
    thumb: "/work-graphic-design.png",
    description:
      "Visual identity and basic visual work — building brand language through typography, color, and layout.",
    tags: ["Branding", "Typography", "Color", "Illustration"],
    body: `Led basic visual tasks at Creative Visual Lab, producing brand identity components including logo systems, color palettes, and typographic hierarchies. Each piece of work balanced creative expression with practical scalability across digital and print contexts.

Developed visual guidelines that allowed the brand to maintain a coherent aesthetic as it expanded — from interface assets to marketing collateral — while remaining flexible enough for future growth.`,
  },
];

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
