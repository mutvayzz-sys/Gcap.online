import { LockKeyhole, Workflow, KeyRound, MailCheck, Network } from "lucide-react";
import { deploymentCapabilities } from "@/src/data/deploymentCapabilities";
import SectionHeader from "./SectionHeader";

const deploymentIcons = [LockKeyhole, Workflow, KeyRound, MailCheck, Network, KeyRound];

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
            eyebrow="Configured Around Your Organization"
            title="Configured Deployments"
            body="Every deployment can include custom workflows, private memory, approved tools, branded interfaces, role permissions, and human review rules."
          />

          <div className="mt-8 space-y-6">
            {deploymentCapabilities.slice(0, 4).map((cap, i) => {
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

        {/* Right: deployment snapshot (contained dark visual) */}
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-black/10 bg-white p-3 shadow-sm">
            <div className="rounded-[22px] bg-[#0D0D0D] text-[#F9F7F3] p-7">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs uppercase tracking-[2px] text-white/40">Private Deployment</div>
                  <div className="text-xl font-medium tracking-tight mt-1">Acme School District — Prod</div>
                </div>
                <div className="text-xs px-3 py-1 border border-white/20 text-white/70">Isolated</div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-white/5 p-4">
                  <div className="text-white/50 text-xs mb-1">Memory &amp; Skills</div>
                  <div className="text-white">14 custom workflows • Prior term formats • Parent tone library</div>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <div className="text-white/50 text-xs mb-1">Connected Tools</div>
                  <div className="text-white">Google Workspace • SIS • Email • Calendar • Internal Drive</div>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <div className="text-white/50 text-xs mb-1">Access &amp; Roles</div>
                  <div className="text-white">Teachers (read + draft) • Admins (approve) • IT (config)</div>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <div className="text-white/50 text-xs mb-1">Approval Gates</div>
                  <div className="text-white">All parent comms • Grade changes • External exports</div>
                </div>
              </div>

              <div className="mt-6 text-xs text-white/50 border-t border-white/10 pt-4">
                Branded interface enabled • 3 scheduled automations active • Full audit log retained
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
