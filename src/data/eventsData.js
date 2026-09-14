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

    time: "Workshop + Social",

    image: social,

    imageFit: "contain",

    location: "Freedom Dance Studio",

    workshop: {
      title: "Salsa On 1 Workshop",
      instructor: "Special Guest Instructors",
      time: "Before the Social",
    },

    social: {
      title: "SBK Social",
      musicBy: "DJ Young Fuego • Maximo",
    },

    description:
      "Our next Freedom Dance SBK Social is October 2! Start the night with a Salsa On 1 workshop taught by amazing instructors, followed by an incredible night of Salsa, Bachata, Kizomba and more. Dance with Freedom Dance Studio instructors and some of the best dancers in Las Vegas, with music by DJ Young Fuego and Maximo.",

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
