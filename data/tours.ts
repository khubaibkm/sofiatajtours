export interface Tour {
  slug: string
  title: string
  description: string
  location: string
  duration: string
  price: number
  images: string[]
  highlights: string[]
  itinerary: Array<{
    day: number
    title: string
    description: string
  }>
}

export const tours: Tour[] = [
  {
    slug: "taj-mahal-sunrise",
    title: "Taj Mahal Sunrise Experience",
    description:
      "Witness the ethereal beauty of the Taj Mahal bathed in golden sunrise light. This intimate early morning tour captures the monument's most magical moment with fewer crowds.",
    location: "Agra, India",
    duration: "3 days",
    price: 599,
    images: [
      "/placeholder.svg?key=j992c",
      "/placeholder.svg?key=2a4nh",
      "/placeholder.svg?key=x9g96",
      "/placeholder.svg?key=bwhjh",
    ],
    highlights: [
      "Watch the Taj Mahal transform at sunrise",
      "Explore Agra Fort with expert guide",
      "Visit Mehtab Bagh for sunset views",
      "Experience authentic Agra cuisine",
      "Private access to premium viewing areas",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Agra",
        description:
          "Arrive at Indira Gandhi International Airport in Delhi. Transfer to Agra (4-hour drive). Check-in at luxury heritage hotel. Evening orientation and preparation for sunrise viewing.",
      },
      {
        day: 2,
        title: "Taj Mahal Sunrise & Agra Fort",
        description:
          "Pre-dawn departure to Taj Mahal. Witness the ethereal sunrise over the monument. Guided tour of the marble masterpiece. Afternoon exploration of Agra Fort with rich Mughal history. Evening at Mehtab Bagh for sunset reflections.",
      },
      {
        day: 3,
        title: "Cultural Immersion & Departure",
        description:
          "Morning visit to local artisan marble workshops. Experience traditional Mughal cuisine at breakfast. Leisure time for last-minute shopping. Afternoon transfer to Delhi for departure.",
      },
    ],
  },
  {
    slug: "taj-mahal-luxury",
    title: "Taj Mahal Luxury Collection",
    description:
      "Indulge in an opulent journey through Mughal India. Stay in palatial heritage hotels, enjoy private guides, and experience the Taj Mahal in utmost comfort and elegance.",
    location: "Agra & Lucknow, India",
    duration: "5 days",
    price: 1299,
    images: [
      "/placeholder.svg?key=olc8b",
      "/placeholder.svg?key=fn7be",
      "/placeholder.svg?key=gzfre",
      "/placeholder.svg?key=inxk7",
    ],
    highlights: [
      "5-star heritage accommodation",
      "Private Taj Mahal tours with historians",
      "Exclusive artisan experiences",
      "Gourmet Mughal cuisine dining",
      "Personalized travel concierge",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi Arrival & Luxury Welcome",
        description:
          "Arrive and transfer to luxury hotel. Welcome dinner with Mughal-inspired cuisine. Evening briefing on the historical significance of Taj Mahal.",
      },
      {
        day: 2,
        title: "Taj Mahal Sunrise & Day Tour",
        description:
          "Private sunrise viewing at Taj Mahal with expert historian guide. Detailed exploration of marble inlays and architecture. Afternoon at Agra Fort. Private spa treatment in evening.",
      },
      {
        day: 3,
        title: "Mehtab Bagh & Artisan Workshop",
        description:
          "Visit Mehtab Bagh with champagne breakfast. Exclusive tour of marble inlay workshops. Learn from artisans creating Taj Mahal replicas. Evening classical music performance.",
      },
      {
        day: 4,
        title: "Lucknow Mughal Heritage",
        description:
          "Travel to Lucknow. Explore Bara Imambara and Chota Imambara. Visit royal palaces and gardens. Dine at iconic restaurant with traditional Lucknowi biryani.",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Final morning at leisure. Shopping for heritage crafts. Transfer to airport for departure with unforgettable memories.",
      },
    ],
  },
  {
    slug: "taj-mahal-photography",
    title: "Taj Mahal Photography Tour",
    description:
      "Capture the timeless beauty of the Taj Mahal through your lens. Perfect for photography enthusiasts, offering best angles, lighting conditions, and professional guidance.",
    location: "Agra, India",
    duration: "4 days",
    price: 899,
    images: [
      "/taj-mahal-architectural-detail.jpg",
      "/taj-mahal-symmetry-dome.jpg",
      "/agra-street-photography.jpg",
      "/taj-mahal-night-photography.jpg",
    ],
    highlights: [
      "Multiple sunrise and sunset sessions",
      "Professional photography guidance",
      "Best angle identification and scouting",
      "Post-processing workshop",
      "Night photography of illuminated monument",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Camera Preparation",
        description:
          "Arrive in Agra. Settle into photography-friendly accommodation. Evening orientation and scouting session for sunrise locations.",
      },
      {
        day: 2,
        title: "Sunrise & Daytime Photography",
        description:
          "Pre-dawn departure for sunrise photography. Multiple sessions capturing different light conditions. Professional feedback and composition guidance. Afternoon exploring street photography in Agra.",
      },
      {
        day: 3,
        title: "Advanced Techniques & Night Photography",
        description:
          "Morning photography at Agra Fort. Afternoon workshop on post-processing. Evening preparation for night photography. Shoot illuminated Taj Mahal under stars.",
      },
      {
        day: 4,
        title: "Portfolio Review & Departure",
        description:
          "Morning at Mehtab Bagh for reflection photography. Portfolio review session with professional photographer. Sharing session of best shots. Depart for home with stunning Taj Mahal collection.",
      },
    ],
  },
  {
    slug: "taj-mahal-spiritual",
    title: "Taj Mahal Spiritual Journey",
    description:
      "Connect with the spiritual essence of Taj Mahal. Experience meditation sessions, visit sacred sites, and explore the monument's deeper meaning as a symbol of eternal love.",
    location: "Agra, India",
    duration: "6 days",
    price: 1099,
    images: [
      "/taj-mahal-meditation-garden.jpg",
      "/agra-temple-spiritual.jpg",
      "/mughal-garden-peaceful.jpg",
      "/taj-mahal-moonlight-spiritual.jpg",
    ],
    highlights: [
      "Guided meditation sessions",
      "Visits to sacred temples and mosques",
      "Spiritual historian consultations",
      "Yoga sessions in gardens",
      "Mystical evening gatherings",
    ],
    itinerary: [
      {
        day: 1,
        title: "Spiritual Centering",
        description:
          "Arrive in Agra. Introduction to the spiritual significance of Taj Mahal. Evening meditation session overlooking the monument.",
      },
      {
        day: 2,
        title: "Taj Mahal Meditation",
        description:
          "Sunrise meditation inside the Taj Mahal grounds. Guided tour exploring love story and spiritual symbolism. Afternoon yoga in gardens. Evening chanting session.",
      },
      {
        day: 3,
        title: "Sacred Sites Exploration",
        description:
          "Visit Agra's temples and mosques. Meet spiritual leaders and scholars. Participate in prayer rituals. Learn about Mughal-Hindu spiritual synthesis.",
      },
      {
        day: 4,
        title: "Deep Spiritual Immersion",
        description:
          "Full day at Mehtab Bagh with meditation and reflection. Consult with spiritual historians. Document personal spiritual insights.",
      },
      {
        day: 5,
        title: "Wellness & Rejuvenation",
        description:
          "Traditional Ayurvedic spa treatments. Healing sessions. Final meditation session under moonlight at Taj Mahal.",
      },
      {
        day: 6,
        title: "Integration & Departure",
        description:
          "Closing circle and reflection. Journal sharing. Depart with spiritual insights and renewed perspective on love and beauty.",
      },
    ],
  },
]
