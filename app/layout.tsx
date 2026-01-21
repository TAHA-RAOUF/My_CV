import type { Metadata } from "next";
import { JetBrains_Mono, Space_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Developer Portfolio | Retro Pixel Design",
  description:
    "A minimal developer portfolio with retro pixel art aesthetics, inspired by terminal UI and hacker culture.",
  keywords: [
    "developer",
    "portfolio",
    "pixel art",
    "retro",
    "web development",
    "programming",
    "hacker culture",
    "terminal UI",
    "Software Engineering",
    "Full-Stack Development",
    "Open Source",
  ],
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>T</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${spaceMono.variable} antialiased`}
        style={{ fontFamily: 'var(--font-jetbrains-mono), var(--font-space-mono), monospace' }}
      >
        {children}
      </body>
    </html>
  );
}
