const STATS = [
  { value: "20+", label: "tools" },
  { value: "Persistent memory", label: "across every session" },
];

export default function StatsBar() {
  return (
    <div className="border-y border-[var(--border)] bg-[var(--bg-elevated)] py-6">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
          {STATS.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-[22px] font-medium tracking-tight text-[var(--text)]">
                {stat.value}
              </div>
              <div className="text-xs tracking-[2px] text-[var(--text-muted)] uppercase mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
