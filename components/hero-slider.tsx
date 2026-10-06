"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"
import type { HeroSlide } from "@/data/site"

const IMAGE_DURATION = 3000
const VIDEO_MAX_DURATION = 5000

export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [current, setCurrent] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({})

  const go = useCallback(
    (index: number) => setCurrent((index + slides.length) % slides.length),
    [slides.length],
  )

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  // Auto-advance; video slides get a longer window (and advance when the video ends).
  useEffect(() => {
    if (reducedMotion || slides.length < 2) return
    const delay = slides[current].type === "video" ? VIDEO_MAX_DURATION : IMAGE_DURATION
    const timer = setTimeout(() => go(current + 1), delay)
    return () => clearTimeout(timer)
  }, [current, reducedMotion, slides, go])

  // Play only the active video.
  useEffect(() => {
    Object.entries(videoRefs.current).forEach(([key, video]) => {
      if (!video) return
      if (Number(key) === current) {
        video.currentTime = 0
        video.play().catch(() => {})
      } else {
        video.pause()
      }
    })
  }, [current])

  return (
    <section
      className="relative h-[75vh] min-h-[480px] md:h-[88vh] overflow-hidden bg-black"
      aria-roledescription="carousel"
      aria-label="Featured tours"
    >
      {slides.map((slide, index) => {
        const active = index === current
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${active ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-hidden={!active}
          >
            {slide.type === "video" ? (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el
                }}
                className="absolute inset-0 h-full w-full object-cover"
                poster={slide.poster}
                muted
                playsInline
                preload={active || (index - current + slides.length) % slides.length === 1 ? "auto" : "none"}
                onEnded={() => active && go(index + 1)}
                aria-label={slide.alt}
              >
                {(active || Math.abs(index - current) === 1) && <source src={slide.src} type="video/mp4" />}
              </video>
            ) : (
              <>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  className={`object-cover object-top ${slide.mobileSrc ? "hidden md:block" : ""}`}
                  priority={index === 0}
                />
                {slide.mobileSrc && (
                  <Image
                    src={slide.mobileSrc}
                    alt={slide.alt}
                    fill
                    sizes="100vw"
                    className="object-cover object-top md:hidden"
                    priority={index === 0}
                  />
                )}
              </>
            )}

            {slide.headline && (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-black/30" />
                <div className="absolute inset-x-0 top-[22%] md:top-1/4 px-5 md:px-6 text-center text-white">
                  <h2 className="text-2xl sm:text-4xl md:text-6xl font-serif font-bold drop-shadow-lg text-balance">
                    {slide.headline}
                  </h2>
                  {slide.subheadline && (
                    <p className="hidden md:block mt-4 text-xl max-w-2xl mx-auto drop-shadow text-balance">
                      {slide.subheadline}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        )
      })}

      {/* Persistent call-to-action bar */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent pt-8 md:pt-16 pb-9 md:pb-16 px-3 md:px-4">
        <div className="mx-auto hidden sm:flex max-w-3xl flex-row items-stretch justify-center gap-2 sm:gap-3">
          <Link
            href={slides[current].cta?.href ?? "/tours"}
            className="flex-[1.4] sm:flex-none flex items-center justify-center text-center leading-tight text-xs sm:text-base px-3 sm:px-8 py-2 sm:py-3 rounded-sm bg-primary text-primary-foreground font-bold shadow-lg hover:bg-primary/90 transition"
          >
            {slides[current].cta?.label ?? "Book Your Tour"}
          </Link>
          <a
            href="https://wa.me/919368862429?text=Hello!%20I'm%20interested%20in%20booking%20a%20tour%20with%20Sofia%20Taj%20Tours."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-base px-3 sm:px-8 py-2 sm:py-3 rounded-sm bg-white/95 text-foreground font-bold shadow-lg hover:bg-white transition"
          >
            <MessageCircle className="h-4 w-4 sm:h-[18px] sm:w-[18px] text-green-600" />
            <span><span className="hidden sm:inline">Chat on </span>WhatsApp</span>
          </a>
        </div>
        <p className="hidden sm:block mt-3 text-center text-sm text-white/90 font-medium">
          Free cancellation &bull; Pay on arrival &bull; 24/7 support
        </p>
      </div>

      {slides.length > 1 && (
        <>
          <button
            onClick={() => go(current - 1)}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition"
            aria-label="Previous slide"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={() => go(current + 1)}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition"
            aria-label="Next slide"
          >
            <ChevronRight />
          </button>
          <div className="absolute bottom-2 md:bottom-4 inset-x-0 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => go(index)}
                className={`h-2 rounded-full transition-all ${index === current ? "w-8 bg-secondary" : "w-2 bg-white/60"}`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === current}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
