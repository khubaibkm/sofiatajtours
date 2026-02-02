export interface Tour {
  slug: string
  title: string
  description: string
  location: string
  duration: string
  price: number
  priceINR: number
  originalPrice?: number
  originalPriceINR?: number
  images: string[]
  videos?: string[]
  highlights: string[]
  category: 'taj-mahal' | 'delhi' | 'golden-triangle' | 'from-delhi'
  features: string[]
  itinerary: Array<{
    day: number
    title: string
    description: string
  }>
}

export const tours: Tour[] = [
  // TAJ MAHAL TOURS
  {
    slug: "taj-mahal-agra-private-car-day-tour-with-5-star-meal",
    title: "Taj Mahal and Agra Private Car Day Tour from Agra with 5* Meal",
    description:
      "The Taj Mahal is the epitome of a 'bucket list,' yet seeing this famous site is difficult, particularly for time-pressed tourists. Take this hassle-free, private day excursion from Agra to get there and back in one day. You will get a government lunch buffet in addition to the personalised guide.",
    location: "Agra",
    duration: "1 Day",
    price: 41,
    priceINR: 3751,
    originalPrice: 60,
    originalPriceINR: 5500,
    category: "taj-mahal",
    features: ["Pickup Available", "5* Meal Included"],
    images: [
      "/images/taj (1).jpeg",
      "/images/taj (43).jpg",
      "/images/taj (45).jpg",
      "/images/taj (1).jpeg",
      "/images/taj (69).png",
    ],
    videos: [],
    highlights: [
      "Visit the magnificent Taj Mahal with a personalized guide",
      "Enjoy a 5-star government lunch buffet",
      "Private air-conditioned car with professional driver",
      "Hassle-free day excursion perfect for time-pressed tourists",
      "Expert guide sharing history and stories of the Taj Mahal",
    ],
    itinerary: [
      {
        day: 1,
        title: "Taj Mahal Experience with Luxury Dining",
        description:
          "Pickup from your hotel in Agra. Visit the iconic Taj Mahal with your personal guide who will share fascinating history and stories. Explore the stunning architecture and gardens. Enjoy a premium 5-star lunch buffet at a government-approved restaurant. Additional sightseeing at Agra Fort if time permits. Return to your hotel in Agra.",
      },
    ],
  },
  {
    slug: "taj-mahal-tour-by-car-from-delhi",
    title: "Taj Mahal Tour by Car From Delhi",
    description:
      "Experience the eternal beauty of the Taj Mahal on this comprehensive day trip from Delhi. Travel in comfort by private car and witness one of the Seven Wonders of the World with an expert guide.",
    location: "Delhi to Agra",
    duration: "11 Hours",
    price: 50,
    priceINR: 4545,
    originalPrice: 65,
    originalPriceINR: 5909,
    category: "taj-mahal",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (41).jpg",
      "/images/taj (49).jpg",
      "/images/taj (66).png",
      "/images/taj (41).jpg",
      "/images/taj (42).jpg",
    ],
    videos: [],
    highlights: [
      "Visit the iconic Taj Mahal with skip-the-line access",
      "Explore Agra Fort, a UNESCO World Heritage Site",
      "Private air-conditioned car with professional driver",
      "Expert guide sharing history and stories",
      "Lunch at a local restaurant",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Agra Journey",
        description:
          "Early morning pickup from your hotel in Delhi. Drive to Agra via the Yamuna Expressway (approximately 3 hours). Visit the magnificent Taj Mahal and explore its stunning architecture. Tour Agra Fort and learn about Mughal history. Enjoy lunch at a local restaurant. Return to Delhi with drop-off at your hotel.",
      },
    ],
  },
  {
    slug: "sunrise-taj-mahal-tour-from-delhi",
    title: "Sunrise Taj Mahal Tour From Delhi",
    description:
      "Witness the breathtaking beauty of the Taj Mahal at sunrise, when the monument glows in golden light. This early morning tour offers a magical experience with fewer crowds and stunning photo opportunities.",
    location: "Delhi to Agra",
    duration: "11 Hours",
    price: 50,
    priceINR: 4545,
    originalPrice: 65,
    originalPriceINR: 5909,
    category: "taj-mahal",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (36).jpg",
      "/images/taj (60).jpg",
      "/images/taj (53).jpg",
      "/images/taj (59).jpg",
      "/images/taj (2).jpeg",
    ],
    videos: [],
    highlights: [
      "Experience Taj Mahal at magical sunrise",
      "Beat the crowds with early access",
      "Professional photography opportunities",
      "Visit Agra Fort after sunrise",
      "Breakfast and lunch included",
    ],
    itinerary: [
      {
        day: 1,
        title: "Sunrise Taj Mahal Experience",
        description:
          "Pre-dawn pickup from Delhi (2:30 AM). Drive to Agra in time for sunrise. Enter Taj Mahal as gates open and witness the monument bathed in golden morning light. Guided tour of the Taj Mahal. Breakfast at a local restaurant. Visit Agra Fort. Lunch before returning to Delhi. Evening drop-off at your hotel.",
      },
    ],
  },
  {
    slug: "skip-the-line-taj-mahal-agra-fort-tickets-with-guide",
    title: "Skip the line \"Taj Mahal\" & \"Agra Fort\" Tickets with live Tour Guide",
    description:
      "Experience the Taj Mahal and Agra Fort with skip-the-line access and a professional tour guide. Stand before the shimmering white marble, explore grand courtyards, and discover the architectural wonders of these UNESCO World Heritage Sites.",
    location: "Agra",
    duration: "3-4 Hours",
    price: 4.64,
    priceINR: 423,
    originalPrice: 5.16,
    originalPriceINR: 470,
    category: "taj-mahal",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (67).jpg",
      "/images/taj (43).jpg",
      "/images/taj (63).jpg",
      "/images/taj (98).jpg",
      "/images/taj (65).jpg",
    ],
    highlights: [
      "Stand before shimmering white marble and intricate inlay work",
      "Explore grand courtyards, audience halls, and lush Mughal gardens",
      "Discover clever architectural tricks woven into both monuments",
      "Take in peaceful views beside the Taj Mahal's iconic setting",
      "Skip-the-line entry with approved tour guide",
      "Water bottle and shoe cover included with every ticket",
    ],
    itinerary: [
      {
        day: 1,
        title: "Taj Mahal & Agra Fort Tour",
        description:
          "Get picked up from anywhere in Agra (if transport option is opted) and proceed directly to the magnificent Taj Mahal. Meet your licensed tour guide who will assist you with prearranged tickets, ensuring hassle-free, skip-the-line entry. Explore the UNESCO World Heritage Site and one of the Seven Wonders of the World, built by Mughal Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal. After exploring the Taj Mahal (2 hours), continue to the historic Agra Fort, a UNESCO World Heritage Site and masterpiece of Mughal architecture. Discover exquisite palaces, audience halls, and gardens within the grand red sandstone walls. Finally, be dropped off at your specified location in Agra.",
      },
    ],
  },
  {
    slug: "half-day-agra-fort-baby-taj-tour",
    title: "Half Day Agra Fort & Baby Taj Tour from Agra",
    description:
      "Discover the architectural heritage of Agra on this half-day tour featuring the majestic Agra Fort and the exquisite Itimad-ud-Daulah, known as the Baby Taj. With skip-the-line access and a multilingual guide, explore these stunning examples of Mughal craftsmanship.",
    location: "Agra",
    duration: "2-3 Hours",
    price: 13.54,
    priceINR: 1232,
    originalPrice: 18.05,
    originalPriceINR: 1643,
    category: "taj-mahal",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (59).jpg",
      "/images/taj (45).jpg",
      "/images/taj (59).jpg",
      "/images/taj (42).jpg",
      "/images/taj (1).jpeg",
    ],
    highlights: [
      "Visit Agra Fort with experienced tour guide",
      "Explore Itimad-ud-Daulah, the beautiful Baby Taj",
      "Discover Mughal architecture and royal history",
      "Skip-the-line entry at both monuments",
      "Air-conditioned chauffeur-driven car with door-to-door service",
      "Peaceful riverside setting at Baby Taj",
    ],
    itinerary: [
      {
        day: 1,
        title: "Agra Fort & Baby Taj Experience",
        description:
          "Get picked up from anywhere in Agra (Airport/Railway Station/Hotel) in an air-conditioned chauffeur-driven car. Meet your tour guide and proceed to Agra Fort. Explore the magnificent red sandstone structure built in the 16th century by Emperor Akbar. Discover grand halls, palaces, courtyards, and mosques reflecting Hindu and Mughal architecture (1 hour). Next, visit Itimad-ud-Daulah's Tomb, the Baby Taj, built by Empress Nur Jahan for her father. Admire the intricate inlay work, latticed screens, and serene riverside setting that inspired the Taj Mahal's design (1 hour). After completing your visits, be comfortably dropped back at your preferred location in Agra.",
      },
    ],
  },

  // DELHI TOURS
  {
    slug: "old-new-delhi-city-tour-8-hours",
    title: "Best of Old & New Delhi City Tour in 8 Hours - By Car",
    description:
      "Discover the contrasts of India's capital on this comprehensive 8-hour tour. Explore ancient monuments, bustling bazaars, modern landmarks, and experience the vibrant culture of both Old and New Delhi.",
    location: "Delhi",
    duration: "8 Hours",
    price: 30,
    priceINR: 2727,
    originalPrice: 45,
    originalPriceINR: 4091,
    category: "delhi",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (99).jpg",
      "/images/taj (5).jpeg",
      "/images/taj (9).jpeg",
      "/images/taj (99).jpg",
      "/images/taj (95).jpg",
    ],
    highlights: [
      "Visit Red Fort and Jama Masjid",
      "Rickshaw ride through Chandni Chowk",
      "See India Gate and Parliament House",
      "Explore Qutub Minar and Humayun's Tomb",
      "Experience local street food",
    ],
    itinerary: [
      {
        day: 1,
        title: "Old & New Delhi Highlights",
        description:
          "Pickup from your hotel. Start with Old Delhi - visit Red Fort, Jama Masjid, and take a rickshaw ride through Chandni Chowk. Visit Raj Ghat (Gandhi's memorial). Explore New Delhi - drive past India Gate, Parliament House, and President's House. Visit Qutub Minar and Humayun's Tomb. Return to hotel.",
      },
    ],
  },

  // GOLDEN TRIANGLE TOURS
  {
    slug: "golden-triangle-tour-3-days",
    title: "Golden Triangle Tour 3 Days - Delhi, Agra & Jaipur 2N/3D",
    description:
      "Experience India's most iconic destinations on this 3-day Golden Triangle tour. Visit Delhi's monuments, Agra's Taj Mahal, and Jaipur's palaces in one incredible journey through North India's heritage.",
    location: "Delhi, Agra, Jaipur",
    duration: "3 Days",
    price: 120,
    priceINR: 10909,
    originalPrice: 171,
    originalPriceINR: 15545,
    category: "golden-triangle",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (111).jpg",
      "/images/taj (63).jpg",
      "/images/taj (48).jpg",
      "/images/taj (18).jpeg",
      "/images/taj (59).jpg",
      "/images/taj (3).jpeg",
    ],
    videos: ["/videos/taj (6).mp4", "/videos/taj (7).mp4",],
    highlights: [
      "Visit Taj Mahal, Agra Fort, and Fatehpur Sikri",
      "Explore Amber Fort, City Palace, and Hawa Mahal",
      "See Delhi's top attractions",
      "2 nights accommodation included",
      "All transfers and transport",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi Sightseeing",
        description:
          "Pickup from Delhi airport/hotel. Full day Delhi sightseeing - Red Fort, Jama Masjid, India Gate, Qutub Minar, Humayun's Tomb. Overnight in Delhi.",
      },
      {
        day: 2,
        title: "Delhi to Agra via Taj Mahal",
        description:
          "Drive to Agra. Visit Taj Mahal and Agra Fort. Explore Fatehpur Sikri en route to Jaipur. Check into Jaipur hotel. Overnight in Jaipur.",
      },
      {
        day: 3,
        title: "Jaipur Sightseeing & Return to Delhi",
        description:
          "Visit Amber Fort with elephant ride. Explore City Palace, Jantar Mantar, and Hawa Mahal. Drive back to Delhi. Drop-off at airport/hotel.",
      },
    ],
  },
  {
    slug: "golden-triangle-tour-jaipur-udaipur-6-days",
    title: "Golden Triangle Tour Jaipur and Udaipur Package by Car - 5N6D",
    description:
      "Extend your Golden Triangle experience with the romantic city of Udaipur. This comprehensive 6-day tour covers Delhi, Agra, Jaipur, and the lake city of Udaipur, offering a perfect blend of history, culture, and natural beauty.",
    location: "Delhi, Agra, Jaipur, Udaipur",
    duration: "6 Days",
    price: 210,
    priceINR: 19091,
    originalPrice: 280,
    originalPriceINR: 25455,
    category: "golden-triangle",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (92).jpg",
      "/images/taj (19).jpeg",
      "/images/taj (8).jpeg",
      "/images/taj (45).jpg",
      "/images/taj (43).jpg",
      "/images/taj (14).jpeg",
    ],
    videos: ["/videos/taj (4).mp4", "/videos/taj (5).mp4"],
    highlights: [
      "Complete Golden Triangle with Udaipur",
      "Boat ride on Lake Pichola",
      "Visit City Palace Udaipur and Jaipur",
      "5 nights accommodation with breakfast",
      "Experience Rajasthani culture and cuisine",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        description:
          "Arrive Delhi. Full day Delhi sightseeing - Qutub Minar, Humayun's Tomb, India Gate, Lotus Temple, Akshardham Temple. Overnight in Delhi.",
      },
      {
        day: 2,
        title: "Delhi to Agra",
        description:
          "Visit Red Fort and Jama Masjid. Drive to Agra. Visit Taj Mahal and Agra Fort. Evening at leisure. Overnight in Agra.",
      },
      {
        day: 3,
        title: "Agra to Jaipur",
        description:
          "Visit Fatehpur Sikri en route to Jaipur. Arrive Jaipur. Visit Birla Temple. Evening free for shopping at local bazaars. Overnight in Jaipur.",
      },
      {
        day: 4,
        title: "Jaipur Sightseeing",
        description:
          "Full day Jaipur tour - Amber Fort with elephant ride, City Palace, Jantar Mantar, Hawa Mahal, Jal Mahal. Cultural dinner with Rajasthani folk dance. Overnight in Jaipur.",
      },
      {
        day: 5,
        title: "Jaipur to Udaipur",
        description:
          "Drive to Udaipur (approximately 6 hours). En route visit Pushkar or Chittorgarh Fort. Arrive Udaipur. Evening boat ride on Lake Pichola. Overnight in Udaipur.",
      },
      {
        day: 6,
        title: "Udaipur Sightseeing & Departure",
        description:
          "Visit City Palace, Jagdish Temple, Saheliyon ki Bari. Optional visit to Monsoon Palace. Transfer to airport for departure or continue journey.",
      },
    ],
  },
]
