export type PlatformCategory = "model" | "channel" | "connector";

export interface PlatformItem {
  name: string;
  category: PlatformCategory;
  description: string;
  iconKey?: string;
  img?: string;
}

export const communicationPlatforms: readonly PlatformItem[] = [
  { name: "Slack", category: "channel", description: "Start runs, receive summaries, and clear approvals inside Slack.", iconKey: "slack" },
  { name: "Microsoft Teams", category: "channel", description: "Route drafts, approvals, and operational updates through Teams.", img: "/icons/integrations/teams.svg" },
  { name: "Discord", category: "channel", description: "Connect agent notifications and commands to Discord communities or internal servers.", iconKey: "discord" },
  { name: "WhatsApp", category: "channel", description: "Send workflow updates and approval prompts through WhatsApp.", iconKey: "whatsapp" },
  { name: "Telegram", category: "channel", description: "Use Telegram bots for fast commands, summaries, and approval nudges.", iconKey: "telegram" },
  { name: "Email / Gmail", category: "channel", description: "Draft, review, and send email workflows from approved inboxes.", iconKey: "gmail" },
  { name: "Google Meet", category: "channel", description: "Support meeting scheduling, summaries, and follow-up workflows.", iconKey: "googlemeet" },
  { name: "iMessage", category: "channel", description: "Route personal or team Apple-message workflows through a controlled bridge.", iconKey: "imessage" },
  { name: "WeChat", category: "channel", description: "Reach teams and customers who operate through WeChat channels.", iconKey: "wechat" },
  { name: "WeCom", category: "channel", description: "Support enterprise WeChat workspaces and internal operations.", iconKey: "wecom" },
  { name: "QQBot", category: "channel", description: "Connect QQ bot workflows for regional team and community channels.", iconKey: "qqbot" },
  { name: "SMS", category: "channel", description: "Send short operational alerts and approval prompts by text message.", iconKey: "sms" },
  { name: "Signal", category: "channel", description: "Use Signal for privacy-sensitive notifications and approvals.", iconKey: "signal" },
  { name: "Workplace", category: "channel", description: "Connect Meta Workplace communities and internal team spaces.", iconKey: "workplace" },
  { name: "Android / Termux", category: "channel", description: "Run mobile-adjacent command workflows through Android and Termux environments.", iconKey: "android" },
  { name: "Voice", category: "channel", description: "Support voice-triggered workflows and spoken operational updates.", iconKey: "voice" },
  { name: "Web API", category: "channel", description: "Start and monitor workflows from product surfaces or custom web apps.", iconKey: "webapi" },
] as const;

export const modelProviders: readonly PlatformItem[] = [
  { name: "Anthropic Claude", category: "model", description: "Reasoning, writing, and agent workflow models from Anthropic.", iconKey: "claude" },
  { name: "OpenAI", category: "model", description: "OpenAI model families for reasoning, multimodal, and tool-use workflows.", iconKey: "openai" },
  { name: "Google Gemini", category: "model", description: "Google models for multimodal and long-context workloads.", iconKey: "google" },
  { name: "Meta Llama", category: "model", description: "Open model families for private, local, or cost-controlled deployments.", iconKey: "meta" },
  { name: "Mistral", category: "model", description: "Efficient models for speed-sensitive and cost-optimized tasks.", img: "/icons/integrations/mistral.svg" },
  { name: "DeepSeek", category: "model", description: "Reasoning models for research, analysis, and technical workflows.", img: "/icons/integrations/deepseek.svg" },
  { name: "Qwen", category: "model", description: "Alibaba model family for multilingual and long-context tasks.", img: "/icons/integrations/qwen.svg" },
  { name: "Kimi", category: "model", description: "Moonshot AI models for long-document and heavy-context work.", img: "/icons/integrations/kimi.svg" },
  { name: "MiniMax", category: "model", description: "Versatile models for multimodal and delegated task execution.", img: "/icons/integrations/minimax.svg" },
  { name: "OpenRouter", category: "model", description: "Routing layer for 300+ additional models without rebuilding workflows.", img: "/icons/integrations/openrouter.svg" },
] as const;

export const connectors: readonly PlatformItem[] = [
  { name: "Google Drive", category: "connector", description: "Read and organize approved Drive files for document-backed work.", iconKey: "googledrive" },
  { name: "Google Calendar", category: "connector", description: "Read events and schedule recurring workflow triggers.", iconKey: "googlecalendar" },
  { name: "GitHub", category: "connector", description: "Inspect repositories, issues, pull requests, and commits.", iconKey: "github" },
  { name: "Notion", category: "connector", description: "Read and update pages, databases, and project documentation.", iconKey: "notion" },
  { name: "Zoom", category: "connector", description: "Schedule meetings and process recordings as workflow inputs.", iconKey: "zoom" },
  { name: "Linear", category: "connector", description: "Read and update issues, cycles, and project status.", iconKey: "linear" },
  { name: "Confluence", category: "connector", description: "Read and write documentation pages in team wikis.", iconKey: "confluence" },
  { name: "Browserbase", category: "connector", description: "Browser automation for web-based operations and research.", img: "/icons/integrations/browserbase.svg" },
  { name: "Cursor", category: "connector", description: "AI coding environment integration for engineering workflows.", img: "/icons/integrations/cursor.svg" },
  { name: "VS Code", category: "connector", description: "Development workflow integration for local engineering tasks.", img: "/icons/integrations/vscode.svg" },
  { name: "Firecrawl", category: "connector", description: "Web scraping and content extraction for research workflows.", img: "/icons/integrations/firecrawl.svg" },
] as const;

export const executionBackends = ["Local", "Docker", "SSH", "Singularity", "Modal"] as const;

export const allPlatforms: readonly PlatformItem[] = [
  ...communicationPlatforms,
  ...modelProviders,
  ...connectors,
] as const;