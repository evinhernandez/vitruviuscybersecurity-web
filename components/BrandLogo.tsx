import { useId } from "react";
import Link from "next/link";

type BrandLogoProps = {
  variant?: "icon" | "lockup" | "mono";
  className?: string;
  href?: string;
};

function Mark({ className = "h-8 w-8", mono = false }: { className?: string; mono?: boolean }) {
  const gradientId = useId();
  const strokeMain = mono ? "#d9e7f5" : `url(#${gradientId})`;
  const strokeSoft = mono ? "rgba(217,231,245,0.66)" : "#9bc4db";
  const nodePrimary = mono ? "#d9e7f5" : "#74f0d7";

  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      className={className}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={gradientId} x1="10" y1="10" x2="100" y2="110">
          <stop offset="0" stopColor="#74f0d7" />
          <stop offset="0.55" stopColor="#38d9c1" />
          <stop offset="1" stopColor="#9bc4db" />
        </linearGradient>
      </defs>

      <rect x="6" y="6" width="108" height="108" rx="24" fill="rgba(6,14,20,0.75)" />

      <path
        d="M22 26h18l20 56 20-56h18L64 96H56L22 26z"
        fill="none"
        stroke={strokeMain}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="60"
        cy="60"
        r="24"
        fill="none"
        stroke={strokeSoft}
        strokeOpacity="0.7"
        strokeWidth="1.6"
      />

      <path
        d="M60 40v34"
        stroke={strokeMain}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path
        d="M47 52h26"
        stroke={strokeSoft}
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M50 47l20 10"
        stroke={strokeMain}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M70 47l-20 10"
        stroke={strokeMain}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M60 74l-11 12"
        stroke={strokeSoft}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M60 74l11 12"
        stroke={strokeSoft}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="60" cy="35" r="3.4" fill={nodePrimary} />

      <path
        d="M60 24v72"
        stroke={strokeMain}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="3 6"
        opacity="0.85"
      />
      <circle cx="60" cy="59" r="2.2" fill={nodePrimary} />
      <circle cx="60" cy="86" r="2.7" fill={strokeSoft} />
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
      <Mark className={variant === "icon" ? "h-9 w-9" : "h-10 w-10"} mono={variant === "mono"} />
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
