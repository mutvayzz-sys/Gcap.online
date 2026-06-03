import { trustControls } from "@/src/data/trustControls";
import SectionHeader from "./SectionHeader";

export default function TrustControl() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="Built for Control, Not Blind Automation" body="Headmaster is designed to work through permissions, review steps, and approved tools so organizations stay in control." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {trustControls.map((control) => (
            <article key={control.title} className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-subtle)]">
              <h3 className="text-lg font-medium tracking-tight">{control.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{control.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
