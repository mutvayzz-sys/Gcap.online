"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface ProductShotProps {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
  /** Enable subtle scroll-linked parallax on the image (transform-only). */
  parallax?: boolean;
}

export default function ProductShot({
  src,
  alt,
  aspect = "aspect-[16/10]",
  className = "",
  priority = false,
  parallax = false,
}: ProductShotProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Image is over-scaled (110%) so the parallax travel never reveals edges.
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const active = parallax && !reduce;

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-white shadow-lg ${aspect} ${className}`}
    >
      <motion.div
        className="absolute inset-0"
        style={active ? { y, scale: 1.1 } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority={priority}
        />
      </motion.div>
    </div>
  );
}
