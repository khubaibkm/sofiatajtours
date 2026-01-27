import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://sofiatajtours.com"),
  title: "All Tours - Sofia Taj Tours | Taj Mahal, Delhi & Golden Triangle Tours",
  description:
    "Browse all our tour packages including Taj Mahal tours from Delhi, Delhi city tours, Golden Triangle packages, and more. Book your perfect India tour with expert guides and skip-the-line access.",
  keywords: "Taj Mahal tours, Delhi tours, Golden Triangle, Agra tours, India tours, tour packages, private tours, guided tours",
  alternates: {
    canonical: "https://sofiatajtours.com/tours",
  },
  openGraph: {
    title: "All Tours - Sofia Taj Tours",
    description: "Browse all our tour packages including Taj Mahal tours, Delhi tours, and Golden Triangle packages.",
    url: "https://sofiatajtours.com/tours",
    type: "website",
    images: [
      {
        url: "/images/taj (1).jpg",
        width: 1200,
        height: 1200,
        alt: "Sofia Taj Tours - Tour Collection",
      },
    ],
  },
}

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
