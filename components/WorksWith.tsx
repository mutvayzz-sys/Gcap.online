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
    <section id="connected-tools" className="border-y border-[var(--border)] bg-white py-16 overflow-hidden">
      <div className="mx-auto max-w-5xl px-8 text-center mb-10">
        <div className="text-xs tracking-[2.5px] text-[var(--text-muted)] uppercase mb-3">
          Connected Tool Layer
        </div>
        <h2 className="text-[32px] md:text-[48px] tracking-[-1.4px] md:tracking-[-2px] leading-tight font-medium mb-4">
          Headmaster connects to the systems your work already lives in.
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-snug text-[var(--text-muted)]">
          Bring documents, messages, APIs, calendars, browsers, databases, terminals, and internal tools into one persistent agent workspace. Headmaster does not just answer from memory. It works through approved tools.
        </p>
      </div>
      <div className="relative">
        <div
          className="integrations-marquee flex items-center gap-10 whitespace-nowrap"
          style={{ animation: "marquee 70s linear infinite", width: "max-content" }}
        >
          {doubled.map((tool, i) => (
            <div key={i} className="integration-icon flex items-center gap-2 text-[var(--text-muted)] opacity-80 transition-[transform,opacity,filter] duration-300 ease-out hover:scale-[1.04] hover:opacity-100">
              {tool.Icon ? (
                <tool.Icon size={14} aria-hidden="true" />
              ) : tool.img ? (
                <Image
                  src={tool.img}
                  alt=""
                  width={14}
                  height={14}
                  className="opacity-60 rounded-[2px]"
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
