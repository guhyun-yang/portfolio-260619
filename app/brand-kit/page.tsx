"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Copy, Check, RotateCcw, Save } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BrandTokens {
  bg: string;
  card: string;
  text: string;
  sub: string;
  accent: string;
  radius: number;
}

// ─── Presets ──────────────────────────────────────────────────────────────────

const PRESETS: { name: string; tokens: BrandTokens }[] = [
  {
    name: "Night Studio",
    tokens: {
      bg: "#0a0a0a",
      card: "#111111",
      text: "#ffffff",
      sub: "#71717a",
      accent: "#FFD024",
      radius: 12,
    },
  },
  {
    name: "Warm Sand",
    tokens: {
      bg: "#f5f0e8",
      card: "#ede8df",
      text: "#1a1208",
      sub: "#78716c",
      accent: "#c97941",
      radius: 16,
    },
  },
  {
    name: "Deep Ocean",
    tokens: {
      bg: "#0d1b2a",
      card: "#1b2d40",
      text: "#e8f4f8",
      sub: "#5c8fa8",
      accent: "#4fc3f7",
      radius: 10,
    },
  },
  {
    name: "Muted Forest",
    tokens: {
      bg: "#161b16",
      card: "#1e261e",
      text: "#d4dfd4",
      sub: "#6b8c6b",
      accent: "#7dba6e",
      radius: 8,
    },
  },
];

const DEFAULT_TOKENS = PRESETS[0].tokens;
const STORAGE_KEY = "brand-kit-tokens";

// ─── Color Field ──────────────────────────────────────────────────────────────

function ColorField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-zinc-400">{label}</span>
      <div className="flex items-center gap-2">
        <span className="font-mono text-xs text-zinc-500 uppercase">
          {value}
        </span>
        <label className="relative cursor-pointer">
          <span
            className="block size-8 rounded-md border border-white/10 ring-0 transition-shadow hover:ring-2 hover:ring-white/20"
            style={{ backgroundColor: value }}
          />
          <input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
          />
        </label>
      </div>
    </div>
  );
}

// ─── Preview ──────────────────────────────────────────────────────────────────

function Preview({ tokens }: { tokens: BrandTokens }) {
  const r = `${tokens.radius}px`;
  return (
    <div
      className="h-full min-h-[480px] w-full overflow-hidden p-6 flex flex-col gap-5 transition-all duration-300"
      style={{ backgroundColor: tokens.bg, borderRadius: r }}
    >
      {/* Nav */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="size-7 rounded-full"
            style={{ backgroundColor: tokens.card }}
          />
          <span
            className="text-sm font-bold"
            style={{ color: tokens.text }}
          >
            Guhyun Yang
          </span>
        </div>
        <div className="flex items-center gap-4">
          {["About", "Work", "Contact"].map((item) => (
            <span
              key={item}
              className="text-xs font-semibold"
              style={{ color: tokens.text, opacity: 0.6 }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hero text */}
      <div className="flex flex-col gap-1 pt-4">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.2em]"
          style={{ color: tokens.sub }}
        >
          UX Designer
        </p>
        <h2
          className="text-2xl font-bold leading-tight"
          style={{ color: tokens.text }}
        >
          Designing{" "}
          <span style={{ color: tokens.accent }}>systems</span>
          <br />
          that <span style={{ color: tokens.accent }}>scale</span>.
        </h2>
      </div>

      {/* Cards row */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        {["Design System", "Mobile UX"].map((title, i) => (
          <div
            key={title}
            className="flex flex-col gap-2 p-4 transition-all duration-300"
            style={{
              backgroundColor: tokens.card,
              borderRadius: r,
              border: `1px solid ${tokens.text}14`,
            }}
          >
            <div
              className="h-16 rounded-md"
              style={{
                backgroundColor: tokens.bg,
                borderRadius: `${Math.max(tokens.radius - 4, 2)}px`,
              }}
            />
            <span
              className="text-xs font-semibold"
              style={{ color: tokens.text }}
            >
              {title}
            </span>
            <span className="text-[10px]" style={{ color: tokens.sub }}>
              {i === 0 ? "Brand & Systems" : "Product UX"}
            </span>
          </div>
        ))}
      </div>

      {/* CTA button */}
      <div>
        <div
          className="inline-flex items-center px-4 py-2 text-xs font-semibold transition-all duration-300"
          style={{
            backgroundColor: tokens.accent,
            color: tokens.bg,
            borderRadius: `${Math.max(tokens.radius - 4, 4)}px`,
          }}
        >
          View Work
        </div>
      </div>

      {/* Accent bar */}
      <div className="mt-auto flex items-center gap-2">
        <div
          className="h-0.5 w-8"
          style={{ backgroundColor: tokens.accent }}
        />
        <span className="text-[10px]" style={{ color: tokens.sub }}>
          © 2026 Guhyun Yang
        </span>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BrandKitPage() {
  const [tokens, setTokens] = useState<BrandTokens>(DEFAULT_TOKENS);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setTokens(JSON.parse(raw));
    } catch {}
  }, []);

  const update = useCallback(
    (key: keyof BrandTokens, value: string | number) => {
      setTokens((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const applyPreset = (preset: BrandTokens) => setTokens(preset);

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tokens));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleReset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setTokens(DEFAULT_TOKENS);
  };

  const handleCopy = () => {
    const css = [
      `--color-bg: ${tokens.bg};`,
      `--color-card: ${tokens.card};`,
      `--color-text: ${tokens.text};`,
      `--color-sub: ${tokens.sub};`,
      `--color-accent: ${tokens.accent};`,
      `--radius: ${tokens.radius}px;`,
    ]
      .map((line) => `  ${line}`)
      .join("\n");

    navigator.clipboard.writeText(`:root {\n${css}\n}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{
        backgroundImage: "url('/hero-mesh-gradient.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative min-h-screen" style={{ background: "rgba(0,0,0,0.8)" }}>
        <div className="mx-auto max-w-6xl px-8 py-12 sm:px-12">

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white mb-10"
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>

          {/* Header */}
          <div className="mb-12">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              Brand Kit
            </p>
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              Tone &amp; <span className="text-[#FFD024]">Manner</span>
            </h1>
            <p className="mt-3 text-sm text-zinc-400">
              Experiment with your portfolio&apos;s visual identity. Changes are saved locally.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[420px_1fr]">

            {/* ── Controls ── */}
            <div className="flex flex-col gap-8">

              {/* Presets */}
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                  Mood Presets
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {PRESETS.map((preset) => {
                    const active =
                      JSON.stringify(tokens) ===
                      JSON.stringify(preset.tokens);
                    return (
                      <button
                        key={preset.name}
                        onClick={() => applyPreset(preset.tokens)}
                        className={cn(
                          "flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all",
                          active
                            ? "border-white/20 bg-white/10 text-white"
                            : "border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:border-zinc-600 hover:text-white"
                        )}
                      >
                        <span
                          className="size-4 shrink-0 rounded-full border border-white/10"
                          style={{ backgroundColor: preset.tokens.accent }}
                        />
                        {preset.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Colors */}
              <div>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                  Colors
                </p>
                <div className="flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-5">
                  <ColorField
                    label="Background"
                    value={tokens.bg}
                    onChange={(v) => update("bg", v)}
                  />
                  <div className="h-px bg-zinc-800" />
                  <ColorField
                    label="Card"
                    value={tokens.card}
                    onChange={(v) => update("card", v)}
                  />
                  <div className="h-px bg-zinc-800" />
                  <ColorField
                    label="Text"
                    value={tokens.text}
                    onChange={(v) => update("text", v)}
                  />
                  <div className="h-px bg-zinc-800" />
                  <ColorField
                    label="Secondary Text"
                    value={tokens.sub}
                    onChange={(v) => update("sub", v)}
                  />
                  <div className="h-px bg-zinc-800" />
                  <ColorField
                    label="Accent"
                    value={tokens.accent}
                    onChange={(v) => update("accent", v)}
                  />
                </div>
              </div>

              {/* Border Radius */}
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                    Card Radius
                  </p>
                  <span className="font-mono text-xs text-zinc-500">
                    {tokens.radius}px
                  </span>
                </div>
                <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-5">
                  <Slider
                    min={0}
                    max={32}
                    step={2}
                    value={[tokens.radius]}
                    onValueChange={([v]) => update("radius", v)}
                    className="w-full"
                  />
                  <div className="mt-2 flex justify-between">
                    <span className="text-[10px] text-zinc-700">Sharp</span>
                    <span className="text-[10px] text-zinc-700">Rounded</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleSave}
                  className={cn(
                    "flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition-all",
                    saved
                      ? "bg-zinc-700 text-zinc-300"
                      : "bg-white text-black hover:bg-zinc-200"
                  )}
                >
                  <Save size={14} />
                  {saved ? "Saved" : "Save"}
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={handleCopy}
                    className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/40 py-3 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:text-white"
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? "Copied" : "Copy CSS"}
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/40 py-3 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:text-white"
                  >
                    <RotateCcw size={14} />
                    Reset
                  </button>
                </div>
              </div>
            </div>

            {/* ── Preview ── */}
            <div className="lg:sticky lg:top-12 lg:self-start">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
                Live Preview
              </p>
              <div className="overflow-hidden rounded-2xl border border-zinc-800">
                <Preview tokens={tokens} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
