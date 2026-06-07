import { CheckCircle2, KeyRound, LockKeyhole, SlidersHorizontal, TimerReset } from "lucide-react";
import { trustControls } from "@/src/data/trustControls";
import SectionHeader from "./SectionHeader";

const trustIcons = [CheckCircle2, KeyRound, LockKeyhole, SlidersHorizontal, TimerReset];

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" data-reveal-group>
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
      </div>
    </section>
  );
}
