"use client";

import { motion } from "framer-motion";
import ProductShot from "./ProductShot";

const EASE = [0.16, 1, 0.3, 1] as const;

const t = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
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
            className="inline-flex items-center rounded-full border border-[var(--border)] bg-white px-4 py-1 text-xs tracking-[2px] uppercase text-[var(--text-muted)] mb-6"
          >
            Headmaster by GCAP Labs
          </motion.div>

          <motion.h1
            {...t(0.1)}
            className="text-[42px] sm:text-[56px] md:text-[64px] leading-[0.94] tracking-[-2.8px] md:tracking-[-3.8px] font-semibold mb-6 text-[var(--text)]"
          >
            Persistent AI agents<br />for organizations that<br />run on repeat work.
          </motion.h1>

          <motion.p
            {...t(0.2)}
            className="text-[19px] md:text-[21px] tracking-[-0.3px] mb-9 text-[var(--text-muted)] max-w-[38ch] leading-snug"
          >
            Headmaster remembers context, learns workflows, connects to tools, schedules recurring work, and routes sensitive actions through human approval.
          </motion.p>

          <motion.div
            {...t(0.3)}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#111111] text-[#F9F7F3] text-[15px] font-medium hover:bg-black active:scale-[0.985] transition-all"
              data-magnet
            >
              Book a Demo
            </a>
            <a
              href="#product"
              className="inline-flex items-center justify-center px-9 py-3.5 rounded-full border border-[var(--border-strong)] text-[15px] font-medium hover:bg-white transition-all"
            >
              Explore the System
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
