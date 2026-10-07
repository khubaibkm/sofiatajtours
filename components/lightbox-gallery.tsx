"use client"

import Image from "next/image"
import { useState } from "react"
import { Grid2x2 } from "lucide-react"
import { Lightbox } from "@/components/lightbox"

interface LightboxGalleryProps {
  images: string[]
  title: string
}

export function LightboxGallery({ images: rawImages, title }: LightboxGalleryProps) {
  // Some tours list the same photo more than once.
  const images = Array.from(new Set(rawImages)).filter(Boolean)
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  const show = (i: number) => {
    setIndex(i)
    setOpen(true)
  }

  if (images.length === 0) return null
  const preview = images.slice(0, 5)
  const remaining = images.length - preview.length

  return (
    <>
      {/* Mosaic: one large image + four small on desktop, single image on mobile */}
      <div className="relative grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[280px] md:h-[440px] rounded-xl overflow-hidden">
        {preview.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => show(i)}
            className={`relative overflow-hidden group bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              i === 0 ? "md:col-span-2 md:row-span-2" : "hidden md:block"
            }`}
            aria-label={`Open photo ${i + 1} of ${images.length}`}
          >
            <Image
              src={src}
              alt={`${title} - photo ${i + 1}`}
              fill
              priority={i === 0}
              sizes={i === 0 ? "(min-width: 768px) 50vw, 100vw" : "25vw"}
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
        <button
          type="button"
          onClick={() => show(0)}
          className="absolute bottom-3 right-3 inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-white/95 text-foreground text-sm font-semibold shadow-lg hover:bg-white transition"
        >
          <Grid2x2 size={16} />
          {remaining > 0 ? `View all ${images.length} photos` : "View photos"}
        </button>
      </div>

      <Lightbox
        images={images}
        index={index}
        open={open}
        title={`${title} photo gallery`}
        onIndexChange={setIndex}
        onOpenChange={setOpen}
      />
    </>
  )
}
