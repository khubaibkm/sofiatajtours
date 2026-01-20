export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sofia Taj Tours",
    url: "https://sofiatajtours.com",
    logo: "https://sofiatajtours.com/logo.png",
    description: "Premium Taj Mahal tours from Delhi, Golden Triangle packages, and customized India tours with expert guides and skip-the-line access",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+91-XXXXXXXXXX",
      email: "info@sofiatajtours.com",
    },
    sameAs: [
      "https://www.facebook.com/sofiatajtours",
      "https://www.instagram.com/sofiatajtours",
      "https://www.twitter.com/sofiatajtours",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sofia Taj Tours",
    url: "https://sofiatajtours.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://sofiatajtours.com/tours?search={search_term_string}",
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
