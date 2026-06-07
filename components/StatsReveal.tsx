"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  {
    number: "17+",
    label: "Messaging Platforms",
  },
  {
    number: "300+",
    label: "Model Providers",
  },
  {
    number: "100%",
    label: "Human-Approved Critical Actions",
  },
];

export default function StatsReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

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
          <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] tracking-[-0.02em] font-semibold text-[var(--text)] mb-4">
            One system, infinite reach
          </h2>
          <p className="text-[17px] text-[var(--text-muted)] max-w-[60ch]">
            Headmaster connects where your team already works, supporting every major platform and model at scale.
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
              <div className="stat-label text-[16px] text-[var(--text-muted)] max-w-[30ch] leading-relaxed opacity-0">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-20 border-t border-[var(--border)]">
          <p className="text-[17px] text-[var(--text-muted)] max-w-[70ch] leading-relaxed">
            Headmaster's architecture is built for scale. From platform support to model flexibility, every component is designed to grow with your organization.
          </p>
        </div>
      </div>
    </section>
  );
}
