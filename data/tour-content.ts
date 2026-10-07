import type { Tour } from "./tours"

// Presentation content layered on top of the base tour data in tours.ts.
// Everything here is derived from information already on the site; anything not stated
// there (e.g. exclusions, hotel/ticket inclusions) is deliberately left out until confirmed.

const FRIDAY_NOTE = "The Taj Mahal is closed on Fridays. Please plan your tour for another day of the week."

export const tourContent: Record<string, Partial<Tour>> = {
  "taj-mahal-agra-private-car-day-tour-with-5-star-meal": {
    overview: [
      "Short on time, but not willing to miss the Taj Mahal? This private day excursion from Agra takes you to the world's most famous monument with a personal guide, in your own air-conditioned car, and brings you back to your hotel the same day.",
      "Your guide brings the history and love story of the Taj Mahal to life, and a 5-star buffet lunch at a government-approved restaurant keeps the day comfortable and unhurried. If time allows, the day continues with a visit to Agra Fort.",
    ],
    pickup: "Hotel pickup and drop-off in Agra",
    included: [
      "Private air-conditioned car with professional driver",
      "Personal guide for the Taj Mahal",
      "5-star buffet lunch at a government-approved restaurant",
      "Hotel pickup and drop-off in Agra",
    ],
    importantInfo: [FRIDAY_NOTE, "A visit to Agra Fort is included if time permits."],
    itinerary: [
      {
        day: 1,
        title: "Taj Mahal Experience with Luxury Dining",
        description: "",
        steps: [
          { title: "Hotel pickup in Agra", description: "Your driver meets you at your hotel in a private air-conditioned car." },
          {
            title: "Taj Mahal with your personal guide",
            description: "Explore the architecture and gardens while your guide shares the history and stories behind the monument.",
          },
          { title: "5-star buffet lunch", description: "Enjoy a premium lunch at a government-approved restaurant." },
          { title: "Agra Fort (if time permits)", description: "Additional sightseeing at the Mughal fortress." },
          { title: "Return to your hotel", description: "Relaxed drop-off at your hotel in Agra." },
        ],
      },
    ],
  },

  "taj-mahal-tour-by-car-from-delhi": {
    overview: [
      "See the Taj Mahal and Agra Fort in a single, comfortable day from Delhi. You travel by private air-conditioned car with an expert guide, with skip-the-line access to the Taj Mahal so more of your day is spent at the monument and less of it in queues.",
      "Make it unforgettable with complimentary traditional Indian attire: elegant Sarees for women and royal Kurtas for men, for photographs against the white marble that you will keep for life.",
    ],
    pickup: "Early morning hotel pickup in Delhi",
    languages: ["English"],
    included: [
      "Private air-conditioned car with professional driver",
      "Expert guide",
      "Skip-the-line access at the Taj Mahal",
      "Complimentary traditional Indian dress (Saree / Kurta)",
      "Lunch at a local restaurant",
      "Hotel pickup and drop-off in Delhi",
    ],
    importantInfo: [FRIDAY_NOTE, "The drive from Delhi to Agra along the Yamuna Expressway takes approximately 3 hours each way."],
    itinerary: [
      {
        day: 1,
        title: "Delhi to Agra Journey",
        description: "",
        steps: [
          { title: "Early morning pickup in Delhi", description: "Your driver collects you from your hotel." },
          { title: "Drive to Agra", description: "Travel via the Yamuna Expressway, approximately 3 hours." },
          {
            title: "Taj Mahal",
            description: "Visit the magnificent monument and explore its stunning architecture, with time for photos in your traditional dress.",
          },
          { title: "Agra Fort", description: "Tour the fort and learn about Mughal history." },
          { title: "Lunch", description: "Enjoy lunch at a local restaurant." },
          { title: "Return to Delhi", description: "Drop-off at your hotel." },
        ],
      },
    ],
  },

  "sunrise-taj-mahal-tour-from-delhi": {
    overview: [
      "Watch the Taj Mahal wake up. As the first light of the day touches the white marble, the monument glows in shades of gold, and you see it with far fewer crowds than later in the day.",
      "Wear complimentary traditional Indian attire, flowing Sarees for women and elegant Kurtas for men, and capture once-in-a-lifetime photographs in the soft sunrise light. After the sunrise visit, your guide takes you on to Agra Fort before the return to Delhi.",
    ],
    pickup: "Pre-dawn hotel pickup in Delhi (around 2:30 AM)",
    languages: ["English"],
    included: [
      "Pre-dawn hotel pickup and evening drop-off in Delhi",
      "Transfers from Delhi to Agra and back",
      "Guided tour of the Taj Mahal",
      "Skip-the-line access",
      "Complimentary traditional Indian dress (Saree / Kurta)",
      "Visit to Agra Fort",
    ],
    importantInfo: [FRIDAY_NOTE, "This is an early start: pickup is around 2:30 AM so that you are at the Taj Mahal as the gates open."],
    itinerary: [
      {
        day: 1,
        title: "Sunrise Taj Mahal Experience",
        description: "",
        steps: [
          { time: "2:30 AM", title: "Pre-dawn pickup in Delhi", description: "Pickup from your hotel." },
          { title: "Drive to Agra", description: "Arrive in Agra in time for sunrise." },
          { title: "Taj Mahal at sunrise", description: "Enter as the gates open and see the monument bathed in golden morning light." },
          { title: "Guided tour of the Taj Mahal", description: "Learn its history and stories from your guide." },
          { title: "Agra Fort", description: "Visit the Mughal fortress after sunrise." },
          { title: "Return to Delhi", description: "Evening drop-off at your hotel." },
        ],
      },
    ],
  },

  "skip-the-line-taj-mahal-agra-fort-tickets-with-guide": {
    overview: [
      "Explore two UNESCO World Heritage Sites in a relaxed 3-4 hours, without the ticket queues. A licensed guide meets you with prearranged tickets and takes you straight in, first to the Taj Mahal built by Emperor Shah Jahan in memory of Mumtaz Mahal, then on to the red sandstone Agra Fort.",
      "Along the way you will discover clever architectural details in both monuments, and with complimentary traditional Indian attire you can take photographs that truly feel like Mughal India.",
    ],
    pickup: "Pickup anywhere in Agra (if the transport option is selected)",
    languages: ["English"],
    included: [
      "Skip-the-line entry with prearranged tickets",
      "Licensed tour guide",
      "Complimentary traditional Indian dress (Saree / Kurta)",
      "Water bottle and shoe cover",
      "Pickup and drop-off in Agra (with transport option)",
    ],
    importantInfo: [FRIDAY_NOTE, "Allow approximately 2 hours at the Taj Mahal, followed by the Agra Fort."],
    itinerary: [
      {
        day: 1,
        title: "Taj Mahal & Agra Fort Tour",
        description: "",
        steps: [
          { title: "Pickup in Agra", description: "Get picked up from anywhere in Agra if the transport option is opted." },
          {
            title: "Meet your licensed guide",
            description: "Your guide arranges skip-the-line entry to the Taj Mahal with prearranged tickets.",
          },
          {
            title: "Taj Mahal (about 2 hours)",
            description: "Explore one of the Seven Wonders of the World, built by Mughal Emperor Shah Jahan in memory of his beloved wife, Mumtaz Mahal.",
          },
          {
            title: "Agra Fort",
            description: "Discover exquisite palaces, audience halls and gardens inside the grand red sandstone walls.",
          },
          { title: "Drop-off in Agra", description: "Be dropped off at your specified location." },
        ],
      },
    ],
  },

  "taj-mahal-same-day-tour-delhi-traditional-dress": {
    description:
      "Experience the Taj Mahal like never before on this same-day tour from Delhi! Includes FREE traditional Indian dress (Saree/Kurta) for stunning photoshoots, private AC car, expert guide with skip-the-line ticket assistance, and visits to the Taj Mahal & Agra Fort. Perfect for couples, families, and solo travelers. Book now, pay on arrival!",
    overview: [
      "The complete Taj Mahal day from Delhi, done privately. A comfortable AC car collects you from your hotel or the airport, your English-speaking guide meets you in Agra, and the day flows from the Taj Mahal to Agra Fort with no rushing.",
      "Put on complimentary traditional Indian dress, Sarees for women and Kurtas for men, for photographs against the white marble, then watch skilled craftsmen create inlay work like that found in the Taj Mahal at a local marble workshop. Ideal for couples, families and solo travelers.",
    ],
    pickup: "Hotel or airport pickup and drop-off in Delhi",
    languages: ["English"],
    groupSize: "Private, 2-10 guests",
    included: [
      "Private AC car with fuel, tolls and parking",
      "Professional English-speaking guide",
      "Hotel or airport pickup and drop-off in Delhi",
      "Complimentary traditional Indian dress (Saree / Kurta)",
      "Bottled water",
    ],
    excluded: [
      "Monument entrance tickets (Taj Mahal about ₹1,100 / $13 for foreigners; Agra Fort about ₹650 / $8)",
      "Personal expenses",
      "Tips (optional)",
    ],
    importantInfo: [
      FRIDAY_NOTE,
      "Group pricing per person: 2 people $120, 3-4 people $100, 5-10 people $85.",
      "Children aged 5-10 receive a 50% discount. Infants aged 0-4 travel free.",
      "Your guide helps you purchase entrance tickets with skip-the-line access.",
      "Free cancellation up to 24 hours before the tour starts.",
    ],
    whatToBring: [
      "Comfortable clothing and walking shoes (modest clothing is recommended, with shoulders and knees covered)",
      "Sunglasses, sunscreen and a hat in the summer months",
    ],
    itinerary: [
      {
        day: 1,
        title: "Same Day Taj Mahal Cultural Experience from Delhi",
        description: "",
        steps: [
          { title: "Early morning pickup", description: "From your Delhi hotel or the airport in a comfortable private AC car." },
          { title: "Drive to Agra", description: "Travel via the Yamuna Expressway, approximately 3 hours." },
          { title: "Meet your guide", description: "Your professional English-speaking guide joins you on arrival." },
          {
            title: "Taj Mahal",
            description:
              "Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. Wear your complimentary Saree or Kurta for photographs against the white marble.",
          },
          {
            title: "Agra Fort",
            description: "A UNESCO World Heritage Site and former residence of the Mughal emperors, with palaces, mosques and audience halls in red sandstone.",
          },
          {
            title: "Local marble art workshop",
            description: "See skilled craftsmen creating intricate inlay work similar to that found in the Taj Mahal.",
          },
          { title: "Return to Delhi", description: "Drop-off at your hotel or the airport. Total tour time is 10-12 hours." },
        ],
      },
    ],
  },

  "old-new-delhi-city-tour-8-hours": {
    overview: [
      "Delhi is two cities in one, and this 8-hour tour by car shows you both. Start in Old Delhi with the Red Fort, Jama Masjid and a rickshaw ride through the lanes of Chandni Chowk, then move on to the wide boulevards and landmarks of New Delhi.",
      "From Gandhi's memorial at Raj Ghat to Qutub Minar and Humayun's Tomb, it is a day of monuments, markets and local flavour.",
    ],
    pickup: "Hotel pickup and drop-off in Delhi",
    included: ["Transport by car", "Hotel pickup and drop-off", "Rickshaw ride through Chandni Chowk"],
    itinerary: [
      {
        day: 1,
        title: "Old & New Delhi Highlights",
        description: "",
        steps: [
          { title: "Hotel pickup", description: "Your day starts from your hotel." },
          {
            title: "Old Delhi",
            description: "Visit the Red Fort and Jama Masjid, and take a rickshaw ride through Chandni Chowk.",
          },
          { title: "Raj Ghat", description: "Gandhi's memorial." },
          {
            title: "New Delhi",
            description: "Drive past India Gate, Parliament House and the President's House.",
          },
          { title: "Qutub Minar & Humayun's Tomb", description: "Two of Delhi's great historic monuments." },
          { title: "Return to your hotel", description: "Drop-off at the end of the day." },
        ],
      },
    ],
  },

  "golden-triangle-tour-3-days": {
    overview: [
      "India's classic circuit in three days: the monuments of Delhi, the Taj Mahal and Agra Fort, and the palaces of Jaipur, all in one journey by road.",
      "Your route takes in Fatehpur Sikri between Agra and Jaipur, and Amber Fort, City Palace and Hawa Mahal in the Pink City, with all transfers taken care of.",
    ],
    pickup: "Airport or hotel pickup and drop-off",
    included: ["All transfers and transport", "Airport / hotel pickup and drop-off"],
  },

  "golden-triangle-tour-jaipur-udaipur-6-days": {
    overview: [
      "Extend the Golden Triangle with the romantic lake city of Udaipur. Over six days you move from Delhi to Agra, Jaipur and Udaipur, a blend of history, culture and natural beauty.",
      "Highlights include the Taj Mahal, Amber Fort, an evening of Rajasthani folk dance, and a boat ride on Lake Pichola in Udaipur.",
    ],
    pickup: "Airport or hotel pickup and drop-off",
    included: ["Transport by car throughout the tour"],
  },
}
