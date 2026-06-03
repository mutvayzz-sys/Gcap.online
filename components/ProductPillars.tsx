import { Bot, Brain, CalendarClock, CheckCircle2, MailCheck, PlugZap, Workflow } from "lucide-react";
import { productPillars } from "@/src/data/productPillars";
import SectionHeader from "./SectionHeader";

const icons = [Brain, Workflow, CalendarClock, PlugZap, MailCheck, Bot, CheckCircle2];

export default function ProductPillars() {
  return (
    <section id="features" className="px-8 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title="What Headmaster Is Built On" body="The core system is designed around continuity: remembered context, repeatable skills, scheduled work, connected tools, specialist agents, and review gates." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productPillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <article key={pillar.title} className="group rounded-3xl border border-[var(--border)] bg-white p-7 shadow-[var(--shadow-subtle)] transition duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[var(--shadow-card)]">
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111] text-white transition group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-medium tracking-tight">{pillar.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--text-muted)]">{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
