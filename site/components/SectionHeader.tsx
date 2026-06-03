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
        className={`text-[36px] md:text-[52px] tracking-[-1.4px] md:tracking-[-2.2px] font-medium leading-[1.05] ${
          inverse ? "text-white" : "text-[var(--text)]"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`mt-5 text-[18px] md:text-[20px] leading-relaxed ${
            inverse ? "text-white/65" : "text-[var(--text-muted)]"
          } ${align === "center" ? "max-w-3xl mx-auto" : ""}`}
        >
          {body}
        </p>
      )}
    </div>
  );
}
