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
      className="group block rounded-xl2 border border-line bg-slate2/40 p-6 shadow-soft hover:bg-slate2/60 transition"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <div className="mt-2 text-sm text-muted">{desc}</div>
        </div>
        <div className="mt-1 text-gold/80 group-hover:text-gold transition">↗</div>
      </div>
      <ul className="mt-5 space-y-2 text-sm text-muted">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="text-gold/70">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </Link>
  );
}
