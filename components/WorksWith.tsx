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
  return (
    <div className="integrations-marquee border-y border-[var(--border)] py-7 overflow-hidden">
      <div className="text-xs tracking-[2px] text-[var(--text-muted)] text-center mb-5 uppercase">
        Approved systems, channels, APIs, and model providers
      </div>
      <div className="relative">
        <div className="integration-row flex items-center gap-10 whitespace-nowrap" style={{ animation: "marquee 65s linear infinite", width: "max-content" }}>
          {doubled.map((tool, i) => (
            <div key={`${tool.name}-${i}`} className="integration-icon flex items-center gap-2 text-[var(--text-muted)] transition duration-200 hover:scale-[1.04] hover:text-[var(--text)] hover:opacity-100">
              {tool.Icon ? (
                <tool.Icon size={14} aria-hidden="true" />
              ) : tool.img ? (
                <Image
                  src={tool.img}
                  alt=""
                  width={14}
                  height={14}
                  className="rounded-[2px] opacity-60"
                  aria-hidden="true"
                />
              ) : null}
              <span className="text-sm font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
