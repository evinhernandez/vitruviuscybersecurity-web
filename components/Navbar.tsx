import Link from "next/link";

import BrandLogo from "@/components/BrandLogo";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-xs uppercase tracking-[0.18em] text-muted hover:text-cyan transition"
  >
    {children}
  </Link>
);

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-soft bg-night/80 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between py-3">
          <BrandLogo href="/" />

          <nav className="hidden lg:flex items-center gap-5">
            <NavLink href="/ai-security-assessment">Assessment</NavLink>
            <NavLink href="/ai-governance">AI Governance</NavLink>
            <NavLink href="/architecture">Architecture</NavLink>
            <NavLink href="/red-team">Red Team</NavLink>
            <NavLink href="/compliance">Compliance</NavLink>
            <NavLink href="/platforms">Platforms</NavLink>
            <NavLink href="/insights">Insights</NavLink>
            <Link
              href="/contact"
              className="rounded-full border border-cyan/40 bg-cyan/12 px-5 py-2 text-xs tracking-[0.16em] uppercase text-cyan hover:bg-cyan/20"
            >
              Request Assessment
            </Link>
          </nav>

          <Link
            href="/contact"
            className="lg:hidden rounded-full border border-cyan/40 bg-cyan/10 px-4 py-2 text-xs uppercase tracking-[0.14em] text-cyan"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
