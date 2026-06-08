"use client";

import {
  Terminal,
  Globe,
  Monitor,
  FileText,
  Code2,
  Image,
  Mic,
  Plug,
  Shield,
  Lock,
  Send,
  Cloud,
  Server,
  Laptop,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Star,
  MessageSquare,
  Timer,
  Users,
  Brain,
  Zap,
} from "lucide-react";

const chalk = {
  white: "text-[#F5F5F5]",
  yellow: "text-[#FFE566]",
  pink: "text-[#FF9999]",
  blue: "text-[#66B3FF]",
  green: "text-[#90EE90]",
  orange: "text-[#FFB366]",
};

const bgChalk = {
  yellow: "bg-[#FFE566]/20",
  pink: "bg-[#FF9999]/20",
  blue: "bg-[#66B3FF]/20",
  green: "bg-[#90EE90]/20",
  orange: "bg-[#FFB366]/20",
};

function ModuleBadge({ coord }: { coord: string }) {
  return (
    <span className="inline-block text-[10px] tracking-[0.12em] font-mono bg-white/10 px-2 py-0.5 rounded text-[#F5F5F5]/60 mb-3">
      {coord}
    </span>
  );
}

function ChalkBorder({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`border border-white/20 rounded-lg p-5 ${className}`}>
      {children}
    </div>
  );
}

function StepCircle({ num, color }: { num: number; color: string }) {
  return (
    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold ${color === "yellow" ? "border-[#FFE566] text-[#FFE566]" : "border-[#66B3FF] text-[#66B3FF]"}`}>
      {num}
    </div>
  );
}

export default function HeadmasterInfographic() {
  return (
    <section className="bg-[#1A1A1A] text-[#F5F5F5] overflow-hidden" data-chapter="infographic" data-label="How It Works">
      {/* Subtle chalk texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\"/%3E%3C/svg%3E')" }} />

      <div className="max-w-[1120px] mx-auto px-6 md:px-8 py-16 md:py-24 relative">
        {/* MODULE A-01: Header */}
        <div className="text-center mb-14">
          <ModuleBadge coord="A-01" />
          <div className="flex items-center justify-center gap-3 mb-2">
            <Star size={18} className="text-[#FFE566]" />
            <h2 className="text-[clamp(2.2rem,5vw,3.2rem)] font-bold tracking-tight text-[#F5F5F5]" style={{ fontFamily: "Georgia, serif" }}>
              HEADMASTER
            </h2>
            <Star size={18} className="text-[#FFE566]" />
          </div>
          <p className="text-[#F5F5F5]/70 text-[17px] mb-1">The AI Workforce Layer by GCAP Labs</p>
          <p className="text-[#FF9999] text-[15px] italic">Persistent. Adaptive. Everywhere.</p>
          {/* Decorative underline */}
          <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#FFE566] to-transparent mx-auto mt-4" />
        </div>

        {/* MODULE B-02: 3 Steps */}
        <div className="mb-12">
          <ChalkBorder className="relative">
            <ModuleBadge coord="B-02" />
            <h3 className="text-[18px] font-semibold text-[#FFE566] mb-6 text-center" style={{ fontFamily: "Georgia, serif" }}>
              From zero to agent in 3 steps
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  num: 1,
                  title: "Install",
                  code: "curl -fsSL gcaplabs.com/install | sh",
                  desc: "One command. Works everywhere.",
                },
                {
                  num: 2,
                  title: "Configure",
                  code: "headmaster setup",
                  desc: "Pick your platform. Pick your model.",
                },
                {
                  num: 3,
                  title: "Deploy",
                  code: "headmaster gateway setup",
                  desc: "Agent is live. Working. Remembering.",
                },
              ].map((step, idx) => (
                <div key={step.num} className="flex flex-col items-center gap-3">
                  <StepCircle num={step.num} color="yellow" />
                  <div className="text-[16px] font-medium text-[#F5F5F5]">{step.title}</div>
                  <code className="text-[13px] text-[#66B3FF] bg-white/5 rounded px-3 py-1.5 border border-white/10">
                    {step.code}
                  </code>
                  <p className="text-[13px] text-[#F5F5F5]/50 text-center">{step.desc}</p>
                  {idx < 2 && (
                    <ArrowRight size={16} className="text-[#FFE566] hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
                  )}
                </div>
              ))}
            </div>
          </ChalkBorder>
        </div>

        {/* Middle row: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* MODULE C-01: Core Capabilities */}
          <ChalkBorder>
            <ModuleBadge coord="C-01" />
            <h3 className="text-[16px] font-semibold text-[#66B3FF] mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Core Capabilities
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Terminal, label: "Terminal", color: chalk.white },
                { icon: FileText, label: "Files", color: chalk.white },
                { icon: Globe, label: "Web Search", color: chalk.blue },
                { icon: Monitor, label: "Browser", color: chalk.blue },
                { icon: Code2, label: "Code Exec", color: chalk.green },
                { icon: Image, label: "Image Gen", color: chalk.pink },
                { icon: Mic, label: "TTS", color: chalk.orange },
                { icon: Plug, label: "Tool Servers", color: chalk.yellow },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={14} className={color.split(" ")[0]} strokeWidth={1.8} />
                  <span className="text-[13px] text-[#F5F5F5]/80">{label}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#F5F5F5]/40 mt-3 italic">60+ built-in tools</p>
          </ChalkBorder>

          {/* MODULE D-02: What Makes It An Agent */}
          <ChalkBorder>
            <ModuleBadge coord="D-02" />
            <h3 className="text-[16px] font-semibold text-[#FF9999] mb-4" style={{ fontFamily: "Georgia, serif" }}>
              What Makes It An Agent
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Skills", color: "yellow" },
                { label: "Delegation", color: "yellow" },
                { label: "Model Routing", color: "yellow" },
                { label: "Persistent Memory", color: "pink" },
                { label: "Approval Gates", color: "pink" },
                { label: "Context Files", color: "blue" },
                { label: "Batch Processing", color: "blue" },
                { label: "Cron Scheduling", color: "green" },
                { label: "Code Execution", color: "green" },
                { label: "Subagent Spawning", color: "orange" },
              ].map(({ label, color }) => (
                <span key={label} className={`text-[12px] px-2.5 py-1 rounded-full border ${color === "yellow" ? "border-[#FFE566]/40 text-[#FFE566]" : color === "pink" ? "border-[#FF9999]/40 text-[#FF9999]" : color === "blue" ? "border-[#66B3FF]/40 text-[#66B3FF]" : color === "green" ? "border-[#90EE90]/40 text-[#90EE90]" : "border-[#FFB366]/40 text-[#FFB366]"}`}>
                  {label}
                </span>
              ))}
            </div>
          </ChalkBorder>

          {/* MODULE E-01: Any Model No Lock-In */}
          <ChalkBorder>
            <ModuleBadge coord="E-01" />
            <h3 className="text-[16px] font-semibold text-[#90EE90] mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Any Model. No Lock-In.
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: "Claude", color: bgChalk.yellow, textColor: chalk.yellow },
                { label: "OpenAI", color: bgChalk.blue, textColor: chalk.blue },
                { label: "Gemini", color: bgChalk.yellow, textColor: chalk.yellow },
                { label: "Grok", color: bgChalk.pink, textColor: chalk.pink },
                { label: "Llama", color: bgChalk.blue, textColor: chalk.blue },
                { label: "DeepSeek", color: bgChalk.green, textColor: chalk.green },
                { label: "Mistral", color: bgChalk.orange, textColor: chalk.orange },
                { label: "Qwen", color: bgChalk.orange, textColor: chalk.orange },
                { label: "Ollama", color: bgChalk.yellow, textColor: chalk.yellow },
                { label: "OpenRouter", color: bgChalk.blue, textColor: chalk.blue },
                { label: "NIM", color: bgChalk.blue, textColor: chalk.blue },
                { label: "Bedrock", color: bgChalk.green, textColor: chalk.green },
              ].map(({ label, color, textColor }) => (
                <span key={label} className={`text-[11px] px-2 py-0.5 rounded ${color} ${textColor.split(" ")[0]}`}>
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <MessageSquare size={12} className="text-[#FFB366]" />
              <span className="text-[12px] text-[#FFB366]">300+ model routes</span>
            </div>
          </ChalkBorder>
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* MODULE F-02: 14 Messaging Platforms */}
          <ChalkBorder>
            <ModuleBadge coord="F-02" />
            <h3 className="text-[16px] font-semibold text-[#FF9999] mb-4" style={{ fontFamily: "Georgia, serif" }}>
              14 Messaging Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Telegram", color: "pink" },
                { label: "Slack", color: "pink" },
                { label: "Discord", color: "green" },
                { label: "WhatsApp", color: "green" },
                { label: "Signal", color: "pink" },
                { label: "Email", color: "pink" },
                { label: "Teams", color: "blue" },
                { label: "iMessage", color: "blue" },
                { label: "SMS", color: "blue" },
                { label: "Matrix", color: "green" },
                { label: "Feishu", color: "blue" },
                { label: "Mattermost", color: "orange" },
              ].map(({ label, color }) => (
                <span key={label} className={`text-[12px] px-2.5 py-1 rounded-full border ${color === "pink" ? "border-[#FF9999]/40 text-[#FF9999]" : color === "green" ? "border-[#90EE90]/40 text-[#90EE90]" : color === "blue" ? "border-[#66B3FF]/40 text-[#66B3FF]" : "border-[#FFB366]/40 text-[#FFB366]"}`}>
                  {label}
                </span>
              ))}
              <span className="text-[12px] px-2.5 py-1 rounded-full border border-white/20 text-[#F5F5F5]/50">+2 more</span>
            </div>
            <p className="text-[12px] text-[#F5F5F5]/50 mt-3 italic">
              Same memory. Same permissions. Same audit trail. Everywhere.
            </p>
          </ChalkBorder>

          {/* MODULE G-01: Infrastructure + Security */}
          <div className="space-y-4">
            <ChalkBorder>
              <ModuleBadge coord="G-01" />
              <h3 className="text-[16px] font-semibold text-[#66B3FF] mb-3" style={{ fontFamily: "Georgia, serif" }}>
                Your Infrastructure, Your Rules
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <Lock size={14} className="text-[#66B3FF]" strokeWidth={1.8} />
                <span className="text-[13px] text-[#F5F5F5]/70">
                  local · docker · ssh · cloud · serverless · on-prem
                </span>
              </div>
              <p className="text-[11px] text-[#F5F5F5]/40 italic">6 execution backends</p>
            </ChalkBorder>

            <ChalkBorder>
              <ModuleBadge coord="G-02" />
              <h3 className="text-[16px] font-semibold text-[#FFE566] mb-3" style={{ fontFamily: "Georgia, serif" }}>
                Human In The Loop
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <Shield size={14} className="text-[#FFE566]" strokeWidth={1.8} />
                <span className="text-[13px] text-[#F5F5F5]/70">
                  Every high-stakes action needs your approval.
                </span>
              </div>
              <div className="flex items-center gap-3 text-[12px]">
                <span className="text-[#F5F5F5]/50">Deploy to prod?</span>
                <span className="text-[#90EE90] flex items-center gap-1">
                  <CheckCircle2 size={12} /> Approve
                </span>
                <span className="text-[#FF9999] flex items-center gap-1">
                  <XCircle size={12} /> Deny
                </span>
              </div>
            </ChalkBorder>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-[12px] text-[#F5F5F5]/30 font-mono tracking-widest">
            GCAP LABS · GCAPLABS.COM
          </p>
          <div className="flex items-center justify-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={8} className="text-[#FFE566]/30" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}