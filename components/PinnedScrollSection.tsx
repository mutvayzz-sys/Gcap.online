"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import ProductShot from "./ProductShot";

gsap.registerPlugin(ScrollTrigger);

const STORY_SECTIONS = [
  {
    id: "memory",
    title: "Persistent Memory",
    description: "When a workflow resumes after days or weeks, Headmaster can reload prior decisions, approved formats, workspace files, and user preferences before drafting the next output.",
    shot: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/06-memory-providers.png",
    alt: "Memory providers screen showing agent memory, user profiles, and provider configuration.",
    stat: "100%",
    statLabel: "Context retained",
  },
  {
    id: "platforms",
    title: "17 Messaging Platforms",
    description: "Slack, Teams, Discord, WhatsApp, Telegram, email, and other channels become entry points into the same persistent workspace instead of separate disconnected bots.",
    shot: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/10-integrations-channels-mcp.png",
    alt: "Integrations screen showing channels, connectors, MCP servers, webhooks, and API keys.",
    stat: "17+",
    statLabel: "Platforms supported",
  },
  {
    id: "models",
    title: "300+ Model Support",
    description: "Work can route across cloud models, coding models, local models, enterprise endpoints, custom endpoints, or TayX depending on the workflow and deployment policy.",
    shot: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/11-model-stack-providers-tayx.png",
    alt: "Model stack screen showing cloud models, coding models, local models, enterprise endpoints, and TayX.",
    stat: "300+",
    statLabel: "Models integrated",
  },
  {
    id: "delegation",
    title: "Subagent Delegation",
    description: "Complex requests split into specialist profiles for research, writing, analysis, operations, or code, each with the model, tools, and memory needed for its part of the job.",
    shot: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/09-agents-profiles.png",
    alt: "Agents screen showing specialist profiles with model, memory, skills, and tool assignments.",
    stat: "∞",
    statLabel: "Scalable workflows",
  },
  {
    id: "approvals",
    title: "Human-in-the-Loop",
    description: "Approval queues show pending, approved, rejected, and edited outputs, with the responsible reviewer recorded before sensitive work leaves the workspace.",
    shot: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/04-approvals-queue.png",
    alt: "Approvals queue screen showing documents and messages awaiting human review.",
    stat: "100%",
    statLabel: "High-stakes actions approved before sending",
  },
];

export default function PinnedScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
  );

  useEffect(() => {
    // Subscribe to prefers-reduced-motion changes.
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !contentRef.current) return;

    const ctx = gsap.context(() => {
      const sections = contentRef.current?.querySelectorAll(".story-section");
      if (!sections) return;

      gsap.set(sections, { opacity: 0 });

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "top 30%",
              scrub: 1,
              markers: false,
            },
          }
        );

        // Parallax effect on text
        gsap.to(section.querySelector(".story-stat"), {
          y: -40,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 bg-[var(--bg)]"
      id="story"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Section Header */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, margin: "-100px" }}
          >
            <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.02em] font-semibold text-[var(--text)] mb-4 text-balance">
              Built for what matters
            </h2>
            <p className="text-[17px] text-[var(--text-muted)] max-w-[65ch]">
              Every system choice reflects a commitment to reliability, control, and human partnership at scale.
            </p>
          </motion.div>
        </div>

        {/* Scrollable Story Sections */}
        <div ref={contentRef} className="space-y-32">
          {STORY_SECTIONS.map((section, idx) => (
            <div
              key={section.id}
              className="story-section grid lg:grid-cols-[1fr_1fr] gap-12 items-center"
            >
              {/* Left: Text content */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="text-[clamp(1.3rem,2.5vw,2rem)] tracking-[-0.02em] font-semibold text-[var(--text)] mb-4">
                  {section.title}
                </h3>
                <p className="text-[17px] leading-relaxed text-[var(--text-muted)] mb-6 max-w-[55ch] text-pretty">
                  {section.description}
                </p>
                <div className="inline-flex items-baseline gap-3">
                  <div className="story-stat text-[28px] md:text-[32px] font-semibold text-[var(--text)]">
                    {section.stat}
                  </div>
                  <div className="text-[14px] text-[var(--text-muted)]">
                    {section.statLabel}
                  </div>
                </div>
              </div>

              {/* Right: product proof */}
              <div className={`hidden lg:block ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <ProductShot
                  src={section.shot}
                  alt={section.alt}
                  aspect="aspect-[16/10]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle grain overlay */}
      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.015]" style={{
        backgroundImage: "url('data:image/svg+xml?utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%22.9%22 numOctaves=%221%22/></filter><rect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22/></svg>')",
      }} />
    </section>
  );
}
