import Image from "next/image";
import Link from "next/link";
import ProductShot from "@/components/ProductShot";
import ProductLightbox from "@/components/ProductLightbox";
import FinalCTA from "@/components/FinalCTA";
import { productScreenshots } from "@/src/data/productScreenshots";

const overview = [
  "Persistent memory and workspace context",
  "Reusable workflows, skills, and automations",
  "Specialist agents with approved tools",
  "Human approvals, execution history, and auditability",
  "Channels, connectors, MCP servers, webhooks, API keys, and model routing",
];

const heroImage = {
  src: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/01-dashboard-command-center.png",
  alt: "Headmaster dashboard showing active runs, approvals, memory updates, automations, and system status.",
};

// All images for lightbox navigation
const allImages: readonly { src: string; alt: string }[] = [heroImage, ...productScreenshots];

export const metadata = {
  title: "Headmaster — GCAP Labs",
  description: "The full Headmaster command layer. Persistent AI workforce for organizations that need memory, tools, workflows, approvals, and model routing.",
};

function PageNav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-8">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">
          <Image src="/images/logo.svg" alt="GCAP Labs" className="h-8 w-auto" width={32} height={32} priority />
          <span className="text-[21px] font-medium tracking-[-0.8px]">GCAP</span>
        </Link>
        <div className="hidden items-center gap-8 text-[15px] md:flex">
          <Link href="/products/headmaster" className="text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Headmaster</Link>
          <Link href="/products/hq" className="transition-colors hover:text-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">HQ</Link>
          <Link href="/products/tayx" className="transition-colors hover:text-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">TayX</Link>
          <Link href="/#use-cases" className="transition-colors hover:text-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Use Cases</Link>
          <Link href="/contact" className="rounded-full bg-[#111111] px-6 py-[10px] text-sm text-[#F9F7F3] transition-colors hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9F7F3]">Book a Demo</Link>
        </div>
      </div>
    </nav>
  );
}

export default function HeadmasterProductPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <PageNav />

      <main>
        <section className="mx-auto grid max-w-[1280px] gap-12 px-8 pb-20 pt-36 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex border border-[var(--border-strong)] px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
              Headmaster Product
            </div>
            <h1 className="text-[44px] font-semibold leading-[0.96] tracking-[-2.4px] sm:text-[58px] md:text-[68px] md:tracking-[-3.6px]">
              The full Headmaster command layer.
            </h1>
            <p className="mt-7 max-w-[43ch] text-[19px] leading-snug tracking-[-0.3px] text-[var(--text-muted)] md:text-[21px]">
              Headmaster is GCAP&apos;s persistent AI workforce layer for organizations that need memory, tools, workflows, approvals, channels, automations, and model routing in one governed product.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex justify-center rounded-full bg-[#111111] px-9 py-3.5 text-[15px] font-medium text-[#F9F7F3] transition-all hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9F7F3]">
                Book a Demo
              </a>
              <a href="#guided-run" className="inline-flex justify-center rounded-full border border-[var(--border-strong)] px-9 py-3.5 text-[15px] font-medium transition-all hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)]">
                View workflow proof
              </a>
            </div>
          </div>

          <ProductShot
            src={heroImage.src}
            alt={heroImage.alt}
            aspect="aspect-[16/10]"
            priority
            data-lightbox="0"
          />
        </section>

        <section className="border-y border-[var(--border)] bg-white py-16">
          <div className="mx-auto max-w-[1120px] px-8">
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.26em] text-[var(--text-muted)]">Overview</div>
            <h2 className="max-w-4xl text-[34px] font-medium leading-[1.05] tracking-[-1.4px] md:text-[50px] md:tracking-[-2.1px]">
              One product for the work behind the prompt.
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {overview.map((item) => (
                <div key={item} className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 text-[15px] font-medium tracking-tight">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-8 py-24">
          <div className="mb-14 max-w-3xl">
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.26em] text-[var(--text-muted)]">Product Story</div>
            <h2 className="text-[36px] font-medium leading-[1.05] tracking-[-1.4px] md:text-[52px] md:tracking-[-2.2px]">
              The complete Headmaster workflow, screen by screen.
            </h2>
            <p className="mt-5 text-[18px] leading-relaxed text-[var(--text-muted)] md:text-[20px]">
              The homepage stays broad. This page holds the deeper product details, including integrations configuration and the model stack.
            </p>
          </div>

          <div className="space-y-20">
            {productScreenshots.map((shot, index) => (
              <article
                key={shot.id}
                id={shot.id}
                className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[var(--text-muted)]">
                    {shot.eyebrow}
                  </div>
                  <h3 className="text-[30px] font-medium leading-[1.08] tracking-[-1.2px] md:text-[42px] md:tracking-[-1.8px]">
                    {shot.title}
                  </h3>
                  <p className="mt-5 text-[17px] leading-relaxed text-[var(--text-muted)]">
                    {shot.description}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {shot.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[15px] text-[var(--text-muted)]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#111111]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ProductShot
                  src={shot.src}
                  alt={shot.alt}
                  aspect="aspect-[16/10]"
                  data-lightbox={String(index + 1)}
                />
              </article>
            ))}
          </div>
        </section>

        {/* Agent Capabilities */}
        <section className="mx-auto max-w-[1280px] px-8 py-24 border-b border-[var(--border)]">
          <div className="mb-16">
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.26em] text-[var(--text-muted)]">Agent Capabilities</div>
            <h2 className="text-[36px] font-medium leading-[1.05] tracking-[-1.4px] md:text-[52px] md:tracking-[-2.2px]">
              Built for the real work your organization does.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8">
              <h3 className="text-[22px] font-semibold tracking-tight mb-3">17 messaging platforms</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-4">
                Telegram, Discord, Slack, WhatsApp, Signal, iMessage (BlueBubbles), WeChat, WeCom, QQBot, Matrix, Email, SMS, DingTalk, Feishu, Mattermost, Home Assistant, Webhooks. One agent. Every surface.
              </p>
              <p className="text-[13px] text-[var(--text-muted)]">Grouped as: Messaging, Enterprise, Dev & Infra</p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8">
              <h3 className="text-[22px] font-semibold tracking-tight mb-3">300+ model providers</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-4">
                Anthropic Claude, OpenAI GPT-5.5, Google Gemini, AWS Bedrock, NVIDIA NIM, xAI Grok, Kimi K2.6, Xiaomi MiMo, Ollama (local), OpenRouter, Vercel AI Gateway, Arcee AI, and more.
              </p>
              <p className="text-[13px] text-[var(--text-muted)]">Live model switching mid-session. Fast Mode for priority processing.</p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8">
              <h3 className="text-[22px] font-semibold tracking-tight mb-3">Subagent delegation</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-4">
                Isolated subagents with their own conversations, terminals, and Python RPC scripts. Orchestrator role can spawn its own workers.
              </p>
              <p className="text-[13px] text-[var(--text-muted)]">Configurable spawn depth. Concurrent siblings share filesystem state without conflicts.</p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8">
              <h3 className="text-[22px] font-semibold tracking-tight mb-3">Five sandbox backends</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-4">
                Local, Docker, SSH, Singularity, Modal. Container hardening and namespace isolation.
              </p>
              <p className="text-[13px] text-[var(--text-muted)]">Real isolation, not a shell wrapper.</p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8">
              <h3 className="text-[22px] font-semibold tracking-tight mb-3">Plugin system</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-4">
                Register slash commands, dispatch tools, veto tool execution pre-call, rewrite tool results, transform terminal output, add custom dashboard tabs, ship custom image gen backends.
              </p>
              <p className="text-[13px] text-[var(--text-muted)]">Full lifecycle hooks.</p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8">
              <h3 className="text-[22px] font-semibold tracking-tight mb-3">/steer — mid-run nudges</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-4">
                Inject a note the running agent sees after its next tool call, without interrupting the turn or breaking prompt cache.
              </p>
              <p className="text-[13px] text-[var(--text-muted)]">Course-correct in flight.</p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8">
              <h3 className="text-[22px] font-semibold tracking-tight mb-3">Fast Mode</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-4">
                Priority processing for OpenAI and Anthropic models. Toggle /fast to route through priority queues.
              </p>
              <p className="text-[13px] text-[var(--text-muted)]">Significantly lower latency.</p>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-8">
              <h3 className="text-[22px] font-semibold tracking-tight mb-3">Backup & restore</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed mb-4">
                Full backup and restore of configuration, sessions, skills, and memory. Migrate between machines or snapshot before major changes.
              </p>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <ProductLightbox images={allImages} />

      <footer className="mx-auto flex max-w-6xl flex-col justify-between gap-y-2 border-t border-[var(--border)] px-8 py-9 text-xs text-[var(--text-muted)] md:flex-row md:items-center">
        <div>© 2026 GCAP Labs. Headmaster — persistent AI agents for organizations.</div>
        <div className="flex flex-wrap gap-6">
          <Link href="/" className="transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Home</Link>
          <Link href="/security" className="transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Security</Link>
          <Link href="/changelog" className="transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Changelog</Link>
          <a href="/privacy" className="transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Privacy</a>
          <a href="/terms" className="transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Terms</a>
        </div>
      </footer>
    </div>
  );
}