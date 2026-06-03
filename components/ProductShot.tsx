"use client";

import Image from "next/image";

interface ProductShotProps {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
}

export default function ProductShot({
  src,
  alt,
  aspect = "aspect-[16/10]",
  className = "",
  priority = false,
}: ProductShotProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-white shadow-[0_24px_80px_rgba(17,17,17,0.10)] ${aspect} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        priority={priority}
      />
    </div>
  );
}
