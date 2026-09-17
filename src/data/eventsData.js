import freeman from "../assets/freeman.png";
import social from "../assets/socials.png";
import styling from "../assets/styling.png";
import carlo from "../assets/instructors/carlos.jpeg";

export const events = [
  {
    id: 8,

    eventStart: "2026-09-14",

    day: "Monday",

    date: "Starting September 14, 2026",

    type: "BACHATA CLASS",

    title: "Men's Styling — Bachata Sensual Fusion",

    instructor: "Steven",

    category: "Bachata Sensual / Men's Styling",

    time: "8:00 PM",

    duration: "2-Month Program",

    level: "Beginner to Intermediate",

    location: "Freedom Dance Studio",

    price: "$15",

    priceDetails: "Drop-In • FREE for Members & Instructors",

    image: styling,

    imageFit: "contain",

    description:
      "A two-month Men's Styling Bachata Sensual Fusion program with Steven. Designed for beginner to intermediate dancers to improve body movement, styling, musicality, confidence, technique, and expression.",

    button: "Join the Class",

    showInHero: true,

    featured: true,
  },

  {
    id: 9,

    eventStart: "2026-09-26",

    type: "WORKSHOP",

    title: "Salsa Styling & Partnerwork Workshop",

    instructor: "Freeman • Sandra",

    date: "September 26, 2026",

    time: "2:00 PM",

    image: freeman,

    imageFit: "contain",

    location: "Freedom Dance Studio",

    schedule: [
      {
        time: "2:00 PM",
        title: "Men's Styling & Ladies Styling",
        instructors: "Freeman • Sandra",
      },
      {
        time: "3:00 PM",
        title: "Salsa On 2 Partnerwork",
        instructors: "Freeman • Sandra",
      },
    ],

    price: "$25",

    priceDetails:
      "Early Bird • $40 at the Door • Donation for Members & Instructors",

    description:
      "Join Freeman and Sandra for a special Salsa workshop. At 2:00 PM, train Men's Styling and Ladies Styling. At 3:00 PM, bring everything together with Salsa On 2 Partnerwork. Early bird admission is $25, $40 at the door, and donation-based for Freedom Dance Studio members and instructors.",

    button: "Register Now",

    showInHero: true,

    featured: false,
  },

  {
    id: 10,

    eventStart: "2026-10-02",

    type: "SBK SOCIAL",

    title: "Freedom Dance SBK Social",

    instructor: "Freedom Dance Instructors • Las Vegas Guest Dancers",

    date: "October 2, 2026",

    time: "Bachata Intensive 8:00 PM • Social 10:00 PM",

    image: social,

    imageFit: "contain",

    location: "Freedom Dance Studio",

    workshop: {
      title: "Bachata Weekend Intensive",
      instructor: "Freedom Dance Instructors • Special Guest Instructors",
      time: "8:00 PM",
    },

    social: {
      title: "Freedom Dance SBK Social",
      musicBy: "DJ Young Fuego • Maximo",
      time: "10:00 PM",
    },

    description:
      "Join us Friday, October 2 for an exciting night of Bachata and SBK dancing at Freedom Dance Studio! The evening starts at 8:00 PM with our Bachata Weekend Intensive, followed by the Freedom Dance SBK Social at 10:00 PM. Dance the night away with Salsa, Bachata, Kizomba and more alongside Freedom Dance instructors, guest dancers, and the Las Vegas dance community. Music by DJ Young Fuego and Maximo. Dress Code: Men wear all black. Women may wear any color except black.",

    button: "Get Your Ticket",

    showInHero: true,

    featured: false,
  },

  {
    id: 11,
    eventStart: "2026-10-02",
    type: "WEEKEND INTENSIVE",
    title: "Bachata Intensive Weekend",
    instructor: "Michelle • Los Angeles & Carlos • Madrid, Spain",
    date: "October 2–4, 2026",
    time: "Friday–Sunday",
    image: carlo,
    imageFit: "contain",
    location: "Freedom Dance Studio",
    price: "$99 Early Bird",
    workshop: {
      title: "Bachata Intensive Weekend",
      instructor: "Michelle • Los Angeles & Carlos • Madrid, Spain",
      time: "October 2–4",
    },
    description:
      "Join us for an incredible Bachata Intensive Weekend at Freedom Dance Studio from October 2–4! Train with two amazing guest artists, Michelle from Los Angeles and Carlos from Madrid, Spain. Enjoy a full weekend of Bachata workshops, connection, technique, styling, and social dancing with dancers from Las Vegas and beyond. Early Bird Pass: $99.",
    button: "Get Your Pass",
    showInHero: true,
    featured: true,
  },
];
