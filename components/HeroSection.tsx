"use client";

import { motion } from "framer-motion";
import ProductShot from "./ProductShot";

const EASE = [0.23, 1, 0.32, 1] as const;

const t = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: EASE, delay },
});

export default function HeroSection() {
  return (
    <section
      id="top"
      data-chapter="top"
      data-label="Start"
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[var(--bg)] pt-20 pb-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(0,0,0,0.035),transparent_60%)]" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        {/* Copy */}
        <div>
          <motion.div
            {...t(0)}
            className="inline-flex items-center border border-[var(--border-strong)] px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase text-[var(--text-muted)] mb-6"
          >
            Headmaster by GCAP Labs
          </motion.div>

          <motion.h1
            {...t(0.05)}
            className="text-wrap balance text-[clamp(2.8rem,4.5vw,5.5rem)] leading-[0.94] tracking-[-0.03em] font-semibold mb-6 text-[var(--text)]"
          >
            The AI agent that runs<br />your organization.<br />While you sleep.
          </motion.h1>

          <motion.p
            {...t(0.1)}
            className="text-wrap balance text-[19px] md:text-[21px] tracking-[-0.3px] mb-9 text-[var(--text-muted)] max-w-[55ch] leading-snug"
          >
            Persistent memory. 17 messaging platforms. 300+ models. Subagent delegation. Human approvals. Headmaster works unattended — and waits for your sign-off before anything important leaves the workspace.
          </motion.p>

          <motion.div
            {...t(0.15)}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#111111] text-[#F9F7F3] text-[15px] font-medium hover:bg-black active:scale-[0.97] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9F7F3]"
              data-magnet
            >
              See Headmaster in action
            </a>
            <a
              href="#product"
              className="inline-flex items-center justify-center px-9 py-3.5 rounded-full border border-[var(--border-strong)] text-[15px] font-medium hover:bg-white transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)]"
            >
              Walk through a live run
            </a>
          </motion.div>
        </div>

        {/* Product proof — real dashboard screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
          className="relative mx-auto w-full max-w-[640px]"
        >
          <ProductShot
            src="https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/01-dashboard-command-center.png"
            alt="Headmaster dashboard showing active runs, approvals, memory updates, automations, and system status."
            aspect="aspect-[16/10]"
            priority
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[3px] uppercase text-[var(--text-muted)] z-10"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}
