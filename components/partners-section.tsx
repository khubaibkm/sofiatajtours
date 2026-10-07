import Image from "next/image"
import { partners } from "@/data/site"

// Renders nothing until partners are listed in data/site.ts.
export function PartnersSection() {
  if (partners.length === 0) return null

  return (
    <section className="py-16 md:py-20 bg-muted/30" aria-labelledby="partners-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="partners-heading" className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
          Our Trusted Partners
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We collaborate with globally recognized travel platforms, so you can book with confidence.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 mb-10"></div>

        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {partners.map((partner) => {
            const logo = (
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="max-h-9 md:max-h-10 w-auto object-contain"
              />
            )
            const cardClass =
              "flex items-center justify-center w-40 h-24 md:w-48 md:h-28 rounded-xl bg-card border border-border/60 shadow-sm px-6 transition hover:shadow-md hover:-translate-y-0.5"
            return (
              <li key={partner.name}>
                {partner.url ? (
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" className={cardClass} aria-label={partner.name}>
                    {logo}
                  </a>
                ) : (
                  <div className={cardClass}>{logo}</div>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
