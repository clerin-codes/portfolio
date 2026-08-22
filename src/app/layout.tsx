import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { BootSequence } from "@/components/terminal/boot-sequence";
import { LOCAL_URL, SITE_URL } from "@/lib/constants";
import { THEME_INIT_SCRIPT } from "@/lib/theme";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const metadataBase = new URL(SITE_URL ?? LOCAL_URL);

export const metadata: Metadata = {
  metadataBase,
  title: "Clerin Balakrishnan | Full-Stack & Mobile Developer",
  description:
    "Portfolio of Clerin Balakrishnan, a Software Engineering undergraduate building full-stack web and mobile applications with React, Node.js, Flutter, and Firebase.",
  applicationName: "Clerin Balakrishnan — Portfolio",
  authors: [{ name: "Clerin Balakrishnan" }],
  creator: "Clerin Balakrishnan",
  keywords: ["Clerin Balakrishnan", "Software Engineering", "Full-stack developer", "Mobile developer", "React", "Next.js", "Flutter", "Sri Lanka"],
  ...(SITE_URL ? { alternates: { canonical: SITE_URL } } : {}),
  openGraph: {
    type: "website",
    title: "Clerin Balakrishnan | Full-Stack & Mobile Developer",
    description: "Software Engineering undergraduate building full-stack web and mobile experiences.",
    siteName: "Clerin Balakrishnan — Portfolio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Clerin Balakrishnan developer portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clerin Balakrishnan | Full-Stack & Mobile Developer",
    description: "Software Engineering undergraduate building full-stack web and mobile experiences.",
    images: ["/opengraph-image"],
  },
  icons: { icon: "/icon" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#effaf1" },
    { media: "(prefers-color-scheme: dark)", color: "#051007" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jetBrainsMono.variable} suppressHydrationWarning>
      <head>
        <script id="theme-init" dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body suppressHydrationWarning>
        <BootSequence />
        <div className="scanlines" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
