import { ArrowRight } from "lucide-react";
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
          {useCases.map((uc) => (
            <a
              key={uc.slug}
              href={`/use-cases/${uc.slug}`}
              className="grid md:grid-cols-[280px_1fr_auto] gap-6 py-8 border-b border-[var(--border)] group transition-colors hover:bg-white/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)]"
            >
              <div>
                <h3 className="text-[18px] font-medium tracking-tight leading-snug">{uc.title}</h3>
                <div className="mt-3 inline-flex rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-[12px] font-medium text-[var(--text)]">
                  Saves {uc.savings}
                </div>
              </div>
              <p className="text-[16px] text-[var(--text-muted)] leading-relaxed">{uc.description}</p>
              <div className="flex items-center gap-2 self-start text-[14px] font-medium text-[var(--text)] transition-all group-hover:gap-3">
                Explore workflows
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
