"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import { useCases } from "@/src/data/useCases";
import { ArrowRight } from "lucide-react";

const EASE = [0.23, 1, 0.32, 1] as const;

const t = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
});

export default function UseCasesPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <SiteNav />

      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[var(--bg)] pt-32 pb-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(0,0,0,0.035),transparent_60%)]" />

          <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full">
            <motion.div {...t(0)}>
              <div className="inline-flex items-center border border-[var(--border-strong)] px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase text-[var(--text-muted)] mb-6">
                Use Cases
              </div>

              <h1 className="text-wrap balance text-[clamp(2.8rem,4.5vw,5.5rem)] leading-[0.94] tracking-[-0.03em] font-semibold mb-6 max-w-4xl">
                Built for every organization.
              </h1>

              <p className="text-wrap balance text-[19px] md:text-[21px] tracking-[-0.3px] mb-9 text-[var(--text-muted)] max-w-[55ch] leading-snug">
                Headmaster adapts to the workflows of different organizations without changing the core system. One persistent layer, many verticals.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#111111] text-[#F9F7F3] text-[15px] font-medium hover:bg-black active:scale-[0.97] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9F7F3]"
                data-magnet
              >
                Start a deployment
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Use case cards */}
        <section className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]">
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((uc, i) => {
              return (
                <motion.div
                  key={uc.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.08 }}
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <Link
                    href={`/use-cases/${uc.slug}`}
                    className="group block h-full rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-10 hover:border-[var(--border-strong)] transition-all"
                  >
                    <h2 className="text-[28px] font-semibold tracking-tight mb-4 group-hover:text-[var(--text-muted)] transition-colors">
                      {uc.title}
                    </h2>
                    <p className="text-[16px] text-[var(--text-muted)] leading-relaxed mb-6">
                      {uc.description}
                    </p>
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        <span className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-[12px] font-medium text-[var(--text)]">
                          Saves {uc.savings}
                        </span>
                        <span className="rounded-full border border-[var(--border)] bg-[var(--bg)] px-3 py-1 text-[12px] font-medium text-[var(--text-muted)]">
                          {uc.workflowCount} workflows automated
                        </span>
                      </div>
                      <p className="mt-2 text-[12px] leading-snug text-[var(--text-muted)]">
                        {uc.savingsSource}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--text)] group-hover:gap-3 transition-all">
                      Explore workflows
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
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
                Don&apos;t see your use case?
              </h2>
              <p className="text-[18px] md:text-[20px] text-[var(--text-muted)] mb-8">
                Headmaster is built to handle any workflow. Let&apos;s discuss your organization&apos;s unique needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#111111] text-[#F9F7F3] text-[15px] font-medium hover:bg-black active:scale-[0.97] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9F7F3]"
                data-magnet
              >
                Discuss a deployment
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-9 text-xs text-[var(--text-muted)] px-8 flex flex-col md:flex-row gap-y-2 md:items-center justify-between max-w-6xl mx-auto">
        <div>© 2026 GCAP Labs. Headmaster — persistent AI agents for organizations.</div>
        <div className="flex gap-6 flex-wrap">
          <a href="/security" className="hover:text-[var(--text)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Security</a>
          <a href="/changelog" className="hover:text-[var(--text)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Changelog</a>
          <a href="/privacy" className="hover:text-[var(--text)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Privacy</a>
          <a href="/terms" className="hover:text-[var(--text)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] rounded">Terms</a>
        </div>
      </footer>
    </div>
  );
}
