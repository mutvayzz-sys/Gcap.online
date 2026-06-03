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
          eyebrow="Deploy Headmaster Where Work Repeats"
          title="Use Cases Across Organizations"
          body="Headmaster adapts to the workflows of different organizations without changing the core system. One persistent layer, many verticals."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal-group>
          {useCases.map((uc, i) => (
            <div
              key={i}
              data-reveal-item
              className="rounded-3xl border border-[var(--border)] bg-white p-8 transition-all hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
            >
              {uc.vertical && (
                <div className="inline-block text-xs tracking-[2px] uppercase text-[var(--text-muted)] mb-3 border border-[var(--border)] px-3 py-0.5 rounded">
                  {uc.vertical}
                </div>
              )}
              <h3 className="text-[20px] font-medium tracking-tight mb-3 leading-tight">{uc.title}</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{uc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
