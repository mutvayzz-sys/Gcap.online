import { CheckCircle2, KeyRound, LockKeyhole, SlidersHorizontal, TimerReset } from "lucide-react";
import { trustControls } from "@/src/data/trustControls";
import SectionHeader from "./SectionHeader";

const trustIcons = [CheckCircle2, KeyRound, LockKeyhole, SlidersHorizontal, TimerReset];

export default function TrustControl() {
  return (
    <section
      id="control"
      className="border-b border-[var(--border)] bg-[var(--bg-elevated)] py-24"
    >
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeader
          eyebrow="Trust & Control"
          title="Built for Control, Not Blind Automation"
          body="Headmaster is designed to work through permissions, review steps, and approved tools so organizations stay in control."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4" data-reveal-group>
          {trustControls.map((control, i) => {
            const Icon = trustIcons[i % trustIcons.length];
            return (
              <div
                key={control.title}
                data-reveal-item
                className="rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-6"
              >
                <Icon size={22} strokeWidth={1.7} className="mb-6" aria-hidden="true" />
                <h3 className="text-lg font-medium tracking-tight mb-3 leading-tight">{control.title}</h3>
                <p className="text-[14px] text-[var(--text-muted)] leading-relaxed">{control.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
