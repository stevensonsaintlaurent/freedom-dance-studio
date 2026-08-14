import { Link } from "react-router-dom";
import { Play, ExternalLink } from "lucide-react";

import steve from "../assets/stevean.jpg";
import desmond from "../assets/desm.png";
import adriana from "../assets/adriana.jpg";
import zagir from "../assets/lady/followerClip.jpeg";
import allyson from "../assets/ally3.jpg";
import alain from "../assets/sbkParty/FJ8A6437.jpg";

// Make sure this path matches your project
import { videos } from "../data/video";

const instructors = [
  {
    name: "Stevenson",
    role: "Founder • Band Leader",
    specialties: ["Bachata", "Kizomba", "Konpa"],
    image: steve,
    bio: "Passionate dance instructor, performer, and band leader dedicated to helping students grow on and off the dance floor.",
    videoTitle: "Konpa",
  },
  {
    name: "Zagir",
    role: "Dance Instructor",
    specialties: ["Ladies Styling Bachata", "Kids Latin Dance"],
    image: zagir,
    bio: "Specializes in ladies styling, confidence, musicality, and inspiring young dancers through fun Latin dance classes.",
    videoTitle: "Ladies Styling Bachata",
  },
  {
    name: "Desmond",
    role: "Salsa Instructor",
    specialties: ["Salsa"],
    image: desmond,
    bio: "Brings energy, technique, and passion to every salsa class for students of all levels.",
    videoTitle: "Salsa at Freedom Dance Studio",
  },
  {
    name: "Adriana",
    role: "Dance Instructor",
    specialties: ["Ladies Styling"],
    image: adriana,
    bio: "Focused on elegance, confidence, body movement, and styling for social dancers.",
    videoTitle: "Ladies Styling Bachata",
  },
  {
    name: "Alain",
    role: "Band Leader",
    specialties: ["Live Music", "Performance"],
    image: alain,
    bio: "Leads the Freedom Dance Studio band, bringing live Latin music to socials and special events.",
    videoTitle: "Konpa",
  },
  {
    name: "Allyson",
    role: "Assistant Instructor",
    specialties: ["Bachata", "Student Support"],
    image: allyson,
    bio: "Assists classes, encourages new dancers, and helps create a welcoming learning environment.",
    videoTitle:
      "Bachata Sensual at Freedom Dance Studio | Connection, Musicality & Expression",
  },
];

// Convert YouTube URL to embed URL
const getYoutubeEmbedUrl = (url) => {
  if (!url) return "";

  try {
    const parsedUrl = new URL(url);

    let videoId = "";

    // https://youtu.be/VIDEO_ID
    if (parsedUrl.hostname === "youtu.be") {
      videoId = parsedUrl.pathname.replace("/", "");
    }

    // https://www.youtube.com/watch?v=VIDEO_ID
    if (parsedUrl.hostname.includes("youtube.com")) {
      videoId = parsedUrl.searchParams.get("v");
    }

    if (!videoId) {
      return "";
    }

    return `https://www.youtube.com/embed/${videoId}`;
  } catch (error) {
    console.error("Invalid YouTube URL:", url);
    return "";
  }
};

// Find a video from data/videos.js
const findVideo = (title) => {
  return videos.find(
    (video) => video.title.toLowerCase().trim() === title.toLowerCase().trim(),
  );
};

export default function Instructors() {
  return (
    <section id="instructors" className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-primary">
            Meet Our Instructors
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-base-content/70">
            Our experienced instructors are passionate about helping every
            student build confidence, improve technique, and enjoy the art of
            Latin dance.
          </p>
        </div>

        {/* INSTRUCTORS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {instructors.map((teacher) => {
            const teacherVideo = findVideo(teacher.videoTitle);

            return (
              <div
                key={teacher.name}
                className="
                  card
                  bg-base-100
                  shadow-xl
                  hover:shadow-2xl
                  transition
                  duration-300
                  overflow-hidden
                "
              >
                {/* IMAGE */}
                <figure className="pt-8">
                  <div className="avatar">
                    <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img src={teacher.image} alt={teacher.name} />
                    </div>
                  </div>
                </figure>

                {/* INFORMATION */}
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-2xl">{teacher.name}</h3>

                  <p className="text-primary font-semibold">{teacher.role}</p>

                  <p className="text-sm text-base-content/70">{teacher.bio}</p>

                  {/* SPECIALTIES */}
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {teacher.specialties.map((skill) => (
                      <span
                        key={skill}
                        className="badge badge-primary badge-outline"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* YOUTUBE VIDEO */}
                  {teacherVideo && (
                    <div className="w-full mt-6">
                      <h4 className="font-semibold mb-3">
                        🎬 {teacherVideo.title}
                      </h4>

                      <div className="relative aspect-video overflow-hidden rounded-xl bg-black shadow-lg">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={getYoutubeEmbedUrl(teacherVideo.url)}
                          title={teacherVideo.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  )}

                  {/* BUTTONS */}
                  <div className="card-actions mt-6 flex-wrap justify-center">
                    <Link to="/schedule" className="btn btn-primary">
                      Book a Lesson
                    </Link>

                    {teacherVideo && (
                      <a
                        href={teacherVideo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline gap-2"
                      >
                        <Play size={17} fill="currentColor" />
                        YouTube
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="alert alert-info shadow-lg max-w-3xl mx-auto">
            <span>
              💃 Ready to start dancing? Join a class with one of our talented
              instructors today!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
