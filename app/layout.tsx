import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { buildPageMetadata } from "@/lib/metadata";
import {
  organizationSchema,
  professionalServiceSchema,
  websiteSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "Vitruvius Cyber Systems | AI Security and Zero Trust Advisory",
    description:
      "Cinematic enterprise cybersecurity brand focused on AI security assessment, zero trust architecture, red teaming, and compliance engineering.",
    path: "/",
    keywords: [
      "AI security assessment",
      "zero trust architecture",
      "enterprise cybersecurity advisory",
      "LLM red teaming",
      "AI governance",
    ],
  }),
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vitruviuscyber.com"),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const graph = [organizationSchema(), professionalServiceSchema(), websiteSchema()];

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
