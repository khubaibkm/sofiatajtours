import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { BreadcrumbSchema, FAQSchema } from "@/components/schema-markup"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Taj Mahal Photography Guide 2026: 15 Best Spots & Camera Settings",
  description: "Professional photography tips for stunning Taj Mahal photos. Includes 15 best camera angles, perfect settings, sunrise golden hour tips, and Instagram-worthy locations. Expert guide for DSLR & smartphone photography.",
  alternates: {
    canonical: "https://www.sofiatajtours.com/blog/taj-mahal-photography-guide",
  },
  openGraph: {
    title: "Taj Mahal Photography Guide: 15 Best Spots & Pro Camera Settings",
    description: "Expert tips for capturing perfect Taj Mahal photos. Best angles, camera settings, and golden hour secrets.",
    images: [{ url: "/images/taj (36).jpg", width: 1200, height: 800 }],
  },
}

const faqs = [
  {
    question: "What are the best camera settings for photographing the Taj Mahal?",
    answer: "For daytime photography: ISO 100-200, Aperture f/8-f/11, Shutter Speed 1/125-1/250s. For sunrise/sunset: ISO 400-800, Aperture f/5.6-f/8, Shutter Speed 1/60-1/125s. Use Manual (M) or Aperture Priority (Av) mode. Always shoot in RAW format for maximum editing flexibility. Bring a polarizing filter to reduce reflections from the white marble and deepen the blue sky."
  },
  {
    question: "Can I use a tripod at the Taj Mahal?",
    answer: "No, tripods, monopods, and selfie sticks are NOT allowed inside the Taj Mahal complex for security reasons. You'll need to rely on handheld photography or use a bean bag on walls/railings for stability. Use image stabilization on your lens if available, or increase ISO to achieve faster shutter speeds for sharp handheld shots."
  },
  {
    question: "What time of day is best for Taj Mahal photography?",
    answer: "Sunrise (6:00-8:00 AM) is BEST for photography - the soft golden light, fewer crowds, and the monument facing east creates perfect conditions. The 'golden hour' 30 minutes after sunrise produces the most magical photos. Avoid midday (11 AM-3 PM) when harsh overhead light washes out the marble. Sunset is okay but crowded and the monument is backlit."
  },
  {
    question: "What lens should I bring for Taj Mahal photography?",
    answer: "Ideal lens kit: Wide-angle 16-35mm for full monument shots with reflection pools, Standard 24-70mm for versatility, and Telephoto 70-200mm for detail shots of marble inlay work and compressed perspectives. If bringing only one lens, a 24-70mm f/2.8 covers most situations. Smartphone photographers should use ultra-wide mode for full structure shots."
  },
  {
    question: "Can I take photos inside the Taj Mahal tomb?",
    answer: "No photography is allowed inside the main tomb chamber where Shah Jahan and Mumtaz Mahal are buried. You can photograph the exterior, gardens, reflection pools, gates, and surrounding structures. Respect this rule - guards strictly enforce it and may delete photos or confiscate cameras if violated."
  },
  {
    question: "How do I photograph the Taj Mahal with my smartphone?",
    answer: "iPhone/Android tips: Use ultra-wide lens for full monument, enable HDR mode for balanced exposure, shoot in RAW using apps like Lightroom Mobile, use portrait mode for architectural details, take multiple exposures to blend later, clean your lens before shooting, use gridlines for perfect symmetry, and golden hour (sunrise) still provides best light even for smartphones."
  },
]

export default function BlogPost() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.sofiatajtours.com" },
    { name: "Blog", url: "https://www.sofiatajtours.com/blog" },
    { name: "Taj Mahal Photography Guide", url: "https://www.sofiatajtours.com/blog/taj-mahal-photography-guide" },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <article className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Breadcrumbs */}
            <nav className="mb-8 text-sm">
              <Link href="/" className="text-primary hover:underline">Home</Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <Link href="/blog" className="text-primary hover:underline">Blog</Link>
              <span className="mx-2 text-muted-foreground">/</span>
              <span className="text-muted-foreground">Taj Mahal Photography Guide</span>
            </nav>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Taj Mahal Photography Guide: 15 Best Spots & Camera Settings (2026)
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <time dateTime="2026-01-10">Updated January 10, 2026</time>
              <span>•</span>
              <span>10 min read</span>
              <span>•</span>
              <span>Photography</span>
            </div>

            {/* Featured Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-12">
              <Image
                src="/images/taj (36).jpg"
                alt="Taj Mahal photography - best angles and spots"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Photographing the Taj Mahal is a bucket-list experience for photographers worldwide. After guiding 5,000+ photographers through perfect shoots, I'm sharing the exact spots, settings, and techniques the pros use. Whether you're shooting with a DSLR, mirrorless, or smartphone, this guide has you covered.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Quick Reference: Best Camera Settings</h2>
              <div className="bg-card border border-border rounded-lg overflow-hidden mb-8">
                <table className="w-full">
                  <thead className="bg-primary/5">
                    <tr>
                      <th className="p-4 text-left text-foreground">Time of Day</th>
                      <th className="p-4 text-left text-foreground">ISO</th>
                      <th className="p-4 text-left text-foreground">Aperture</th>
                      <th className="p-4 text-left text-foreground">Shutter Speed</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-t border-border">
                      <td className="p-4 font-semibold">Sunrise (Golden Hour)</td>
                      <td className="p-4">400-800</td>
                      <td className="p-4">f/5.6-f/8</td>
                      <td className="p-4">1/60-1/125s</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-semibold">Mid-Morning (8-10 AM)</td>
                      <td className="p-4">200-400</td>
                      <td className="p-4">f/8-f/11</td>
                      <td className="p-4">1/125-1/250s</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-semibold">Midday (Avoid)</td>
                      <td className="p-4">100-200</td>
                      <td className="p-4">f/11-f/16</td>
                      <td className="p-4">1/250s+</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-4 font-semibold">Blue Hour (Twilight)</td>
                      <td className="p-4">800-1600</td>
                      <td className="p-4">f/4-f/5.6</td>
                      <td className="p-4">1/30-1/60s</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">15 Best Photography Spots at Taj Mahal</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Main Gateway (Darwaza-i-Rauza) - The Classic First Glimpse</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Location:</strong> Inside the main red sandstone gateway<br />
                <strong>Best Time:</strong> 6:30-7:30 AM<br />
                <strong>Lens:</strong> 24-35mm wide-angle<br />
                <strong>Why It Works:</strong> This is THE iconic framed shot you've seen everywhere. The archway frames the Taj Mahal perfectly with symmetrical gardens leading to the monument. Stand in the center of the archway for perfect symmetry. This spot gets crowded quickly, so arrive at gate opening (6:00 AM) to get this shot alone.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Pro Tip:</strong> Shoot from both inside the archway (framed shot) and from the pathway just beyond it. Use f/8-f/11 to keep both the archway and monument in sharp focus. Include people in traditional dress for scale and cultural context.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Diana Bench - The Princess Diana Spot</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Location:</strong> White marble bench in front of reflection pool<br />
                <strong>Best Time:</strong> 6:00-7:00 AM, 5:00-6:00 PM<br />
                <strong>Lens:</strong> 24-70mm or smartphone<br />
                <strong>Why It Works:</strong> Made famous by Princess Diana's 1992 photo, this bench offers a perfect centered view of the Taj Mahal with the reflection pool in foreground. Great for portraits with the monument as backdrop.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Pro Tip:</strong> Queue early for this spot - it's VERY popular! Take both landscape (monument) and portrait (people with monument) shots. Use f/4-f/5.6 for portraits to blur the monument slightly, making your subject stand out.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Reflection Pool - The Mirror Shot</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Location:</strong> Along the main reflecting pool pathway<br />
                <strong>Best Time:</strong> 6:15-7:00 AM (still water)<br />
                <strong>Lens:</strong> 16-24mm ultra-wide<br />
                <strong>Why It Works:</strong> On calm mornings, the reflection pool creates a perfect mirror image of the Taj Mahal. This shot requires still water (no wind) and correct positioning.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Pro Tip:</strong> Get low - crouch or kneel to get the reflection pool in the bottom third of your frame. Use f/11-f/16 for maximum depth of field. Shoot in Aperture Priority (Av) mode and bracket exposures. The water is stillest right at sunrise before wind picks up.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Left/Right Gardens - Symmetrical Side Angles</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Location:</strong> Manicured gardens on either side of main pool<br />
                <strong>Best Time:</strong> 7:00-9:00 AM<br />
                <strong>Lens:</strong> 24-70mm<br />
                <strong>Why It Works:</strong> Less crowded than the center pathway. Beautiful diagonal compositions with garden paths leading to the monument. Great for capturing cypress trees framing the Taj.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Pro Tip:</strong> Use the "rule of thirds" - place the Taj in the right or left third of your frame with garden foreground. Shoot from low angle to emphasize flowers. These side gardens have benches perfect for traditional dress photos.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Platform Base - Close-up Marble Details</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Location:</strong> On the white marble platform at the base<br />
                <strong>Best Time:</strong> 8:00-10:00 AM<br />
                <strong>Lens:</strong> 70-200mm telephoto or macro 50mm<br />
                <strong>Why It Works:</strong> Incredible close-up shots of the intricate marble inlay work (pietra dura), calligraphy, and architectural details that make the Taj Mahal special.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Pro Tip:</strong> Focus on: floral marble inlays, Arabic calligraphy above arches, geometric patterns, and the interplay of light on white marble. Use f/5.6 for details with slight background blur. These detail shots make stunning portfolio additions.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Corner Minarets - Unique Diagonal Perspectives</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Location:</strong> From the four corner minarets looking back<br />
                <strong>Best Time:</strong> Anytime<br />
                <strong>Lens:</strong> 16-35mm wide-angle<br />
                <strong>Why It Works:</strong> Shoot upward from the base of the minarets for dramatic diagonal lines leading to the sky. Or use a minaret as foreground framing the main dome.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Pro Tip:</strong> Use ultra-wide lens and get close to the minaret base. Look up and capture the minaret leading to the central dome behind it. Include blue sky for contrast. These architectural perspective shots are less common and more unique.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Rear Yamuna River View (Limited Access)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Location:</strong> Behind the Taj Mahal near Yamuna River<br />
                <strong>Best Time:</strong> Early morning or sunset<br />
                <strong>Lens:</strong> 24-70mm<br />
                <strong>Why It Works:</strong> Few tourists see this view! The back of the Taj Mahal is equally stunning and offers completely different perspectives. Red sandstone buildings flanking the main structure.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Pro Tip:</strong> Access is sometimes restricted, so ask guards. This view shows the mosque and guest house on either side. Great for showcasing the full architectural complex, not just the main tomb.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">8. From Mosque (Left Side Building)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Location:</strong> Western red sandstone mosque<br />
                <strong>Best Time:</strong> 7:00-9:00 AM<br />
                <strong>Lens:</strong> 24-70mm<br />
                <strong>Why It Works:</strong> Elevated side view of the main tomb. Beautiful contrast between red sandstone mosque in foreground and white marble Taj. Shows the full architectural harmony of the complex.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Pro Tip:</strong> Stand inside the mosque arches and frame the Taj through them. The red sandstone creates a warm border around the white marble. Great compositional technique using natural frames.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">9. Mehtab Bagh (Across River) - Full Frontal View</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Location:</strong> Mehtab Bagh garden across Yamuna River<br />
                <strong>Best Time:</strong> Sunset (5:30-6:30 PM)<br />
                <strong>Lens:</strong> 70-200mm telephoto<br />
                <strong>Why It Works:</strong> This is THE best sunset spot - perfectly aligned with the Taj Mahal, with Yamuna River in between. Absolutely stunning at golden hour with the monument glowing orange-pink.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Pro Tip:</strong> Separate ticket required (₹200 for foreigners). Arrive 1 hour before sunset. Use telephoto lens to compress perspective and make the Taj appear larger. Tripods not needed here as it's outside the main complex. This is where professional photographers shoot sunset.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">10. Agra Fort View (Telephoto Distance Shot)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Location:</strong> From Agra Fort ramparts (2.5 km away)<br />
                <strong>Best Time:</strong> Early morning or late afternoon<br />
                <strong>Lens:</strong> 200-400mm super telephoto<br />
                <strong>Why It Works:</strong> Historical perspective - this is where Shah Jahan spent his final years imprisoned, gazing at the Taj Mahal. Creates atmospheric shots with haze and distance.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Pro Tip:</strong> Requires super telephoto lens (200mm minimum, 400mm ideal). Shoot through the fort's marble screen windows. Creates a layered composition with fort foreground, city middle, and Taj background. Very artistic and unique perspective.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">11-15. Additional Creative Spots</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-8">
                <li><strong>Through Garden Archways:</strong> Use the smaller archways in side gardens to frame the monument (24-35mm)</li>
                <li><strong>Silhouette at Sunrise:</strong> Position people in front of the rising sun behind the Taj for dramatic silhouettes (backlit, exposure for sky)</li>
                <li><strong>Reflection in Fountains:</strong> Small fountains along pathways create abstract reflections (get low, 24-35mm)</li>
                <li><strong>Traditional Dress Close-ups:</strong> Focus on Saree/Kurta details with blurred Taj background (50mm f/1.8, portrait mode)</li>
                <li><strong>Crowd Perspective:</strong> Wide shot showing the scale of visitors (16-24mm from elevated position near gateway)</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Camera Settings Deep Dive</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Shooting Mode: Manual or Aperture Priority?</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>Manual (M) Mode:</strong> Best for sunrise when light changes rapidly. Set ISO 800, f/8, and adjust shutter speed as sky brightens. Gives you total control.<br /><br />
                <strong>Aperture Priority (Av/A):</strong> Great for beginners or fast shooting. Set f/8-f/11, Auto ISO (max 1600), and camera adjusts shutter speed. Watch histogram to avoid overexposure of white marble.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">The White Marble Challenge</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                White marble fools camera meters, often resulting in underexposed (gray-looking) images. Solutions:<br /><br />
                • Use Exposure Compensation: +1/3 to +2/3 stop to brighten<br />
                • Shoot in RAW format for maximum recovery in editing<br />
                • Check your histogram - should be right-heavy (bright) but not clipped<br />
                • Use spot metering on the marble, then compensate<br />
                • Bracket exposures (3 shots: -1, 0, +1) and choose best or HDR blend
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Essential Filters</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-8">
                <li><strong>Polarizing Filter (CPL):</strong> Must-have! Reduces reflections on marble, deepens blue sky, and enhances contrast. Rotate until you see maximum effect.</li>
                <li><strong>UV/Protective Filter:</strong> Protects your lens from dust and scratches. Agra is dusty!</li>
                <li><strong>Neutral Density (ND) Filter:</strong> Optional. If shooting long exposures for smooth water in reflection pools (requires special permission for tripod).</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Smartphone Photography Tips</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">iPhone & Android Settings</h3>
              <ul className="list-disc pl-6 text-muted-foreground space-y-3 mb-8">
                <li><strong>Shoot in RAW:</strong> Use Lightroom Mobile, ProCamera, or built-in RAW mode (newer iPhones/Androids)</li>
                <li><strong>HDR Mode:</strong> Enable Smart HDR/HDR+ for balanced exposure of bright marble and dark shadows</li>
                <li><strong>Portrait Mode:</strong> For people shots with blurred background. Position subject 2-3 meters from camera.</li>
                <li><strong>Ultra-Wide Lens:</strong> Use 0.5x mode for full monument shots. Great for gateway framing.</li>
                <li><strong>Night Mode:</strong> For blue hour shots. Phone automatically uses longer exposure.</li>
                <li><strong>Clean Your Lens:</strong> Seriously! Fingerprints ruin shots. Use microfiber cloth.</li>
                <li><strong>Grid Lines:</strong> Enable in settings. Use for perfect symmetry and rule of thirds.</li>
                <li><strong>Don't Use Digital Zoom:</strong> Move closer instead, or crop later in editing.</li>
              </ul>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Composition Techniques</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Symmetry is King</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The Taj Mahal is perfectly symmetrical, and your photos should reflect this:<br /><br />
                • Center the monument exactly in your frame<br />
                • Use grid lines to align vertical and horizontal elements<br />
                • Ensure the dome is perfectly centered<br />
                • Keep horizon level (use camera's electronic level)<br />
                • Symmetry works for the Taj because it's an architectural masterpiece designed for it
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Rule of Thirds (For Variety)</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                While symmetry works great, also try rule of thirds for more dynamic shots:<br /><br />
                • Place Taj on right/left third line<br />
                • Use garden paths, trees, or people in foreground thirds<br />
                • Position horizon on upper or lower third line<br />
                • Creates more visual interest and story-telling composition
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Leading Lines</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Use natural lines to guide the viewer's eye to the monument:<br /><br />
                • Garden pathways converging toward Taj<br />
                • Reflection pool edges<br />
                • Archway frames<br />
                • Cypress tree rows<br />
                • These create depth and draw attention to main subject
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Golden Hour Magic: Timing Your Visit</h2>

              <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg mb-8">
                <h4 className="text-xl font-bold text-foreground mb-3">⏰ Perfect Photography Timeline</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li><strong>5:45 AM:</strong> Arrive at East Gate, buy tickets</li>
                  <li><strong>6:00 AM:</strong> Gates open - rush to gateway for framed shot (alone!)</li>
                  <li><strong>6:15 AM:</strong> Golden hour begins - shoot reflection pool with mirror-like water</li>
                  <li><strong>6:30 AM:</strong> Diana Bench shots with warm sunrise glow</li>
                  <li><strong>6:45 AM:</strong> Sun rises - dramatic side-lighting on marble</li>
                  <li><strong>7:00 AM:</strong> Explore side gardens, shoot from different angles</li>
                  <li><strong>7:30 AM:</strong> Move to platform for detail shots and close-ups</li>
                  <li><strong>8:00 AM:</strong> Light becomes harsh - time for architectural details</li>
                  <li><strong>8:30 AM:</strong> Crowds increase - switch to candid people photography</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">What NOT to Do</h2>

              <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-lg mb-8">
                <h4 className="text-xl font-bold text-foreground mb-3">❌ Photography Mistakes to Avoid</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li>❌ <strong>Shooting at midday</strong> - Harsh overhead light washes out the marble</li>
                  <li>❌ <strong>Forgetting lens cloth</strong> - Dusty Agra air will dirty your lens</li>
                  <li>❌ <strong>Only shooting the famous angles</strong> - Everyone has that shot. Be creative!</li>
                  <li>❌ <strong>Not charging batteries</strong> - You'll shoot 300+ photos. Bring 2-3 batteries.</li>
                  <li>❌ <strong>Using flash</strong> - Not allowed and looks terrible on white marble</li>
                  <li>❌ <strong>Ignoring the details</strong> - Inlay work and calligraphy are masterpieces</li>
                  <li>❌ <strong>Not checking histogram</strong> - White marble easily overexposes</li>
                  <li>❌ <strong>Arriving late</strong> - Best light and empty scenes are 6:00-7:00 AM only</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Gear Checklist</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-lg font-bold text-foreground mb-4">Essential</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>✓ Camera body (DSLR/mirrorless)</li>
                    <li>✓ 24-70mm lens (most versatile)</li>
                    <li>✓ Polarizing filter (CPL)</li>
                    <li>✓ 2-3 charged batteries</li>
                    <li>✓ Multiple memory cards (32GB+)</li>
                    <li>✓ Lens cleaning cloth</li>
                    <li>✓ Camera bag (soft, allowed inside)</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h4 className="text-lg font-bold text-foreground mb-4">Optional but Useful</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>✓ 16-35mm wide-angle lens</li>
                    <li>✓ 70-200mm telephoto lens</li>
                    <li>✓ Bean bag (for stability, tripod alternative)</li>
                    <li>✓ Remote shutter release</li>
                    <li>✓ Lens hood (reduces flare)</li>
                    <li>✓ Extra camera strap</li>
                    <li>✓ Portable phone charger</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12 mb-6">Post-Processing Tips</h2>

              <h3 className="text-2xl font-bold text-foreground mt-8 mb-4">Lightroom/Photoshop Workflow</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>1. White Balance:</strong> Taj Mahal marble should look pure white, not yellow or blue. Adjust temperature and tint until marble is neutral.<br /><br />
                <strong>2. Exposure & Highlights:</strong> Bring down highlights slider to recover detail in bright marble. Increase shadows to reveal garden detail.<br /><br />
                <strong>3. Clarity & Structure:</strong> Boost 15-20% to emphasize the intricate architectural details and marble texture.<br /><br />
                <strong>4. Vibrance:</strong> Increase vibrance 20-30% to make gardens and sky pop without oversaturating the white marble.<br /><br />
                <strong>5. Dehaze:</strong> Agra has atmospheric haze. Use dehaze slider 10-20% for clarity.<br /><br />
                <strong>6. Lens Correction:</strong> Enable profile corrections to fix distortion and vignetting.<br /><br />
                <strong>7. Straighten:</strong> The Taj must be perfectly level. Use straighten tool on horizon or vertical elements.
              </p>

              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                <h3 className="text-xl font-bold text-foreground mb-3">📸 Book a Photography-Focused Tour!</h3>
                <p className="text-muted-foreground mb-4">
                  Our Taj Mahal tours are designed with photographers in mind. We arrive at sunrise for the best light, include FREE traditional Indian dress for stunning cultural portraits, and our guides know all the best spots mentioned in this guide.
                </p>
                <Link
                  href="/tours/sunrise-taj-mahal-tour-from-delhi"
                  className="inline-flex px-6 py-3 bg-primary text-primary-foreground rounded-sm font-bold hover:bg-primary/90 transition"
                >
                  View Sunrise Photography Tour →
                </Link>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-foreground mb-8">Photography FAQs</h2>
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
