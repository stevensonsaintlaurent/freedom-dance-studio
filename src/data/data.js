import gabriela from "../assets/gabriel.jpg";
import zagir from "../assets/zagir.jpg";
import allyson from "../assets/ally3.jpg";
import maribel from "../assets/maribel.jpg";
import adriana from "../assets/adriana.jpg";
import kanani from "../assets/kanani.jpg/";
import jesus from "../assets/jesus.jpg";

export const dataRooms = [
  {
    id: 1,
    name: "main room",
    size: "720 sq ft",
    description:
      "The main room is our largest space, perfect for group classes, workshops, and events. It features a spacious dance floor, full-length mirrors, and a sound system to create the ideal environment for learning and practicing dance.",
    label: "main",
    value: "main",
  },
  {
    id: 2,
    name: "kizomba room",
    size: "639 sq ft",
    description:
      "The Kizomba Room is a cozy and intimate space designed specifically for Kizomba classes and social dancing. It features a smooth dance floor, ambient lighting, and a sound system that creates the perfect atmosphere for Kizomba enthusiasts to connect and dance.",
    label: "kizomba",
    value: "kizomba",
  },

  {
    id: 3,
    name: "both",
    size: "1359 sq ft",
    description:
      "The Both Rooms is a cozy and intimate space designed specifically for Kizomba classes and social dancing. It features a smooth dance floor, ambient lighting, and a sound system that creates the perfect atmosphere for Kizomba enthusiasts to connect and dance.",
    label: "both",
    value: "both",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Gabriela Oman",
    title: "Bachata Sensual, Kizomba",
    rating: 5,
    review:
      "The instructors at Freedom Dance are amazing. I'm so happyI found this company. Stevenson is very humble and patient. He encourages you to own your sexiness and motivates you to keep learning and coming back by always being so inclusive and friendly.",
    image: gabriela,
  },

  {
    id: 2,
    name: "Zagir",
    title: "Bachata Sensual, Kizomba",
    rating: 5,
    review:
      "The instructors are super patient and professional, they constantly motivate and challenge you to continue learning in a positive, respectful way, on your time and free of pressure. They completely understand that we are all different and learndifferently. In Freedom Dance I have found a family.",
    image: zagir,
  },
  {
    id: 3,
    name: "Allyson Corella",
    title: "Bachata Sensual, Kizomba",
    rating: 5,
    review:
      " My first ever dance class was with Stevenson at Freedom Dance.  What I appreciate the most about Stevenson is he encourages diversity and inclusivity by suggesting students explore different instructors. My favorite part about class is the combination of learning and fun, plus the new friends I&apos;ve made along the way. I would encourage anyone who wants to find new joy in their life, to sign up for Bachata and Kizomba with Freedom Dance💓",
    image: allyson,
  },
  {
    id: 4,
    name: "Maribel Magana",
    title: "Bachata Sensual, Kizomba",
    rating: 5,
    review:
      "I started taking Bachata and Kizomba classes with Stevenson at Freedom Dance earlier this year. Stevenson is a very skilled and talented dancer who makes it his goal to encourage and teach his students to improve their dance skills while boosting their confidence. Not only is he a great teacher but his classes are also really fun. I highly recommend anyone who has a passion for dancing to go take his classes. You&apos;ll be learning from the best!",
    image: maribel,
  },
  {
    id: 4,
    name: "Adriana Luna Blake",
    title: "Bachata Sensual",
    rating: 5,
    review:
      "I love attending Freedom Dance Company because the classes are fun. They focus on correcting and perfectioning the techniques, and Stevenson is very patient and professional with his students. They give each student the right amount of attention  and encouragement. I would highly recommend this dance studio.",
    image: adriana,
  },
  {
    id: 5,
    name: "Kanani Jane",
    title: "Kizomba, UrbanKiz",
    rating: 5,
    review:
      " Freedom Dance is actually where I fell in love with Kizomba. 💜 Just walked into Stevenson&apos;s class, knowing nothing about Kizomba, and BAMM!! Melted, lol. Later I took a Bachata Bootcamp and learned from a dancer from Romania. Such a beautiful dancer with so much skill and experience. I was blessed with being able to learn from her as well as Stevenson.",
    image: kanani,
  },
  {
    id: 6,
    name: "Jesús Silva",
    title: "Bachata Sensual, Kizomba and Salsa",
    rating: 5,
    review:
      "Freedom dance is one of the best dance studio in Vegas instructor Stevenson is a very nice and funny teacher He knows the dances he is teaching and puts all the enthusiasm to each class so come and join the team you will not regret it Personally I am very happy because there is a very good vibe with all the students come and practice Bachata and Kizomba.",
    image: jesus,
  },
];

const yogaClasses = [
  {
    id: 1,
    name: "Beginner Yoga",
    level: "Beginner",
    instructor: "Sarah Johnson",
    price: "$20 / Class",
    monthly: "$75 / Month",
    schedule: "Monday & Wednesday • 6:00 PM - 7:00 PM",
    duration: "60 Minutes",
    description:
      "Perfect for beginners who want to improve flexibility, balance, posture, and relaxation while learning the fundamentals of yoga.",
    image: "/images/yoga/beginner.jpg",
  },

  {
    id: 2,
    name: "Hatha Yoga",
    level: "All Levels",
    instructor: "Emily Carter",
    price: "$22 / Class",
    monthly: "$80 / Month",
    schedule: "Tuesday & Thursday • 7:00 PM - 8:00 PM",
    duration: "60 Minutes",
    description:
      "A traditional yoga class focusing on breathing techniques, flexibility, balance, and overall physical wellness.",
    image: "/images/yoga/hatha.jpg",
  },

  {
    id: 3,
    name: "Vinyasa Flow",
    level: "Intermediate",
    instructor: "Michael Lee",
    price: "$25 / Class",
    monthly: "$90 / Month",
    schedule: "Monday, Wednesday & Friday • 8:00 AM - 9:00 AM",
    duration: "60 Minutes",
    description:
      "Flow through dynamic movements synchronized with your breath to improve strength, flexibility, and endurance.",
    image: "/images/yoga/vinyasa.jpg",
  },

  {
    id: 4,
    name: "Power Yoga",
    level: "Advanced",
    instructor: "Jessica Brown",
    price: "$28 / Class",
    monthly: "$100 / Month",
    schedule: "Tuesday & Thursday • 6:30 PM - 7:45 PM",
    duration: "75 Minutes",
    description:
      "An energetic workout designed to build strength, improve cardiovascular fitness, and increase flexibility.",
    image: "/images/yoga/power.jpg",
  },

  {
    id: 5,
    name: "Yin Yoga",
    level: "All Levels",
    instructor: "Anna Martinez",
    price: "$20 / Class",
    monthly: "$75 / Month",
    schedule: "Friday • 7:00 PM - 8:00 PM",
    duration: "60 Minutes",
    description:
      "Slow-paced yoga focusing on deep stretching, relaxation, mindfulness, and improving joint mobility.",
    image: "/images/yoga/yin.jpg",
  },

  {
    id: 6,
    name: "Morning Sunrise Yoga",
    level: "All Levels",
    instructor: "Sophia Green",
    price: "$18 / Class",
    monthly: "$70 / Month",
    schedule: "Saturday • 8:00 AM - 9:00 AM",
    duration: "60 Minutes",
    description:
      "Start your weekend feeling refreshed with gentle stretching, breathing exercises, and meditation.",
    image: "/images/yoga/sunrise.jpg",
  },

  {
    id: 7,
    name: "Restorative Yoga",
    level: "All Levels",
    instructor: "Olivia Wilson",
    price: "$22 / Class",
    monthly: "$80 / Month",
    schedule: "Sunday • 5:00 PM - 6:15 PM",
    duration: "75 Minutes",
    description:
      "A calming practice using props and gentle poses to reduce stress, promote healing, and restore both body and mind.",
    image: "/images/yoga/restorative.jpg",
  },

  {
    id: 8,
    name: "Family Yoga",
    level: "Kids & Adults",
    instructor: "Rachel Adams",
    price: "$30 / Family",
    monthly: "$110 / Month",
    schedule: "Saturday • 10:00 AM - 11:00 AM",
    duration: "60 Minutes",
    description:
      "A fun and interactive class designed for parents and children to enjoy yoga together while building flexibility, balance, and connection.",
    image: "/images/yoga/family.jpg",
  },
];

export default yogaClasses;
