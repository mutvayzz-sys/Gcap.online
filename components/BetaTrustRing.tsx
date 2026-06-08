"use client";

import { Shield, Lock, FileCheck, Eye } from "lucide-react";
import Image from "next/image";

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
      <div className="max-w-[1120px] mx-auto px-8 py-20">
        <div className="text-center mb-12" data-reveal>
          <div className="inline-flex items-center border border-[var(--border-strong)] px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase text-[var(--text-muted)] mb-4">
            Architecture
          </div>
          <h2 className="text-[28px] md:text-[36px] tracking-[-0.02em] font-semibold leading-tight">
            One agent. Every surface.
          </h2>
          <p className="text-[17px] text-[var(--text-muted)] mt-3 max-w-[52ch] mx-auto leading-relaxed">
            Headmaster connects your platforms, models, tools, and infrastructure through one persistent agent — with the same memory, permissions, and audit trail everywhere.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-elevated)]" data-reveal>
          <Image
            src="https://v3b.fal.media/files/b/0a9d6f9a/IwUZ0bDXXFG9kgIQ-H6GC_arIz6gmw.png"
            alt="Headmaster architecture infographic: One agent connecting 14 platforms, 300+ AI models, 60+ tools, and 6 execution backends"
            width={1120}
            height={630}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: "Platforms", value: "14" },
            { label: "AI Models", value: "300+" },
            { label: "Built-in Tools", value: "60+" },
            { label: "Execution Backends", value: "6" },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-3">
              <div className="text-[20px] font-semibold text-[var(--text)] tracking-tight">{value}</div>
              <div className="text-[13px] text-[var(--text-muted)]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}