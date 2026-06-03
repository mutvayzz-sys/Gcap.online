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
      className="max-w-6xl mx-auto px-8 py-24 border-b border-[var(--border)]"
    >
      <SectionHeader
        eyebrow="The Product"
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
              className="group rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7 min-h-[245px] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--border-strong)] hover:shadow-[0_24px_70px_rgba(17,17,17,0.08)]"
            >
              <div
                className="w-12 h-12 rounded-2xl bg-[#111111] text-[#F9F7F3] flex items-center justify-center mb-7 transition-transform duration-300 group-hover:scale-[1.04]"
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
