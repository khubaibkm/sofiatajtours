import { CheckCircle2, RotateCcw, Zap } from "lucide-react"
import Link from "next/link"

export function FlexibilitySection() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Book Now & Pay On Arrival</h2>
          <p className="text-xl text-muted-foreground">Secure your spot while staying flexible!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Free Cancellation */}
          <div className="p-8 bg-card rounded-lg border border-border hover-lift">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <RotateCcw className="text-primary" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-3 text-center">Free Cancellation</h3>
            <p className="text-muted-foreground text-center mb-4">
              Up to 24 hours in advance for a full refund. No questions asked, no hidden fees.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-secondary mt-1 flex-shrink-0" />
                <span>Full refund within 24 hours</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-secondary mt-1 flex-shrink-0" />
                <span>Weather-related cancellations</span>
              </div>
            </div>
          </div>

          {/* Ultimate Flexibility */}
          <div className="p-8 bg-card rounded-lg border border-border hover-lift">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-secondary/10 rounded-full">
                <Zap className="text-secondary" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-3 text-center">Ultimate Flexibility</h3>
            <p className="text-muted-foreground text-center mb-4">
              Fully Customizable – Private Guided Tours tailored to your preferences.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-secondary mt-1 flex-shrink-0" />
                <span>Design your own itinerary</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-secondary mt-1 flex-shrink-0" />
                <span>Private guides & transport</span>
              </div>
            </div>
          </div>

          {/* Secure Your Spot */}
          <div className="p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-primary/20 hover-lift">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/20 rounded-full">
                <CheckCircle2 className="text-primary" size={32} />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-3 text-center">Secure Your Spot</h3>
            <p className="text-muted-foreground text-center mb-6">
              Reserve now with minimal deposit. Pay the balance on arrival with complete peace of mind.
            </p>
            <div className="text-center">
              <Link
                href="/tours"
                className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Book Your Tour
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
