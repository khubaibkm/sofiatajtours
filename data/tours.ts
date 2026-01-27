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
  reviews: number
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
    reviews: 18,
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
    reviews: 175,
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
    reviews: 130,
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
    reviews: 182,
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
  {
    slug: "old-delhi-food-tour-4-hours",
    title: "4 Hours: Tasting Old Delhi Food Tour",
    description:
      "Embark on a culinary adventure through the narrow lanes of Old Delhi. Taste authentic street food, traditional dishes, and sweet delicacies while learning about Delhi's rich food culture.",
    location: "Old Delhi",
    duration: "4 Hours",
    price: 20,
    priceINR: 1818,
    originalPrice: 25,
    originalPriceINR: 2273,
    reviews: 98,
    category: "delhi",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (97).jpg",
      "/images/taj (95).jpg",
      "/images/taj (5).jpeg",
      "/images/taj (97).jpg",
      "/images/taj (8).jpeg",
    ],
    highlights: [
      "10+ food tastings at iconic eateries",
      "Try famous paranthas, chaat, and kebabs",
      "Visit historic Chandni Chowk market",
      "Learn about Old Delhi's culinary heritage",
      "Taste traditional sweets and desserts",
    ],
    itinerary: [
      {
        day: 1,
        title: "Old Delhi Food Trail",
        description:
          "Meet at Chandni Chowk metro station. Walk through the historic lanes trying various street foods - paranthas at Paranthe Wali Gali, kebabs at Karim's, jalebis at Old Famous Jalebi Wala, and more. Visit spice markets and learn about Indian spices. End with traditional chai and samosas. Tour concludes at starting point.",
      },
    ],
  },
  {
    slug: "delhi-night-tour-4-hours",
    title: "4 Hours Delhi Night Tour: With Transfers",
    description:
      "Experience the magic of Delhi after dark on this 4-hour evening tour. Discover illuminated monuments, vibrant markets, and the city's nightlife while enjoying comfortable transfers throughout the journey.",
    location: "Delhi",
    duration: "4 Hours",
    price: 15,
    priceINR: 1364,
    originalPrice: 20,
    originalPriceINR: 1818,
    reviews: 72,
    category: "delhi",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (98).jpg",
      "/images/taj (94).jpg",
      "/images/taj (47).jpg",
      "/images/taj (98).jpg",
      "/images/taj (11).jpeg",
    ],
    highlights: [
      "See India Gate beautifully illuminated at night",
      "Drive past Parliament House and Rashtrapati Bhavan",
      "Visit Akshardham Temple light and water show",
      "Explore Connaught Place nightlife",
      "Comfortable air-conditioned transfers included",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi Night Experience",
        description:
          "Evening pickup from your hotel. Begin with illuminated India Gate and war memorial. Drive past the majestic Parliament House and Rashtrapati Bhavan lit up at night. Visit Akshardham Temple for the spectacular light and water show (if time permits). Explore Connaught Place and its vibrant evening atmosphere. Enjoy optional dinner at a local restaurant. Return transfer to your hotel.",
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
    reviews: 200,
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
    reviews: 130,
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
