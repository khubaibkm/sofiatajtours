import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Star } from "lucide-react"

interface TourCardProps {
  slug: string
  title: string
  location: string
  duration: string
  price: number
  priceINR: number
  originalPrice?: number
  originalPriceINR?: number
  features?: string[]
  image: string
  rating?: number
  reviewCount?: number
  locale?: "en" | "es"
}

export function TourCard({
  slug,
  title,
  location,
  duration,
  price,
  priceINR,
  originalPriceINR,
  features,
  image,
  rating,
  reviewCount,
  locale = "en",
}: TourCardProps) {
  const es = locale === "es"
  const discountPercentage = originalPriceINR
    ? Math.round(((originalPriceINR - priceINR) / originalPriceINR) * 100)
    : 0

  return (
    <Link href={`/tours/${slug}`} className="block h-full">
      <div className="bg-card rounded-lg overflow-hidden hover-lift group h-full flex flex-col border border-border/50">
        <div className="relative h-56 overflow-hidden bg-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {discountPercentage > 0 && (
            <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs px-2.5 py-1 rounded-sm font-bold">
              {discountPercentage}% {es ? "DTO." : "OFF"}
            </span>
          )}
          {features && features.length > 0 && (
            <span className="absolute top-3 left-3 bg-secondary/95 text-secondary-foreground text-xs px-2.5 py-1 rounded-sm font-medium">
              {features[0]}
            </span>
          )}
        </div>

        <div className="flex-1 p-5 flex flex-col">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
            <span className="flex items-center gap-1">
              <MapPin size={15} className="text-secondary" />
              {location}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={15} className="text-secondary" />
              {duration}
            </span>
          </div>

          <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {rating ? (
            <div className="flex items-center gap-1 text-sm mb-3">
              <Star size={15} className="fill-secondary text-secondary" />
              <span className="font-semibold text-foreground">{rating.toFixed(1)}</span>
              {reviewCount ? <span className="text-muted-foreground">({reviewCount} {es ? "reseñas" : "reviews"})</span> : null}
            </div>
          ) : null}

          <div className="mt-auto flex items-end justify-between gap-3 pt-3 border-t border-border/60">
            <div>
              <p className="text-xs text-muted-foreground">{es ? "Desde" : "From"}</p>
              <div className="flex items-baseline gap-2">
                <span className="text-primary font-bold text-2xl">₹{Math.round(priceINR).toLocaleString()}</span>
                {originalPriceINR && (
                  <span className="text-muted-foreground text-sm line-through">
                    ₹{Math.round(originalPriceINR).toLocaleString()}
                  </span>
                )}
              </div>
              <p className="text-xs text-muted-foreground">≈ ${Math.round(price)} USD {es ? "por persona" : "per person"}</p>
            </div>
            <span className="px-4 py-2 bg-primary text-primary-foreground rounded-sm font-medium text-sm group-hover:bg-primary/90 transition-colors">
              {es ? "Ver detalles" : "View Details"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
