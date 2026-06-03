interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  inverse?: boolean;
}

export default function SectionHeader({ eyebrow, title, body, align = "center", inverse = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow ? (
        <div className={`mb-4 text-xs font-medium uppercase tracking-[0.26em] ${inverse ? "text-white/50" : "text-[var(--text-muted)]"}`}>
          {eyebrow}
        </div>
      ) : null}
      <h2 className={`text-4xl font-medium tracking-tight md:text-6xl ${inverse ? "text-white" : "text-[var(--text)]"}`}>{title}</h2>
      {body ? <p className={`mt-5 text-lg leading-relaxed md:text-xl ${inverse ? "text-white/65" : "text-[var(--text-muted)]"}`}>{body}</p> : null}
    </div>
  );
}
