"use client";

import { useState } from "react";

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production this would POST to an API / workflow trigger
    window.open("mailto:waitlist@gcap.online?subject=Headmaster Deployment Inquiry", "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      data-chapter="contact"
      data-label="Contact"
      className="max-w-4xl mx-auto px-8 py-24 text-center"
    >
      <div data-reveal>
        <h2 className="text-[36px] md:text-[58px] tracking-[-1.6px] md:tracking-[-2.6px] font-medium mb-6 leading-tight">
          Deploy Headmaster inside your organization.
        </h2>
        <p className="text-[19px] md:text-[22px] text-[var(--text-muted)] leading-snug mb-10 max-w-2xl mx-auto">
          Start with one workflow, connect the right tools, and let your AI workforce learn from real operations.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="field"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Work email"
                className="field"
                required
              />
            </div>
            <input
              type="text"
              name="org"
              placeholder="Organization or team"
              className="field"
            />
            <textarea
              name="workflow"
              placeholder="Which workflow should Headmaster learn first?"
              rows={4}
              className="field resize-y min-h-[108px]"
              required
            />
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="submit"
                data-magnet
                className="flex-1 py-4 rounded-2xl bg-[#111111] text-[#F9F7F3] text-lg font-medium hover:bg-black transition-all"
              >
                Book a Demo
              </button>
              <button
                type="button"
                onClick={() => {
                  window.open("mailto:waitlist@gcap.online?subject=Headmaster Deployment Discussion", "_blank");
                }}
                className="flex-1 py-4 rounded-2xl border border-[var(--border-strong)] text-lg hover:bg-[var(--bg-elevated)] transition-all"
              >
                Discuss a Deployment
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <span className="text-green-600 text-3xl" aria-hidden="true">✓</span>
            </div>
            <h3 className="text-3xl tracking-tight font-medium mb-3">Request received.</h3>
            <p className="text-[var(--text-muted)] max-w-md mx-auto">
              Thank you. Our team will review your deployment fit and reach out with next steps.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 text-sm underline text-[var(--text-muted)] hover:text-[var(--text)]"
            >
              Submit another request
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
