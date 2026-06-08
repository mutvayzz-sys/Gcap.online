"use client";

import { ShieldCheck, X, PencilLine, Eye } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ProductShot from "./ProductShot";

export const APPROVALS_IMAGE = {
  src: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/04-approvals-queue.png",
  alt: "Approvals queue showing product launch documents awaiting human review.",
};

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
          { icon: ShieldCheck, title: "Approve", description: "Confirm and release when the draft looks right. Headmaster releases to its destination — channel, file, or API." },
          { icon: X, title: "Reject", description: "The workflow returns to draft state. The agent logs the reason and awaits revised instructions." },
          { icon: PencilLine, title: "Edit", description: "Modify inline before release. Changes are recorded as operator edits in the audit log." },
          { icon: Eye, title: "Review", description: "Routes to a second approver before release. No output leaves with a single point of failure." },
        ].map((item) => {
          const Icon = item.icon;
          const isApprove = item.title === "Approve";
          return (
            <div
              key={item.title}
              data-reveal-item
              className={
                isApprove
                  ? "rounded-2xl border border-[#111111] bg-[#111111] text-[#F9F7F3] p-6 text-center"
                  : "rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 text-center transition [@media(hover:hover)_and_(pointer:fine)]:hover:border-[var(--border-strong)]"
              }
            >
              <div className={isApprove ? "w-10 h-10 rounded-xl bg-white/15 text-[#F9F7F3] flex items-center justify-center mx-auto mb-4" : "w-10 h-10 rounded-xl bg-[#111111] text-[#F9F7F3] flex items-center justify-center mx-auto mb-4"}>
                <Icon size={18} strokeWidth={1.8} />
              </div>
              <h3 className={isApprove ? "text-[15px] font-medium tracking-tight mb-1 text-[#F9F7F3]" : "text-[15px] font-medium tracking-tight mb-1"}>{item.title}</h3>
              <p className={isApprove ? "text-[14px] text-white/65 leading-relaxed" : "text-[14px] text-[var(--text-muted)] leading-relaxed"}>{item.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-14" data-reveal>
        <ProductShot
          src={APPROVALS_IMAGE.src}
          alt={APPROVALS_IMAGE.alt}
          aspect="aspect-[16/10]"
          data-lightbox="1"
        />
      </div>
    </section>
  );
}
