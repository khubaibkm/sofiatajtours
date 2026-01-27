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
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary"></div>

      {/* Animated gradient blobs for depth */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-radial from-secondary/60 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-radial from-accent/60 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute top-20 right-20 w-[300px] h-[300px] bg-gradient-radial from-secondary/40 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
      </div>

      {/* Subtle noise texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '100px 100px' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4 text-balance drop-shadow-md">{title}</h2>
        <p className="text-lg text-white/95 mb-8 max-w-3xl mx-auto text-balance drop-shadow-sm">{description}</p>
        <Link
          href={buttonHref}
          className="inline-flex px-10 py-3.5 bg-white text-primary rounded-sm font-semibold hover:bg-secondary hover:text-white hover:shadow-2xl transition-all duration-300 text-base hover:scale-105"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  )
}
