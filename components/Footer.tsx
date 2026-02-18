import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line mt-20">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="text-sm font-semibold tracking-wide">VITRUVIUS</div>
            <div className="mt-2 text-sm text-muted max-w-md">
              AI security, governance, red team, architecture, and compliance advisory for regulated enterprises.
            </div>
            <div className="mt-4 text-xs text-muted">
              © {new Date().getFullYear()} VitruviusCyber.com
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="flex flex-col gap-2">
              <Link className="text-muted hover:text-sand" href="/ai-governance">AI Governance</Link>
              <Link className="text-muted hover:text-sand" href="/architecture">Architecture</Link>
              <Link className="text-muted hover:text-sand" href="/red-team">Red Team</Link>
              <Link className="text-muted hover:text-sand" href="/compliance">Compliance</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link className="text-muted hover:text-sand" href="/insights">Insights</Link>
              <Link className="text-muted hover:text-sand" href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
