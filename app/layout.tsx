import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { portfolio } from "@/data/portfolio";

import "./globals.css";

const displayFont = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display"
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${portfolio.profile.name} | ${portfolio.profile.role}`,
    template: `%s | ${portfolio.profile.name}`
  },
  description: portfolio.profile.summary,
  openGraph: {
    title: `${portfolio.profile.name} | ${portfolio.profile.role}`,
    description: portfolio.profile.summary,
    url: siteUrl,
    siteName: portfolio.profile.name,
    images: [
      {
        url: "/opengraph-image"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.profile.name} | ${portfolio.profile.role}`,
    description: portfolio.profile.summary
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable}`}>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <div className="site-background" aria-hidden="true" />
        <div className="site-shell">
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
