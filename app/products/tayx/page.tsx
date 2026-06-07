import Image from "next/image";
import Link from "next/link";
import LightboxImage from "@/components/LightboxImage";
import FinalCTA from "@/components/FinalCTA";

const capabilities = [
  {
    title: "Agentic workflows",
    body: "Designed for planning, tool use, delegation, and multi-step execution across Headmaster workflows.",
  },
  {
    title: "Coding and review",
    body: "Trained for code understanding, generation, review, documentation, and technical reasoning tasks.",
  },
  {
    title: "Long-context reasoning",
    body: "Optimized for work that spans large documents, project history, threads, and structured workspace context.",
  },
  {
    title: "Tool-heavy work",
    body: "Fine-tuned for workflows that move through files, browsers, calendars, connected systems, and approvals.",
  },
];

function PageNav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-8">
        <Link href="/" className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">
          <Image src="/images/logo.svg" alt="GCAP Labs" className="h-8 w-auto" width={32} height={32} priority />
          <span className="text-[21px] font-medium tracking-[-0.8px]">GCAP</span>
        </Link>
        <div className="hidden items-center gap-8 text-[15px] md:flex">
          <Link href="/products/headmaster" className="transition-colors hover:text-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Headmaster</Link>
          <Link href="/products/hq" className="transition-colors hover:text-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">HQ</Link>
          <Link href="/products/tayx" className="text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">TayX</Link>
          <Link href="/#use-cases" className="transition-colors hover:text-[var(--text-muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Use Cases</Link>
          <Link href="/contact" className="rounded-full bg-[#111111] px-6 py-[10px] text-sm text-[#F9F7F3] transition-colors hover:bg-black active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9F7F3]">Book a Demo</Link>
        </div>
      </div>
    </nav>
  );
}

export default function TayXProductPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <PageNav />

      <main>
        <section className="mx-auto grid max-w-[1280px] gap-12 px-8 pb-20 pt-36 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex border border-[var(--border-strong)] px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
              GCAP Model Layer
            </div>
            <h1 className="text-[44px] font-semibold leading-[0.96] tracking-[-2.4px] sm:text-[58px] md:text-[68px] md:tracking-[-3.6px]">
              TayX is GCAP's trained and fine-tuned model layer.
            </h1>
            <p className="mt-7 max-w-[43ch] text-[19px] leading-snug tracking-[-0.3px] text-[var(--text-muted)] md:text-[21px]">
              TayX is separate from Headmaster. Headmaster is the product and orchestration layer; TayX is GCAP's own tuned model option for agentic work, coding, research, long-context reasoning, and tool-heavy workflows.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/products/headmaster" className="inline-flex justify-center rounded-full bg-[#111111] px-9 py-3.5 text-[15px] font-medium text-[#F9F7F3] transition-all hover:bg-black active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9F7F3]">
                Explore Headmaster
              </Link>
              <Link href="/contact" className="inline-flex justify-center rounded-full border border-[var(--border-strong)] px-9 py-3.5 text-[15px] font-medium transition-all hover:bg-white active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)]">
                Discuss a Deployment
              </Link>
            </div>
          </div>
          <LightboxImage
            src="https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/11-model-stack-providers-tayx.png"
            alt="Model stack page showing TayX, cloud models, coding models, local models, and enterprise endpoints."
            aspect="aspect-[16/10]"
            priority
          />
        </section>

        <section className="border-y border-[var(--border)] bg-white py-20">
          <div className="mx-auto grid max-w-[1120px] gap-12 px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="mb-4 text-xs font-medium uppercase tracking-[0.26em] text-[var(--text-muted)]">Relationship to Headmaster</div>
              <h2 className="text-[34px] font-medium leading-[1.05] tracking-[-1.4px] md:text-[50px] md:tracking-[-2.1px]">
                Model-agnostic product. GCAP-tuned model option.
              </h2>
            </div>
            <div className="space-y-5 text-[17px] leading-relaxed text-[var(--text-muted)]">
              <p>
                Headmaster can route work across cloud models, coding models, local models, enterprise endpoints, custom endpoints, and TayX. TayX does not replace that model-agnostic relationship.
              </p>
              <p>
                TayX gives GCAP a trained and fine-tuned model layer for workflows where GCAP's tuning, evaluation, and product context are the best fit. No benchmark claims are made here without verified proof.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] px-8 py-24">
          <div className="mb-12 max-w-3xl">
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.26em] text-[var(--text-muted)]">Designed For</div>
            <h2 className="text-[36px] font-medium leading-[1.05] tracking-[-1.4px] md:text-[52px] md:tracking-[-2.2px]">
              Tuned for the work agents actually do.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((capability) => (
              <div key={capability.title} className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7">
                <h3 className="mb-3 text-[23px] font-medium tracking-tight">{capability.title}</h3>
                <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">{capability.body}</p>
              </div>
            ))}
          </div>
        </section>

        <FinalCTA />
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col justify-between gap-y-2 border-t border-[var(--border)] px-8 py-9 text-xs text-[var(--text-muted)] md:flex-row md:items-center">
        <div>© 2026 GCAP Labs. TayX is GCAP's model layer.</div>
        <div className="flex flex-wrap gap-6">
          <Link href="/" className="transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Home</Link>
          <Link href="/security" className="transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Security</Link>
          <Link href="/changelog" className="transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Changelog</Link>
          <Link href="/privacy" className="transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Privacy</Link>
          <Link href="/terms" className="transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Terms</Link>
        </div>
      </footer>
    </div>
  );
}
