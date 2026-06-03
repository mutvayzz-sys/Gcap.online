import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import ProductPillars from "@/components/ProductPillars";
import IntegrationsSection from "@/components/IntegrationsSection";
import HowItWorks from "@/components/HowItWorks";
import UseCases from "@/components/UseCases";
import DeploymentSection from "@/components/DeploymentSection";
import FeatureMatrix from "@/components/FeatureMatrix";
import SchoolExample from "@/components/SchoolExample";
import TrustControl from "@/components/TrustControl";
import FinalCTA from "@/components/FinalCTA";

const navItems = [
  { href: "#product", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#deployments", label: "Deployments" },
  { href: "#contact", label: "Contact" },
];

export default function GCAPLabs() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-[#111111] selection:text-white">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-8">
          <a href="#product" className="flex items-center gap-3" aria-label="GCAP home">
            <Image src="/images/logo.svg" alt="GCAP Labs" className="h-8 w-auto" width={32} height={32} priority />
            <span className="text-[21px] font-medium tracking-[-0.8px]">GCAP</span>
          </a>
          <div className="hidden items-center gap-8 text-[15px] md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-[var(--text-muted)]">
                {item.label}
              </a>
            ))}
          </div>
          <a href="mailto:waitlist@gcap.online?subject=Headmaster Demo Request" className="hidden rounded-full bg-[#111111] px-6 py-[10px] text-sm text-[#F9F7F3] transition-colors hover:bg-black md:inline-flex">
            Book a Demo
          </a>
        </div>
      </nav>

      <main>
        <HeroSection />
        <ProductPillars />
        <IntegrationsSection />
        <HowItWorks />
        <UseCases />
        <DeploymentSection />
        <FeatureMatrix />
        <SchoolExample />
        <TrustControl />
        <FinalCTA />
      </main>

      <footer className="border-t border-[var(--border)] px-8 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[var(--text-muted)] md:flex-row md:items-center md:justify-between">
          <div>© 2026 GCAP. Headmaster is a persistent AI workforce layer for organizations.</div>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-[var(--text)]">Privacy</a>
            <a href="/terms" className="hover:text-[var(--text)]">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
