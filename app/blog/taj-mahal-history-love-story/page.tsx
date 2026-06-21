import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { BreadcrumbSchema, FAQSchema } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Taj Mahal Love Story: Shah Jahan & Mumtaz Mahal | History & Facts 2026",
  description: "The true love story behind the Taj Mahal. Discover Emperor Shah Jahan's eternal devotion to Mumtaz Mahal, the 22-year construction story, and fascinating historical facts. Updated 2026.",
  alternates: {
    canonical: "https://www.sofiatajtours.com/blog/taj-mahal-history-love-story",
  },
  openGraph: {
    title: "Taj Mahal Love Story: Shah Jahan & Mumtaz Mahal History",
    description: "The romantic history behind the world's greatest monument to love. Learn about Emperor Shah Jahan's eternal devotion to Mumtaz Mahal.",
    images: [{ url: "/images/taj (43).jpg", width: 1200, height: 800 }],
  },
}

const faqs = [
  {
    question: "Why was the Taj Mahal built?",
    answer: "The Taj Mahal was built by Mughal Emperor Shah Jahan as a mausoleum (tomb) for his beloved wife Mumtaz Mahal, who died in 1631 while giving birth to their 14th child. Shah Jahan was so devastated by her death that he reportedly turned grey overnight. The Taj Mahal is his eternal tribute to their love — often called 'a teardrop on the cheek of time'."
  },
  {
    question: "How long did it take to build the Taj Mahal?",
    answer: "The main structure of the Taj Mahal took approximately 12 years to complete (1632–1643). The surrounding buildings, gardens, and the full complex took another 10 years, making the total construction time about 22 years (1632–1653). Over 20,000 artisans and craftsmen from India, Persia, and Central Asia worked on it."
  },
  {
    question: "Who was Mumtaz Mahal?",
    answer: "Mumtaz Mahal (born Arjumand Banu Begum, 1593–1631) was the beloved wife of Mughal Emperor Shah Jahan. She was known for her beauty, intelligence, and charitable work. She traveled with Shah Jahan on military campaigns and served as his trusted confidante. She died on June 17, 1631, during childbirth in Burhanpur at the age of 38."
  },
  {
    question: "Is the Taj Mahal really a symbol of love?",
    answer: "Yes, absolutely! The Taj Mahal is universally recognized as the world's greatest monument to love. Shah Jahan broke with Mughal tradition to honor his wife with a building of unprecedented beauty. Every detail — the white marble, the inlay work, the symmetry — was designed as an expression of eternal love. UNESCO recognizes it as 'the jewel of Muslim art in India.'"
  },
  {
    question: "What happened to Shah Jahan after building the Taj Mahal?",
    answer: "Shah Jahan was deposed by his own son Aurangzeb in 1658 and imprisoned in Agra Fort for the last 8 years of his life. He reportedly spent those years gazing at the Taj Mahal from his window. When he died in 1666, his body was placed beside Mumtaz Mahal in the Taj Mahal — the only asymmetrical element in the otherwise perfectly symmetrical structure."
  },
  {
    question: "How many workers built the Taj Mahal?",
    answer: "It is estimated that over 20,000 artisans, craftsmen, and laborers worked on the Taj Mahal. These included architects, stone cutters, inlay artists, calligraphers, and workers from India, Persia, the Ottoman Empire, and Europe. The chief architect was Ustad Ahmad Lahauri from Lahore. Materials were transported from across Asia using over 1,000 elephants."
  },
]

export default function BlogPost() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.sofiatajtours.com" },
    { name: "Blog", url: "https://www.sofiatajtours.com/blog" },
    { name: "Taj Mahal Love Story", url: "https://www.sofiatajtours.com/blog/taj-mahal-history-love-story" },
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
              <span className="text-muted-foreground">Taj Mahal Love Story</span>
            </nav>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              The Taj Mahal Love Story: Shah Jahan & Mumtaz Mahal (Complete History)
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <time dateTime="2026-04-10">Updated April 10, 2026</time>
              <span>•</span>
              <span>9 min read</span>
              <span>•</span>
              <span>History</span>
            </div>

            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12">
              <Image
                src="/images/taj (43).jpg"
                alt="Taj Mahal - monument to eternal love of Shah Jahan and Mumtaz Mahal"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Standing before the Taj Mahal, it is impossible not to feel the weight of love that built it. This
                shimmering white marble masterpiece is not just a UNESCO World Heritage Site — it is a 22-year act of
                grief, devotion, and extraordinary human will. Here is the complete story behind the world's most famous
                monument to love.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">The Meeting: A Love Story Begins</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Prince Khurram Meets Arjumand Banu</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In 1607, a 15-year-old Mughal prince named Khurram wandered through the bustling Meena Bazaar of Agra —
                a market traditionally open to women of the court. There, he encountered a young girl selling silk and
                glass beads. She was Arjumand Banu Begum, the 14-year-old daughter of a Persian nobleman.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                According to Mughal court chronicles, the prince was captivated immediately. He reportedly told his
                father Emperor Jahangir that he wished to marry this girl above all others. Their engagement was
                announced, but royal protocol and astrological calculations delayed their marriage for five years.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                During those years, Prince Khurram took two other wives as required by political alliances — but his
                heart remained with Arjumand. When they finally married in 1612, court historian Qazwini wrote that the
                union was unlike any other: <em>"The intimacy, deep affection, attention, and favour which His Majesty
                had for the Cradle of Excellence exceeded by a thousand times what he felt for any other."</em>
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Mumtaz Mahal: More Than a Wife</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Upon marriage, Arjumand received the title <strong>Mumtaz Mahal</strong> — meaning "Jewel of the
                Palace." She proved herself far more than a companion. For nearly 19 years of marriage, she:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-8">
                <li>Traveled with Shah Jahan on every military campaign across the Mughal Empire</li>
                <li>Served as his most trusted political and personal advisor</li>
                <li>Held the imperial seal (Muhr Uzah), a sign of immense trust and authority</li>
                <li>Regularly intervened on behalf of the poor and prisoners seeking mercy</li>
                <li>Bore Shah Jahan 14 children — 7 of whom survived to adulthood</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unlike the largely ceremonial roles of other royal wives, Mumtaz Mahal was Shah Jahan's genuine
                partner. He reportedly never spent a night apart from her unless forced by duty. She was the only wife
                he truly loved.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">The Tragedy: June 17, 1631</h2>

              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Burhanpur, Deccan (Central India) — 1631.</strong> Shah Jahan's army was fighting a
                  campaign against the Khan of Ahmednagar. Mumtaz Mahal, pregnant with their 14th child, had
                  accompanied him as always. On the night of June 17th, she went into labor.
                  <br /><br />
                  After 30 hours of difficult labor, Mumtaz Mahal gave birth to a daughter, Gauhar Ara. But the
                  delivery had drained her completely. Shah Jahan sat at her bedside as her condition deteriorated.
                  Her final requests to him, as recorded by their daughter Jahanara, were:
                  <br /><br />
                  <em>"Build me a tomb so beautiful that the world has never seen its like — and never forget me."</em>
                  <br /><br />
                  She died within hours, at approximately 38 years of age.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Shah Jahan's Grief</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Court historians recorded that Shah Jahan's grief was total and visible. He emerged from his private
                chambers a week later — and those present noted his hair had turned white and his back had stooped.
                He reportedly wept so extensively that he needed spectacles thereafter.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For two full years, Shah Jahan wore only white (the Mughal color of mourning), refused music and
                celebrations at court, and banned the wearing of fine clothes and jewelry in the royal household.
                The empire's festivals and celebrations were suspended.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                But grief alone was not enough. Shah Jahan made a vow: he would build Mumtaz Mahal a tomb so
                magnificent it would make the angels weep.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Building the Taj Mahal: 22 Years of Love</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Choosing the Site</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Shah Jahan personally selected Agra's riverbank on the Yamuna River — a site belonging to Maharaja
                Jai Singh of Amber, who surrendered it in exchange for a palace elsewhere in the city. The elevated
                position on the river's bend meant the Taj would be visible from miles away and could be seen from
                Shah Jahan's chambers in Agra Fort.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">The Architects & Artisans</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Shah Jahan assembled the greatest architectural minds of the era:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-8">
                <li><strong>Ustad Ahmad Lahauri</strong> (Lahore) — Chief architect, credited with designing the main structure</li>
                <li><strong>Mir Abdul Karim</strong> — Persian architect who supervised construction</li>
                <li><strong>Makramat Khan</strong> — Oversaw daily construction logistics</li>
                <li><strong>Ismail Khan Rumi</strong> — Designed the iconic dome, a specialist brought from the Ottoman Empire</li>
                <li><strong>Amanat Khan Shirazi</strong> — Master calligrapher who inscribed Quranic verses across the monument</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Over <strong>20,000 workers</strong> from India, Persia, the Ottoman Empire, and Europe labored on the
                project. More than <strong>1,000 elephants</strong> transported materials. Craftsmen who specialized in
                specific skills — marble cutting, inlay work, calligraphy — were recruited from across Asia.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">The Materials: Marble from Across the World</h3>
              <div className="bg-card border border-border rounded-lg p-6 mb-8">
                <p className="text-foreground font-semibold mb-4">Materials used in the Taj Mahal came from:</p>
                <ul className="text-muted-foreground space-y-2">
                  <li>• <strong>White Makrana Marble</strong> — Rajasthan, India (main structure)</li>
                  <li>• <strong>Jasper</strong> — Punjab, India</li>
                  <li>• <strong>Jade & Crystal</strong> — China</li>
                  <li>• <strong>Turquoise</strong> — Tibet</li>
                  <li>• <strong>Lapis Lazuli</strong> — Afghanistan</li>
                  <li>• <strong>Sapphire</strong> — Sri Lanka</li>
                  <li>• <strong>Carnelian</strong> — Arabia</li>
                  <li>• <strong>Onyx, Amethyst, Coral</strong> — Various sources across Asia</li>
                  <li>• <strong>Red Sandstone</strong> — Fatehpur Sikri, India (gateways & mosque)</li>
                </ul>
                <p className="text-muted-foreground mt-4">Over <strong>28 types of precious and semi-precious stones</strong> are inlaid into the marble in the technique known as <em>pietra dura</em>.</p>
              </div>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Construction Timeline</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-8">
                <li><strong>1631:</strong> Mumtaz Mahal dies; Shah Jahan commissions the tomb</li>
                <li><strong>1632:</strong> Construction begins; site cleared, foundation laid</li>
                <li><strong>1632–1636:</strong> Foundation, plinth, and lower tomb structure built</li>
                <li><strong>1636–1643:</strong> Main mausoleum, dome, and four minarets completed</li>
                <li><strong>1643:</strong> Main structure complete; Mumtaz Mahal's remains transferred from Burhanpur</li>
                <li><strong>1643–1653:</strong> Gardens, gateways, mosque, and guest house completed</li>
                <li><strong>1653:</strong> Full complex officially completed</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Architectural Symbolism: Love in Every Detail</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Perfect Symmetry</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Taj Mahal is almost perfectly symmetrical in every direction — the gardens, the reflecting pools,
                the flanking buildings, and the four minarets. This symmetry was intentional: in Islamic architecture,
                perfect symmetry represents paradise and the divine. There is only one asymmetrical element — Shah
                Jahan's cenotaph, added beside Mumtaz's after his death, which breaks the mathematical perfection.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">The Changing Colors</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Taj Mahal's white marble appears to change color throughout the day — pink at dawn, brilliant white
                at noon, golden at sunset, and silver under the full moon. This was not accidental. Mughal architects
                understood how light interacted with Makrana marble. The changing colors represent the different moods
                of Mumtaz Mahal as remembered by Shah Jahan.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">The Quranic Inscriptions</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Master calligrapher Amanat Khan inscribed verses from the Quran across the main gateway and the
                mausoleum. He used an optical illusion: letters become progressively larger as they ascend higher on
                the archways, so they appear uniform in size when viewed from the ground. The final verse on the
                gateway reads: <em>"O Soul, thou art at rest. Return to the Lord at peace with Him, and He at peace
                with you."</em>
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">The Garden of Paradise</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Charbagh (four-part garden) represents the Islamic vision of paradise as described in the Quran —
                four rivers flowing from a central fountain. The reflecting pool at the center was designed to show
                the Taj Mahal's reflection, symbolizing that heaven mirrors earth when built with pure love.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Shah Jahan's Fate: Prisoner Gazing at His Creation</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Shah Jahan's later years were tragic. In 1658, his own son Aurangzeb — believing his father was
                too grief-stricken to rule effectively — seized the throne and imprisoned Shah Jahan in Agra Fort.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                For 8 years, Shah Jahan lived in the Musamman Burj tower of Agra Fort. His daughter Jahanara stayed
                with him voluntarily. From his window, he could see the Taj Mahal glimmering on the Yamuna River —
                the tomb of his beloved wife, his greatest creation, his most visible act of love.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Shah Jahan died on January 22, 1666, at approximately 74 years of age. His body was transported by
                boat across the Yamuna River and placed beside Mumtaz Mahal in the Taj Mahal. It is the only
                asymmetrical element in the complex — his tomb, added unexpectedly, sits slightly offset from hers.
                Yet in death they are together, exactly as they were in life.
              </p>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
                <p className="text-foreground font-semibold mb-2">A Love Story's Epilogue</p>
                <p className="text-muted-foreground">
                  Mumtaz Mahal's original grave in Burhanpur was maintained for 6 months while the Taj Mahal's
                  foundation was prepared. Her body was then transported 600 km to Agra. She has rested in her
                  magnificent tomb for nearly 400 years — and millions of people travel from around the world every
                  year to witness the monument that was built for her.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Fascinating Facts About the Taj Mahal</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-lg font-bold text-foreground mb-4">By the Numbers</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• <strong>22 years</strong> to complete (1631–1653)</li>
                    <li>• <strong>20,000+</strong> workers and artisans</li>
                    <li>• <strong>1,000 elephants</strong> to transport materials</li>
                    <li>• <strong>28 types</strong> of precious stones used</li>
                    <li>• <strong>73 meters</strong> tall (main dome)</li>
                    <li>• <strong>17 hectares</strong> total complex area</li>
                    <li>• <strong>8-9 million</strong> annual visitors</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-lg font-bold text-foreground mb-4">Did You Know?</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• The minarets lean slightly outward — designed to fall away from the tomb if they ever collapse</li>
                    <li>• During WWII, the British Government covered the Taj with scaffolding to disguise it from aerial bombing</li>
                    <li>• The tomb has no windows — sunlight enters through marble lattice screens</li>
                    <li>• Shah Jahan reportedly planned a black marble Taj across the river — never built</li>
                    <li>• The Taj appears to float due to the foundation design and reflecting pool</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Legacy: The World's Greatest Monument to Love</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Taj Mahal was designated a UNESCO World Heritage Site in 1983. It is listed among the New Seven
                Wonders of the World (2007). Nobel laureate Rabindranath Tagore called it <em>"a teardrop on the cheek
                of time."</em>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                But beyond the superlatives and records, the Taj Mahal endures because its story resonates with
                something universal. Shah Jahan was a powerful emperor who could have had anything — and what he
                chose to build with his power was a memorial to love. That choice, made nearly 400 years ago, still
                moves people to tears today.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every year, couples come to the Taj Mahal to renew vows. Poets come to find words. Photographers
                come to capture what cannot fully be captured. And every one of them, standing before that glowing
                white marble at sunrise, understands Shah Jahan a little better.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold text-foreground mb-3">Experience the Love Story Yourself</h3>
                <p className="text-muted-foreground mb-4">
                  Visit the Taj Mahal with our expert guides who bring the love story to life. Perfect for couples —
                  includes FREE traditional Indian dress for romantic photos in front of the world's greatest monument to love.
                </p>
                <Link
                  href="/tours/taj-mahal-same-day-tour-delhi-traditional-dress"
                  className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-sm font-bold hover:bg-primary/90 transition"
                >
                  Book Romantic Taj Mahal Tour →
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">Taj Mahal History FAQs</h2>
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
