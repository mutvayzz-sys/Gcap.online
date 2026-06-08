"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  {
    number: "17",
    label: "Communication platforms supported",
  },
  {
    number: "1,289",
    label: "Merged PRs across the last two releases",
  },
  {
    number: "100%",
    label: "High-stakes actions gated before release",
  },
];

export default function StatsReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
  );

  useEffect(() => {
    // Subscribe to prefers-reduced-motion changes.
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const stats = containerRef.current?.querySelectorAll(".stat-item");
      if (!stats) return;

      stats.forEach((stat) => {
        const numberElement = stat.querySelector(".stat-number");
        const numberText = numberElement?.textContent || "";

        // Split number into characters
        const chars = numberText.split("");
        if (numberElement) {
          numberElement.innerHTML = chars
            .map((char) => `<span class="char" style="opacity: 0.15; display: inline-block;">${char}</span>`)
            .join("");
        }

        const charElements = stat.querySelectorAll(".char");

        gsap.to(charElements, {
          opacity: 1,
          stagger: 0.04,
          scrollTrigger: {
            trigger: stat,
            start: "top 70%",
            end: "top 30%",
            scrub: 0.8,
            markers: false,
          },
        });

        // Also animate label text
        gsap.fromTo(
          stat.querySelector(".stat-label"),
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: stat,
              start: "top 70%",
              end: "top 30%",
              scrub: 0.8,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-[var(--bg)]"
      id="stats-reveal"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="mb-20">
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] tracking-[-0.02em] font-semibold text-[var(--text)] mb-4 text-balance">
            Release velocity with controls
          </h2>
          <p className="text-[17px] text-[var(--text-muted)] max-w-[60ch]">
            Headmaster ships fast — 1,289 merged PRs across the last two releases alone — but every high-stakes action stops at a human approval gate before it leaves the workspace.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="stat-item flex flex-col items-start gap-4"
            >
              <div className="stat-number text-[clamp(3rem,5vw,4.5rem)] leading-none font-bold text-[var(--text)]">
                {stat.number}
              </div>
              <div className="stat-label text-[16px] text-[var(--text-muted)] max-w-[30ch] leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-20 border-t border-[var(--border)]">
          <p className="text-[17px] text-[var(--text-muted)] max-w-[70ch] leading-relaxed">
            Headmaster&apos;s release cadence is paired with operational controls: 17 platforms, 300+ model routes, and workflows that expand while approvals and audit logs stay consistent.
          </p>
        </div>
      </div>
    </section>
  );
}
