"use client";

import { ShieldCheck, X, PencilLine, Eye } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProductShot from "./ProductShot";

export default function ApprovalsSection() {
  return (
    <section
      id="approvals"
      data-chapter="approvals"
      data-label="Approvals"
      className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]"
    >
      <SectionHeader
        eyebrow="Control Stays With People"
        title="Headmaster drafts. You decide."
        body="Headmaster can draft reports, emails, updates, and actions, but sensitive work can pause for review. Approve, reject, edit, or request changes before anything important leaves the workspace."
      />

      <div className="grid md:grid-cols-4 gap-4 mt-4" data-reveal-group>
        {[
          { icon: ShieldCheck, title: "Approve", description: "Confirm and release when the draft looks right." },
          { icon: X, title: "Reject", description: "Stop the workflow and send it back for rework." },
          { icon: PencilLine, title: "Edit", description: "Make changes directly before finalizing the output." },
          { icon: Eye, title: "Review", description: "Request a second look from another team member." },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              data-reveal-item
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 text-center transition hover:border-[var(--border-strong)]"
            >
              <div className="w-10 h-10 rounded-xl bg-[#111111] text-[#F9F7F3] flex items-center justify-center mx-auto mb-4">
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <h3 className="text-[15px] font-medium tracking-tight mb-1">{item.title}</h3>
              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-14" data-reveal>
        <ProductShot
          src="https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/04-approvals-queue.png"
          alt="Approvals queue showing product launch documents awaiting human review."
          aspect="aspect-[16/10]"
        />
      </div>
    </section>
  );
}
