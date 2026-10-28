// Site-wide content for trust/social-proof sections.
// Sections built from this data stay hidden until it is filled in with REAL information.

export interface HeroSlide {
  type: "image" | "video"
  src: string
  mobileSrc?: string
  poster?: string
  alt: string
  // Slide 1 has its title baked into the artwork, so it has no headline overlay.
  headline?: string
  subheadline?: string
  cta?: { label: string; href: string }
}

// Headlines are draft copy - edit freely. Slide 1 is the original artwork.
export const heroSlides: HeroSlide[] = [
  {
    type: "image",
    src: "/images/hero.png",
    mobileSrc: "/images/hero_mobile.png",
    alt: "Sofia Taj Tours - Discover India's heritage",
  },
  {
    type: "video",
    src: "/hero_section/tajmahal_web.mp4",
    poster: "/hero_section/tajmahal_poster.jpg",
    alt: "The Taj Mahal, Agra",
    headline: "Discover the Taj Mahal",
    subheadline: "Sunrise and same-day tours from Delhi, with a free traditional dress photoshoot",
    cta: { label: "Explore Taj Mahal Tours", href: "/tours?category=taj-mahal" },
  },
  {
    type: "video",
    src: "/hero_section/red_fort_web.mp4",
    poster: "/hero_section/red_fort_poster.jpg",
    alt: "The Red Fort, Delhi",
    headline: "Old & New Delhi in One Day",
    subheadline: "Red Fort, Jama Masjid, Chandni Chowk and more in an 8-hour city tour",
    cta: { label: "View Delhi Tour", href: "/tours/old-new-delhi-city-tour-8-hours" },
  },
  {
    type: "video",
    src: "/hero_section/udaipur_web.mp4",
    poster: "/hero_section/udaipur_poster.jpg",
    alt: "Udaipur, the city of lakes",
    headline: "Udaipur, the City of Lakes",
    subheadline: "Extend the Golden Triangle with Jaipur and Udaipur in 6 days",
    cta: { label: "View 6-Day Tour", href: "/tours/golden-triangle-tour-jaipur-udaipur-6-days" },
  },
  {
    type: "image",
    src: "/hero_section/hawamahal_image.jpg",
    alt: "Hawa Mahal, Jaipur",
    headline: "The Pink City of Jaipur",
    subheadline: "Delhi, Agra and Jaipur on our 3-day Golden Triangle tour",
    cta: { label: "View Golden Triangle Tour", href: "/tours/golden-triangle-tour-3-days" },
  },
]

// Link to the Sofia Taj Tours Tripadvisor listing (used by the partner logo).
export const tripAdvisorUrl =
  "https://www.tripadvisor.com/Attraction_Review-g304551-d34327493-Reviews-Sofia_Taj_Tours-New_Delhi_National_Capital_Territory_of_Delhi.html"

export interface Partner {
  name: string
  logo: string // path under /public
  url?: string
  width: number
  height: number
}

export const partners: Partner[] = [
  {
    name: "Tripadvisor",
    logo: "/logo/tripadvisor_logo.png",
    url: tripAdvisorUrl,
    width: 1200,
    height: 266,
  },
  {
    name: "Viator",
    logo: "/logo/viator_logo.png",
    width: 300,
    height: 84,
  },
]
