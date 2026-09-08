import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
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
    default: "Francis Njoroge | Technical Support Engineer & Aspiring SRE",
    template: "%s | Francis Njoroge",
  },
  description:
    "Portfolio of Francis Njoroge Wanjiru — Technical Support Engineer and aspiring Site Reliability Engineer focused on incident response, API troubleshooting, Linux systems, Kubernetes, SQL diagnosis, and resilient automation.",
  keywords: [
    "Francis Njoroge",
    "Francis Njoroge Wanjiru",
    "Technical Support Engineer",
    "Aspiring SRE",
    "Site Reliability Engineer",
    "Incident Response",
    "Kubernetes",
    "Linux Troubleshooting",
    "REST API Troubleshooting",
    "Python Automation",
    "Bash Scripting",
    "SQL Database Support",
    "Customer Support Engineer Kenya",
    "Application Support",
    "DevOps Enthusiast",
    "IT Support Engineer",
    "Production Troubleshooting",
  ],
  authors: [{ name: "Francis Njoroge Wanjiru", url: "https://www.linkedin.com/in/francis-njoroge-31698181" }],
  creator: "Francis Njoroge Wanjiru",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "/",
    title: "Francis Njoroge | Technical Support Engineer & Aspiring SRE",
    description:
      "Explore the portfolio of Francis Njoroge Wanjiru — a technical support professional with a strong interest in SRE, incident response, Linux operations, Kubernetes, API troubleshooting, and resilient service delivery.",
    siteName: "Francis Njoroge Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Francis Njoroge Wanjiru — Technical Support Engineer & Aspiring SRE Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Francis Njoroge | Technical Support Engineer & Aspiring SRE",
    description:
      "Technical Support Engineer focused on incident investigation, API debugging, Linux systems, Kubernetes, SQL diagnosis, and automation for reliable operations.",
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
      </body>
    </html>
  );
}
