"use client";

import { MotionConfig } from "framer-motion";

/**
 * Wraps the app so all Framer Motion animations honor the user's
 * `prefers-reduced-motion` OS setting — matching the CSS-level guards in
 * globals.css. Without this, whileInView / animate motion ignored reduced-motion.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </MotionConfig>
  );
}
