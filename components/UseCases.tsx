import { useCases } from "@/src/data/useCases";
import SectionHeader from "./SectionHeader";

export default function UseCases() {
  return (
    <section
      id="use-cases"
      data-chapter="use-cases"
      data-label="Use Cases"
      className="border-t border-[var(--border)] bg-[var(--bg-elevated)] py-24"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <SectionHeader
          eyebrow="One agent. Every workflow."
          title="Use Cases Across Organizations"
          body="Headmaster adapts to the workflows of different organizations without changing the core system. One persistent layer, many verticals."
        />
        <div className="mt-10 border-t border-[var(--border)]" data-reveal>
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="grid md:grid-cols-[280px_1fr] gap-6 py-8 border-b border-[var(--border)] group"
            >
              <h3 className="text-[18px] font-medium tracking-tight leading-snug">{uc.title}</h3>
              <p className="text-[16px] text-[var(--text-muted)] leading-relaxed">{uc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
