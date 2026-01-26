export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "TravelAgency", "LocalBusiness"],
    name: "Sofia Taj Tours",
    url: "https://sofiatajtours.com",
    logo: "https://sofiatajtours.com/logo.png",
    description: "Premium Taj Mahal tours from Delhi, Golden Triangle packages, and customized India tours with expert guides and skip-the-line access",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Agra",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.1767",
      longitude: "78.0081",
    },
    areaServed: ["Delhi", "Agra", "Jaipur", "Uttar Pradesh", "Rajasthan", "India"],
    priceRange: "$$",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+91-9368862429",
      email: "sofiatajtours@gmail.com",
      availableLanguage: ["English", "Hindi"],
      areaServed: "IN",
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
  priceINR,
}: {
  title: string
  description: string
  location: string
  image: string
  startDate: string
  endDate: string
  price: number
  priceINR?: number
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
    offers: [
      {
        "@type": "Offer",
        priceCurrency: "INR",
        price: priceINR ? priceINR.toString() : (price * 91).toString(),
        availability: "https://schema.org/InStock",
        url: `https://sofiatajtours.com/tours/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      },
      {
        "@type": "Offer",
        priceCurrency: "USD",
        price: price.toString(),
        availability: "https://schema.org/InStock",
        url: `https://sofiatajtours.com/tours/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
