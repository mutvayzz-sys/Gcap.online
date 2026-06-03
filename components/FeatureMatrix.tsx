import { featureMatrix } from "@/src/data/features";
import SectionHeader from "./SectionHeader";

export default function FeatureMatrix() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="More Than a Chat Interface" body="Headmaster is positioned as an operating layer: persistent context, reusable workflow knowledge, scheduled execution, connected tools, and approval control." />
        <div className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-white shadow-[var(--shadow-card)]">
          {featureMatrix.map((row, index) => (
            <div key={row.capability} className="grid gap-3 border-b border-[var(--border)] p-6 last:border-b-0 md:grid-cols-[0.42fr_0.58fr] md:p-7">
              <div className="flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111] text-xs font-medium text-white">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-medium tracking-tight">{row.capability}</h3>
              </div>
              <p className="text-[15px] leading-relaxed text-[var(--text-muted)] md:pl-6">{row.meaning}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
