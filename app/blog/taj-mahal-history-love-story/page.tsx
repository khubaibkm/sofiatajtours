import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Taj Mahal Love Story - Shah Jahan & Mumtaz Mahal | Sofia Taj Tours",
  description: "The romantic history behind the Taj Mahal. Learn about Emperor Shah Jahan's eternal love for Mumtaz Mahal.",
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
            <Image src="/images/taj (43).jpg" alt="Taj Mahal Love Story" fill className="object-cover" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            The Taj Mahal Love Story: Shah Jahan & Mumtaz Mahal
          </h1>
          <div className="bg-primary/10 border border-primary rounded-lg p-12 mb-8">
            <p className="text-2xl font-bold text-foreground mb-4">💕 Coming Soon!</p>
            <p className="text-lg text-muted-foreground mb-6">The epic love story and history of the Taj Mahal is being written.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Experience This Love Story Yourself!</h2>
            <p className="text-muted-foreground mb-6">Perfect for couples - includes FREE traditional dress for romantic photos.</p>
            <Link href="/tours/taj-mahal-same-day-tour-delhi-traditional-dress" className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-sm font-bold hover:bg-primary/90 transition">
              Book Romantic Taj Mahal Tour →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
