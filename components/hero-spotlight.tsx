"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = spotRef.current;
    if (!el) return;

    // Start at center
    gsap.set(el, { x: "50%", y: "50%", xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e: MouseEvent) => {
      const section = el.parentElement;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(el, {
        x,
        y,
        xPercent: -50,
        yPercent: -50,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    const section = el.parentElement;
    section?.addEventListener("mousemove", handleMouseMove);
    return () => section?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={spotRef}
      aria-hidden
      className="pointer-events-none absolute z-0"
      style={{
        width: 900,
        height: 900,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(180,120,255,0.18) 0%, rgba(255,160,40,0.10) 45%, transparent 70%)",
        filter: "blur(60px)",
        willChange: "transform",
      }}
    />
  );
}
