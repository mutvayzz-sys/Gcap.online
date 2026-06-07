"use client";

import { Brain, CalendarClock, Wrench, RadioTower, Library } from "lucide-react";
import { productPillars } from "@/src/data/productPillars";
import SectionHeader from "./SectionHeader";

const pillarIcons = [Brain, Library, CalendarClock, Wrench, RadioTower];
const pillarSpans = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-1",
  "lg:col-span-2",
];

export default function ProductPillars() {
  return (
    <section
      id="product"
      data-chapter="product"
      data-label="Product"
      className="max-w-[1120px] mx-auto px-8 py-24 border-b border-[var(--border)]"
    >
      <SectionHeader
        title="What Headmaster Is Built On"
        body="Headmaster is a persistent AI workforce layer for organizations: a private command layer that remembers, learns, schedules, connects, delegates, and waits for review where it matters."
      />
      <div className="grid auto-rows-[minmax(220px,auto)] grid-flow-dense gap-5 md:grid-cols-2 lg:grid-cols-4" data-reveal-group>
        {productPillars.slice(0, 5).map((pillar, i) => {
          const Icon = pillarIcons[i];
          const featured = i === 0;
          const textOnly = i === 4;

          return (
            <div
              key={pillar.title}
              data-reveal-item
              className={`group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7 transition [@media(hover:hover)_and_(pointer:fine)]:hover:border-[var(--border-strong)] ${pillarSpans[i]}`}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_0%,rgba(17,17,17,0.08),transparent_38%)]" />
              <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                {!textOnly && (
                  <div
                    className="product-pillar-icon w-12 h-12 rounded-2xl bg-[#111111] text-[#F9F7F3] flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Icon size={featured ? 23 : 20} strokeWidth={1.8} />
                  </div>
                )}
                {featured && (
                  <div className="text-[64px] font-semibold leading-tight">
                    100%
                  </div>
                )}
                <div>
                  <h3 className={`${
                    featured ? "text-[30px] md:text-[38px]" : textOnly ? "text-[20px]" : "text-[23px]"
                  } font-medium tracking-tight mb-3 leading-tight text-balance`}>
                    {pillar.title}
                  </h3>
                  <p className={`${featured ? "text-[17px]" : textOnly ? "text-[20px]" : "text-[15px]"} text-[var(--text-muted)] leading-relaxed`}>
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
