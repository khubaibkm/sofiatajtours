"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink, PenLine } from "lucide-react"
import { reviews, tripAdvisor } from "@/data/site"

// Tripadvisor's own rating bubbles use this green.
const BUBBLE = "#00AA6C"

function Bubbles({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <span className="inline-flex gap-1" role="img" aria-label={`${rating} out of 5 bubbles`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="rounded-full border-2"
          style={{
            width: size,
            height: size,
            borderColor: BUBBLE,
            backgroundColor: i < Math.round(rating) ? BUBBLE : "transparent",
          }}
        />
      ))}
    </span>
  )
}

function initials(name: string) {
  const parts = name.replace(/[^A-Za-z ]/g, " ").trim().split(/\s+/)
  return (parts[0]?.[0] ?? "?").toUpperCase() + (parts[1]?.[0] ?? "").toUpperCase()
}

interface Props {
  title?: string
  className?: string
}

// Renders nothing until Tripadvisor data and reviews exist in data/site.ts.
export function TripAdvisorReviews({ title = "Loved by Travelers on Tripadvisor", className = "py-10 md:py-20 bg-card" }: Props) {
  const [emblaRef, embla] = useEmblaCarousel({ align: "start", loop: false, dragFree: false })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const update = useCallback(() => {
    if (!embla) return
    setCanPrev(embla.canScrollPrev())
    setCanNext(embla.canScrollNext())
  }, [embla])

  useEffect(() => {
    if (!embla) return
    update()
    embla.on("select", update).on("reInit", update)
    return () => {
      embla.off("select", update).off("reInit", update)
    }
  }, [embla, update])

  if (!tripAdvisor || reviews.length === 0) return null

  return (
    <section className={className} aria-label="Tripadvisor reviews">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header: logo, rating, actions */}
        <div className="text-center mb-6 md:mb-10">
          <a href={tripAdvisor.url} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Image src="/logo/tripadvisor_logo.png" alt="Tripadvisor" width={1200} height={266} sizes="240px" className="h-8 md:h-14 w-auto mx-auto" />
          </a>
          <h2 className="mt-3 md:mt-4 text-2xl md:text-4xl font-serif font-bold text-foreground text-balance">{title}</h2>
          <div className="mt-3 md:mt-4 flex flex-wrap items-center justify-center gap-2 md:gap-3">
            <Bubbles rating={tripAdvisor.rating} size={16} />
            <span className="text-foreground text-sm md:text-base">
              <strong className="text-base md:text-xl">{tripAdvisor.rating.toFixed(1)}</strong>
              <span className="text-muted-foreground"> &bull; Excellent &bull; {tripAdvisor.reviewCount} reviews</span>
            </span>
          </div>
          <div className="mt-4 md:mt-6 flex flex-row flex-wrap items-center justify-center gap-2 md:gap-3">
            <a
              href={tripAdvisor.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-6 md:py-3 text-xs md:text-base rounded-sm text-white font-bold hover:opacity-90 transition"
              style={{ backgroundColor: BUBBLE }}
            >
              <PenLine className="h-3.5 w-3.5 md:h-[18px] md:w-[18px]" />
              <span><span className="hidden sm:inline">Write a Review on Tripadvisor</span><span className="sm:hidden">Write a Review</span></span>
            </a>
            <a
              href={tripAdvisor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-2 md:px-6 md:py-3 text-xs md:text-base rounded-sm border-2 border-primary text-primary font-bold hover:bg-primary hover:text-primary-foreground transition"
            >
              Read all reviews
              <ExternalLink className="h-3.5 w-3.5 md:h-4 md:w-4" />
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden transition-none" ref={emblaRef}>
            <div className="flex -ml-4 transition-none will-change-transform touch-pan-y">
              {reviews.map((review, i) => (
                <div key={i} className="pl-4 flex-[0_0_88%] sm:flex-[0_0_60%] md:flex-[0_0_44%] lg:flex-[0_0_32%] min-w-0">
                  <article className="h-full p-6 bg-background rounded-xl border border-border shadow-sm flex flex-col">
                    <header className="flex items-center gap-3 mb-4">
                      <div
                        className="h-11 w-11 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                        style={{ backgroundColor: BUBBLE }}
                        aria-hidden
                      >
                        {initials(review.name)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground truncate">{review.name}</p>
                        {review.country && <p className="text-sm text-muted-foreground truncate">{review.country}</p>}
                      </div>
                      <Image src="/logo/tripadvisor_logo.png" alt="Tripadvisor" width={1200} height={266} sizes="96px" className="ml-auto h-5 w-auto flex-shrink-0" />
                    </header>

                    <div className="flex items-center gap-3 mb-3">
                      <Bubbles rating={review.rating} />
                      {review.date && <span className="text-xs text-muted-foreground">{review.date}</span>}
                    </div>

                    {review.title && <h3 className="font-semibold text-foreground mb-2">{review.title}</h3>}
                    <p className="text-muted-foreground leading-relaxed text-[0.95rem] flex-1">{review.text}</p>
                    {review.translatedFrom && (
                      <p className="mt-4 text-xs text-muted-foreground">Translated from {review.translatedFrom}</p>
                    )}
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => embla?.scrollPrev()}
            disabled={!canPrev}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-card border border-border shadow-md hover:bg-muted disabled:opacity-0 transition"
            aria-label="Previous reviews"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => embla?.scrollNext()}
            disabled={!canNext}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-card border border-border shadow-md hover:bg-muted disabled:opacity-0 transition"
            aria-label="Next reviews"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}
