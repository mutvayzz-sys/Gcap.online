import { deploymentCapabilities } from "@/src/data/deploymentCapabilities";
import SectionHeader from "./SectionHeader";

export default function DeploymentSection() {
  return (
    <section id="deployments" className="px-8 py-24">
      <div className="mx-auto max-w-6xl rounded-[32px] border border-[var(--border)] bg-[#0D0D0D] p-6 text-white md:p-10">
        <SectionHeader inverse title="Configured Around Your Organization" body="Every deployment can include custom workflows, private memory, approved tools, branded interfaces, role permissions, and human review rules." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deploymentCapabilities.map((capability) => (
            <article key={capability.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-white/20 hover:bg-white/[0.07]">
              <h3 className="text-xl font-medium tracking-tight">{capability.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{capability.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
