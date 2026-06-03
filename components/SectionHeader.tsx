interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  inverse?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
  inverse = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
      data-reveal
    >
      {eyebrow && (
        <div
          className={`mb-4 text-xs font-medium uppercase tracking-[0.26em] ${
            inverse ? "text-white/50" : "text-[var(--text-muted)]"
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-[30px] md:text-[44px] tracking-[-1.2px] md:tracking-[-1.8px] font-medium leading-tight ${
          inverse ? "text-white" : "text-[var(--text)]"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`mt-5 text-[17px] md:text-[19px] leading-relaxed ${
            inverse ? "text-white/65" : "text-[var(--text-muted)]"
          } ${align === "center" ? "max-w-3xl mx-auto" : ""}`}
        >
          {body}
        </p>
      )}
    </div>
  );
}
