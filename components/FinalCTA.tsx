import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="px-8 py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[36px] bg-[#111] px-8 py-16 text-center text-white shadow-2xl md:px-14 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-medium tracking-tight md:text-7xl">Deploy Headmaster inside your organization.</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/65 md:text-xl">
            Start with one workflow, connect the right tools, and let your AI workforce learn from real operations.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="mailto:waitlist@gcap.online?subject=Headmaster Demo Request" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-medium text-[#111] transition hover:bg-white/90">
              Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="mailto:waitlist@gcap.online?subject=Headmaster Deployment Discussion" className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-lg font-medium text-white transition hover:bg-white/10">
              Discuss a Deployment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
