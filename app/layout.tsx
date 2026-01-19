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
  metadataBase: new URL("https://sofiatajtours.com"),
  title: "Sofia Taj Tours - Premium Taj Mahal Experience | Luxury Tours in Agra",
  description:
    "Discover the timeless beauty of the Taj Mahal with Sofia Taj Tours. Luxury guided experiences, sunrise tours, photography packages, and spiritual journeys to India's most iconic monument.",
  keywords:
    "Taj Mahal tours, Agra tours, luxury travel, sunrise tour, photography tour, spiritual journey, Mughal heritage, Indian tourism",
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
    url: "https://sofiatajtours.com",
    siteName: "Sofia Taj Tours",
    title: "Sofia Taj Tours - Experience the Taj Mahal",
    description: "Luxury guided tours to the Taj Mahal with expert guides and unforgettable experiences.",
    images: [
      {
        url: "/travel-experience.jpg",
        width: 1200,
        height: 1200,
        alt: "Sofia Taj Tours - Taj Mahal Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofia Taj Tours - Taj Mahal Experiences",
    description: "Premium luxury tours to India's most iconic monument.",
    creator: "@sofiatajtours",
    images: ["/travel-experience.jpg"],
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
    canonical: "https://sofiatajtours.com",
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
        <link rel="canonical" href="https://sofiatajtours.com" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
