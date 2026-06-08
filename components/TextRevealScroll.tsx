"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealScrollProps {
  text: string;
  className?: string;
}

export default function TextRevealScroll({ text, className = "" }: TextRevealScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
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
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const textElement = containerRef.current?.querySelector("span");
      if (!textElement) return;

      // Get text content and create char spans
      const chars = textElement.textContent?.split("") || [];
      textElement.innerHTML = chars
        .map((char) => `<span class="char" style="opacity: 0.2;">${char}</span>`)
        .join("");

      const charElements = textElement.querySelectorAll(".char");

      gsap.to(charElements, {
        opacity: 1,
        stagger: 0.03,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "top 20%",
          scrub: 1,
          markers: false,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion, text]);

  return (
    <div
      ref={containerRef}
      className={className}
    >
      <span className="inline-block text-transparent">
        {text}
      </span>
    </div>
  );
}
