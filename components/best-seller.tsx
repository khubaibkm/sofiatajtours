import Image from "next/image"
import Link from "next/link"
import { Clock, MapPin, MessageCircle, ShieldCheck } from "lucide-react"
import type { Tour } from "@/data/tours"

// Spotlight for one tour. Pass any tour from data/tours.ts.
export function BestSeller({ tour }: { tour: Tour }) {
  const paragraphs = tour.overview && tour.overview.length > 0 ? tour.overview : [tour.description]
  const discount = tour.originalPriceINR
    ? Math.round(((tour.originalPriceINR - tour.priceINR) / tour.originalPriceINR) * 100)
    : 0
  const message = encodeURIComponent(
    `Hello! I would like to book: ${tour.title}\nhttps://www.sofiatajtours.com/tours/${tour.slug}`,
  )

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/15 via-background to-secondary/25">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-card/90 rounded-2xl border border-border/60 shadow-lg p-6 md:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-secondary-foreground/70 mb-2">
              <span className="text-primary">Our Best Selling Tour</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-5 text-balance">{tour.title}</h2>

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground mb-5">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={16} className="text-secondary" />
                {tour.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={16} className="text-secondary" />
                {tour.duration}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-secondary" />
                Free cancellation
              </span>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="flex flex-wrap items-end gap-x-6 gap-y-4">
              <div>
                <p className="text-xs text-muted-foreground">From</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-primary">₹{Math.round(tour.priceINR).toLocaleString()}</span>
                  {tour.originalPriceINR && (
                    <span className="text-muted-foreground line-through">
                      ₹{Math.round(tour.originalPriceINR).toLocaleString()}
                    </span>
                  )}
                  {discount > 0 && (
                    <span className="px-2 py-0.5 rounded-sm bg-primary text-primary-foreground text-xs font-bold">
                      {discount}% OFF
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">≈ ${Math.round(tour.price)} USD per person</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`/tours/${tour.slug}`}
                  className="px-8 py-3 rounded-sm bg-primary text-primary-foreground font-bold shadow hover:bg-primary/90 transition"
                >
                  Book Now
                </Link>
                <a
                  href={`https://wa.me/919368862429?text=${message}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border-2 border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground transition"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <Link
            href={`/tours/${tour.slug}`}
            className="relative block aspect-[4/3] rounded-xl overflow-hidden shadow-xl ring-4 ring-white/70 group"
            aria-label={`View ${tour.title}`}
          >
            <Image
              src={tour.images[0]}
              alt={tour.title}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
