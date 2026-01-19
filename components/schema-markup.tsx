export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Wanderlust Tours",
    url: "https://wanderlust.com",
    logo: "https://wanderlust.com/logo.png",
    description: "Curated travel experiences and guided tours to the world's most beautiful destinations",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+1-800-123-4567",
      email: "info@wanderlust.com",
    },
    sameAs: [
      "https://www.facebook.com/wanderlusttours",
      "https://www.instagram.com/wanderlusttours",
      "https://www.twitter.com/wanderlusttours",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wanderlust Tours",
    url: "https://wanderlust.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://wanderlust.com/tours?search={search_term_string}",
      },
      query_input: "required name=search_term_string",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function TouristTripSchema({
  title,
  description,
  location,
  image,
  startDate,
  endDate,
  price,
}: {
  title: string
  description: string
  location: string
  image: string
  startDate: string
  endDate: string
  price: number
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: title,
    description: description,
    image: image,
    touristType: ["Cultural", "Adventure", "Leisure"],
    areaServed: {
      "@type": "Place",
      name: location,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: price.toString(),
      availability: "https://schema.org/InStock",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
