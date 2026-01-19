import Link from "next/link"

interface CTASectionProps {
  title: string
  description: string
  buttonText?: string
  buttonHref?: string
}

export function CTASection({
  title,
  description,
  buttonText = "Get Started",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-accent/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4 text-balance">{title}</h2>
        <p className="text-lg text-primary-foreground/95 mb-8 max-w-3xl mx-auto text-balance">{description}</p>
        <Link
          href={buttonHref}
          className="inline-flex px-10 py-3.5 bg-secondary text-primary rounded-sm font-semibold hover:shadow-xl transition-all duration-300 text-base"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
