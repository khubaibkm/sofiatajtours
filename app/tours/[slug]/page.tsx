import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { TourCard } from "@/components/tour-card"
import { BookingWidget } from "@/components/booking-widget"
import { BreadcrumbSchema, TouristTripSchema } from "@/components/schema-markup"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { tours } from "@/data/tours"
import { Calendar, MapPin, DollarSign, ArrowLeft, Check } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)

  if (!tour) {
    return {
      title: "Tour Not Found - Sofia Taj Tours",
      description: "The tour you are looking for does not exist.",
    }
  }

  return {
    metadataBase: new URL("https://www.sofiatajtours.com"),
    title: `${tour.title} - Sofia Taj Tours | Book Now`,
    description: tour.description,
    keywords: `${tour.location}, ${tour.title}, Taj Mahal tour, India tour, guided tour, private tour, ${tour.category}`,
    alternates: {
      canonical: `https://www.sofiatajtours.com/tours/${tour.slug}`,
    },
    openGraph: {
      title: `${tour.title} - Sofia Taj Tours`,
      description: tour.description,
      url: `https://www.sofiatajtours.com/tours/${tour.slug}`,
      type: "website",
      images: [
        {
          url: tour.images[0],
          width: 1200,
          height: 800,
          alt: tour.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tour.title} - Sofia Taj Tours`,
      description: tour.description,
      images: [tour.images[0]],
    },
  }
}

export async function generateStaticParams() {
  return tours.map((tour) => ({
    slug: tour.slug,
  }))
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)

  if (!tour) {
    notFound()
  }

  // Get related tours from the same category, excluding current tour
  const relatedTours = tours
    .filter((t) => t.category === tour.category && t.slug !== tour.slug)
    .slice(0, 3)

  const breadcrumbItems = [
    { name: "Home", url: "https://www.sofiatajtours.com" },
    { name: "Tours", url: "https://www.sofiatajtours.com/tours" },
    { name: tour.title, url: `https://www.sofiatajtours.com/tours/${tour.slug}` },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <TouristTripSchema
        title={tour.title}
        description={tour.description}
        location={tour.location}
        image={tour.images[0]}
        startDate={new Date().toISOString()}
        endDate={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()}
        price={tour.price}
        priceINR={tour.priceINR}
      />
      <Header />
      <main>
        {/* Back Button */}
        <div className="bg-background border-b border-border sticky top-16 z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Tours</span>
            </Link>
          </div>
        </div>

        {/* Hero Image Gallery */}
        <section className="relative h-[400px] md:h-[500px] bg-muted overflow-hidden">
          <Image src={tour.images[0] || "/placeholder.svg"} alt={tour.title} fill className="object-cover object-top" priority />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Tour Details */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">{tour.title}</h1>

                {/* Quick Info */}
                <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-border">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-primary" size={20} />
                    <span className="text-foreground font-medium">{tour.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="text-primary" size={20} />
                    <span className="text-foreground font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-foreground font-medium text-lg">From ₹{tour.priceINR.toLocaleString()}</span>
                      {tour.originalPriceINR && (
                        <span className="text-muted-foreground line-through text-sm">₹{tour.originalPriceINR.toLocaleString()}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="text-primary" size={16} />
                      <span className="text-muted-foreground text-sm">${tour.price} USD</span>
                      {tour.originalPrice && (
                        <span className="text-muted-foreground line-through text-xs">${tour.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Features */}
                {tour.features && tour.features.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-8">
                    {tour.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 text-secondary rounded-sm font-medium text-sm"
                      >
                        <Check size={16} />
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                {/* Description */}
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{tour.description}</p>

                {/* Highlights */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Tour Highlights</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Itinerary */}
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Day-by-Day Itinerary</h2>
                  <div className="space-y-4">
                    {tour.itinerary.map((day) => (
                      <div
                        key={day.day}
                        className="p-4 bg-card rounded-lg border border-border hover:border-primary transition"
                      >
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          Day {day.day}: {day.title}
                        </h3>
                        <p className="text-muted-foreground">{day.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar - Booking Card */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 p-6 bg-card rounded-xl border border-border shadow-sm">
                  <div className="mb-6">
                    <p className="text-muted-foreground text-sm">Starting from</p>
                    <div className="flex items-baseline gap-3 mb-2">
                      <p className="text-4xl font-bold text-primary">₹{tour.priceINR.toLocaleString()}</p>
                      {tour.originalPriceINR && (
                        <p className="text-xl text-muted-foreground line-through">₹{tour.originalPriceINR.toLocaleString()}</p>
                      )}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <p className="text-lg text-muted-foreground">${tour.price} USD</p>
                      {tour.originalPrice && (
                        <p className="text-sm text-muted-foreground line-through">${tour.originalPrice}</p>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">per person</p>
                    {tour.originalPriceINR && (
                      <p className="text-secondary font-semibold text-sm mt-2">
                        Save ₹{(tour.originalPriceINR - tour.priceINR).toLocaleString()} ({Math.round(((tour.originalPriceINR - tour.priceINR) / tour.originalPriceINR) * 100)}% OFF)
                      </p>
                    )}
                  </div>

                  {/* Booking Widget */}
                  <BookingWidget
                    tourTitle={tour.title}
                    tourSlug={tour.slug}
                    priceINR={tour.priceINR}
                    priceUSD={tour.price}
                    duration={tour.duration}
                  />

                  {/* Additional Info */}
                  <div className="mt-6 pt-6 border-t border-border space-y-3 text-sm">
                    <div>
                      <p className="text-muted-foreground">Duration</p>
                      <p className="font-semibold text-foreground">{tour.duration}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Location</p>
                      <p className="font-semibold text-foreground">{tour.location}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Group Size</p>
                      <p className="font-semibold text-foreground">4-12 people</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery - Images and Videos */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
                Experience the Journey
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Get a glimpse of the unforgettable moments that await you on this tour
              </p>
            </div>

            {/* Main Gallery Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
              {/* Featured Item - Large - Show second image */}
              <div className="relative h-[300px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden group">
                <Image
                  src={tour.images[1] || tour.images[0] || "/placeholder.svg"}
                  alt={tour.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Grid of smaller items */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {tour.images.slice(2, 6).map((image, index) => (
                  <div
                    key={`img-${index}`}
                    className="relative h-[145px] md:h-[240px] lg:h-[290px] rounded-xl overflow-hidden group"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${tour.title} - ${index + 3}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>

            {/* Videos Section */}
            {tour.videos && tour.videos.length > 0 && (
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">Tour Videos</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {tour.videos.map((video, index) => (
                    <div key={`video-${index}`} className="relative h-[300px] md:h-[420px] rounded-xl overflow-hidden bg-black">
                      <video
                        src={video}
                        controls
                        preload="metadata"
                        className="w-full h-full object-cover rounded-xl"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rest of Images */}
            {tour.images.length > 6 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {tour.images.slice(6).map((image, index) => (
                  <div
                    key={`extra-img-${index}`}
                    className="relative h-[150px] md:h-[200px] rounded-lg overflow-hidden group"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${tour.title} - ${index + 7}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Related Tours */}
        {relatedTours.length > 0 && (
          <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
                  You May Also Like
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Discover more amazing tours in the same category
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {relatedTours.map((relatedTour) => (
                  <TourCard
                    key={relatedTour.slug}
                    slug={relatedTour.slug}
                    title={relatedTour.title}
                    location={relatedTour.location}
                    duration={relatedTour.duration}
                    price={relatedTour.price}
                    priceINR={relatedTour.priceINR}
                    originalPrice={relatedTour.originalPrice}
                    originalPriceINR={relatedTour.originalPriceINR}
                    features={relatedTour.features}
                    image={relatedTour.images[0]}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <CTASection
          title="Ready to Explore?"
          description="Join us on this incredible journey and create memories that will last a lifetime."
          buttonText="Book Your Tour"
          buttonHref="/tours"
        />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
