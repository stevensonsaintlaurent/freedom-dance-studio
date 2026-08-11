import steve from "../assets/stev.png";
import desmond from "../assets/desm.png";
import adriana from "../assets/adria.jpeg";
import zagir from "../assets/zag.png";

import { videos } from "./video";

// Find a YouTube video by title
const getVideo = (title) => {
  return videos.find(
    (video) => video.title.toLowerCase().trim() === title.toLowerCase().trim(),
  );
};

export const teachers = [
  {
    id: 1,
    name: "Stevens",
    role: "Instructor",
    bio: "Steven is a dynamic instructor specializing in Bachata, Kizomba, and Konpa dance styles. With a passion for music and movement, he also leads his own band and is an accomplished saxophonist. Steven’s unique blend of teaching expertise and musical prowess brings energy and creativity to every class and performance, making him a sought-after figure in both the dance and music communities.",
    style: "Partnerwork",
    discipline: "Kizomba, Konpa, Bachata and Band Leader",
    image: steve,
    href: "mailto:instructor2@example.com",

    // YouTube video from videos.js
    video: getVideo("Konpa")?.url || "",

    time: "Monday 6:00-9:00pm",
    level: "beginner",
    time2: "Wednesday 6:00-9:00pm",
    level2: "intermediate",
  },

  {
    id: 2,
    name: "Desmond",
    role: "Instructor",
    bio: "Desmond is a talented salsa instructor known for his vibrant teaching style and deep knowledge of Latin dance. With years of experience on the dance floor, he inspires students of all levels to move with confidence and rhythm. Desmond’s energetic classes and passion for salsa make him a respected and motivating presence in the dance community.",
    style: "Partnerwork",
    discipline: "Salsa on1",
    image: desmond,
    href: "mailto:instructor2@example.com",

    // YouTube video from videos.js
    video: getVideo("Salsa at Freedom Dance Studio")?.url || "",

    time: "Saturday 4:00-5:00pm",
    level: "beginner",
    time2: "Saturday 5:00-6:00pm",
    level2: "intermediate",
  },

  {
    id: 3,
    name: "Adriana",
    role: "Instructor",
    bio: "Adriana is an expert instructor specializing in Bachata Ladies Styling. Known for her graceful technique and empowering teaching methods, she helps dancers express themselves with confidence and elegance. Adriana’s classes are filled with inspiration and encouragement, making her a beloved mentor in the Bachata community.",
    style: "Bachata",
    discipline: "Ladies Styling",
    image: adriana,
    href: "mailto:instructor2@example.com",

    // YouTube video from videos.js
    video: getVideo("Ladies Styling Bachata")?.url || "",

    time: "Monday 6:00-7:00pm",
    level: "beginner",
  },

  {
    id: 4,
    name: "Zagir",
    role: "Instructor",
    bio: "Zagir is a skilled instructor specializing in Bachata Ladies Styling. Renowned for her expressive movements and supportive teaching approach, she empowers her students to dance with confidence and flair. Zagir’s classes foster both technique and self-expression, making her a respected and inspiring figure in the Bachata community.",
    style: "Bachata",
    discipline: "Ladies Styling",
    image: zagir,
    href: "mailto:instructor2@example.com",

    // YouTube video from videos.js
    video: getVideo("Ladies Styling Bachata")?.url || "",

    time: "Thursday 6:30-7:30pm",
    level: "beginner",
  },
];

export const discipline = [
  {
    id: 1,
    title: "Bachata",
    description:
      "We offer vibrant and engaging Bachata classes for all skill levels. Our experienced instructors guide you through the sensual rhythms and smooth movements of Bachata, focusing on connection, musicality, and technique. Whether you’re a complete beginner or looking to refine your style, our supportive community and welcoming atmosphere will help you gain confidence on the dance floor. Join us to experience the joy, passion, and freedom of Bachata!",
  },

  {
    id: 2,
    title: "Salsa",
    description:
      "We invite you to experience the energy and excitement of Salsa! Our Salsa classes are designed for dancers of all levels, from absolute beginners to seasoned enthusiasts. Learn fundamental steps, partner work, and dynamic turn patterns in a fun, supportive environment led by passionate instructors. At our studio, you’ll discover the infectious rhythms, vibrant culture, and social connection that make Salsa one of the world’s most popular dances.",
  },

  {
    id: 3,
    title: "Kizomba",
    description:
      "Kizomba is a popular dance originating from Angola. This beautiful partner dance combines smooth, flowing movements with rhythmic music, creating a unique and engaging experience for dancers of all levels. Our skilled instructors will guide you through the basic steps and techniques, helping you build confidence and develop your style. Join us for classes, workshops, and social events, where you can connect with others who share your passion for dance. Come dance with us and experience the joy of Kizomba!",
  },

  {
    id: 4,
    title: "Konpa",
    description:
      "We proudly offer Konpa classes, celebrating the vibrant rhythms and rich culture of this beloved Haitian partner dance. Our instructors will introduce you to the smooth steps, gentle hip movements, and unique musicality that define Konpa. Whether you’re just starting out or looking to refine your style, our supportive environment makes it easy to connect with others and enjoy the dance. Discover the warmth, joy, and community of Konpa at Freedom Dance Studio—where every class is a celebration of music and movement.",
  },
];
