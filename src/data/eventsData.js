import workshop from "../assets/sofi.jpeg";
import karol_profil3 from "../../public/images/4.jpeg";
import freeman from "../assets/freeman.png";
import social from "../assets/socials.png";
import styling from "../assets/styling.png";

export const events = [
  {
    id: 3,

    eventStart: "2026-09-11",

    type: "WEEKEND INTENSIVE",

    title: "Bachata Weekend Intensive",

    instructor: "Alondra • Sofi • Steven",

    date: "September 11–13, 2026",

    time: "Full Weekend",

    location: "Freedom Dance Studio",

    price: "$99",

    priceDetails: "Early Bird Weekend Pass",

    image: workshop,

    imageFit: "contain",

    description:
      "A complete Bachata weekend designed to help you improve your technique, musicality, connection, body movement, and confidence.",

    button: "Register Now",

    // Current main event
    featured: true,
  },

  {
    id: 7,

    eventStart: "2026-09-11",

    day: "Friday",

    date: "Starting September 11, 2026",

    type: "KIDS CLASS",

    title: "Kids Acting Classes",

    time: "4:00 PM – 5:00 PM",

    instructor: "Karol Di Nassif",

    category: "Acting / Kids",

    location: "Freedom Dance Studio",

    price: "$25-$80",

    phone: "702-496-7934",

    instagram: "",

    description:
      "A creative acting experience for children ages 6–12 designed to build confidence, self-expression, storytelling, improvisation, camera skills, audition techniques, and performance skills. Learn from professional actress, TV presenter, stage performer, and acting coach Karol Di Nassif.",

    image: karol_profil3,
    imageFit: "contain",

    video: "",

    button: "Register Now",

    showInHero: false,
  },

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
    image: styling,
    imageFit: "contain",

    duration: "2-Month Program",

    level: "Beginner to Intermediate",

    location: "Freedom Dance Studio",

    price: "$15",

    priceDetails: "Drop-In • FREE for Members & Instructors",

    description:
      "A two-month Men's Styling Bachata Sensual Fusion program with Steven. Designed for beginner to intermediate dancers to improve body movement, styling, musicality, confidence, technique, and expression.",

    button: "Join the Class",

    // Recurring class — do not make it the main Hero event
    showInHero: false,

    featured: false,
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

    featured: false,
  },
];
