"use client";

import { motion } from "framer-motion";

const SPECS = [
  { value: "1,000,000", label: "token context" },
  { value: "MoE", label: "mixture-of-experts" },
  { value: "1T / 32B", label: "total / active params" },
  { value: "384", label: "experts" },
];

const BENCHES = [
  { value: "78.2", label: "MMLU-Pro" },
  { value: "71.4", label: "GPQA Diamond" },
  { value: "68.5", label: "AIME 2025" },
  { value: "62.1", label: "SWE-bench Verified" },
  { value: "58.3", label: "LiveCodeBench" },
  { value: "98.7%", label: "1M-token needle" },
];

interface TayXProps {
  onWaitlist?: () => void;
}

export default function TayX({ onWaitlist }: TayXProps) {
  return (
    <section
      id="tayx"
      data-chapter="tayx"
      data-label="TayX"
      data-theme="dark"
      className="bg-[#0D0D0D] text-[#F9F7F3] py-[120px]"
    >
      <div className="max-w-5xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="text-[11px] font-semibold tracking-[2px] bg-[#F9F7F3] text-[#0D0D0D] px-3 py-1.5 rounded-full">
            PREVIEW
          </span>
          <span className="text-[11px] tracking-[2px] text-white/50 uppercase font-medium">
            What&rsquo;s next from GCAP Labs
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(46px,9vw,118px)] leading-[0.9] tracking-[-0.05em] font-semibold mb-6"
        >
          TayX{" "}
          <span className="text-white/40 font-normal">0.1</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(22px,2.6vw,32px)] tracking-[-0.02em] leading-[1.12] text-white/85 max-w-2xl mb-5"
        >
          A million tokens of context.
          <br />
          One model that holds the whole picture.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-[17px] text-white/50 leading-relaxed max-w-2xl mb-12"
        >
          A sparse Mixture-of-Experts model engineered as the reasoning core for Headmaster.
          Long-horizon, tool-native, and built to keep the thread across an entire operation.
        </motion.p>

        {/* Spec strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden border border-white/[0.08] mb-4"
          style={{ background: "rgba(255,255,255,.08)", gap: "1px" }}
        >
          {SPECS.map(({ value, label }) => (
            <div key={label} className="bg-[#0D0D0D] px-6 py-6">
              <div className="text-[clamp(22px,2.4vw,30px)] font-semibold tracking-tight mb-1">
                {value}
              </div>
              <div className="text-[11px] font-medium text-white/50 tracking-[1px] uppercase">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Benchmark grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-3 md:grid-cols-6 rounded-2xl overflow-hidden border border-white/[0.08] mb-10"
          style={{ background: "rgba(255,255,255,.08)", gap: "1px" }}
        >
          {BENCHES.map(({ value, label }) => (
            <div key={label} className="bg-[#0D0D0D] px-4 py-5">
              <div className="text-[26px] font-semibold tracking-tight mb-1">{value}</div>
              <div className="text-[10px] font-medium text-white/50 tracking-[0.8px] uppercase leading-tight">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-5 flex-wrap"
        >
          <button
            className="px-8 py-3.5 rounded-full bg-white text-black text-base font-medium hover:bg-white/90 transition-all active:scale-[0.97]"
            onClick={onWaitlist}
          >
            Request preview access
          </button>
          <span className="text-xs text-white/40">
            Preliminary internal evals · figures subject to change
          </span>
        </motion.div>
      </div>
    </section>
  );
}
