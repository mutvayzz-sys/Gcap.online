import WorksWith from "./WorksWith";
import SectionHeader from "./SectionHeader";

export default function IntegrationsSection() {
  return (
    <section className="px-8 py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-[var(--border)] bg-white shadow-[var(--shadow-card)]">
        <div className="px-6 pt-12 md:px-12">
          <SectionHeader
            eyebrow="Connected Tool Layer"
            title="Headmaster connects to the systems your work already lives in."
            body="Bring documents, messages, APIs, calendars, browsers, databases, terminals, and internal tools into one persistent agent workspace. Headmaster does not just answer from memory. It works through approved tools."
          />
        </div>
        <WorksWith />
      </div>
    </section>
  );
}
