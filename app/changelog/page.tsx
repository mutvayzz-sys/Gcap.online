"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

const EASE = [0.23, 1, 0.32, 1] as const;

const releases = [
  {
    date: "June 2026",
    tagline: "The Surface release",
    highlights: [
      "Desktop App — one-click install for macOS, Windows, and Linux with in-app updates, drag-and-drop file support, and keyboard shortcuts",
      "Full Admin Panel — manage messaging channels, model configs, credentials, webhooks, and agent memory from your browser",
      "Quick Setup — sign in, pick a model, start working immediately",
      "Smart Model Search — type a few letters and find the right model instantly",
      "Undo — back up recent turns, edit a message, keep the conversation going",
      "Simplified Chinese language support across Desktop and Dashboard",
      "205 issues resolved, 170 community contributors",
    ],
  },
  {
    date: "May 2026",
    tagline: "The Velocity release",
    highlights: [
      "Architecture overhaul — core agent engine streamlined by 76%, redistributed across 14 focused modules for reliability and speed",
      "Multi-Agent Platform — automatic task breakdown, swarm coordination, per-task model selection, and drag-to-delete task management",
      "Cold-Start Performance — launch time cut from 700ms to under 260ms. Mobile launch from 2.9s to under 1s",
      "1,302 commits, 747 merged PRs, 321 community contributors",
    ],
  },
  {
    date: "April 2026",
    tagline: "The Interface release",
    highlights: [
      "Complete interface redesign with live streaming and clipboard support",
      "AWS Bedrock cloud models — native integration",
      "GPT-5.5 support with automatic model discovery",
      "Two more messaging platforms — now supporting 17 total",
      "Plugin system — custom slash commands, tool dispatch, pre-call filters, result transforms, dashboard tabs",
      "Mid-run steering — redirect an agent mid-task without breaking context",
      "Shell hooks — trigger scripts on agent lifecycle events",
      "Push notification delivery for zero-latency alerts",
      "Smarter subagent delegation — orchestrator role, concurrent coordination, configurable depth limits",
      "Extensible dashboard with themes, language support, and mobile-responsive layout",
    ],
  },
  {
    date: "April 2026",
    tagline: "The Tool Gateway release",
    highlights: [
      "Built-in tool suite — web search, image generation, text-to-speech, browser automation — all included with your subscription, no extra API keys needed",
    ],
  },
  {
    date: "April 2026",
    tagline: "The Everywhere release",
    highlights: [
      "Native mobile support — run Headmaster on Android devices",
      "iMessage integration — reach your agent through Apple Messages",
      "Chinese messaging platforms fully supported",
      "Local web dashboard for managing agents, sessions, and skills",
      "Fast Mode — priority processing for time-sensitive tasks",
      "Background process monitoring with real-time pattern detection",
      "Pluggable context engine via plugin system",
      "Full backup and restore — export and import your entire agent state",
      "14 messaging platforms supported",
      "Comprehensive security hardening",
    ],
  },
  {
    date: "April 2026",
    tagline: "The Intelligence release",
    highlights: [
      "Auto-notifications — agent picks up results when background tasks finish, no polling needed",
      "Live model switching — change models mid-session on any platform",
      "Self-healing tool use — agent diagnoses and patches its own failure modes",
      "Google AI Studio (Gemini) native integration",
      "Smart timeouts — only truly idle agents expire",
      "Approval buttons on Slack and Telegram with native platform UI",
      "OAuth 2.1 security with malware scanning for external tools",
      "Plugin system — CLI subcommands, session lifecycle hooks, API hooks with event tracking",
    ],
  },
  {
    date: "April 2026",
    tagline: "The Resilience release",
    highlights: [
      "Pluggable memory providers — connect vector stores, custom databases, or managed memory services",
      "Credential rotation — automatic least-used key selection across providers",
      "Anti-detection browser backend for persistent web sessions",
      "Inline diff previews on file edits",
      "Editor integration — VS Code, Zed, and JetBrains agents pipe directly into Headmaster",
      "Secret exfiltration blocking — URL encoding, base64, and prompt injection attacks all stopped",
      "Continuous API session handling with real-time tool streaming",
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
                key={release.date + release.tagline}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
                viewport={{ once: true, margin: "-80px" }}
                className="border-l-2 border-[var(--border-strong)] pl-8 pb-8"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <div className="text-[11px] font-medium tracking-[2px] uppercase text-[var(--text-muted)] bg-[var(--bg-elevated)] px-3 py-1 rounded-full border border-[var(--border)]">
                    {release.tagline.split(" ")[1]}
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