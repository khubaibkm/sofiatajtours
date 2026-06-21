import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Taj Mahal Travel Guide & India Tour Tips | Sofia Taj Tours Blog",
  description: "Expert travel guides, tips, and insider knowledge for visiting the Taj Mahal, Golden Triangle, Delhi, Agra, and Jaipur. Best time to visit, what to wear, photography tips, and more.",
  alternates: {
    canonical: "https://www.sofiatajtours.com/blog",
  },
}

const blogPosts = [
  {
    slug: "what-to-wear-taj-mahal",
    title: "What to Wear to Taj Mahal: Dress Code, Traditional Dress & Tips",
    excerpt: "Complete guide to dressing for the Taj Mahal visit. Includes dress code rules, traditional Indian dress options, modest clothing tips, and seasonal clothing recommendations.",
    image: "/images/taj (53).jpeg",
    category: "Travel Tips",
    readTime: "7 min read",
    date: "2026-03-29",
  },
  {
    slug: "taj-mahal-photography-guide",
    title: "Taj Mahal Photography Guide: 15 Best Spots & Camera Settings",
    excerpt: "Professional photography tips for capturing stunning Taj Mahal photos. Includes best angles, camera settings, sunrise golden hour tips, and Instagram-worthy locations.",
    image: "/images/taj (36).jpg",
    category: "Photography",
    readTime: "10 min read",
    date: "2026-03-25",
  },
  {
    slug: "best-time-visit-taj-mahal",
    title: "Best Time to Visit Taj Mahal in 2026: Month-by-Month Guide",
    excerpt: "Discover the perfect time to visit the Taj Mahal based on weather, crowds, and lighting. Includes sunrise vs sunset comparison, monthly weather guide, and crowd calendar.",
    image: "/images/taj (41).jpg",
    category: "Travel Tips",
    readTime: "8 min read",
    date: "2026-03-15",
  },
  {
    slug: "delhi-to-agra-travel-guide",
    title: "Delhi to Agra: Complete Travel Guide (Train, Car, Bus)",
    excerpt: "Everything you need to know about traveling from Delhi to Agra. Compare train, car, and bus options with prices, timings, and booking tips.",
    image: "/images/taj (99).jpg",
    category: "Travel Planning",
    readTime: "12 min read",
    date: "2026-04-15",
  },
  {
    slug: "golden-triangle-itinerary-7-days",
    title: "Perfect 7-Day Golden Triangle Itinerary (Delhi, Agra, Jaipur)",
    excerpt: "Detailed day-by-day itinerary for the Golden Triangle tour. Includes must-see attractions, hidden gems, hotel recommendations, and budget breakdown.",
    image: "/images/taj (111).jpg",
    category: "Itineraries",
    readTime: "15 min read",
    date: "2026-04-20",
  },
  {
    slug: "taj-mahal-history-love-story",
    title: "The Taj Mahal Love Story: Shah Jahan & Mumtaz Mahal",
    excerpt: "The romantic history behind the Taj Mahal. Learn about Emperor Shah Jahan's eternal love for Mumtaz Mahal and the 22-year construction of this monument.",
    image: "/images/taj (43).jpg",
    category: "History",
    readTime: "9 min read",
    date: "2026-04-10",
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4">
              Taj Mahal Travel Guide
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert tips, insider guides, and everything you need to know for your perfect India tour
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition-all duration-300 hover-lift block"
                >
                  <article>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        Read More
                        <span>→</span>
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Newsletter CTA */}
            <div className="mt-16 p-8 bg-muted/50 rounded-lg border border-border text-center">
              <h3 className="text-2xl font-bold text-foreground mb-3">More Travel Guides Coming!</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're constantly adding new travel guides, tips, and insider knowledge about India.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
