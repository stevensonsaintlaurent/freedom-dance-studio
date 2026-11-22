import bachaZoukWeekender from "../assets/instructors/bachazouk.webp";
import freedom from "../assets/instructors/Freedom.webp";

export const events = [
  {
    id: 1,

    eventStart: "2026-12-05",
    eventEnd: "2026-12-06",

    day: "Saturday – Sunday",
    date: "December 5–6, 2026",

    type: "WEEKEND INTENSIVE",
    title: "Las Vegas BachaZouk Weekender",

    subtitle: "Last Weekender for 2026 at Freedom Dance Studio!",

    instructor: "Guest BachaZouk Artists",

    category: "BachaZouk",

    time: "December 5–6, 2026",
    duration: "2 Days",
    level: "To Be Announced",

    location: "Freedom Dance Studio",
    address: "3110 E. Sunset Rd., Suite C, Las Vegas, NV 89120",

    // Updated promotional flyer
    image: bachaZoukWeekender,
    imageFit: "contain",

    // Workshop schedule to be announced
    schedule: [],

    // Pricing
    price: "$99 Early Bird",
    regularPrice: "$129",

    // December 3, 2026, 11:59 PM Las Vegas time
    earlyBirdDeadline: "2026-12-03T23:59:00-08:00",

    priceDetails:
      "Early Bird Full Pass: $99 (Ends December 3 at 11:59 PM) • Regular Full Pass: $129",

    stylingPrices: null,

    // Special announcement
    highlight: "LAST WEEKENDER OF 2026!",
    announcement:
      "Our final dance weekender of 2026 at Freedom Dance Studio. Don't miss it!",

    description:
      "Get ready for the LAS VEGAS BACHAZOUK WEEKENDER, December 5–6, 2026! Freedom Dance Company proudly presents the LAST WEEKENDER OF 2026 at Freedom Dance Studio! Join us for two exciting days dedicated exclusively to BachaZouk. Experience connection, creativity, musicality, technique, and partnerwork while learning from our guest artists. This is your final opportunity to experience a Freedom Dance Studio weekender in 2026! Take advantage of our Early Bird Full Pass for only $99 before December 3 at 11:59 PM. Regular Full Pass: $129. Workshop schedules and additional details will be announced soon. DON'T MISS IT!",

    button: "Get Your Pass",

    showInHero: true,
    featured: true,
    url: "weekend",
  },

  {
    id: 2,

    eventStart: "2026-12-20",
    eventEnd: "2026-12-20",

    day: "Sunday",
    date: "December 20, 2026",

    type: "LIVE CONCERT",

    title: "Freedom Live Band Concert",

    instructor: "Freedom Live Band",

    category: "Live Music / Jazz / Latin / Big Band",

    time: "To Be Announced",

    duration: "Live Concert",

    level: "Open to Everyone",

    location: "Venue To Be Announced",

    image: freedom,
    imageFit: "contain",

    rehearsal: {
      day: "Every Saturday",
      time: "6:00 PM – 7:30 PM",
      location: "Freedom Dance Studio",
      description:
        "Weekly rehearsals for participating musicians. Musicians should contact Steven to receive their printed music for their respective instruments.",
    },

    // Ticket pricing
    price: "$20 Advance",

    regularPrice: "To Be Announced",

    priceDetails:
      "Advance Tickets: $20 per person • Limited availability • Door price to be announced",

    // Concert information
    description:
      "Join us on Sunday, December 20, 2026, for an unforgettable evening of live music with the Freedom Live Band! Experience an exciting performance featuring talented musicians bringing Jazz, Latin, Swing, Big Band, and timeless classics to life. Celebrate music, culture, and community with family and friends. Advance tickets are only $20 per person! Secure your tickets early and enjoy an incredible live concert experience. The concert venue and starting time will be announced soon. Don't miss this special end-of-year musical celebration!",

    button: "Get Your Tickets",

    showInHero: false,
    featured: true,
    url: "band",
  },
];
