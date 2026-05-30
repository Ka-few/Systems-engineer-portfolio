import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://francisnjoroge.com"),
  title: {
    default: "Francis Njoroge | Business Systems Engineer",
    template: "%s | Francis Njoroge",
  },
  description:
    "Portfolio of Francis Njoroge, a Business Systems Engineer specializing in offline-first architecture, distributed data sync, and multi-branch desktop applications for SMEs in Kenya and beyond.",
  keywords: [
    "Francis Njoroge",
    "Francis Njoroge Wanjiru",
    "Business Systems Engineer",
    "Software Engineer Kenya",
    "Offline-First Architecture",
    "Multi-Branch Software",
    "LAN Sync",
    "Desktop Applications for SMEs",
    "System Design",
    "TypeScript",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Francis Njoroge Wanjiru", url: "https://www.linkedin.com/in/francis-njoroge-31698181" }],
  creator: "Francis Njoroge",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "/",
    title: "Francis Njoroge | Business Systems Engineer",
    description: "Explore the portfolio of Francis Njoroge, showcasing enterprise-level system architecture, offline-first web apps, and reliable software for SMEs.",
    siteName: "Francis Njoroge Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Francis Njoroge - Business Systems Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Francis Njoroge | Business Systems Engineer",
    description: "Portfolio of Francis Njoroge, building robust systems for SMEs.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} dark`}>
      <body style={{ fontFamily: "'Space Grotesk', 'Inter', system-ui, sans-serif" }}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
