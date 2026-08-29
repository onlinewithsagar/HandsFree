import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, CheckCircle2, Scale, Zap } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | HandsFree",
  description: "Terms and conditions governing the use of HandsFree web development and autonomous AI services.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-neutral-200 font-sans selection:bg-[#B8FF00] selection:text-black">
      {/* Top Header */}
      <header className="border-b border-white/10 bg-black/40 backdrop-blur-2xl sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/logo-icon-tight.png"
                alt="HandsFree"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="font-heading font-black text-xl tracking-tight text-white leading-none">
              <span>Hands</span><span className="text-[#B8FF00]">Free</span>
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-white/10 text-xs font-semibold text-neutral-300 hover:text-white hover:border-[#B8FF00] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#B8FF00]/10 border border-[#B8FF00]/25 text-[#B8FF00] font-mono text-xs font-bold uppercase mb-6">
          <Scale className="w-3.5 h-3.5" />
          <span>Terms & Agreement</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-heading font-black text-white tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base font-mono mb-12">
          Effective Date: August 2026 &bull; Last Updated: Today
        </p>

        <div className="space-y-12 text-sm sm:text-base leading-relaxed text-neutral-300">
          <section className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 space-y-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#B8FF00]" /> 1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website, contracting our engineering services, or utilizing any autonomous AI agents, web applications, or digital workflows provided by HandsFree (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;HandsFree&rdquo;), you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-white">
              2. Scope of Services & Sprints
            </h2>
            <p>
              HandsFree delivers bespoke web applications, conversion-focused user interfaces, autonomous AI agent pipelines, and enterprise automation infrastructure. All service specifications, milestones, deliverables, and timelines are executed in accordance with individual sprint agreements or statement of work (SOW) documents agreed upon during onboarding.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-white">
              3. Intellectual Property & Code Ownership
            </h2>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B8FF00] shrink-0 mt-0.5" />
                <span><strong className="text-white">Client Ownership:</strong> Upon completion of payment milestones, 100% full intellectual property and source code ownership of custom build deliverables transfer to the client.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B8FF00] shrink-0 mt-0.5" />
                <span><strong className="text-white">Proprietary Frameworks:</strong> Pre-existing reusable utility libraries, template orchestrators, and internal tooling remain property of HandsFree, granted to the client under an irrevocable, non-exclusive license.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-white">
              4. Service Availability & Hypercare SLAs
            </h2>
            <p>
              Projects delivered under our dedicated sprint model include 30 calendar days of post-launch hypercare monitoring. Ongoing uptime SLAs, maintenance cycles, and dynamic prompt tuning are governed under monthly active retainer agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-white">
              5. Limitation of Liability
            </h2>
            <p>
              HandsFree and its engineers shall not be liable for indirect, incidental, or consequential damages resulting from third-party API downtimes, external provider policy shifts, or client-managed production keys. Total liability is limited to the fees paid for the specific sprint engagement under dispute.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-white">
              6. Governing Law & Inquiries
            </h2>
            <p>
              These terms are governed by and construed in accordance with applicable laws. For legal inquiries, please contact:
            </p>
            <div className="p-4 rounded-xl bg-neutral-900 border border-white/10 font-mono text-xs text-[#B8FF00] inline-block">
              handsfree.in@gmail.com
            </div>
          </section>
      </main>

      <Footer />
    </div>
  );
}
