"use client";

import {
  SiSlack, SiGmail, SiGithub, SiNotion, SiZoom,
  SiLinear, SiGoogledrive, SiGooglecalendar, SiConfluence,
  SiOpenai, SiGoogle, SiMeta,
} from "react-icons/si";
import type { IconType } from "react-icons";

interface Tool {
  name: string;
  Icon?: IconType;
}

const TOOLS: Tool[] = [
  { name: "Claude", Icon: undefined },
  { name: "OpenAI", Icon: SiOpenai },
  { name: "Gemini", Icon: SiGoogle },
  { name: "Llama", Icon: SiMeta },
  { name: "Mistral", Icon: undefined },
  { name: "Kimi", Icon: undefined },
  { name: "DeepSeek", Icon: undefined },
  { name: "Qwen", Icon: undefined },
  { name: "Slack", Icon: SiSlack },
  { name: "Gmail", Icon: SiGmail },
  { name: "Google Drive", Icon: SiGoogledrive },
  { name: "Google Calendar", Icon: SiGooglecalendar },
  { name: "Notion", Icon: SiNotion },
  { name: "GitHub", Icon: SiGithub },
  { name: "Linear", Icon: SiLinear },
  { name: "Teams", Icon: undefined },
  { name: "Zoom", Icon: SiZoom },
  { name: "Confluence", Icon: SiConfluence },
  { name: "VS Code", Icon: undefined },
  { name: "Browserbase", Icon: undefined },
  { name: "Firecrawl", Icon: undefined },
  { name: "OpenRouter", Icon: undefined },
];

const doubled = [...TOOLS, ...TOOLS];

export default function WorksWith() {
  return (
    <div className="border-y border-[var(--border)] py-6 overflow-hidden">
      <div className="text-xs tracking-[2px] text-[var(--text-muted)] text-center mb-5 uppercase">
        Works with your existing tools
      </div>
      <div className="relative">
        <div
          className="flex items-center gap-10 whitespace-nowrap"
          style={{ animation: "marquee 32s linear infinite", width: "max-content" }}
        >
          {doubled.map((tool, i) => (
            <div key={i} className="flex items-center gap-2 text-[var(--text-muted)]">
              {tool.Icon ? (
                <tool.Icon size={14} aria-hidden="true" />
              ) : (
                <span
                  className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-sm text-[9px] font-bold bg-[var(--border)] text-[var(--text-muted)]"
                  aria-hidden="true"
                >
                  {tool.name[0]}
                </span>
              )}
              <span className="text-sm font-medium">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
