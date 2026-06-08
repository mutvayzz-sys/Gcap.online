/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Lock,
  Shield,
  CheckCircle2,
  FileText,
  Eye,
  Users,
  Fingerprint,
  Building2,
  AlertTriangle,
  Server,
  KeyRound,
  Scale,
} from "lucide-react";
import SiteNav from "@/components/SiteNav";

const EASE = [0.23, 1, 0.32, 1] as const;

const t = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
});

const features = [
  {
    title: "SOC 2 Type II audit-ready",
    description:
      "Headmaster maintains controls mapped to SOC 2 Type II trust service criteria — security, availability, processing integrity, confidentiality. Annual audits conducted by an independent CPA firm. Reports available to customers under NDA.",
    icon: Shield,
  },
  {
    title: "AES-256 encryption at rest",
    description:
      "All persisted data — workspace state, memory, credentials, audit logs — is encrypted at rest using AES-256 with keys managed through a dedicated KMS. Encryption keys are rotated automatically and never co-located with the data they protect.",
    icon: Lock,
  },
  {
    title: "GDPR compliance",
    description:
      "Full data processing agreement support, right-to-erasure workflows, and data residency options for EU customers. Subprocessors are enumerated in our DPA. No personal data leaves the processing boundary without documented lawful basis.",
    icon: Scale,
  },
  {
    title: "Complete audit trail",
    description:
      "Every tool invocation, approval decision, credential access, workspace mutation, and role change is recorded in an immutable, queryable audit log. Export via API for SIEM integration or compliance review. 90-day hot retention, cold archive available.",
    icon: FileText,
  },
  {
    title: "Role-based access control",
    description:
      "Four predefined roles — Viewer, Operator, Approver, Admin — each with least-privilege defaults. Viewers observe. Operators draft and execute non-sensitive actions. Approvers gate sensitive actions. Admins manage membership and policy. Custom roles available on Enterprise.",
    icon: Users,
  },
  {
    title: "Permissioned tools",
    description:
      "Every tool an agent can call — email, filewrite, API request, shell command — is bound to a permission tier. Tools are denied by default until an Admin explicitly enables them for a workspace. No shadow capability surface.",
    icon: KeyRound,
  },
  {
    title: "Isolated workspaces per org",
    description:
      "Each organization operates in a fully separate workspace: its own memory, credentials, agents, audit logs, and membership roster. Zero data leakage between tenants. Workspace isolation is enforced at the application layer, not just logical separation.",
    icon: Building2,
  },
  {
    title: "Human-in-the-loop approvals",
    description:
      "Sensitive actions — sending emails, modifying production data, transferring funds, deploying code — pause execution until a designated Approver explicitly signs off. Approvers see full context: the agent's reasoning, affected resources, and risk assessment before deciding.",
    icon: CheckCircle2,
  },
  {
    title: "Configurable risk levels",
    description:
      "Administrators set per-tool and per-action risk tiers: low, medium, high, and critical. Low-risk actions auto-execute. Medium requires Operator confirmation. High and critical require Approver sign-off. Risk tiers propagate to all agents in the workspace.",
    icon: AlertTriangle,
  },
];

const infrastructureItems = [
  {
    label: "Infrastructure provider",
    value: "Vercel",
    detail:
      "Deployed on Vercel's SOC 2 Type II and ISO 27001 certified infrastructure. Edge functions for low-latency orchestration, serverless compute for agent execution. Vercel handles DDoS mitigation, TLS termination, and CDN distribution.",
  },
  {
    label: "Agent runtime engine",
    value: "Hermes Agent",
    detail:
      "Headmaster agents run on the Hermes Agent engine, which provides sandboxed execution, structured tool calling, memory persistence, and real-heartbeat monitoring. Engine updates are rolled out with zero-downtime deployments.",
  },
  {
    label: "Encryption in transit",
    value: "TLS 1.3",
    detail:
      "All network traffic — API calls, websocket events, agent-to-tool communication — is encrypted in transit using TLS 1.3. HSTS is enforced. Certificate pinning is available for Enterprise customers.",
  },
  {
    label: "Access logging",
    value: "Full provenance",
    detail:
      "Every authentication event, API call, and admin action is logged with timestamp, actor identity, IP, and user-agent. Logs are shipped to a tamper-evident store and retained per your data retention policy.",
  },
];

const complianceBadges = [
  { label: "SOC 2 Type II", status: "Audit-ready" },
  { label: "GDPR", status: "Compliant" },
  { label: "AES-256", status: "At-rest encryption" },
  { label: "TLS 1.3", status: "In-transit encryption" },
  { label: "RBAC", status: "4-role model" },
  { label: "Audit logging", status: "Immutable" },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteNav />

      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[var(--bg)] pt-32 pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(0,0,0,0.035),transparent_60%)]" />

          <div className="relative z-10 max-w-[1280px] mx-auto px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
              <div className="inline-flex items-center border border-[var(--border-strong)] px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase text-[var(--text-muted)] mb-6">
                Security
              </div>

              <h1 className="text-wrap balance text-[clamp(2.8rem,4.5vw,5.5rem)] leading-[0.94] tracking-[-0.03em] font-semibold mb-6 max-w-4xl">
                Enterprise-grade security for AI workforces
              </h1>

              <p className="text-wrap balance text-[19px] md:text-[21px] tracking-[-0.3px] mb-9 text-[var(--text-muted)] max-w-[58ch] leading-snug">
                Headmaster gives organizations full control over what AI agents can see, do, and decide — with encryption, isolation, audit trails, and human approval baked into every layer.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#111111] text-[#F9F7F3] text-[15px] font-medium hover:bg-black active:scale-[0.97] transition-all" data-magnet>
                  Request a security briefing
                </Link>
                <Link href="/products/headmaster" className="inline-flex items-center justify-center px-9 py-3.5 rounded-full border border-[var(--border-strong)] text-[15px] font-medium hover:bg-white transition-all">
                  Learn about Headmaster
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Compliance badges ── */}
        <section className="max-w-[1280px] mx-auto px-8 py-16 border-b border-[var(--border)]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {complianceBadges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center text-center p-5 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)]">
                <div className="text-[15px] font-medium tracking-tight">{badge.label}</div>
                <div className="text-[12px] text-[var(--text-muted)] mt-1">{badge.status}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* ── Trust boundary ── */}
        <section className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-wrap balance text-[2rem] sm:text-[2.5rem] leading-tight tracking-[-0.02em] font-semibold mb-4">Trust boundary</h2>
            <p className="text-[17px] text-[var(--text-muted)] leading-relaxed">
              Every action in Headmaster passes through a trust boundary. Inside the workspace, agents draft, reason, and prepare. Outside the boundary — any action that reaches customers, modifies production data, or calls an external service — requires explicit human approval.
            </p>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[#0D0D0D] p-6 text-[#F9F7F3]">
            <div className="grid gap-4 lg:grid-cols-4 lg:items-stretch">
              {[
                { label: "User / Operator", desc: "Initiates work, reviews outcomes, and manages workspace membership." },
                { label: "Approval Gate", desc: "Blocks sensitive actions — emails, data writes, external calls — until an Approver signs off." },
                { label: "Headmaster Agent", desc: "Loads context from memory, reasons over tasks, delegates sub-work, and produces drafts for review." },
                { label: "Sandboxed tools & integrations", desc: "Executes scoped calls inside configured boundaries. Tools are denied by default and enabled per workspace." },
              ].map((step, index) => (
                <div key={step.label} className="relative rounded-2xl border border-white/15 bg-white/[0.06] p-5">
                  <div className="text-xs uppercase tracking-[0.18em] text-white/40">Step {index + 1}</div>
                  <div className="mt-2 text-lg font-medium">{step.label}</div>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{step.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-green-400/25 bg-green-400/10 p-4 text-sm text-green-100">
                <strong className="text-green-200">Inside workspace:</strong> agent memory, prompt context, drafts, run logs, approval decisions, permissioned credentials, and internal tool outputs.
              </div>
              <div className="rounded-2xl border border-amber-300/25 bg-amber-300/10 p-4 text-sm text-amber-100">
                <strong className="text-amber-200">Outside boundary:</strong> emails, client messages, production data writes, exports, webhooks, third-party API mutations, and any irreversible action.
              </div>
            </div>
          </div>
        </section>

        {/* ── Feature grid ── */}
        <section className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="text-wrap balance text-[2rem] sm:text-[2.5rem] leading-tight tracking-[-0.02em] font-semibold mb-4">How Headmaster protects your organization</h2>
            <p className="text-[17px] text-[var(--text-muted)] leading-relaxed max-w-3xl mb-16">
              Security isn't an add-on — it's the architecture. Every layer of Headmaster is designed so that AI agents operate within boundaries you define, with visibility into every decision they make.
            </p>
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
                  <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#F9F7F3] flex items-center justify-center mb-6 hover-scale-sm">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-[19px] font-medium tracking-tight mb-3">{feature.title}</h3>
                  <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── Role-based access detail ── */}
        <section className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-wrap balance text-[2rem] sm:text-[2.5rem] leading-tight tracking-[-0.02em] font-semibold mb-4">Role-based access</h2>
            <p className="text-[17px] text-[var(--text-muted)] leading-relaxed">
              Headmaster ships with four roles following least-privilege principles. Every role maps to a specific set of capabilities — no implicit access, no privilege escalation paths.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                role: "Viewer",
                desc: "Read-only access to workspace state, agent outputs, and audit logs. Can observe but not trigger actions or approve requests.",
                color: "blue",
              },
              {
                role: "Operator",
                desc: "Can initiate agent runs, execute low-risk tools, and draft outputs. Cannot approve sensitive actions or modify workspace settings.",
                color: "green",
              },
              {
                role: "Approver",
                desc: "All Operator capabilities plus the authority to approve or reject actions at the trust boundary — emails, data writes, external API calls.",
                color: "amber",
              },
              {
                role: "Admin",
                desc: "Full workspace management: role assignments, tool permissions, risk-tier configuration, audit log access, and integration settings.",
                color: "purple",
              },
            ].map((r, i) => {
              const colorMap: Record<string, { border: string; bg: string; dot: string }> = {
                blue: { border: "border-blue-400/25", bg: "bg-blue-400/10", dot: "bg-blue-400" },
                green: { border: "border-green-400/25", bg: "bg-green-400/10", dot: "bg-green-400" },
                amber: { border: "border-amber-400/25", bg: "bg-amber-400/10", dot: "bg-amber-400" },
                purple: { border: "border-purple-400/25", bg: "bg-purple-400/10", dot: "bg-purple-400" },
              };
              const c = colorMap[r.color];
              return (
                <motion.div key={r.role} {...t(i * 0.08)} className={`flex flex-col rounded-2xl border ${c.border} ${c.bg} p-6`}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-2.5 h-2.5 rounded-full ${c.dot}`} />
                    <h3 className="text-[19px] font-medium tracking-tight">{r.role}</h3>
                  </div>
                  <p className="text-[14px] text-[var(--text-muted)] leading-relaxed flex-1">{r.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── Infrastructure ── */}
        <section className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-wrap balance text-[2rem] sm:text-[2.5rem] leading-tight tracking-[-0.02em] font-semibold mb-4">Infrastructure & data</h2>
            <p className="text-[17px] text-[var(--text-muted)] leading-relaxed">
              Headmaster runs on infrastructure that meets enterprise compliance standards. Data flows, encryption boundaries, and subprocessor relationships are fully documented.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {infrastructureItems.map((item, i) => (
              <motion.div key={item.label} {...t(i * 0.08)} className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] group hover:border-[var(--border-strong)] transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#111111] text-[#F9F7F3] flex items-center justify-center hover-scale-sm">
                    <Server size={16} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">{item.label}</div>
                    <div className="text-[17px] font-medium tracking-tight">{item.value}</div>
                  </div>
                </div>
                <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="max-w-[1280px] mx-auto px-8 py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} viewport={{ once: true, margin: "-80px" }} className="rounded-2xl border border-[var(--border-strong)] bg-[#111111] text-[#F9F7F3] p-12 md:p-16 text-center">
            <h2 className="text-[32px] md:text-[42px] font-semibold tracking-[-0.02em] mb-6">Security is the product, not a feature</h2>
            <p className="text-[17px] text-[#F9F7F3]/70 max-w-[52ch] mx-auto mb-10">
              We offer security briefings for enterprise evaluations — covering architecture, data boundaries, compliance posture, and incident response. Our team can walk through any aspect of the platform in detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#F9F7F3] text-[#111111] text-[15px] font-medium hover:bg-white active:scale-[0.97] transition-all">
                Request a security briefing
              </Link>
              <Link href="/privacy" className="inline-flex items-center justify-center px-9 py-3.5 rounded-full border border-white/20 text-[15px] font-medium hover:border-white/40 transition-all">
                Read our privacy policy
              </Link>
            </div>
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