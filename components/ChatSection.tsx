"use client";

import SectionHeader from "./SectionHeader";
import ProductShot from "./ProductShot";

export default function ChatSection() {
  return (
    <section
      id="chat"
      data-chapter="chat"
      data-label="Chat"
      className="max-w-[1280px] mx-auto px-8 py-24 border-b border-[var(--border)]"
    >
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div data-reveal>
          <SectionHeader
            eyebrow="Natural language to approved work."
            title="Ask once. Headmaster plans, delegates, and returns a review-ready output."
            body="Start with a request, attach context, and let Headmaster turn it into a plan, workflow, draft, or approval-ready output. Chat is the front door — the product is what happens behind it."
          />
          <div className="mt-6 space-y-4 text-[17px] text-[var(--text-muted)] leading-relaxed">
            <p>
              Type a request in natural language. Headmaster loads the right memory, picks the right tools, delegates to specialist agents, and prepares a draft for your review.
            </p>
            <p>
              Sensitive actions pause for approval. Nothing leaves the workspace until a human confirms it.
            </p>
          </div>
          <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 shadow-sm">
            <div className="rounded-2xl bg-white p-4 text-[15px] text-[var(--text)]">
              "Write the Q3 client report using last month's data and our format."
            </div>
            <div className="mt-4 space-y-3 font-mono text-[12px] text-[var(--text-muted)]">
              <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3">
                <span>Loading memory</span><span>12 context items</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3">
                <span>Selecting tools</span><span>Drive · email draft</span>
              </div>
              <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3">
                <span>Queued for approval</span><span>1 client-facing report</span>
              </div>
            </div>
          </div>
        </div>

        <div data-reveal>
          <ProductShot
            src="https://5e9r2bdnqbomlbee.public.blob.vercel-storage.com/02-chat-ask-headmaster.png"
            alt="Headmaster chat view generating a product launch plan from workspace context."
            aspect="aspect-[16/10]"
          />
        </div>
      </div>
    </section>
  );
}
