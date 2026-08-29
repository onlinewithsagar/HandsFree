import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, CheckCircle2, Lock, Eye, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | HandsFree",
  description: "Learn how HandsFree collects, processes, and protects enterprise and client data.",
};

export default function PrivacyPolicy() {
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
          <Shield className="w-3.5 h-3.5" />
          <span>Legal & Compliance</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-heading font-black text-white tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-neutral-400 text-sm sm:text-base font-mono mb-12">
          Effective Date: August 2026 &bull; Last Updated: Today
        </p>

        <div className="space-y-12 text-sm sm:text-base leading-relaxed text-neutral-300">
          <section className="p-6 rounded-2xl bg-neutral-900/40 border border-white/5 space-y-3">
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#B8FF00]" /> 1. Commitment to Data Privacy
            </h2>
            <p>
              At HandsFree (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), we take enterprise data privacy and security with utmost seriousness. This Privacy Policy details how we collect, handle, encrypt, and safeguard information when you use our website, AI infrastructure, autonomous workflow systems, and development services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#B8FF00]" /> 2. Information We Collect
            </h2>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B8FF00] shrink-0 mt-0.5" />
                <span><strong className="text-white">Business Inquiries & Contact Info:</strong> When you book a sprint, schedule a discovery call, or submit a form, we collect your name, business name, phone number, and project scope details.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B8FF00] shrink-0 mt-0.5" />
                <span><strong className="text-white">Telemetry & Analytical Data:</strong> We capture non-identifying technical metadata (browser type, device viewport, latency, page interaction events) to optimize interface speed and user experience.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#B8FF00] shrink-0 mt-0.5" />
                <span><strong className="text-white">Autonomous Agent Pipelines:</strong> Data routed through our custom AI workflows is strictly isolated into private tenant environments and is never shared or used to train public language models.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#B8FF00]" /> 3. How We Use Your Information
            </h2>
            <p>
              We utilize collected information solely for the following business purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              <li>Architecting, engineering, and deploying custom AI automation workflows and web software.</li>
              <li>Responding to enterprise discovery inquiries and scoping custom development sprints.</li>
              <li>Maintaining system telemetry, SLA uptime metrics, and infrastructure health monitoring.</li>
              <li>Ensuring security compliance, fraud prevention, and system integrity.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-white">
              4. Enterprise Data Security & Encryption
            </h2>
            <p>
              All customer transmissions are encrypted using industry-standard TLS 1.3 in transit and AES-256 at rest. Access to operational pipeline credentials and database stores is protected by multi-factor authentication, least-privilege RBAC controls, and automated audit logs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-white">
              5. Third-Party Integrations
            </h2>
            <p>
              When we integrate third-party platforms (such as HubSpot, Salesforce, Linear, Slack, Stripe, or WhatsApp APIs) on your behalf, data handling complies with the individual terms and strict privacy standards of those service providers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-heading font-bold text-white">
              6. Contact & Data Protection Officer
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to request data modification/deletion, please contact our team directly:
            </p>
            <div className="p-4 rounded-xl bg-neutral-900 border border-white/10 font-mono text-xs text-[#B8FF00] inline-block">
              handsfree.in@gmail.com
            </div>
          </section>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-white/10 py-8 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>&copy; {new Date().getFullYear()} HandsFree Systems Inc.</div>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="hover:text-[#B8FF00] transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-[#B8FF00] transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
