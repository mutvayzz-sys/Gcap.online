"use client";

import { Code, BookMarked, Layers, Wrench } from "lucide-react";

export default function TayXSection() {
  return (
    <section
      id="tayx"
      data-chapter="tayx"
      data-label="TayX"
      className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="mb-8" data-reveal>
            <div className="flex items-center gap-4 mb-5">
              <div className="text-xs font-medium uppercase tracking-[0.26em] text-[var(--text-muted)]">
                What comes next from GCAP
              </div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] border border-[var(--border-strong)] px-2.5 py-1 text-[var(--text-muted)]">
                Coming soon
              </div>
            </div>
            <h2 className="text-[36px] md:text-[52px] tracking-[-1.4px] md:tracking-[-2.2px] font-medium leading-[1.05]">
              TayX
            </h2>
            <p className="mt-5 text-[18px] md:text-[20px] leading-relaxed text-[var(--text-muted)]">
              TayX is GCAP's own model — a separate product built and trained for agentic work. It is not Headmaster. It is the model layer that will follow it.
            </p>
          </div>

          <div className="space-y-5" data-reveal>
            <p className="text-[17px] text-[var(--text-muted)] leading-relaxed">
              Headmaster runs on whichever model fits the task. TayX will be the one GCAP builds specifically for long-running workflows, tool-heavy tasks, and multi-step reasoning.
            </p>
            <p className="text-[17px] text-[var(--text-muted)] leading-relaxed">
              It will not release before Headmaster. When it does, it will be available as a first-class option alongside every other model Headmaster already supports.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4" data-reveal-group>
          {[
            {
              icon: Code,
              title: "Coding",
              description: "Trained for code understanding, generation, and review across real agentic workflows.",
            },
            {
              icon: BookMarked,
              title: "Long-context reasoning",
              description: "Built to hold and reason across large documents, threads, and project history without losing track.",
            },
            {
              icon: Layers,
              title: "Agent-native",
              description: "Designed for planning, delegation, and multi-step execution — not just single-turn answers.",
            },
            {
              icon: Wrench,
              title: "Tool-heavy workflows",
              description: "Fine-tuned for reliability when working through browsers, files, calendars, and connected systems.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                data-reveal-item
                className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition hover:border-[var(--border-strong)]"
              >
                <Icon size={20} strokeWidth={1.8} className="mb-4 text-[var(--text-muted)]" aria-hidden="true" />
                <h3 className="text-[15px] font-medium tracking-tight mb-1.5">{item.title}</h3>
                <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
