import { Building, MailCheck, PenLine, ShieldCheck, TableProperties } from "lucide-react";
import { schoolWorkflows } from "@/src/data/schoolWorkflows";
import SectionHeader from "./SectionHeader";

const schoolIcons = [MailCheck, TableProperties, PenLine, Building, ShieldCheck];

export default function SchoolExample() {
  return (
    <section
      id="schools"
      className="max-w-[1120px] mx-auto px-8 py-24 border-b border-[var(--border)]"
    >
      <SectionHeader
        eyebrow="Example Deployment"
        title="Example Deployment: Headmaster for Schools"
        body="A school can deploy Headmaster to support teachers and administrators with reports, parent communication, lesson materials, student summaries, and recurring academic workflows. Schools are one example of many deployments."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-reveal-group>
        {schoolWorkflows.map((workflow, i) => {
          const Icon = schoolIcons[i % schoolIcons.length];
          return (
            <div
              key={workflow.title}
              data-reveal-item
              className="border-t border-[var(--border)] pt-7"
            >
              <Icon size={20} strokeWidth={1.7} className="mb-5 text-[var(--text-muted)]" aria-hidden="true" />
              <h3 className="text-[17px] font-medium tracking-tight mb-2 leading-tight">{workflow.title}</h3>
              <p className="text-[15px] text-[var(--text-muted)] leading-relaxed">{workflow.description}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-8 text-xs text-[var(--text-muted)] max-w-prose">
        The same architecture powers deployments in small businesses, agencies, clinics, and technical teams — with the same memory, skills, tools, and approvals.
      </p>
    </section>
  );
}
