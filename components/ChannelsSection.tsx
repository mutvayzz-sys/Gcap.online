"use client";

import { Monitor, Mail, MessageCircle, MessageSquare, Smartphone, Phone } from "lucide-react";
import SectionHeader from "./SectionHeader";

const CHANNELS = [
  { icon: Monitor, label: "Dashboard", description: "The main workspace for reviewing, approving, and managing workflows." },
  { icon: Mail, label: "Email", description: "Receive drafts, summaries, and updates directly in your inbox." },
  { icon: MessageCircle, label: "Slack & Teams", description: "Start tasks and get updates where your team already communicates." },
  { icon: MessageSquare, label: "Telegram & Discord", description: "Lightweight channels for quick questions and status checks." },
  { icon: Smartphone, label: "WhatsApp & SMS", description: "Mobile-friendly updates for managers and field staff." },
  { icon: Phone, label: "More", description: "Custom connectors for the systems your organization already uses." },
];

export default function ChannelsSection() {
  return (
    <section
      id="channels"
      data-chapter="channels"
      data-label="Channels"
      className="bg-[var(--bg-elevated)] border-b border-[var(--border)] py-24"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <SectionHeader
          eyebrow="Reach Headmaster Where Work Happens"
          title="Your Team's Channels Become Doors"
          body="Headmaster can be reached from the places your team already works. Start a task in one place, review it somewhere else, and keep the same memory and workflow history behind the scenes."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" data-reveal-group>
          {CHANNELS.map((ch) => {
            const Icon = ch.icon;
            return (
              <div
                key={ch.label}
                data-reveal-item
                className="rounded-2xl border border-[var(--border)] bg-white p-6 transition hover:border-[var(--border-strong)]"
              >
                <Icon size={20} strokeWidth={1.8} className="mb-4 text-[var(--text-muted)]" />
                <h3 className="text-[15px] font-medium tracking-tight mb-1">{ch.label}</h3>
                <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{ch.description}</p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
