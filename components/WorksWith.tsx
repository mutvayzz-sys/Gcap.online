"use client";

const TOOLS = ["Claude", "Cursor", "VS Code", "Notion", "Gmail", "Slack", "GitHub"];

export default function WorksWith() {
  const doubled = [...TOOLS, ...TOOLS];
  return (
    <div className="border-y border-[var(--border)] py-6 overflow-hidden">
      <div className="text-xs tracking-[2px] text-[var(--text-muted)] text-center mb-5 uppercase">
        Works with your existing tools
      </div>
      <div className="relative">
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ animation: "marquee 22s linear infinite", width: "max-content" }}
        >
          {doubled.map((tool, i) => (
            <span key={i} className="text-sm font-mono text-[var(--text-muted)]">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
