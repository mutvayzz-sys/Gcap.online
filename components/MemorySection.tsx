"use client";

import { BookOpen, Lock } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProductShot from "./ProductShot";

export const MEMORY_IMAGES = [
  {
    src: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/06-memory-providers.png",
    alt: "Memory page showing agent memory, user profile, providers, and persona tabs.",
  },
  {
    src: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/05-documents-knowledge-base.png",
    alt: "Documents page showing approved workspace files and knowledge sources.",
  },
];

export default function MemorySection() {
  return (
    <section
      id="memory"
      data-chapter="memory"
      data-label="Memory"
      className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]"
    >
      <SectionHeader
        eyebrow="Memory That Belongs To The Organization"
        title="Your Workflows Should Not Start From Zero"
        body="Headmaster remembers useful context, preferred formats, recurring instructions, past decisions, and workflow history so repeated work gets faster and more consistent."
      />

      <div className="grid md:grid-cols-2 gap-6 mt-4" data-reveal-group>
        <div data-reveal-item className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#111111] text-[#F9F7F3] flex items-center justify-center">
              <BookOpen size={18} strokeWidth={1.8} />
            </div>
            <h3 className="text-[17px] font-medium tracking-tight">What it remembers</h3>
          </div>
          <ul className="space-y-2.5 text-[15px] text-[var(--text-muted)] leading-relaxed">
            <li>Preferred report formats and tone rules</li>
            <li>Recurring instructions and workflow steps</li>
            <li>Past decisions and project context</li>
            <li>Document history and useful details</li>
          </ul>
        </div>

        <div data-reveal-item className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[#111111] text-[#F9F7F3] flex items-center justify-center">
              <Lock size={18} strokeWidth={1.8} />
            </div>
            <h3 className="text-[17px] font-medium tracking-tight">How it is controlled</h3>
          </div>
          <ul className="space-y-2.5 text-[15px] text-[var(--text-muted)] leading-relaxed">
            <li>Memory belongs to the workspace, not individuals</li>
            <li>Context can be reviewed and corrected</li>
            <li>Details can be pinned or updated</li>
            <li>Organizations decide what is remembered</li>
          </ul>
        </div>
      </div>

      {/* Memory + Documents product shots */}
      <div className="mt-14 grid md:grid-cols-2 gap-6" data-reveal>
        <div>
          <div className="text-[10px] tracking-[2.5px] uppercase text-[var(--text-muted)] mb-3">Memory providers</div>
          <ProductShot
            src={MEMORY_IMAGES[0].src}
            alt={MEMORY_IMAGES[0].alt}
            aspect="aspect-[16/10]"
            data-lightbox="0"
          />
        </div>
        <div>
          <div className="text-[10px] tracking-[2.5px] uppercase text-[var(--text-muted)] mb-3">Knowledge base</div>
          <ProductShot
            src={MEMORY_IMAGES[1].src}
            alt={MEMORY_IMAGES[1].alt}
            aspect="aspect-[16/10]"
            data-lightbox="1"
          />
        </div>
      </div>
    </section>
  );
}
