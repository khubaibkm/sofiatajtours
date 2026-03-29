import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { OrganizationSchema, WebsiteSchema } from "@/components/schema-markup"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sofiatajtours.com"),
  title: "Taj Mahal Tours from Delhi (2026) | Save 30% + Free Traditional Dress | Sofia Taj Tours",
  description:
    "⭐ 5000+ Happy Travelers | Book Taj Mahal day tours from Delhi with FREE traditional Indian dress photoshoot | Skip-the-line tickets | Private AC car | Expert guides | 30% OFF | Free cancellation | Book now, pay later | 24/7 WhatsApp support",
  authors: [{ name: "Sofia Taj Tours" }],
  creator: "Sofia Taj Tours",
  publisher: "Sofia Taj Tours",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sofiatajtours.com",
    siteName: "Sofia Taj Tours",
    title: "Taj Mahal Tours from Delhi | Save 30% + Free Traditional Dress",
    description: "⭐ 5000+ Happy Travelers | Same-day Taj Mahal tours with FREE Saree/Kurta photoshoot | Skip-the-line access | 30% OFF | Free cancellation | Book now!",
    images: [
      {
        url: "/images/taj (1).jpg",
        width: 1200,
        height: 800,
        alt: "Taj Mahal Tour from Delhi with Traditional Indian Dress - Sofia Taj Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taj Mahal Tours from Delhi | 30% OFF + Free Traditional Dress",
    description: "⭐ 5000+ Happy Travelers | Same-day tours with FREE Saree/Kurta | Skip-the-line | Book now, pay later",
    creator: "@sofiatajtours",
    images: ["/images/taj (1).jpg"],
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
    canonical: "https://www.sofiatajtours.com",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1a6d4f",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
