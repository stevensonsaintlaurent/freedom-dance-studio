import weekendIntensive from "../assets/instructors/salsaBachata.jpeg";
import freedom from "../assets/instructors/freedom.webp";

export const events = [
  {
    id: 1,
    eventStart: "2026-11-20",
    eventEnd: "2026-11-22",

    day: "Friday – Sunday",
    date: "November 20–22, 2026",

    type: "WEEKEND INTENSIVE",
    title: "Salsa & Bachata Weekend Intensive",

    instructor: "Henrique (Seattle) • Brenda (Miami) • Desmond (Las Vegas)",

    category: "Salsa / Bachata Sensual / Ladies Styling",

    time: "November 20–22, 2026",
    duration: "3 Days",
    level: "Open Level & Advanced",

    location: "Freedom Dance Studio",
    address: "3110 E. Sunset Rd., Suite C, Las Vegas, NV 89120",

    // One flyer for the entire weekend
    image: weekendIntensive,
    imageFit: "contain",

    schedule: [
      {
        day: "Friday",
        date: "November 20",
        workshops: [
          {
            time: "6:30 PM – 8:00 PM",
            title: "Advanced Bachata Workshop",
          },
          {
            time: "8:30 PM – 10:00 PM",
            title: "Open Level Bachata Sensual",
          },
        ],
      },
      {
        day: "Saturday",
        date: "November 21",
        workshops: [
          {
            time: "2:30 PM – 3:30 PM",
            title: "Salsa Ladies Styling",
          },
          {
            time: "4:00 PM – 5:30 PM",
            title: "Salsa Workshop",
          },
          {
            time: "8:30 PM – 10:00 PM",
            title: "Open Level Bachata Sensual",
          },
        ],
      },
      {
        day: "Sunday",
        date: "November 22",
        workshops: [
          {
            time: "2:30 PM – 3:30 PM",
            title: "Bachata Ladies Styling",
          },
          {
            time: "4:00 PM – 5:30 PM",
            title: "Open Level Bachata Sensual",
          },
        ],
      },
    ],

    price: "$89 Early Bird",
    regularPrice: "$129",

    earlyBirdDeadline: "2026-11-20T12:00:00",

    priceDetails: "Early Bird Full Pass: $89 • Regular Full Pass: $129",

    stylingPrices: {
      fullPassHolder: "$20",
      anyPassHolder: "$30",
      generalAdmission: "$40",
    },

    description:
      "Join us November 20–22, 2026, for an unforgettable Salsa & Bachata Weekend Intensive at Freedom Dance Studio! Train with Henrique from Seattle, Brenda from Miami, and Desmond from Las Vegas. Enjoy three days of Salsa, Bachata Sensual, advanced workshops, partnerwork, musicality, technique, and ladies styling. All levels are welcome to participate in the appropriate workshops. Reserve your spot today!",

    button: "Get Your Pass",

    showInHero: true,
    featured: true,
  },

  {
    id: 2,

    eventStart: "2026-11-22",

    day: "Sunday",
    date: "November 22, 2026",

    type: "LIVE CONCERT",

    title: "Freedom Giving Concert",

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

    price: "FREE",

    priceDetails: "Free Admission • Open to the Public",

    description:
      "Join us on Sunday, November 22, 2026, for the Freedom Giving Concert! Experience a special live performance featuring our Freedom Live Band, bringing together talented musicians for an unforgettable celebration of music, community, and togetherness. Enjoy an exciting mix of Jazz, Latin, Swing, and classic favorites. Admission is completely FREE and everyone is welcome! Musicians rehearse every Saturday from 6:00 PM to 7:30 PM at Freedom Dance Studio.",

    button: "Concert Details",

    showInHero: true,
    featured: true,
  },
];
