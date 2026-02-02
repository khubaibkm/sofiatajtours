import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TourCard } from "@/components/tour-card"
import { CTASection } from "@/components/cta-section"
import { FlexibilitySection } from "@/components/flexibility-section"
import { FAQSection } from "@/components/faq-section"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { tours } from "@/data/tours"
import { Heart, MapPin, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://sofiatajtours.com"),
  title: "Sofia Taj Tours - Book Taj Mahal Tours from Delhi | Up to 30% OFF",
  description:
    "Experience the Taj Mahal with Sofia Taj Tours. Book same-day tours, Golden Triangle packages & Delhi city tours with up to 30% discount. Free cancellation, 24/7 support & skip-the-line access.",
  keywords:
    "Taj Mahal tour from Delhi, Golden Triangle tour packages, Delhi city tour, Agra day trip, Jaipur tour, India tour packages, Taj Mahal sunrise tour, private India tours, book Taj Mahal tour",
  openGraph: {
    title: "Sofia Taj Tours - Taj Mahal Tours from Delhi | Up to 30% OFF",
    description: "Book Taj Mahal tours, Golden Triangle packages & Delhi city tours with up to 30% discount. Free cancellation & 24/7 support.",
    url: "https://sofiatajtours.com",
    type: "website",
    images: [
      {
        url: "/images/taj (1).jpg",
        width: 1200,
        height: 800,
        alt: "Taj Mahal Tours from Delhi - Sofia Taj Tours",
      },
    ],
  },
  alternates: {
    canonical: "https://sofiatajtours.com",
  },
}

export default function Home() {
    const featuredTours = [
    tours.find(t => t.slug === "taj-mahal-agra-private-car-day-tour-with-5-star-meal"),
    tours.find(t => t.slug === "old-new-delhi-city-tour-8-hours"),
    tours.find(t => t.slug === "golden-triangle-tour-3-days"),
  ].filter(Boolean)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Desktop Hero Image */}
          <Image
            src="/images/hero.png"
            alt="Sofia Taj Tours"
            fill
            className="object-cover object-top hidden md:block"
            priority
          />
          {/* Mobile Hero Image */}
          <Image
            src="/images/hero_mobile.png"
            alt="Sofia Taj Tours"
            fill
            className="object-cover object-top md:hidden"
            priority
          />
        </section>

        {/* Featured Tours */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Our Exclusive Experiences
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
                Choose from carefully curated tours designed to offer unique perspectives and unforgettable experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredTours.map((tour) => tour && (
                <TourCard
                  key={tour.slug}
                  slug={tour.slug}
                  title={tour.title}
                  location={tour.location}
                  duration={tour.duration}
                  price={tour.price}
                  priceINR={tour.priceINR}
                  originalPrice={tour.originalPrice}
                  originalPriceINR={tour.originalPriceINR}
                  features={tour.features}
                  image={tour.images[0]}
                />
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/tours"
                className="inline-flex px-8 py-3 border-2 border-primary text-primary rounded-sm font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-base"
              >
                View All Tours
              </Link>
            </div>
          </div>
        </section>

        {/* Flexibility Section */}
        <FlexibilitySection />

        {/* Why Choose Sofia Taj Tours */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Why Choose Sofia Taj Tours?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
                Experience the difference with our premium services and exclusive offers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "24*7 Assistance",
                  description: "Call us, mail us or Whatsapp us at any time for any assistance.",
                  icon: "📞",
                },
                {
                  title: "Book Now & Pay On Arrival",
                  description: "Secure your spot while staying flexible!",
                  icon: "💳",
                },
                {
                  title: "Ultimate Flexibility",
                  description: "Fully Customizable – Private Guided Tours!",
                  icon: "🎯",
                },
              ].map((feature, index) => (
                <div key={index} className="p-8 bg-card rounded-lg border border-border/50 hover-lift">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                {
                  number: "15+",
                  label: "Years of Excellence",
                },
                {
                  number: "5000+",
                  label: "Happy Travelers",
                },
                {
                  number: "24/7",
                  label: "Dedicated Support",
                },
                {
                  number: "100%",
                  label: "Satisfaction Guarantee",
                },
              ].map((stat, index) => (
                <div key={index} className="p-8 bg-card rounded-lg border border-border text-center hover-lift">
                  <div className="text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tour Categories Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Taj Mahal Tour Packages
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
                Explore our carefully curated tour packages designed to give you the best experience
              </p>
            </div>

            {/* Taj Mahal Tours */}
            <div id="taj-mahal-tours" className="mb-0 scroll-mt-20">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-serif font-bold text-foreground">
                  Taj Mahal Tours
                </h3>
                <Link
                  href="/tours#taj-mahal-tours"
                  className="text-primary hover:text-primary/80 font-semibold text-sm flex items-center gap-2"
                >
                  View All
                  <span>→</span>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tours
                  .filter((tour) => tour.category === "taj-mahal")
                  .map((tour) => (
                    <TourCard
                      key={tour.slug}
                      slug={tour.slug}
                      title={tour.title}
                      location={tour.location}
                      duration={tour.duration}
                      price={tour.price}
                      priceINR={tour.priceINR}
                      originalPrice={tour.originalPrice}
                      originalPriceINR={tour.originalPriceINR}
                      features={tour.features}
                      image={tour.images[0]}
                    />
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <CTASection
          title="Ready to Experience Magic?"
          description="Let us craft your perfect Taj Mahal journey. Whether it's a romantic getaway, family adventure, or spiritual quest, we'll ensure memories that last a lifetime."
          buttonText="Start Your Adventure"
          buttonHref="/tours"
        />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
