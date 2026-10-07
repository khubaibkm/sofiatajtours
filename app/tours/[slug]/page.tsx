import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { TourCard } from "@/components/tour-card"
import { BookingWidget } from "@/components/booking-widget"
import { BreadcrumbSchema, TouristTripSchema, FAQSchema, ProductSchema, VideoSchema } from "@/components/schema-markup"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { LightboxGallery } from "@/components/lightbox-gallery"
import { TripAdvisorReviews } from "@/components/tripadvisor-reviews"
import { tours } from "@/data/tours"
import { tripAdvisor } from "@/data/site"
import { MapPin, Check, X, Clock, Users, Languages, Car, ShieldCheck, Wallet, Star, MessageCircle, ChevronRight, BedDouble, Info, Headset } from "lucide-react"
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

  const es = tour.locale === "es"
  const t = es
    ? {
        home: "Inicio",
        tours: "Tours",
        overview: "Descripción general",
        glance: "El tour de un vistazo",
        duration: "Duración",
        location: "Ubicación",
        group: "Tamaño del grupo",
        groupDefault: "2-12 personas",
        pickup: "Recogida",
        guideLang: "Idioma del guía",
        cancellation: "Cancelación",
        freeCancel: "Cancelación gratuita",
        payment: "Pago",
        payLater: "Reserve ahora, pague a la llegada",
        highlights: "Por qué elegir este tour",
        itinerary: "Itinerario",
        itineraryMulti: "Itinerario día a día",
        overnight: "Noche en",
        included: "Qué incluye",
        excluded: "No incluido",
        goodToKnow: "Información importante",
        bring: "Qué llevar",
        cancelLabel: "Cancelación",
        videos: "Videos del tour",
        from: "Desde",
        startingFrom: "Precio desde",
        perPerson: "por persona",
        off: "DTO.",
        support: "Soporte 24/7 por WhatsApp",
        taRated: "Valorado por viajeros en Tripadvisor",
        reviewsWord: "reseñas",
        tripadvisorReviews: "reseñas en Tripadvisor",
        reviewsTitle: "Lo que dicen los viajeros sobre Sofia Taj Tours",
        faq: "Preguntas frecuentes",
        faqSub: "Todo lo que necesita saber sobre este tour",
        alsoLike: "También le puede interesar",
        ctaTitle: "¿Listo para explorar?",
        ctaDesc: "Únase a nosotros y cree recuerdos que durarán toda la vida.",
        ctaButton: "Reservar su tour",
        bookWa: "Reservar por WhatsApp",
        waMsg: "¡Hola! Me gustaría reservar",
      }
    : {
        home: "Home",
        tours: "Tours",
        overview: "Overview",
        glance: "Tour at a Glance",
        duration: "Duration",
        location: "Location",
        group: "Group size",
        groupDefault: "2-12 people",
        pickup: "Pickup",
        guideLang: "Guide languages",
        cancellation: "Cancellation",
        freeCancel: "Free cancellation",
        payment: "Payment",
        payLater: "Book now, pay on arrival",
        highlights: "Tour Highlights",
        itinerary: "Itinerary",
        itineraryMulti: "Day-by-Day Itinerary",
        overnight: "Overnight in",
        included: "What's Included",
        excluded: "Not Included",
        goodToKnow: "Good to Know",
        bring: "What to bring:",
        cancelLabel: "Cancellation:",
        videos: "Tour Videos",
        from: "From",
        startingFrom: "Starting from",
        perPerson: "per person",
        off: "OFF",
        support: "24/7 support on WhatsApp",
        taRated: "Rated by travelers on Tripadvisor",
        reviewsWord: "reviews",
        tripadvisorReviews: "Tripadvisor reviews",
        reviewsTitle: "What Travelers Say About Sofia Taj Tours",
        faq: "Frequently Asked Questions",
        faqSub: "Everything you need to know about this tour",
        alsoLike: "You May Also Like",
        ctaTitle: "Ready to Explore?",
        ctaDesc: "Join us on this incredible journey and create memories that will last a lifetime.",
        ctaButton: "Book Your Tour",
        bookWa: "Book on WhatsApp",
        waMsg: "Hello! I would like to book",
      }

  const overview = tour.overview && tour.overview.length > 0 ? tour.overview : [tour.description]
  const isMultiDay = tour.itinerary.length > 1
  const discountPercent = tour.originalPriceINR
    ? Math.round(((tour.originalPriceINR - tour.priceINR) / tour.originalPriceINR) * 100)
    : 0
  const bookingMessage = encodeURIComponent(
    `${t.waMsg}: ${tour.title}\nhttps://www.sofiatajtours.com/tours/${tour.slug}`,
  )

  const glance = [
    { icon: Clock, label: t.duration, value: tour.duration },
    { icon: MapPin, label: t.location, value: tour.location },
    { icon: Users, label: t.group, value: tour.groupSize || t.groupDefault },
    ...(tour.pickup ? [{ icon: Car, label: t.pickup, value: tour.pickup }] : []),
    ...(tour.languages && tour.languages.length > 0
      ? [{ icon: Languages, label: t.guideLang, value: tour.languages.join(", ") }]
      : []),
    { icon: ShieldCheck, label: t.cancellation, value: t.freeCancel },
    { icon: Wallet, label: t.payment, value: t.payLater },
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
      <ProductSchema
        name={tour.title}
        description={tour.description}
        image={tour.images[0]}
        price={tour.priceINR}
        priceCurrency="INR"
        url={`https://www.sofiatajtours.com/tours/${tour.slug}`}
        sku={tour.slug}
      />
      {tour.faqs && tour.faqs.length > 0 && <FAQSchema faqs={tour.faqs} />}
      {tour.videos && tour.videos.length > 0 && (
        <VideoSchema
          name={`${tour.title} - Video Tour`}
          description={tour.description}
          thumbnailUrl={tour.images[0]}
          uploadDate={new Date().toISOString()}
          contentUrl={tour.videos[0]}
          duration="PT5M"
        />
      )}
      <Header />
      <main lang={es ? "es" : undefined}>
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-primary transition">{t.home}</Link>
            <ChevronRight size={14} />
            <Link href="/tours" className="hover:text-primary transition">{t.tours}</Link>
            <ChevronRight size={14} />
            <span className="text-foreground font-medium truncate">{tour.title}</span>
          </div>
        </nav>

        <section className="pt-6 pb-12 md:pb-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 text-balance">{tour.title}</h1>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {tripAdvisor && (
                  <a
                    href={tripAdvisor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-primary transition"
                  >
                    <Star size={16} className="fill-secondary text-secondary" />
                    <span className="font-semibold text-foreground">{tripAdvisor.rating.toFixed(1)}</span>
                    <span className="underline underline-offset-2">({tripAdvisor.reviewCount} {t.tripadvisorReviews})</span>
                  </a>
                )}
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={16} className="text-secondary" />
                  {tour.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={16} className="text-secondary" />
                  {tour.duration}
                </span>
              </div>
            </div>

            {/* Gallery */}
            <div className="mb-10">
              <LightboxGallery images={tour.images} title={tour.title} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Features */}
                {tour.features && tour.features.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tour.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary/20 text-foreground rounded-sm font-medium text-sm"
                      >
                        <Check size={14} className="text-accent" />
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                {/* Overview */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">{t.overview}</h2>
                  <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                    {overview.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* At a glance */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">{t.glance}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {glance.map(({ icon: Icon, label, value }) => (
                      <div key={label} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border/60">
                        <Icon className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <div>
                          <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
                          <p className="text-sm font-semibold text-foreground">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">{t.highlights}</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 p-6 bg-card rounded-lg border border-border/60">
                    {tour.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check size={18} className="text-accent flex-shrink-0 mt-1" />
                        <span className="text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Itinerary */}
                <div>
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                    {isMultiDay ? t.itineraryMulti : t.itinerary}
                  </h2>
                  <div className="space-y-10">
                    {tour.itinerary.map((day) => {
                      const overnight = day.description.match(/Overnight in ([A-Za-z ]+)\./)?.[1]
                      const body = day.description.replace(/\s*Overnight in [A-Za-z ]+\./, "")
                      return (
                        <div key={day.day}>
                          {(isMultiDay || day.title) && (
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                              {isMultiDay && (
                                <span className="px-3 py-1 rounded-sm bg-primary text-primary-foreground text-sm font-bold">
                                  Day {day.day}
                                </span>
                              )}
                              <h3 className="text-lg font-semibold text-foreground">{day.title}</h3>
                              {overnight && (
                                <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                                  <BedDouble size={16} className="text-secondary" />
                                  {t.overnight} {overnight}
                                </span>
                              )}
                            </div>
                          )}

                          {day.steps && day.steps.length > 0 ? (
                            <ol className="relative ml-3 border-l-2 border-secondary/40 space-y-6">
                              {day.steps.map((step, i) => (
                                <li key={i} className="pl-6 relative">
                                  <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-secondary border-2 border-background" />
                                  {step.time && <p className="text-sm font-bold text-primary">{step.time}</p>}
                                  <p className="font-semibold text-foreground">{step.title}</p>
                                  {step.description && <p className="text-muted-foreground mt-1">{step.description}</p>}
                                </li>
                              ))}
                            </ol>
                          ) : (
                            <p className="text-muted-foreground leading-relaxed p-5 bg-card rounded-lg border border-border/60">
                              {body}
                            </p>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Included / Excluded */}
                {((tour.included && tour.included.length > 0) || (tour.excluded && tour.excluded.length > 0)) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tour.included && tour.included.length > 0 && (
                      <div className="p-6 bg-card rounded-lg border border-border/60">
                        <h2 className="text-xl font-serif font-bold text-foreground mb-4">{t.included}</h2>
                        <ul className="space-y-3">
                          {tour.included.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-foreground">
                              <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {tour.excluded && tour.excluded.length > 0 && (
                      <div className="p-6 bg-card rounded-lg border border-border/60">
                        <h2 className="text-xl font-serif font-bold text-foreground mb-4">{t.excluded}</h2>
                        <ul className="space-y-3">
                          {tour.excluded.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-foreground">
                              <X size={18} className="text-destructive flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Important information */}
                {((tour.importantInfo && tour.importantInfo.length > 0) ||
                  (tour.whatToBring && tour.whatToBring.length > 0) ||
                  tour.cancellationPolicy) && (
                  <div className="p-6 rounded-lg border border-secondary/50 bg-secondary/10">
                    <h2 className="text-xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                      <Info size={20} className="text-primary" />
                      {t.goodToKnow}
                    </h2>
                    <ul className="space-y-3 text-foreground">
                      {tour.importantInfo?.map((item, i) => (
                        <li key={`info-${i}`} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                      {tour.whatToBring?.map((item, i) => (
                        <li key={`bring-${i}`} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>
                            <strong>{t.bring}</strong> {item}
                          </span>
                        </li>
                      ))}
                      {tour.cancellationPolicy && (
                        <li className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>
                            <strong>{t.cancelLabel}</strong> {tour.cancellationPolicy}
                          </span>
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                {/* Videos */}
                {tour.videos && tour.videos.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-foreground mb-4">{t.videos}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {tour.videos.map((video, index) => (
                        <video
                          key={`video-${index}`}
                          src={video}
                          controls
                          preload="none"
                          playsInline
                          className="w-full aspect-[9/16] sm:aspect-video max-h-[480px] rounded-xl bg-black object-cover"
                        >
                          Your browser does not support the video tag.
                        </video>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar - Booking Card */}
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-32 space-y-4">
                  <div className="p-6 bg-card rounded-xl border border-border shadow-sm">
                    <div className="mb-5">
                      {discountPercent > 0 && (
                        <span className="inline-block mb-2 px-2.5 py-1 rounded-sm bg-primary text-primary-foreground text-xs font-bold">
                          {discountPercent}% {t.off}
                        </span>
                      )}
                      <p className="text-muted-foreground text-sm">{t.startingFrom}</p>
                      <div className="flex items-baseline gap-3">
                        <p className="text-4xl font-bold text-primary">₹{Math.round(tour.priceINR).toLocaleString()}</p>
                        {tour.originalPriceINR && (
                          <p className="text-lg text-muted-foreground line-through">
                            ₹{Math.round(tour.originalPriceINR).toLocaleString()}
                          </p>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        ≈ ${Math.round(tour.price)} USD &bull; {t.perPerson}
                      </p>
                    </div>

                    <BookingWidget
                      tourTitle={tour.title}
                      tourSlug={tour.slug}
                      priceINR={tour.priceINR}
                      priceUSD={tour.price}
                      duration={tour.duration}
                      locale={tour.locale}
                    />

                    <ul className="mt-5 pt-5 border-t border-border space-y-2.5 text-sm text-foreground">
                      <li className="flex items-center gap-2.5">
                        <ShieldCheck size={16} className="text-accent" /> {t.freeCancel}
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Wallet size={16} className="text-accent" /> {t.payLater}
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Headset size={16} className="text-accent" /> {t.support}
                      </li>
                    </ul>
                  </div>

                  {tripAdvisor && (
                    <a
                      href={tripAdvisor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary transition"
                    >
                      <Image src="/logo/tripadvisor_logo.png" alt="Tripadvisor" width={1200} height={266} className="h-7 w-auto" />
                      <div className="text-sm leading-tight">
                        <div className="flex mb-1" aria-hidden>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={14} className="fill-secondary text-secondary" />
                          ))}
                        </div>
                        <p className="font-semibold text-foreground">
                          {tripAdvisor.rating.toFixed(1)} &bull; {tripAdvisor.reviewCount} {t.reviewsWord}
                        </p>
                        <p className="text-muted-foreground">{t.taRated}</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <TripAdvisorReviews title={t.reviewsTitle} className="py-12 md:py-16 bg-muted/30" />

        {/* FAQ Section */}
        {tour.faqs && tour.faqs.length > 0 && (
          <section className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
                  {t.faq}
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  {t.faqSub}
                </p>
              </div>
              <div className="max-w-4xl mx-auto space-y-4">
                {tour.faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition-colors"
                  >
                    <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-foreground hover:text-primary transition-colors">
                      <span className="text-lg">{faq.question}</span>
                      <span className="ml-4 flex-shrink-0 text-2xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Tours */}
        {relatedTours.length > 0 && (
          <section className="py-12 md:py-20 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">{t.alsoLike}</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
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
                    locale={relatedTour.locale}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <CTASection
          title={t.ctaTitle}
          description={t.ctaDesc}
          buttonText={t.ctaButton}
          buttonHref="/tours"
        />

        {/* Sticky mobile booking bar */}
        <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-card/95 backdrop-blur border-t border-border px-4 py-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-muted-foreground leading-none">{t.from}</p>
            <p className="text-xl font-bold text-primary leading-tight">₹{Math.round(tour.priceINR).toLocaleString()}</p>
          </div>
          <a
            href={`https://wa.me/919368862429?text=${bookingMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm bg-primary text-primary-foreground font-bold text-sm"
          >
            <MessageCircle size={18} />
            {t.bookWa}
          </a>
        </div>
      </main>
      <div className="h-16 lg:hidden" aria-hidden />
      <Footer />
      <WhatsAppWidget className="bottom-20 lg:bottom-6" />
    </>
  )
}
