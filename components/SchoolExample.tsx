import { schoolWorkflows } from "@/src/data/schoolWorkflows";
import SectionHeader from "./SectionHeader";

export default function SchoolExample() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Example Deployment" title="Headmaster for Schools" body="A school can deploy Headmaster to support teachers and administrators with reports, parent communication, lesson materials, student summaries, and recurring academic workflows." />
        <div className="grid gap-4 md:grid-cols-5">
          {schoolWorkflows.map((workflow) => (
            <article key={workflow.title} className="rounded-3xl border border-[var(--border)] bg-white p-6 md:col-span-1">
              <h3 className="text-lg font-medium tracking-tight">{workflow.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{workflow.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
