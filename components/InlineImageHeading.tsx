"use client";

import { motion } from "framer-motion";

const EASE = [0.23, 1, 0.32, 1] as const;

export default function InlineImageHeading() {
  return (
    <section className="py-24 max-w-[1280px] mx-auto px-8">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <h2 className="text-[clamp(2.2rem,4vw,4rem)] font-semibold tracking-tight leading-[1.1] text-[var(--text)]">
          Built for teams that{" "}
          <span className="inline-flex items-center align-middle">
            <span className="w-28 h-11 rounded-full bg-[var(--text)] inline-block align-middle mx-2" />
          </span>
          move fast.
        </h2>
        <p className="text-[17px] text-[var(--text-muted)] max-w-[55ch] mt-6 leading-relaxed">
          Streamline workflows, reduce context switching, and keep your team aligned across every interaction and decision.
        </p>
      </motion.div>
    </section>
  );
}
