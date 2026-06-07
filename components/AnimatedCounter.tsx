"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, useReducedMotion } from "framer-motion";

function parseNumber(raw: string): {
  num: number;
  suffix: string;
  decimals: number;
} | null {
  const m = raw.match(/^([0-9,]+\.?[0-9]*)(.*)$/);
  if (!m) return null;
  const numStr = m[1].replace(/,/g, "");
  const num = parseFloat(numStr);
  if (Number.isNaN(num)) return null;
  const suffix = m[2];
  const decimals = numStr.includes(".")
    ? numStr.split(".")[1].length
    : 0;
  return { num, suffix, decimals };
}

export default function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const parsed = parseNumber(value);
  const [display, setDisplay] = useState(() => {
    if (!parsed || reduce) return value;
    return "0";
  });

  useEffect(() => {
    if (!parsed || reduce || !isInView) return;

    const { num, suffix, decimals } = parsed;
    const duration = 1200;
    const startTime = performance.now();

    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = num * eased;

      let formatted: string;
      if (decimals > 0) {
        formatted = current.toFixed(decimals);
      } else if (num >= 1000) {
        formatted = Math.round(current).toLocaleString("en-US");
      } else {
        formatted = Math.round(current).toString();
      }

      setDisplay(formatted + suffix);

      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, parsed, reduce, value]);

  return <span ref={ref}>{display}</span>;
}
