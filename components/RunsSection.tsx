"use client";

import SectionHeader from "./SectionHeader";
import ProductShot from "./ProductShot";

export default function RunsSection() {
  return (
    <section
      id="runs"
      data-chapter="runs"
      data-label="Runs"
      className="bg-[var(--bg-elevated)] border-b border-[var(--border)] py-24"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div data-reveal className="order-2 lg:order-1">
            <ProductShot
              src="https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/03-runs-execution-history.png"
              alt="Runs page showing workflow execution history, agents, statuses, and durations."
              aspect="aspect-[16/10]"
            />
          </div>

          <div data-reveal className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Execution History"
              title="Every run leaves a trail."
              body="Track what ran, which agent handled it, what status it reached, how long it took, and what needs attention."
            />
            <div className="mt-6 space-y-4 text-[17px] text-[var(--text-muted)] leading-relaxed">
              <p>
                See full execution history across workflows. Filter by status, agent, date, and outcome. When something needs review, it surfaces immediately.
              </p>
              <p>
                Runs are not just logs — they are operational records that help your team understand what is working and what needs tuning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
