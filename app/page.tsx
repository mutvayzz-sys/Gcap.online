"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OrchestratorDemo from "@/components/OrchestratorDemo";
import OnePromptDemo from "@/components/OnePromptDemo";
import StatsBar from "@/components/StatsBar";
import WorksWith from "@/components/WorksWith";
import NotificationCard from "@/components/NotificationCard";
import HowItWorksFlow from "@/components/HowItWorksFlow";
import ChatbotComparison from "@/components/ChatbotComparison";
import UseCases from "@/components/UseCases";
import FAQ from "@/components/FAQ";
import TayX from "@/components/TayX";
import SpecialistFleet from "@/components/SpecialistFleet";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import AgencyOrchestration from "@/components/AgencyOrchestration";

// Memory visualization — deterministic grid of glowing dots
function MemoryViz() {
  const ROWS = 7;
  const COLS = 12;
  const getGlow = (r: number, c: number) => {
    const v = (r * 13 + c * 7 + r * c) % 10;
    return v > 6 ? "bright" : v > 3 ? "medium" : "dim";
  };
  const getDelay = (r: number, c: number) => ((r * 3 + c * 5) % 20) * 0.15;

  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[#0D0D0D] p-7 overflow-hidden">
      <div
        className="grid gap-2"
        style={{ gridTemplateColumns: `repeat(${COLS}, 1fr)` }}
        aria-hidden="true"
      >
        {Array.from({ length: ROWS * COLS }).map((_, i) => {
          const r = Math.floor(i / COLS);
          const c = i % COLS;
          const glow = getGlow(r, c);
          return (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor:
                  glow === "bright"
                    ? "var(--accent)"
                    : glow === "medium"
                    ? "#3a3a3a"
                    : "#1e1e1e",
                animation:
                  glow !== "dim"
                    ? `pulse-dot ${2 + getDelay(r, c)}s ease-in-out ${getDelay(r, c)}s infinite`
                    : undefined,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

// Focus animation — two-state compression visualization
function FocusAnimation() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setCollapsed((p) => !p), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="rounded-2xl border border-[var(--border)] bg-[#0D0D0D] p-7 overflow-hidden min-h-[180px] flex flex-col justify-center"
      aria-hidden="true"
    >
      <AnimatePresence mode="wait">
        {!collapsed ? (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-1.5"
          >
            {[82, 95, 73, 88, 60, 91, 76, 84].map((w, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full bg-white/15"
                style={{ width: `${w}%`, filter: "blur(0.5px)" }}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <div className="h-2 rounded-full bg-white/90" style={{ width: "78%" }} />
            <div className="h-2 rounded-full bg-white/65" style={{ width: "60%" }} />
            <div className="h-2 rounded-full bg-white/40" style={{ width: "42%" }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function GCAPLabs() {
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      const lenis = (window as any).__lenis;
      if (lenis) lenis.scrollTo(el, { offset: 0 });
      else el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(
      "mailto:waitlist@gcap.online?subject=Headmaster Early Access Request",
      "_blank"
    );
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[#111111] selection:text-white">

      {/* ─── Navigation ─────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/95 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.svg"
              alt="GCAP Labs"
              className="h-8 w-auto"
              width={32}
              height={32}
            />
            <span className="text-[21px] tracking-[-0.8px] font-medium">GCAP</span>
          </div>

          <div className="hidden md:flex items-center gap-9 text-[15px]">
            <a href="#headmaster" className="hover:text-[var(--text-muted)] transition-colors">Headmaster</a>
            <a href="#orchestrator" className="hover:text-[var(--text-muted)] transition-colors">How It Works</a>
            <a href="#memory" className="hover:text-[var(--text-muted)] transition-colors">Memory</a>
            <a href="#tayx" className="hover:text-[var(--text-muted)] transition-colors">TayX</a>
            <button
              onClick={() => scrollTo("waitlist")}
              className="px-6 py-[10px] rounded-full bg-[#111111] text-[#F9F7F3] text-sm hover:bg-black transition-colors"
              aria-label="Join the waitlist"
            >
              Join the waitlist
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen((p) => !p)}
            className="md:hidden z-50 relative flex flex-col gap-[5px] p-2"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`block w-5 h-[1.5px] bg-[var(--text)] transition-all duration-200 ${mobileMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[var(--text)] transition-all duration-200 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-[var(--text)] transition-all duration-200 ${mobileMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--bg)] pt-24 px-8 flex flex-col"
          >
            <nav className="flex flex-col gap-7" aria-label="Mobile navigation">
              {[
                { href: "#headmaster", label: "Headmaster" },
                { href: "#orchestrator", label: "How It Works" },
                { href: "#memory", label: "Memory" },
                { href: "#tayx", label: "TayX" },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl tracking-tight font-medium hover:text-[var(--text-muted)] transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => scrollTo("waitlist")}
              className="mt-10 w-full py-4 rounded-full bg-[#111111] text-[#F9F7F3] text-lg font-medium"
            >
              Join the waitlist
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Hero ────────────────────────────────────────────────────────── */}
      <section
        data-chapter="top"
        data-label="Start"
        data-theme="dark"
        className="relative h-[100dvh] min-h-[720px] flex items-center justify-center overflow-hidden bg-black"
      >
        <video
          autoPlay muted loop playsInline
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/hero.mp4"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        <div data-hero-copy className="relative z-10 max-w-6xl mx-auto px-8 text-center text-white">
          <h1 className="text-[44px] sm:text-[60px] md:text-[clamp(60px,10vw,132px)] leading-[0.88] tracking-[-3px] md:tracking-[-5px] font-semibold mb-6 drop-shadow-2xl">
            One prompt.
            <br />
            Headmaster handles the rest.
          </h1>
          <p className="text-2xl md:text-[34px] tracking-[-1px] mb-14 text-white/85 drop-shadow-xl max-w-2xl mx-auto leading-tight">
            Research. Code. Emails. Decisions.
            <br />
            Your entire workforce — inside your laptop.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollTo("waitlist")}
              className="px-14 py-4 rounded-full bg-white text-black text-xl font-medium hover:bg-white/90 active:scale-[0.985] transition-all shadow-xl text-center"
              aria-label="Join the Headmaster waitlist"
              data-magnet
            >
              Join the waitlist
            </button>
            <a
              href="#orchestrator"
              className="px-14 py-4 rounded-full border-2 border-white/80 text-xl hover:bg-white/10 transition-all text-center"
            >
              See it in action
            </a>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/50 text-[11px] tracking-[0.24em] uppercase z-10">
          Scroll
        </div>
      </section>

      {/* ─── Stats Bar ───────────────────────────────────────────────────── */}
      <StatsBar />

      {/* ─── Headmaster ──────────────────────────────────────────────────── */}
      <section
        id="headmaster"
        data-chapter="headmaster"
        data-label="Headmaster"
        className="max-w-5xl mx-auto px-8 pt-20 pb-10"
      >
        <div className="max-w-3xl" data-reveal>
          <div className="uppercase tracking-[3px] text-xs mb-4 text-[var(--text-muted)]">THE PRODUCT</div>
          <h2 className="text-[40px] md:text-[64px] tracking-[-2px] md:tracking-[-2.8px] leading-none font-medium mb-8">
            An agent that keeps working
            <br />
            after you close the laptop.
          </h2>
          <p className="text-[22px] text-[var(--text-muted)] leading-snug mb-5">
            Headmaster doesn&apos;t answer questions. It executes outcomes. It plans, delegates to
            specialist agents, tracks progress, and reports back — fully autonomously, from a
            single prompt.
          </p>
          <p className="text-[22px] text-[var(--text-muted)] leading-snug">
            You describe the work. Headmaster builds the team, runs the operation, and hands
            you the result.
          </p>
        </div>
      </section>

      {/* ─── Chatbot Comparison ──────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 pb-20 border-b border-[var(--border)]">
        <div className="mb-8" data-reveal>
          <h3 className="text-[28px] md:text-[38px] tracking-[-1px] md:tracking-[-1.4px] font-medium mb-2">
            This isn&apos;t a smarter chatbot.
          </h3>
          <p className="text-xl text-[var(--text-muted)]">Chatbots talk. Headmaster does.</p>
        </div>
        <ChatbotComparison />
      </section>

      {/* ─── One Prompt Demo ─────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-20 border-b border-[var(--border)]">
        <div className="mb-12" data-reveal>
          <div className="uppercase tracking-[3px] text-xs mb-4 text-[var(--text-muted)]">ONE PROMPT</div>
          <h2 className="text-[34px] md:text-[46px] tracking-[-1.5px] md:tracking-[-1.8px] leading-tight font-medium">
            Type once.
            <br />
            Wake up to results.
          </h2>
        </div>
        <OnePromptDemo />
      </section>

      {/* ─── Orchestrator Hook ───────────────────────────────────────────── */}
      <section
        id="orchestrator"
        data-chapter="how"
        data-label="How it works"
        className="border-y border-[var(--border)] bg-[var(--bg-elevated)] py-16"
      >
        <div className="max-w-5xl mx-auto px-8">
          <div className="text-center mb-10" data-reveal>
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#111111] text-[#F9F7F3] text-xs tracking-[2px] mb-4">
              HOW IT WORKS
            </div>
            <h3 className="text-[34px] md:text-5xl tracking-[-1.5px] md:tracking-[-1.8px] font-medium leading-tight">
              One instruction.
              <br />
              A hundred agents.
              <br />
              Zero overhead.
            </h3>
            <p className="mt-6 text-xl text-[var(--text-muted)] max-w-2xl mx-auto leading-snug">
              Headmaster decomposes your task into subtasks, assigns each to the right
              specialist, verifies the work, and coordinates until completion.
              You never manage the process. You just get the outcome.
            </p>
          </div>
        </div>
      </section>

      {/* ─── How It Actually Works (4-step flow) ─────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-16 border-b border-[var(--border)]">
        <div className="mb-10" data-reveal>
          <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-3">STEP BY STEP</div>
          <h3 className="text-[30px] md:text-[40px] tracking-[-1.2px] md:tracking-[-1.5px] font-medium">
            From one sentence to done.
          </h3>
        </div>
        <HowItWorksFlow />
      </section>

      {/* ─── Orchestrator Demo ───────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-20 border-b border-[var(--border)]">
        <div className="mb-10" data-reveal>
          <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-3">LIVE DEMO</div>
          <h3 className="text-[30px] md:text-[42px] tracking-[-1.2px] md:tracking-[-1.5px] font-medium mb-2">
            Watch Headmaster think.
          </h3>
          <p className="text-[var(--text-muted)] text-[17px]">
            Click a task. Watch how it gets broken down and assigned in real time.
          </p>
        </div>

        <OrchestratorDemo />

        {/* 4 agent monogram cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10" data-reveal-group>
          {[
            { letter: "A", name: "ANALYST",  role: "Searches, gathers, and structures information." },
            { letter: "W", name: "WRITER",   role: "Drafts and edits with the right context and voice." },
            { letter: "V", name: "VERIFIER", role: "Cross-checks every fact and figure before it reaches you." },
            { letter: "C", name: "COMPILER", role: "Assembles all outputs into a clean, finished deliverable." },
          ].map((agent, i) => (
            <div
              key={i}
              data-reveal-item
              className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-3xl p-6"
            >
              <div
                className="w-14 h-14 rounded-xl bg-[#111111] flex items-center justify-center text-[#F9F7F3] text-[24px] font-bold mb-4"
                aria-hidden="true"
              >
                {agent.letter}
              </div>
              <div className="font-medium text-base tracking-tight mb-1.5">{agent.name}</div>
              <p className="text-[var(--text-muted)] text-xs leading-relaxed">{agent.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Specialist Fleet ────────────────────────────────────────────── */}
      <section
        id="fleet"
        data-chapter="fleet"
        data-label="Specialists"
        className="max-w-5xl mx-auto px-8 py-20 border-b border-[var(--border)]"
      >
        <div className="mb-10" data-reveal>
          <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-3">THE SPECIALISTS</div>
          <h3 className="text-[30px] md:text-[40px] tracking-[-1.2px] md:tracking-[-1.5px] font-medium mb-3">
            Every role, covered.
          </h3>
          <p className="text-[var(--text-muted)] text-[17px] max-w-xl">
            Headmaster deploys the right specialist for every part of the work.
            They&apos;re always available, always ready, and always coordinated.
          </p>
        </div>
        <SpecialistFleet />
      </section>

      {/* ─── Agency Orchestration ────────────────────────────────────────── */}
      <section
        data-chapter="agency"
        data-label="In action"
        className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-20"
      >
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-10" data-reveal>
            <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-3">AGENCY ORCHESTRATION</div>
            <h3 className="text-[30px] md:text-[40px] tracking-[-1.2px] md:tracking-[-1.5px] font-medium mb-3">
              Five departments.
              <br />
              One prompt.
            </h3>
            <p className="text-[var(--text-muted)] text-[17px] max-w-xl">
              Watch Headmaster spin up a full cross-functional operation from a single instruction.
            </p>
          </div>
          <AgencyOrchestration />
        </div>
      </section>

      {/* ─── Capabilities Grid ───────────────────────────────────────────── */}
      <section
        data-chapter="capabilities"
        data-label="Capabilities"
        className="max-w-5xl mx-auto px-8 py-20 border-b border-[var(--border)]"
      >
        <div className="mb-10" data-reveal>
          <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-3">WHAT IT CAN DO</div>
          <h3 className="text-[30px] md:text-[40px] tracking-[-1.2px] md:tracking-[-1.5px] font-medium mb-3">
            Real capabilities.
          </h3>
          <p className="text-[var(--text-muted)] text-[17px] max-w-xl">
            Click any card to see how it works in practice.
          </p>
        </div>
        <CapabilitiesGrid />
      </section>

      {/* ─── Real Use Cases ──────────────────────────────────────────────── */}
      <section
        data-chapter="usecases"
        data-label="Real work"
        className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-20"
      >
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-10" data-reveal>
            <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-3">REAL WORK</div>
            <h3 className="text-[30px] md:text-[40px] tracking-[-1.2px] md:tracking-[-1.5px] font-medium">
              Built for real work.
            </h3>
          </div>
          <UseCases />
        </div>
      </section>

      {/* ─── Memory ──────────────────────────────────────────────────────── */}
      <section
        id="memory"
        data-chapter="memory"
        data-label="Memory"
        className="bg-[var(--bg)] border-y border-[var(--border)] py-20"
      >
        <div className="max-w-4xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-start">
          <div data-reveal>
            <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-4">PERSISTENT MEMORY</div>
            <h3 className="text-[36px] md:text-[52px] tracking-[-1.5px] md:tracking-[-2px] font-medium mb-6 leading-none">
              Headmaster remembers
              <br />
              everything.
            </h3>
            <p className="text-[21px] text-[var(--text-muted)] leading-snug mb-6">
              Not just this session. Last week. Last month. Three projects ago. Headmaster builds
              a living memory of your work, your preferences, and your decisions — and uses it
              every time.
            </p>
            <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-2xl p-6 mb-5">
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-3">
                In practice: tell Headmaster your reporting format once, and it uses that format
                every term. Mention a student needs extra support, and it remembers next time.
                It builds a working memory of how <em>you</em> work — so you&apos;re never starting
                from zero.
              </p>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">
                Your memory stays yours. It works across Headmaster and the tools you already use,
                and you control what it keeps.
              </p>
            </div>
            <div className="text-sm text-[var(--text-muted)]">
              Works with Claude, GPT-4, Gemini, Kimi Code, and 20+ other providers.
            </div>
          </div>
          <div className="md:pt-16" data-reveal>
            <MemoryViz />
          </div>
        </div>
      </section>

      {/* ─── Focus ───────────────────────────────────────────────────────── */}
      <section
        id="focus"
        className="max-w-5xl mx-auto px-8 py-20 border-b border-[var(--border)]"
      >
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div data-reveal>
            <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-3">INTELLIGENT CONTEXT</div>
            <h3 className="text-[32px] md:text-[44px] tracking-[-1.2px] md:tracking-[-1.6px] font-medium mb-5 leading-none">
              Stays sharp.
              <br />
              No matter how complex the work.
            </h3>
            <p className="text-[21px] text-[var(--text-muted)] leading-snug mb-6">
              Long outputs, deep logs, sprawling context — Headmaster compresses what doesn&apos;t
              matter and surfaces what does. The orchestrator never loses the thread.
            </p>
            <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-2xl p-6">
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-3">
                Real work is messy — long documents, scattered data, dozens of sources. Headmaster
                reads all of it, holds onto what matters for your task, and quietly sets aside the
                noise. On a 200-page data dump or a 3-week project thread, it doesn&apos;t lose
                the plot.
              </p>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">
                The result: the orchestrator stays accurate even when the work gets big.
              </p>
            </div>
          </div>
          <div className="md:pt-16" data-reveal>
            <FocusAnimation />
          </div>
        </div>
      </section>

      {/* ─── TayX ────────────────────────────────────────────────────────── */}
      <TayX onWaitlist={() => scrollTo("waitlist")} />

      {/* ─── Company ─────────────────────────────────────────────────────── */}
      <section className="border-y border-[var(--border)] py-16 bg-[var(--bg-elevated)]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-2xl" data-reveal>
            <div className="text-sm tracking-[2px] text-[var(--text-muted)] mb-3">THE COMPANY</div>
            <h3 className="text-[34px] md:text-5xl tracking-[-1.4px] md:tracking-[-1.8px] font-medium mb-6 leading-tight">
              We build agents
              <br />
              you can actually trust.
            </h3>
            <p className="text-[20px] text-[var(--text-muted)] leading-snug">
              GCAP Labs makes infrastructure for AI agents that do real work.
              Not demos. Not prototypes.
              Production-grade autonomy for the things that matter.
            </p>
          </div>
        </div>
      </section>

      {/* ─── While You Were Away ─────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-20 border-b border-[var(--border)]">
        <div className="text-center mb-12" data-reveal>
          <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-3">THE PROMISE</div>
          <h3 className="text-[34px] md:text-[48px] tracking-[-1.4px] md:tracking-[-1.8px] font-medium">
            While you were away.
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-3xl p-9" data-reveal>
            <div className="text-2xl tracking-tight font-medium mb-5 leading-snug">
              You closed your laptop at 6pm
              with three complex tasks unfinished.
            </div>
            <p className="text-[var(--text-muted)] leading-relaxed mb-5">
              By 8am, they were done. Summarised. Waiting in your inbox. With sources,
              next actions, and zero loose ends.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed">
              You didn&apos;t manage it. You didn&apos;t babysit it.
              You just asked — and Headmaster handled it.
            </p>
          </div>
          <div className="flex flex-col justify-center" data-reveal>
            <NotificationCard />
          </div>
        </div>
      </section>

      {/* ─── Works With ──────────────────────────────────────────────────── */}
      <WorksWith />

      {/* ─── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-8 py-20 border-t border-[var(--border)]">
        <div className="mb-12" data-reveal>
          <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-3">FAQ</div>
          <h3 className="text-[30px] md:text-[40px] tracking-[-1.2px] md:tracking-[-1.5px] font-medium">
            The honest answers.
          </h3>
        </div>
        <FAQ />
      </section>

      {/* ─── Waitlist ────────────────────────────────────────────────────── */}
      <section
        id="waitlist"
        data-chapter="waitlist"
        data-label="Join"
        className="max-w-2xl mx-auto px-8 py-20 border-t border-[var(--border)]"
      >
        <div className="text-center mb-10" data-reveal>
          <h3 className="text-[30px] md:text-[42px] tracking-[-1.2px] md:tracking-[-1.5px] font-medium mb-4 leading-tight">
            You shouldn&apos;t need a team
            <br />
            to get team-level work done.
          </h3>
          <p className="text-[var(--text-muted)] text-lg">
            Headmaster is in early access.
            <br />
            Limited spots. We review every application.
          </p>
        </div>

        {!submitted ? (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text" name="name" placeholder="Full name"
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-6 py-4 text-lg placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#111111]/40 transition-colors"
                required
              />
              <input
                type="email" name="email" placeholder="Work email"
                className="w-full rounded-2xl border border-[var(--border)] bg-white px-6 py-4 text-lg placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#111111]/40 transition-colors"
                required
              />
            </div>
            <input
              type="text" name="company" placeholder="School, company, or team"
              className="w-full rounded-2xl border border-[var(--border)] bg-white px-6 py-4 text-lg placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#111111]/40 transition-colors"
            />
            <textarea
              name="message" placeholder="What are you hoping to achieve with autonomous agents?"
              rows={4}
              className="w-full rounded-3xl border border-[var(--border)] bg-white px-6 py-4 text-lg placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[#111111]/40 transition-colors resize-y"
              required
            />
            <button
              type="submit"
              data-magnet
              className="w-full mt-2 py-4 rounded-2xl bg-[#111111] text-[#F9F7F3] text-lg font-medium hover:bg-black transition-all"
              aria-label="Join the Headmaster waitlist"
            >
              Join the waitlist →
            </button>
          </form>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <span className="text-green-600 text-3xl" aria-hidden="true">✓</span>
            </div>
            <h4 className="text-3xl tracking-tight font-medium mb-3">Application received.</h4>
            <p className="text-[var(--text-muted)] max-w-md mx-auto">
              Thank you. Our team will review your application and reach out within 48 hours
              if there&apos;s a fit for this cohort.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 text-sm underline text-[var(--text-muted)] hover:text-[#111111]"
            >
              Submit another application
            </button>
          </div>
        )}

        <p className="text-center text-xs text-[var(--text-muted)] mt-6 tracking-tight">
          We review every application personally.
        </p>
      </section>

      {/* ─── Footer ──────────────────────────────────────────────────────── */}
      <footer className="border-t border-[var(--border)] py-9 text-xs text-[var(--text-muted)] px-8 flex flex-col md:flex-row gap-y-2 md:items-center justify-between max-w-6xl mx-auto">
        <div>© {new Date().getFullYear()} GCAP Labs.</div>
        <div className="flex gap-6 flex-wrap">
          <a href="https://x.com/gcaplabs" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors" aria-label="GCAP Labs on X (Twitter)">X</a>
          <a href="https://linkedin.com/company/gcaplabs" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] transition-colors" aria-label="GCAP Labs on LinkedIn">LinkedIn</a>
          <a href="/privacy" className="hover:text-[#111111] transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-[#111111] transition-colors">Terms</a>
        </div>
      </footer>

    </div>
  );
}
