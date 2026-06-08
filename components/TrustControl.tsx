import { CheckCircle2, KeyRound, LockKeyhole, SlidersHorizontal, TimerReset } from "lucide-react";
import { trustControls } from "@/src/data/trustControls";
import SectionHeader from "./SectionHeader";

const trustIcons = [CheckCircle2, KeyRound, LockKeyhole, SlidersHorizontal, TimerReset];
const roles = [
  { name: "Viewer", scope: "Read runs and audit history", tools: "No tool access" },
  { name: "Operator", scope: "Launch approved workflows", tools: "Scoped tools" },
  { name: "Approver", scope: "Release gated outputs", tools: "Approval queue" },
  { name: "Administrator", scope: "Configure policy", tools: "Workspace settings" },
];

export default function TrustControl() {
  return (
    <section
      id="control"
      className="border-b border-[var(--border)] bg-[var(--bg-elevated)] py-20"
    >
      <div className="max-w-[1120px] mx-auto px-8">
        <SectionHeader
          eyebrow="Trust & Control"
          title="Your approval before anything important ships"
          body="Headmaster is designed to work through permissions, review steps, and approved tools so organizations stay in control."
        />
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div className="grid md:grid-cols-2 gap-5" data-reveal-group>
            {trustControls.map((control, i) => {
              const Icon = trustIcons[i % trustIcons.length];
              return (
                <div
                  key={control.title}
                  data-reveal-item
                  className="border-l-2 border-[var(--border-strong)] pl-5 py-1"
                >
                  <div className="flex items-center gap-2 mb-2 text-[var(--text)]">
                    <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                    <h3 className="font-medium tracking-tight">{control.title}</h3>
                  </div>
                  <p className="text-[15px] text-[var(--text-muted)] leading-relaxed pl-6">{control.description}</p>
                </div>
              );
            })}
          </div>

          <div className="rounded-3xl border border-black/10 bg-[#0D0D0D] p-6 text-[#F9F7F3] shadow-sm" data-reveal aria-labelledby="workspace-roles-heading">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">Permission policy</p>
                <h3 id="workspace-roles-heading" className="mt-1 text-xl font-medium tracking-tight">Workspace roles</h3>
              </div>
              <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/60">Live</span>
            </div>
            <ul role="list" className="space-y-3" aria-label="Workspace roles">
              {roles.map((role) => (
                <li key={role.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="font-medium">{role.name}</div>
                    <div className="text-xs text-white/45">{role.tools}</div>
                  </div>
                  <div className="mt-2 text-sm text-white/60 max-w-none">{role.scope}</div>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-2xl bg-white/[0.04] p-4 text-sm text-white/60 max-w-none">
              External emails, data writes, and client-facing exports require an approver before release.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
