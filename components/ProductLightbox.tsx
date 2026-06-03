"use client";

import { useState, useEffect, useCallback } from "react";
import ImageLightbox from "./ImageLightbox";

interface ProductLightboxProps {
  images: readonly { src: string; alt: string }[];
}

export default function ProductLightbox({ images }: ProductLightboxProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleClick = useCallback((e: MouseEvent) => {
    const target = (e.target as HTMLElement).closest("[data-lightbox]");
    if (target) {
      const index = parseInt(target.getAttribute("data-lightbox")!, 10);
      if (!isNaN(index) && index >= 0 && index < images.length) {
        e.preventDefault();
        e.stopPropagation();
        setLightboxIndex(index);
      }
    }
  }, [images.length]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [handleClick]);

  if (lightboxIndex === null) return null;

  return (
    <ImageLightbox
      images={images}
      initialIndex={lightboxIndex}
      onClose={() => setLightboxIndex(null)}
    />
  );
}