"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QAS = [
  {
    q: "How is this different from ChatGPT or Claude?",
    a: "Those answer questions in a chat. Headmaster completes tasks. It plans the work, runs a team of specialist agents, checks the results, and hands you a finished outcome — and it keeps going after you close the laptop.",
  },
  {
    q: "Is my data safe?",
    a: "You control what Headmaster can access and what it remembers. It works with the tools you already use, with permission controls on what each agent can touch. Full security details are shared with early-access members.",
  },
  {
    q: "Do I need to be technical to use it?",
    a: "No. You describe what you want in plain English. The technical coordination happens under the hood — you just approve the plan and get the result.",
  },
  {
    q: "Is this real, or just a demo?",
    a: "Headmaster is real and in early access today. Specialist agents, persistent memory, and autonomous execution are working now — that’s what the waitlist is for.",
  },
  {
    q: "What can it actually do?",
    a: "Research, writing, data compilation, reports, email drafting, document work, web tasks, and more — coordinated across a whole task, not one step at a time.",
  },
  {
    q: "What does it cost?",
    a: "Pricing is being finalised for launch. Early-access members get first access and founding-member terms.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto">
      {QAS.map((item, i) => (
        <div
          key={i}
          className={`border-b border-[var(--border)] ${i === 0 ? "border-t" : ""}`}
        >
          <button
            className="w-full text-left py-5 flex items-start justify-between gap-6 group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="text-[17px] font-medium tracking-tight leading-snug group-hover:text-[var(--text-muted)] transition-colors">
              {item.q}
            </span>
            <span
              className={`text-[var(--text-muted)] mt-0.5 flex-shrink-0 transition-transform duration-200 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-[16px] text-[var(--text-muted)] leading-relaxed pb-5 pr-8">
                  {item.a}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
