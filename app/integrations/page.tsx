"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import MarqueeStrip, { type RowConfig } from "@/components/MarqueeStrip";
import { communicationPlatforms, connectors, modelProviders } from "@/src/data/platforms";
import SiteNav from "@/components/SiteNav";
import { MessageSquare, Database, Code, Zap } from "lucide-react";

const EASE = [0.23, 1, 0.32, 1] as const;

const categories = [
  {
    title: "Communication Channels",
    description: "Start tasks and receive updates through your preferred messaging platform. Headmaster integrates with all major team communication tools.",
    icon: MessageSquare,
    count: communicationPlatforms.length,
  },
  {
    title: "AI Model Providers",
    description: "Use any model — Claude, GPT-4, Gemini, Llama, Mistral, and 300+ others. Switch models per task or per agent. Pay for what you use.",
    icon: Zap,
    count: modelProviders.length,
  },
  {
    title: "Data & Storage",
    description: "Connect to Google Drive, Notion, GitHub, Linear, Confluence, and other tools. Headmaster reads and writes as part of workflows.",
    icon: Database,
    count: connectors.length,
  },
  {
    title: "Custom APIs & Webhooks",
    description: "Build custom integrations with your internal tools. Headmaster can call any REST API or webhook as part of an agent workflow.",
    icon: Code,
    count: "∞",
  },
];

const marqueeRows: RowConfig[] = [
  { filter: "model", label: "AI Model Providers" },
  { filter: "channel", label: "Communication Channels" },
  { filter: "connector", label: "Data & Connectors" },
];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteNav />

      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[var(--bg)] pt-32 pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(0,0,0,0.035),transparent_60%)]" />

          <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
              <div className="inline-flex items-center border border-[var(--border-strong)] px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase text-[var(--text-muted)] mb-6">
                Headmaster Platform
              </div>

              <h1 className="text-wrap balance text-[clamp(2.8rem,4.5vw,5.5rem)] leading-[0.94] tracking-[-0.03em] font-semibold mb-6 max-w-4xl">
                Connect everything. Agent workflows work everywhere.
              </h1>

              <p className="text-wrap balance text-[19px] md:text-[21px] tracking-[-0.3px] mb-9 text-[var(--text-muted)] max-w-[55ch] leading-snug">
                Headmaster integrates with 17+ communication platforms, 300+ AI models, and all your favorite tools. One workflow, infinite possibilities.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#111111] text-[#F9F7F3] text-[15px] font-medium hover:bg-black active:scale-[0.97] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9F7F3]"
                  data-magnet
                >
                  Request a deployment
                </Link>
                <Link
                  href="/products/headmaster"
                  className="inline-flex items-center justify-center px-9 py-3.5 rounded-full border border-[var(--border-strong)] text-[15px] font-medium hover:bg-white transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)]"
                >
                  Learn about Headmaster
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Integration categories */}
        <section className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] md:text-[48px] font-semibold tracking-[-1.2px] mb-4">
              Named platform coverage
            </h2>
            <p className="text-[18px] text-[var(--text-muted)] max-w-2xl mx-auto">
              Browse the named platform categories Headmaster can route through today, with custom APIs and webhooks for internal systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8 hover:border-[var(--border-strong)] transition-colors"
                >
                  <Icon className="w-8 h-8 text-[var(--text)] mb-4" />
                  <h3 className="text-[20px] font-semibold mb-3">{cat.title}</h3>
                  <p className="text-[15px] text-[var(--text-muted)] mb-4 leading-relaxed">{cat.description}</p>
                  <div className="inline-flex items-baseline gap-2">
                    <span className="text-[24px] font-semibold text-[var(--text)]">{cat.count}</span>
                    <span className="text-[12px] text-[var(--text-muted)] uppercase tracking-widest">integrations</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Marquee showcase */}
        <section className="relative overflow-hidden bg-[var(--bg)] py-24 border-b border-[var(--border)]">
          <div className="max-w-[1400px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              viewport={{ once: true, margin: "-80px" }}
              className="text-center mb-12 px-8"
            >
              <h2 className="text-[28px] md:text-[36px] font-semibold tracking-[-0.8px] mb-3">
                Full platform directory
              </h2>
              <p className="text-[15px] text-[var(--text-muted)]">
                Scroll to explore all integrations and their capabilities
              </p>
            </motion.div>

            <MarqueeStrip rows={marqueeRows} duration={40} />
          </div>
        </section>


        {/* Scannable platform list */}
        <section className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]">
          <div className="mb-12 max-w-3xl">
            <h2 className="text-[32px] md:text-[44px] font-semibold tracking-[-1.2px] mb-4">All supported platforms</h2>
            <p className="text-[17px] text-[var(--text-muted)] leading-relaxed">A scannable list for buyers who need to verify a specific channel, model provider, or connector without waiting for the marquee.</p>
          </div>
          {[
            ["Communication platforms", communicationPlatforms],
            ["Model providers", modelProviders],
            ["Connectors", connectors],
          ].map(([label, items]) => (
            <div key={label as string} className="mb-12 last:mb-0">
              <h3 className="mb-4 text-[18px] font-semibold tracking-tight">{label as string}</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {(items as typeof communicationPlatforms).map((item) => (
                  <div key={item.name} className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5">
                    <div className="text-[15px] font-medium text-[var(--text)]">{item.name}</div>
                    <p className="mt-2 text-[13px] leading-relaxed text-[var(--text-muted)]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* How it works */}
        <section className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-3xl"
          >
            <h2 className="text-[32px] font-semibold tracking-[-1.2px] mb-8">
              How integration works
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-[18px] font-semibold mb-2 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#111111] text-[#F9F7F3] text-sm font-bold">1</span>
                  Connect your tools
                </h3>
                <p className="text-[15px] text-[var(--text-muted)] ml-11">
                  Authenticate with any platform using OAuth 2.0 or API keys. Headmaster securely stores and rotates credentials.
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold mb-2 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#111111] text-[#F9F7F3] text-sm font-bold">2</span>
                  Grant scoped permissions
                </h3>
                <p className="text-[15px] text-[var(--text-muted)] ml-11">
                  Define exactly what each agent can do. Read-only access, write to specific folders, call specific APIs. Full control stays with you.
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold mb-2 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#111111] text-[#F9F7F3] text-sm font-bold">3</span>
                  Build your workflow
                </h3>
                <p className="text-[15px] text-[var(--text-muted)] ml-11">
                  Use natural language to describe what you need. Agents will call the right APIs, read files, send messages, and more — automatically.
                </p>
              </div>

              <div>
                <h3 className="text-[18px] font-semibold mb-2 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#111111] text-[#F9F7F3] text-sm font-bold">4</span>
                  Monitor & audit everything
                </h3>
                <p className="text-[15px] text-[var(--text-muted)] ml-11">
                  See every API call, every integration access, every approval. Full transparency and control. Export logs and integrate with your compliance systems.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="max-w-[1120px] mx-auto px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <h2 className="text-[36px] md:text-[48px] tracking-[-1.6px] md:tracking-[-2.2px] font-semibold mb-6 leading-tight">
                Ready to automate with confidence?
              </h2>
              <p className="text-[18px] md:text-[20px] text-[var(--text-muted)] mb-8">
                Deploy Headmaster in your environment and connect all your tools in under an hour.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#111111] text-[#F9F7F3] text-[15px] font-medium hover:bg-black active:scale-[0.97] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9F7F3]"
                data-magnet
              >
                Request a deployment call
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-9 text-xs text-[var(--text-muted)] px-8 flex flex-col md:flex-row gap-y-2 md:items-center justify-between max-w-6xl mx-auto">
        <div>© 2026 GCAP Labs. Headmaster — persistent AI agents for organizations.</div>
        <div className="flex gap-6 flex-wrap">
          <a href="/security" className="hover:text-[var(--text)] transition-colors">Security</a>
          <a href="/changelog" className="hover:text-[var(--text)] transition-colors">Changelog</a>
          <a href="/privacy" className="hover:text-[var(--text)] transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-[var(--text)] transition-colors">Terms</a>
        </div>
      </footer>
    </div>
  );
}
