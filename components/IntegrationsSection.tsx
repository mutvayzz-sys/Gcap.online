import WorksWith from "./WorksWith";
import SectionHeader from "./SectionHeader";

export default function IntegrationsSection() {
  return (
    <section
      id="connected-tools"
      data-chapter="connected-tools"
      data-label="Tools"
      className="border-b border-[var(--border)] py-20"
    >
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="max-w-[1120px]">
          <SectionHeader
            eyebrow="Connected Tool Layer"
            title="Headmaster connects to the systems your work already lives in."
            body="Documents, messages, calendars, browsers, databases, terminals, and internal tools become part of one persistent agent workspace."
          />
        </div>
      </div>
      <WorksWith />
    </section>
  );
}
