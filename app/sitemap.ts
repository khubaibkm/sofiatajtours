import type { MetadataRoute } from "next"
import { tours } from "@/data/tours"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sofiatajtours.com"

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/tours`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // Dynamic tour pages
  const tourPages = tours.map((tour) => ({
    url: `${baseUrl}/tours/${tour.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Blog posts
  const blogPosts = [
    {
      url: `${baseUrl}/blog/what-to-wear-taj-mahal`,
      lastModified: new Date("2026-03-29"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/taj-mahal-photography-guide`,
      lastModified: new Date("2026-03-25"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/best-time-visit-taj-mahal`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/delhi-to-agra-travel-guide`,
      lastModified: new Date("2025-12-28"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/golden-triangle-itinerary-7-days`,
      lastModified: new Date("2025-12-20"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/taj-mahal-history-love-story`,
      lastModified: new Date("2025-12-15"),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  return [...staticPages, ...tourPages, ...blogPosts]
}
