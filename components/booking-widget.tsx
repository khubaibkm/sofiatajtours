"use client"

import { useState } from "react"
import { Calendar, Users, MessageCircle } from "lucide-react"

interface BookingWidgetProps {
  tourTitle: string
  tourSlug: string
  priceINR: number
  priceUSD: number
  duration: string
}

export function BookingWidget({ tourTitle, tourSlug, priceINR, priceUSD, duration }: BookingWidgetProps) {
  const [date, setDate] = useState("")
  const [people, setPeople] = useState(1)

  const totalPriceINR = priceINR * people
  const totalPriceUSD = priceUSD * people

  const handleBookOnWhatsApp = () => {
    const whatsappNumber = "919368862429"

    const message = `Hello! I would like to book the following tour:

*Tour:* ${tourTitle}
*Travel Date:* ${date || "To be decided"}
*Number of People:* ${people}
*Total Price:* Rs.${totalPriceINR.toLocaleString()} (approx $${totalPriceUSD})
*Duration:* ${duration}

Tour Link: https://www.sofiatajtours.com/tours/${tourSlug}

Please confirm availability and provide further details. Thank you!`

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappLink, "_blank")
  }

  return (
    <div className="space-y-4">
      {/* Date Selection */}
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
          <Calendar className="inline-block mr-2" size={16} />
          Travel Date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Number of People */}
      <div>
        <label htmlFor="people" className="block text-sm font-medium text-foreground mb-2">
          <Users className="inline-block mr-2" size={16} />
          Number of People
        </label>
        <select
          id="people"
          value={people}
          onChange={(e) => setPeople(Number(e.target.value))}
          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? "Person" : "People"}
            </option>
          ))}
        </select>
      </div>

      {/* Total Price Display */}
      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
        <p className="text-sm text-muted-foreground mb-1">Total Price</p>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-bold text-primary">₹{totalPriceINR.toLocaleString()}</p>
          <p className="text-lg text-muted-foreground">(${totalPriceUSD})</p>
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          ₹{priceINR.toLocaleString()} × {people} {people === 1 ? "person" : "people"}
        </p>
      </div>

      {/* Book on WhatsApp Button */}
      <button
        onClick={handleBookOnWhatsApp}
        className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-2 shadow-lg"
      >
        <MessageCircle size={20} />
        Book on WhatsApp
      </button>

      {/* Payment Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
        <p className="text-blue-700 text-sm font-medium text-center">
          Flexible Payment - Pay Now or Pay on Arrival
        </p>
      </div>

      {/* Contact Options */}
      <div className="text-center text-sm text-muted-foreground">
        or{" "}
        <a href="/contact" className="text-primary hover:underline font-medium">
          contact us for custom packages
        </a>
      </div>
    </div>
  )
}
