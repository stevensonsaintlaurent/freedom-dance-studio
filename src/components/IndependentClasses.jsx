import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
  Phone,
  Play,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import KarolActingClasses from "./KarolActingClasses";
import InstructorClassModal from "./InstructorClassModal";

// ======================================================
// IMAGES
// ======================================================

import edourdo from "../assets/instructors/edourdo.jpg";
import luis from "../assets/instructors/luis1.jpg";
import luz from "../assets/instructors/luz.png";
import Rodolfo from "../assets/instructors/Rodolfo.jpeg";
import Sandra from "../assets/instructors/sandra2.jpeg";

// ======================================================
// INDEPENDENT CLASSES
// ======================================================

const independentClasses = [
  {
    id: 1,
    day: "Monday",
    date: "Every Monday",
    title: "Reparto",
    time: "5:00 PM – 6:00 PM",
    instructor: "Luis",
    category: "Latin / Urban",
    phone: "+1 (786) 979-5525",
    instagram:
      "https://www.instagram.com/luisi_veliz_dancer?stkn=MXdmbWk1cTI2NjZ5MQ==",
    description:
      "Learn Cuban urban movement, musicality, and powerful Reparto combinations in a fun and welcoming environment.",
    image: luis,
    video: "https://youtu.be/2IaBcV1tRcw?si=YkE_gEwWzxUGO_0X",
  },
  {
    id: 7,
    day: "Wednesday",
    date: "Every Wednesday",
    title: "Salsalogía Training",
    time: "6:00 PM – 7:00 PM",
    instructor: "Sandra",
    category: "Salsa / Latin",
    phone: "+1 (702) 449-2040",
    instagram: "",
    description:
      "An intensive Salsa On2 class focused on mambo footwork, timing, technique, styling, presence, expression, and joy. Each 4-week session builds choreography while keeping a strong foundation in Salsa On2 fundamentals.",
    image: Sandra,
    video: "",
  },
  {
    id: 6,
    day: "Thursday",
    date: "Every Thursday",
    title: "Salsa Rueda de Casino",
    time: "6:30 PM – 7:30 PM",
    instructor: "Rodolfo",
    category: "Salsa / Latin",
    phone: "+1 (702) 472-3424",
    instagram: "",
    description:
      "Learn partner patterns, Cuban-style movements, timing, musicality, and energetic Rueda combinations.",
    image: Rodolfo,
    video:
      "https://cdn.coverr.co/videos/coverr-dancing-in-a-club-1575/1080p.mp4",
  },

  {
    id: 2,
    day: "Friday",
    date: "Every Friday",
    title: "Twerk",
    time: "6:30 PM – 8:30 PM",
    instructor: "Luz",
    category: "Urban / Fitness",
    phone: "+1 (725) 247-9390",
    instagram: "",
    description:
      "Build confidence, learn powerful movements, and have fun with energetic Twerk combinations.",
    image: luz,
    video: "https://youtu.be/7z2epLsOyrY",
  },

  {
    id: 3,
    day: "Saturday",
    date: "Every Saturday",
    title: "Reggaeton",
    time: "7:00 PM – 8:00 PM",
    instructor: "Eduardo",
    category: "Urban / Reggaeton",
    phone: "+1 (562) 325-4115",
    instagram: "",
    description:
      "Move to the rhythm and learn fun Reggaeton combinations in a welcoming environment.",
    image: edourdo,
    video: "https://youtu.be/FBbGFDKIMdQ?si=T_jDehxqFwSAi0gC",
  },

  {
    id: 4,
    day: "Sunday",
    date: "Every Sunday",
    title: "Hip-Hop",
    time: "6:30 PM",
    instructor: "Eduardo",
    category: "Hip-Hop / Urban",
    phone: "702-555-0104",
    instagram: "",
    description:
      "Learn Hip-Hop fundamentals, combinations, musicality, and freestyle movement.",
    image: edourdo,
    video: "https://youtu.be/FBbGFDKIMdQ?si=T_jDehxqFwSAi0gC",
  },

  {
    id: 5,
    day: "Sunday",
    date: "Every Sunday",
    title: "Reparto",
    time: "5:30 PM – 6:30 PM",
    instructor: "Luis",
    category: "Latin / Urban",
    phone: "+1 (786) 979-5525",
    instagram:
      "https://www.instagram.com/luisi_veliz_dancer?stkn=MXdmbWk1cTI2NjZ5MQ==",
    description:
      "Bring your energy and learn Reparto with Luis through fun combinations and musicality.",
    image: luis,
    video: "https://youtu.be/2IaBcV1tRcw?si=OsL5zUY1rKtA7nBI",
  },
];

// ======================================================
// VIDEO HELPERS
// ======================================================

/**
 * Returns true when the supplied URL is a YouTube URL.
 */
function isYouTubeUrl(url) {
  if (!url) return false;

  return (
    url.includes("youtube.com") ||
    url.includes("youtu.be") ||
    url.includes("youtube-nocookie.com")
  );
}

/**
 * Converts normal YouTube URLs into an iframe embed URL.
 *
 * Supports:
 * - https://youtu.be/VIDEO_ID
 * - https://www.youtube.com/watch?v=VIDEO_ID
 * - https://www.youtube.com/embed/VIDEO_ID
 */
function getYouTubeEmbedUrl(url) {
  if (!url) return null;

  try {
    const parsed = new URL(url);

    let videoId = "";

    // --------------------------------------------
    // youtu.be/VIDEO_ID
    // --------------------------------------------
    if (parsed.hostname === "youtu.be") {
      videoId = parsed.pathname.replace(/^\/+/, "");
    }

    // --------------------------------------------
    // youtube.com/watch?v=VIDEO_ID
    // --------------------------------------------
    else if (
      parsed.hostname.includes("youtube.com") ||
      parsed.hostname.includes("youtube-nocookie.com")
    ) {
      if (parsed.pathname.startsWith("/watch")) {
        videoId = parsed.searchParams.get("v") || "";
      }

      // Already an embed URL
      else if (parsed.pathname.startsWith("/embed/")) {
        videoId = parsed.pathname.replace("/embed/", "").split("/")[0];
      }

      // YouTube shorts
      else if (parsed.pathname.startsWith("/shorts/")) {
        videoId = parsed.pathname.replace("/shorts/", "").split("/")[0];
      }
    }

    if (!videoId) return null;

    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
  } catch {
    return null;
  }
}

// ======================================================
// CLASS CARD
// ======================================================

function ClassCard({ danceClass, onVideo, onLearnMore }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      whileHover={{ y: -5 }}
      className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-base-300/70 bg-base-100 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-2xl"
    >
      {/* ==================================================
          INSTRUCTOR PHOTO
      ================================================== */}

      <div className="relative h-[330px] overflow-hidden bg-base-200 sm:h-[350px]">
        {/* Soft background */}
        <div className="absolute inset-0 bg-gradient-to-br from-base-300 via-base-200 to-base-300" />

        {/* Instructor image */}
        <div className="absolute inset-3 overflow-hidden rounded-[1.5rem] bg-base-100">
          <img
            src={danceClass.image}
            alt={`${danceClass.title} with ${danceClass.instructor}`}
            className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
        </div>

        {/* Independent badge */}
        <div className="absolute left-6 top-6 z-10">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-3.5 py-2 text-xs font-bold text-white shadow-lg backdrop-blur-md">
            <Sparkles size={13} />
            Independent Instructor
          </div>
        </div>

        {/* Video button */}
        {danceClass.video && (
          <button
            type="button"
            onClick={() => onVideo(danceClass)}
            aria-label={`Watch ${danceClass.title} video`}
            className="absolute bottom-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-content"
          >
            <Play size={18} fill="currentColor" />
          </button>
        )}
      </div>

      {/* ==================================================
          CONTENT
      ================================================== */}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Category */}
        <div className="mb-2">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">
            {danceClass.category}
          </span>
        </div>

        {/* Class + Instructor */}
        <div>
          <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
            {danceClass.title}
          </h3>

          <div className="mt-1 flex items-center gap-2">
            <Users size={16} className="text-primary" />

            <p className="font-semibold text-base-content/70">
              with {danceClass.instructor}
            </p>
          </div>
        </div>

        {/* Schedule */}
        <div className="mt-5 space-y-2.5 rounded-2xl bg-base-200/70 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <CalendarDays size={17} />
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-base-content/40">
                Schedule
              </p>

              <p className="text-sm font-semibold">{danceClass.date}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Clock size={17} />
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-base-content/40">
                Time
              </p>

              <p className="text-sm font-semibold">{danceClass.time}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-base-content/60">
          {danceClass.description}
        </p>

        {/* Bottom */}
        <div className="mt-auto pt-6">
          <div className="mb-4 flex items-center gap-2 text-xs font-medium text-base-content/45">
            <MapPin size={14} />
            Freedom Dance Studio
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => onLearnMore(danceClass)}
              className="btn btn-primary btn-sm rounded-xl gap-2"
            >
              Learn More
              <ArrowRight size={15} />
            </button>

            {danceClass.phone ? (
              <a
                href={`tel:${danceClass.phone}`}
                className="btn btn-outline btn-sm rounded-xl gap-2"
              >
                <Phone size={15} />
                Call
              </a>
            ) : (
              <button
                type="button"
                onClick={() => onLearnMore(danceClass)}
                className="btn btn-outline btn-sm rounded-xl"
              >
                Details
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ======================================================
// VIDEO MODAL
// ======================================================

function VideoModal({ danceClass, onClose }) {
  if (!danceClass) return null;

  const youtubeEmbedUrl = getYouTubeEmbedUrl(danceClass.video);

  const isYouTube = isYouTubeUrl(danceClass.video);

  return (
    <dialog open className="modal modal-open">
      <div className="modal-box max-h-[92vh] w-11/12 max-w-5xl overflow-y-auto p-0">
        {/* ==================================================
            VIDEO
        ================================================== */}

        <div className="relative overflow-hidden bg-black">
          {youtubeEmbedUrl ? (
            /* ------------------------------------------------
               YOUTUBE
            ------------------------------------------------ */
            <div className="aspect-video w-full">
              <iframe
                src={youtubeEmbedUrl}
                title={`${danceClass.title} with ${danceClass.instructor}`}
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : danceClass.video && !isYouTube ? (
            /* ------------------------------------------------
               DIRECT VIDEO / MP4
            ------------------------------------------------ */
            <video
              src={danceClass.video}
              controls
              autoPlay
              playsInline
              className="aspect-video w-full object-contain"
            />
          ) : (
            /* ------------------------------------------------
               NO VIDEO
            ------------------------------------------------ */
            <div className="flex aspect-video items-center justify-center text-white">
              <div className="text-center">
                <Play className="mx-auto mb-3 opacity-50" size={40} />

                <p className="font-semibold">No video available</p>
              </div>
            </div>
          )}

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="btn btn-circle btn-sm absolute right-3 top-3 z-20 border-0 bg-black/75 text-white shadow-lg hover:bg-black"
          >
            <X size={17} />
          </button>
        </div>

        {/* ==================================================
            VIDEO INFORMATION
        ================================================== */}

        <div className="p-5 sm:p-7">
          {/* Badge */}
          <div className="badge badge-warning mb-3">Independent Class</div>

          {/* Title */}
          <h2 className="text-3xl font-black sm:text-4xl">
            {danceClass.title}
          </h2>

          {/* Instructor */}
          <p className="mt-1 font-semibold text-primary">
            with {danceClass.instructor}
          </p>

          {/* Schedule */}
          <div className="mt-5 flex flex-wrap gap-2">
            <div className="badge badge-outline gap-2 px-3 py-3">
              <CalendarDays size={14} />
              {danceClass.date}
            </div>

            <div className="badge badge-outline gap-2 px-3 py-3">
              <Clock size={14} />
              {danceClass.time}
            </div>
          </div>

          {/* Description */}
          <p className="mt-5 leading-7 text-base-content/70">
            {danceClass.description}
          </p>

          {/* Contact */}
          <div className="mt-6 rounded-2xl bg-base-200 p-5">
            <p className="mb-3 font-bold">Contact {danceClass.instructor}</p>

            <div className="flex flex-wrap gap-2">
              {danceClass.phone && (
                <a
                  href={`tel:${danceClass.phone}`}
                  className="btn btn-primary btn-sm gap-2"
                >
                  <Phone size={16} />
                  {danceClass.phone}
                </a>
              )}

              {danceClass.instagram && (
                <a
                  href={
                    danceClass.instagram.startsWith("http")
                      ? danceClass.instagram
                      : `https://instagram.com/${danceClass.instagram}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm gap-2"
                >
                  <BsInstagram size={16} />
                  Instagram
                </a>
              )}
            </div>
          </div>

          {/* Independent notice */}
          <div className="alert alert-warning mt-5 text-sm">
            <Sparkles size={18} className="shrink-0" />

            <span>
              This is an independent class hosted at Freedom Dance Studio.
              Please contact the instructor for pricing and registration.
            </span>
          </div>

          {/* Close */}
          <div className="mt-6 flex justify-end">
            <button type="button" onClick={onClose} className="btn">
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div className="modal-backdrop" onClick={onClose} />
    </dialog>
  );
}

// ======================================================
// MAIN COMPONENT
// ======================================================

export default function IndependentClasses() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [filter, setFilter] = useState("All");

  // ====================================================
  // FILTERS
  // ====================================================

  const filters = [
    "All",
    "Monday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const filteredClasses =
    filter === "All"
      ? independentClasses
      : independentClasses.filter((danceClass) => danceClass.day === filter);

  // ====================================================
  // RENDER
  // ====================================================

  return (
    <main className="min-h-screen bg-base-200">
      {/* ==================================================
          KAROL FEATURE
      ================================================== */}

      <KarolActingClasses />

      {/* ==================================================
          INDEPENDENT CLASSES
      ================================================== */}

      <section className="px-4 pb-14 pt-0 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* ==================================================
              HEADER
          ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="badge badge-primary gap-2 px-4 py-4">
              <Sparkles size={15} />
              Hosted at Freedom Dance Studio
            </div>

            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              More Ways to <span className="text-primary">Dance</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-base-content/60 sm:text-lg">
              Discover classes created and taught by independent instructors who
              use Freedom Dance Studio as their home for teaching.
            </p>
          </motion.div>

          {/* ==================================================
              NOTICE
          ================================================== */}

          <div className="mx-auto mt-8 max-w-4xl">
            <div className="alert border border-primary/10 bg-base-100 shadow-sm">
              <Sparkles size={20} className="shrink-0 text-primary" />

              <div>
                <h3 className="font-bold">Independent Instructors</h3>

                <p className="mt-1 text-sm leading-6 text-base-content/60">
                  These classes are independently organized by the instructors
                  and hosted at Freedom Dance Studio. Contact each instructor
                  directly for registration, pricing, and class details.
                </p>
              </div>
            </div>
          </div>

          {/* ==================================================
              FILTERS
          ================================================== */}

          <div className="mt-8">
            {/* MOBILE */}
            <div className="sm:hidden">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="select select-primary w-full bg-base-100 shadow-sm"
              >
                {filters.map((day) => (
                  <option key={day} value={day}>
                    {day === "All" ? "All Days" : day}
                  </option>
                ))}
              </select>
            </div>

            {/* DESKTOP */}
            <div className="hidden justify-center sm:flex">
              <div className="join rounded-xl shadow-sm">
                {filters.map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setFilter(day)}
                    className={`btn join-item ${
                      filter === day ? "btn-primary" : "btn-ghost bg-base-100"
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ==================================================
              COUNT
          ================================================== */}

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm font-medium text-base-content/50">
              {filteredClasses.length}{" "}
              {filteredClasses.length === 1 ? "class" : "classes"} available
            </p>

            {filter !== "All" && (
              <button
                type="button"
                onClick={() => setFilter("All")}
                className="btn btn-ghost btn-sm"
              >
                Show All
              </button>
            )}
          </div>

          {/* ==================================================
              CARDS
          ================================================== */}

          <motion.div
            layout
            className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {filteredClasses.map((danceClass) => (
              <ClassCard
                key={danceClass.id}
                danceClass={danceClass}
                onVideo={setSelectedClass}
                onLearnMore={setSelectedInstructor}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          FINAL CTA
      ================================================== */}

      <section className="px-4 pb-0 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl overflow-hidden rounded-t-[2rem] bg-gradient-to-br from-primary to-secondary shadow-2xl"
        >
          <div className="px-6 py-12 text-center text-primary-content sm:px-10">
            <Sparkles className="mx-auto h-8 w-8" />

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Find Your Rhythm
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 opacity-90 sm:text-base">
              Explore independent classes, connect with instructors, and
              discover new ways to enjoy dance at Freedom Dance Studio.
            </p>

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn btn-neutral rounded-full px-7">
                Contact Us
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/schedule"
                className="btn btn-outline rounded-full border-white/40 text-white hover:border-white hover:bg-white hover:text-primary"
              >
                View Schedule
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ==================================================
          VIDEO MODAL
      ================================================== */}

      <VideoModal
        danceClass={selectedClass}
        onClose={() => setSelectedClass(null)}
      />

      {/* ==================================================
          INSTRUCTOR MODAL
      ================================================== */}

      <InstructorClassModal
        danceClass={selectedInstructor}
        onClose={() => setSelectedInstructor(null)}
      />
    </main>
  );
}
