import { motion } from "framer-motion";

const ROWS = [
  { interfaceOnly: "Answers a question", headmaster: "Completes the actual task" },
  { interfaceOnly: "Loses context when the tab closes", headmaster: "Remembers across weeks and projects" },
  { interfaceOnly: "One model, one thread", headmaster: "A coordinated team of specialists" },
  { interfaceOnly: "Lists the steps", headmaster: "Does the steps through approved tools" },
  { interfaceOnly: "Waits for the next message", headmaster: "Keeps scheduled work moving" },
  { interfaceOnly: "Gives a draft", headmaster: "Prepares a reviewed result" },
  { interfaceOnly: "Limited to a conversation window", headmaster: "Persists memory across workspaces" },
  { interfaceOnly: "Works with one AI model", headmaster: "Coordinates models, tools, and gateways" },
  { interfaceOnly: "You manage the process", headmaster: "Headmaster manages the workflow" },
];

export default function InterfaceComparison() {
  return (
    <div>
      {/* Column headers */}
      <div className="grid grid-cols-2 gap-4 mb-3 px-1">
        <div className="text-[11px] tracking-[2px] text-[var(--text-muted)] uppercase">Interface only</div>
        <div className="text-[11px] tracking-[2px] text-[#111111] uppercase font-medium">Headmaster</div>
      </div>

      <div className="rounded-2xl border border-[var(--border)] overflow-hidden">
        {ROWS.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`grid grid-cols-2 gap-4 px-6 py-4 ${
              i % 2 === 0 ? "bg-[var(--bg-elevated)]" : "bg-[var(--bg)]"
            } ${i < ROWS.length - 1 ? "border-b border-[var(--border)]" : ""}`}
          >
            <div className="text-[15px] text-[var(--text-muted)] leading-snug">{row.interfaceOnly}</div>
            <div className="text-[15px] text-[var(--text)] font-medium leading-snug">{row.headmaster}</div>
          </motion.div>
        ))}
      </div>

      <p className="mt-6 text-[16px] text-[var(--text-muted)] leading-relaxed max-w-3xl">
        A simple interface can draft a template. Headmaster can gather approved data, write each report, check the numbers, prepare the finished file, and hold sensitive actions for review.
      </p>
    </div>
  );
}
