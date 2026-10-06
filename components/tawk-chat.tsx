"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

// Free live-chat widget from tawk.to. The IDs are public (they are visible in the embed script);
// NEXT_PUBLIC_TAWK_PROPERTY_ID / NEXT_PUBLIC_TAWK_WIDGET_ID can override them.
// It is not loaded on phones (under 768px): WhatsApp and the booking bar cover mobile contact.
export function TawkChat() {
  const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID || "6abcc4ac09d6f7344aa1f2e6"
  const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID || "1k3om0h43"
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(!window.matchMedia("(max-width: 767px)").matches)
  }, [])

  if (!enabled || !propertyId || !widgetId) return null

  return <Script src={`https://embed.tawk.to/${propertyId}/${widgetId}`} strategy="lazyOnload" crossOrigin="anonymous" />
}
