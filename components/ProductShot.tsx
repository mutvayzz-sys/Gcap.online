import Image from "next/image";

interface ProductShotProps {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
  "data-lightbox"?: string;
}

export default function ProductShot({
  src,
  alt,
  aspect = "aspect-[16/10]",
  className = "",
  priority = false,
  "data-lightbox": dataLightbox,
}: ProductShotProps) {
  const isClickable = dataLightbox !== undefined;
  return (
    <div
      data-lightbox={dataLightbox}
      className={`group relative overflow-hidden rounded-[24px] border border-[rgba(17,17,17,0.08)] bg-white shadow-lg ${aspect} ${className} ${
        isClickable ? "cursor-zoom-in" : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        priority={priority}
      />
      {/* Zoom overlay on hover */}
      {isClickable && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/10 group-hover:opacity-100">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            className="drop-shadow-lg"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" />
            <path d="M11 8v6M8 11h6" />
          </svg>
        </div>
      )}
    </div>
  );
}