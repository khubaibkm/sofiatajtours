import type { Tour } from "./tours"

const FRIDAY_NOTE_EN = "The Taj Mahal is closed on Fridays. Please plan your tour for another day of the week."

export const extraTours: Tour[] = [
  // ---------------------------------------------------------------------------
  // Golden Triangle with wildlife (English)
  // ---------------------------------------------------------------------------
  {
    slug: "golden-triangle-tour-with-wildlife-6-days",
    title: "Golden Triangle Tour with Wildlife - Delhi, Agra, Ranthambore & Jaipur 5N/6D",
    description:
      "Combine India's most famous heritage circuit with a real wildlife adventure on this 6-day private tour. See the Taj Mahal at sunrise, the forts and palaces of Jaipur and Delhi's landmarks, then head into Ranthambore National Park for tiger safaris by canter or jeep. Private AC car, live guide, airport or hotel pickup, free cancellation.",
    location: "Delhi, Agra, Ranthambore, Jaipur",
    duration: "6 Days",
    // TODO: confirm the real price for this tour. Placeholder = same as the 6-day Udaipur tour.
    price: 210,
    priceINR: 19091,
    category: "golden-triangle",
    features: ["Tiger Safari Option", "Pickup Available"],
    languages: ["Hindi", "English", "Spanish", "Russian", "French"],
    images: [
      "/images/golden-triangle-and-wildlife.jpg",
      "/images/wildlife.webp",
      "/images/taj (16).jpeg",
      "/images/taj (19).jpeg",
      "/images/golden-triangle-with-wildlife-safari-500x500.webp",
      "/images/taj (111).jpg",
      "/images/taj (34).jpg",
      "/images/taj (8).jpeg",
      "/images/taj (14).jpeg",
      "/images/taj (18).jpeg",
      "/images/taj (20).jpeg",
      "/images/taj (98).jpg",
      "/images/taj (99).jpg",
      "/images/taj (94).jpg",
      "/images/taj (97).jpg",
      "/images/taj (41).jpg",
      "/images/taj (36).jpg",
    ],
    videos: [],
    overview: [
      "History, culture and wildlife in one journey. This 6-day private tour links the three cities of the Golden Triangle, Delhi, Agra and Jaipur, with Ranthambore National Park, one of India's best-known places to look for wild tigers.",
      "You watch the Taj Mahal at sunrise, walk through Agra Fort, Amber Fort and the City Palace, then spend a full day in Ranthambore on safari by canter or jeep. A live guide explains each stop, and a private air-conditioned vehicle keeps every transfer comfortable.",
    ],
    pickup: "Delhi airport, railway station or hotel (also Gurgaon, Noida and Faridabad)",
    highlights: [
      "Tiger safaris in Ranthambore National Park by canter or jeep",
      "Taj Mahal at sunrise and a guided visit to Agra Fort",
      "Amber Fort, Jal Mahal, Hawa Mahal, Jantar Mantar and the City Palace in Jaipur",
      "Delhi's landmarks: Red Fort, Qutub Minar, Humayun's Tomb, India Gate and Lotus Temple",
      "Private air-conditioned vehicle with uniformed driver and a live guide",
      "Guides in Hindi, English, Spanish, Russian and French",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi",
        description: "",
        steps: [
          { title: "Airport or railway station pickup", description: "Your driver meets you and takes you to your hotel." },
          { title: "Check in and relax", description: "Rest after your journey. Optional Delhi sightseeing if time permits." },
          { title: "Overnight in Delhi" },
        ],
      },
      {
        day: 2,
        title: "Delhi Sightseeing, then Drive to Agra",
        description: "",
        steps: [
          {
            title: "Red Fort",
            description: "The UNESCO World Heritage Site built by Shah Jahan in 1638.",
          },
          {
            title: "Qutub Complex",
            description: "See the Qutub Minar, the mosque, the Iron Pillar and the tombs.",
          },
          {
            title: "Humayun's Tomb",
            description: "Often called the dormitory of the Mughals, with more than 150 members of the royal family buried here.",
          },
          { title: "Lunch in Delhi", description: "At a well-known local restaurant." },
          {
            title: "India Gate and Lutyens' Delhi",
            description: "Drive past Parliament House, India Gate, Rashtrapati Bhavan and Raj Ghat. These are viewed from outside.",
          },
          { title: "Lotus Temple and Akshardham", description: "Visit the Lotus Temple and the carved Akshardham temple complex." },
          { title: "Jama Masjid and Chandni Chowk", description: "Explore India's largest mosque and the old market." },
          { title: "Evening drive to Agra", description: "Transfer to your hotel for the night in Agra." },
        ],
      },
      {
        day: 3,
        title: "Agra Sightseeing, then Ranthambore",
        description: "",
        steps: [
          {
            title: "Taj Mahal at sunrise",
            description: "Visit in the early morning light and explore the grounds. Sunrise timing depends on the weather.",
          },
          { title: "Breakfast", description: "Try traditional Agra flavours such as bedai and jalebi." },
          {
            title: "Agra Fort",
            description: "The red sandstone fort built by Emperor Akbar in 1565, blending Hindu and Central Asian architecture.",
          },
          { title: "Optional shopping", description: "Handicrafts, marble inlay, carpets and leather goods." },
          { title: "Drive to Ranthambore", description: "About 3-4 hours by road, then hotel check-in." },
          { title: "Evening tiger safari", description: "Enter the park by canter or jeep, then dinner and overnight in Ranthambore." },
        ],
      },
      {
        day: 4,
        title: "Full Day in Ranthambore",
        description: "",
        steps: [
          { title: "Morning tiger safari", description: "About 4 hours in the park by canter or jeep." },
          { title: "Breakfast at the hotel", description: "Freshen up and rest after the safari." },
          { title: "Lunch at the hotel" },
          { title: "Evening tiger safari", description: "Stay in the park until sunset, then dinner and overnight in Ranthambore." },
        ],
      },
      {
        day: 5,
        title: "Last Safari, then Jaipur",
        description: "",
        steps: [
          { title: "Early morning tiger safari", description: "A final safari of about 4 hours, then breakfast." },
          { title: "Drive to Jaipur", description: "About 3 hours by road." },
          {
            title: "Amer (Amber) Fort",
            description: "About 11 km from the city. Built in the 16th century by Man Singh, Akbar's general, in a blend of Hindu and Mughal styles.",
          },
          { title: "Jal Mahal", description: "See the floating palace on Man Sagar Lake." },
          { title: "Hotel check-in and overnight in Jaipur" },
        ],
      },
      {
        day: 6,
        title: "Jaipur Sightseeing, then Return to Delhi",
        description: "",
        steps: [
          { title: "Breakfast at the hotel" },
          {
            title: "Hawa Mahal",
            description: "The Palace of Winds in pink sandstone, built in 1799 by Maharaja Sawai Pratap Singh.",
          },
          {
            title: "Jantar Mantar",
            description: "The astronomical observatory built in 1734 by Sawai Jai Singh II.",
          },
          {
            title: "City Palace",
            description: "The royal palace complex of the Chandra Mahal and Mubarak Mahal, built between 1729 and 1732.",
          },
          { title: "Lunch in Jaipur", description: "Try local specialities such as Dal Bati Churma, onion kachori and ghevar." },
          { title: "Drive back to Delhi", description: "The tour ends on your arrival in Delhi." },
        ],
      },
    ],
    included: [
      "Private air-conditioned car or Tempo Traveller for all sightseeing and transfers",
      "Private uniformed driver",
      "Live tour guide (Hindi, English, Spanish, Russian or French)",
      "Airport, railway station or hotel pickup and drop-off",
      "All parking, tolls, taxes, fuel and interstate taxes",
    ],
    excluded: ["Personal expenses", "Anything not listed under What's Included"],
    importantInfo: [
      "Optional add-ons on request: monument entry tickets, Ranthambore tiger safaris (canter or jeep), and 3-star or 5-star hotels with breakfast.",
      "Sunrise timing at the Taj Mahal depends on the weather.",
      FRIDAY_NOTE_EN,
      "Parliament House and Rashtrapati Bhavan are viewed from outside only.",
      "Free cancellation up to 24 hours before the tour starts.",
    ],
  },

  // ---------------------------------------------------------------------------
  // Sunrise Taj Mahal with a Spanish-speaking guide (Spanish)
  // ---------------------------------------------------------------------------
  {
    slug: "amanecer-taj-mahal-desde-delhi-guia-en-espanol",
    locale: "es",
    title: "Tour al Amanecer en el Taj Mahal desde Delhi con Guía en Español",
    description:
      "El mejor tour para ver el amanecer en el Taj Mahal desde Delhi, con guía oficial de habla hispana. Recogida en su hotel o aeropuerto en vehículo privado con aire acondicionado, visita al Taj Mahal y al Fuerte de Agra, transporte de ida y vuelta, peajes y agua embotellada incluidos.",
    location: "Delhi a Agra",
    duration: "Aprox. 13 horas",
    price: 45,
    priceINR: 4091,
    category: "taj-mahal",
    features: ["Guía en español", "Recogida incluida"],
    languages: ["Español"],
    groupSize: "Privado",
    images: [
      "/images/taj (36).jpg",
      "/images/taj (34).jpg",
      "/images/taj (49).jpg",
      "/images/taj (58).jpg",
      "/images/taj (60).jpg",
      "/images/taj (2).jpeg",
      "/images/taj (23).jpeg",
      "/images/taj (39).jpg",
      "/images/taj (44).jpg",
    ],
    videos: [],
    overview: [
      "¿Está planeando su viaje a la India? El tour al Taj Mahal al amanecer desde Delhi es la experiencia más mágica y fotografiada del mundo. Con nuestro guía de habla hispana, descubrirá la historia, los mitos y los secretos del Taj Mahal en su propio idioma, viajando de forma cómoda, segura y sin estrés.",
      "Asegure su cupo y viva una mañana de cuento de hadas con Sofía Taj Tours.",
    ],
    pickup: "Recogida en su hotel o en el aeropuerto de Delhi",
    highlights: [
      "Guías expertos en español: olvídese de las barreras del idioma, nuestros guías locales dominan el español a la perfección.",
      "Evite las multitudes y el calor: el amanecer es el momento más fresco del día y ideal para disfrutar de una atmósfera de paz.",
      "Fotografías perfectas: nuestro guía conoce los mejores puntos fotográficos («secret spots») para capturar fotos perfectas.",
      "Servicio VIP de puerta a puerta: recogida directamente en su hotel o aeropuerto en Delhi en vehículo privado climatizado.",
    ],
    itinerary: [
      {
        day: 1,
        title: "Itinerario detallado del tour",
        description: "",
        steps: [
          {
            time: "02:30 AM",
            title: "Recogida en Delhi",
            description:
              "Nuestro chofer privado lo buscará en su hotel o aeropuerto en Delhi para trasladarse cómodamente hacia Agra en un vehículo con aire acondicionado.",
          },
          {
            time: "05:45 AM",
            title: "Llegada a Agra y encuentro con el guía",
            description:
              "Nos reuniremos con su guía oficial en español e ingresaremos directo al monumento evitando las largas filas de la taquilla.",
          },
          {
            time: "06:00 AM",
            title: "El espectáculo del amanecer",
            description:
              "Contemple cómo el Taj Mahal cambia de color con la luz de la mañana mientras su guía le explica la hermosa historia de amor detrás de su arquitectura.",
          },
          {
            time: "08:30 AM",
            title: "Desayuno (opcional)",
            description: "Después de la visita y una sesión de fotos inolvidable, podrá disfrutar de un merecido desayuno.",
          },
          {
            time: "09:30 AM",
            title: "Visita al Fuerte de Agra",
            description:
              "Continuamos con una visita guiada al imponente palacio amurallado desde donde el emperador contemplaba el Taj Mahal.",
          },
          {
            time: "12:30 PM",
            title: "Regreso a Delhi",
            description:
              "Iniciamos el viaje de retorno, llegando cómodamente a su punto de origen en Delhi alrededor de las 04:00 PM.",
          },
        ],
      },
    ],
    included: [
      "Guía oficial certificado por el Ministerio de Turismo de la India (habla hispana)",
      "Transporte privado de ida y vuelta desde Delhi en coche privado con aire acondicionado",
      "Chofer profesional, peajes de autopista, impuestos y estacionamientos incluidos",
      "Agua embotellada fría disponible durante todo el trayecto",
    ],
    importantInfo: [
      "El Taj Mahal permanece cerrado los viernes. Por favor, planifique su tour para otro día de la semana.",
      "Es una salida muy temprana: la recogida es a las 02:30 AM para estar en el Taj Mahal al amanecer.",
      "El desayuno después de la visita es opcional.",
    ],
  },
]
