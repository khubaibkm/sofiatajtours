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
import { Sparkles, Heart, MapPin, Users } from "lucide-react"

export default function Home() {
  const featuredTours = tours.slice(0, 3)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <Image src="/placeholder.svg?key=3dzq3" alt="Taj Mahal at sunrise" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-secondary/90 rounded-full text-primary font-medium text-sm">
              <Sparkles size={16} />
              Experience Timeless Beauty
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 text-balance leading-tight">
              Discover the Taj Mahal
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-10 text-balance max-w-3xl mx-auto">
              Immerse yourself in the architectural marvel and eternal love story of India's most iconic monument
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tours"
                className="inline-flex px-8 py-4 bg-secondary text-primary rounded-sm font-bold text-lg hover:shadow-2xl transition-all duration-300"
              >
                Explore Tours
              </Link>
              <Link
                href="/contact"
                className="inline-flex px-8 py-4 bg-primary-foreground/20 text-white border-2 border-white rounded-sm font-bold text-lg hover:bg-primary-foreground/30 transition-all duration-300"
              >
                Plan Your Journey
              </Link>
            </div>
          </div>
        </section>

        {/* Why Taj Mahal Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                The Monument of Eternal Love
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
                The Taj Mahal stands as a testament to love, beauty, and architectural perfection. Built by Emperor Shah
                Jahan in memory of his beloved wife, it remains one of the world's most magnificent structures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Symbol of Love",
                  description: "An eternal monument to one of history's greatest love stories",
                },
                {
                  icon: MapPin,
                  title: "Architectural Masterpiece",
                  description: "Stunning marble inlays and perfect symmetry spanning 73 acres",
                },
                {
                  icon: Users,
                  title: "Cultural Heritage",
                  description: "UNESCO World Heritage Site and cultural pride of India",
                },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="p-8 bg-card rounded-lg border border-border/50 hover-lift text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-secondary/20 rounded-lg">
                        <Icon className="text-secondary" size={32} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
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
              {featuredTours.map((tour) => (
                <TourCard
                  key={tour.slug}
                  slug={tour.slug}
                  title={tour.title}
                  location={tour.location}
                  duration={tour.duration}
                  price={tour.price}
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
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Why Choose Sofia Taj Tours?
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <CTASection
          title="Ready to Experience Magic?"
          description="Let us craft your perfect Taj Mahal journey. Whether it's a romantic getaway, family adventure, or spiritual quest, we'll ensure memories that last a lifetime."
          buttonText="Start Your Adventure"
          buttonHref="/contact"
        />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
