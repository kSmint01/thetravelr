import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TheTravelr — Share Your Journey, Inspire the World",
  description:
    "TheTravelr is the community platform for passionate travelers. Post your journeys, discover hidden gems, and connect with explorers worldwide. Download on Google Play.",
  keywords: ["travel", "journey", "community", "backpacking", "adventure", "explore"],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "TheTravelr — Share Your Journey, Inspire the World",
    description:
      "Post your journeys, discover hidden gems, and connect with explorers worldwide.",
    type: "website",
    siteName: "TheTravelr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
