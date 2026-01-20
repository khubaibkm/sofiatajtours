import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, DollarSign, Star } from "lucide-react"

interface TourCardProps {
  slug: string
  title: string
  location: string
  duration: string
  price: number
  originalPrice?: number
  reviews?: number
  features?: string[]
  image: string
}

export function TourCard({ slug, title, location, duration, price, originalPrice, reviews, features, image }: TourCardProps) {
  return (
    <Link href={`/tours/${slug}`}>
      <div className="bg-card rounded-lg overflow-hidden hover-lift group h-full flex flex-col border border-border/50">
        <div className="relative h-56 overflow-hidden bg-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {features && features.length > 0 && (
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {features.map((feature, index) => (
                <span key={index} className="bg-secondary/90 text-secondary-foreground text-xs px-2 py-1 rounded-sm font-medium">
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex-1 p-5 flex flex-col">
          <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <div className="flex items-center gap-1 text-muted-foreground mb-2">
            <MapPin size={16} className="text-secondary" />
            <span className="text-sm">{location}</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Clock size={16} className="text-secondary" />
              <span>{duration}</span>
            </div>
            {reviews && (
              <div className="flex items-center gap-1">
                <Star size={16} className="text-secondary fill-secondary" />
                <span>{reviews} Reviews</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1 text-primary font-bold text-xl">
              <span className="text-sm">From</span>
              <DollarSign size={18} />
              <span>{price.toFixed(2)}</span>
            </div>
            {originalPrice && (
              <span className="text-muted-foreground text-sm line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button className="w-full mt-auto px-4 py-2.5 bg-primary text-primary-foreground rounded-sm font-medium text-sm hover:bg-primary/90 transition-all duration-300">
            View Details
          </button>
        </div>
      </div>
    </Link>
  )
}
