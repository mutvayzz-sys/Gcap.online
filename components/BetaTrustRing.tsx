"use client";

import { Shield, Lock, FileCheck, Eye } from "lucide-react";
import HeadmasterInfographic from "./HeadmasterInfographic";

const securityBadges = [
  { icon: Shield, label: "SOC 2 Type II", sub: "Audit-ready" },
  { icon: Lock, label: "AES-256", sub: "Encrypted at rest" },
  { icon: FileCheck, label: "GDPR", sub: "Compliant" },
  { icon: Eye, label: "Audit Trail", sub: "Every action logged" },
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

      {/* Infographic section — replaces beta testimonials */}
      <HeadmasterInfographic />
    </section>
  );
}