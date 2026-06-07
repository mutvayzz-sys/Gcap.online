"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, Zap, ShieldCheck, GitMerge } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STACKED_FEATURES = [
  {
    id: "memory",
    Icon: Brain,
    title: "Persistent Memory",
    description: "Agents retain complete context of past interactions, enabling continuity across conversations.",
  },
  {
    id: "parallel",
    Icon: Zap,
    title: "Parallel Execution",
    description: "Multiple specialized agents work simultaneously on different problem dimensions.",
  },
  {
    id: "control",
    Icon: ShieldCheck,
    title: "Human Control",
    description: "Critical actions wait for human sign-off. You stay in control of every decision.",
  },
  {
    id: "coordination",
    Icon: GitMerge,
    title: "Result Coordination",
    description: "Outputs from parallel agents are intelligently aggregated into cohesive results.",
  },
];

export default function StackedCardsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
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
      const cards = cardsRef.current.filter(Boolean);
      if (cards.length === 0) return;

      // For each card (except the last), animate scale when the next card covers it
      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          const nextCard = cards[index + 1];

          gsap.to(card, {
            scale: 0.96,
            scrollTrigger: {
              trigger: nextCard,
              start: "top center",
              end: "top 20%",
              scrub: 1,
              markers: false,
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[var(--bg)] py-32"
      id="stacked-features"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section header */}
        <div className="mb-32 max-w-[65ch]">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.02em] font-semibold text-[var(--text)] mb-4">
            Engineered for collaboration
          </h2>
          <p className="text-[17px] text-[var(--text-muted)]">
            Every layer designed to amplify human creativity while eliminating busywork.
          </p>
        </div>

        {/* Stacked cards container */}
        <div className="relative">
          {STACKED_FEATURES.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="sticky rounded-[var(--radius-lg)] bg-[var(--bg-elevated)] border border-[var(--border)] p-8 lg:p-12 min-h-[280px] flex flex-col justify-center shadow-[var(--shadow-subtle)] transform-gpu origin-center mb-4"
              style={{
                top: `calc(6rem + ${index} * 1.5rem)`,
              }}
            >
              <div className="space-y-6">
                <div className="w-11 h-11 rounded-xl bg-[var(--text)] text-[var(--bg)] flex items-center justify-center" aria-hidden="true">
                  <feature.Icon size={20} strokeWidth={1.8} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-[clamp(1.3rem,2.5vw,2rem)] tracking-[-0.02em] font-semibold text-[var(--text)] text-balance">
                    {feature.title}
                  </h3>
                  <p className="text-[17px] text-[var(--text-muted)] max-w-[55ch] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
