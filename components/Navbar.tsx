import Link from "next/link";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-sm text-muted hover:text-sand transition">
    {children}
  </Link>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg border border-line bg-slate2 shadow-soft" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">VITRUVIUS</div>
              <div className="text-xs text-muted">Cyber Advisory</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="/ai-governance">AI Governance</NavLink>
            <NavLink href="/architecture">Architecture</NavLink>
            <NavLink href="/red-team">Red Team</NavLink>
            <NavLink href="/compliance">Compliance</NavLink>
            <NavLink href="/insights">Insights</NavLink>
            <Link
              href="/contact"
              className="rounded-full border border-gold/50 bg-gold/10 px-4 py-2 text-sm text-sand hover:bg-gold/20 transition"
            >
              Book a Session
            </Link>
          </nav>

          <Link
            href="/contact"
            className="md:hidden rounded-full border border-gold/50 bg-gold/10 px-4 py-2 text-sm"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
