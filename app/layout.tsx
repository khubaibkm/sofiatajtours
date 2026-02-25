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
  title: "Sofia Taj Tours - Taj Mahal Tours from Delhi | Golden Triangle Tour Packages",
  description:
    "Book your Taj Mahal tour from Delhi with Sofia Taj Tours. Offering same-day tours with traditional Indian dress, Golden Triangle packages, Delhi city tours, and customized India tours with up to 30% discount. 24/7 support & free cancellation.",
  keywords:
    "Taj Mahal tours from Delhi, Golden Triangle tour, Delhi city tours, Agra tours, Jaipur tours, India tour packages, private tours India, Taj Mahal sunrise tour, same day Agra tour, India travel, traditional Indian dress, saree photoshoot Taj Mahal, cultural tours India",
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
    title: "Sofia Taj Tours - Taj Mahal & Golden Triangle Tour Packages",
    description: "Book Taj Mahal tours from Delhi, Golden Triangle packages & Delhi city tours with up to 30% discount. Free cancellation & 24/7 support.",
    images: [
      {
        url: "/images/taj (1).jpg",
        width: 1200,
        height: 800,
        alt: "Sofia Taj Tours - Taj Mahal Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofia Taj Tours - Taj Mahal & India Tour Packages",
    description: "Book Taj Mahal tours from Delhi with up to 30% discount. Private guided tours with free cancellation.",
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
  generator: 'v0.app'
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
