"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TourCard } from "@/components/tour-card"
import { CTASection } from "@/components/cta-section"
import { BreadcrumbSchema } from "@/components/schema-markup"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { tours } from "@/data/tours"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

function ToursContent() {
  const searchParams = useSearchParams()
  const category = searchParams.get("category")

  const breadcrumbItems = [
    { name: "Home", url: "https://sofiatajtours.com" },
    { name: "Tours", url: "https://sofiatajtours.com/tours" },
  ]

  const tajMahalTours = tours.filter((tour) => tour.category === "taj-mahal")
  const delhiTours = tours.filter((tour) => tour.category === "delhi")
  const fromDelhiTours = tours.filter((tour) => tour.category === "from-delhi")
  const goldenTriangleTours = tours.filter((tour) => tour.category === "golden-triangle")

  // Get page title and description based on category
  const getCategoryInfo = () => {
    switch (category) {
      case "taj-mahal":
        return {
          title: "Taj Mahal Tours",
          description: "Experience the eternal beauty of the Taj Mahal with our expertly crafted tours from Delhi"
        }
      case "delhi":
        return {
          title: "Delhi Tours",
          description: "Explore Delhi with our city tours and day trips to nearby destinations"
        }
      case "golden-triangle":
        return {
          title: "Golden Triangle Tours",
          description: "Discover India's most iconic circuit covering Delhi, Agra, and Jaipur"
        }
      default:
        return {
          title: "Explore Our Tours",
          description: "Discover curated travel experiences to India's most iconic destinations with expert guides"
        }
    }
  }

  const categoryInfo = getCategoryInfo()

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <Header />
      <main>
        {/* Page Header */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-secondary/10 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">{categoryInfo.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {categoryInfo.description}
            </p>
            {category && (
              <div className="mt-6">
                <a
                  href="/tours"
                  className="text-primary hover:text-primary/80 font-medium text-sm inline-flex items-center gap-2"
                >
                  ← View All Tours
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Tours by Category */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Special handling for Delhi category - show both subsections */}
            {category === "delhi" ? (
              <>
                {/* Tours In Delhi */}
                <div className="mb-20">
                  <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
                      Tours In Delhi
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                    <p className="text-muted-foreground mt-4">
                      Explore the vibrant capital of India with our comprehensive Delhi city tours
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {delhiTours.map((tour) => (
                      <TourCard
                        key={tour.slug}
                        slug={tour.slug}
                        title={tour.title}
                        location={tour.location}
                        duration={tour.duration}
                        price={tour.price}
                        originalPrice={tour.originalPrice}
                        reviews={tour.reviews}
                        features={tour.features}
                        image={tour.images[0]}
                      />
                    ))}
                  </div>
                </div>

                {/* Tours From Delhi */}
                <div>
                  <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
                      Tours From Delhi
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                    <p className="text-muted-foreground mt-4">
                      Venture beyond Delhi on day trips to the Taj Mahal and Agra
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Show Taj Mahal tours */}
                    {tajMahalTours.map((tour) => (
                      <TourCard
                        key={tour.slug}
                        slug={tour.slug}
                        title={tour.title}
                        location={tour.location}
                        duration={tour.duration}
                        price={tour.price}
                        originalPrice={tour.originalPrice}
                        reviews={tour.reviews}
                        features={tour.features}
                        image={tour.images[0]}
                      />
                    ))}
                  </div>
                </div>
              </>
            ) : category ? (
              /* Other filtered categories */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours
                  .filter((tour) => tour.category === category)
                  .map((tour) => (
                    <TourCard
                      key={tour.slug}
                      slug={tour.slug}
                      title={tour.title}
                      location={tour.location}
                      duration={tour.duration}
                      price={tour.price}
                      originalPrice={tour.originalPrice}
                      reviews={tour.reviews}
                      features={tour.features}
                      image={tour.images[0]}
                    />
                  ))}
              </div>
            ) : (
              <>
            {/* Taj Mahal Tours */}
            <div id="taj-mahal-tours" className="mb-20 scroll-mt-20">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
                  Taj Mahal Tours
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <p className="text-muted-foreground mt-4">
                  Experience the eternal beauty of the Taj Mahal with our expertly crafted tours from Delhi
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tajMahalTours.map((tour) => (
                  <TourCard
                    key={tour.slug}
                    slug={tour.slug}
                    title={tour.title}
                    location={tour.location}
                    duration={tour.duration}
                    price={tour.price}
                    originalPrice={tour.originalPrice}
                    reviews={tour.reviews}
                    features={tour.features}
                    image={tour.images[0]}
                  />
                ))}
              </div>
            </div>

            {/* Delhi Tours */}
            <div id="delhi-tours" className="mb-20 scroll-mt-20">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
                  Tours In Delhi
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <p className="text-muted-foreground mt-4">
                  Explore the vibrant capital of India with our comprehensive Delhi city tours
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {delhiTours.map((tour) => (
                  <TourCard
                    key={tour.slug}
                    slug={tour.slug}
                    title={tour.title}
                    location={tour.location}
                    duration={tour.duration}
                    price={tour.price}
                    originalPrice={tour.originalPrice}
                    reviews={tour.reviews}
                    features={tour.features}
                    image={tour.images[0]}
                  />
                ))}
              </div>
            </div>

            {/* Tours From Delhi */}
            {fromDelhiTours.length > 0 && (
              <div id="from-delhi-tours" className="mb-20 scroll-mt-20">
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
                    Tours From Delhi
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                  <p className="text-muted-foreground mt-4">
                    Venture beyond Delhi to explore nearby destinations like Jaipur and more
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {fromDelhiTours.map((tour) => (
                    <TourCard
                      key={tour.slug}
                      slug={tour.slug}
                      title={tour.title}
                      location={tour.location}
                      duration={tour.duration}
                      price={tour.price}
                      originalPrice={tour.originalPrice}
                      reviews={tour.reviews}
                      features={tour.features}
                      image={tour.images[0]}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Golden Triangle Tours */}
            <div id="golden-triangle-tours" className="scroll-mt-20">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
                  Golden Triangle Tours
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                <p className="text-muted-foreground mt-4">
                  Discover India's most iconic circuit covering Delhi, Agra, and Jaipur
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {goldenTriangleTours.map((tour) => (
                  <TourCard
                    key={tour.slug}
                    slug={tour.slug}
                    title={tour.title}
                    location={tour.location}
                    duration={tour.duration}
                    price={tour.price}
                    originalPrice={tour.originalPrice}
                    reviews={tour.reviews}
                    features={tour.features}
                    image={tour.images[0]}
                  />
                ))}
              </div>
            </div>
            </>
            )}
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
      <WhatsAppWidget />
    </>
  )
}

export default function ToursPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading tours...</p>
        </div>
      </div>
    }>
      <ToursContent />
    </Suspense>
  )
}
