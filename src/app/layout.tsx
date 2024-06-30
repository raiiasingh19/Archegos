import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from '../lib/utils'
import Navbar from '../components/Navbar'
import Script from 'next/script'
import Logo from '../components/assets/Logo-title.jpg'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
  

export const metadata: Metadata = {
  title: "Archegos | High-end Pharmaceuticals",
  description: "Pharmaceutical Manufacturing & Medical Care Company",
  keywords: ["pharmaceuticals", "medical care", "healthcare", "medicines", "online", "pharma"],
  authors: [{ name: "Your Name" }],
  creator: "@raiiasingh19",
  openGraph: {
    title: "Archegos | High-end Pharmaceuticals",
    description: "Pharmaceutical Manufacturing & Medical Care Company",
    url: "http://localhost:3000",
    siteName: "Archegos Pharmaceuticals",
    images: [
      {
        url: "http://Localhost:3000/Logo-title.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Archegos | High-end Pharmaceuticals",
    description: "Pharmaceutical Manufacturing & Medical Care Company",
    images: ["http://localhost:3000/twitter-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: 'http://Localhost:3000/current-page',
  },
  robots: {
    index: false,
    follow: false,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='light'>
      <body className={cn(
        'min-h-screen font-sans antialiased grainy',
        inter.className
      )}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}


