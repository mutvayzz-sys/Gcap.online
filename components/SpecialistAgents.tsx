"use client";

import { Search, PenLine, ClipboardCheck, FileDigit, UserCheck } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProductShot from "./ProductShot";

const AGENT_TYPES = [
  {
    icon: Search,
    title: "Research agent",
    description: "Gathers context, checks sources, and compiles background information.",
  },
  {
    icon: PenLine,
    title: "Writing agent",
    description: "Drafts reports, updates, emails, and documents in the right tone.",
  },
  {
    icon: ClipboardCheck,
    title: "Review agent",
    description: "Checks facts, flags sensitive language, and verifies against requirements.",
  },
  {
    icon: FileDigit,
    title: "Formatting agent",
    description: "Structures output, applies templates, and prepares the final package.",
  },
  {
    icon: UserCheck,
    title: "Approval prep agent",
    description: "Packages drafts for review, highlights changes, and tracks sign-off status.",
  },
];

export default function SpecialistAgents() {
  return (
    <section
      id="agents"
      data-chapter="agents"
      data-label="Agents"
      className="bg-[var(--bg-elevated)] border-b border-[var(--border)] py-24"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <SectionHeader
          eyebrow="Specialist Agents"
          title="The Right Helper for Each Part of the Work"
          body="A report may need research, drafting, checking, formatting, and approval prep. Headmaster can split the work across specialist agents and bring the result back into one clean output."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" data-reveal-group>
          {AGENT_TYPES.map((agent) => {
            const Icon = agent.icon;
            return (
              <div
                key={agent.title}
                data-reveal-item
                className="rounded-2xl border border-[var(--border)] bg-white p-6 transition hover:border-[var(--border-strong)]"
              >
                <Icon size={20} strokeWidth={1.8} className="mb-4 text-[var(--text-muted)]" />
                <h3 className="text-[15px] font-medium tracking-tight mb-1.5">{agent.title}</h3>
                <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{agent.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14" data-reveal>
          <ProductShot
            src="https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/09-agents-profiles.png"
            alt="Agents page showing specialist agent profiles with models, memory, skills, and tools."
            aspect="aspect-[16/10]"
          />
        </div>
      </div>
    </section>
  );
}
