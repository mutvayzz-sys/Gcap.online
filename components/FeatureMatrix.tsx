import { features } from "@/src/data/features";
import SectionHeader from "./SectionHeader";

export default function FeatureMatrix() {
  return (
    <section
      id="features"
      data-chapter="features"
      data-label="Features"
      className="bg-[#0D0D0D] text-[#F9F7F3] py-24 border-b border-black"
    >
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeader
          eyebrow="Feature Matrix"
          title="More Than a Chat Interface"
          body="The visible interface is only the front door. The product layer underneath gives organizations memory, permissions, automation, tool access, and reviewable agent work."
          inverse
        />
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.25)]" data-reveal>
          <div className="grid gap-3">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="grid md:grid-cols-[0.85fr_1.15fr] gap-4 rounded-3xl border border-white/10 bg-white/[0.035] px-6 py-5 transition hover:bg-white/[0.05]"
              >
                <div className="font-medium tracking-tight text-white text-[15px] md:text-base">{feature.capability}</div>
                <div className="text-white/70 leading-relaxed text-[15px]">{feature.meaning}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
