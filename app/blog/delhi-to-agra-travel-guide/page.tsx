import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { BreadcrumbSchema, FAQSchema } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Delhi to Agra Travel Guide 2026: Train, Car & Bus (Times, Prices & Tips)",
  description: "Complete guide to traveling from Delhi to Agra by train, private car, and bus in 2026. Compare prices, journey times, booking tips, and pros & cons for the Taj Mahal trip.",
  alternates: {
    canonical: "https://www.sofiatajtours.com/blog/delhi-to-agra-travel-guide",
  },
  openGraph: {
    title: "Delhi to Agra Travel Guide 2026: Train, Car & Bus Comparison",
    description: "Everything you need to know about traveling from Delhi to Agra. Compare all transport options with prices, timings, and insider booking tips.",
    images: [{ url: "/images/taj (99).jpg", width: 1200, height: 800 }],
  },
}

const faqs = [
  {
    question: "What is the fastest way to travel from Delhi to Agra?",
    answer: "The Gatimaan Express train is the fastest option, covering the 200 km journey in just 100 minutes (1 hour 40 minutes) and reaching speeds of 160 km/h. It departs from Hazrat Nizamuddin station at 8:10 AM and arrives at Agra Cantonment at 9:50 AM. A private car by Yamuna Expressway typically takes 3–3.5 hours. Budget at least 4–5 hours for buses."
  },
  {
    question: "How much does it cost to travel from Delhi to Agra?",
    answer: "Costs vary by transport: Gatimaan Express (AC Chair): ₹755 (~$9 USD) per person. Shatabdi Express (AC Chair): ₹670 (~$8). Private car (Innova/sedan): ₹3,500–₹5,500 ($42–$66) for the whole car. Private tour with car + guide + tickets: ₹6,000–₹9,000 ($72–$108) per person. Bus (Volvo AC): ₹250–₹400 ($3–$5) per person. Bus is cheapest but slowest and least comfortable for tourist travel."
  },
  {
    question: "Which is better: train or private car from Delhi to Agra?",
    answer: "It depends on your priorities. Train (Gatimaan Express) is faster, more comfortable, and offers a unique India experience — but you need a taxi in Agra. Private car gives door-to-door flexibility, allows stops at Sikandra (Akbar's Tomb), and is ideal for families or those with luggage. For first-time visitors or couples, a private car tour is usually the best value as it includes guide, tickets, and all transport for a fixed price."
  },
  {
    question: "Can I do a Delhi to Agra day trip?",
    answer: "Yes! A same-day Delhi to Agra trip is very popular and practical. Take the early morning Gatimaan Express (departs 8:10 AM, arrives 9:50 AM), spend 5–6 hours in Agra (Taj Mahal + Agra Fort), and return on the evening Gatimaan (departs 5:50 PM, arrives 7:30 PM). With a private car tour, you can leave Delhi at 5:00–6:00 AM and return by 9:00–10:00 PM comfortably."
  },
  {
    question: "Do I need to book Delhi to Agra train tickets in advance?",
    answer: "Yes, absolutely — especially for the Gatimaan Express. Trains book up weeks in advance, particularly during peak tourist season (October–March) and Indian holidays. Book via Indian Railways (irctc.co.in) or through a local agent. For foreign tourists, a small Tourist Quota is reserved — ask at the Foreign Tourist Booking Counter at New Delhi Railway Station."
  },
  {
    question: "What is the best station to use in Delhi for Agra trains?",
    answer: "For the Gatimaan Express (fastest): use Hazrat Nizamuddin Station (NZM). For the Shatabdi Express: use New Delhi Railway Station (NDLS). Both stations are well-connected by metro. Hazrat Nizamuddin is on the Delhi Metro Pink Line. New Delhi Station is on the Yellow and Orange Lines. Allow 45–60 minutes to reach either station from central Delhi."
  },
]

export default function BlogPost() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.sofiatajtours.com" },
    { name: "Blog", url: "https://www.sofiatajtours.com/blog" },
    { name: "Delhi to Agra Travel Guide", url: "https://www.sofiatajtours.com/blog/delhi-to-agra-travel-guide" },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <article className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <nav className="mb-8 text-sm">
              <Link href="/" className="text-primary hover:underline">Home</Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <Link href="/blog" className="text-primary hover:underline">Blog</Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-muted-foreground">Delhi to Agra Travel Guide</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Delhi to Agra Travel Guide 2026: Train, Car & Bus — Complete Comparison
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <time dateTime="2026-04-15">Updated April 15, 2026</time>
              <span>•</span>
              <span>12 min read</span>
              <span>•</span>
              <span>Travel Planning</span>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12">
              <Image
                src="/images/taj (99).jpg"
                alt="Traveling from Delhi to Agra - journey to the Taj Mahal"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                The 200 km journey from Delhi to Agra is one of India's most traveled tourist routes — and for good
                reason. At the end of the road (or track) sits the Taj Mahal. But with trains, private cars, buses,
                and tour packages all competing for your booking, choosing the right option can be confusing. This
                guide breaks down every option honestly.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Quick Comparison: All Delhi to Agra Options</h2>

              <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
                <table className="w-full text-sm">
                  <thead className="bg-primary/5">
                    <tr>
                      <th className="p-4 text-left text-foreground">Option</th>
                      <th className="p-4 text-left text-foreground">Duration</th>
                      <th className="p-4 text-left text-foreground">Cost (per person)</th>
                      <th className="p-4 text-left text-foreground">Rating</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border">
                      <td className="p-4 font-semibold">Gatimaan Express</td>
                      <td className="p-4">1h 40min</td>
                      <td className="p-4">₹755 (~$9)</td>
                      <td className="p-4 text-green-600 font-semibold">⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-semibold">Shatabdi Express</td>
                      <td className="p-4">2h 00min</td>
                      <td className="p-4">₹670 (~$8)</td>
                      <td className="p-4 text-green-600 font-semibold">⭐⭐⭐⭐</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-semibold">Private Car Tour</td>
                      <td className="p-4">3–3.5h</td>
                      <td className="p-4">₹3,000–₹5,000 ($36–$60)</td>
                      <td className="p-4 text-green-600 font-semibold">⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-semibold">Volvo AC Bus</td>
                      <td className="p-4">4–5h</td>
                      <td className="p-4">₹250–₹400 ($3–$5)</td>
                      <td className="p-4 text-yellow-600 font-semibold">⭐⭐⭐</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-semibold">Local Bus (UPSRTC)</td>
                      <td className="p-4">4–6h</td>
                      <td className="p-4">₹150–₹250 ($2–$3)</td>
                      <td className="p-4 text-red-600 font-semibold">⭐⭐</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Option 1: Gatimaan Express — The Best Train</h2>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-6">
                <p className="text-foreground font-semibold">⚡ India's Fastest Train — 160 km/h</p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Key Details</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-6">
                <li><strong>Train Number:</strong> 12050 (Delhi→Agra) / 12049 (Agra→Delhi)</li>
                <li><strong>Departure:</strong> Hazrat Nizamuddin (NZM) at <strong>8:10 AM</strong></li>
                <li><strong>Arrival:</strong> Agra Cantonment at <strong>9:50 AM</strong> (1h 40min)</li>
                <li><strong>Return Departure:</strong> Agra Cantonment at <strong>5:50 PM</strong></li>
                <li><strong>Return Arrival:</strong> Hazrat Nizamuddin at <strong>7:30 PM</strong></li>
                <li><strong>Days:</strong> Except Fridays</li>
                <li><strong>Class Options:</strong> CC (AC Chair Car) — only class available</li>
                <li><strong>Price:</strong> ₹755 ($9) one-way</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Pros & Cons</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-lg font-bold text-green-600 mb-4">Pros</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>✓ Fastest train (100 minutes)</li>
                    <li>✓ Very comfortable AC coaches</li>
                    <li>✓ Complimentary breakfast served onboard</li>
                    <li>✓ Punctual and reliable</li>
                    <li>✓ Perfect timing for day trip</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-lg font-bold text-red-600 mb-4">Cons</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>✗ Books up fast — reserve weeks ahead</li>
                    <li>✗ Fixed schedule (no flexibility)</li>
                    <li>✗ Need taxi/auto in Agra separately</li>
                    <li>✗ Only one round-trip daily</li>
                    <li>✗ Arrives at Agra Cantonment (not city center)</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">How to Book Gatimaan Express</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Online:</strong> Book at irctc.co.in (create a free account). Foreign credit cards sometimes
                have issues — use PayPal or ask your hotel to book.<br /><br />
                <strong>At the Station:</strong> Foreign Tourist Quota counter at New Delhi Railway Station (counter
                opens 8 AM). Small reserved quota for international tourists.<br /><br />
                <strong>Through an Agent:</strong> Local travel agents charge a small fee (₹100–₹200) but handle the
                complexity. Your hotel reception can usually help.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Option 2: Shatabdi Express — Reliable Alternative</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Key Details</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-8">
                <li><strong>Train Number:</strong> 12002 (Delhi→Agra) / 12001 (Agra→Delhi)</li>
                <li><strong>Departure:</strong> New Delhi Station (NDLS) at <strong>6:15 AM</strong></li>
                <li><strong>Arrival:</strong> Agra Cantonment at <strong>8:10 AM</strong> (1h 55min)</li>
                <li><strong>Return Departure:</strong> Agra Cantonment at <strong>8:35 PM</strong></li>
                <li><strong>Classes:</strong> CC (Chair Car) ₹670, EC (Executive Chair) ₹1,365</li>
                <li><strong>Days:</strong> Daily except Sundays</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The Shatabdi departs earlier than the Gatimaan and arrives by 8:10 AM — giving you slightly more time
                in Agra if you need it. The 6:15 AM departure from New Delhi means waking early (leave hotel by 5 AM).
                Complimentary breakfast included.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Option 3: Private Car — Best for Flexibility</h2>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-6">
                <p className="text-foreground font-semibold">Most Popular Choice for Tourists</p>
                <p className="text-muted-foreground">Door-to-door, flexible schedule, can stop anywhere.</p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Route: Yamuna Expressway</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Yamuna Expressway is a 6-lane expressway connecting Delhi to Agra in approximately 165 km from
                the Delhi border. <strong>Journey time: 3–3.5 hours</strong> under normal conditions. The route is
                smooth, well-maintained, and passes through countryside — a pleasant drive.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Traffic Warning:</strong> Leave Delhi by 6:00 AM to avoid peak hour traffic through the city.
                Friday evenings and Sunday returns can be slow on the expressway approaching Delhi.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Car Options & Prices</h3>
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <ul className="text-muted-foreground space-y-3">
                  <li><strong>Sedan (Swift Dzire, Honda City):</strong> ₹3,000–₹4,000 round trip (1–4 passengers)</li>
                  <li><strong>SUV (Innova Crysta):</strong> ₹4,500–₹5,500 round trip (1–7 passengers)</li>
                  <li><strong>Tempo Traveller:</strong> ₹6,000–₹8,000 (1–12 passengers)</li>
                  <li><strong>Tour Package (car + guide + tickets):</strong> ₹6,000–₹9,000 per person — all-inclusive and best value for most tourists</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Stop at Sikandra on the Way</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                One major advantage of a private car: you can stop at <strong>Sikandra</strong> (Akbar's Tomb), 10 km
                from Agra city on the main highway. This magnificent Mughal mausoleum is often missed by train
                travelers. Budget 45–60 minutes here before heading to the Taj Mahal.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-lg font-bold text-green-600 mb-4">Pros of Private Car</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>✓ Door-to-door service</li>
                    <li>✓ Flexible departure time</li>
                    <li>✓ Can stop anywhere (Sikandra, photo ops)</li>
                    <li>✓ No luggage restrictions</li>
                    <li>✓ Driver available all day in Agra</li>
                    <li>✓ Good for families and groups</li>
                    <li>✓ No booking complexity</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-lg font-bold text-red-600 mb-4">Cons of Private Car</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>✗ More expensive per person (unless group)</li>
                    <li>✗ Longer journey than train</li>
                    <li>✗ Traffic on Delhi roads</li>
                    <li>✗ Quality varies by driver/operator</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Option 4: Bus — Budget Traveler's Choice</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Volvo AC Bus (Recommended)</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Operator:</strong> UPSRTC (government) and private operators<br />
                <strong>Departure:</strong> ISBT Kashmere Gate (Delhi) — buses every 30–60 minutes<br />
                <strong>Journey Time:</strong> 4–5 hours (can be 5–6 in traffic)<br />
                <strong>Price:</strong> ₹250–₹400 one-way<br />
                <strong>Arrival:</strong> Agra ISBT (then local auto to city center)
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Volvo AC buses are clean, air-conditioned, and comfortable — a legitimate option for solo budget
                travelers. The journey is slower due to highway stops and traffic, but the price is unbeatable.
                <strong> Not recommended</strong> for day trips due to time lost; better suited for overnight or
                multi-day stays in Agra.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Planning Your Day Trip: Sample Itinerary</h2>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
                <h4 className="text-xl font-bold text-foreground mb-3">Perfect Delhi–Agra Day Trip by Train</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong>5:30 AM:</strong> Leave hotel, head to Hazrat Nizamuddin Station</li>
                  <li><strong>8:10 AM:</strong> Gatimaan Express departs</li>
                  <li><strong>9:50 AM:</strong> Arrive Agra Cantonment, taxi to East Gate</li>
                  <li><strong>10:30 AM:</strong> Enter Taj Mahal (after ticket queue)</li>
                  <li><strong>10:30–12:30 PM:</strong> Explore Taj Mahal (2 hours)</li>
                  <li><strong>1:00 PM:</strong> Lunch near Taj Mahal</li>
                  <li><strong>2:00–4:00 PM:</strong> Visit Agra Fort (highly recommended)</li>
                  <li><strong>4:30 PM:</strong> Head to Agra Cantonment Station</li>
                  <li><strong>5:50 PM:</strong> Gatimaan Express returns to Delhi</li>
                  <li><strong>7:30 PM:</strong> Back in Delhi</li>
                </ul>
              </div>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
                <h4 className="text-xl font-bold text-foreground mb-3">Perfect Delhi–Agra Day Trip by Private Car</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong>5:30 AM:</strong> Car departs Delhi hotel</li>
                  <li><strong>8:30–9:00 AM:</strong> Arrive Agra (optional Sikandra stop on the way)</li>
                  <li><strong>9:00 AM:</strong> Arrive Taj Mahal East Gate</li>
                  <li><strong>9:00–11:30 AM:</strong> Taj Mahal visit (2.5 hours)</li>
                  <li><strong>12:00 PM:</strong> Lunch</li>
                  <li><strong>1:00–3:00 PM:</strong> Agra Fort visit</li>
                  <li><strong>3:00–4:00 PM:</strong> Itmad-ud-Daulah (Baby Taj) optional</li>
                  <li><strong>4:30 PM:</strong> Depart Agra for Delhi</li>
                  <li><strong>7:30–8:00 PM:</strong> Arrive Delhi hotel</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">What to See in Agra (Beyond the Taj)</h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-8">
                <li><strong>Agra Fort:</strong> 16th-century Mughal fort where Shah Jahan was imprisoned. 2–3 km from Taj. Allow 1.5–2 hours. Entry: ₹650 foreigners.</li>
                <li><strong>Itmad-ud-Daulah (Baby Taj):</strong> Earlier Mughal mausoleum across the Yamuna. Beautiful and far less crowded than Taj. 30–45 minutes. Entry: ₹310 foreigners.</li>
                <li><strong>Mehtab Bagh:</strong> Garden across the river with best sunset view of Taj Mahal. Allow 45 minutes. Entry: ₹200 foreigners.</li>
                <li><strong>Sikandra (Akbar's Tomb):</strong> 10 km from city. Magnificent entrance gate and peaceful gardens. Entry: ₹310 foreigners. Perfect en route from Delhi.</li>
                <li><strong>Fatehpur Sikri:</strong> Abandoned Mughal capital, 40 km from Agra. Worth it for overnight stays. Entry: ₹610 foreigners.</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Practical Tips for Delhi to Agra Journey</h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-8">
                <li><strong>Book trains 2–3 weeks in advance</strong> in peak season (Oct–Mar). Gatimaan fills fast.</li>
                <li><strong>Agra Fort or Jhansi stations are near the city center</strong> if coming from South India. Agra Cantonment serves Delhi trains.</li>
                <li><strong>Pre-book a taxi from Agra Cantonment</strong> station to Taj Mahal (₹200–₹300 by auto, ₹400–₹600 by car). Touts outside are overpriced.</li>
                <li><strong>Buy Taj Mahal tickets online</strong> at asi.payumoney.com to skip queues at the gate.</li>
                <li><strong>Carry cash</strong> — many Agra auto/tuk-tuk drivers don't accept cards.</li>
                <li><strong>Agra to Delhi returns can be stressful</strong> — book your return transport before leaving Delhi.</li>
                <li><strong>No photography fee</strong> at the Taj Mahal — only video camera has an extra charge.</li>
              </ul>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold text-foreground mb-3">Skip the Planning — Book an All-Inclusive Tour</h3>
                <p className="text-muted-foreground mb-4">
                  Our Delhi to Agra private car tours handle everything: pickup from your Delhi hotel, private AC car
                  with experienced driver, expert Taj Mahal guide, skip-the-line tickets, and FREE traditional Indian
                  dress for photos. From ₹6,000 per person — no hidden costs, no planning stress.
                </p>
                <Link
                  href="/tours/taj-mahal-tour-by-car-from-delhi"
                  className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-sm font-bold hover:bg-primary/90 transition"
                >
                  Book Delhi to Agra Car Tour →
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">Delhi to Agra Travel FAQs</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-card rounded-lg border border-border overflow-hidden hover:border-primary transition-colors"
                  >
                    <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-foreground hover:text-primary transition-colors">
                      <span className="text-lg">{faq.question}</span>
                      <span className="ml-4 flex-shrink-0 text-2xl group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
