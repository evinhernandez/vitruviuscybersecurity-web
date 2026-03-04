import Link from "next/link";

export default function PillarCard({
  title,
  desc,
  href,
  bullets,
}: {
  title: string;
  desc: string;
  href: string;
  bullets: string[];
}) {
  return (
    <Link
      href={href}
      className="group block rounded-xl2 surface-panel p-6 transition-transform hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold text-sand">{title}</div>
          <div className="mt-2 text-sm text-muted leading-relaxed">{desc}</div>
        </div>
        <div className="mt-1 text-cyan/80 group-hover:text-cyan transition">↗</div>
      </div>
      <ul className="mt-5 space-y-2 text-sm text-muted">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="text-cyan2">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </Link>
  );
}
