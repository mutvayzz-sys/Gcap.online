const rows = [
  { basic: "Answers a question", headmaster: "Completes the operational workflow" },
  { basic: "Starts over next session", headmaster: "Remembers across weeks and projects" },
  { basic: "One model, one thread", headmaster: "A coordinated team of specialists" },
  { basic: "Explains the steps", headmaster: "Runs the steps through approved tools" },
  { basic: "Waits for the next message", headmaster: "Keeps scheduled work moving" },
  { basic: "Produces a draft", headmaster: "Prepares reviewed work products" },
  { basic: "Limited to one conversation window", headmaster: "Persists organizational memory" },
  { basic: "You manage the process", headmaster: "Headmaster coordinates the workflow" },
];

export default function ChatbotComparison() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="card p-7">
        <div className="text-[11px] tracking-[2px] text-[var(--text-muted)] uppercase">Basic AI interface</div>
        <div className="mt-5 space-y-3">
          {rows.map((row) => (
            <div key={row.basic} className="text-[15px] text-[var(--text-muted)] leading-snug">{row.basic}</div>
          ))}
        </div>
      </div>
      <div className="card-dark p-7">
        <div className="text-[11px] tracking-[2px] text-white/50 uppercase">Headmaster</div>
        <div className="mt-5 space-y-3">
          {rows.map((row) => (
            <div key={row.headmaster} className="text-[15px] text-white leading-snug">{row.headmaster}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
