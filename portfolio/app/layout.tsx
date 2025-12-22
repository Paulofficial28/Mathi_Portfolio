import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mathi - Creative Designer & Video Editor Portfolio",
  description: "Portfolio of Mathiyazhagan C - Professional Graphic Designer and Video Editor specializing in Adobe Creative Suite, motion graphics, and visual storytelling.",
  keywords: ["graphic design", "video editing", "portfolio", "creative designer", "motion graphics", "adobe creative suite", "premiere pro", "photoshop", "after effects"],
  authors: [{ name: "Mathiyazhagan C" }],
  creator: "Mathiyazhagan C",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Mathi - Creative Designer & Video Editor Portfolio",
    description: "Professional Graphic Designer and Video Editor specializing in Adobe Creative Suite, motion graphics, and visual storytelling.",
    siteName: "Mathi Portfolio",
    images: [
      {
        url: "/profile_1.jpg",
        width: 1200,
        height: 630,
        alt: "Mathi - Creative Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mathi - Creative Designer & Video Editor Portfolio",
    description: "Professional Graphic Designer and Video Editor specializing in Adobe Creative Suite and visual storytelling.",
    images: ["/profile_1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
