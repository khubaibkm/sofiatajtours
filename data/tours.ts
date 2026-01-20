export interface Tour {
  slug: string
  title: string
  description: string
  location: string
  duration: string
  price: number
  originalPrice?: number
  reviews: number
  images: string[]
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
    slug: "taj-mahal-tour-by-car-from-delhi",
    title: "Taj Mahal Tour by Car From Delhi",
    description:
      "Experience the eternal beauty of the Taj Mahal on this comprehensive day trip from Delhi. Travel in comfort by private car and witness one of the Seven Wonders of the World with an expert guide.",
    location: "Delhi to Agra",
    duration: "11 Hours",
    price: 50,
    originalPrice: 65,
    reviews: 175,
    category: "taj-mahal",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (1).jpg",
      "/images/taj (33).jpg",
      "/images/taj (34).jpg",
      "/images/taj (35).jpg",
    ],
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
    slug: "taj-mahal-agra-overnight-tour",
    title: "From Delhi: Taj Mahal and Agra Overnight Tour - By Car",
    description:
      "Immerse yourself in the splendor of Agra with this 2-day overnight tour from Delhi. Experience the Taj Mahal at sunrise and sunset, explore Mughal monuments, and enjoy comfortable accommodation.",
    location: "Delhi to Agra",
    duration: "2 Days",
    price: 60,
    originalPrice: 85,
    reviews: 81,
    category: "taj-mahal",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (36).jpg",
      "/images/taj (37).jpg",
      "/images/taj (38).jpg",
      "/images/taj (39).jpg",
    ],
    highlights: [
      "Witness Taj Mahal at both sunrise and sunset",
      "Overnight stay in a comfortable Agra hotel",
      "Visit Agra Fort and Mehtab Bagh",
      "Explore local markets and artisan workshops",
      "All meals included",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Agra - Sunset Tour",
        description:
          "Morning pickup from Delhi. Drive to Agra and check into your hotel. Afternoon visit to Agra Fort. Evening sunset view of Taj Mahal from Mehtab Bagh. Dinner and overnight stay in Agra.",
      },
      {
        day: 2,
        title: "Sunrise Taj Mahal & Return to Delhi",
        description:
          "Early morning sunrise visit to Taj Mahal. Return to hotel for breakfast. Visit local marble workshops. Lunch at a local restaurant. Drive back to Delhi with evening drop-off at your hotel.",
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
    originalPrice: 65,
    reviews: 130,
    category: "taj-mahal",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (40).jpg",
      "/images/taj (41).jpg",
      "/images/taj (42).jpg",
      "/images/taj (43).jpg",
    ],
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
    originalPrice: 45,
    reviews: 182,
    category: "delhi",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (44).jpg",
      "/images/taj (45).jpg",
      "/images/taj (46).jpg",
      "/images/taj (47).jpg",
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
    originalPrice: 25,
    reviews: 98,
    category: "delhi",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (48).jpg",
      "/images/taj (49).jpg",
      "/images/taj (50).jpg",
      "/images/taj (51).jpg",
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
    originalPrice: 20,
    reviews: 72,
    category: "delhi",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (53).JPG",
      "/images/taj (69).JPG",
      "/images/taj (70).JPG",
      "/images/taj (71).JPG",
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
    originalPrice: 171,
    reviews: 200,
    category: "golden-triangle",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (56).jpg",
      "/images/taj (57).jpg",
      "/images/taj (58).jpg",
      "/images/taj (59).jpg",
    ],
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
    slug: "golden-triangle-tour-4-days",
    title: "Golden Triangle Tour 4 Days - Delhi, Agra & Jaipur 3N/4D",
    description:
      "Discover the best of India's Golden Triangle at a relaxed pace. This 4-day tour allows more time to explore each city's unique attractions, culture, and cuisine.",
    location: "Delhi, Agra, Jaipur",
    duration: "4 Days",
    price: 120,
    originalPrice: 171,
    reviews: 100,
    category: "golden-triangle",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (60).jpg",
      "/images/taj (61).jpg",
      "/images/taj (62).jpg",
      "/images/taj (63).jpg",
    ],
    highlights: [
      "More leisurely pace to explore each city",
      "Sunrise Taj Mahal visit",
      "Visit all major monuments and palaces",
      "3 nights accommodation with breakfast",
      "Cultural experiences and local cuisine",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Delhi - City Tour",
        description:
          "Arrive in Delhi. Full day sightseeing including Qutub Minar, Humayun's Tomb, India Gate, Lotus Temple. Evening at leisure. Overnight in Delhi.",
      },
      {
        day: 2,
        title: "Delhi to Agra",
        description:
          "Visit Red Fort and Jama Masjid in Delhi. Drive to Agra. Afternoon visit to Agra Fort and Mehtab Bagh for sunset Taj view. Overnight in Agra.",
      },
      {
        day: 3,
        title: "Agra to Jaipur via Fatehpur Sikri",
        description:
          "Sunrise visit to Taj Mahal. After breakfast, visit Fatehpur Sikri en route to Jaipur. Arrive Jaipur and check in. Evening free for shopping. Overnight in Jaipur.",
      },
      {
        day: 4,
        title: "Jaipur Sightseeing & Return Delhi",
        description:
          "Visit Amber Fort, City Palace, Jantar Mantar, Hawa Mahal. Lunch at local restaurant. Drive back to Delhi. Drop-off at airport/hotel.",
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
    originalPrice: 280,
    reviews: 130,
    category: "golden-triangle",
    features: ["Pickup Available", "Skip the ticket line"],
    images: [
      "/images/taj (64).JPG",
      "/images/taj (65).JPG",
      "/images/taj (66).JPG",
      "/images/taj (67).JPG",
    ],
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
