"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProductShot from "./ProductShot";

gsap.registerPlugin(ScrollTrigger);

const HEADMASTER_STEPS = [
  {
    id: "mission",
    title: "You give the mission",
    description: "Describe the goal in plain language. Headmaster automatically loads relevant memory, approved files, past decisions, and prior formats from your workspace — no re-briefing required.",
    shot: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/02-chat-ask-headmaster.png",
    alt: "Chat screen where a user asks Headmaster to prepare a workspace-aware plan.",
  },
  {
    id: "plan",
    title: "Headmaster plans and delegates",
    description: "Headmaster identifies the needed steps, selects tools and channels, and assigns specialist agents to parts of the work before execution begins.",
    shot: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/12-guided-workflow-run.png",
    alt: "Guided workflow run showing context, tools, output preview, and an approval checkpoint.",
  },
  {
    id: "execute",
    title: "Subagents execute in parallel",
    description: "Research, writing, analysis, code, and operations agents can run in parallel with the right model and toolset, then report back to the parent agent for assembly.",
    shot: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/09-agents-profiles.png",
    alt: "Agents page showing specialist profiles with models, memory, skills, and tools.",
  },
  {
    id: "review",
    title: "You review and approve",
    description: "The finished draft appears with a clear approval checkpoint. Reviewers can approve, edit, reject, or request another pass before anything leaves the workspace.",
    shot: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/04-approvals-queue.png",
    alt: "Approvals queue showing outputs awaiting human review.",
  },
];

export default function PinnedSplitSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !containerRef.current || !leftColRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the left column
      gsap.to(leftColRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 10%",
          end: "bottom bottom",
          pin: leftColRef.current,
          scrub: true,
          markers: false,
        },
      });

      // Fade in right column items as they scroll — start from visible so content
      // is never completely hidden if ScrollTrigger fires late
      const rightItems = rightColRef.current?.querySelectorAll(".right-item");
      if (rightItems) {
        rightItems.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0.2, y: 24 },
            {
              opacity: 1,
              y: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "top 30%",
                scrub: 1,
                markers: false,
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[var(--bg)]"
      id="how-it-works"
    >
      <div className="relative max-w-[1280px] mx-auto px-8 py-32">
        <div className="grid lg:grid-cols-[40%_60%] gap-12 lg:gap-20 items-start">
          {/* Left column: pinned */}
          <div
            ref={leftColRef}
            className="flex flex-col gap-6"
          >
            <div>
              <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] tracking-[-0.02em] font-semibold text-[var(--text)] mb-4 text-balance">
                How Headmaster works
              </h2>
              <p className="text-[17px] text-[var(--text-muted)] max-w-[55ch]">
                Four steps from a plain-language request to a reviewed, approved output. Context loads automatically. Nothing ships until you confirm it.
              </p>
            </div>
          </div>

          {/* Right column: scrolling items */}
          <div ref={rightColRef} className="space-y-24">
            {HEADMASTER_STEPS.map((step) => (
              <div key={step.id} className="right-item">
                <div className="space-y-3">
                  <h3 className="text-[clamp(1.1rem,2vw,1.5rem)] font-semibold text-[var(--text)]">
                    {step.title}
                  </h3>
                  <p className="text-[17px] text-[var(--text-muted)] max-w-[50ch]">
                    {step.description}
                  </p>
                  <ProductShot
                    src={step.shot}
                    alt={step.alt}
                    aspect="aspect-[16/10]"
                    className="mt-8"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
