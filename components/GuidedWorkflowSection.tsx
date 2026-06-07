import SectionHeader from "./SectionHeader";
import ProductShot from "./ProductShot";

const steps = [
  "Loads workspace context, memory, documents, and previous formats.",
  "Selects the right tools, channels, and specialist agents for the workflow.",
  "Builds a review-ready output with a clear approval checkpoint.",
];

export default function GuidedWorkflowSection() {
  return (
    <section
      id="guided-workflow"
      data-chapter="guided-workflow"
      data-label="Guided Workflow"
      className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]"
    >
      <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-12 items-center">
        <div>
          <SectionHeader
            eyebrow="Guided Workflow Run"
            title="Watch Headmaster turn context into reviewed work."
            body="The strongest proof is the run itself: steps, context, tools, output preview, and the approval checkpoint are visible before anything important leaves the workspace."
          />
          <div className="space-y-3" data-reveal-group>
            {steps.map((step, index) => (
              <div
                key={step}
                data-reveal-item
                className="flex gap-4 rounded-2xl border border-[var(--border)] bg-white p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#111111] text-sm font-medium text-[#F9F7F3]">
                  {index + 1}
                </div>
                <p className="text-[15px] leading-relaxed text-[var(--text-muted)]">{step}</p>
              </div>
            ))}
          </div>
          <a
            href="/products/headmaster#guided-run"
            className="mt-7 inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] px-7 py-3 text-[15px] font-medium transition-all hover:bg-white"
          >
            See the full product story
          </a>
        </div>

        <div data-reveal>
          <ProductShot
            src="https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/12-guided-workflow-run.png"
            alt="Guided workflow run showing steps, context, tools, output preview, and approval checkpoint."
            aspect="aspect-[16/10]"
            className="shadow-[0_18px_70px_rgba(0,0,0,0.13)]"
          />
        </div>
      </div>
    </section>
  );
}
