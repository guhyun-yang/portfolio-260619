import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "@/lib/work-data";
import { BlurFade } from "@/components/blur-fade";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Guhyun Yang`,
    description: project.description,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div
      className="min-h-screen text-white"
      style={{ background: "#0a0a0a" }}
    >
      <div className="mx-auto max-w-3xl px-8 py-16 sm:px-12">

        {/* Back */}
        <BlurFade immediate delay={0.05}>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-600 transition-colors hover:text-white"
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path
                d="M17 10H3M10 3l-7 7 7 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </Link>
        </BlurFade>

        {/* Header */}
        <div className="mt-16">
          <BlurFade immediate delay={0.1}>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              {project.category} · {project.year}
            </p>
          </BlurFade>
          <BlurFade immediate delay={0.18}>
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              {project.title}
            </h1>
          </BlurFade>
          <BlurFade immediate delay={0.26}>
            <p className="text-base leading-relaxed text-zinc-400">
              {project.description}
            </p>
          </BlurFade>
        </div>

        {/* Tags */}
        <BlurFade immediate delay={0.34}>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-500"
              >
                {tag}
              </span>
            ))}
          </div>
        </BlurFade>

        {/* Divider */}
        <BlurFade immediate delay={0.38}>
          <div className="my-12 h-px w-full bg-zinc-800" />
        </BlurFade>

        {/* Cover image */}
        <BlurFade immediate delay={0.44}>
          <img
            src={project.thumb}
            alt={project.title}
            className="w-full rounded-xl object-cover"
          />
        </BlurFade>

        {/* Body */}
        <BlurFade delay={0.1}>
          <div className="mt-12">
            {project.body.split("\n\n").map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "mb-6 text-base leading-7 text-zinc-300"
                    : "mb-6 text-sm leading-7 text-zinc-400"
                }
              >
                {para}
              </p>
            ))}
          </div>
        </BlurFade>

        {/* Footer rule */}
        <BlurFade delay={0.2}>
          <div className="mt-20 h-px w-full bg-zinc-800" />
          <p className="mt-6 text-[10px] text-zinc-700">© 2026 Guhyun Yang</p>
        </BlurFade>
      </div>
    </div>
  );
}
