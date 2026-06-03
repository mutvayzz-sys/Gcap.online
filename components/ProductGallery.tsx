"use client";

import { useState } from "react";
import ProductShot from "./ProductShot";
import ImageLightbox from "./ImageLightbox";
import { productScreenshots } from "@/src/data/productScreenshots";

export default function ProductGallery({
  heroOnly = false,
  screenshotsOnly = false,
}: {
  heroOnly?: boolean;
  screenshotsOnly?: boolean;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // All images for lightbox navigation (hero + all screenshots)
  const allImages: readonly { src: string; alt: string }[] = [
    {
      src: "https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/01-dashboard-command-center.png",
      alt: "Headmaster dashboard showing active runs, approvals, memory updates, automations, and system status.",
    },
    ...productScreenshots,
  ];

  const openLightbox = (index: number) => setLightboxIndex(index);

  // Hero-only mode: just the hero image
  if (heroOnly) {
    return (
      <>
        <ProductShot
          src="https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/01-dashboard-command-center.png"
          alt="Headmaster dashboard showing active runs, approvals, memory updates, automations, and system status."
          aspect="aspect-[16/10]"
          priority
          onClick={() => openLightbox(0)}
        />
        {lightboxIndex !== null && (
          <ImageLightbox
            images={allImages}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </>
    );
  }

  // Screenshots-only mode: the product story grid
  if (screenshotsOnly) {
    return (
      <>
        <section className="mx-auto max-w-[1280px] px-8 py-24">
          <div className="mb-14 max-w-3xl">
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.26em] text-[var(--text-muted)]">
              Product Story
            </div>
            <h2 className="text-[36px] font-medium leading-[1.05] tracking-[-1.4px] md:text-[52px] md:tracking-[-2.2px]">
              The complete Headmaster workflow, screen by screen.
            </h2>
            <p className="mt-5 text-[18px] leading-relaxed text-[var(--text-muted)] md:text-[20px]">
              The homepage stays broad. This page holds the deeper product details, including integrations configuration and the model stack.
            </p>
          </div>

          <div className="space-y-20">
            {productScreenshots.map((shot, index) => (
              <article
                key={shot.id}
                id={shot.id}
                className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
                  index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <div className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[var(--text-muted)]">
                    {shot.eyebrow}
                  </div>
                  <h3 className="text-[30px] font-medium leading-[1.08] tracking-[-1.2px] md:text-[42px] md:tracking-[-1.8px]">
                    {shot.title}
                  </h3>
                  <p className="mt-5 text-[17px] leading-relaxed text-[var(--text-muted)]">
                    {shot.description}
                  </p>
                  <ul className="mt-7 space-y-3">
                    {shot.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-[15px] text-[var(--text-muted)]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#111111]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ProductShot
                  src={shot.src}
                  alt={shot.alt}
                  aspect="aspect-[16/10]"
                  onClick={() => openLightbox(index + 1)}
                />
              </article>
            ))}
          </div>
        </section>

        {lightboxIndex !== null && (
          <ImageLightbox
            images={allImages}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </>
    );
  }

  // Default: render nothing (shouldn't happen, but safe)
  return null;
}