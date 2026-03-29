import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Home, Search, Phone } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background to-muted/30 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Image/Illustration */}
            <div className="relative h-64 md:h-96 mb-12">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl md:text-[200px] font-bold text-primary/10">404</div>
              </div>
              <div className="relative z-10 pt-16 md:pt-24">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                  <Search size={64} className="text-primary" />
                </div>
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              The page you're looking for seems to have wandered off like a tourist without a guide.
              Let's get you back on track!
            </p>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Link
                href="/"
                className="group p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover-lift"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition">
                    <Home className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold text-foreground">Go Home</h3>
                  <p className="text-sm text-muted-foreground">Start from the homepage</p>
                </div>
              </Link>

              <Link
                href="/tours"
                className="group p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover-lift"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition">
                    <Search className="text-secondary" size={32} />
                  </div>
                  <h3 className="font-bold text-foreground">Browse Tours</h3>
                  <p className="text-sm text-muted-foreground">Explore our tour packages</p>
                </div>
              </Link>

              <Link
                href="/contact"
                className="group p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover-lift"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition">
                    <Phone className="text-primary" size={32} />
                  </div>
                  <h3 className="font-bold text-foreground">Contact Us</h3>
                  <p className="text-sm text-muted-foreground">We're here to help</p>
                </div>
              </Link>
            </div>

            {/* Popular Pages */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Popular Pages</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <Link
                  href="/tours/taj-mahal-same-day-tour-delhi-traditional-dress"
                  className="p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Taj Mahal Same Day Tour with FREE Dress
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Most popular tour - includes traditional Indian dress
                  </p>
                </Link>

                <Link
                  href="/tours/golden-triangle-tour-3-days"
                  className="p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Golden Triangle Tour 3 Days
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Delhi, Agra & Jaipur in one amazing journey
                  </p>
                </Link>

                <Link
                  href="/tours/sunrise-taj-mahal-tour-from-delhi"
                  className="p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Sunrise Taj Mahal Tour
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Witness the magical sunrise at Taj Mahal
                  </p>
                </Link>

                <Link
                  href="/blog/best-time-visit-taj-mahal"
                  className="p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    Best Time to Visit Taj Mahal
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Complete month-by-month weather guide
                  </p>
                </Link>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-muted-foreground mb-4">
                Still can't find what you're looking for?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+919368862429"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-sm font-bold hover:bg-primary/90 transition"
                >
                  <Phone size={20} />
                  Call Us: +91-9368862429
                </a>
                <a
                  href="https://wa.me/919368862429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-sm font-bold hover:bg-primary hover:text-primary-foreground transition"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
