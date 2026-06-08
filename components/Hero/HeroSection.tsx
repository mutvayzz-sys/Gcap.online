"use client";

import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const LINE1 = ["Headmaster", "is", "your"];
const LINE2 = ["AI", "conductor."];

const TRUST_MARKS = [
  { icon: "✦", name: "Apollo" },
  { icon: "✳︎", name: "Verity" },
  { icon: "◈", name: "Northfield" },
  { icon: "⊞", name: "Lattice" },
];

type FadeUpOptions = {
  delay?: number;
  duration?: number;
  x?: number;
  reduced: boolean;
};

function fadeUp({ delay = 0, duration = 0.6, x, reduced }: FadeUpOptions) {
  return {
    initial: { opacity: 0, y: reduced ? 0 : 8, x: reduced ? 0 : (x ?? 0) },
    animate: { opacity: 1, y: 0, x: 0 },
    transition: { duration, ease: EASE, delay: delay / 1000 },
  };
}

export default function HeroSection() {
  const reduced = !!useReducedMotion();

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "var(--color-bg, #e8e3d9)" }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_auto] min-h-screen"
      >
        {/* ── Left column ─────────────────────────────────────── */}
        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-32 lg:py-0 pt-28 sm:pt-28">
          <div style={{ maxWidth: "560px" }}>

            {/* Eyebrow */}
            <motion.p
              {...fadeUp({ delay: 0, reduced })}
              className="mb-6 uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                color: "var(--color-ink-muted, #6b6860)",
                fontFamily: "var(--font-body)",
              }}
            >
              INTRODUCING HEADMASTER
            </motion.p>

            {/* Headline — word-by-word reveal */}
            <h1
              className="mb-6"
              style={{
                fontSize: "clamp(2.8rem, 5vw, 5rem)",
                fontFamily: "var(--font-heading)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "var(--color-ink, #1a1916)",
                textWrap: "balance",
              } as React.CSSProperties}
            >
              <span className="block">
                {LINE1.map((word, i) => (
                  <motion.span
                    key={word + i}
                    initial={{ opacity: 0, y: reduced ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.1 + i * 0.08 }}
                    className="inline-block"
                    style={{ marginRight: "0.28em" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <span className="block">
                {LINE2.map((word, i) => (
                  <motion.span
                    key={word + i}
                    initial={{ opacity: 0, y: reduced ? 0 : 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: EASE,
                      delay: 0.1 + (LINE1.length + i) * 0.08,
                    }}
                    className="inline-block"
                    style={{ marginRight: "0.28em" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Body */}
            <motion.p
              {...fadeUp({ delay: 500, reduced })}
              className="mb-10"
              style={{
                fontSize: "clamp(15px, 1.7vw, 17px)",
                lineHeight: 1.55,
                color: "var(--color-ink-muted, #6b6860)",
                maxWidth: "38ch",
                fontFamily: "var(--font-body)",
              }}
            >
              Orchestrate intelligence across your systems.
              <br />
              Assign, guide, and evaluate AI agents.
              <br />
              One platform. Total clarity.
            </motion.p>

            {/* CTA Row 1 */}
            <motion.div
              {...fadeUp({ delay: 650, reduced })}
              className="flex gap-3 flex-wrap"
            >
              <button className="hero-btn-primary rounded-full px-6 py-3 text-[14px] font-medium transition-all duration-200">
                Explore Headmaster ↗
              </button>
              <button className="hero-btn-secondary rounded-full px-6 py-3 text-[14px] transition-all duration-200">
                Watch overview ▶
              </button>
            </motion.div>

            {/* CTA Row 2 */}
            <motion.div
              {...fadeUp({ delay: 750, reduced })}
              className="flex gap-3 flex-wrap mt-3"
            >
              <button className="hero-btn-ghost rounded-full px-5 py-2 text-[13px] transition-all duration-200">
                See it in action
              </button>
              <button className="hero-btn-ghost rounded-full px-5 py-2 text-[13px] transition-all duration-200">
                View documentation
              </button>
            </motion.div>

            {/* Trust bar */}
            <motion.div
              {...fadeUp({ delay: 900, reduced })}
              className="mt-14 pt-7"
              style={{ borderTop: "1px solid rgba(26,25,22,0.1)" }}
            >
              <p
                className="mb-4 uppercase"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                  color: "var(--color-ink-muted, #6b6860)",
                  fontFamily: "var(--font-body)",
                }}
              >
                TRUSTED BY FORWARD-THINKING TEAMS
              </p>
              <div className="flex flex-wrap gap-8">
                {TRUST_MARKS.map(({ icon, name }) => (
                  <span
                    key={name}
                    className="flex items-center gap-1.5"
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.05em",
                      color: "rgba(107,104,96,0.6)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    <span aria-hidden="true" style={{ fontSize: "13px" }}>{icon}</span>
                    {name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Right column — character image ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: reduced ? 0 : 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
          className="relative hidden lg:flex lg:h-screen items-stretch"
          style={{ minWidth: "420px", maxWidth: "620px" }}
        >
          {/* Soft left-edge gradient */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 z-10 pointer-events-none"
            style={{
              width: "20%",
              background:
                "linear-gradient(to right, var(--color-bg, #e8e3d9) 0%, transparent 100%)",
            }}
          />

          {/* Character image */}
          <CharacterImage />
        </motion.div>
      </div>
    </section>
  );
}

function CharacterImage() {
  return (
    <img
      src="/images/hero-character.png"
      alt="Headmaster — retro monitor-head figure"
      className="h-full w-auto object-cover object-top block"
      style={{ maxHeight: "100vh" }}
      onError={(e) => {
        const parent = e.currentTarget.parentElement;
        if (!parent) return;
        e.currentTarget.style.display = "none";
        const ph = document.createElement("div");
        ph.style.cssText =
          "width:480px;height:100%;background:rgba(26,25,22,0.04);display:flex;align-items:center;justify-content:center;";
        ph.innerHTML =
          "<span style=\"font-size:13px;letter-spacing:0.12em;color:rgba(107,104,96,0.4);font-family:var(--font-body)\">hero-character.png</span>";
        parent.appendChild(ph);
      }}
    />
  );
}
