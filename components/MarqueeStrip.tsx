"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  SiSlack, SiGmail, SiGithub, SiNotion, SiZoom,
  SiLinear, SiGoogledrive, SiGooglecalendar, SiConfluence,
  SiOpenai, SiGoogle, SiMeta, SiClaude, SiGooglemeet,
  SiTelegram, SiWhatsapp, SiDiscord, SiSignal,
  SiAndroid, SiWorkplace,
} from "react-icons/si";
import { MessageSquare, Mic, Globe } from "lucide-react";
import type { IconType } from "react-icons";

import { allPlatforms, type PlatformCategory, type PlatformItem } from "@/src/data/platforms";

const ICONS: Record<string, IconType> = {
  slack: SiSlack,
  gmail: SiGmail,
  github: SiGithub,
  notion: SiNotion,
  zoom: SiZoom,
  linear: SiLinear,
  googledrive: SiGoogledrive,
  googlecalendar: SiGooglecalendar,
  confluence: SiConfluence,
  openai: SiOpenai,
  google: SiGoogle,
  meta: SiMeta,
  claude: SiClaude,
  googlemeet: SiGooglemeet,
  telegram: SiTelegram,
  whatsapp: SiWhatsapp,
  discord: SiDiscord,
  imessage: SiAndroid, // using SiAndroid; iMessage icon not distinct in react-icons
  signal: SiSignal,
  workplace: SiWorkplace,
  android: SiAndroid,
  sms: MessageSquare as unknown as IconType,
  voice: Mic as unknown as IconType,
  webapi: Globe as unknown as IconType,
};

export interface MarqueeItem extends PlatformItem {
  category: PlatformCategory;
  Icon?: IconType;
}

export const ALL_ITEMS: MarqueeItem[] = allPlatforms.map((item) => ({
  ...item,
  Icon: item.iconKey ? ICONS[item.iconKey] : undefined,
}));

const CATEGORY_LABELS: Record<MarqueeItem["category"], string> = {
  model: "AI Model",
  channel: "Communication Channel",
  connector: "Connector / Integration",
};

const CATEGORY_COLORS: Record<MarqueeItem["category"], string> = {
  model: "bg-[var(--bg)] text-[var(--text-muted)] border-[var(--border)]",
  channel: "bg-[var(--bg)] text-[var(--text-muted)] border-[var(--border)]",
  connector: "bg-[var(--bg)] text-[var(--text-muted)] border-[var(--border)]",
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
  const [hovering, setHovering] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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
    const seq = [...set, ...set];
    return (
      <div
        className="marquee-row flex w-max"
        style={{
          animation: reducedMotion ? "none" : `marquee ${dur}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
          animationPlayState: reducedMotion ? "running" : hovering ? "paused" : "running",
          transition: "animation-play-state 0.4s ease",
        }}
      >
        {seq.map((item, i) => (
          <button
            key={i}
            type="button"
            onMouseEnter={(e) => handleEnter(item, e)}
            onMouseLeave={() => setTooltip(null)}
            onFocus={(e) => handleEnter(item, e)}
            onBlur={() => setTooltip(null)}
            className="flex flex-col items-center gap-2.5 group cursor-default focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text)] mr-9 flex-shrink-0 rounded-md"
            tabIndex={i < set.length ? 0 : -1}
            aria-label={item.name}
          >
            <div
              className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-200 ${styles.iconBg} ${styles.hoverShadow} hover-lift`}
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
    <div
      ref={containerRef}
      className="relative overflow-visible py-2"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => { setHovering(false); setTooltip(null); }}
    >
      <button
        className="sr-only focus:not-sr-only fixed bottom-4 right-4 z-40 px-4 py-2 bg-[var(--text)] text-[var(--bg)] rounded-full text-sm font-medium"
        onClick={() => setHovering(p => !p)}
        aria-label={hovering ? 'Resume integration ticker' : 'Pause integration ticker'}
      >
        {hovering ? 'Resume' : 'Pause'}
      </button>
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
          className="absolute z-50 pointer-events-none"
          style={{ left: tooltip.x, top: tooltip.y - 10, transform: "translate(-50%, -100%)" }}
        >
          <div className="bg-white rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.10)] p-4 w-[220px]">
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
                <div className={`inline-block text-[10px] px-2 py-0.5 border font-medium mt-0.5 ${CATEGORY_COLORS[tooltip.item.category]}`}>
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