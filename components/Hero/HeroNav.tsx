"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = ["Products", "Studio", "Demos", "Contact"] as const;

export default function HeroNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[10] px-6 sm:px-10 py-5 flex justify-between items-center"
        style={{ backgroundColor: "var(--color-bg, #e8e3d9)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span
            className="text-[20px] sm:text-[24px] tracking-tight select-none"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-ink, #1a1916)" }}
          >
            GCAP Labs
          </span>
          <span
            className="text-[22px] select-none"
            aria-hidden="true"
            style={{ color: "var(--color-ink, #1a1916)" }}
          >
            ✳︎
          </span>
        </div>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[15px] transition-colors duration-200 hover:text-[var(--color-ink)]"
              style={{ color: "var(--color-ink-muted, #6b6860)" }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right CTA */}
        <a
          href="#"
          className="hidden md:inline-flex items-center border rounded-full px-5 py-2 text-[14px] font-medium transition-colors duration-200"
          style={{
            borderColor: "var(--color-ink, #1a1916)",
            color: "var(--color-ink, #1a1916)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-ink, #1a1916)";
            e.currentTarget.style.color = "var(--color-bg, #e8e3d9)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "var(--color-ink, #1a1916)";
          }}
        >
          Book a demo ↗
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 z-[9]"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((p) => !p)}
        >
          <span
            className="block w-5 h-[1.5px] transition-all duration-300 ease-in-out origin-center"
            style={{
              backgroundColor: "var(--color-ink, #1a1916)",
              transform: open ? "rotate(45deg) translateY(6.5px)" : "none",
            }}
          />
          <span
            className="block w-5 h-[1.5px] transition-all duration-300 ease-in-out"
            style={{
              backgroundColor: "var(--color-ink, #1a1916)",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-[1.5px] transition-all duration-300 ease-in-out origin-center"
            style={{
              backgroundColor: "var(--color-ink, #1a1916)",
              transform: open ? "rotate(-45deg) translateY(-6.5px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9] backdrop-blur-sm flex flex-col px-8 pt-24 gap-7"
            style={{ backgroundColor: "color-mix(in srgb, var(--color-bg, #e8e3d9) 95%, transparent)" }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[28px] tracking-tight transition-colors duration-200"
                style={{ color: "var(--color-ink, #1a1916)", fontFamily: "var(--font-heading)" }}
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="mt-4 self-start border rounded-full px-6 py-3 text-[16px] font-medium"
              style={{
                borderColor: "var(--color-ink, #1a1916)",
                color: "var(--color-ink, #1a1916)",
              }}
              onClick={() => setOpen(false)}
            >
              Book a demo ↗
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
