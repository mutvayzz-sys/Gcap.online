"use client";

import { Search, FileText, Globe, Image, Code2, ListChecks, CalendarDays, MessageSquare } from "lucide-react";
import SectionHeader from "./SectionHeader";

const TOOL_ITEMS = [
  { icon: Search, label: "Search", description: "Find and gather information from approved sources" },
  { icon: FileText, label: "Read files", description: "Work with documents, spreadsheets, and uploaded content" },
  { icon: Globe, label: "Browse", description: "Navigate web apps and gather information through approved screens" },
  { icon: Image, label: "Analyze images", description: "Inspect screenshots, diagrams, scanned worksheets, and visual materials" },
  { icon: Code2, label: "Run code", description: "Execute scripts and process data when the workflow requires it" },
  { icon: ListChecks, label: "Plan tasks", description: "Break complex work into steps and track progress" },
  { icon: CalendarDays, label: "Schedule work", description: "Set up recurring reports, summaries, and reminders" },
  { icon: MessageSquare, label: "Message channels", description: "Send drafts and updates through approved communication channels" },
];

export default function ToolsExplainer() {
  return (
    <section
      id="tools"
      data-chapter="tools"
      data-label="Tools"
      className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]"
    >
      <SectionHeader
        eyebrow="What Tools Means"
        title="Tools Are How Headmaster Acts"
        body="Headmaster can search, read files, use browsers, analyze images, run code, plan tasks, create drafts, schedule work, and message through approved channels. It is not just answering from a chat box. It can work through the systems you allow."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" data-reveal-group>
        {TOOL_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              data-reveal-item
              className="rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition hover:border-[var(--border-strong)]"
            >
              <Icon size={20} strokeWidth={1.8} className="mb-4 text-[var(--text-muted)]" />
              <h3 className="text-[15px] font-medium tracking-tight mb-1">{item.label}</h3>
              <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{item.description}</p>
            </div>
          );
        })}
      </div>

    </section>
  );
}
