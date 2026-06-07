"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const EASE = [0.23, 1, 0.32, 1] as const;

export default function SocialProof() {
  return (
    <section
      id="social-proof"
      className="relative py-16 md:py-20 border-t border-[var(--border)]"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
        >
          {/* Quote */}
          <div className="flex-1 md:border-l border-[var(--border-strong)] md:pl-8">
            <blockquote>
              <p className="text-[18px] md:text-[20px] leading-relaxed tracking-[-0.3px] text-[var(--text)] mb-6 italic">
                "Headmaster automated our most repetitive workflow in under a week. What used to take 4 people is now running 24/7 with a single oversight."
              </p>
              <footer className="space-y-1">
                <div className="font-medium text-[15px] text-[var(--text)]">Sarah Chen</div>
                <div className="text-[13px] text-[var(--text-muted)]">VP of Operations, Fortune 500 FinTech</div>
              </footer>
            </blockquote>
          </div>

          {/* Trust signals */}
          <div className="flex-1 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
                viewport={{ once: true, margin: "-80px" }}
              >
                <div className="text-[28px] md:text-[32px] font-semibold text-[var(--text)] leading-tight">
                  5<span className="text-[20px] text-[var(--text-muted)]">k+</span>
                </div>
                <p className="text-[13px] text-[var(--text-muted)] mt-1">Runs per week</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
                viewport={{ once: true, margin: "-80px" }}
              >
                <div className="text-[28px] md:text-[32px] font-semibold text-[var(--text)] leading-tight">
                  99.8<span className="text-[20px] text-[var(--text-muted)]">%</span>
                </div>
                <p className="text-[13px] text-[var(--text-muted)] mt-1">Uptime</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
                viewport={{ once: true, margin: "-80px" }}
              >
                <div className="text-[28px] md:text-[32px] font-semibold text-[var(--text)] leading-tight">
                  8<span className="text-[20px] text-[var(--text-muted)]">h</span>
                </div>
                <p className="text-[13px] text-[var(--text-muted)] mt-1">Average setup</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.25 }}
                viewport={{ once: true, margin: "-80px" }}
              >
                <div className="text-[28px] md:text-[32px] font-semibold text-[var(--text)] leading-tight">
                  40<span className="text-[20px] text-[var(--text-muted)]">%</span>
                </div>
                <p className="text-[13px] text-[var(--text-muted)] mt-1">Cost savings (avg)</p>
              </motion.div>
            </div>

            {/* Logos or companies */}
            <div className="pt-4 border-t border-[var(--border-strong)]">
              <p className="text-[11px] tracking-widest uppercase text-[var(--text-muted)] mb-3">Trusted by teams at</p>
              <div className="flex flex-wrap gap-3">
                <div className="text-[13px] text-[var(--text)] px-3 py-1.5 rounded-full border border-[var(--border-strong)]">
                  Fortune 500 FinTech
                </div>
                <div className="text-[13px] text-[var(--text)] px-3 py-1.5 rounded-full border border-[var(--border-strong)]">
                  Global SaaS
                </div>
                <div className="text-[13px] text-[var(--text)] px-3 py-1.5 rounded-full border border-[var(--border-strong)]">
                  Tech Studios
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
