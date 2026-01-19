import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TourCard } from "@/components/tour-card"
import { CTASection } from "@/components/cta-section"
import { BreadcrumbSchema } from "@/components/schema-markup"
import { tours } from "@/data/tours"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://wanderlust.com"),
  title: "Tours - Wanderlust | Discover World Destinations",
  description:
    "Explore our curated collection of tours to the world's most beautiful destinations. Book your next adventure with expert guides and unforgettable experiences.",
  keywords: "travel tours, vacation packages, guided tours, adventure travel, destination tours, tour packages",
  alternates: {
    canonical: "https://wanderlust.com/tours",
  },
  openGraph: {
    title: "Tours - Wanderlust | Discover Destinations",
    description: "Explore our curated collection of tours to the world's most beautiful destinations.",
    url: "https://wanderlust.com/tours",
    type: "website",
    images: [
      {
        url: "/travel-tours-collection.jpg",
        width: 1200,
        height: 1200,
        alt: "Wanderlust Tours Collection",
      },
    ],
  },
}

export default function ToursPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://wanderlust.com" },
    { name: "Tours", url: "https://wanderlust.com/tours" },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header />
      <main>
        {/* Page Header */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Explore Our Tours</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover curated travel experiences designed to create lasting memories
            </p>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {tours.map((tour) => (
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
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Can't Find Your Perfect Tour?"
          description="Let our travel experts help you plan a custom experience tailored to your preferences and budget."
          buttonText="Contact Our Team"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}
