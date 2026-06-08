"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const EASE = [0.23, 1, 0.32, 1] as const;

const releases = [
  {
    version: "0.16.0",
    date: "June 5, 2026",
    tagline: "The Surface release",
    highlights: [
      "Headmaster Desktop App — native Electron app for macOS, Linux, and Windows with one-click install, in-app updates, drag-and-drop files, and Cmd+K command palette",
      "Web Dashboard → Full Admin Panel — browser-based MCP catalog, messaging channels, credentials, webhooks, memory, and gateway controls",
      "Quick Setup via Nous Portal — sign in, pick a model, start chatting immediately",
      "Fuzzy Model Picker everywhere — Desktop, Web, TUI, and CLI: type \"v4fl\" → deepseek-v4-flash",
      "/undo [N] — back up N turns, edit last message, soft-delete in between",
      "Simplified Chinese (简体中文) translation across Desktop and Dashboard",
      "205 issues closed, 170 community contributors",
    ],
  },
  {
    version: "0.15.0",
    date: "May 28, 2026",
    tagline: "The Velocity release",
    highlights: [
      "The Big Refactor — run_agent.py reduced from 16,083 → 3,821 lines (−76%). Code redistributed across 14 cohesive agent modules",
      "Kanban → Multi-Agent Platform — triage auto-decomposition, swarm graphs, per-task model overrides, drag-to-delete trash zone (104 PRs)",
      "Cold-Start Perf — another second shaved off launch. cold start: 701ms → 258ms. Termux cold start: 2.9s → 0.8s",
      "1,302 commits, 747 merged PRs, 321 community contributors",
    ],
  },
  {
    version: "0.11.0",
    date: "April 23, 2026",
    tagline: "The Interface release",
    highlights: [
      "Full React/Ink TUI rewrite with live streaming and OSC-52 clipboard",
      "Native AWS Bedrock support via Converse API",
      "GPT-5.5 via Codex OAuth with live model discovery",
      "QQBot — 17th supported messaging platform",
      "Plugin system: slash commands, tool dispatch, pre-call veto, result transform, custom dashboard tabs",
      "/steer — mid-run agent nudges without breaking prompt cache",
      "Shell hooks — wire any shell script to agent lifecycle events",
      "Webhook direct-delivery mode for zero-LLM push notifications",
      "Smarter subagent delegation — orchestrator role, configurable spawn depth, concurrent sibling file coordination",
      "Dashboard: extensible plugin system, live theme switching, i18n (EN + ZH), mobile-responsive",
    ],
  },
  {
    version: "0.10.0",
    date: "April 16, 2026",
    tagline: "The Tool Gateway release",
    highlights: [
      "Nous Tool Gateway: web search (Firecrawl), image generation (FLUX 2 Pro), TTS (OpenAI), browser automation — all through existing subscription, zero extra API keys",
    ],
  },
  {
    version: "0.9.0",
    date: "April 13, 2026",
    tagline: "The everywhere release",
    highlights: [
      "Android/Termux support — run Headmaster natively on mobile",
      "iMessage via BlueBubbles — 16th platform",
      "WeChat (Weixin) + WeCom — full Chinese messaging ecosystem",
      "Local web dashboard for managing agent, sessions, and skills",
      "Fast Mode (/fast) — priority processing for OpenAI and Anthropic models",
      "Background process monitoring with real-time pattern matching",
      "Pluggable context engine via plugin system",
      "headmaster backup + headmaster import — full state backup and restore",
      "16 supported platforms total",
      "Comprehensive security hardening pass",
    ],
  },
  {
    version: "0.8.0",
    date: "April 8, 2026",
    tagline: "The intelligence release",
    highlights: [
      "Background task auto-notifications — agent picks up results when processes finish, no polling",
      "Live model switching mid-session on any platform (/model)",
      "Self-optimized GPT/Codex tool-use — agent diagnosed and patched 5 failure modes",
      "Google AI Studio (Gemini) native provider",
      "Inactivity-based timeouts — only truly idle agents time out",
      "Approval buttons on Slack and Telegram (native platform UI)",
      "MCP OAuth 2.1 PKCE + OSV malware scanning",
      "Plugin system: CLI subcommands, session lifecycle hooks, API hooks with correlation IDs",
    ],
  },
  {
    version: "0.7.0",
    date: "April 3, 2026",
    tagline: "The resilience release",
    highlights: [
      "Pluggable memory provider interface — Honcho, vector stores, custom DBs",
      "Same-provider credential pools with automatic least-used rotation",
      "Camofox anti-detection browser backend with persistent sessions",
      "Inline diff previews on file write/patch operations",
      "ACP: editor MCP servers flow into agent (VS Code, Zed, JetBrains)",
      "Secret exfiltration blocking — URL encoding, base64, prompt injection all blocked",
      "API server session continuity + real-time tool streaming",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteNav />

      <main>
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[var(--bg)] pt-32 pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(0,0,0,0.035),transparent_60%)]" />

          <div className="relative z-10 max-w-[1280px] mx-auto px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
              <div className="inline-flex items-center border border-[var(--border-strong)] px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase text-[var(--text-muted)] mb-6">
                Changelog
              </div>

              <h1 className="text-wrap balance text-[clamp(2.8rem,4.5vw,5.5rem)] leading-[0.94] tracking-[-0.03em] font-semibold mb-6 max-w-4xl">
                Headmaster releases
              </h1>

              <p className="text-wrap balance text-[19px] md:text-[21px] tracking-[-0.3px] mb-9 text-[var(--text-muted)] max-w-[55ch] leading-snug">
                Track the latest updates and features. Headmaster ships continuously with improvements to agent capabilities, integrations, security, and performance.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="max-w-[900px] mx-auto px-8 py-24">
          <div className="space-y-12">
            {releases.map((release, i) => (
              <motion.div
                key={release.version}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
                viewport={{ once: true, margin: "-80px" }}
                className="border-l-2 border-[var(--border-strong)] pl-8 pb-8"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <div className="text-[11px] font-medium tracking-[2px] uppercase text-[var(--text-muted)] bg-[var(--bg-elevated)] px-3 py-1 rounded-full border border-[var(--border)]">
                    v{release.version}
                  </div>
                  <div className="text-[13px] text-[var(--text-muted)]">{release.date}</div>
                </div>

                <h2 className="text-[24px] font-semibold tracking-[-0.5px] mb-3">
                  {release.tagline && <span className="italic text-[var(--text-muted)]">&ldquo;{release.tagline}&rdquo;</span>}
                </h2>

                <ul className="space-y-2">
                  {release.highlights.map((highlight, j) => (
                    <li key={j} className="text-[15px] text-[var(--text-muted)] leading-relaxed flex gap-3">
                      <span className="text-[var(--text)] flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-[1280px] mx-auto px-8 py-24 border-t border-[var(--border)]">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} viewport={{ once: true, margin: "-80px" }} className="rounded-2xl border border-[var(--border-strong)] bg-[#111111] text-[#F9F7F3] p-12 md:p-16 text-center">
            <h2 className="text-[32px] md:text-[42px] font-semibold tracking-[-0.02em] mb-6">Ready to ship with Headmaster?</h2>
            <p className="text-[17px] text-[#F9F7F3]/70 max-w-[50ch] mx-auto mb-10">Talk to the GCAP team about deploying Headmaster for your organization.</p>
            <Link href="/contact" className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#F9F7F3] text-[#111111] text-[15px] font-medium hover:bg-white active:scale-[0.97] transition-all">
              See Headmaster in action
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
