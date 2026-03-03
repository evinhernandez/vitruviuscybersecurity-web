"use client";

import Link from "next/link";

import { track } from "@/lib/analytics";

export default function TrackedCtaLink({
  href,
  className,
  children,
  eventName,
  payload,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
  eventName: string;
  payload?: Record<string, unknown>;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => track(eventName, payload)}
    >
      {children}
    </Link>
  );
}
