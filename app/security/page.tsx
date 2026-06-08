/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lock, Shield, CheckCircle2, Key, FileText, Eye } from "lucide-react";
import SiteNav from "@/components/SiteNav";

const EASE = [0.23, 1, 0.32, 1] as const;

const t = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
});

const features = [
  {
    title: "Secret exfiltration blocking",
    description: "Browser URLs and LLM responses are scanned for secret patterns. Exfiltration via URL encoding, base64, or prompt injection is blocked automatically.",
    icon: Eye,
  },
  {
    title: "SSRF & injection protections",
    description: "SSRF redirect guards on all platform integrations. Shell injection neutralisation in sandbox writes. Git argument injection prevention.",
    icon: Shield,
  },
  {
    title: "MCP OAuth 2.1 PKCE",
    description: "Standards-compliant OAuth for all MCP server authentication. Automatic malware scanning of MCP extension packages via the OSV vulnerability database.",
    icon: Key,
  },
  {
    title: "Credential isolation",
    description: "Credential directory protections across .docker, .azure, .config/gh. API keys stay scoped to the run that needs them. Secrets never appear in prompts.",
    icon: Lock,
  },
  {
    title: "Approval gates",
    description: "Sensitive actions pause for human review. Emails, reports, data edits, and external actions require explicit sign-off before release. Configurable per workflow.",
    icon: CheckCircle2,
  },
  {
    title: "Full audit logging",
    description: "Centralised structured logging. Every mutating action, heartbeat state change, cost event, and approval is recorded as durable activity.",
    icon: FileText,
  },
];

const secondaryFeatures = [
  {
    title: "Sandboxed execution",
    description: "Five execution backends: Local, Docker, SSH, Singularity, Modal. Container hardening and namespace isolation. Agents work in isolated environments.",
  },
  {
    title: "Twilio webhook signature validation",
    description: "SMS/voice integrations are validated against Twilio signatures to prevent remote code execution via forged webhooks.",
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteNav />

      <main>
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[var(--bg)] pt-32 pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(0,0,0,0.035),transparent_60%)]" />

          <div className="relative z-10 max-w-[1280px] mx-auto px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
              <div className="inline-flex items-center border border-[var(--border-strong)] px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase text-[var(--text-muted)] mb-6">
                Security
              </div>

              <h1 className="text-wrap balance text-[clamp(2.8rem,4.5vw,5.5rem)] leading-[0.94] tracking-[-0.03em] font-semibold mb-6 max-w-4xl">
                Security & control
              </h1>

              <p className="text-wrap balance text-[19px] md:text-[21px] tracking-[-0.3px] mb-9 text-[var(--text-muted)] max-w-[55ch] leading-snug">
                Headmaster is designed to keep sensitive work inside your workspace.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#111111] text-[#F9F7F3] text-[15px] font-medium hover:bg-black active:scale-[0.97] transition-all" data-magnet>
                  Talk to our team
                </Link>
                <Link href="/products/headmaster" className="inline-flex items-center justify-center px-9 py-3.5 rounded-full border border-[var(--border-strong)] text-[15px] font-medium hover:bg-white transition-all">
                  Learn about Headmaster
                </Link>
              </div>
            </motion.div>
          </div>
        </section>


        <section className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-wrap balance text-[2rem] sm:text-[2.5rem] leading-tight tracking-[-0.02em] font-semibold mb-4">Trust boundary</h2>
            <p className="text-[17px] text-[var(--text-muted)] leading-relaxed">The approval gate sits between workspace-internal agent work and anything that can leave through external tools, APIs, or communication channels.</p>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[#0D0D0D] p-6 text-[#F9F7F3]">
            <div className="grid gap-4 lg:grid-cols-4 lg:items-stretch">
              {["User / Operator", "Approval Gate", "Headmaster Agent", "Sandboxed tools & approved integrations"].map((label, index) => (
                <div key={label} className="relative rounded-2xl border border-white/15 bg-white/[0.06] p-5">
                  <div className="text-xs uppercase tracking-[0.18em] text-white/40">Step {index + 1}</div>
                  <div className="mt-2 text-lg font-medium">{label}</div>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{index === 0 ? "Starts work and reviews outcomes." : index === 1 ? "Blocks sensitive release until approved." : index === 2 ? "Loads memory, delegates, and produces drafts." : "Runs scoped calls inside configured boundaries."}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-green-400/25 bg-green-400/10 p-4 text-sm text-green-100">Inside workspace: memory, prompts, drafts, run logs, approval decisions, and scoped credentials.</div>
              <div className="rounded-2xl border border-amber-300/25 bg-amber-300/10 p-4 text-sm text-amber-100">Outside boundary: emails, client messages, data writes, exports, webhooks, and third-party API changes.</div>
            </div>
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="text-wrap balance text-[2rem] sm:text-[2.5rem] leading-tight tracking-[-0.02em] font-semibold mb-16">How Headmaster protects your work</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-group>
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  {...t(i * 0.05)}
                  className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] group hover:border-[var(--border-strong)] transition-colors"
                  data-reveal-item
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#F9F7F3] flex items-center justify-center mb-6 group-hover:scale-[1.05] transition-transform">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[19px] font-medium tracking-tight mb-3">{feature.title}</h3>
                  <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]">
          <div className="grid md:grid-cols-2 gap-12">
            {secondaryFeatures.map((feature, i) => (
              <motion.div key={feature.title} {...t(i * 0.1)} className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]">
                <h3 className="text-[21px] font-medium tracking-tight mb-4">{feature.title}</h3>
                <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-8 py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} viewport={{ once: true, margin: "-80px" }} className="rounded-2xl border border-[var(--border-strong)] bg-[#111111] text-[#F9F7F3] p-12 md:p-16 text-center">
            <h2 className="text-[32px] md:text-[42px] font-semibold tracking-[-0.02em] mb-6">Secure by default</h2>
            <p className="text-[17px] text-[#F9F7F3]/70 max-w-[50ch] mx-auto mb-10">Learn more about Headmaster's security architecture and how it protects your organization's sensitive workflows.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#F9F7F3] text-[#111111] text-[15px] font-medium hover:bg-white active:scale-[0.97] transition-all">
              Request a security briefing
            </Link>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] py-9 text-xs text-[var(--text-muted)] px-8 flex flex-col md:flex-row gap-y-2 md:items-center justify-between max-w-6xl mx-auto">
        <div>© 2026 GCAP Labs. Headmaster — persistent AI agents for organizations.</div>
        <div className="flex gap-6 flex-wrap">
          <a href="https://x.com/gcaplabs" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)] transition-colors">X</a>
          <a href="https://linkedin.com/company/gcaplabs" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)] transition-colors">LinkedIn</a>
          <Link href="/security" className="hover:text-[var(--text)] transition-colors">Security</Link>
          <Link href="/changelog" className="hover:text-[var(--text)] transition-colors">Changelog</Link>
          <Link href="/privacy" className="hover:text-[var(--text)] transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-[var(--text)] transition-colors">Terms</Link>
        </div>
      </footer>
    </div>
  );
}
