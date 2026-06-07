"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Lock, Shield, CheckCircle2, AlertTriangle, Key, Zap, FileText, Eye } from "lucide-react";

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
      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/95 backdrop-blur-xl border-b border-[var(--border)]">
        <div className="max-w-[1280px] mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.svg" alt="GCAP Labs" className="h-8 w-auto" width={32} height={32} priority />
            <span className="text-[21px] tracking-[-0.8px] font-medium">GCAP</span>
          </Link>
          <Link href="/" className="text-[15px] hover:text-[var(--text-muted)] transition-colors">
            Back to home
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero */}
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

        {/* Features Grid */}
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

        {/* Secondary Features */}
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

        {/* CTA Section */}
        <section className="max-w-[1280px] mx-auto px-8 py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} viewport={{ once: true, margin: "-80px" }} className="rounded-2xl border border-[var(--border-strong)] bg-[#111111] text-[#F9F7F3] p-12 md:p-16 text-center">
            <h2 className="text-[32px] md:text-[42px] font-semibold tracking-[-0.02em] mb-6">Secure by default</h2>
            <p className="text-[17px] text-[#F9F7F3]/70 max-w-[50ch] mx-auto mb-10">Learn more about Headmaster's security architecture and how it protects your organization's sensitive workflows.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#F9F7F3] text-[#111111] text-[15px] font-medium hover:bg-white active:scale-[0.97] transition-all">
              Request a security audit
            </Link>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-9 text-xs text-[var(--text-muted)] px-8 flex flex-col md:flex-row gap-y-2 md:items-center justify-between max-w-6xl mx-auto">
        <div>© 2026 GCAP Labs. Headmaster — persistent AI agents for organizations.</div>
        <div className="flex gap-6 flex-wrap">
          <a href="https://x.com/gcaplabs" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)] transition-colors">
            X
          </a>
          <a href="https://linkedin.com/company/gcaplabs" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text)] transition-colors">
            LinkedIn
          </a>
          <Link href="/security" className="hover:text-[var(--text)] transition-colors">
            Security
          </Link>
          <Link href="/changelog" className="hover:text-[var(--text)] transition-colors">
            Changelog
          </Link>
          <Link href="/privacy" className="hover:text-[var(--text)] transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-[var(--text)] transition-colors">
            Terms
          </Link>
        </div>
      </footer>
    </div>
  );
}
