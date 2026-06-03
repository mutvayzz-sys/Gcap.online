import { howItWorksSteps } from "@/src/data/howItWorks";
import SectionHeader from "./SectionHeader";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      data-chapter="how-it-works"
      data-label="How"
      className="max-w-6xl mx-auto px-8 py-24 border-b border-[var(--border)]"
    >
      <SectionHeader
        eyebrow="How Headmaster Works"
        title="Work can start from a prompt, a button, a recurring schedule, or a message from your team."
        body="Headmaster turns organizational context into a repeatable operating loop: understand the work, recall the process, delegate, use tools, prepare output, and wait for approval."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6" data-reveal-group>
        {howItWorksSteps.map((step, index) => (
          <article
            key={step.title}
            data-reveal-item
            className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 flex flex-col"
          >
            <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-sm font-semibold text-[#F9F7F3]">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="text-[19px] font-medium tracking-tight mb-3">{step.title}</h3>
            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mt-auto">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
