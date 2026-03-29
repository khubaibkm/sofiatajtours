import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Delhi to Agra Travel Guide - Coming Soon | Sofia Taj Tours",
  description: "Complete guide to traveling from Delhi to Agra by train, car, and bus. Prices, timings, and booking tips coming soon.",
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
            <Image src="/images/taj (99).jpg" alt="Delhi to Agra Journey" fill className="object-cover" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Delhi to Agra: Complete Travel Guide (Train, Car, Bus)
          </h1>
          <div className="bg-primary/10 border border-primary rounded-lg p-12 mb-8">
            <p className="text-2xl font-bold text-foreground mb-4">🚗 Coming Soon!</p>
            <p className="text-lg text-muted-foreground mb-6">Comprehensive travel comparison guide in progress.</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Book Private Car Tour Now!</h2>
            <p className="text-muted-foreground mb-6">Skip the hassle - we provide private AC car with driver from Delhi to Agra.</p>
            <Link href="/tours/taj-mahal-tour-by-car-from-delhi" className="inline-flex px-8 py-3 bg-primary text-primary-foreground rounded-sm font-bold hover:bg-primary/90 transition">
              Book Delhi to Agra Tour →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
