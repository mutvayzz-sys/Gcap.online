import WorksWith from "./WorksWith";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { communicationPlatforms, modelProviders } from "@/src/data/platforms";

export default function IntegrationsSection() {
  return (
    <section
      id="connected-tools"
      data-chapter="connected-tools"
      data-label="Integrations"
      className="border-b border-[var(--border)] bg-[var(--bg-elevated)] py-20"
    >
      <div className="mx-auto mb-10 max-w-[1280px] px-8">
        <div className="max-w-[920px]">
          <SectionHeader
            eyebrow="Meets your team where they already work"
            title={`${communicationPlatforms.length} platforms. ${modelProviders.length} named model providers plus 300+ via OpenRouter. One workspace.`}
            body="Headmaster connects across communication channels, documents, calendars, browsers, tools, connectors, and model providers so workflows can reach the places your team already works."
          />
        </div>
      </div>
      <WorksWith />
      <div className="mx-auto mt-10 max-w-[1280px] px-8">
        <Link
          href="/integrations"
          className="inline-flex rounded-full border border-[var(--border-strong)] px-6 py-3 text-[14px] font-medium transition-all hover:bg-[var(--bg)]"
        >
          Explore deeper integrations on the Headmaster page
        </Link>
      </div>
    </section>
  );
}
