import { KeyRound, LockKeyhole, MailCheck, Network, Palette, Workflow } from "lucide-react";
import { deploymentCapabilities } from "@/src/data/deploymentCapabilities";
import SectionHeader from "./SectionHeader";

const deploymentIcons = [LockKeyhole, Workflow, KeyRound, MailCheck, Network, Palette];

export default function DeploymentSection() {
  return (
    <section
      id="deployments"
      data-chapter="deployments"
      data-label="Deployments"
      className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]"
    >
      <div className="grid lg:grid-cols-12 gap-x-12 gap-y-10 items-start">
        {/* Left intro + capabilities list */}
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Built around how your org actually works"
            title="Configured Deployments"
            body="Every deployment can include custom workflows, private memory, approved tools, branded interfaces, role permissions, and human review rules."
          />

          <div className="mt-8 space-y-6">
            {deploymentCapabilities.map((cap, i) => {
              const Icon = deploymentIcons[i];
              return (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 text-[var(--text)]"><Icon size={19} /></div>
                  <div>
                    <div className="font-medium tracking-tight">{cap.title}</div>
                    <div className="text-[15px] text-[var(--text-muted)] mt-0.5">{cap.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Workspace card — visual flow diagram */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-black/10 bg-white p-3 shadow-sm">
            <div className="rounded-[22px] bg-[#0D0D0D] text-[#F9F7F3] p-7">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-[2px] text-white/40">Private Deployment</div>
                  <div className="text-xl font-medium tracking-tight mt-1">Your Operations Workspace</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active
                  </span>
                  <span className="text-xs px-3 py-1 border border-white/20 text-white/70">Isolated</span>
                </div>
              </div>

              {/* Flow: Input → Workspace → Output */}
              <div className="space-y-3">
                {/* Input row */}
                <div className="rounded-xl bg-white/[0.04] p-4">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-white/40 mb-3">Inputs</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.08] text-[12px] text-white/80">14 workflows</span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.08] text-[12px] text-white/80">Brand voice memory</span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.08] text-[12px] text-white/80">Client formats</span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.08] text-[12px] text-white/80">Google Workspace</span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.08] text-[12px] text-white/80">CRM</span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.08] text-[12px] text-white/80">Calendar</span>
                  </div>
                </div>

                {/* Processing row */}
                <div className="rounded-xl bg-white/[0.04] p-4">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-white/40 mb-3">Workspace processing</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 text-[12px] border border-emerald-500/20">3 automations active</span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.08] text-[12px] text-white/80">Team roles</span>
                    <span className="px-2.5 py-1 rounded-md bg-white/[0.08] text-[12px] text-white/80">Scoped tools</span>
                  </div>
                </div>

                {/* Output row */}
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.04] p-4">
                  <div className="text-[11px] uppercase tracking-[0.14em] text-white/40 mb-3">Gated outputs</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-400 text-[12px] border border-amber-500/20">External emails ↝ Approver</span>
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-400 text-[12px] border border-amber-500/20">Data edits ↝ Approver</span>
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-400 text-[12px] border border-amber-500/20">Client exports ↝ Approver</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 text-xs text-white/50 border-t border-white/10 pt-4 max-w-none">
                Approved tools enabled • 3 scheduled automations active • Full audit trail retained
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}