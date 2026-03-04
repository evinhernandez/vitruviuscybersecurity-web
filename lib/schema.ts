import { getCanonical } from "@/lib/metadata";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vitruvius Cyber Systems",
    url: getCanonical("/"),
    logo: getCanonical("/favicon.ico"),
    sameAs: ["https://vitruviuscyber.com"],
    description:
      "AI security, zero trust architecture, offensive validation, and enterprise risk engineering.",
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Vitruvius Cyber Systems",
    serviceType: [
      "AI Security Assessment",
      "Red Team Sprint",
      "Zero Trust Architecture Workshop",
      "Compliance and Risk Engineering",
    ],
    url: getCanonical("/"),
    areaServed: "Global",
    description:
      "Strategic cybersecurity and AI advisory services for regulated and high-assurance environments.",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vitruvius Cyber Systems",
    url: getCanonical("/"),
    potentialAction: {
      "@type": "SearchAction",
      target: `${getCanonical("/insights")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function articleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  keywords,
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  keywords: string[];
}) {
  const url = getCanonical(`/insights/${slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: "Vitruvius Cyber Systems",
    },
    publisher: {
      "@type": "Organization",
      name: "Vitruvius Cyber Systems",
      logo: {
        "@type": "ImageObject",
        url: getCanonical("/favicon.ico"),
      },
    },
    keywords,
    mainEntityOfPage: url,
  };
}
