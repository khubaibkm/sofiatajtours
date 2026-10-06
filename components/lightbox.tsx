"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface LightboxProps {
  images: string[]
  index: number
  open: boolean
  title: string
  onIndexChange: (index: number) => void
  onOpenChange: (open: boolean) => void
}

// Full-screen image viewer: arrows, keyboard, swipe and a thumbnail strip.
export function Lightbox({ images, index, open, title, onIndexChange, onOpenChange }: LightboxProps) {
  const touchStartX = useRef<number | null>(null)
  const next = useCallback(() => onIndexChange((index + 1) % images.length), [index, images.length, onIndexChange])
  const prev = useCallback(
    () => onIndexChange((index - 1 + images.length) % images.length),
    [index, images.length, onIndexChange],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, next, prev])

  if (images.length === 0) return null

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/95" />
        <Dialog.Content
          className="fixed inset-0 z-[101] flex flex-col focus:outline-none"
          aria-describedby={undefined}
          onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchStartX.current === null) return
            const dx = e.changedTouches[0].clientX - touchStartX.current
            if (Math.abs(dx) > 50) dx < 0 ? next() : prev()
            touchStartX.current = null
          }}
        >
          <Dialog.Title className="sr-only">{title}</Dialog.Title>
          <div className="flex items-center justify-between px-4 py-3 text-white">
            <span className="text-sm">
              {index + 1} / {images.length}
            </span>
            <Dialog.Close
              className="h-10 w-10 inline-flex items-center justify-center rounded-full hover:bg-white/15"
              aria-label="Close gallery"
            >
              <X />
            </Dialog.Close>
          </div>

          <div className="relative flex-1 min-h-0">
            <Image
              key={images[index]}
              src={images[index]}
              alt={`${title} - photo ${index + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 h-11 w-11 inline-flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
                  aria-label="Previous photo"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 h-11 w-11 inline-flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70"
                  aria-label="Next photo"
                >
                  <ChevronRight />
                </button>
              </>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto px-4 py-3">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => onIndexChange(i)}
                className={`relative h-14 w-20 flex-shrink-0 overflow-hidden rounded ${
                  i === index ? "ring-2 ring-secondary" : "opacity-60 hover:opacity-100"
                }`}
                aria-label={`Show photo ${i + 1}`}
              >
                <Image src={src} alt="" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
