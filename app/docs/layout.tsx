import type { ReactNode } from "react";

export const metadata = {
  title: "Headmaster Documentation",
  description: "Complete guide to deploying and managing Headmaster AI agents",
};

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="max-w-[1280px] mx-auto px-8 py-16 prose prose-invert">
        {children}
      </div>
    </div>
  );
}
