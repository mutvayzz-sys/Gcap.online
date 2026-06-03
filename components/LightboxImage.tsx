"use client";

import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

interface LightboxImageProps {
  src: string;
  alt: string;
  aspect?: string;
  priority?: boolean;
  className?: string;
}

export default function LightboxImage({
  src,
  alt,
  aspect = "aspect-[16/10]",
  priority = false,
  className,
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className={`group relative overflow-hidden rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-white shadow-lg cursor-zoom-in ${aspect} ${className ?? ""}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] w-full h-full"
          loading={priority ? "eager" : "lazy"}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/10 group-hover:opacity-100">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="drop-shadow-lg">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" />
            <path d="M11 8v6M8 11h6" />
          </svg>
        </div>
      </div>
      {open && (
        <ImageLightbox
          images={[{ src, alt }]}
          initialIndex={0}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}