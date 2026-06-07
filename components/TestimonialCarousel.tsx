"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.23, 1, 0.32, 1] as const;

const testimonials = [
  {
    id: 0,
    quote:
      "The biggest unlock was continuity. Headmaster remembered the decisions from the prior run and picked up the workflow without us restating the whole brief.",
    person: "Beta operations lead",
    initials: "BL",
    bgColor: "#111",
  },
  {
    id: 1,
    quote:
      "The approval pause changed how we trusted the agent. It could keep preparing the work, but anything client-facing still waited for a human review.",
    person: "Beta agency founder",
    initials: "AF",
    bgColor: "#333",
  },
  {
    id: 2,
    quote:
      "We stopped treating it like a chatbot and started treating it like an always-on teammate with a checklist and memory.",
    person: "Beta school administrator",
    initials: "SA",
    bgColor: "#555",
  },
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-24 max-w-[1280px] mx-auto px-8">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        viewport={{ once: true, margin: "-80px" }}
        className="flex gap-12 lg:gap-16 items-start"
      >
        {/* Left: Avatar Stack */}
        <div className="hidden md:flex flex-col-reverse items-center gap-0 flex-shrink-0 pt-4">
          {testimonials.map((testimonial, index) => {
            const offset = index * 12;
            const isActive = index === activeIndex;
            return (
              <motion.div
                key={testimonial.id}
                animate={{
                  opacity: isActive ? 1 : 0.4,
                  marginLeft: offset > 0 ? `-${offset}px` : 0,
                }}
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.3, ease: EASE }
                }
                className="relative"
                style={{ zIndex: isActive ? 30 : 10 - index }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-semibold text-lg border-4 border-[var(--bg)]"
                  style={{ backgroundColor: testimonial.bgColor }}
                >
                  {testimonial.initials}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Quote + Navigation */}
        <div className="flex-1 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, x: 8 }
              }
              animate={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 1, x: 0 }
              }
              exit={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, x: -8 }
              }
              transition={
                prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }
              }
            >
              <blockquote>
                <p className="text-[20px] leading-relaxed max-w-[52ch] text-[var(--text)] mb-4">
                  "{activeTestimonial.quote}"
                </p>
                <footer className="flex flex-col gap-1">
                  <cite className="not-italic font-medium text-[15px] text-[var(--text)]">
                    {activeTestimonial.person}
                  </cite>
                </footer>
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-8">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text)] hover:bg-[var(--border)] transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12.5 5L7.5 10l5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="flex items-center justify-center w-11 h-11 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text)] hover:bg-[var(--border)] transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7.5 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
