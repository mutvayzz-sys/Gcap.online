"use client";

import { motion } from "framer-motion";

const EASE = [0.23, 1, 0.32, 1] as const;

const betaQuotes = [
  {
    quote:
      "The biggest unlock was continuity. Headmaster remembered the decisions from the prior run and picked up the workflow without us restating the whole brief.",
    person: "Beta operations lead",
    context: "Multi-step reporting pilot",
  },
  {
    quote:
      "The approval pause changed how we trusted the agent. It could keep preparing the work, but anything client-facing still waited for a human review.",
    person: "Beta agency founder",
    context: "Client communications pilot",
  },
  {
    quote:
      "We stopped treating it like a chatbot and started treating it like an always-on teammate with a checklist and memory.",
    person: "Beta school administrator",
    context: "Internal admin workflow pilot",
  },
];

const feedbackSignals = [
  "Memory continuity reduced repeated setup context",
  "Approval gates made unattended work easier to review",
  "Cross-channel access mattered more than another dashboard",
];

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      aria-labelledby="social-proof-title"
      className="relative py-16 md:py-20 border-t border-[var(--border)]"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.26em] text-[var(--text-muted)]">
              Early access feedback
            </p>
            <h2 id="social-proof-title" className="text-[36px] md:text-[52px] tracking-[-1.4px] md:tracking-[-2.2px] font-medium leading-[1.05] text-[var(--text)]">
              What early testers actually told us.
            </h2>
            <p className="mt-5 text-[18px] leading-relaxed text-[var(--text-muted)]">
              No placeholder logos or borrowed enterprise claims — just anonymized feedback from current beta conversations.
            </p>
          </div>

          <div className="grid gap-4">
            {betaQuotes.map((item, i) => (
              <motion.blockquote
                key={item.quote}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                viewport={{ once: true, margin: "-80px" }}
                className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 md:p-7"
              >
                <p className="mb-5 text-[17px] leading-relaxed tracking-[-0.2px] text-[var(--text)]">
                  “{item.quote}”
                </p>
                <footer className="flex flex-col gap-1 border-t border-[var(--border)] pt-4">
                  <cite className="not-italic font-medium text-[15px] text-[var(--text)]">{item.person}</cite>
                  <span className="text-[13px] text-[var(--text-muted)]">{item.context}</span>
                </footer>
              </motion.blockquote>
            ))}

            <div className="rounded-3xl border border-[var(--border-strong)] bg-[#111111] p-6 text-[#F9F7F3]">
              <h3 className="mb-4 text-[15px] font-medium tracking-tight">Repeated beta feedback themes</h3>
              <ul className="grid gap-3 text-[14px] text-white/70 md:grid-cols-3" role="list">
                {feedbackSignals.map((signal) => (
                  <li key={signal} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    {signal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
