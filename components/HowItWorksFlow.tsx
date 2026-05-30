"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    label: "YOU ASK",
    quote: '"Prepare progress reports for Grade 8."',
    body: "One sentence. Plain English. No setup, no config.",
  },
  {
    num: "02",
    label: "HEADMASTER PLANS",
    body: "It breaks your request into a real plan — pulls the subjects, identifies what each report needs, decides the order of work. You see the plan before anything runs.",
  },
  {
    num: "03",
    label: "THE SPECIALISTS WORK",
    body: "Specialist agents work in parallel — one gathers the grades, one writes personalised comments, one cross-checks every figure against source. They hand work to each other automatically.",
  },
  {
    num: "04",
    label: "YOU GET THE OUTCOME",
    body: "A finished, verified set of reports. Not a draft. Not a “here’s how you could do it.” The actual deliverable, done.",
  },
];

export default function HowItWorksFlow() {
  return (
    <div>
      <div className="grid md:grid-cols-4 gap-4">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.13, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-2xl p-7 flex flex-col"
          >
            <div className="text-[42px] font-semibold tracking-[-2px] text-[var(--border)] leading-none mb-4">
              {step.num}
            </div>
            <div className="text-[10px] tracking-[2px] text-[var(--text-muted)] uppercase mb-3">
              {step.label}
            </div>
            {step.quote && (
              <div className="text-[15px] font-medium text-[var(--text)] bg-[var(--bg)] rounded-xl px-4 py-3 mb-3 leading-snug tracking-tight">
                {step.quote}
              </div>
            )}
            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed flex-1">
              {step.body}
            </p>
          </motion.div>
        ))}
      </div>
      <p className="text-[15px] text-[var(--text-muted)] mt-6 max-w-2xl leading-relaxed">
        You stay in control the whole time. Approve the plan, watch it work, or walk away
        and come back to it finished.
      </p>
    </div>
  );
}
