import { KeyRound, LockKeyhole, MailCheck, Network, Workflow } from "lucide-react";
import { deploymentCapabilities } from "@/src/data/deploymentCapabilities";
import SectionHeader from "./SectionHeader";

const deploymentIcons = [LockKeyhole, Workflow, KeyRound, MailCheck, Network, KeyRound]; // 6 items

export default function DeploymentSection() {
  return (
    <section
      id="deployments"
      data-chapter="deployments"
      data-label="Deployments"
      className="max-w-6xl mx-auto px-8 py-24 border-b border-[var(--border)]"
    >
      <SectionHeader
        eyebrow="Configured Around Your Organization"
        title="Configured Deployments"
        body="Every deployment can include custom workflows, private memory, approved tools, branded interfaces, role permissions, and human review rules."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" data-reveal-group>
        {deploymentCapabilities.map((capability, i) => {
          const Icon = deploymentIcons[i % deploymentIcons.length];
          return (
            <div
              key={capability.title}
              data-reveal-item
              className="rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7"
            >
              <Icon className="mb-6 text-[var(--text)]" size={24} strokeWidth={1.7} aria-hidden="true" />
              <h3 className="text-xl font-medium tracking-tight mb-3">{capability.title}</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{capability.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
