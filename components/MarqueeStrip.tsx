"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  SiSlack, SiGmail, SiGithub, SiNotion, SiZoom,
  SiLinear, SiGoogledrive, SiGooglecalendar, SiConfluence,
  SiOpenai, SiGoogle, SiMeta, SiClaude, SiGooglemeet,
  SiTelegram, SiWhatsapp, SiDiscord,
} from "react-icons/si";
import type { IconType } from "react-icons";

export interface MarqueeItem {
  name: string;
  category: "model" | "channel" | "connector";
  description: string;
  Icon?: IconType;
  img?: string;
}

export const ALL_ITEMS: MarqueeItem[] = [
  // Models
  { name: "Claude", category: "model", description: "Anthropic's model, used for reasoning, writing, and agent workflows.", Icon: SiClaude },
  { name: "OpenAI", category: "model", description: "OpenAI's model family, including GPT-4 and o-series for complex tasks.", Icon: SiOpenai },
  { name: "Gemini", category: "model", description: "Google's model, optimized for multimodal and long-context work.", Icon: SiGoogle },
  { name: "Llama", category: "model", description: "Meta's open model, available for local or private deployments.", Icon: SiMeta },
  { name: "Mistral", category: "model", description: "Efficient open model for speed-sensitive or cost-optimized tasks.", img: "/icons/integrations/mistral.svg" },
  { name: "DeepSeek", category: "model", description: "Strong reasoning model for analysis and research workflows.", img: "/icons/integrations/deepseek.svg" },
  { name: "Qwen", category: "model", description: "Alibaba's model, effective for multilingual and long-context tasks.", img: "/icons/integrations/qwen.svg" },
  { name: "Kimi", category: "model", description: "Moonshot AI's model, strong for long document and context-heavy work.", img: "/icons/integrations/kimi.svg" },
  { name: "MiniMax", category: "model", description: "Versatile model suited for multimodal and task-delegation workflows.", img: "/icons/integrations/minimax.svg" },
  { name: "OpenRouter", category: "model", description: "Model routing layer for switching providers without rebuilding.", img: "/icons/integrations/openrouter.svg" },
  // Channels
  { name: "Slack", category: "channel", description: "Start tasks and receive updates in your team's Slack workspace.", Icon: SiSlack },
  { name: "Telegram", category: "channel", description: "Reach Headmaster through a Telegram bot for quick updates.", Icon: SiTelegram },
  { name: "WhatsApp", category: "channel", description: "Receive workflow updates and approvals via WhatsApp.", Icon: SiWhatsapp },
  { name: "Discord", category: "channel", description: "Connect Headmaster to a Discord server for team notifications.", Icon: SiDiscord },
  { name: "Teams", category: "channel", description: "Receive drafts and updates directly in Microsoft Teams channels.", img: "/icons/integrations/teams.svg" },
  { name: "Google Meet", category: "channel", description: "Integrate meeting scheduling and summaries via Google Meet.", Icon: SiGooglemeet },
  { name: "Gmail", category: "channel", description: "Receive drafts and summaries directly in your inbox.", Icon: SiGmail },
  // Connectors
  { name: "Google Drive", category: "connector", description: "Access, read, and organize documents in approved Drive folders.", Icon: SiGoogledrive },
  { name: "Google Calendar", category: "connector", description: "Read events and schedule recurring workflow triggers.", Icon: SiGooglecalendar },
  { name: "GitHub", category: "connector", description: "Read repos, issues, and commits for engineering workflows.", Icon: SiGithub },
  { name: "Notion", category: "connector", description: "Read and update pages, databases, and project docs in Notion.", Icon: SiNotion },
  { name: "Zoom", category: "connector", description: "Schedule meetings and process recordings as part of workflows.", Icon: SiZoom },
  { name: "Linear", category: "connector", description: "Read and update issues, cycles, and project state.", Icon: SiLinear },
  { name: "Confluence", category: "connector", description: "Read and write documentation pages in team wikis.", Icon: SiConfluence },
  { name: "Browserbase", category: "connector", description: "Browser automation for web-based workflows and data gathering.", img: "/icons/integrations/browserbase.svg" },
  { name: "Cursor", category: "connector", description: "AI coding environment integration for development workflows.", img: "/icons/integrations/cursor.svg" },
  { name: "VS Code", category: "connector", description: "Direct integration with VS Code for engineering agent tasks.", img: "/icons/integrations/vscode.svg" },
  { name: "Firecrawl", category: "connector", description: "Web scraping and content extraction for research workflows.", img: "/icons/integrations/firecrawl.svg" },
];

const CATEGORY_LABELS: Record<MarqueeItem["category"], string> = {
  model: "AI Model",
  channel: "Communication Channel",
  connector: "Connector / Integration",
};

const CATEGORY_COLORS: Record<MarqueeItem["category"], string> = {
  model: "bg-violet-50 text-violet-700 border-violet-100",
  channel: "bg-blue-50 text-blue-700 border-blue-100",
  connector: "bg-amber-50 text-amber-700 border-amber-100",
};

interface TooltipState {
  item: MarqueeItem;
  x: number;
  y: number;
}

export interface RowConfig {
  filter: MarqueeItem["category"];
  /** label shown to the left of the row */
  label: string;
}

interface MarqueeStripProps {
  /** one row per category — each row shows the full distinct set */
  rows: RowConfig[];
  /** seconds for a full loop — lower = faster */
  duration?: number;
  /** dark background variant */
  inverse?: boolean;
}

/** Repeat a list until it has at least `min` items so the row fills wide screens. */
function fill(items: MarqueeItem[], min = 14): MarqueeItem[] {
  if (items.length === 0) return items;
  const out = [...items];
  while (out.length < min) out.push(...items);
  return out;
}

export default function MarqueeStrip({ rows, duration = 34, inverse = false }: MarqueeStripProps) {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEnter = (item: MarqueeItem, e: React.MouseEvent | React.FocusEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const cRect = containerRef.current?.getBoundingClientRect();
    if (!cRect) return;
    setTooltip({ item, x: rect.left - cRect.left + rect.width / 2, y: rect.top - cRect.top });
  };

  const styles = {
    iconBg: inverse ? "bg-white/10 border-white/15" : "bg-white border-[var(--border)]",
    iconColor: inverse ? "text-white/70 group-hover:text-white" : "text-[var(--text-muted)] group-hover:text-[var(--text)]",
    labelColor: inverse ? "text-white/50 group-hover:text-white/90" : "text-[var(--text-muted)] group-hover:text-[var(--text)]",
    rowLabel: inverse ? "text-white/40" : "text-[var(--text-muted)]",
    hoverShadow: inverse ? "group-hover:shadow-[0_4px_14px_rgba(0,0,0,0.4)]" : "group-hover:shadow-[0_4px_14px_rgba(0,0,0,0.08)]",
    imgOpacity: inverse ? "opacity-60 group-hover:opacity-100" : "opacity-70 group-hover:opacity-100",
    fadeFrom: inverse ? "from-[#0D0D0D]" : "from-[var(--bg-elevated)]",
  };

  const Row = ({ set, reverse, dur }: { set: MarqueeItem[]; reverse: boolean; dur: number }) => {
    // Render the set twice; translate -50% lands exactly on the second copy → seamless.
    const seq = [...set, ...set];
    return (
      <div className="flex w-max" style={{ animation: `${reverse ? "marquee-reverse" : "marquee"} ${dur}s linear infinite` }} aria-hidden="true">
        {seq.map((item, i) => (
          <button
            key={i}
            type="button"
            onMouseEnter={(e) => handleEnter(item, e)}
            onMouseLeave={() => setTooltip(null)}
            onFocus={(e) => handleEnter(item, e)}
            onBlur={() => setTooltip(null)}
            className="flex flex-col items-center gap-2.5 group cursor-default focus:outline-none mr-9 flex-shrink-0"
            tabIndex={i < set.length ? 0 : -1}
            aria-label={item.name}
          >
            <div
              className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-200 ${styles.iconBg} ${styles.hoverShadow} group-hover:-translate-y-1`}
            >
              {item.Icon ? (
                <item.Icon size={28} className={`transition-colors ${styles.iconColor}`} />
              ) : item.img ? (
                <Image src={item.img} alt={item.name} width={28} height={28} className={`rounded-sm transition-opacity ${styles.imgOpacity}`} />
              ) : null}
            </div>
            <span className={`text-[11px] font-medium tracking-tight transition-colors ${styles.labelColor}`}>
              {item.name}
            </span>
          </button>
        ))}
      </div>
    );
  };

  return (
    <div ref={containerRef} className="relative overflow-hidden py-2">
      <div className="flex flex-col gap-9">
        {rows.map((row, idx) => {
          const set = fill(ALL_ITEMS.filter((i) => i.category === row.filter));
          return (
            <div key={row.filter}>
              <div className={`px-8 max-w-[1280px] mx-auto mb-3 text-[10px] tracking-[2.5px] uppercase font-medium ${styles.rowLabel}`}>
                {row.label}
              </div>
              <div className="relative overflow-hidden">
                <Row set={set} reverse={idx % 2 === 1} dur={duration + idx * 5} />
                {/* edge fades */}
                <div className={`pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r ${styles.fadeFrom} to-transparent`} />
                <div className={`pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l ${styles.fadeFrom} to-transparent`} />
              </div>
            </div>
          );
        })}
      </div>

      {tooltip && (
        <div
          className="absolute z-30 pointer-events-none"
          style={{ left: tooltip.x, top: tooltip.y - 10, transform: "translate(-50%, -100%)" }}
        >
          <div className="bg-white border border-[var(--border)] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-4 w-[220px]">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl border border-[var(--border)] bg-[var(--bg)] flex items-center justify-center flex-shrink-0">
                {tooltip.item.Icon ? (
                  <tooltip.item.Icon size={16} className="text-[var(--text-muted)]" />
                ) : tooltip.item.img ? (
                  <Image src={tooltip.item.img} alt={tooltip.item.name} width={16} height={16} className="rounded-sm opacity-80" />
                ) : null}
              </div>
              <div>
                <div className="text-[13px] font-medium tracking-tight leading-tight">{tooltip.item.name}</div>
                <div className={`inline-block text-[10px] px-2 py-0.5 rounded-full border font-medium mt-0.5 ${CATEGORY_COLORS[tooltip.item.category]}`}>
                  {CATEGORY_LABELS[tooltip.item.category]}
                </div>
              </div>
            </div>
            <p className="text-[12px] text-[var(--text-muted)] leading-relaxed">{tooltip.item.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
