import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vitruvius Cyber | AI Security Assessment and Enterprise Defense",
  description:
    "AI security assessment, red team validation, zero trust architecture, and compliance engineering for regulated organizations.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://vitruviuscyber.com"),
  openGraph: {
    title: "Vitruvius Cyber",
    description:
      "Security and AI governance advisory for regulated enterprises.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
