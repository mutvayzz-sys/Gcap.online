import { CheckCircle2, Clock, FileText, BarChart3, Mail, ShieldCheck } from "lucide-react";

const outcomes = [
  {
    icon: FileText,
    type: "Report",
    title: "Q3 Client Operations Summary",
    detail: "6 accounts covered · KPIs compiled · Action items extracted",
    status: "Approved",
    time: "12 min",
    accent: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: BarChart3,
    type: "Analysis",
    title: "Campaign Performance vs Benchmark",
    detail: "3 campaigns analyzed · Variance flagged · Next steps recommended",
    status: "Pending review",
    time: "8 min",
    accent: "bg-amber-50 text-amber-700",
  },
  {
    icon: Mail,
    type: "Communication",
    title: "Stakeholder Update — Board Pack",
    detail: "Executive summary · Risk register · Financial highlights prepared",
    status: "Approved",
    time: "6 min",
    accent: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: ShieldCheck,
    type: "Compliance",
    title: "GDPR Data Review — Client X",
    detail: "14 data points checked · 2 flags separated for legal review",
    status: "Held for approval",
    time: "4 min",
    accent: "bg-amber-50 text-amber-700",
  },
];

export default function WorkEvidenceTrack() {
  return (
    <section
      id="evidence"
      data-chapter="evidence"
      data-label="What gets done"
      className="border-b border-[var(--border)] bg-[var(--bg)]"
    >
      <div className="max-w-[1280px] mx-auto px-8 py-24">
        {/* Header */}
        <div className="max-w-2xl mb-14" data-reveal>
          <p className="text-xs font-medium uppercase tracking-[0.26em] text-[var(--text-muted)] mb-4">
            What gets done
          </p>
          <h2 className="text-[36px] md:text-[52px] tracking-[-1.4px] md:tracking-[-2.2px] font-medium leading-[1.05] mb-5 text-balance">
            Outputs that arrive reviewed, formatted, and ready.
          </h2>
          <p className="text-[18px] md:text-[20px] text-[var(--text-muted)] leading-relaxed">
            Not a chat log. Not a rough draft. A finished deliverable — with the context baked in, the flags surfaced, and an approval checkpoint before it goes anywhere.
          </p>
        </div>

        {/* Outcome cards */}
        <div className="grid md:grid-cols-2 gap-4" data-reveal-group>
          {outcomes.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                data-reveal-item
                className="group rounded-2xl border border-[var(--border)] bg-white p-6 transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1"
              >
                {/* Top row: type badge + status */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${item.accent}`}>
                    <Icon size={13} />
                    {item.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                    <Clock size={12} />
                    {item.time}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-[19px] font-semibold tracking-tight text-[var(--text)] mb-2">
                  {item.title}
                </h3>

                {/* Detail */}
                <p className="text-[14px] text-[var(--text-muted)] leading-relaxed mb-4">
                  {item.detail}
                </p>

                {/* Status bar */}
                <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
                  <div className="flex items-center gap-1.5 text-[13px] font-medium text-[var(--text)]">
                    <CheckCircle2 size={14} className={item.status === "Approved" ? "text-[var(--accent)]" : "text-amber-500"} />
                    {item.status}
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                    Ready for review
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom proof line */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-[15px] text-[var(--text-muted)]" data-reveal>
          <p className="max-w-lg leading-relaxed">
            Every output includes source attribution, memory references, and an approval gate. Nothing leaves the workspace without explicit sign-off.
          </p>
          <a
            href="/products/headmaster"
            className="inline-flex items-center gap-1.5 text-[var(--text)] font-medium hover:underline underline-offset-2 transition-colors"
          >
            See how approvals work
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}