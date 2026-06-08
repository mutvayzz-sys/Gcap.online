"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, CheckCircle2, GitBranch, Radio, TrendingUp, Users } from "lucide-react";
import SiteNav from "@/components/SiteNav";

const EASE = [0.23, 1, 0.32, 1] as const;

const t = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
});

const features = [
  {
    title: "Org chart & agent roles",
    description: "Agents have roles, titles, and reporting lines. Assign a CEO agent, a researcher, a writer. They know who they report to and what they're responsible for.",
    icon: Users,
  },
  {
    title: "Goal alignment",
    description: "Every task traces back to the company mission. Agents know what to do and why — not just a title, the full goal ancestry.",
    icon: Brain,
  },
  {
    title: "Heartbeat execution",
    description: "Agents wake on a schedule, check their task queue, and act. Delegation flows up and down the org chart automatically.",
    icon: Radio,
  },
  {
    title: "Budget & cost control",
    description: "Monthly token budgets per agent. When they hit the limit, they stop. No runaway costs. Scoped warnings before hard stops.",
    icon: TrendingUp,
  },
  {
    title: "Governance & approvals",
    description: "Board approval workflows. Approve hires, override strategy, pause or terminate any agent at any time. Nothing ships without sign-off.",
    icon: CheckCircle2,
  },
  {
    title: "Full audit trail",
    description: "Every action, tool call, cost event, approval, and agent decision is logged. Immutable. Searchable.",
    icon: GitBranch,
  },
];

const secondaryFeatures = [
  {
    title: "Multi-org isolation",
    description: "One deployment, unlimited organizations. Complete data separation. Run your portfolio from one control plane.",
  },
  {
    title: "Company portability",
    description: "Export and import entire organizations — agents, skills, projects, routines — with secret scrubbing. Move between deployments safely.",
  },
];

export default function HQPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteNav />

      <main>
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[var(--bg)] pt-32 pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(0,0,0,0.035),transparent_60%)]" />

          <div className="relative z-10 max-w-[1280px] mx-auto px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
              <div className="inline-flex items-center border border-[var(--border-strong)] px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase text-[var(--text-muted)] mb-6">
                Headmaster HQ
              </div>

              <h1 className="text-wrap balance text-[clamp(2.8rem,4.5vw,5.5rem)] leading-[0.94] tracking-[-0.03em] font-semibold mb-6 max-w-4xl">
                Run a team of agents. From one place.
              </h1>

              <p className="text-wrap balance text-[19px] md:text-[21px] tracking-[-0.3px] mb-9 text-[var(--text-muted)] max-w-[55ch] leading-snug">
                Headmaster HQ is the orchestration layer for organizations running multiple Headmaster agents. Org charts, goal alignment, budgets, governance, approvals, and full audit trails — in one control plane.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#111111] text-[#F9F7F3] text-[15px] font-medium hover:bg-black active:scale-[0.97] transition-all"
                  data-magnet
                >
                  See HQ in action
                </Link>
                <Link href="/products/headmaster" className="inline-flex items-center justify-center px-9 py-3.5 rounded-full border border-[var(--border-strong)] text-[15px] font-medium hover:bg-white transition-all">
                  Learn about Headmaster
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="text-wrap balance text-[2rem] sm:text-[2.5rem] leading-tight tracking-[-0.02em] font-semibold mb-16">How HQ works</h2>
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
          <div className="mb-12 max-w-3xl">
            <h2 className="text-wrap balance text-[2rem] sm:text-[2.5rem] leading-tight tracking-[-0.02em] font-semibold mb-4">Agent org chart</h2>
            <p className="text-[17px] text-[var(--text-muted)] leading-relaxed">HQ makes reporting lines visible: one coordinating agent can delegate to department agents, and department agents can supervise specialist subagents.</p>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[#0D0D0D] p-8 text-[#F9F7F3]">
            <div className="mx-auto max-w-4xl">
              <div className="mx-auto w-fit rounded-2xl border border-white/15 bg-white/10 px-6 py-4 text-center">
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">Executive</div>
                <div className="mt-1 text-lg font-medium">CEO Agent</div>
              </div>
              <div className="mx-auto h-8 w-px bg-white/20" />
              <div className="grid gap-4 md:grid-cols-3">
                {["Ops Agent", "Research Agent", "Comms Agent"].map((agent) => (
                  <div key={agent} className="rounded-2xl border border-white/15 bg-white/[0.06] p-4 text-center">
                    <div className="text-xs uppercase tracking-[0.16em] text-white/40">Department</div>
                    <div className="mt-1 font-medium">{agent}</div>
                    <div className="mt-4 grid gap-2 text-sm text-white/65">
                      <div className="rounded-xl bg-black/25 px-3 py-2">Specialist 1</div>
                      <div className="rounded-xl bg-black/25 px-3 py-2">Specialist 2</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <h2 className="text-[32px] md:text-[42px] font-semibold tracking-[-1.5px] mb-4">Cost controls per agent.</h2>
              <p className="text-[17px] text-[var(--text-muted)] leading-relaxed">Set per-agent monthly budgets in tokens or dollars. HQ warns operators at 80%, hard-stops at the configured limit, and records spend by agent in the audit log.</p>
            </div>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6">
              {[
                ["Research Agent", "62%", "Healthy"],
                ["Comms Agent", "82%", "Warning"],
                ["Ops Agent", "100%", "Stopped"],
              ].map(([agent, pct, status]) => (
                <div key={agent} className="mb-5 last:mb-0">
                  <div className="mb-2 flex items-center justify-between text-sm"><span className="font-medium">{agent}</span><span className="text-[var(--text-muted)]">{status}</span></div>
                  <div className="h-3 overflow-hidden rounded-full bg-white">
                    <div className="h-full rounded-full bg-[#111111]" style={{ width: pct }} />
                  </div>
                  <div className="mt-1 text-xs text-[var(--text-muted)]">{pct} of monthly budget used</div>
                </div>
              ))}
            </div>
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
            <h2 className="text-[32px] md:text-[42px] font-semibold tracking-[-0.02em] mb-6">Ready to orchestrate your AI team?</h2>
            <p className="text-[17px] text-[#F9F7F3]/70 max-w-[50ch] mx-auto mb-10">Talk to the GCAP team about deploying Headmaster HQ for your organization.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#F9F7F3] text-[#111111] text-[15px] font-medium hover:bg-white active:scale-[0.97] transition-all">
              Request a demo
            </Link>
          </motion.div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] py-9 text-xs text-[var(--text-muted)] px-8 flex flex-col md:flex-row gap-y-2 md:items-center justify-between max-w-6xl mx-auto">
        <div>© 2026 GCAP Labs. Headmaster — persistent AI agents for organizations.</div>
        <div className="flex gap-6 flex-wrap">
          <Link href="/security" className="hover:text-[var(--text)] transition-colors">Security</Link>
          <Link href="/changelog" className="hover:text-[var(--text)] transition-colors">Changelog</Link>
          <Link href="/privacy" className="hover:text-[var(--text)] transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-[var(--text)] transition-colors">Terms</Link>
        </div>
      </footer>
    </div>
  );
}
