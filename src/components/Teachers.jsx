import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CirclePlay,
  Clock3,
  ExternalLink,
  GraduationCap,
  Heart,
  Music2,
  Play,
  Sparkles,
  Star,
  Users,
  Video,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import steve from "../assets/instructors/steven.png";
import desmond from "../assets/instructors/desmond.jpg";
import adriana from "../assets/adriana.jpg";
import zagir from "../assets/lady/followerClip.jpeg";
import allyson from "../assets/ally3.jpg";
import alain from "../assets/sbkParty/FJ8A6437.jpg";

import { videos } from "../data/video";

// =====================================================
// INSTRUCTORS DATA
// =====================================================

const instructors = [
  {
    id: 1,
    name: "Stevenson",
    role: "Founder & Lead Dance Instructor",
    category: "Dance",
    featured: true,
    image: steve,
    specialties: ["Bachata Sensual", "UrbanKiz", "Salsa", "Konpa"],
    bio: "Founder of Freedom Dance Studio, dedicated to helping students develop confidence, musicality, connection, and strong dance fundamentals.",
    videoIds: [8, 7, 11],
    price: "$15",
    priceLabel: "Group class",
  },
  {
    id: 2,
    name: "Zagir",
    role: "Ladies Styling Instructor",
    category: "Dance",
    featured: false,
    image: zagir,
    specialties: [
      "Ladies Styling Bachata",
      "Body Movement",
      "Kids Latin Dance",
    ],
    bio: "Helping dancers develop elegance, confidence, musicality, and expressive movement through creative styling.",
    videoIds: [6],
    price: "$15",
    priceLabel: "Group class",
  },
  {
    id: 3,
    name: "Desmond",
    role: "Salsa Instructor",
    category: "Dance",
    featured: false,
    image: desmond,
    specialties: ["Salsa", "Partnerwork", "Musicality"],
    bio: "Bringing energy, technique, and a passion for salsa to help dancers improve their timing, fundamentals, and partner connection.",
    videoIds: [10],
    price: "$15",
    priceLabel: "Group class",
  },
  {
    id: 4,
    name: "Adriana",
    role: "Ladies Styling Instructor",
    category: "Dance",
    featured: false,
    image: adriana,
    specialties: ["Ladies Styling", "Body Movement", "Musicality"],
    bio: "Focused on helping dancers express themselves with elegance, confidence, and beautiful body movement.",
    videoIds: [6],
    price: "$15",
    priceLabel: "Group class",
  },
  {
    id: 5,
    name: "Alain",
    role: "Music Instructor & Band Leader",
    category: "Music",
    featured: false,
    image: alain,
    specialties: ["Live Music", "Jazz", "Band Rehearsals", "Performance"],
    bio: "Supporting musicians through ensemble rehearsals, musical development, and live performance preparation.",
    videoIds: [],
    price: "Free",
    priceLabel: "Band rehearsals",
  },
  {
    id: 6,
    name: "Allyson",
    role: "Assistant Dance Instructor",
    category: "Dance",
    featured: false,
    image: allyson,
    specialties: ["Bachata Sensual", "Partnerwork", "Student Support"],
    bio: "Creating a welcoming learning environment while helping dancers build confidence, connection, and partner dancing skills.",
    videoIds: [8],
    price: "$15",
    priceLabel: "Group class",
  },
];

// =====================================================
// YOUTUBE HELPERS
// =====================================================

const getYoutubeId = (url) => {
  if (!url) return "";

  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.toLowerCase();

    let id = "";

    if (hostname === "youtu.be" || hostname === "www.youtu.be") {
      id = parsed.pathname.split("/")[1];
    } else if (
      hostname === "youtube.com" ||
      hostname === "www.youtube.com" ||
      hostname === "m.youtube.com"
    ) {
      if (
        parsed.pathname.startsWith("/shorts/") ||
        parsed.pathname.startsWith("/embed/") ||
        parsed.pathname.startsWith("/live/")
      ) {
        id = parsed.pathname.split("/")[2];
      } else {
        id = parsed.searchParams.get("v");
      }
    }

    return /^[a-zA-Z0-9_-]{11}$/.test(id || "") ? id : "";
  } catch {
    return "";
  }
};

const getYoutubeThumbnail = (url) => {
  const id = getYoutubeId(url);

  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
};

const getYoutubeEmbedUrl = (url) => {
  const id = getYoutubeId(url);

  return id
    ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`
    : "";
};

const getInstructorVideos = (ids = []) =>
  ids.map((id) => videos.find((video) => video.id === id)).filter(Boolean);

// =====================================================
// VIDEO MODAL
// =====================================================

function VideoModal({ video, onClose }) {
  if (!video) return null;

  const embedUrl = getYoutubeEmbedUrl(video.url);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 sm:p-8"
      onClick={onClose}
      role="presentation"
    >
      <motion.div
        initial={{ scale: 0.94, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, opacity: 0 }}
        className="w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={video.title}
      >
        <div className="mb-4 flex items-center justify-between gap-4 text-white">
          <h3 className="text-lg font-bold sm:text-xl">{video.title}</h3>

          <button
            type="button"
            onClick={onClose}
            className="btn btn-circle btn-ghost text-white"
            aria-label="Close video"
          >
            <X size={24} />
          </button>
        </div>

        <div className="aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl">
          {embedUrl && (
            <iframe
              src={embedUrl}
              title={video.title}
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          )}
        </div>

        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:underline"
        >
          Watch on YouTube
          <ExternalLink size={16} />
        </a>
      </motion.div>
    </motion.div>
  );
}

// =====================================================
// INSTRUCTOR CARD
// =====================================================

function InstructorCard({ teacher, index, onBook, onPlay }) {
  const teacherVideos = getInstructorVideos(teacher.videoIds);

  const featuredVideo = teacherVideos[0];

  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const activeVideo = teacherVideos[activeVideoIndex] || featuredVideo;

  const nextVideo = () => {
    setActiveVideoIndex((current) => (current + 1) % teacherVideos.length);
  };

  const previousVideo = () => {
    setActiveVideoIndex(
      (current) => (current - 1 + teacherVideos.length) % teacherVideos.length,
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.08,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl"
    >
      {/* PORTRAIT AREA */}
      <div className="relative flex min-h-[230px] flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 px-6 pb-6 pt-9">
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

        {teacher.featured && (
          <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-primary-content shadow-md">
            <Star size={13} fill="currentColor" />
            Studio Founder
          </span>
        )}

        <span className="absolute right-5 top-5 rounded-full border border-base-300 bg-base-100/90 px-3 py-1.5 text-xs font-semibold shadow-sm">
          {teacher.category === "Music" ? "Music" : "Dance"}
        </span>

        <div className="relative">
          <div className="absolute -inset-3 rounded-full border border-primary/20" />

          <div className="h-36 w-36 overflow-hidden rounded-full border-4 border-base-100 bg-base-300 shadow-xl sm:h-40 sm:w-40">
            <img
              src={teacher.image}
              alt={`${teacher.name}, ${teacher.role}`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>

        <h3 className="mt-7 text-center text-2xl font-black tracking-tight">
          {teacher.name}
        </h3>

        <p className="mt-1 text-center text-sm font-semibold text-primary">
          {teacher.role}
        </p>
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-6">
        <p className="min-h-[72px] text-sm leading-6 text-base-content/70">
          {teacher.bio}
        </p>

        {/* SPECIALTIES */}
        <div className="mt-6">
          <div className="mb-3 flex items-center gap-2">
            <GraduationCap size={17} className="text-primary" />
            <h4 className="text-sm font-bold">Specialties</h4>
          </div>

          <div className="flex flex-wrap gap-2">
            {teacher.specialties.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-base-content"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* VIDEO PREVIEW */}
        <div className="mt-7">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="flex items-center gap-2 text-sm font-bold">
              <Video size={17} className="text-primary" />
              Featured Video
            </h4>

            {teacherVideos.length > 1 && (
              <span className="text-xs text-base-content/50">
                {activeVideoIndex + 1} / {teacherVideos.length}
              </span>
            )}
          </div>

          {activeVideo ? (
            <div>
              <button
                type="button"
                onClick={() => onPlay(activeVideo)}
                className="group/video relative block aspect-video w-full overflow-hidden rounded-2xl bg-neutral shadow-md"
                aria-label={`Play ${activeVideo.title}`}
              >
                <img
                  src={getYoutubeThumbnail(activeVideo.url)}
                  alt={activeVideo.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition-all duration-500 group-hover/video:scale-105 group-hover/video:opacity-70"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-content shadow-xl transition-transform duration-300 group-hover/video:scale-110">
                    <Play size={24} fill="currentColor" />
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-4 pb-4 pt-10 text-left">
                  <p className="line-clamp-2 text-sm font-semibold text-white">
                    {activeVideo.title}
                  </p>
                </div>
              </button>

              {teacherVideos.length > 1 && (
                <div className="mt-3 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={previousVideo}
                    className="btn btn-ghost btn-sm gap-1"
                  >
                    <ChevronLeft size={16} />
                    Previous
                  </button>

                  <div className="flex items-center gap-1.5">
                    {teacherVideos.map((video, i) => (
                      <button
                        type="button"
                        key={video.id}
                        onClick={() => setActiveVideoIndex(i)}
                        aria-label={`Show video ${i + 1}`}
                        className={`h-2 rounded-full transition-all ${
                          i === activeVideoIndex
                            ? "w-6 bg-primary"
                            : "w-2 bg-base-300"
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={nextVideo}
                    className="btn btn-ghost btn-sm gap-1"
                  >
                    Next
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex aspect-video flex-col items-center justify-center rounded-2xl border border-dashed border-base-300 bg-base-200/70 p-5 text-center">
              <Music2 size={28} className="mb-3 text-primary/60" />
              <p className="text-sm font-semibold">
                Performance Videos Coming Soon
              </p>
              <p className="mt-1 text-xs text-base-content/50">
                Stay tuned for live music and rehearsal highlights.
              </p>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="mt-auto pt-7">
          <div className="mb-4 flex items-center justify-between border-t border-base-200 pt-5">
            <div>
              <p className="text-xs text-base-content/50">Starting at</p>

              <p className="text-2xl font-black text-primary">
                {teacher.price}
              </p>
            </div>

            <span className="rounded-full bg-base-200 px-3 py-1.5 text-xs font-semibold">
              {teacher.priceLabel}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onBook(teacher)}
            className="btn btn-primary w-full gap-2 rounded-xl"
          >
            Book a Lesson
            <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

// =====================================================
// MAIN INSTRUCTORS COMPONENT
// =====================================================

export default function Instructors() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [activeVideo, setActiveVideo] = useState(null);

  const filteredInstructors = useMemo(() => {
    if (selectedCategory === "All") {
      return instructors;
    }

    return instructors.filter(
      (teacher) => teacher.category === selectedCategory,
    );
  }, [selectedCategory]);

  const handleInstructor = (teacher) => {
    navigate("/book", {
      state: {
        ...teacher,
        bookingType: "instructor",
      },
    });
  };

  return (
    <section
      id="instructors"
      className="min-h-screen bg-base-200 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================================
            HERO HEADER
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-14 overflow-hidden rounded-[2rem] border border-base-300 bg-base-100 px-6 py-14 text-center shadow-xl sm:px-12 sm:py-20"
        >
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative">
            <span className="badge badge-primary badge-lg mb-6 gap-2">
              <Sparkles size={15} />
              Freedom Dance Studio
            </span>

            <h1 className="mx-auto max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Meet the People Behind
              <span className="block text-primary">Your Dance Journey</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-base-content/70 sm:text-lg">
              Discover passionate instructors, explore their specialties, watch
              dance videos, and find the right teacher for your goals.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <span className="badge badge-outline gap-2 px-4 py-4">
                <Users size={15} />
                Welcoming Community
              </span>

              <span className="badge badge-outline gap-2 px-4 py-4">
                <Heart size={15} />
                Beginner Friendly
              </span>

              <span className="badge badge-outline gap-2 px-4 py-4">
                <GraduationCap size={15} />
                Personalized Learning
              </span>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            SECTION HEADING & FILTERS
        ========================================= */}

        <div className="mb-9 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Our Team
            </p>

            <h2 className="text-3xl font-black sm:text-4xl">
              Find Your Instructor
            </h2>

            <p className="mt-2 text-base-content/60">
              Learn more about our team and watch their dance and music videos.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["All", "Dance", "Music"].map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`btn btn-sm rounded-full px-5 ${
                  selectedCategory === category ? "btn-primary" : "btn-outline"
                }`}
              >
                {category === "All"
                  ? "All Instructors"
                  : category === "Dance"
                    ? "Dance Teachers"
                    : "Music"}
              </button>
            ))}
          </div>
        </div>

        {/* =========================================
            INSTRUCTORS GRID
        ========================================= */}

        <div className="grid items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3">
          {filteredInstructors.map((teacher, index) => (
            <InstructorCard
              key={teacher.id}
              teacher={teacher}
              index={index}
              onBook={handleInstructor}
              onPlay={setActiveVideo}
            />
          ))}
        </div>

        {/* =========================================
            PRIVATE LESSONS PROMOTION
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-20 overflow-hidden rounded-[2rem] bg-primary text-primary-content shadow-2xl"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:items-center lg:p-16">
            <div>
              <span className="badge badge-secondary mb-5">
                Private Dance Training
              </span>

              <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                Your Goals.
                <br />
                Your Pace.
                <br />
                Your Dance Journey.
              </h2>

              <p className="mt-5 max-w-lg leading-7 opacity-90">
                Whether you're learning your first steps, preparing for a
                special occasion, or improving your technique, personalized
                lessons can help you progress with confidence.
              </p>

              <button
                type="button"
                onClick={() => navigate("/membership")}
                className="btn btn-secondary mt-8 gap-2"
              >
                Explore Dance Packages
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <Heart size={30} className="mb-5" />

                <h3 className="text-lg font-bold">Couples Training</h3>

                <p className="mt-2 text-sm opacity-85">
                  Learn together, strengthen your connection, and enjoy partner
                  dancing.
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <GraduationCap size={30} className="mb-5" />

                <h3 className="text-lg font-bold">Beginner Friendly</h3>

                <p className="mt-2 text-sm opacity-85">
                  No previous dance experience is needed to begin your journey.
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <Clock3 size={30} className="mb-5" />

                <h3 className="text-lg font-bold">Flexible Scheduling</h3>

                <p className="mt-2 text-sm opacity-85">
                  Arrange private lessons according to participating instructor
                  availability.
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <Music2 size={30} className="mb-5" />

                <h3 className="text-lg font-bold">Multiple Dance Styles</h3>

                <p className="mt-2 text-sm opacity-85">
                  Explore Salsa, Bachata, Kizomba, Konpa, and more.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            FINAL CALL TO ACTION
        ========================================= */}

        <div className="mt-16 text-center">
          <div className="mb-4 flex justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Heart size={27} />
            </span>
          </div>

          <h2 className="text-2xl font-black sm:text-3xl">
            Every Great Dancer Starts Somewhere.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-base-content/70">
            Take the first step, meet our instructors, and become part of the
            Freedom Dance Studio community.
          </p>

          <button
            type="button"
            onClick={() => navigate("/book")}
            className="btn btn-primary mt-7 gap-2"
          >
            Start Dancing Today
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* =========================================
          VIDEO PLAYER MODAL
      ========================================= */}

      <AnimatePresence>
        {activeVideo && (
          <VideoModal
            key={activeVideo.id}
            video={activeVideo}
            onClose={() => setActiveVideo(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
