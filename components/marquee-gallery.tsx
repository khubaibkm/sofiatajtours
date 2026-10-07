"use client"

import Image from "next/image"
import { useState } from "react"
import { Lightbox } from "@/components/lightbox"

interface MarqueeGalleryProps {
  images: string[]
}

export function MarqueeGallery({ images: rawImages }: MarqueeGalleryProps) {
  const images = Array.from(new Set(rawImages)).filter(Boolean)
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  if (images.length < 6) return null

  // Two rows scrolling in opposite directions, each on a different half of the photos.
  const half = Math.ceil(images.length / 2)
  const rows = [
    { items: images.slice(0, half).map((src, i) => ({ src, index: i })), reverse: false },
    { items: images.slice(half).map((src, i) => ({ src, index: half + i })), reverse: true },
  ]

  const show = (i: number) => {
    setIndex(i)
    setOpen(true)
  }

  return (
    <>
      <div className="space-y-4">
        {rows.map((row, r) => (
          <div key={r} className="marquee group/marquee overflow-hidden">
            <div className={`marquee-track ${row.reverse ? "marquee-reverse" : ""}`}>
              {/* The list is rendered twice so the loop is seamless. */}
              {[0, 1].map((copy) =>
                row.items.map((item) => (
                  <button
                    key={`${copy}-${item.src}`}
                    type="button"
                    onClick={() => show(item.index)}
                    aria-hidden={copy === 1}
                    tabIndex={copy === 1 ? -1 : 0}
                    aria-label={`Open photo ${item.index + 1} of ${images.length}`}
                    className="relative h-44 w-64 md:h-56 md:w-80 flex-shrink-0 overflow-hidden rounded-xl bg-muted group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  >
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      sizes="320px"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors" />
                  </button>
                )),
              )}
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        images={images}
        index={index}
        open={open}
        title="Sofia Taj Tours photo gallery"
        onIndexChange={setIndex}
        onOpenChange={setOpen}
      />
    </>
  )
}
