"use client"

import Link from "next/link"
import { useState } from "react"

export function WhatsAppWidget() {
  const [isHovered, setIsHovered] = useState(false)

  const whatsappNumber = "919876543210" // Replace with actual number
  const message = "Hello! I'm interested in booking a Taj Mahal tour with Sofia Taj Tours."
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <Link
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.966 1.429 9.841 9.841 0 00-6.48 9.452c0 5.418 4.41 9.828 9.829 9.828 5.418 0 9.828-4.41 9.828-9.829 0-5.418-4.41-9.829-9.829-9.829m.193 19.268a8.18 8.18 0 01-8.182-8.182c0-4.516 3.666-8.182 8.182-8.182 4.516 0 8.181 3.666 8.181 8.182-1 4.516-3.667 8.182-8.181 8.182z"/>
          </svg>
        </div>
        {isHovered && (
          <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap animate-in fade-in slide-in-from-left-2 duration-200">
            Chat on WhatsApp
          </div>
        )}
      </Link>
    </div>
  )
}
