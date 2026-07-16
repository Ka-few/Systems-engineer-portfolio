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
    default: "Francis Njoroge | Full Stack Software Engineer",
    template: "%s | Francis Njoroge",
  },
  description:
    "Portfolio of Francis Njoroge Wanjiru — Full Stack Software Engineer specializing in AI-powered applications, Conversational AI, WhatsApp & Twilio integrations, GraphQL APIs, React, TypeScript, Node.js, and enterprise business systems.",
  keywords: [
    "Francis Njoroge",
    "Francis Njoroge Wanjiru",
    "Full Stack Software Engineer",
    "Full Stack Developer Kenya",
    "AI-Powered Applications",
    "Conversational AI",
    "Twilio Developer",
    "WhatsApp Business API",
    "React Developer",
    "TypeScript Engineer",
    "Next.js Developer",
    "GraphQL API",
    "Node.js Developer",
    "Python Developer",
    "Enterprise Software Engineer",
    "Senior Full Stack Engineer",
    "OpenAI API Integration",
    "LLM Integration",
    "CRM Development",
    "PostgreSQL",
  ],
  authors: [{ name: "Francis Njoroge Wanjiru", url: "https://www.linkedin.com/in/francis-njoroge-31698181" }],
  creator: "Francis Njoroge Wanjiru",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "/",
    title: "Francis Njoroge | Full Stack Software Engineer — AI, Conversational AI & Enterprise Systems",
    description:
      "Explore the portfolio of Francis Njoroge Wanjiru — Full Stack Software Engineer building AI-powered applications, WhatsApp & Twilio conversational platforms, GraphQL APIs, and enterprise business systems with React, TypeScript, and Node.js.",
    siteName: "Francis Njoroge Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Francis Njoroge Wanjiru — Full Stack Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Francis Njoroge | Full Stack Software Engineer",
    description:
      "Full Stack Software Engineer specializing in AI-powered applications, Conversational AI, Twilio, WhatsApp integrations, and enterprise business systems.",
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
