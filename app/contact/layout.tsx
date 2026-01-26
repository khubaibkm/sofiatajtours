import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://sofiatajtours.com"),
  title: "Contact Us - Sofia Taj Tours | Book Your Taj Mahal Tour Today",
  description:
    "Contact Sofia Taj Tours for bookings, inquiries, or custom tour packages. We offer Taj Mahal tours, Golden Triangle packages, and Delhi city tours. Available 24/7 with free consultation.",
  keywords: "contact Sofia Taj Tours, book Taj Mahal tour, tour inquiry, custom tour packages, India tour booking, Taj Mahal booking",
  alternates: {
    canonical: "https://sofiatajtours.com/contact",
  },
  openGraph: {
    title: "Contact Us - Sofia Taj Tours",
    description: "Get in touch with Sofia Taj Tours for bookings and inquiries. Available 24/7 for custom tour packages.",
    url: "https://sofiatajtours.com/contact",
    type: "website",
    images: [
      {
        url: "/images/taj (1).jpg",
        width: 1200,
        height: 800,
        alt: "Contact Sofia Taj Tours",
      },
    ],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
