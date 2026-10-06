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

export interface TripAdvisorInfo {
  url: string
  writeReviewUrl: string
  rating: number // e.g. 5
  reviewCount: number
}

export const tripAdvisor = {
  url: "https://www.tripadvisor.com/Attraction_Review-g304551-d34327493-Reviews-Sofia_Taj_Tours-New_Delhi_National_Capital_Territory_of_Delhi.html",
  // Standard Tripadvisor "write a review" link for this listing - please test it once.
  writeReviewUrl:
    "https://www.tripadvisor.com/UserReviewEdit-g304551-d34327493-Sofia_Taj_Tours-New_Delhi_National_Capital_Territory_of_Delhi.html",
  rating: 5.0,
  reviewCount: 29,
} as TripAdvisorInfo | null

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
    url: tripAdvisor?.url,
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

export interface Review {
  name: string
  country?: string
  rating: number // 1-5
  title?: string
  text: string
  date?: string
  source?: string // e.g. "TripAdvisor"
  translatedFrom?: string
}

// Real TripAdvisor reviews of Sofia Taj Tours (translations are TripAdvisor's own).
export const reviews: Review[] = [
  {
    name: "J.Daniel",
    country: "Malaga, Spain",
    rating: 5,
    title: "Guide Ramón",
    text: "I liked everything a lot, of course the Taj Mahal, the fort, and Ramón was the icing on the cake, very kind, attentive, and very good with his clients; it was a pleasure to meet you and see India with you.",
    date: "Sep 2026",
    source: "TripAdvisor",
    translatedFrom: "Spanish",
  },
  {
    name: "Paola C",
    rating: 5,
    title: "Excellent service",
    text: "An excellent experience. I want to especially highlight this person's kindness, charisma, and empathy. He was attentive to us at all times and demonstrated great knowledge and professionalism. What I value most is his ability to explain every detail in a clear, simple, and approachable way, making it so that we could all understand the information perfectly.",
    date: "Aug 2026",
    source: "TripAdvisor",
    translatedFrom: "Spanish",
  },
  {
    name: "Laura B",
    rating: 5,
    title: "An authentic wonder",
    text: "Our guide Rahman was incredible, not only for the history but for the beautiful photos he took of us, incredible and without a doubt recommended to visit at least once in a lifetime.",
    date: "Sep 2026",
    source: "TripAdvisor",
    translatedFrom: "Spanish",
  },
  {
    name: "Jessica R",
    rating: 5,
    title: "Guide Ramón",
    text: "Magnificent experience on our visit to India. Good guide service in Spanish, Ramón explained everything to us very well, the Taj Mahal and the Agra Fort, and we had a great time with him. I recommend it 100%.",
    date: "Sep 2026",
    source: "TripAdvisor",
    translatedFrom: "Spanish",
  },
  {
    name: "Sightsee15646917206",
    rating: 5,
    title: "Magnificent",
    text: "A great guide, who speaks very good Spanish, and with easy access to the Taj Mahal. Also at a very fair price. I would hire him again, it was lucky to find him.",
    date: "Sep 2026",
    source: "TripAdvisor",
    translatedFrom: "Spanish",
  },
  {
    name: "Pol Vilches",
    rating: 5,
    title: "Sunrise at the Taj Mahal",
    text: "Incredible experience with Ramon, highly recommended. Professional photographer.",
    date: "Aug 2026",
    source: "TripAdvisor",
    translatedFrom: "Spanish",
  },
  {
    name: "Manolo.A",
    rating: 5,
    title: "Agra. Guide Ramón",
    text: "Everything very good. Good guide. I recommend it. Many monuments to see in Agra. A complete visit.",
    date: "Sep 2026",
    source: "TripAdvisor",
    translatedFrom: "Spanish",
  },
  {
    name: "Hilda O",
    rating: 5,
    title: "Wonderful tour",
    text: "Ramon was a good guide! I recommend it! He explained a lot to us about the history of the place!",
    date: "Aug 2026",
    source: "TripAdvisor",
  },
  {
    name: "Congre gourmet",
    rating: 5,
    title: "Excellent visit",
    text: "Very good visit with the guide Ramon. Everything was fantastic!",
    date: "Sep 2026",
    source: "TripAdvisor",
    translatedFrom: "Spanish",
  },
]
