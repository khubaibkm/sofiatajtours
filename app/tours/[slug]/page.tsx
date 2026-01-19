import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { BreadcrumbSchema, TouristTripSchema } from "@/components/schema-markup"
import { tours } from "@/data/tours"
import { Calendar, MapPin, DollarSign, ArrowLeft } from "lucide-react"
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
      title: "Tour Not Found - Wanderlust",
      description: "The tour you are looking for does not exist.",
    }
  }

  return {
    metadataBase: new URL("https://wanderlust.com"),
    title: `${tour.title} - Wanderlust Tours | Guided Tour`,
    description: tour.description,
    keywords: `${tour.location}, tour, travel, vacation, adventure, guided tour, destination`,
    alternates: {
      canonical: `https://wanderlust.com/tours/${tour.slug}`,
    },
    openGraph: {
      title: `${tour.title} - Wanderlust Tours`,
      description: tour.description,
      url: `https://wanderlust.com/tours/${tour.slug}`,
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
      title: `${tour.title} - Wanderlust Tours`,
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

  const breadcrumbItems = [
    { name: "Home", url: "https://wanderlust.com" },
    { name: "Tours", url: "https://wanderlust.com/tours" },
    { name: tour.title, url: `https://wanderlust.com/tours/${tour.slug}` },
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
          <Image src={tour.images[0] || "/placeholder.svg"} alt={tour.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/20" />
        </section>

        {/* Tour Details */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{tour.title}</h1>

                {/* Quick Info */}
                <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-border">
                  <div className="flex items-center gap-2">
                    <MapPin className="text-primary" size={20} />
                    <span className="text-foreground font-medium">{tour.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="text-primary" size={20} />
                    <span className="text-foreground font-medium">{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="text-primary" size={20} />
                    <span className="text-foreground font-medium">From ${tour.price}</span>
                  </div>
                </div>

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
                    <p className="text-4xl font-bold text-primary">${tour.price}</p>
                    <p className="text-muted-foreground text-sm mt-1">per person</p>
                  </div>

                  <Link
                    href={`/contact?tour=${tour.slug}`}
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center mb-3 block"
                  >
                    Inquire Now
                  </Link>

                  <Link
                    href="/contact"
                    className="w-full px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors text-center block"
                  >
                    Contact Us
                  </Link>

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

        {/* Image Gallery */}
        <section className="py-12 md:py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tour.images.map((image, index) => (
                <div key={index} className="relative h-40 md:h-48 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${tour.title} - image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Explore?"
          description="Join us on this incredible journey and create memories that will last a lifetime."
          buttonText="Book Your Tour"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}
