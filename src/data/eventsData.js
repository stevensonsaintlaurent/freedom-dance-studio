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

    eventStart: "2026-11-06",

    day: "Friday",

    type: "SBK SOCIAL",

    title: "Freedom Monthly SBK Social",

    instructor: "Steven & Luz • DJ Maximo • DJ J-Flow",

    date: "November 6, 2026",

    time: "Bachata Workshop 8:30 PM • Social 10:00 PM – 2:00 AM",

    image: social,

    imageFit: "contain",

    location: "Freedom Dance Studio",

    address: "3110 E. Sunset Rd., Ste. C, Las Vegas, NV 89120",

    workshop: {
      title: "Bachata Clip Workshop",
      instructor: "Steven & Luz",
      time: "8:30 PM – 10:00 PM",
      level: "Open Level",
      price: "Contact studio for workshop pricing",
      description:
        "Join Steven and Luz for a special Bachata workshop where they will teach the choreography from their previous Bachata clip. Learn the movements, musicality, partner connection, and styling featured in their performance.",
    },

    social: {
      title: "Freedom Monthly SBK Social",
      musicBy: "DJ Maximo • DJ J-Flow",
      time: "10:00 PM – 2:00 AM",

      rooms: [
        {
          name: "Room 1",
          music: "Salsa & Bachata",
          description:
            "Enjoy Salsa and Bachata music with great dancers from the Las Vegas community.",
        },
        {
          name: "Room 2",
          music: "Kizomba",
          description:
            "Dance Kizomba and enjoy the connection, rhythm, and atmosphere.",
        },
      ],

      musicDetails:
        "Two rooms featuring Salsa, Bachata, and Kizomba, with music by DJ Maximo and DJ J-Flow.",
    },

    price: "$20",

    description:
      "Join us Friday, November 6, 2026, for our Monthly SBK Social at Freedom Dance Studio in Las Vegas! We are bringing together amazing dancers for another unforgettable night of Salsa, Bachata, and Kizomba. Start the evening with a special Bachata Clip Workshop taught by Steven and Luz from 8:30 PM to 10:00 PM, where they will teach the choreography from their previous Bachata clip. Then dance from 10:00 PM to 2:00 AM with music by DJ Maximo and DJ J-Flow! Enjoy two dance rooms: Room 1 for Salsa and Bachata, and Room 2 for Kizomba. Social admission is $20. Come dance, connect with the community, meet new people, and enjoy an incredible night at Freedom Dance Studio!",

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
