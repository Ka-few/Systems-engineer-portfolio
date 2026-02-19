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
  title: "Francis Njoroge Wanjiru | Business Systems Engineer",
  description:
    "Portfolio of a Business Systems Engineer specializing in offline-first architecture, distributed data sync, and multi-branch desktop applications for SMEs.",
  keywords: [
    "Business Systems Engineer",
    "Offline-First Architecture",
    "Multi-Branch Software",
    "LAN Sync",
    "Desktop Applications",
    "SQLite",
    "Role-Based Access",
  ],
  authors: [{ name: "Francis Njoroge Wanjiru" }],
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
