import WorksWith from "./WorksWith";
import SectionHeader from "./SectionHeader";

export default function IntegrationsSection() {
  return (
    <section
      id="connected-tools"
      data-chapter="connected-tools"
      data-label="Tools"
      className="border-b border-[var(--border)] py-16"
    >
      <div className="mx-auto max-w-6xl px-8">
        <SectionHeader
          eyebrow="Connected Tool Layer"
          title="Headmaster connects to the systems your work already lives in."
          body="Bring documents, messages, APIs, calendars, browsers, databases, terminals, and internal tools into one persistent agent workspace. Headmaster does not just answer from memory. It works through approved tools."
        />
      </div>
      <WorksWith />
    </section>
  );
}
