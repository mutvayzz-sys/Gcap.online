import { howItWorks } from "@/src/data/howItWorks";
import SectionHeader from "./SectionHeader";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#111] px-8 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <SectionHeader inverse eyebrow="How Headmaster Works" title="Work can start from a prompt, a button, a schedule, or a team message." body="The important part is not the input. Headmaster keeps the process, context, tools, and approval path connected across the whole workflow." />
        <div className="grid gap-4 lg:grid-cols-6">
          {howItWorks.map((step, index) => (
            <article key={step.title} className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#111]">{index + 1}</div>
              <h3 className="text-lg font-medium tracking-tight">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
