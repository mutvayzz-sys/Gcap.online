"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;
const HEADLINE = "Headmaster is your\nAI conductor.";
const CHAR_DELAY_MS = 38;
const START_DELAY_MS = 180;

const TRUST_MARKS = [
  { icon: "✦", name: "Apollo" },
  { icon: "✳︎", name: "Verity" },
  { icon: "◈", name: "Northfield" },
  { icon: "⊞", name: "Lattice" },
];

function useTypewriter(text: string) {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(reduced ? text.length : 0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reduced) {
      setCount(text.length);
      return;
    }
    setCount(0);
    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        setCount((prev) => {
          if (prev >= text.length) {
            clearInterval(intervalRef.current!);
            return prev;
          }
          return prev + 1;
        });
      }, CHAR_DELAY_MS);
    }, START_DELAY_MS);

    return () => {
      clearTimeout(timeoutRef.current!);
      clearInterval(intervalRef.current!);
    };
  }, [text, reduced]);

  return { displayed: text.slice(0, count), done: count >= text.length };
}

function fadeUp(delay: number, reduced: boolean) {
  return {
    initial: { opacity: 0, y: reduced ? 0 : 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: EASE, delay: delay / 1000 },
  };
}

export default function HeroSection() {
  const reduced = !!useReducedMotion();
  const { displayed, done } = useTypewriter(HEADLINE);
  const lines = displayed.split("\n");

  // Stagger the sub-content in after the headline is done typing
  const subDelay = reduced ? 0 : HEADLINE.length * CHAR_DELAY_MS + START_DELAY_MS;

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: "var(--color-bg, #e8e3d9)" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] min-h-screen">

        {/* ── Left column ─────────────────────────────────────── */}
        <div className="flex items-center px-6 sm:px-10 lg:px-16 py-32 lg:py-0 pt-28 sm:pt-28">
          <div style={{ maxWidth: "560px" }}>

            {/* Eyebrow */}
            <motion.p
              {...fadeUp(0, reduced)}
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

            {/* Headline — typewriter reveal */}
            <h1
              className="mb-6"
              style={{
                fontSize: "clamp(2.8rem, 5vw, 5rem)",
                fontFamily: "var(--font-heading)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                color: "var(--color-ink, #1a1916)",
                minHeight: "2.2em",
              } as React.CSSProperties}
            >
              {lines.map((line, li) => (
                <span key={li} className="block">
                  {line}
                  {/* Cursor — only on the last active line */}
                  {li === lines.length - 1 && !done && (
                    <span
                      aria-hidden="true"
                      className="hero-cursor"
                      style={{
                        display: "inline-block",
                        width: "3px",
                        height: "0.85em",
                        backgroundColor: "var(--color-ink, #1a1916)",
                        marginLeft: "4px",
                        verticalAlign: "middle",
                        borderRadius: "1px",
                      }}
                    />
                  )}
                </span>
              ))}
            </h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: reduced ? 0 : 8 }}
              animate={{ opacity: done || reduced ? 1 : 0, y: done || reduced ? 0 : 8 }}
              transition={{ duration: 0.6, ease: EASE, delay: subDelay / 1000 }}
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
              initial={{ opacity: 0, y: reduced ? 0 : 8 }}
              animate={{ opacity: done || reduced ? 1 : 0, y: done || reduced ? 0 : 8 }}
              transition={{ duration: 0.6, ease: EASE, delay: (subDelay + 100) / 1000 }}
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
              initial={{ opacity: 0, y: reduced ? 0 : 8 }}
              animate={{ opacity: done || reduced ? 1 : 0, y: done || reduced ? 0 : 8 }}
              transition={{ duration: 0.6, ease: EASE, delay: (subDelay + 200) / 1000 }}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: done || reduced ? 1 : 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: (subDelay + 350) / 1000 }}
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
          initial={{ opacity: 0, x: reduced ? 0 : 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.15 }}
          className="relative hidden lg:flex lg:h-screen items-stretch"
          style={{ minWidth: "400px", maxWidth: "640px" }}
        >
          {/* Soft left-edge gradient bleed */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 z-10 pointer-events-none"
            style={{
              width: "22%",
              background:
                "linear-gradient(to right, var(--color-bg, #e8e3d9) 0%, transparent 100%)",
            }}
          />
          <CharacterImage />
        </motion.div>
      </div>
    </section>
  );
}

function CharacterImage() {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className="h-full flex items-center justify-center"
        style={{ width: "480px", backgroundColor: "rgba(26,25,22,0.04)" }}
      >
        <span
          style={{
            fontSize: "12px",
            letterSpacing: "0.12em",
            color: "rgba(107,104,96,0.4)",
            fontFamily: "var(--font-body)",
          }}
        >
          hero-character.png
        </span>
      </div>
    );
  }

  return (
    <img
      src="/images/hero-character.png"
      alt=""
      role="presentation"
      className="h-full w-auto object-cover object-top block"
      style={{ maxHeight: "100vh" }}
      onError={() => setErrored(true)}
    />
  );
}
