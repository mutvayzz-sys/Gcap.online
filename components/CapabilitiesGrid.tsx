"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CAPABILITIES = [
  {
    title: "Deep Research",
    summary: "Multi-step research across sources",
    detail: "Headmaster searches the web, reads documents, and synthesises findings across dozens of sources — in parallel, overnight, with citations. Not just a summary: a fully verified brief.",
  },
  {
    title: "Report Writing",
    summary: "Structured, verified documents",
    detail: "From student progress reports to executive briefings, Headmaster drafts each report with the right structure, checks every figure, and hands you a finished document — not a template.",
  },
  {
    title: "Email Drafting",
    summary: "Context-aware correspondence",
    detail: "Headmaster reads the thread, understands the relationship, and drafts the right reply — in your voice, at the right level of formality. Batch or single, it handles the queue.",
  },
  {
    title: "Data Compilation",
    summary: "Gathering and structuring data at scale",
    detail: "Feed Headmaster raw data from any source. It structures, cross-references, validates, and outputs a clean dataset or summary — with every discrepancy flagged for your review.",
  },
  {
    title: "Code Review & Debugging",
    summary: "Technical work across languages",
    detail: "Headmaster reads your code, identifies issues, writes fixes, and explains the reasoning. It works across Python, TypeScript, SQL, and more — and remembers your codebase structure.",
  },
  {
    title: "Document Analysis",
    summary: "Extract meaning from long documents",
    detail: "Upload contracts, research papers, policy documents, or entire books. Headmaster reads every page, extracts what matters for your specific question, and returns a structured answer.",
  },
  {
    title: "Web Automation",
    summary: "Browser tasks done autonomously",
    detail: "Form fills, data collection, account actions, web scraping — Headmaster operates a real browser and completes multi-step web tasks without supervision.",
  },
  {
    title: "Meeting Preparation",
    summary: "Briefs, agendas, and pre-reads",
    detail: "Give Headmaster the meeting context. It researches attendees, summarises relevant history, drafts an agenda, and prepares talking points — before you open the calendar invite.",
  },
  {
    title: "Multi-step Planning",
    summary: "Complex projects decomposed",
    detail: "Headmaster turns a high-level goal into a structured plan: phases, dependencies, assigned specialists, and checkpoints. It runs the plan, adapts when needed, and reports on progress.",
  },
  {
    title: "Long-form Content",
    summary: "Articles, proposals, and guides",
    detail: "Blog posts, grant applications, business proposals, instructional guides — Headmaster researches, outlines, drafts, and refines long-form content with consistent voice and verified facts.",
  },
  {
    title: "Multi-agent Coordination",
    summary: "Orchestrating parallel workstreams",
    detail: "The most complex tasks run multiple specialists at once — research happening while writing starts, verification running as compilation begins. Headmaster manages the dependencies automatically.",
  },
];

export default function CapabilitiesGrid() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {CAPABILITIES.map((cap, i) => (
        <motion.div
          key={cap.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            className={`w-full text-left rounded-2xl border transition-all duration-200 p-5 ${
              expanded === i
                ? "border-[#111111] bg-[#111111] text-[#F9F7F3]"
                : "border-[var(--border)] bg-[var(--bg-elevated)] hover:border-[#111111]/30"
            }`}
            onClick={() => setExpanded(expanded === i ? null : i)}
            aria-expanded={expanded === i}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className={`font-medium tracking-tight text-[15px] mb-1 ${expanded === i ? "text-[#F9F7F3]" : "text-[var(--text)]"}`}>
                  {cap.title}
                </div>
                <div className={`text-[13px] ${expanded === i ? "text-white/50" : "text-[var(--text-muted)]"}`}>
                  {cap.summary}
                </div>
              </div>
              <span
                className={`text-[var(--text-muted)] mt-0.5 flex-shrink-0 transition-transform duration-200 ${
                  expanded === i ? "rotate-45 text-white/50" : ""
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </div>
            <AnimatePresence initial={false}>
              {expanded === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-[13px] text-white/65 leading-relaxed mt-4 pt-4 border-t border-white/10">
                    {cap.detail}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      ))}
    </div>
  );
}
