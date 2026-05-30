"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const TYPED_MESSAGE =
  "Prepare progress reports for my Grade 8 class.";

export default function OnePromptDemo() {
  const [typedText, setTypedText] = useState("");
  const [showResult, setShowResult] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!inView || hasStarted.current) return;
    hasStarted.current = true;

    let i = 0;
    const interval = setInterval(() => {
      if (i < TYPED_MESSAGE.length) {
        setTypedText(TYPED_MESSAGE.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowResult(true), 1500);
      }
    }, 28);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
      {/* Input side */}
      <div className="bg-[var(--bg-elevated)] border border-[var(--border)] rounded-3xl overflow-hidden">
        <div className="border-b border-[var(--border)] px-6 py-3.5 flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-[var(--border)]" />
          <span className="text-xs text-[var(--text-muted)] font-mono">headmaster · chat</span>
        </div>
        <div className="p-6">
          <div className="min-h-[88px] text-[17px] leading-relaxed tracking-tight text-[var(--text)]">
            {typedText}
            <span className="inline-block w-[2px] h-4 bg-[var(--accent)] ml-0.5 align-middle animate-pulse" />
          </div>
          <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-between">
            <span className="text-xs text-[var(--text-muted)] font-mono">
              Sent to Headmaster · 9:47pm
            </span>
            <div className="w-7 h-7 rounded-full bg-[#111111] flex items-center justify-center flex-shrink-0">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 6h10M6 1l5 5-5 5"
                  stroke="#F9F7F3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Result side */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={showResult ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-[#111111] text-[#F9F7F3] rounded-3xl overflow-hidden"
      >
        <div className="border-b border-white/10 px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-xs text-white/50 font-mono">headmaster · complete</span>
          </div>
          <span className="text-xs text-white/40 font-mono">7:53am</span>
        </div>
        <div className="p-6">
          <div className="text-xs text-white/40 mb-5 font-mono tracking-wide">
            3 tasks completed · 3h 58m · Ready for review
          </div>
          <div className="space-y-3.5">
            {[
              "Grades compiled — complete",
              "Personalised comments — drafted",
              "Figures verified — ready",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={showResult ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, ease: "easeOut" }}
                className="flex items-center gap-3"
              >
                <span className="text-green-400 text-sm">✓</span>
                <span className="text-[15px] tracking-tight">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
