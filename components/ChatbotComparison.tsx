import { motion } from "framer-motion";

const ROWS = [
  { chatbot: "Answers your question", headmaster: "Completes the actual task" },
  { chatbot: "Forgets when you close the tab", headmaster: "Remembers across weeks and projects" },
  { chatbot: "One model, one thread", headmaster: "A coordinated team of specialists" },
  { chatbot: "Tells you the steps", headmaster: "Does the steps" },
  { chatbot: "Waits for your next message", headmaster: "Keeps working while you’re away" },
  { chatbot: "Gives you a draft", headmaster: "Hands you a finished result" },
  { chatbot: "Limited to your conversation window", headmaster: "Persists memory across weeks and projects" },
  { chatbot: "Works with 1 AI model", headmaster: "Orchestrates 20+ AI providers simultaneously" },
  { chatbot: "You manage the process", headmaster: "Headmaster manages it for you" },
];

export default function ChatbotComparison() {
  return (
    <div>
      {/* Column headers */}
      <div className="grid grid-cols-2 gap-4 mb-3 px-1">
        <div className="text-[11px] tracking-[2px] text-[var(--text-muted)] uppercase">A chatbot</div>
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
            <div className="text-[15px] text-[var(--text-muted)] leading-snug">{row.chatbot}</div>
            <div className="text-[15px] text-[var(--text)] font-medium leading-snug">{row.headmaster}</div>
          </motion.div>
        ))}
      </div>

      <p className="mt-6 text-[16px] text-[var(--text-muted)] leading-relaxed max-w-3xl">
        Ask a chatbot to &ldquo;prepare progress reports&rdquo; and it gives you a template and some
        advice. Ask Headmaster, and it gathers the data, writes each report, checks the
        numbers, and puts the finished file in your hands. The difference is the difference
        between being told how to do the work and having the work done.
      </p>
    </div>
  );
}
