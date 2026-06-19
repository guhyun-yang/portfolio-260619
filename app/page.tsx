import Link from "next/link";
import { HeroSpotlight } from "@/components/hero-spotlight";
import { BlurFade } from "@/components/blur-fade";
import { PROJECTS } from "@/lib/work-data";

const EXPERIENCE = [
  { year: "2026", org: "Creative Visual Lab",          role: "Basic Visual Designer"    },
  { year: "2025", org: "AI Experience Planning Group", role: "UX Planning" },
];

export default function Home() {
  return (
    <div
      className="flex flex-col text-white"
      style={{
        backgroundImage: "url('/hero-mesh-gradient.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >

      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section id="hero" className="relative flex h-screen flex-col overflow-hidden">
        <HeroSpotlight />

        {/* Top bar */}
        <header className="relative z-10 flex items-start justify-between px-8 pt-8 sm:px-12">
          <BlurFade immediate delay={0.05}>
            <div className="flex items-center gap-3">
              <div
                className="size-10 shrink-0 rounded-full overflow-hidden ring-1 ring-white/10"
                style={{ background: "#111" }}
              >
                <img
                  src="/avatar-chibi.png"
                  alt="Guhyun Yang"
                  className="w-full"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center 5%",
                    transform: "scale(2.4) translateY(4%)",
                    transformOrigin: "center top",
                  }}
                />
              </div>
              <div>
                <p className="text-base font-bold leading-tight tracking-tight text-white">
                  Guhyun Yang
                </p>
                <p className="mt-0.5 text-sm italic text-zinc-500">
                  UX Design &amp; Systems
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade immediate delay={0.1}>
            <nav className="flex items-center gap-6">
              <a
                href="#about"
                className="text-sm font-semibold text-white transition-opacity hover:opacity-50"
              >
                About
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-opacity hover:opacity-50"
              >
                Work
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path
                    d="M10 3v14M3 10l7 7 7-7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </nav>
          </BlurFade>
        </header>

        {/* Main statement */}
        <div className="relative z-10 flex flex-1 items-center px-8 sm:px-12">
          <h1 className="flex flex-col text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            <BlurFade immediate delay={0.2}>
              <span>Designing <span className="text-[#FFD024]">systems</span></span>
            </BlurFade>
            <BlurFade immediate delay={0.32}>
              <span>that <span className="text-[#FFD024]">scale</span>,</span>
            </BlurFade>
            <BlurFade immediate delay={0.44}>
              <span>crafting <span className="text-[#FFD024]">experiences</span></span>
            </BlurFade>
            <BlurFade immediate delay={0.56}>
              <span>that <span className="text-[#FFD024]">last</span>.</span>
            </BlurFade>
          </h1>
        </div>

        {/* Bottom bar */}
        <footer className="relative z-10 px-8 pb-8 sm:px-12">
          <BlurFade immediate delay={0.45}>
            <ul className="flex flex-col gap-1.5">
              <li className="flex items-center gap-3">
                <span className="w-4 font-mono text-[10px] font-bold text-zinc-600 select-none">E</span>
                <a
                  href="mailto:augustino82@gmail.com"
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  augustino82@gmail.com
                </a>
              </li>
            </ul>
          </BlurFade>
        </footer>

        {/* Hero → About fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-full"
          style={{
            height: 220,
            background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.85) 100%)",
          }}
        />
      </section>

      {/* ─── About ────────────────────────────────────────────────── */}
      <section id="about" className="relative px-8 py-24 sm:px-12">
        {/* dark overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "rgba(0,0,0,0.72)" }}
        />

        <div className="relative z-10">
          <BlurFade delay={0}>
            <div className="mb-16 h-px w-full bg-zinc-800" />
          </BlurFade>

          <div className="mx-auto max-w-5xl grid gap-20 lg:grid-cols-[1fr_1fr]">

            {/* Left — bio */}
            <div>
              <BlurFade delay={0.05}>
                <p className="mb-8 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                  About
                </p>
              </BlurFade>
              <BlurFade delay={0.12}>
                <h2 className="mb-6 text-2xl font-bold leading-snug text-white">
                  Built on systems.
                  <br />
                  Defined by experience.
                </h2>
              </BlurFade>
              <BlurFade delay={0.2}>
                <p className="text-sm leading-7 text-zinc-400">
                  I focus on building scalable design systems and cohesive visual
                  identities that maintain brand consistency at every touchpoint.
                  Leveraging Figma and AI-driven workflows, I structure the design
                  process to improve collaboration efficiency and elevate the
                  overall quality of the output.
                </p>
              </BlurFade>
            </div>

            {/* Right — experience + contact */}
            <div className="flex flex-col gap-12">
              <div>
                <BlurFade delay={0.08}>
                  <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                    Experience
                  </p>
                </BlurFade>
                <ol className="flex flex-col">
                  {EXPERIENCE.map((item, i) => (
                    <BlurFade key={i} delay={0.15 + i * 0.1}>
                      <li className="flex items-start gap-8 border-t border-zinc-800 py-5">
                        <span className="shrink-0 font-mono text-xs text-zinc-600">
                          {item.year}
                        </span>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-sm font-semibold text-white">{item.org}</span>
                          <span className="text-xs text-zinc-500">{item.role}</span>
                        </div>
                      </li>
                    </BlurFade>
                  ))}
                  <BlurFade delay={0.35}>
                    <li className="border-t border-zinc-800" />
                  </BlurFade>
                </ol>
              </div>

              <BlurFade delay={0.4}>
                <div>
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                    Contact
                  </p>
                  <a
                    href="mailto:augustino82@gmail.com"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    augustino82@gmail.com
                  </a>
                </div>
              </BlurFade>
            </div>
          </div>

          {/* no bottom rule here — Work section follows */}
        </div>
      </section>

      {/* ─── Work ─────────────────────────────────────────────────── */}
      <section id="work" className="relative px-8 py-24 sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "rgba(0,0,0,0.72)" }}
        />
        <div className="relative z-10 mx-auto max-w-5xl">
          <BlurFade delay={0}>
            <div className="mb-16 h-px w-full bg-zinc-800" />
          </BlurFade>

          <BlurFade delay={0.05}>
            <p className="mb-12 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              Work
            </p>
          </BlurFade>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {PROJECTS.map((project, i) => (
              <BlurFade key={project.slug} delay={0.1 + i * 0.1}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/40 transition-colors hover:border-zinc-700"
                >
                  {/* Thumbnail */}
                  <div className="overflow-hidden">
                    <img
                      src={project.thumb}
                      alt={project.title}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Card body */}
                  <div className="flex flex-col gap-2 p-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-zinc-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[10px] text-zinc-600">
                        {project.year}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-white transition-colors group-hover:text-[#FFD024]">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-500">{project.category}</p>
                  </div>
                </Link>
              </BlurFade>
            ))}
          </div>

          {/* Bottom rule + copyright */}
          <BlurFade delay={0.45}>
            <div className="mt-24">
              <div className="mb-6 h-px w-full bg-zinc-800" />
              <p className="text-[10px] text-zinc-700">© 2026 Guhyun Yang</p>
            </div>
          </BlurFade>
        </div>
      </section>

    </div>
  );
}
