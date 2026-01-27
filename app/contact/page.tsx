"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tour: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", phone: "", tour: "", message: "" })

      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Have questions about our Taj Mahal tours? We'd love to hear from you and help plan your next adventure.
              Reach out anytime!
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Contact Info */}
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  details: ["+91-9368862429"],
                },
                {
                  icon: Mail,
                  title: "Email",
                  details: ["sofiatajtours@gmail.com"],
                },
                {
                  icon: MapPin,
                  title: "Address",
                  details: ["Agra, Uttar Pradesh", "India"],
                },
              ].map((contact, index) => {
                const Icon = contact.icon
                return (
                  <div key={index} className="p-6 bg-card rounded-xl border border-border text-center hover-lift">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="text-primary" size={32} />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{contact.title}</h3>
                    {contact.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm mb-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                )
              })}
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <div className="p-8 bg-card rounded-xl border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-primary/10 border border-primary rounded-lg">
                    <p className="text-primary font-medium">
                      Thank you! Your message has been sent successfully. We'll be in touch soon via phone or email.
                    </p>
                  </div>
                )}

                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-lg">
                    <p className="text-red-700 font-medium">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+91 (800) 000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="tour" className="block text-sm font-medium text-foreground mb-2">
                      Interested Tour (optional)
                    </label>
                    <select
                      id="tour"
                      name="tour"
                      value={formData.tour}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select a tour</option>
                      <option value="Taj Mahal Tour by Car From Delhi">Taj Mahal Tour by Car From Delhi</option>
                      <option value="Taj Mahal and Agra Overnight Tour">Taj Mahal and Agra Overnight Tour</option>
                      <option value="Sunrise Taj Mahal Tour From Delhi">Sunrise Taj Mahal Tour From Delhi</option>
                      <option value="Best of Old & New Delhi City Tour">Best of Old & New Delhi City Tour</option>
                      <option value="Old Delhi Food Tour">Old Delhi Food Tour</option>
                      <option value="Delhi Night Tour">Delhi Night Tour</option>
                      <option value="Golden Triangle Tour 3 Days">Golden Triangle Tour 3 Days</option>
                      <option value="Golden Triangle Tour 4 Days">Golden Triangle Tour 4 Days</option>
                      <option value="Golden Triangle with Udaipur 6 Days">Golden Triangle with Udaipur 6 Days</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      placeholder="Tell us about your travel dreams..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
