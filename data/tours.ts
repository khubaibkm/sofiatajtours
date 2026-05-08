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
  faqs?: Array<{
    question: string
    answer: string
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
    price: 24.60,
    priceINR: 2250.60,
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
      "/images/taj (4).jpeg",
      "/images/taj (45).jpeg",
      "/images/taj (36).jpeg",
      "/images/taj (51).jpeg",
      "/images/taj (44).jpeg",
      "/images/taj (69).jpeg",
      "/images/taj (72).jpeg",
      "/images/taj (92).jpeg",
      "/images/taj (93).jpeg",
    ],
    videos: ["/videos/taj (11).mp4", "/videos/taj (10).mp4"],
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
    title: "Taj Mahal Tour by Car From Delhi with Traditional Indian Dress",
    description:
      "Experience the eternal beauty of the Taj Mahal on this comprehensive day trip from Delhi. Travel in comfort by private car and witness one of the Seven Wonders of the World with an expert guide. Make your visit truly unforgettable with FREE traditional Indian attire - elegant Sarees for women and royal Kurtas for men. Capture breathtaking photos in authentic Indian dress against the iconic white marble backdrop, creating memories that will last a lifetime.",
    location: "Delhi to Agra",
    duration: "11 Hours",
    price: 30,
    priceINR: 2727,
    originalPrice: 65,
    originalPriceINR: 5909,
    category: "taj-mahal",
    features: ["Pickup Available", "Traditional Indian Dress", "Skip the ticket line"],
    images: [
      "/images/taj (41).jpg",
      "/images/taj (26).jpeg",
      "/images/taj (49).jpg",
      "/images/taj (66).png",
      "/images/taj (41).jpg",
      "/images/taj (42).jpg",   
      "/images/taj (28).jpeg",
      "/images/taj (30).jpeg",
      "/images/taj (35).jpeg",
      "/images/taj (34).jpeg",
      "/images/taj (64).jpeg",
      "/images/taj (65).jpeg",
      "/images/taj (78).jpeg",
      "/images/taj (84).jpeg",
      "/images/taj (89).jpeg",
      "/images/taj (94).jpeg",
      "/images/taj (86).jpeg",
      "/images/taj (82).jpeg",
    ],
    videos: [],
    highlights: [
      "Visit the iconic Taj Mahal with skip-the-line access",
      "Complimentary traditional Indian dress (Saree/Kurta) for stunning photos",
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
    title: "Sunrise Taj Mahal Tour From Delhi with Traditional Indian Dress",
    description:
      "Witness the breathtaking beauty of the Taj Mahal at sunrise, when the monument glows in golden light. This early morning tour offers a magical experience with fewer crowds and stunning photo opportunities. Transform into royalty with FREE traditional Indian attire - flowing Sarees for women and elegant Kurtas for men. Imagine yourself draped in vibrant traditional dress as the sunrise paints the Taj Mahal in golden hues - the perfect recipe for once-in-a-lifetime photographs!",
    location: "Delhi to Agra",
    duration: "11 Hours",
    price: 30,
    priceINR: 2727,
    originalPrice: 65,
    originalPriceINR: 5909,
    category: "taj-mahal",
    features: ["Pickup Available", "Traditional Indian Dress", "Skip the ticket line"],
    images: [
      "/images/taj (36).jpg",
      "/images/taj (60).jpg",
      "/images/taj (53).jpg",
      "/images/taj (59).jpg",
      "/images/taj (2).jpeg",
      "/images/taj (21).jpeg",
      "/images/taj (22).jpeg",
      "/images/taj (24).jpeg",
      "/images/taj (36).jpeg",
      "/images/taj (48).jpeg",
      "/images/taj (46).jpeg",
      "/images/taj (42).jpeg",
      "/images/taj (37).jpeg",
      "/images/taj (43).jpeg",
      "/images/taj (66).jpeg",
      "/images/taj (68).jpeg",
      "/images/taj (71).jpeg",
      "/images/taj (81).jpeg",
    ],
    videos: [],
    highlights: [
      "Experience Taj Mahal at magical sunrise",
      "Complimentary traditional Indian dress (Saree/Kurta) for memorable photos",
      "Beat the crowds with early access",
      "Professional photography opportunities",
      "Visit Agra Fort after sunrise",
    ],
    itinerary: [
      {
        day: 1,
        title: "Sunrise Taj Mahal Experience",
        description:
          "Pre-dawn pickup from Delhi (2:30 AM). Drive to Agra in time for sunrise. Enter Taj Mahal as gates open and witness the monument bathed in golden morning light. Guided tour of the Taj Mahal. Visit Agra Fort. Return to Delhi. Evening drop-off at your hotel.",
      },
    ],
  },
  {
    slug: "skip-the-line-taj-mahal-agra-fort-tickets-with-guide",
    title: "Skip the line \"Taj Mahal\" & \"Agra Fort\" Tickets with live Tour Guide",
    description:
      "Experience the Taj Mahal and Agra Fort with skip-the-line access and a professional tour guide. Stand before the shimmering white marble, explore grand courtyards, and discover the architectural wonders of these UNESCO World Heritage Sites. Elevate your experience with FREE traditional Indian attire - beautiful Sarees for women and regal Kurtas for men. Step into the grandeur of Mughal India and create Instagram-worthy photos that your friends will envy!",
    location: "Agra",
    duration: "3-4 Hours",
    price: 26.33,
    priceINR: 2400,
    originalPrice: 48.75,
    originalPriceINR: 4444,
    category: "taj-mahal",
    features: ["Pickup Available", "Traditional Indian Dress", "Skip the ticket line"],
    images: [
      "/images/taj (65).png",
      "/images/taj (43).jpg",
      "/images/taj (63).jpg",
      "/images/taj (98).jpg",
      "/images/taj (69).png",
      "/images/taj (21).jpeg",
      "/images/taj (7).jpeg",
      "/images/taj (4).jpeg",
      "/images/taj (33).jpeg",
      "/images/taj (123).png",
      "/images/taj (64).jpeg",
      "/images/taj (78).jpeg",
      "/images/taj (70).jpeg",
      "/images/taj (84).jpeg",
    ],
    highlights: [
      "Stand before shimmering white marble and intricate inlay work",
      "Complimentary traditional Indian dress (Saree/Kurta) for authentic photos",
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
    slug: "taj-mahal-same-day-tour-delhi-traditional-dress",
    title: "Taj Mahal Same Day Tour from Delhi with Traditional Indian Dress",
    description:
      "Experience the Taj Mahal like never before on this same-day tour from Delhi! Includes FREE traditional Indian dress (Saree/Kurta) for stunning photoshoots, private AC car, skip-the-line tickets, expert guide, and visits to Taj Mahal & Agra Fort. Perfect for couples, families, and solo travelers. Book now, pay on arrival!",
    location: "Delhi to Agra",
    duration: "10-12 Hours",
    price: 51,
    priceINR: 4636.20,
    originalPrice: 120,
    originalPriceINR: 10909,
    category: "taj-mahal",
    features: ["Pickup Available", "Traditional Indian Dress", "Private AC Car", "Professional Guide"],
    images: [
      "/images/taj (53).jpeg",
      "/images/taj (54).jpeg",
      "/images/taj (55).jpeg",
      "/images/taj (56).jpeg",
      "/images/taj (57).jpeg",
      "/images/taj (58).jpeg",
      "/images/taj (59).jpeg",
      "/images/taj (60).jpeg",
      "/images/taj (61).jpeg",
      "/images/taj (62).jpeg",
      "/images/taj (74).jpeg",
      "/images/taj (76).jpeg",
      "/images/taj (89).jpeg",
      "/images/taj (91).jpeg",
    ],
    videos: [
      "/videos/taj (9).mp4",
      "/videos/taj (13).mp4",
      "/videos/taj (14).mp4",
      "/videos/taj (15).mp4",
    ],
    highlights: [
      "Visit the magnificent Taj Mahal, one of the Seven Wonders of the World",
      "Wear traditional Indian dress (Saree for women / Kurta for men) for stunning photographs",
      "Explore Agra Fort, a UNESCO World Heritage Site",
      "Private air-conditioned car with professional driver",
      "Professional English-speaking local guide",
      "Pickup and drop-off from Delhi hotel or airport",
      "Experience local marble art and craftsmanship",
      "Flexible group pricing (2-10 guests)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Same Day Taj Mahal Cultural Experience from Delhi",
        description:
          "Early morning pickup from your Delhi hotel or airport in a comfortable private AC car. Drive to Agra via the Yamuna Expressway (approximately 3 hours). Upon arrival, meet your professional English-speaking guide. Visit the iconic Taj Mahal, one of the Seven Wonders of the World, built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. Wear complimentary traditional Indian dress (Saree for women / Kurta for men) to create unforgettable photographs against the stunning white marble monument. Continue to the majestic Agra Fort, a UNESCO World Heritage Site that served as the former residence of Mughal emperors. Explore the grand red sandstone fortress with its beautiful palaces, mosques, and audience halls. Visit a local marble art workshop to see skilled craftsmen creating intricate inlay work similar to that found in the Taj Mahal. Drive back to Delhi and drop-off at your hotel or airport. Tour duration: 10-12 hours. Group Size: Private experience for 2-10 guests. Note: Monument entrance tickets and personal expenses are not included. Pricing varies by group size - 2 people: $120 per person, 3-4 people: $100 per person, 5-10 people: $85 per person. Children (5-10 years) receive 50% discount, Infants (0-4 years) are free.",
      },
    ],
    faqs: [
      {
        question: "What time does the Taj Mahal same day tour from Delhi start?",
        answer: "The tour typically starts with pickup from your Delhi hotel between 6:00-7:00 AM. This early start ensures you reach Agra by 9:00-10:00 AM and have the full day to explore the Taj Mahal and Agra Fort. We can adjust pickup times based on your preference."
      },
      {
        question: "Is the traditional Indian dress (Saree/Kurta) really free?",
        answer: "Yes! The traditional Indian dress is completely FREE with this tour. Women receive a beautiful Saree and men receive a Kurta. Our guide will help you wear it properly for stunning photographs at the Taj Mahal. You can choose from multiple colors and designs."
      },
      {
        question: "How long do we get to spend at the Taj Mahal?",
        answer: "You'll have approximately 2-3 hours at the Taj Mahal, giving you plenty of time to explore the monument, take photographs in your traditional dress, learn about its history from your guide, and enjoy the beautiful gardens. We don't rush - this is your experience!"
      },
      {
        question: "Are entrance tickets to Taj Mahal and Agra Fort included?",
        answer: "Monument entrance tickets are NOT included in the tour price to keep costs flexible. Taj Mahal tickets cost approximately ₹1,100 ($13) for foreigners and ₹50 ($0.60) for Indian nationals. Agra Fort tickets cost approximately ₹650 ($8) for foreigners. Your guide will help you purchase tickets with skip-the-line access."
      },
      {
        question: "Can I book now and pay later?",
        answer: "Yes! We offer 'Book Now, Pay on Arrival' option. Simply reserve your spot online with zero payment. Pay your guide in cash (INR or USD) when the tour begins. We also accept online payment if you prefer."
      },
      {
        question: "What is included in the tour price?",
        answer: "Included: Private AC car with fuel, professional English-speaking guide, hotel pickup and drop-off in Delhi, FREE traditional Indian dress (Saree/Kurta), bottled water, all tolls and parking fees. Not included: Monument entrance tickets, personal expenses, tips (optional)."
      },
      {
        question: "What if I want to cancel my Taj Mahal tour?",
        answer: "We offer FREE cancellation up to 24 hours before your tour starts. Simply contact us via WhatsApp (+91-9368862429) or email. If you cancel within 24 hours or don't show up, cancellation fees may apply. No penalties for weather-related cancellations."
      },
      {
        question: "Is this tour suitable for families with children?",
        answer: "Absolutely! This tour is perfect for families. Children aged 5-10 get 50% discount, and infants 0-4 years travel free. The private car ensures comfort, and traditional dress is available in children's sizes too. Your guide will engage kids with fascinating stories about the Taj Mahal."
      },
      {
        question: "Can solo travelers join this Taj Mahal tour?",
        answer: "Yes! Solo travelers are welcome. Since this is a private tour, you'll have the car and guide exclusively to yourself. The per-person price is $120 for solo travelers. It's a safe, comfortable, and personalized experience perfect for solo exploration."
      },
      {
        question: "What should I wear to the Taj Mahal?",
        answer: "Wear comfortable clothing and walking shoes for the tour. You'll change into the traditional dress (Saree/Kurta) once at the Taj Mahal for photos. Modest clothing is recommended (covered shoulders and knees). Bring sunglasses, sunscreen, and a hat during summer months."
      },
      {
        question: "Is the Taj Mahal open every day?",
        answer: "The Taj Mahal is open every day EXCEPT Friday (closed for prayers). It's open from sunrise to sunset (approximately 6:00 AM to 7:00 PM). We recommend booking tours from Tuesday to Thursday for fewer crowds. Avoid Sundays and holidays when it's busiest."
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

