import Link from "next/link";

import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft mt-24 bg-night/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <BrandLogo variant="mono" />
            <p className="mt-4 max-w-md text-sm text-muted leading-relaxed">
              Strategic AI security, offensive validation, identity-first architecture,
              and enterprise risk engineering for high-assurance environments.
            </p>
            <p className="mt-4 text-xs text-muted/80 uppercase tracking-[0.14em]">
              © {new Date().getFullYear()} Vitruvius Cyber Systems
            </p>
          </div>

          <div className="text-sm">
            <h4 className="text-xs uppercase tracking-[0.18em] text-cyan">Services</h4>
            <div className="mt-3 flex flex-col gap-2 text-muted">
              <Link className="hover:text-sand" href="/ai-security-assessment">AI Security Assessment</Link>
              <Link className="hover:text-sand" href="/red-team">Red Team Sprint</Link>
              <Link className="hover:text-sand" href="/architecture">Zero Trust Workshop</Link>
              <Link className="hover:text-sand" href="/compliance">Compliance Engineering</Link>
            </div>
          </div>

          <div className="text-sm">
            <h4 className="text-xs uppercase tracking-[0.18em] text-cyan">Research</h4>
            <div className="mt-3 flex flex-col gap-2 text-muted">
              <Link className="hover:text-sand" href="/platforms">Platforms</Link>
              <Link className="hover:text-sand" href="/insights">Insights</Link>
              <Link className="hover:text-sand" href="/topics/ai-security-zero-trust">Topic Cluster</Link>
              <Link className="hover:text-sand" href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
