import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { BreadcrumbSchema, FAQSchema } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "What to Wear to Taj Mahal 2026: Dress Code, Traditional Dress & Tips",
  description: "Complete guide to dressing for the Taj Mahal. Official dress code rules, traditional Indian dress options (Saree/Kurta), modest clothing tips, seasonal recommendations, and what NOT to wear. Updated for 2026.",
  alternates: {
    canonical: "https://www.sofiatajtours.com/blog/what-to-wear-taj-mahal",
  },
  openGraph: {
    title: "What to Wear to Taj Mahal: Dress Code & Traditional Dress Guide",
    description: "Complete dress code guide for Taj Mahal visits. Traditional dress options, modest clothing tips, and seasonal recommendations.",
    images: [{ url: "/images/taj (53).jpeg", width: 1200, height: 800 }],
  },
}

const faqs = [
  {
    question: "Is there a strict dress code at the Taj Mahal?",
    answer: "There's no official written dress code, but modest clothing is strongly recommended and respectful. Cover your shoulders and knees. Avoid: sleeveless tops, short shorts, mini skirts, revealing clothing, and overly tight/transparent clothes. Both men and women should dress modestly out of respect for this religious monument and Indian cultural norms."
  },
  {
    question: "Can I wear shorts to the Taj Mahal?",
    answer: "Technically yes, but it's not recommended. If you wear shorts, they should be knee-length or longer (Bermuda shorts style). Very short shorts or hot pants are considered disrespectful and may draw unwanted attention. Better option: lightweight pants, long skirts, or capri-length bottoms that cover your knees."
  },
  {
    question: "Can I wear traditional Indian dress to the Taj Mahal?",
    answer: "Absolutely YES! Wearing traditional Indian dress (Saree for women, Kurta for men) is highly encouraged and makes for stunning photos. Our tours include FREE traditional dress rental - you'll get a beautiful Saree or Kurta to wear during your visit. It's a unique cultural experience and perfect for Instagram-worthy photos!"
  },
  {
    question: "What shoes should I wear to the Taj Mahal?",
    answer: "Wear comfortable walking shoes or sandals as you'll walk 1-2 km total. You MUST remove shoes before entering the marble platform. Bring: sandals or slip-on shoes (easy to remove), or socks (you can walk on marble in socks). Avoid: brand new shoes (causes blisters), high heels (uncomfortable), white shoes (get dirty from marble dust)."
  },
  {
    question: "What should I wear to Taj Mahal in summer vs winter?",
    answer: "Summer (April-September): Light, breathable cotton or linen clothes in light colors. Covered shoulders and knees. Wide-brimmed hat, sunglasses, sunscreen. Temperatures reach 40-45°C (104-113°F). Winter (October-March): Layers! Morning starts cold (5-15°C), warms up midday. Light jacket for sunrise visits, remove later. Long sleeves, comfortable pants. Scarf for early mornings."
  },
  {
    question: "Can women wear sleeveless dresses to the Taj Mahal?",
    answer: "Not recommended. While not strictly forbidden, sleeveless dresses are considered immodest. Better options: bring a light scarf or shawl to cover shoulders, wear a cardigan over sleeveless dress, or choose dresses with sleeves. Maxi dresses with sleeves are perfect and comfortable."
  },
]

export default function BlogPost() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.sofiatajtours.com" },
    { name: "Blog", url: "https://www.sofiatajtours.com/blog" },
    { name: "What to Wear to Taj Mahal", url: "https://www.sofiatajtours.com/blog/what-to-wear-taj-mahal" },
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
              <span className="text-muted-foreground">What to Wear to Taj Mahal</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              What to Wear to Taj Mahal: Complete Dress Code & Traditional Dress Guide (2026)
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <time dateTime="2026-03-29">Updated March 29, 2026</time>
              <span>•</span>
              <span>7 min read</span>
              <span>•</span>
              <span>Travel Tips</span>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12">
              <Image
                src="/images/taj (53).jpeg"
                alt="Traditional Indian dress at Taj Mahal - Saree and Kurta"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Deciding what to wear to the Taj Mahal can be confusing. Is there a dress code? Can you wear shorts? What about traditional Indian clothes? After guiding 5,000+ travelers, here's your complete guide to dressing appropriately, comfortably, and stylishly for your Taj Mahal visit.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Quick Answer: Taj Mahal Dress Code</h2>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <p className="text-foreground font-semibold mb-2">✅ DO WEAR:</p>
                <ul className="text-foreground mb-4 space-y-1">
                  <li>• Modest clothing covering shoulders and knees</li>
                  <li>• Comfortable walking shoes (you'll walk 1-2 km)</li>
                  <li>• Light, breathable fabrics (cotton, linen)</li>
                  <li>• Traditional Indian dress (Saree/Kurta) - highly encouraged!</li>
                </ul>
                <p className="text-foreground font-semibold mb-2">❌ DON'T WEAR:</p>
                <ul className="text-foreground space-y-1">
                  <li>• Sleeveless tops, tank tops, or crop tops</li>
                  <li>• Short shorts, mini skirts, or revealing clothes</li>
                  <li>• High heels or brand new shoes</li>
                  <li>• All-white outfits (marble dust shows stains)</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Understanding the Dress Code</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Is There an Official Dress Code?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Taj Mahal doesn't have a strictly enforced written dress code like some temples. However, as a UNESCO World Heritage Site and tomb of religious significance, <strong>modest dress is strongly expected and respectful</strong>.<br /><br />
                Security won't stop you for wearing shorts or sleeveless tops, but you should dress modestly out of respect for:<br />
                • Indian cultural norms<br />
                • The religious nature of the monument (it's a mausoleum)<br />
                • Local sensibilities<br />
                • Avoiding unwanted attention or harassment
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">The Golden Rule: Cover Shoulders & Knees</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This simple rule covers 90% of dress code questions:<br /><br />
                <strong>Shoulders:</strong> No tank tops, spaghetti straps, or sleeveless tops. Bring a light scarf or shawl to cover if needed.<br /><br />
                <strong>Knees:</strong> Shorts and skirts should reach at least to your knees (Bermuda-length minimum). Longer is better.<br /><br />
                Following this rule shows respect and ensures a comfortable, hassle-free visit.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">What to Wear: By Season</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Summer (April to September)</h3>
              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <p className="text-muted-foreground mb-4">
                  <strong>Temperature:</strong> 35-45°C (95-113°F) - Extremely hot!<br />
                  <strong>Challenge:</strong> Stay cool while covering shoulders and knees
                </p>
                <p className="text-foreground font-semibold mb-2">Women:</p>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• Loose cotton maxi dress with sleeves (most comfortable)</li>
                  <li>• Lightweight linen pants + breathable cotton top</li>
                  <li>• Cotton palazzo pants + kurti (Indian style)</li>
                  <li>• Loose midi skirt + light blouse with sleeves</li>
                </ul>
                <p className="text-foreground font-semibold mb-2">Men:</p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Light cotton shorts (knee-length) + t-shirt</li>
                  <li>• Linen pants + cotton shirt</li>
                  <li>• Lightweight chinos + polo shirt</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Winter (October to March)</h3>
              <div className="bg-card border border-border rounded-lg p-6 mb-6">
                <p className="text-muted-foreground mb-4">
                  <strong>Temperature:</strong> 5-25°C (41-77°F) - Cold mornings, warm afternoons<br />
                  <strong>Challenge:</strong> Layers! Temperature changes dramatically throughout the day
                </p>
                <p className="text-foreground font-semibold mb-2">Women:</p>
                <ul className="text-muted-foreground space-y-2 mb-4">
                  <li>• Jeans + long-sleeve top + light jacket (remove later)</li>
                  <li>• Warm leggings + long tunic/kurta + scarf</li>
                  <li>• Maxi dress + cardigan + shawl</li>
                  <li>• Layers you can remove as it warms up</li>
                </ul>
                <p className="text-foreground font-semibold mb-2">Men:</p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Jeans + t-shirt + light jacket</li>
                  <li>• Chinos + long-sleeve shirt + sweater</li>
                  <li>• Layers for sunrise visits (can be 5-10°C)</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Traditional Indian Dress (Highly Recommended!)</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Why Wear Traditional Dress?</h3>
              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-6">
                <p className="text-foreground mb-4">Wearing traditional Indian clothing at the Taj Mahal offers amazing benefits:</p>
                <ul className="text-muted-foreground space-y-2">
                  <li>✓ <strong>Stunning Photos:</strong> Colorful Sarees/Kurtas look incredible against white marble</li>
                  <li>✓ <strong>Cultural Experience:</strong> Feel like royalty visiting a Mughal monument</li>
                  <li>✓ <strong>Comfort:</strong> Designed for Indian climate - breathable and modest</li>
                  <li>✓ <strong>Respect:</strong> Shows appreciation for Indian culture</li>
                  <li>✓ <strong>Instagram-Worthy:</strong> Unique photos that stand out</li>
                  <li>✓ <strong>FREE with Our Tours:</strong> We provide traditional dress at no cost!</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">For Women: Saree or Salwar Kameez</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Saree:</strong> Traditional 6-meter draped garment. Elegant and perfect for photos. We help you drape it properly! Choose bright colors (red, pink, blue, green) for best photos.<br /><br />
                <strong>Salwar Kameez:</strong> Tunic top (kameez) with loose pants (salwar). More comfortable for walking. Easier to wear than saree. Great for active sightseeing.<br /><br />
                <strong>Lehenga Choli:</strong> Long skirt with cropped top. Very photogenic but less common for Taj visits.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">For Men: Kurta Pajama</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Kurta:</strong> Long traditional shirt reaching mid-thigh or knees. Worn with loose pants (pajama) or jeans.<br /><br />
                <strong>Sherwani:</strong> More formal long coat-like garment. Usually for special occasions but looks regal at Taj Mahal.<br /><br />
                Men's traditional dress is simpler than women's and very comfortable in hot weather.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold text-foreground mb-3">Get FREE Traditional Dress with Our Tour!</h3>
                <p className="text-muted-foreground mb-4">
                  Our Taj Mahal tours include complimentary traditional Indian dress (Saree for women, Kurta for men). Our guide helps you wear it properly and takes stunning photos!
                </p>
                <Link
                  href="/tours/taj-mahal-same-day-tour-delhi-traditional-dress"
                  className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-sm font-bold hover:bg-primary/90 transition"
                >
                  View Tour with FREE Traditional Dress →
                </Link>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Footwear Guide</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Shoes You MUST Remove</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Important:</strong> You must remove shoes before stepping onto the white marble platform around the Taj Mahal. This is strictly enforced.<br /><br />
                <strong>Options:</strong><br />
                • Walk barefoot on marble (most common)<br />
                • Wear socks (can walk on marble in socks)<br />
                • Use provided shoe covers (sometimes available for small fee)<br /><br />
                Shoe lockers are provided free at the base of stairs. Guards watch them, but keep valuables with you.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Best Footwear Choices</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-lg font-bold text-foreground mb-4 text-green-600">✅ GOOD Choices</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Comfortable sandals (easy to slip on/off)</li>
                    <li>• Slip-on sneakers or loafers</li>
                    <li>• Broken-in walking shoes</li>
                    <li>• Flip-flops (casual but practical)</li>
                    <li>• Sports sandals (Teva-style)</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-lg font-bold text-foreground mb-4 text-red-600">❌ BAD Choices</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• High heels (uncomfortable, impractical)</li>
                    <li>• Brand new shoes (causes blisters)</li>
                    <li>• Lace-up boots (annoying to remove)</li>
                    <li>• All-white shoes (marble dust stains)</li>
                    <li>• Expensive shoes (risk of loss/damage)</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Essential Accessories</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">What to Bring</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-8">
                <li><strong>Scarf/Shawl:</strong> Multi-purpose! Covers shoulders, protects from sun, makes photos pop. Light cotton or chiffon.</li>
                <li><strong>Sunglasses:</strong> Essential for daytime visits. The white marble reflects intense sunlight.</li>
                <li><strong>Hat/Cap:</strong> Wide-brimmed for sun protection. Baseball cap works too.</li>
                <li><strong>Sunscreen:</strong> SPF 50+. Reapply every 2 hours. Indian sun is strong!</li>
                <li><strong>Small Backpack:</strong> Soft bags allowed. Carry water, sunscreen, phone, wallet.</li>
                <li><strong>Socks:</strong> To walk on marble platform comfortably (optional but nice).</li>
              </ul>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">What NOT to Bring</h3>
              <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-lg mb-8">
                <p className="text-foreground font-semibold mb-3">These items are BANNED and will be confiscated:</p>
                <ul className="text-muted-foreground space-y-2">
                  <li>❌ Tripods, selfie sticks, monopods</li>
                  <li>❌ Large bags or backpacks (max 40x25 cm allowed)</li>
                  <li>❌ Food and drinks (water bottles okay)</li>
                  <li>❌ Tobacco products, cigarettes, lighters</li>
                  <li>❌ Playing cards, musical instruments</li>
                  <li>❌ Power banks (sometimes, check current rules)</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Common Dress Code Questions</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Can I Wear Jeans?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Yes!</strong> Jeans are perfectly acceptable. They're modest, comfortable, and practical. Pair with a t-shirt or blouse that covers your shoulders. In summer, lightweight jeans or jeggings are cooler than regular denim.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Can I Wear Leggings?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Yes, BUT:</strong> Leggings should be worn with a long top that covers your bottom (tunic, long kurta, or long t-shirt reaching mid-thigh or below). Leggings alone as pants are considered too revealing. Pair with a modest top and you're fine.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">What Colors Should I Wear?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>For Photos:</strong> Bright, vibrant colors look STUNNING against white marble. Red, pink, orange, yellow, blue, green, purple - all amazing!<br /><br />
                <strong>Avoid:</strong> All-white outfits (you'll blend into the marble in photos and marble dust shows stains). Beige/cream is okay but less photogenic.<br /><br />
                <strong>Pro Tip:</strong> Traditional Indian colors (bright reds, pinks, oranges) create the most Instagram-worthy photos!
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Special Situations</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">For Couples/Romantic Photos</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Coordinate Colors:</strong> Wear complementary colors (not matching, but colors that work together). Example: she wears pink saree, he wears white kurta with pink accents.<br /><br />
                <strong>Traditional Works Best:</strong> Both in traditional dress creates cohesive, romantic photos.<br /><br />
                <strong>Modest PDA:</strong> Holding hands is fine. Kissing/excessive touching is frowned upon at this religious site.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">For Families with Children</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Kids:</strong> Same modesty rules apply but less strictly enforced. Comfortable clothes they can walk in. Bring extra socks for marble walking.<br /><br />
                <strong>Matching Outfits:</strong> Coordinating family colors make great photos! All in traditional dress is adorable.<br /><br />
                <strong>Practicality First:</strong> Kids need bathroom breaks - easy-to-remove clothes are smart.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Quick Outfit Ideas</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-xl font-bold text-foreground mb-4">Women's Outfit Ideas</h4>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-foreground">Summer Casual:</p>
                      <p>• Flowy maxi dress (with sleeves)</p>
                      <p>• Sandals</p>
                      <p>• Sun hat + sunglasses</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Winter Smart:</p>
                      <p>• Jeans + long-sleeve blouse</p>
                      <p>• Light jacket + scarf</p>
                      <p>• Comfortable sneakers</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Traditional (Best!):</p>
                      <p>• Bright colored Saree or Salwar Kameez</p>
                      <p>• Sandals (easy to remove)</p>
                      <p>• Matching dupatta (scarf)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-xl font-bold text-foreground mb-4">Men's Outfit Ideas</h4>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <p className="font-semibold text-foreground">Summer Casual:</p>
                      <p>• Knee-length shorts + t-shirt</p>
                      <p>• Sandals or sneakers</p>
                      <p>• Baseball cap + sunglasses</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Winter Smart:</p>
                      <p>• Chinos + long-sleeve shirt</p>
                      <p>• Light sweater</p>
                      <p>• Comfortable loafers</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Traditional (Impressive!):</p>
                      <p>• White or cream Kurta Pajama</p>
                      <p>• Slip-on sandals</p>
                      <p>• Optional Nehru jacket for photos</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Final Tips</h2>

              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-8">
                <li><strong>Comfort First:</strong> You'll walk 1-2 km and stand for photos. Wear something comfortable!</li>
                <li><strong>Layer Wisely:</strong> Mornings are cool, afternoons warm. Dress in removable layers.</li>
                <li><strong>Check Weather:</strong> Monsoon season (July-Aug) needs rain gear. Summer needs sun protection.</li>
                <li><strong>Cultural Sensitivity:</strong> When in doubt, dress more conservatively. You're visiting a religious site.</li>
                <li><strong>Photo Planning:</strong> Think about how your outfit photographs against white marble.</li>
                <li><strong>Pack Light:</strong> Only bring essentials. You'll carry everything while walking.</li>
              </ul>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">Dress Code FAQs</h2>
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
