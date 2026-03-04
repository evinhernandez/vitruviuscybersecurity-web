import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://vitruviuscyber.com";
const SITE_NAME = "Vitruvius Cyber Systems";
const DEFAULT_OG_IMAGE = "/og-default.svg";

export function getCanonical(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const canonical = getCanonical(path || "/");
  const ogImage = getCanonical(DEFAULT_OG_IMAGE);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Vitruvius Cyber Systems",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
