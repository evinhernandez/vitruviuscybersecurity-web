import Link from "next/link";

type BrandLogoProps = {
  variant?: "icon" | "lockup" | "mono";
  className?: string;
  href?: string;
};

function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className={className}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="vitruvius-edge" x1="10" y1="10" x2="100" y2="110">
          <stop offset="0" stopColor="#74f0d7" />
          <stop offset="0.5" stopColor="#38d9c1" />
          <stop offset="1" stopColor="#d0b269" />
        </linearGradient>
      </defs>

      <rect x="6" y="6" width="108" height="108" rx="24" fill="rgba(6,14,20,0.75)" />
      <path
        d="M22 26h18l20 56 20-56h18L64 96H56L22 26z"
        fill="none"
        stroke="url(#vitruvius-edge)"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60 24v72"
        stroke="url(#vitruvius-edge)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="4 5"
      />
      <circle cx="60" cy="34" r="4" fill="#74f0d7" />
      <circle cx="60" cy="60" r="4" fill="#74f0d7" />
      <circle cx="60" cy="86" r="4" fill="#d0b269" />
    </svg>
  );
}

export default function BrandLogo({
  variant = "lockup",
  className,
  href,
}: BrandLogoProps) {
  const node = (
    <span className={className || "inline-flex items-center gap-3"}>
      <Mark className={variant === "icon" ? "h-9 w-9" : "h-10 w-10"} />
      {variant !== "icon" && (
        <span className="leading-[1.1]">
          <span className="block text-sm font-semibold tracking-[0.22em] text-sand uppercase">
            Vitruvius
          </span>
          <span
            className={`block text-[10px] tracking-[0.24em] uppercase ${
              variant === "mono" ? "text-sand/75" : "text-cyan2"
            }`}
          >
            Cyber Systems
          </span>
        </span>
      )}
    </span>
  );

  if (!href) {
    return node;
  }

  return (
    <Link href={href} aria-label="Vitruvius Cyber home" className="inline-flex items-center">
      {node}
    </Link>
  );
}
