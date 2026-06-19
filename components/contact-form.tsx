"use client";

import { useEffect, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [height, setHeight] = useState(560);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (typeof e.data !== "object" || !e.data) return;

      if (e.data.type === "tally-form-submitted") {
        setSubmitted(true);
        return;
      }

      // Tally dynamic height resize
      if (
        e.data.type === "tally-height" &&
        typeof e.data.height === "number"
      ) {
        setHeight(e.data.height);
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  if (submitted) {
    return (
      <div className="flex min-h-[240px] w-full items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/30">
        <p className="text-sm text-zinc-300">
          문의가 접수됐어요. 확인 후 답장드릴게요.
        </p>
      </div>
    );
  }

  return (
    <iframe
      src="https://tally.so/embed/RG2Dod?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
      width="100%"
      height={height}
      style={{ border: "none", minHeight: 480 }}
      title="Contact form"
      loading="lazy"
    />
  );
}
