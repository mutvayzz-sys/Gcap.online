"use client";

import { Repeat, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProductShot from "./ProductShot";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      data-chapter="skills"
      data-label="Skills"
      className="bg-[var(--bg-elevated)] border-b border-[var(--border)] py-24"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <SectionHeader
          eyebrow="Workflows That Learn"
          title="Easier the Second Time"
          body="When Headmaster completes repeated work, the process can become a reusable playbook. The next report, update, brief, or proposal does not need to be explained from scratch."
        />

        <div className="grid md:grid-cols-3 gap-5" data-reveal-group>
          <div
            data-reveal-item
            className="rounded-3xl border border-[var(--border)] bg-white p-8 transition hover:border-[var(--border-strong)]"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#111111] text-[#F9F7F3] flex items-center justify-center mb-6">
              <Repeat size={18} strokeWidth={1.8} />
            </div>
            <h3 className="text-[18px] font-medium tracking-tight mb-3">Reusable playbooks</h3>
            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">
              A completed workflow becomes a template. Structure, tone, review steps, and formatting are preserved for next time.
            </p>
          </div>

          <div
            data-reveal-item
            className="rounded-3xl border border-[var(--border)] bg-white p-8 transition hover:border-[var(--border-strong)]"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#111111] text-[#F9F7F3] flex items-center justify-center mb-6">
              <Sparkles size={18} strokeWidth={1.8} />
            </div>
            <h3 className="text-[18px] font-medium tracking-tight mb-3">Process improvement</h3>
            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">
              Each cycle refines what works. The system learns which sources to pull from, which tone fits, and what needs human attention.
            </p>
          </div>

          <div
            data-reveal-item
            className="rounded-3xl border border-[var(--border)] bg-white p-8 transition hover:border-[var(--border-strong)]"
          >
            <div className="w-10 h-10 rounded-2xl bg-[#111111] text-[#F9F7F3] flex items-center justify-center mb-6">
              <Repeat size={18} strokeWidth={1.8} />
            </div>
            <h3 className="text-[18px] font-medium tracking-tight mb-3">Less explanation</h3>
            <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">
              Your team spends less time repeating instructions and more time reviewing outcomes.
            </p>
          </div>
        </div>

        <div className="mt-14" data-reveal>
          <ProductShot
            src="https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/08-workflows-skills-library.png"
            alt="Workflows page showing reusable skills and workflow playbooks."
            aspect="aspect-[16/10]"
          />
        </div>
      </div>
    </section>
  );
}
