"use client";

import { motion } from "framer-motion";
import { Shield, Lock, FileCheck } from "lucide-react";
import ProductShot from "./ProductShot";

const EASE = [0.23, 1, 0.32, 1] as const;

const t = (delay: number) => ({
  initial: { opacity: 0, transform: "translateY(16px)" },
  animate: { opacity: 1, transform: "translateY(0px)" },
  transition: { duration: 0.6, ease: EASE, delay },
});

const trustSignals = [
  { icon: Shield, label: "SOC 2 Type II" },
  { icon: Lock, label: "AES-256 Encrypted" },
  { icon: FileCheck, label: "Audit Trail" },
];

export default function HeroSection() {
  return (
    <section
      id="top"
      data-chapter="top"
      data-label="Start"
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[var(--bg)] pt-24 pb-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_22%,rgba(17,17,17,0.22),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(120,105,80,0.18),transparent_30%),radial-gradient(circle_at_58%_78%,rgba(255,255,255,0.74),transparent_36%)]" />
      <div className="absolute inset-0 opacity-[0.42] bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.64)_35%,transparent_62%),radial-gradient(circle_at_18%_72%,rgba(17,17,17,0.10),transparent_24%)]" />
      <div className="absolute inset-0 opacity-[0.12] mix-blend-multiply [background-image:radial-gradient(circle_at_1px_1px,#111_1px,transparent_0)] [background-size:18px_18px]" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        {/* Copy */}
        <div>
          <motion.h1
            {...t(0.05)}
            className="text-wrap balance text-[clamp(2.8rem,4.5vw,5.5rem)] leading-[0.94] tracking-[-0.03em] font-semibold mb-6 text-[var(--text)]"
          >
            The AI agent that runs your organization.
          </motion.h1>

          <motion.p
            {...t(0.1)}
            className="text-wrap balance text-[19px] md:text-[21px] tracking-[-0.3px] mb-9 text-[var(--text-muted)] max-w-[55ch] leading-relaxed"
          >
            Persistent memory. Multi-platform reach. Model-agnostic by design. Subagent delegation. Human approvals. Headmaster works unattended — and waits for your sign-off before anything important leaves the workspace.
          </motion.p>

          <motion.div
            {...t(0.15)}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-9 py-3.5 rounded-full bg-[#111111] text-[#F9F7F3] text-[15px] font-medium hover:bg-black hover:shadow-[0_0_30px_rgba(17,17,17,0.3)] active:scale-[0.97] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9F7F3]"
              data-magnet
            >
              Book a Demo
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-9 py-3.5 rounded-full border border-[var(--border-strong)] text-[var(--text)] text-[15px] font-medium hover:bg-white hover:shadow-[0_0_40px_rgba(17,17,17,0.25)] hover:text-[var(--accent)] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)]"
            >
              Learn More
            </a>
          </motion.div>

          {/* Trust signals — B2B credibility strip */}
          <motion.div
            {...t(0.22)}
            className="flex items-center gap-5 mt-6 text-[12px] tracking-wide text-[var(--text-muted)]"
          >
            {trustSignals.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5">
                <Icon size={13} strokeWidth={1.8} className="text-[var(--accent)]" />
                {label}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
              Beta program open
            </span>
          </motion.div>
        </div>

        {/* Product proof — real dashboard screenshot */}
        <motion.div
          initial={{ opacity: 0, transform: "translateY(36px) scale(0.98)" }}
          animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
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
    </section>
  );
}