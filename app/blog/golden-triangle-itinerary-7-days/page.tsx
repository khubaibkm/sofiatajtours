import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Golden Triangle 7-Day Itinerary - Coming Soon | Sofia Taj Tours",
  description: "Perfect 7-day Golden Triangle itinerary covering Delhi, Agra, and Jaipur. Day-by-day guide coming soon.",
}

export default function ComingSoon() {
  return (
    <>
      <Header />
      <main className="py-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="mb-8">
            <Link href="/blog" className="text-primary hover:underline">← Back to Blog</Link>
          </div>
          <div className="relative h-[300px] mb-12 rounded-xl overflow-hidden">
            <Image src="/images/taj (111).jpg" alt="Golden Triangle Tour" fill className="object-cover" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Perfect 7-Day Golden Triangle Itinerary (Delhi, Agra, Jaipur)
          </h1>
          <div className="bg-primary/10 border border-primary rounded-lg p-12 mb-8">
            <p className="text-2xl font-bold text-foreground mb-4">🗺️ Coming Soon!</p>
            <p className="text-lg text-muted-foreground mb-6">Detailed day-by-day itinerary being prepared.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Book Golden Triangle Tour Now!</h2>
            <Link href="/tours/golden-triangle-tour-3-days" className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-sm font-bold hover:bg-primary/90 transition">
              View 3-Day Golden Triangle Tour →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
