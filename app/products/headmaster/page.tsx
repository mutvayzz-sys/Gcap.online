import Image from "next/image";
import Link from "next/link";
import ProductShot from "@/components/ProductShot";
import FinalCTA from "@/components/FinalCTA";
import { productScreenshots } from "@/src/data/productScreenshots";

const overview = [
  "Persistent memory and workspace context",
  "Reusable workflows, skills, and automations",
  "Specialist agents with approved tools",
  "Human approvals, execution history, and auditability",
  "Channels, connectors, MCP servers, webhooks, API keys, and model routing",
];

function PageNav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo.svg" alt="GCAP Labs" className="h-8 w-auto" width={32} height={32} priority />
          <span className="text-[21px] font-medium tracking-[-0.8px]">GCAP</span>
        </Link>
        <div className="hidden items-center gap-8 text-[15px] md:flex">
          <Link href="/products/headmaster" className="text-[var(--text)]">Headmaster</Link>
          <Link href="/products/tayx" className="transition-colors hover:text-[var(--text-muted)]">TayX</Link>
          <Link href="/#use-cases" className="transition-colors hover:text-[var(--text-muted)]">Use Cases</Link>
          <a href="#contact" className="rounded-full bg-[#111111] px-6 py-[10px] text-sm text-[#F9F7F3] transition-colors hover:bg-black">Book a Demo</a>
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
              Headmaster is GCAP’s persistent AI workforce layer for organizations that need memory, tools, workflows, approvals, channels, automations, and model routing in one governed product.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="inline-flex justify-center rounded-full bg-[#111111] px-9 py-3.5 text-[15px] font-medium text-[#F9F7F3] transition-all hover:bg-black">
                Book a Demo
              </a>
              <a href="#guided-run" className="inline-flex justify-center rounded-full border border-[var(--border-strong)] px-9 py-3.5 text-[15px] font-medium transition-all hover:bg-white">
                View workflow proof
              </a>
            </div>
          </div>
          <ProductShot
            src="https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/01-dashboard-command-center.png"
            alt="Headmaster dashboard showing active runs, approvals, memory updates, automations, and system status."
            aspect="aspect-[16/10]"
            priority
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
                className={`grid gap-10 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div>
                  <div className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[var(--text-muted)]">{shot.eyebrow}</div>
                  <h3 className="text-[30px] font-medium leading-[1.08] tracking-[-1.2px] md:text-[42px] md:tracking-[-1.8px]">{shot.title}</h3>
                  <p className="mt-5 text-[17px] leading-relaxed text-[var(--text-muted)]">{shot.description}</p>
                  <ul className="mt-7 space-y-3">
                    {shot.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-[15px] text-[var(--text-muted)]">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#111111]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ProductShot src={shot.src} alt={shot.alt} aspect="aspect-[16/10]" />
              </article>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col justify-between gap-y-2 border-t border-[var(--border)] px-8 py-9 text-xs text-[var(--text-muted)] md:flex-row md:items-center">
        <div>© {new Date().getFullYear()} GCAP Labs. Headmaster is a persistent AI workforce layer.</div>
        <div className="flex flex-wrap gap-6">
          <Link href="/" className="transition-colors hover:text-[var(--text)]">Home</Link>
          <a href="/privacy" className="transition-colors hover:text-[var(--text)]">Privacy</a>
          <a href="/terms" className="transition-colors hover:text-[var(--text)]">Terms</a>
        </div>
      </footer>
    </div>
  );
}
