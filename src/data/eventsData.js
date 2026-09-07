import septemberSocial from "../assets/freeman.jpeg";
import workshop from "../assets/sofi.jpeg";
import karol_profil3 from "../public/images/4.jpeg";

export const events = [
  {
    id: 2,

    // IMPORTANT:
    // eventStart is used by HeroAnimation to know
    // when the event happens.
    eventStart: "2026-09-04",

    type: "SOCIAL",
    title: "Freedom Dance Social",
    instructor: "Salsa • Bachata • Kizomba • More",

    date: "September 4, 2026",
    time: "10:00 PM – 2:00 AM",

    workshop: {
      title: "Salsa on 2 Workshop",
      instructor: "Freeman",
      time: "8:00 PM – 10:00 PM",
      earlyBird: "$25",
      membersAndInstructors: "FREE",
      doorPrice: "$35 at the door",
    },

    social: {
      title: "Freedom Dance Social",
      time: "10:00 PM – 2:00 AM",
      musicBy: "Maximo",
    },

    location: "Freedom Dance Studio",

    price: "$20",
    priceDetails: "Admission",

    image: septemberSocial,
    imageFit: "contain",

    description:
      "Join us for a Salsa on 2 workshop with Freeman from 8:00 PM–10:00 PM, followed by the Freedom Dance Social from 10:00 PM–2:00 AM with music by Maximo. Early bird workshop price is $25. Free for members and instructors. $35 at the door.",

    button: "Get Your Ticket",

    featured: false,
  },

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

    // HeroAnimation will prioritize this event.
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

    video: "",

    button: "Register Now",

    // This prevents a recurring class from becoming the main Hero.
    showInHero: false,
  },
];
