"use client";

import SectionHeader from "./SectionHeader";
import ProductShot from "./ProductShot";

export default function ModelAgnostic() {
  return (
    <section
      id="models"
      data-chapter="models"
      data-label="Models"
      className="bg-[#0D0D0D] text-[#F9F7F3] py-24 border-b border-black"
    >
      <div className="max-w-[1120px] mx-auto px-8">
        <SectionHeader
          eyebrow="Route work to the right model, automatically"
          title="Headmaster is model-agnostic. TayX is GCAP’s trained and fine-tuned model layer."
          body="Headmaster can route work across cloud models, coding models, local models, enterprise endpoints, custom endpoints, and GCAP’s own TayX model layer."
          inverse
        />

        <div className="mt-10 grid md:grid-cols-2 gap-x-16 gap-y-0 border-t border-white/10" data-reveal>
          {[
            {
              title: "Cloud models",
              description: "For scale and speed when the work does not need to stay on-premise.",
            },
            {
              title: "Local models",
              description: "For privacy-first deployments where data should not leave your infrastructure.",
            },
            {
              title: "Coding models",
              description: "For development workflows that need structured reasoning and code understanding.",
            },
            {
              title: "Custom endpoints",
              description: "For enterprise agreements or proprietary model stacks already in use.",
            },
          ].map((item) => (
            <div key={item.title} className="py-7 border-b border-white/10">
              <div className="text-[17px] font-medium tracking-tight mb-1.5">{item.title}</div>
              <p className="text-[15px] text-white/55 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[15px] text-white/40 leading-relaxed max-w-2xl" data-reveal>
          Future models can be added without rebuilding the product. Headmaster routes work to the engine that fits the task, and TayX remains GCAP’s own tuned option inside that broader model stack.
        </p>
      </div>

      <div className="mt-10 max-w-[1120px] mx-auto px-8" data-reveal>
        <ProductShot
          src="https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/11-model-stack-providers-tayx.png"
          alt="Model stack page showing TayX, cloud models, coding models, local models, and enterprise endpoints."
          aspect="aspect-[16/10]"
          className="border-white/10"
        />
      </div>
    </section>
  );
}
