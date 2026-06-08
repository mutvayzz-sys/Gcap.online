"use client";

import { Shield, Lock, FileCheck, Eye } from "lucide-react";

const securityBadges = [
  { icon: Shield, label: "SOC 2 Type II", sub: "Audit-ready" },
  { icon: Lock, label: "AES-256", sub: "Encrypted at rest" },
  { icon: FileCheck, label: "GDPR", sub: "Compliant" },
  { icon: Eye, label: "Audit Trail", sub: "Every action logged" },
];

const betaTestimonials = [
  {
    quote: "We handed Headmaster a weekly reporting workflow. It runs at 6 AM every Monday, pulls from three tools, and has the report in my inbox before I've opened Slack.",
    name: "Director of Ops",
    org: "Mid-size Agency (Beta)",
  },
  {
    quote: "The approval gate is what sold us. Our compliance team won't sign off on anything automated without a review step. Headmaster pauses, we approve, it ships.",
    name: "COO",
    org: "B2B SaaS (Beta)",
  },
  {
    quote: "Setup took 20 minutes. Within a week it was handling 40% of our repetitive task load. The memory system means it actually learns our preferences over time.",
    name: "Founder",
    org: "Startup (Beta)",
  },
];

export default function BetaTrustRing() {
  return (
    <section
      data-chapter="trust"
      data-label="Trust"
      className="relative border-b border-[var(--border)]"
    >
      {/* Security badges strip — 200% bigger */}
      <div className="bg-[var(--bg-elevated)] border-b border-[var(--border)]">
        <div className="max-w-[1120px] mx-auto px-8 py-12">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {securityBadges.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-4 text-[var(--text-muted)]"
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center">
                  <Icon size={28} strokeWidth={1.8} className="text-[var(--text)]" />
                </div>
                <div className="leading-tight">
                  <div className="text-[18px] font-medium text-[var(--text)] tracking-tight">{label}</div>
                  <div className="text-[13px] text-[var(--text-muted)]">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Beta testimonials */}
      <div className="max-w-[1120px] mx-auto px-8 py-20">
        <div className="text-center mb-12" data-reveal>
          <div className="inline-flex items-center border border-[var(--border-strong)] px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase text-[var(--text-muted)] mb-4">
            Beta Feedback
          </div>
          <h2 className="text-[28px] md:text-[36px] tracking-[-0.02em] font-semibold leading-tight">
            Trusted by early operators
          </h2>
          <p className="text-[17px] text-[var(--text-muted)] mt-3 max-w-[52ch] mx-auto leading-relaxed">
            Organizations in our beta program are already running real workflows unattended. Here's what they've said.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5" data-reveal-group>
          {betaTestimonials.map((t, i) => (
            <div
              key={i}
              data-reveal-item
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7 flex flex-col justify-between"
            >
              <blockquote className="text-[15px] leading-relaxed text-[var(--text)] mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-[var(--border)]">
                <div className="text-[14px] font-medium text-[var(--text)]">{t.name}</div>
                <div className="text-[13px] text-[var(--text-muted)]">{t.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}