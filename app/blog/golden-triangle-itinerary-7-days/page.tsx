import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { BreadcrumbSchema, FAQSchema } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "7-Day Golden Triangle Itinerary 2026: Delhi, Agra & Jaipur (Day-by-Day Guide)",
  description: "Perfect 7-day Golden Triangle itinerary covering Delhi, Agra, and Jaipur. Includes day-by-day schedule, must-see attractions, hotel recommendations, budget breakdown, and expert tips. Updated 2026.",
  alternates: {
    canonical: "https://www.sofiatajtours.com/blog/golden-triangle-itinerary-7-days",
  },
  openGraph: {
    title: "7-Day Golden Triangle Itinerary: Delhi, Agra & Jaipur (2026)",
    description: "Complete day-by-day guide for the iconic Golden Triangle tour. Expert-planned itinerary with hidden gems, budget tips, and transport advice.",
    images: [{ url: "/images/taj (111).jpg", width: 1200, height: 800 }],
  },
}

const faqs = [
  {
    question: "What is the Golden Triangle in India?",
    answer: "The Golden Triangle is India's most popular tourist circuit, connecting three cities: Delhi (capital, Mughal history, street food), Agra (Taj Mahal, Agra Fort), and Jaipur (Pink City, Amber Fort, palaces). The three cities form a triangle on the map, covering roughly 700 km total. It's called 'golden' for the wealth of history and culture it contains. Most travelers do it in 3–7 days."
  },
  {
    question: "How many days do I need for the Golden Triangle?",
    answer: "Minimum 5 days (rushed but possible), ideal 7 days (recommended), comfortable 10 days. With 7 days: 2 days in Delhi, 2 days in Agra, 2 days in Jaipur, and 1 day for travel transitions and rest. With 10 days, you can add Fatehpur Sikri, Pushkar, Ranthambore National Park (tigers), or Orchha."
  },
  {
    question: "What is the best order to visit Golden Triangle cities?",
    answer: "The classic order is Delhi → Agra → Jaipur (or reverse). Most international travelers start in Delhi (main airport) and end in Jaipur (or loop back to Delhi for departure). Delhi → Agra → Jaipur is recommended: you build excitement culminating with the Taj Mahal, then wind down in Jaipur's relaxed atmosphere. Alternatively, start with Jaipur if you fly into Delhi late and want a less intense beginning."
  },
  {
    question: "What is the best time for a Golden Triangle tour?",
    answer: "October to March is ideal — pleasant weather (15–25°C), clear skies for sightseeing and photography. November and February are the sweetest months. April and September are acceptable but warmer. May–June (45°C heat) and July–August (monsoon) are challenging but have budget advantages. Avoid major Indian holidays when sites are extremely crowded."
  },
  {
    question: "How do I travel between Delhi, Agra, and Jaipur?",
    answer: "Best option for most travelers: private AC car for the full circuit (flexible, door-to-door, stops included). Delhi to Agra: Yamuna Expressway, 3–3.5 hours or Gatimaan Express train 1h40min. Agra to Jaipur: NH 21 highway, 4–5 hours by car. Jaipur to Delhi: NH 48, 4–5 hours by car or trains. A round-trip private car for 7 days runs ₹25,000–₹40,000 total for the whole group."
  },
  {
    question: "Is the Golden Triangle safe for solo travelers and women?",
    answer: "Yes — the Golden Triangle cities are among India's most tourist-friendly destinations. Delhi, Agra, and Jaipur have well-developed tourist infrastructure. Like any big city, basic precautions apply: use reputable taxis (Uber/Ola in Delhi and Jaipur), avoid isolated areas at night, and trust your instincts. Scams exist (fake guides, overpriced shops) — book through reputable operators and ignore unsolicited offers."
  },
]

export default function BlogPost() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.sofiatajtours.com" },
    { name: "Blog", url: "https://www.sofiatajtours.com/blog" },
    { name: "7-Day Golden Triangle Itinerary", url: "https://www.sofiatajtours.com/blog/golden-triangle-itinerary-7-days" },
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
              <span className="text-muted-foreground">7-Day Golden Triangle Itinerary</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Perfect 7-Day Golden Triangle Itinerary 2026: Delhi, Agra & Jaipur
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <time dateTime="2026-04-20">Updated April 20, 2026</time>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>Itineraries</span>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12">
              <Image
                src="/images/taj (111).jpg"
                alt="Golden Triangle Tour - Delhi, Agra and Jaipur"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                The Golden Triangle is India's most iconic tourist route — and for good reason. In seven days, you'll
                see the Taj Mahal at sunrise, explore Mughal fortresses, walk through a pink-walled medieval city, and
                eat the best street food on earth. After guiding thousands of travelers through this circuit, here is
                the itinerary we'd give our own family.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Golden Triangle Overview</h2>
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-primary mb-1">Delhi</p>
                    <p className="text-muted-foreground text-sm">Days 1–2</p>
                    <p className="text-muted-foreground text-sm">Mughal history + modern capital</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary mb-1">Agra</p>
                    <p className="text-muted-foreground text-sm">Days 3–4</p>
                    <p className="text-muted-foreground text-sm">Taj Mahal + Agra Fort</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary mb-1">Jaipur</p>
                    <p className="text-muted-foreground text-sm">Days 5–6</p>
                    <p className="text-muted-foreground text-sm">Pink City + Amber Fort</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border text-center">
                  <p className="text-muted-foreground text-sm">Day 7: Return to Delhi for departure</p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Day 1: Arrive in Delhi — Old Delhi Exploration</h2>

              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg mb-6">
                <p className="text-foreground font-semibold">Focus: Arrival + Old Delhi's Mughal Heart</p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Morning</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Arrive at Indira Gandhi International Airport. Most international flights arrive early morning. Check
                into your hotel (stay near Connaught Place or Paharganj for central location). Rest for 2–3 hours if
                needed — jet lag is real.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Afternoon</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-6">
                <li><strong>Jama Masjid (2 PM):</strong> India's largest mosque, built by Shah Jahan. Climb the minaret for panoramic Old Delhi views. Modest dress required. Entry free (camera fee ₹300).</li>
                <li><strong>Chandni Chowk (3 PM):</strong> Walk through this 400-year-old market street. Try: parantha from Paranthe Wali Gali, jalebi, and lassi. Pure sensory overload — in the best way.</li>
                <li><strong>Red Fort (4 PM — exterior):</strong> Shah Jahan's great red sandstone palace. Go inside if time allows (entry ₹600 foreigners), or just admire the massive gate and walls. Allow 1–1.5 hours inside.</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Evening</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Dinner at Karim's (near Jama Masjid) — a legendary Mughal restaurant open since 1913. Try the mutton
                korma and seekh kebabs. Or Connaught Place for broader restaurant options. Early night — you have a
                packed Day 2.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Day 2: Delhi — New Delhi's Monuments & Culture</h2>

              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg mb-6">
                <p className="text-foreground font-semibold">Focus: New Delhi's Imperial Landmarks</p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Morning (9 AM–1 PM)</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-6">
                <li><strong>Qutub Minar (9 AM):</strong> India's tallest minaret (73m), built in 1193. UNESCO World Heritage Site. Stunning Indo-Islamic architecture. Entry ₹600 foreigners. Allow 1 hour.</li>
                <li><strong>Humayun's Tomb (10:30 AM):</strong> Inspired the design of the Taj Mahal. Magnificent 16th-century Mughal garden tomb. Beautiful and less crowded. Entry ₹600 foreigners. Allow 1 hour.</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Afternoon (1–5 PM)</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-6">
                <li><strong>India Gate (1:30 PM):</strong> War memorial on the grand ceremonial boulevard. Pleasant walk, great for photos. Free.</li>
                <li><strong>Rajpath/Kartavya Path & Parliament area:</strong> See the grand colonial architecture of New Delhi designed by Lutyens. Drive through, stop for photos.</li>
                <li><strong>Lodhi Garden (3 PM):</strong> Beautiful 15th-century tombs in a park. Perfect for an afternoon walk. Free. Highly underrated gem.</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Evening</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Shopping at Dilli Haat (open market of Indian crafts — great for souvenirs, ₹30 entry) or Khan Market
                for upscale shopping and cafes. Dinner at a rooftop restaurant in Connaught Place. Pack your bags
                tonight — early start for Agra tomorrow.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Day 3: Delhi to Agra — Taj Mahal Sunset</h2>

              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg mb-6">
                <p className="text-foreground font-semibold">The day you've been building toward</p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Morning (6 AM departure)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depart Delhi by 6 AM by private car (recommended) or take the 8:10 AM Gatimaan Express from Hazrat
                Nizamuddin. Private car allows an important stop:
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Sikandra (Akbar's Tomb) — 10 AM:</strong> Stop at this stunning Mughal mausoleum 10 km before
                Agra city. Akbar designed his own tomb during his lifetime — it's unique, less touristy, and
                architecturally fascinating. Entry ₹310 foreigners. Allow 45 minutes.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Afternoon (12 PM–4 PM)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Check into hotel</strong> (stay near the Taj for convenience — Oberoi Amarvilas has legendary
                Taj views from every room; budget options abound near South Gate).
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Mehtab Bagh Sunset (4 PM):</strong> Cross the Yamuna to Mehtab Bagh garden for the best
                possible sunset view of the Taj Mahal. This is where professional photographers shoot. Entry ₹200
                foreigners. Arrive 1 hour before sunset. Use a telephoto lens (or zoom on your phone).
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Evening</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Dinner on a rooftop restaurant facing the Taj Mahal at night (Esphahan at Oberoi, or Saniya Palace
                Hotel rooftop for budget). The illuminated Taj at night is magical. Early to bed — 5 AM start tomorrow.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Day 4: Taj Mahal Sunrise + Agra Fort</h2>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-6">
                <p className="text-foreground font-bold text-xl mb-2">The Highlight of Your Entire Trip</p>
                <p className="text-muted-foreground">This is the day that will stay with you forever.</p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Pre-Dawn (5 AM) — Taj Mahal at Sunrise</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-6">
                <li>Arrive at <strong>East Gate by 5:45 AM</strong> (30 minutes before opening)</li>
                <li>Gates open at <strong>6:00 AM</strong> — be first in line</li>
                <li>Walk straight to the <strong>Main Gateway</strong> for the framed Taj shot (you'll have it almost alone for 20 minutes)</li>
                <li>Move to <strong>Reflection Pool</strong> — catch mirror-still water in golden light</li>
                <li><strong>Diana Bench</strong> — the iconic seat for portrait shots</li>
                <li>Walk to the <strong>marble platform</strong> (remove shoes) — enter the main tomb</li>
                <li>Explore <strong>side gardens, minarets</strong>, and rear river view</li>
                <li>If booked a tour with us: wear <strong>FREE traditional Indian dress</strong> for stunning photos</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Allow 2.5–3 hours for a complete Taj Mahal visit. Leave by 9 AM before crowds peak.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Mid-Morning (10 AM) — Agra Fort</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The <strong>Agra Fort</strong> (Red Fort of Agra) is where Shah Jahan was imprisoned by his son for
                the last 8 years of his life — gazing at the Taj Mahal from his window. This connection makes the
                visit deeply moving after your Taj Mahal experience. Highlights: Diwan-i-Am, Diwan-i-Khas, Musamman
                Burj (Shah Jahan's prison room with its Taj view). Entry ₹650 foreigners. Allow 2 hours.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Afternoon — Optional: Baby Taj</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Itmad-ud-Daulah</strong> (nicknamed Baby Taj) predates the Taj Mahal and is the first Mughal
                structure built entirely of white marble. Far less crowded. Entry ₹310 foreigners. Across the Yamuna,
                15 minutes from Agra Fort. Allow 1 hour.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Evening: Depart for Jaipur</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Depart Agra for Jaipur at 4–5 PM. The drive takes 4–5 hours on NH 21 (240 km). Arrive Jaipur by 9–10
                PM. Alternatively, stay a second night in Agra and depart the next morning — this is recommended if
                you prefer a relaxed pace.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Day 5: Jaipur — Amber Fort & Pink City</h2>

              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg mb-6">
                <p className="text-foreground font-semibold">Focus: Jaipur's Royal Heritage</p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Morning (8 AM–1 PM)</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-6">
                <li><strong>Amber Fort (8:30 AM):</strong> Jaipur's most spectacular attraction — a 16th-century hilltop fort overlooking a lake. Ride an elephant up the ramp (controversial but traditional) or take a Jeep. Inside: Sheesh Mahal (Hall of Mirrors), Diwan-i-Aam, Ganesh Pol. Allow 2 hours. Entry ₹500 foreigners.</li>
                <li><strong>Jaigarh Fort (11 AM):</strong> Just above Amber, connected by a tunnel. Holds the world's largest cannon on wheels. Great views. Entry ₹200 foreigners. Allow 45 minutes.</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Afternoon (2 PM–5 PM)</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-6">
                <li><strong>City Palace (2 PM):</strong> Still partially occupied by the royal family of Jaipur. Stunning museum of Rajput and Mughal art. Entry ₹700 foreigners. Allow 1.5 hours.</li>
                <li><strong>Hawa Mahal (4 PM):</strong> The iconic "Palace of Winds" — five-storey pink sandstone facade with 953 small windows. Best photographed from the tea shop across the street. Entry ₹200 foreigners.</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Evening</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                <strong>Johari Bazaar shopping (5 PM):</strong> Jaipur is famous for gemstones (rubies, emeralds, sapphires), blue pottery, block-print textiles, leather shoes (mojaris), and silver jewelry. Be prepared to bargain. Dinner at 1135 AD (inside Nahargarh Fort) or Niros for classic Rajasthani thali.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Day 6: Jaipur — Nahargarh, Jantar Mantar & Bazaars</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Morning</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-6">
                <li><strong>Nahargarh Fort (8 AM):</strong> Best panoramic view over pink Jaipur city. Arrive early before heat. Entry ₹50 Indians / ₹200 foreigners. Allow 1.5 hours.</li>
                <li><strong>Jantar Mantar (10 AM):</strong> UNESCO-listed 18th-century astronomical observatory. 19 massive stone instruments that calculate celestial positions and time. Entry ₹200 foreigners. Allow 1 hour.</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Afternoon</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-6">
                <li><strong>Anokhi Museum of Block Printing (12 PM):</strong> Beautiful heritage haveli showcasing Jaipur's 500-year-old block-print textile tradition. Entry ₹250 foreigners. Allow 1 hour.</li>
                <li><strong>Albert Hall Museum (2 PM):</strong> Rajasthan's oldest museum — superb collection of carpets, crystal, ivory, and Rajput art. Entry ₹150 foreigners. Allow 1.5 hours.</li>
                <li><strong>Jal Mahal (4 PM):</strong> The "Water Palace" rising from Man Sagar Lake. Perfectly placed for sunset photos. Boat trips available. Free to view from road.</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Evening — Farewell Dinner</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Splurge on one memorable dinner: <strong>Suvarna Mahal</strong> (inside Rambagh Palace Hotel, built
                for royalty) or <strong>Chokhi Dhani</strong> (village-style Rajasthani cultural dinner 20 minutes
                from city — highly recommended if you visit in the evening). Pack bags for early start tomorrow.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Day 7: Jaipur to Delhi — Departure Day</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Morning Options</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Depending on your departure flight from Delhi:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-6">
                <li><strong>Early flight (before 3 PM):</strong> Depart Jaipur by 6–7 AM. Drive 4–5 hours to Delhi airport directly.</li>
                <li><strong>Late flight (after 5 PM):</strong> Morning free for last-minute shopping in Jaipur. Depart 11 AM, arrive Delhi by 4 PM comfortably.</li>
                <li><strong>Jaipur International Airport:</strong> If flying direct from Jaipur, check for international connections — avoids the Delhi return entirely.</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mb-8">
                The Jaipur–Delhi highway (NH 48) is 4–5 hours. Depart with plenty of buffer time for the airport —
                Delhi traffic can add 30–60 minutes unexpectedly.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Budget Breakdown (Per Person, 7 Days)</h2>

              <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
                <table className="w-full text-sm">
                  <thead className="bg-primary/5">
                    <tr>
                      <th className="p-4 text-left text-foreground">Category</th>
                      <th className="p-4 text-left text-foreground">Budget</th>
                      <th className="p-4 text-left text-foreground">Mid-Range</th>
                      <th className="p-4 text-left text-foreground">Luxury</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border">
                      <td className="p-4 font-semibold">Hotels (6 nights)</td>
                      <td className="p-4">$150–$250</td>
                      <td className="p-4">$400–$700</td>
                      <td className="p-4">$1,500+</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-semibold">Transport (car, trains)</td>
                      <td className="p-4">$80–$120</td>
                      <td className="p-4">$200–$350</td>
                      <td className="p-4">$500+</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-semibold">Entry Tickets</td>
                      <td className="p-4">$60–$80</td>
                      <td className="p-4">$60–$80</td>
                      <td className="p-4">$60–$80</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-semibold">Food (7 days)</td>
                      <td className="p-4">$70–$100</td>
                      <td className="p-4">$150–$250</td>
                      <td className="p-4">$400+</td>
                    </tr>
                    <tr className="border-t border-border bg-primary/5">
                      <td className="p-4 font-bold text-foreground">TOTAL</td>
                      <td className="p-4 font-bold text-foreground">$360–$550</td>
                      <td className="p-4 font-bold text-foreground">$810–$1,380</td>
                      <td className="p-4 font-bold text-foreground">$2,460+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Insider Tips for the Golden Triangle</h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-8">
                <li><strong>Buy a composite ticket</strong> in Agra — covers Agra Fort, Itmad-ud-Daulah, Fatehpur Sikri and saves money vs individual tickets.</li>
                <li><strong>Hire licensed guides</strong> at major monuments — they transform a walk through ruins into a living story. Budget ₹500–₹1,000 per site.</li>
                <li><strong>Avoid tuk-tuk 'free tours'</strong> — these take you to commission-paying shops. Always agree on destination and price upfront.</li>
                <li><strong>Taj Mahal is closed on Fridays</strong> — plan Agra on non-Friday days.</li>
                <li><strong>Drink only bottled water</strong> throughout the trip. Street food is generally safe at busy stalls but wash hands frequently.</li>
                <li><strong>Bargain everywhere except fixed-price shops</strong> — haggling is expected and friendly, not aggressive.</li>
                <li><strong>Dress modestly at religious sites</strong> — cover shoulders and knees at mosques, temples, and the Taj Mahal.</li>
                <li><strong>Carry small denomination notes</strong> — many drivers, guides, and street stalls cannot make change for ₹500 notes.</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Extension Ideas (If You Have More Time)</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-lg font-bold text-foreground mb-4">Add 2–3 Days</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• <strong>Fatehpur Sikri</strong> (40 km from Agra) — Akbar's abandoned capital, stunning UNESCO site</li>
                    <li>• <strong>Pushkar</strong> (150 km from Jaipur) — sacred lake, camel fair (November), hippie vibes</li>
                    <li>• <strong>Ranthambore</strong> (180 km from Jaipur) — tiger safari, one of India's best wildlife parks</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-lg font-bold text-foreground mb-4">Add 5–7 Days</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• <strong>Varanasi</strong> — the holiest city on the Ganges, unforgettable Ganga Aarti ceremony</li>
                    <li>• <strong>Udaipur</strong> — Lake Palace, romantic "City of Lakes"</li>
                    <li>• <strong>Mumbai or Goa</strong> — beaches, colonial architecture, famous food scene</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold text-foreground mb-3">Book Your Golden Triangle Tour</h3>
                <p className="text-muted-foreground mb-4">
                  Skip the planning stress. Our Golden Triangle tours include private AC car, expert guides at each city,
                  skip-the-line tickets for Taj Mahal, FREE traditional Indian dress, and hotel recommendations. All-inclusive,
                  tailored to your pace.
                </p>
                <Link
                  href="/tours/golden-triangle-tour-3-days"
                  className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-sm font-bold hover:bg-primary/90 transition"
                >
                  View Golden Triangle Tours →
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">Golden Triangle FAQs</h2>
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
