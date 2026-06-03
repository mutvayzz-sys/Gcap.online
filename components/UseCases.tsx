import { useCases } from "@/src/data/useCases";
import SectionHeader from "./SectionHeader";

export default function UseCases() {
  return (
    <section id="use-cases" className="px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Deploy Headmaster Where Work Repeats" body="Headmaster adapts to the workflows of different organizations without changing the core system." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <article key={useCase.title} className="rounded-3xl border border-[var(--border)] bg-white p-7 transition hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-card)]">
              <div className="mb-5 h-1.5 w-12 rounded-full bg-[#111]" />
              <h3 className="text-2xl font-medium tracking-tight">{useCase.title}</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[var(--text-muted)]">{useCase.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
