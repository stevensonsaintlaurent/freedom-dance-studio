import freeman from "../assets/freeman.png";
import social from "../assets/freedom.png";
import styling from "../assets/styling.png";
import carlo from "../assets/instructors/carlos.jpeg";
import bachataZouk from "../assets/instructors/bachataZouk1.jpeg";

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

  // {
  //   id: 9,

  //   eventStart: "2026-09-26",

  //   type: "WORKSHOP",

  //   title: "Salsa Styling & Partnerwork Workshop",

  //   instructor: "Freeman • Sandra",

  //   date: "September 26, 2026",

  //   time: "2:00 PM",

  //   image: freeman,

  //   imageFit: "contain",

  //   location: "Freedom Dance Studio",

  //   schedule: [
  //     {
  //       time: "2:00 PM",
  //       title: "Men's Styling & Ladies Styling",
  //       instructors: "Freeman • Sandra",
  //     },
  //     {
  //       time: "3:00 PM",
  //       title: "Salsa On 2 Partnerwork",
  //       instructors: "Freeman • Sandra",
  //     },
  //   ],

  //   price: "$25",

  //   priceDetails:
  //     "Early Bird • $40 at the Door • Donation for Members & Instructors",

  //   description:
  //     "Join Freeman and Sandra for a special Salsa workshop. At 2:00 PM, train Men's Styling and Ladies Styling. At 3:00 PM, bring everything together with Salsa On 2 Partnerwork. Early bird admission is $25, $40 at the door, and donation-based for Freedom Dance Studio members and instructors.",

  //   button: "Register Now",

  //   showInHero: false,

  //   featured: false,
  // },

  {
    id: 10,

    eventStart: "2026-10-16",

    day: "Friday",

    type: "BACHATA SOCIAL",

    title: "Pop-Up Bachata Freedom Night",

    instructor: "Steven • DJ J-Flow",

    date: "October 16, 2026",

    time: "Free Bachata Class 8:30 PM • Social 9:30 PM – 1:00 AM",

    image: social,

    imageFit: "contain",

    location: "Freedom Dance Studio",

    address: "3110 E. Sunset Rd., Ste. C, Las Vegas, NV 89120",

    workshop: {
      title: "FREE Bachata Class",
      instructor: "Steven",
      time: "8:30 PM – 9:30 PM",
      level: "All Levels",
      price: "Included with admission",
    },

    social: {
      title: "Pop-Up Bachata Freedom Night",
      musicBy: "DJ J-Flow",
      time: "9:30 PM – 1:00 AM",
      musicRatio: "5 Bachata • 1 Salsa",
      musicDetails:
        "Music selection may change based on attendance and the crowd's preferences.",
    },

    price: "$20",

    discounts: {
      repost: {
        description: "Repost the event flyer",
        discount: 5,
      },
      advancePayment: {
        description: "Pay before Thursday at 11:59 PM",
        deadline: "2026-10-15T23:59:00",
        discount: 5,
      },
      combined: {
        description: "Repost the flyer AND pay in advance",
        totalDiscount: 10,
        finalPrice: 10,
      },
    },

    description:
      "Join us Friday, October 16, 2026, for Pop-Up Bachata Freedom Night at Freedom Dance Studio! Start your evening with a FREE Bachata class with Steven from 8:30 PM to 9:30 PM, followed by social dancing with DJ J-Flow until 1:00 AM. Enjoy a music mix of 5 Bachata songs for every 1 Salsa song, with adjustments based on attendance and crowd preferences. Regular admission is $20. Repost our flyer to save $5, pay before Thursday at 11:59 PM to save another $5, or do both and pay only $10! Beginners and experienced dancers are welcome. Come dance, meet new people, and enjoy an unforgettable night in Las Vegas!",

    button: "Get Your Ticket",

    showInHero: true,

    featured: true,
  },

  // {
  //   id: 11,
  //   eventStart: "2026-10-02",
  //   type: "WEEKEND INTENSIVE",
  //   title: "Bachata Intensive Weekend",
  //   instructor: "Michelle • Los Angeles & Carlos • Madrid, Spain",
  //   date: "October 2–4, 2026",
  //   time: "Friday–Sunday",
  //   image: carlo,
  //   imageFit: "contain",
  //   location: "Freedom Dance Studio",
  //   price: "$99 Early Bird",
  //   workshop: {
  //     title: "Bachata Intensive Weekend",
  //     instructor: "Michelle • Los Angeles & Carlos • Madrid, Spain",
  //     time: "October 2–4",
  //   },
  //   description:
  //     "Join us for an incredible Bachata Intensive Weekend at Freedom Dance Studio from October 2–4! Train with two amazing guest artists, Michelle from Los Angeles and Carlos from Madrid, Spain. Enjoy a full weekend of Bachata workshops, connection, technique, styling, and social dancing with dancers from Las Vegas and beyond. Early Bird Pass: $99.",
  //   button: "Get Your Pass",
  //   showInHero: false,
  //   featured: false,
  // },

  {
    id: 30,

    eventStart: "2026-10-12",

    day: "Monday",

    date: "October 19, 26 & November 2, 2026",

    type: "BACHATA ZOUK SERIES",

    title: "Debut Bachata Zouk Series — Henrique & Sofi",

    instructor: "Henrique (Seattle) & Sofi (Orlando)",

    category: "Bachata Zouk / Fusion / Partnerwork",

    time: "8:00 PM – 9:30 PM",

    duration: "3-Week Series • Every Monday",

    level: "Open Level",

    location: "Freedom Dance Studio, Las Vegas",

    price: "$99",

    priceDetails:
      "Weekender Dancers: $99 (Regular $129) • Private Lessons: $85 for Series Dancers (Regular $120)",

    image: bachataZouk,

    imageFit: "contain",

    description:
      "Experience the debut Bachata Zouk Series in Las Vegas with Henrique from Seattle and Sofi from Orlando! Starting October 19, this exclusive 3-week Monday training series takes place October 19, 26 & November 2, 2026 from 8:00 PM to 9:30 PM at Freedom Dance Studio. Continue your dance journey beyond the weekender with focused training, partnerwork, musicality, technique, body movement, and direct attention from visiting instructors. Dancers who register for the weekender receive the complete 3-week series for only $99 instead of $129. Series dancers also enjoy special private lesson pricing of $85 instead of $120. Don't miss this opportunity to grow, connect, and take your dancing to the next level. Register now and join Henrique & Sofi for an unforgettable training experience!",

    button: "Register for the Series",

    showInHero: true,

    featured: true,
  },
];
