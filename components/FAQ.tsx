"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const QAS = [
  {
    q: "How is this different from ChatGPT or Claude?",
    a: "Those answer questions in a chat. Headmaster completes tasks. It plans the work, delegates to specialist agents, connects to your approved tools, and hands you a finished outcome. It also remembers context across sessions and keeps workflows running on schedule.",
  },
  {
    q: "What is the difference between Headmaster and TayX?",
    a: "Headmaster is the AI workforce layer — the product that plans, delegates, and completes work inside your organization. TayX is GCAP's own model layer, trained and fine-tuned for agentic work. Headmaster can use TayX or other models depending on the task.",
  },
  {
    q: "Is my data safe?",
    a: "Each organization gets its own private workspace with separate memory, files, and configuration. You control what Headmaster can access and what it remembers. Sensitive actions pause for human approval before anything is sent. Full security details are shared with early-access members.",
  },
  {
    q: "Do I need to be technical to use it?",
    a: "No. You describe what you want in plain English. Headmaster handles the coordination, delegation, and tool usage under the hood. You review the plan, approve the output, and get the result.",
  },
  {
    q: "Is this real, or just a demo?",
    a: "Headmaster is real and in early access today. Persistent memory, specialist agents, scheduled work, and approval gates are working now.",
  },
  {
    q: "Which AI models does Headmaster use?",
    a: "Headmaster is model-agnostic. It can work with cloud models, local models, coding models, enterprise endpoints, custom endpoints, or GCAP's own TayX model layer. It routes work to the engine that fits the task, and you are not locked to a single provider.",
  },
  {
    q: "What can it actually do?",
    a: "Research, writing, data compilation, reports, email drafting, document work, scheduled summaries, meeting briefs, and more — coordinated across a whole task and delivered for your approval.",
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
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
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
