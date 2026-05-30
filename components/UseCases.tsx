import { motion } from "framer-motion";

function ReportCardMockup() {
  return (
    <div className="bg-[#0D0D0D] rounded-2xl border border-white/10 p-6 font-mono text-xs">
      <div className="text-white/30 mb-4 text-[10px] tracking-[2px] uppercase">
        Grade 8 — Term 2 Report
      </div>
      {[
        { name: "J. Nakamura", math: "A", sci: "B+", eng: "A−", hist: "B" },
        { name: "M. Osei",     math: "B+", sci: "A",  eng: "B",  hist: "A−" },
        { name: "S. Torres",  math: "A−", sci: "B",  eng: "A",  hist: "B+" },
        { name: "P. Mensah",  math: "B",  sci: "A−", eng: "B+", hist: "A" },
      ].map((s, i) => (
        <div
          key={i}
          className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0"
        >
          <span className="text-white/50 flex-1">{s.name}</span>
          <span className="text-green-400 w-7 text-center">{s.math}</span>
          <span className="text-blue-400 w-7 text-center">{s.sci}</span>
          <span className="text-yellow-400 w-7 text-center">{s.eng}</span>
          <span className="text-purple-400 w-7 text-center">{s.hist}</span>
        </div>
      ))}
      <div className="mt-4 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-white/25 text-[10px]">Headmaster · writing report comments...</span>
      </div>
    </div>
  );
}

function BusinessMockup() {
  const items = [
    { label: "Client report — Acme Co.", done: true },
    { label: "Onboarding checklist — new hire", done: true },
    { label: "Invoice follow-up queue", done: true },
    { label: "Monthly performance summary", done: false },
  ];
  return (
    <div className="bg-[#0D0D0D] rounded-2xl border border-white/10 p-6 font-mono text-xs">
      <div className="text-white/30 mb-4 text-[10px] tracking-[2px] uppercase">
        Weekly Ops — Auto
      </div>
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0"
        >
          <span className={item.done ? "text-green-400" : "text-white/20"}>
            {item.done ? "✓" : "○"}
          </span>
          <span className={item.done ? "text-white/55" : "text-white/20"}>
            {item.label}
          </span>
        </div>
      ))}
      <div className="mt-4 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
        <span className="text-white/25 text-[10px]">Headmaster · 1 task running...</span>
      </div>
    </div>
  );
}

const CASES = [
  {
    tag: "FOR SCHOOLS",
    headline: "End-of-term reports,\ndone in an afternoon.",
    body: [
      "Compiling progress reports means pulling grades from every subject, writing personalised comments for each student, and checking every figure — for an entire grade. It's the kind of work that eats whole weekends.",
      "Headmaster handles the whole chain: it gathers results across Math, Science, English and History, drafts a comment for each student based on their actual performance, verifies every grade against the source, and assembles clean, consistent reports ready to send home.",
      "Administrators already report AI cutting report-compilation time from 10+ hours of manual work to a fraction of that.",
      "What used to take a week now takes an afternoon.",
    ],
    footnote: "¹ LogicBalls / Panorama Education, 2025 — AI automating report generation and qualitative feedback compilation for K-12 administrators.",
    visual: <ReportCardMockup />,
    citationIdx: 2,
  },
  {
    tag: "FOR SMALL BUSINESS",
    headline: "Client reports, onboarding,\nand ops — handled.",
    body: [
      "Running a small business means doing the work AND all the admin around it. Client reports, new-hire onboarding, chasing data across tools — it never ends, and it's never the reason you started the business.",
      "Headmaster takes the repetitive operational load: it compiles client reports from your data, runs new-employee onboarding steps end to end, and keeps the routine work moving without you managing it.",
      "In 2025, 68% of small businesses report using AI regularly² — and businesses using AI agents report cutting time on repetitive tasks dramatically while staying lean.³",
      "You hired yourself to run the business. Let Headmaster run the busywork.",
    ],
    footnotes: [
      "² Intuit QuickBooks Small Business Insights, 2025.",
      "³ Aisera / Deloitte AI surveys, 2025 — agentic automation improving task efficiency ~35–40%.",
    ],
    visual: <BusinessMockup />,
    citationIdx: -1,
  },
] as const;

export default function UseCases() {
  return (
    <div className="space-y-6">
      {CASES.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-3xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Copy */}
            <div className="p-9 md:p-10">
              <div className="text-[10px] tracking-[2px] text-[var(--text-muted)] uppercase mb-4">
                {c.tag}
              </div>
              <h4 className="text-[28px] md:text-[32px] font-medium tracking-tight leading-tight mb-6 whitespace-pre-line">
                {c.headline}
              </h4>
              <div className="space-y-4">
                {c.body.map((para, j) => (
                  <p key={j} className="text-[15px] text-[var(--text-muted)] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
              {/* Footnotes */}
              <div className="mt-6 space-y-1">
                {"footnote" in c && (
                  <p className="text-[11px] text-[var(--text-muted)]/60 leading-relaxed">
                    {c.footnote}
                  </p>
                )}
                {"footnotes" in c &&
                  c.footnotes.map((fn, k) => (
                    <p key={k} className="text-[11px] text-[var(--text-muted)]/60 leading-relaxed">
                      {fn}
                    </p>
                  ))}
              </div>
            </div>
            {/* Visual */}
            <div className="bg-[#0a0a0a] p-9 md:p-10 flex items-center justify-center">
              <div className="w-full max-w-sm">{c.visual}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
