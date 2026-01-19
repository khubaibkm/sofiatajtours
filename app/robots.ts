import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/internal", "/api"],
    },
    sitemap: "https://wanderlust.com/sitemap.xml",
  }
}
