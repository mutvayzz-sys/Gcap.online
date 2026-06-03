"use client";

import { motion } from "framer-motion";

const SPECIALISTS = [
  {
    letter: "R",
    name: "Researcher",
    description: "Searches the web, reads documents, and structures information from any source.",
    color: "#1e3a5f",
  },
  {
    letter: "A",
    name: "Analyst",
    description: "Finds patterns, extracts insights, and turns raw data into structured findings.",
    color: "#1a3a2a",
  },
  {
    letter: "W",
    name: "Writer",
    description: "Drafts, edits, and formats documents with the right tone for any audience.",
    color: "#3a1a1a",
  },
  {
    letter: "V",
    name: "Verifier",
    description: "Cross-checks every fact and figure against original sources before delivery.",
    color: "#2a1a3a",
  },
  {
    letter: "C",
    name: "Compiler",
    description: "Assembles all outputs into a single clean, finished deliverable.",
    color: "#1a2a3a",
  },
  {
    letter: "E",
    name: "Engineer",
    description: "Writes, reviews, and debugs code across languages and frameworks.",
    color: "#1a3a1a",
  },
  {
    letter: "P",
    name: "Planner",
    description: "Sequences tasks, manages dependencies, and coordinates agent handoffs.",
    color: "#3a2a1a",
  },
  {
    letter: "M",
    name: "Messenger",
    description: "Drafts emails, messages, and outreach — matched to the right person and context.",
    color: "#1a1a3a",
  },
];

export default function SpecialistFleet() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {SPECIALISTS.map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.09, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-2xl p-6 flex flex-col"
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-[20px] font-bold text-white mb-4 flex-shrink-0"
            style={{ background: s.color }}
            aria-hidden="true"
          >
            {s.letter}
          </div>
          <div className="text-[13px] font-semibold tracking-tight mb-1.5 text-[var(--text)]">
            {s.name}
          </div>
          <p className="text-[13px] text-[var(--text-muted)] leading-relaxed flex-1">
            {s.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
