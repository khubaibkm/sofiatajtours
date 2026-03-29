export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "TravelAgency", "LocalBusiness"],
    name: "Sofia Taj Tours",
    url: "https://www.sofiatajtours.com",
    logo: "https://www.sofiatajtours.com/logo.png",
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
    url: "https://www.sofiatajtours.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.sofiatajtours.com/tours?search={search_term_string}",
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
        url: `https://www.sofiatajtours.com/tours/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
        validFrom: new Date().toISOString().split('T')[0],
      },
      {
        "@type": "Offer",
        priceCurrency: "USD",
        price: price.toString(),
        availability: "https://schema.org/InStock",
        url: `https://www.sofiatajtours.com/tours/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
        validFrom: new Date().toISOString().split('T')[0],
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function VideoSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  duration,
}: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  contentUrl: string
  duration?: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: name,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate,
    contentUrl: contentUrl,
    duration: duration || "PT5M",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ProductSchema({
  name,
  description,
  image,
  price,
  priceCurrency,
  url,
  sku,
}: {
  name: string
  description: string
  image: string
  price: number
  priceCurrency: string
  url: string
  sku: string
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    description: description,
    image: image,
    sku: sku,
    brand: {
      "@type": "Brand",
      name: "Sofia Taj Tours",
    },
    offers: {
      "@type": "Offer",
      url: url,
      priceCurrency: priceCurrency,
      price: price.toString(),
      availability: "https://schema.org/InStock",
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      seller: {
        "@type": "Organization",
        name: "Sofia Taj Tours",
      },
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
