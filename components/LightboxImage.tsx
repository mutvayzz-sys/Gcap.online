"use client";

import { useState } from "react";
import ProductShot from "./ProductShot";
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
      <ProductShot
        src={src}
        alt={alt}
        aspect={aspect}
        priority={priority}
        className={className}
        onClick={() => setOpen(true)}
      />
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