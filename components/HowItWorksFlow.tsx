"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    label: "Understands the Work",
    body: "Reads the task, context, documents, and available tools.",
  },
  {
    num: "02",
    label: "Finds the Right Process",
    body: "Uses memory and skills to recall how similar work was done before.",
  },
  {
    num: "03",
    label: "Delegates Where Needed",
    body: "Specialist agents handle research, writing, code, reporting, analysis, or admin work.",
  },
  {
    num: "04",
    label: "Uses Real Tools",
    body: "Connects to approved systems, files, APIs, browsers, and communication channels.",
  },
  {
    num: "05",
    label: "Checks and Prepares Output",
    body: "Produces a draft, report, update, plan, message, or completed workflow.",
  },
  {
    num: "06",
    label: "Waits for Approval",
    body: "Sensitive actions pause for review before anything is sent, changed, or published.",
  },
];

export default function HowItWorksFlow() {
  return (
    <div>
      <div className="grid md:grid-cols-6 gap-4">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-[var(--bg-elevated)] border border-[var(--border)] rounded-2xl p-6 flex flex-col md:min-h-[245px]"
          >
            {i < STEPS.length - 1 && (
              <div className="hidden md:block absolute top-10 -right-3 w-6 h-px bg-[var(--border-strong)]" aria-hidden="true" />
            )}
            <div className="text-[34px] font-semibold tracking-[-2px] text-[var(--border)] leading-none mb-4">
              {step.num}
            </div>
            <div className="text-[12px] tracking-[-0.2px] font-medium text-[var(--text)] mb-3 leading-tight">
              {step.label}
            </div>
            <p className="text-[14px] text-[var(--text-muted)] leading-relaxed flex-1">
              {step.body}
            </p>
          </motion.div>
        ))}
      </div>
      <p className="text-[15px] text-[var(--text-muted)] mt-7 max-w-3xl leading-relaxed">
        Work can start from a prompt, a button, a recurring schedule, or a message from your team. Low-risk work can run quietly; sensitive steps wait for review.
      </p>
    </div>
  );
}
