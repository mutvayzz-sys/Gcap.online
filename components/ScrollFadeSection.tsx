"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROOF_CARDS = [
  {
    id: "platforms",
    stat: "17",
    label: "Platforms",
    description: "Unified integration across messaging and communication channels",
  },
  {
    id: "models",
    stat: "300+",
    label: "Models",
    description: "Model-agnostic architecture supporting all major LLMs",
  },
  {
    id: "approval",
    stat: "100%",
    label: "Approved",
    description: "High-stakes actions verified through human-in-the-loop",
  },
];

export default function ScrollFadeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
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
      const cards = containerRef.current?.querySelectorAll(".proof-card");
      if (!cards) return;

      cards.forEach((card) => {
        // Entry animation: scale up and fade in — start from nearly-visible so content
        // is never completely hidden if the ScrollTrigger fires late or not at all
        gsap.fromTo(
          card,
          { scale: 0.94, opacity: 0.25 },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 30%",
              scrub: 1,
              markers: false,
            },
          }
        );

        // Exit animation: fade out
        gsap.fromTo(
          card,
          { opacity: 1 },
          {
            opacity: 0.25,
            scrollTrigger: {
              trigger: card,
              start: "bottom 60%",
              end: "bottom 10%",
              scrub: 1,
              markers: false,
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
      className="relative bg-[var(--bg)] py-32"
      id="proof"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section header */}
        <div className="mb-32 max-w-[65ch]">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.02em] font-semibold text-[var(--text)] mb-4">
            Proven at scale
          </h2>
          <p className="text-[17px] text-[var(--text-muted)]">
            Deploy with confidence. Our infrastructure handles real-world complexity at enterprise scale.
          </p>
        </div>

        {/* Proof cards */}
        <div className="space-y-24">
          {PROOF_CARDS.map((card) => (
            <div
              key={card.id}
              className="proof-card py-24 px-8 lg:px-12 rounded-[var(--radius-lg)] bg-[var(--text)] text-[var(--bg)] min-h-[320px] flex flex-col justify-center"
            >
              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  <div className="text-[clamp(2.5rem,6vw,4rem)] font-semibold font-mono tracking-tight">
                    {card.stat}
                  </div>
                  <div className="text-[clamp(1rem,2vw,1.3rem)] font-semibold opacity-90">
                    {card.label}
                  </div>
                </div>
                <p className="text-[17px] opacity-80 max-w-[55ch]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
