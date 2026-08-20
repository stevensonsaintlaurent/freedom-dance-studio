import { useState } from "react";
import {
  CalendarDays,
  Clock,
  MapPin,
  Play,
  Users,
  ArrowRight,
  Sparkles,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";

// ====================== Pictures ======================
import edourdo from "../assets/instructors/edourdo.jpg";
import luis from "../assets/instructors/luis1.jpg";
import luz from "../assets/instructors/luz.jpg";
import rodolfo from "../assets/rodolfo.png";

// ====================== Independent Classes ======================
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
      "Bring your energy and learn Reparto with Luis in a fun and high-energy class.",

    image: luis,
    imageFit: "cover",

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
      "Turn up the energy with Luz and learn confidence, movement, and powerful twerk combinations.",

    image: luz,
    imageFit: "cover",

    video: "https://cdn.coverr.co/videos/coverr-woman-dancing-1573/1080p.mp4",
  },

  {
    id: 3,
    day: "Saturday",
    date: "Every Saturday",
    title: "Reggaeton",
    time: "7:00 PM – 8:00 PM",
    instructor: "Guest Instructor",
    category: "Urban / Reggaeton",

    phone: "702-555-0103",
    instagram: "reggaetoninstructor",

    description:
      "Move to the rhythm and learn fun Reggaeton combinations in a welcoming environment.",

    image: edourdo,
    imageFit: "cover",

    video: "https://cdn.coverr.co/videos/coverr-woman-dancing-1574/1080p.mp4",
  },

  {
    id: 4,
    day: "Sunday",
    date: "Every Sunday",
    title: "Hip-Hop",
    time: "6:30 PM",
    instructor: "Guest Instructor",
    category: "Hip-Hop / Urban",

    phone: "702-555-0104",
    instagram: "hiphopinstructor",

    description:
      "Learn Hip-Hop fundamentals, combinations, and freestyle movement in a fun atmosphere.",

    image: edourdo,
    imageFit: "cover",

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
      "Bring your energy and learn Reparto with Luis in a fun and high-energy class.",

    image: luis,
    imageFit: "cover",

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

    phone: "",
    instagram: "",

    description:
      "Join Rodolfo every Thursday for Salsa Rueda de Casino. Learn fun partner patterns, Cuban-style movements, and energetic rueda combinations in a welcoming and exciting class.",

    image: rodolfo,

    // Keep the entire promotional poster visible.
    imageFit: "contain",

    video:
      "https://cdn.coverr.co/videos/coverr-dancing-in-a-club-1575/1080p.mp4",
  },
];

// ====================== Class Card ======================
function ClassCard({ danceClass, onVideo }) {
  const isContain = danceClass.imageFit === "contain";

  return (
    <div className="group card bg-base-100 shadow-xl border border-base-300 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl h-full">
      {/* ================= IMAGE ================= */}
      <div
        className={`relative aspect-[4/3] overflow-hidden ${
          isContain ? "bg-neutral" : "bg-base-300"
        }`}
      >
        <img
          src={danceClass.image}
          alt={`${danceClass.title} with ${danceClass.instructor}`}
          className={`w-full h-full transition-transform duration-700 ${
            isContain
              ? "object-contain"
              : "object-cover object-center group-hover:scale-105"
          }`}
        />

        {/* Gradient only for normal photos */}
        {!isContain && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
        )}

        {/* Poster overlay */}
        {isContain && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        )}

        {/* Independent Badge */}
        <div className="absolute top-3 left-3 right-3">
          <div className="badge badge-warning gap-2 py-4 px-3 font-semibold shadow-lg max-w-full">
            <Sparkles size={14} className="shrink-0" />
            <span className="truncate">Independent Class</span>
          </div>
        </div>

        {/* Play Button */}
        <button
          onClick={() => onVideo(danceClass)}
          className="absolute inset-0 m-auto btn btn-circle btn-lg btn-primary opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-xl"
          aria-label={`Watch ${danceClass.title} video`}
        >
          <Play size={25} fill="currentColor" />
        </button>

        {/* Title */}
        {!isContain && (
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-sm font-medium opacity-90">
              {danceClass.category}
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
              {danceClass.title}
            </h3>
          </div>
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="card-body p-5 sm:p-6">
        {/* Date */}
        <div className="flex items-start gap-2 text-primary font-semibold">
          <CalendarDays size={18} className="shrink-0 mt-0.5" />

          <span>{danceClass.date}</span>
        </div>

        {/* Time / Instructor */}
        <div className="flex flex-wrap gap-2 mt-2">
          <div className="badge badge-outline gap-2 py-3 px-3 max-w-full">
            <Clock size={14} className="shrink-0" />

            <span className="truncate">{danceClass.time}</span>
          </div>

          <div className="badge badge-outline gap-2 py-3 px-3 max-w-full">
            <Users size={14} className="shrink-0" />

            <span className="truncate">{danceClass.instructor}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-base-content/70 mt-3 leading-relaxed">
          {danceClass.description}
        </p>

        {/* Instructor Contact */}
        <div className="mt-4 p-4 rounded-xl bg-base-200">
          <p className="text-sm font-semibold mb-3">
            Contact {danceClass.instructor}
          </p>

          <div className="flex flex-wrap gap-2">
            {danceClass.phone && (
              <a
                href={`tel:${danceClass.phone}`}
                className="btn btn-sm btn-outline gap-2"
              >
                <Phone size={15} />
                Call
              </a>
            )}

            {danceClass.instagram && (
              <a
                href={`https://instagram.com/${danceClass.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline gap-2"
              >
                <BsInstagram size={15} />
                Instagram
              </a>
            )}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-4">
          <div className="flex items-center gap-1.5 text-sm text-base-content/60">
            <MapPin size={16} className="shrink-0" />

            <span>Freedom Dance Studio</span>
          </div>

          <button
            onClick={() => onVideo(danceClass)}
            className="btn btn-primary btn-sm gap-2 w-full sm:w-auto"
          >
            Learn More
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ====================== Video Modal ======================
function VideoModal({ danceClass, onClose }) {
  if (!danceClass) return null;

  return (
    <dialog open className="modal modal-open">
      <div className="modal-box w-11/12 max-w-4xl p-0 overflow-hidden">
        {/* Video */}
        <div className="relative">
          <video
            src={danceClass.video}
            controls
            autoPlay
            playsInline
            className="w-full aspect-video object-cover bg-black"
          />

          <button
            onClick={onClose}
            className="btn btn-circle btn-sm absolute top-3 right-3 bg-black/60 text-white border-none hover:bg-black/80"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Information */}
        <div className="p-5 sm:p-6">
          <div className="badge badge-warning mb-3">Independent Class</div>

          <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
            {danceClass.title}
          </h3>

          <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
            <div className="badge badge-outline py-3 px-3">
              <CalendarDays size={14} className="mr-2 shrink-0" />
              {danceClass.date}
            </div>

            <div className="badge badge-outline py-3 px-3">
              <Clock size={14} className="mr-2 shrink-0" />
              {danceClass.time}
            </div>

            <div className="badge badge-outline py-3 px-3">
              <Users size={14} className="mr-2 shrink-0" />
              {danceClass.instructor}
            </div>
          </div>

          <p className="mt-5 text-base-content/70 leading-relaxed">
            {danceClass.description}
          </p>

          {/* Instructor Contact */}
          <div className="mt-6 p-4 sm:p-5 rounded-xl bg-base-200">
            <h4 className="font-bold text-lg mb-3">
              Contact {danceClass.instructor}
            </h4>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              {danceClass.phone && (
                <a
                  href={`tel:${danceClass.phone}`}
                  className="btn btn-primary gap-2"
                >
                  <Phone size={18} />
                  {danceClass.phone}
                </a>
              )}

              {danceClass.instagram && (
                <a
                  href={`https://instagram.com/${danceClass.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline gap-2"
                >
                  <Instagram size={18} />@{danceClass.instagram}
                </a>
              )}
            </div>
          </div>

          {/* Notice */}
          <div className="alert alert-warning mt-5">
            <Sparkles size={20} className="shrink-0" />

            <span>
              This is an independent class hosted at Freedom Dance Studio.
              Please contact the instructor for class-specific information,
              pricing, and registration.
            </span>
          </div>

          <div className="modal-action">
            <button onClick={onClose} className="btn">
              Close
            </button>
          </div>
        </div>
      </div>

      <div className="modal-backdrop" onClick={onClose} />
    </dialog>
  );
}

// ====================== Main Component ======================
export default function IndependentClasses() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [filter, setFilter] = useState("All");

  // Thursday was missing before.
  const filters = ["All", "Monday", "Thursday", "Friday", "Saturday", "Sunday"];

  const filteredClasses =
    filter === "All"
      ? independentClasses
      : independentClasses.filter((danceClass) => danceClass.day === filter);

  return (
    <section className="py-16 sm:py-20 bg-base-200">
      <div className="container mx-auto px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="badge badge-primary badge-lg mb-4 gap-2">
            <Sparkles size={15} />
            Hosted at Freedom Dance Studio
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 leading-tight">
            More Ways to <span className="text-primary">Dance</span>
          </h2>

          <p className="text-base sm:text-lg text-base-content/70 leading-relaxed">
            Discover independent dance classes hosted at Freedom Dance Studio.
            These classes are organized by individual instructors, while Freedom
            Dance Studio helps provide the space and promote the classes to our
            community.
          </p>
        </div>

        {/* ================= NOTICE ================= */}
        <div className="alert shadow-lg max-w-4xl mx-auto mb-10 sm:mb-12">
          <Sparkles size={22} className="text-primary shrink-0" />

          <div>
            <h3 className="font-bold">Independent Classes at Freedom</h3>

            <p className="text-sm text-base-content/70 mt-1">
              These classes are not official Freedom Dance Studio classes. They
              are independently organized by the instructors and hosted at our
              studio.
            </p>
          </div>
        </div>

        {/* ================= FILTERS ================= */}

        {/* Mobile Select */}
        <div className="sm:hidden mb-8">
          <label className="block text-sm font-semibold mb-2">
            Select a day
          </label>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="select select-primary w-full bg-base-100 shadow-md"
          >
            {filters.map((item) => (
              <option key={item} value={item}>
                {item === "All" ? "All Days" : item}
              </option>
            ))}
          </select>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex justify-center mb-10 overflow-x-auto">
          <div className="join shadow-md">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`btn join-item ${
                  filter === item ? "btn-primary" : "btn-ghost bg-base-100"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* ================= CLASSES ================= */}
        <div
          key={filter}
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            2xl:grid-cols-4
            gap-5
            lg:gap-6
          "
        >
          {filteredClasses.map((danceClass, index) => (
            <div
              key={danceClass.id}
              className="animate-[fadeInUp_0.5s_ease-out]"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <ClassCard danceClass={danceClass} onVideo={setSelectedClass} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredClasses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-base-content/60">
              No classes available for this day.
            </p>
          </div>
        )}

        {/* ================= BOTTOM CTA ================= */}
        <div className="mt-14 sm:mt-16">
          <div className="hero bg-primary text-primary-content rounded-3xl shadow-2xl overflow-hidden">
            <div className="hero-content text-center py-10 sm:py-12 px-5 sm:px-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-black">
                  Find Your Rhythm
                </h2>

                <p className="py-4 opacity-90">
                  Whether you're into Reparto, Twerk, Reggaeton, or Hip-Hop,
                  there's always something happening at Freedom Dance Studio.
                </p>

                <Link to="/contact" className="btn btn-neutral gap-2">
                  Contact Us
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= VIDEO MODAL ================= */}
      <VideoModal
        danceClass={selectedClass}
        onClose={() => setSelectedClass(null)}
      />
    </section>
  );
}
