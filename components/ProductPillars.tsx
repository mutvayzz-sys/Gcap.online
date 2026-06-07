"use client";

import { Brain, CalendarClock, CheckCircle2, GitBranch, Library, RadioTower, Wrench } from "lucide-react";
import { productPillars } from "@/src/data/productPillars";
import SectionHeader from "./SectionHeader";

const pillarIcons = [Brain, Library, CalendarClock, Wrench, RadioTower, GitBranch, CheckCircle2];

export default function ProductPillars() {
  return (
    <section
      id="product"
      data-chapter="product"
      data-label="Product"
      className="max-w-[1120px] mx-auto px-8 py-24 border-b border-[var(--border)]"
    >
      <SectionHeader
        eyebrow="Everything Headmaster does"
        title="What Headmaster Is Built On"
        body="Headmaster is a persistent AI workforce layer for organizations: a private command layer that remembers, learns, schedules, connects, delegates, and waits for review where it matters."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" data-reveal-group>
        {productPillars.map((pillar, i) => {
          const Icon = pillarIcons[i];
          return (
            <div
              key={pillar.title}
              data-reveal-item
              className="group rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7 transition hover:border-[var(--border-strong)]"
            >
              <div
                className="product-pillar-icon w-12 h-12 rounded-2xl bg-[#111111] text-[#F9F7F3] flex items-center justify-center mb-7"
                aria-hidden="true"
              >
                <Icon size={20} strokeWidth={1.8} />
              </div>
              <h3 className="text-[23px] font-medium tracking-tight mb-3">{pillar.title}</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{pillar.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
