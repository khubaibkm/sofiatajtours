"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is included in the Taj Mahal tour?",
    answer:
      "Our tours include professional English-speaking guide, entrance fees to Taj Mahal, hotel pickup and drop-off, and complimentary bottled water. Some packages include meals and additional site visits.",
  },
  {
    question: "Can I book a tour on short notice?",
    answer:
      "Yes! We offer flexible booking with availability as early as 24 hours. Contact us directly via WhatsApp or phone for last-minute bookings.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We offer free cancellation up to 24 hours in advance for a full refund. Cancellations within 24 hours may incur a 50% fee. Weather-related cancellations are fully refunded.",
  },
  {
    question: "Are your tours customizable?",
    answer:
      "We specialize in fully customizable private guided tours. Tell us your preferences, duration, interests, and budget, and we'll create the perfect itinerary for you.",
  },
  {
    question: "What is the best time to visit the Taj Mahal?",
    answer:
      "The best time is October to March when the weather is pleasant. However, we operate year-round. Early morning visits (sunrise) offer fewer crowds and beautiful lighting.",
  },
  {
    question: "Do you offer sunrise and sunset tours?",
    answer:
      "Yes! Our Sunrise Wonders tour departs early morning for spectacular golden hour photography. Sunset tours showcase the monument's changing colors.",
  },
  {
    question: "Is there a dress code for visiting Taj Mahal?",
    answer:
      "While there's no strict dress code, we recommend modest clothing out of respect. Remove shoes at certain areas or use provided shoe covers. Comfortable walking shoes are essential.",
  },
  {
    question: "How fit do I need to be for the tours?",
    answer:
      "All our tours accommodate various fitness levels. We have options for leisurely paced walks and shorter durations. Let us know your requirements when booking.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Have questions about your Taj Mahal adventure? Find answers below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-card/80 transition-colors text-left"
              >
                <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`text-secondary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-muted/50 border-t border-border animate-in fade-in duration-200">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
