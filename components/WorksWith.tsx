"use client";

import Image from "next/image";
import {
  SiSlack, SiGmail, SiGithub, SiNotion, SiZoom,
  SiLinear, SiGoogledrive, SiGooglecalendar, SiConfluence,
  SiOpenai, SiGoogle, SiMeta, SiClaude, SiGooglemeet,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Tool {
  name: string;
  Icon?: IconType;
  img?: string;
}

const TOOLS: Tool[] = [
  { name: "Claude",           Icon: SiClaude },
  { name: "OpenAI",           Icon: SiOpenai },
  { name: "Gemini",           Icon: SiGoogle },
  { name: "Llama",            Icon: SiMeta },
  { name: "Mistral",          img: "/icons/integrations/mistral.svg" },
  { name: "Kimi",             img: "/icons/integrations/kimi.svg" },
  { name: "DeepSeek",         img: "/icons/integrations/deepseek.svg" },
  { name: "Qwen",             img: "/icons/integrations/qwen.svg" },
  { name: "MiniMax",          img: "/icons/integrations/minimax.svg" },
  { name: "OpenRouter",       img: "/icons/integrations/openrouter.svg" },
  { name: "Slack",            Icon: SiSlack },
  { name: "Gmail",            Icon: SiGmail },
  { name: "Google Drive",     Icon: SiGoogledrive },
  { name: "Google Calendar",  Icon: SiGooglecalendar },
  { name: "Google Meet",      Icon: SiGooglemeet },
  { name: "Notion",           Icon: SiNotion },
  { name: "GitHub",           Icon: SiGithub },
  { name: "Linear",           Icon: SiLinear },
  { name: "Teams",            img: "/icons/integrations/teams.svg" },
  { name: "Zoom",             Icon: SiZoom },
  { name: "Confluence",       Icon: SiConfluence },
  { name: "VS Code",          img: "/icons/integrations/vscode.svg" },
  { name: "Cursor",           img: "/icons/integrations/cursor.svg" },
  { name: "Browserbase",      img: "/icons/integrations/browserbase.svg" },
  { name: "Firecrawl",        img: "/icons/integrations/firecrawl.svg" },
];

const doubled = [...TOOLS, ...TOOLS];

export default function WorksWith() {
  // Three rows with staggered calm durations (55s-75s) + one reversed for subtle parallax
  const rows = [
    { duration: "70s", reverse: false },
    { duration: "62s", reverse: true },
    { duration: "75s", reverse: false },
  ];

  return (
    <div className="integrations-marquee overflow-hidden border-y border-[var(--border)] bg-[var(--bg-elevated)] py-8">
      <div className="text-xs tracking-[2px] text-[var(--text-muted)] text-center mb-6 uppercase">
        Approved systems, channels, APIs, and model providers
      </div>
      <div className="relative flex flex-col gap-6">
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className="integration-row flex items-center gap-9 whitespace-nowrap will-change-transform"
            style={{
              animation: `marquee ${row.duration} linear infinite ${row.reverse ? "reverse" : "normal"}`,
              width: "max-content",
            }}
            aria-hidden={rowIdx > 0}
          >
            {doubled.map((tool, i) => (
              <div
                key={`${rowIdx}-${i}`}
                className="integration-icon flex items-center gap-2 text-[var(--text-muted)]"
              >
                {tool.Icon ? (
                  <tool.Icon size={15} aria-hidden="true" />
                ) : tool.img ? (
                  <Image
                    src={tool.img}
                    alt=""
                    width={15}
                    height={15}
                    className="rounded-[2px] opacity-70"
                    aria-hidden="true"
                  />
                ) : null}
                <span className="text-sm font-medium tracking-[-0.1px]">{tool.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
