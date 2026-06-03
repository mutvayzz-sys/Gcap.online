import WorksWith from "./WorksWith";
import SectionHeader from "./SectionHeader";
import ProductShot from "./ProductShot";

export default function IntegrationsSection() {
  return (
    <section
      id="connected-tools"
      data-chapter="connected-tools"
      data-label="Integrations"
      className="border-b border-[var(--border)] py-20"
    >
      <div className="mx-auto max-w-[1280px] px-8 mb-10">
        <div className="max-w-[1120px]">
          <SectionHeader
            eyebrow="Gateways · Providers · Connectors & MCP"
            title="Connect the systems work already lives in."
            body="Reach Headmaster through your team's channels, run it on the models you choose, and connect the tools, MCP servers, and systems your work already depends on."
          />
        </div>
      </div>
      <WorksWith />

      <div className="mt-14 max-w-[1280px] mx-auto px-8" data-reveal>
        <ProductShot
          src="https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/10-integrations-channels-mcp.png"
          alt="Integrations page showing channels, tools, connectors, MCP servers, webhooks, and API keys."
          aspect="aspect-[16/10]"
          parallax
        />
      </div>
    </section>
  );
}
