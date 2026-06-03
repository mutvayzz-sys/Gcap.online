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
    <section id="integrations" data-chapter="tools" data-label="Tools" className="border-y border-[var(--border)] py-14 overflow-hidden bg-[var(--bg)]">
      <div className="max-w-5xl mx-auto px-8 text-center mb-8" data-reveal>
        <div className="uppercase tracking-[2.5px] text-xs text-[var(--text-muted)] mb-3">Connected Tool Layer</div>
        <h2 className="text-[30px] md:text-[44px] tracking-[-1.2px] md:tracking-[-1.8px] font-medium mb-4 leading-tight">
          Headmaster connects to the systems your work already lives in.
        </h2>
        <p className="text-[17px] md:text-[19px] text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
          Bring documents, messages, APIs, calendars, browsers, databases, terminals, and internal tools into one persistent agent workspace. Headmaster does not just answer from memory. It works through approved tools.
        </p>
      </div>
      <div className="relative">
        <div
          className="integrations-marquee flex items-center gap-10 whitespace-nowrap"
          style={{ animation: "marquee 65s linear infinite", width: "max-content" }}
          aria-label="Supported tools and integration providers"
        >
          {doubled.map((tool, i) => (
            <div key={`${tool.name}-${i}`} className="integration-icon flex items-center gap-2 text-[var(--text-muted)] opacity-80">
              {tool.Icon ? (
                <tool.Icon size={15} aria-hidden="true" />
              ) : tool.img ? (
                <Image
                  src={tool.img}
                  alt=""
                  width={15}
                  height={15}
                  className="opacity-70 rounded-[2px]"
                  aria-hidden="true"
                />
              ) : null}
              <span className="text-sm font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
