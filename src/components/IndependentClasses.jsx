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
import luz from "../assets/instructors/luz.jpeg";
import Rodolfo from "../assets/instructors/Rodolfo.jpeg";

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
    phone: "702-555-0101",
    instagram: "luisdance",
    description:
      "Learn Cuban urban movement, musicality, and powerful Reparto combinations in a fun and welcoming environment.",
    image: luis,
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
    phone: "702-555-0102",
    instagram: "luzdance",
    description:
      "Build confidence, learn powerful movements, and have fun with energetic Twerk combinations.",
    image: luz,
    video: "https://cdn.coverr.co/videos/coverr-woman-dancing-1573/1080p.mp4",
  },

  {
    id: 3,
    day: "Saturday",
    date: "Every Saturday",
    title: "Reggaeton",
    time: "7:00 PM – 8:00 PM",
    instructor: "Eduardo",
    category: "Urban / Reggaeton",
    phone: "702-555-0103",
    instagram: "reggaetoninstructor",
    description:
      "Move to the rhythm and learn fun Reggaeton combinations in a welcoming environment.",
    image: edourdo,
    video: "https://cdn.coverr.co/videos/coverr-woman-dancing-1574/1080p.mp4",
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
    instagram: "hiphopinstructor",
    description:
      "Learn Hip-Hop fundamentals, combinations, musicality, and freestyle movement.",
    image: edourdo,
    video: "https://cdn.coverr.co/videos/coverr-dancing-1576/1080p.mp4",
  },

  {
    id: 5,
    day: "Sunday",
    date: "Every Sunday",
    title: "Reparto",
    time: "5:30 PM – 6:30 PM",
    instructor: "Luis",
    category: "Latin / Urban",
    phone: "702-555-0101",
    instagram: "luisdance",
    description:
      "Bring your energy and learn Reparto with Luis through fun combinations and musicality.",
    image: luis,
    video:
      "https://cdn.coverr.co/videos/coverr-dancing-in-a-club-1575/1080p.mp4",
  },

  {
    id: 6,
    day: "Thursday",
    date: "Every Thursday",
    title: "Salsa Rueda de Casino",
    time: "6:30 PM – 7:30 PM",
    instructor: "Rodolfo",
    category: "Salsa / Latin",
    phone: "702-591-6499",
    instagram: "https://www.instagram.com/law.soon7?igsi=MWd3OGFlMWwzaWdraw==",
    description:
      "Learn partner patterns, Cuban-style movements, timing, musicality, and energetic Rueda combinations.",
    image: Rodolfo,
    video:
      "https://cdn.coverr.co/videos/coverr-dancing-in-a-club-1575/1080p.mp4",
  },
];

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
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-md transition-shadow hover:shadow-xl"
    >
      {/* IMAGE */}

      <div className="relative aspect-[4/3] overflow-hidden bg-base-300">
        <img
          src={danceClass.image}
          alt={`${danceClass.title} with ${danceClass.instructor}`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        <div className="absolute left-4 top-4">
          <div className="badge badge-warning gap-2 border-0 px-3 py-3 font-bold shadow-lg">
            <Sparkles size={13} />
            Independent
          </div>
        </div>

        <button
          type="button"
          onClick={() => onVideo(danceClass)}
          className="btn btn-circle btn-primary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:opacity-100"
        >
          <Play size={20} fill="currentColor" />
        </button>

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/75">
            {danceClass.category}
          </p>

          <h3 className="mt-1 text-2xl font-black">{danceClass.title}</h3>
        </div>
      </div>

      {/* CONTENT */}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <CalendarDays size={17} />
            {danceClass.date}
          </div>

          <div className="flex items-center gap-2 text-sm text-base-content/60">
            <Clock size={17} />
            {danceClass.time}
          </div>
        </div>

        {/* Instructor */}

        <div className="mt-4 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Users size={17} />
          </div>

          <div>
            <p className="text-xs text-base-content/50">Instructor</p>

            <p className="font-bold">{danceClass.instructor}</p>
          </div>
        </div>

        {/* Description */}

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-base-content/60">
          {danceClass.description}
        </p>

        {/* Bottom */}

        <div className="mt-auto pt-6">
          <div className="mb-4 flex items-center gap-2 text-xs text-base-content/50">
            <MapPin size={14} />
            Freedom Dance Studio
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onLearnMore(danceClass)}
              className="btn btn-primary btn-sm gap-2"
            >
              Learn More
              <ArrowRight size={15} />
            </button>

            <a
              href={`tel:${danceClass.phone}`}
              className="btn btn-outline btn-sm gap-2"
            >
              <Phone size={15} />
              Call
            </a>
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

  return (
    <dialog open className="modal modal-open">
      <div className="modal-box max-h-[90vh] w-11/12 max-w-4xl overflow-y-auto p-0">
        <div className="relative bg-black">
          <video
            src={danceClass.video}
            controls
            autoPlay
            playsInline
            className="aspect-video w-full object-cover"
          />

          <button
            type="button"
            onClick={onClose}
            className="btn btn-circle btn-sm absolute right-3 top-3 border-0 bg-black/70 text-white hover:bg-black"
          >
            ✕
          </button>
        </div>

        <div className="p-5 sm:p-7">
          <div className="badge badge-warning mb-3">Independent Class</div>

          <h2 className="text-3xl font-black">{danceClass.title}</h2>

          <p className="mt-1 font-semibold text-primary">
            with {danceClass.instructor}
          </p>

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

          <p className="mt-5 leading-7 text-base-content/70">
            {danceClass.description}
          </p>

          <div className="mt-6 rounded-2xl bg-base-200 p-5">
            <p className="mb-3 font-bold">Contact {danceClass.instructor}</p>

            <div className="flex flex-wrap gap-2">
              <a
                href={`tel:${danceClass.phone}`}
                className="btn btn-primary btn-sm gap-2"
              >
                <Phone size={16} />
                {danceClass.phone}
              </a>

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

          <div className="alert alert-warning mt-5 text-sm">
            <Sparkles size={18} className="shrink-0" />

            <span>
              This is an independent class hosted at Freedom Dance Studio.
              Please contact the instructor for pricing and registration.
            </span>
          </div>

          <div className="mt-6 flex justify-end">
            <button type="button" onClick={onClose} className="btn">
              Close
            </button>
          </div>
        </div>
      </div>

      <div className="modal-backdrop" onClick={onClose} />
    </dialog>
  );
}

// ======================================================
// MAIN
// ======================================================

export default function IndependentClasses() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Monday", "Thursday", "Friday", "Saturday", "Sunday"];

  const filteredClasses =
    filter === "All"
      ? independentClasses
      : independentClasses.filter((danceClass) => danceClass.day === filter);

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
          {/* HEADER */}

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

          {/* NOTICE */}

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

          {/* FILTERS */}

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

          {/* COUNT */}

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

          {/* CARDS */}

          <motion.div
            layout
            className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
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
          MODALS
      ================================================== */}

      <VideoModal
        danceClass={selectedClass}
        onClose={() => setSelectedClass(null)}
      />

      <InstructorClassModal
        danceClass={selectedInstructor}
        onClose={() => setSelectedInstructor(null)}
      />
    </main>
  );
}
