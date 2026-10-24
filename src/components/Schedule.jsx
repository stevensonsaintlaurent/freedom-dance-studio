import React, { useEffect, useMemo, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import {
  CalendarDays,
  CalendarX2,
  AlertTriangle,
  Users,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Search,
  X,
  Check,
  ShoppingBag,
} from "lucide-react";

import { motion } from "framer-motion";

import { events } from "../data/eventsData";

import lady from "../assets/lady/followerClip1.jpeg";

import steven from "../assets/instructors/steven.png";

import luna from "../assets/adriana.jpg";

import desmond from "../assets/instructors/desmond.jpg";

import { independentClasses } from "../data/indepedentInstructors";

// ==================================================

// SERVICES

// ==================================================

// Add real portraits to public/assets/instructors/ using these filenames.

// Missing photos automatically display a clean initials avatar.

const instructorPhotos = {
  Stevenson: "/assets/instructors/stevenson.jpg",

  Desmond: "/assets/instructors/desmond.jpg",

  Luna: "/assets/instructors/luna.jpg",

  Zagir: "/assets/instructors/zagir.jpg",

  Alain: "/assets/instructors/alain.jpg",

  Steven: "/assets/instructors/steven.jpg",
};

function InstructorAvatar({ name = "Instructor", size = "md", image }) {
  const [failed, setFailed] = useState(false);

  const src = image || instructorPhotos[name];

  const initials = name

    .split(/\s+/)

    .map((part) => part[0])

    .slice(0, 2)

    .join("")

    .toUpperCase();

  const dimensions = size === "lg" ? "h-16 w-16 text-xl" : "h-11 w-11 text-sm";
  console.log("InstructorAvatar src:", src);
  useEffect(() => setFailed(false), [src]);

  return (
    <div
      className={`${dimensions} shrink-0 overflow-hidden rounded-full border-2 border-primary/20 bg-primary/10 flex items-center justify-center font-bold text-primary`}
    >
      {src && !failed ? (
        <img
          src={src}
          alt={`Portrait of ${name}`}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <span aria-label={`${name} photo unavailable`}>{initials}</span>
      )}
    </div>
  );
}

const danceStyleOf = (dance = "") => {
  const value = dance.toLowerCase();

  if (value.includes("bachata")) return "Bachata";

  if (value.includes("salsa")) return "Salsa";

  if (value.includes("kizomba") || value.includes("urban kiz"))
    return "Kizomba";

  if (value.includes("konpa") || value.includes("kompa")) return "Konpa";

  if (value.includes("jazz") || value.includes("band")) return "Music";

  return "Other";
};

const dayOrder = [
  "Monday",

  "Tuesday",

  "Wednesday",

  "Thursday",

  "Friday",

  "Saturday",

  "Sunday",
];

const timeMinutes = (time = "") => {
  const match = time.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);

  if (!match) return 9999;

  return (
    ((Number(match[1]) % 12) + (match[3].toUpperCase() === "PM" ? 12 : 0)) *
      60 +
    Number(match[2])
  );
};

const services = [
  {
    id: 1,

    title: "Private Lessons",

    icon: "💃",

    color: "primary",

    description: "One-on-one personalized instruction for faster progress.",

    styles: ["Salsa", "Bachata", "Kizomba", "Konpa"],

    duration: "60 Minutes",

    price: "$80+",
  },

  {
    id: 2,

    title: "Partner Lessons",

    icon: "❤️",

    color: "secondary",

    description:
      "Perfect for couples preparing for weddings, socials, or competitions.",

    styles: ["Salsa", "Bachata", "Kizomba", "Konpa"],

    duration: "60 Minutes",

    price: "$120+",
  },

  {
    id: 3,

    title: "Group Classes",

    icon: "👥",

    color: "accent",

    description: "Fun group classes for beginners through advanced dancers.",

    styles: ["Salsa", "Bachata", "Kizomba", "Konpa"],

    duration: "1 Hour",

    price: "$15 Drop-In",
  },

  {
    id: 4,

    title: "Live Band & Orchestra",

    icon: "🎺",

    color: "warning",

    description:
      "Book our professional musicians for festivals, weddings, birthdays, and special events.",

    styles: ["Salsa", "Konpa", "Latin Jazz", "Caribbean Music"],

    duration: "Custom",

    price: "Call for Quote",
  },
];

// ==================================================

// FREEDOM DANCE STUDIO WEEKLY CLASSES

// ==================================================

const weeklySchedule = [
  {
    id: 1,

    day: "Monday",

    time: "6:00 PM",

    dance: "Beginner Kizomba",

    instructor: "Stevenson",

    drop: "Free",

    level: "Beginner Friendly",

    type: "freedom",

    image: steven,
  },

  {
    id: 2,

    day: "Monday",

    time: "6:00 PM",

    dance: "Ladies Styling Bachata",

    instructor: "Luna",

    drop: "$15",

    level: "Beginner Friendly",

    type: "freedom",

    image: luna,
  },

  {
    id: 3,

    day: "Monday",

    time: "7:00 PM",

    dance: "Beginner Bachata",

    instructor: "Stevenson",

    drop: "$15",

    level: "Beginner Friendly",

    type: "freedom",

    image: steven,
  },

  {
    id: 13,

    day: "Monday",

    time: "8:00 PM",

    dance: "Beginner Bachata Man Styling",

    instructor: "Stevenson",

    drop: "$15",

    level: "Beginner Friendly",

    type: "freedom",

    image: steven,
  },

  {
    id: 4,

    day: "Tuesday",

    time: "6:00 PM",

    dance: "Beginner Salsa",

    instructor: "Stevenson",

    drop: "$15",

    level: "Beginner Friendly",

    type: "freedom",

    image: steven,
  },

  {
    id: 5,

    day: "Tuesday",

    time: "7:00 PM",

    dance: "Beginner Bachata",

    instructor: "Stevenson",

    drop: "$15",

    level: "Beginner Friendly",

    type: "freedom",

    image: steven,
  },

  {
    id: 6,

    day: "Tuesday",

    time: "8:00 PM",

    dance: "Konpa",

    instructor: "Stevenson",

    drop: "$15",

    level: "Open Level",

    type: "freedom",

    image: steven,
  },

  {
    id: 7,

    day: "Wednesday",

    time: "6:00 PM",

    dance: "Intermediate & Beyond Kizomba",

    instructor: "Stevenson",

    drop: "$15",

    level: "Intermediate & Beyond",

    type: "freedom",

    image: steven,
  },

  {
    id: 8,

    day: "Wednesday",

    time: "7:00 PM",

    dance: "Intermediate & Beyond Bachata Sensual",

    instructor: "Stevenson",

    drop: "$15",

    level: "Intermediate & Beyond",

    type: "freedom",

    image: steven,
  },

  {
    id: 9,

    day: "Thursday",

    time: "6:30 PM",

    dance: "Ladies Styling Bachata",

    instructor: "Zagir",

    drop: "$15",

    level: "Beginner Friendly",

    type: "freedom",

    image: lady,
  },

  {
    id: 10,

    day: "Saturday",

    time: "2:00 PM",

    dance: "Open Level Kizomba",

    instructor: "Stevenson",

    drop: "$15",

    level: "Open Level",

    type: "freedom",

    image: steven,
  },

  {
    id: 11,

    day: "Saturday",

    time: "3:00 PM",

    dance: "Open Level Bachata",

    instructor: "Stevenson",

    drop: "$15",

    level: "Open Level",

    type: "freedom",

    image: steven,
  },

  {
    id: 12,

    day: "Saturday",

    time: "4:00 PM",

    dance: "Beginner Salsa",

    instructor: "Desmond",

    drop: "$15",

    level: "Beginner Friendly",

    type: "freedom",

    image: desmond,
  },

  {
    id: 13,

    day: "Saturday",

    time: "5:00 PM",

    dance: "Intermediate & Beyond Salsa",

    instructor: "Desmond",

    drop: "$15",

    level: "Intermediate & Beyond",

    type: "freedom",

    image: desmond,
  },

  {
    id: 14,

    day: "Saturday",

    time: "5:00 PM",

    dance: "Jazz Band",

    instructor: "Alain",

    drop: "Free",

    level: "All Levels",

    type: "freedom",

    image: steven,
  },
];

// ==================================================

// DAYS

// ==================================================

const days = [
  "All",

  "Monday",

  "Tuesday",

  "Wednesday",

  "Thursday",

  "Friday",

  "Saturday",

  "Sunday",
];

// ==================================================

// CANCELLED DAYS

// ==================================================

const cancelledDays = [
  // {
  //   day: "Saturday",
  //   date: "October 17, 2026",
  //   title: "All Classes Cancelled",
  //   reason:
  //     "There will be no regular classes on Saturday, October 17, 2026. This cancellation will not affect your membership.",
  // },
];

// ==================================================

// HELPERS

// ==================================================

const getTypeLabel = (type) => {
  if (type === "independent") return "Independent Instructor";

  return "Freedom Dance";
};

const getTypeBadge = (type) => {
  if (type === "independent") {
    return "badge-secondary";
  }

  return "badge-primary";
};

const formatEventDate = (dateString) => {
  if (!dateString) return "";

  const date = new Date(`${dateString}T12:00:00`);

  if (Number.isNaN(date.getTime())) return dateString;

  return date.toLocaleDateString("en-US", {
    month: "short",

    day: "numeric",

    year: "numeric",
  });
};

const getEventDateRange = (event) => {
  if (!event) return "";

  if (event.eventEnd) {
    return `${formatEventDate(event.eventStart)} – ${formatEventDate(
      event.eventEnd,
    )}`;
  }

  return formatEventDate(event.eventStart);
};

// ==================================================

// COMPONENT

// ==================================================

export default function Schedule() {
  const navigate = useNavigate();

  const [selectedDay, setSelectedDay] = useState("All");

  const [scheduleType, setScheduleType] = useState("all");

  const [selectedStyle, setSelectedStyle] = useState("All");

  const [selectedInstructor, setSelectedInstructor] = useState("All");

  const [search, setSearch] = useState("");
  const [selectedClasses, setSelectedClasses] = useState([]);

  // ==================================================

  // ALL WEEKLY CLASSES

  // ==================================================

  const allClasses = useMemo(() => {
    return [...weeklySchedule, ...independentClasses];
  }, []);

  // ==================================================

  // BOOK WEEKLY CLASS

  // ==================================================

  const handleBooking = (item) => {
    navigate("/book", {
      state: {
        ...item,

        bookingType: item.type,
      },
    });
  };

  // ==================================================

  // BOOK EVENT / WORKSHOP

  // ==================================================

  const classKey = (item) =>
    `${item.type}-${item.id}-${item.day}-${item.time}-${item.dance}`;
  const toggleClass = (item) => {
    setSelectedClasses((current) =>
      current.some((entry) => classKey(entry) === classKey(item))
        ? current.filter((entry) => classKey(entry) !== classKey(item))
        : [...current, item],
    );
  };
  // Select every class for the chosen day, or remove that day's classes.
  const dayClasses = allClasses.filter((item) => item.day === selectedDay);
  const allDaySelected =
    dayClasses.length > 0 &&
    dayClasses.every((item) =>
      selectedClasses.some((entry) => classKey(entry) === classKey(item)),
    );
  const toggleAllDay = () => {
    setSelectedClasses((current) => {
      const dayKeys = new Set(dayClasses.map(classKey));
      const alreadyAll = dayClasses.every((item) =>
        current.some((entry) => classKey(entry) === classKey(item)),
      );
      return alreadyAll
        ? current.filter((item) => !dayKeys.has(classKey(item)))
        : [
            ...current,
            ...dayClasses.filter(
              (item) =>
                !current.some((entry) => classKey(entry) === classKey(item)),
            ),
          ];
    });
  };
  const bookSelectedClasses = () => {
    if (!selectedClasses.length) return;
    const bookingClasses = selectedClasses.map((item) => ({ ...item }));
    navigate("/book", {
      state: {
        bookingType: "multiple-classes",
        selectedClasses: bookingClasses,
        classes: bookingClasses,
        classCount: bookingClasses.length,
        classSummary: bookingClasses
          .map(
            (item) =>
              `${item.day} ${item.time} - ${item.dance} (${item.instructor})`,
          )
          .join("; "),
      },
    });
  };

  const handleEventBooking = (event) => {
    navigate("/book", {
      state: {
        bookingType: "event",

        event,

        findEvent: event,
      },
    });
  };

  // ==================================================

  // SERVICES

  // ==================================================

  const handleServices = (id) => {
    const findService = services.find((service) => service.id === id);

    navigate("/membersForm", {
      state: findService,
    });
  };

  // ==================================================

  // CANCELLED DAY

  // ==================================================

  const isDayCancelled = (day) => {
    return cancelledDays.some((cancelled) => cancelled.day === day);
  };

  // ==================================================

  // FILTER SCHEDULE

  // ==================================================

  const danceStyles = useMemo(
    () =>
      [
        "All",

        ...new Set(allClasses.map((item) => danceStyleOf(item.dance))),
      ].sort((a, b) =>
        a === "All" ? -1 : b === "All" ? 1 : a.localeCompare(b),
      ),

    [allClasses],
  );

  const instructors = useMemo(
    () =>
      [
        "All",

        ...new Set(allClasses.map((item) => item.instructor).filter(Boolean)),
      ].sort((a, b) =>
        a === "All" ? -1 : b === "All" ? 1 : a.localeCompare(b),
      ),

    [allClasses],
  );

  const filteredSchedule = useMemo(() => {
    return allClasses

      .filter((item) => {
        if (scheduleType !== "all" && item.type !== scheduleType) return false;

        if (selectedDay !== "All" && item.day !== selectedDay) return false;

        if (
          selectedStyle !== "All" &&
          danceStyleOf(item.dance) !== selectedStyle
        )
          return false;

        if (
          selectedInstructor !== "All" &&
          item.instructor !== selectedInstructor
        )
          return false;

        const term = search.trim().toLowerCase();

        return (
          !term ||
          [item.dance, item.day, item.instructor, item.level].some((v) =>
            String(v || "")
              .toLowerCase()

              .includes(term),
          )
        );
      })

      .sort(
        (a, b) =>
          dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day) ||
          timeMinutes(a.time) - timeMinutes(b.time),
      );
  }, [
    allClasses,

    selectedDay,

    scheduleType,

    selectedStyle,

    selectedInstructor,

    search,
  ]);

  // ==================================================

  // UPCOMING EVENTS

  // ==================================================

  const upcomingEvents = useMemo(() => {
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    return [...events]

      .filter((event) => {
        if (!event.eventStart) return false;

        const eventDate = new Date(`${event.eventStart}T12:00:00`);

        return eventDate >= today;
      })

      .sort(
        (a, b) =>
          new Date(`${a.eventStart}T12:00:00`) -
          new Date(`${b.eventStart}T12:00:00`),
      );
  }, []);

  // ==================================================

  // VISIBLE CANCELLATIONS

  // ==================================================

  const visibleCancellations = useMemo(() => {
    return cancelledDays.filter(
      (cancelled) => selectedDay === "All" || cancelled.day === selectedDay,
    );
  }, [selectedDay]);

  // ==================================================

  // SCROLL TO TOP

  // ==================================================

  useEffect(() => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  }, []);

  // ==================================================

  // RENDER

  // ==================================================

  return (
    <section className="w-full overflow-x-hidden py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* ==================================================



            HERO



        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-base-200 border border-base-300 shadow-2xl mb-12"
        >
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

          <div className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

          <div className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-16 text-center">
            <div className="badge badge-primary badge-lg mb-5 gap-2">
              <CalendarDays className="h-4 w-4" />
              Freedom Dance Studio
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Dance Schedule <span className="text-primary">& Booking</span>
            </h1>

            <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-base-content/70">
              Find your next class, discover independent instructors, and
              reserve your spot at our upcoming workshops and events.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="badge badge-lg badge-primary gap-2 py-4">
                <GraduationCap className="h-4 w-4" />
                Freedom Classes
              </div>

              <div className="badge badge-lg badge-secondary gap-2 py-4">
                <Users className="h-4 w-4" />
                Independent Instructors
              </div>

              <div className="badge badge-lg badge-accent gap-2 py-4">
                <Sparkles className="h-4 w-4" />
                Workshops & Events
              </div>
            </div>
          </div>
        </motion.div>

        {/* ==================================================



            UPCOMING WORKSHOPS & EVENTS



        ================================================== */}

        {upcomingEvents.length > 0 && (
          <section className="mb-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-accent" />

                  <h2 className="text-3xl sm:text-4xl font-black">
                    Upcoming Workshops & Events
                  </h2>
                </div>

                <p className="mt-2 text-base-content/60">
                  Special experiences happening at Freedom Dance Studio.
                </p>
              </div>

              <Link to="/events" className="btn btn-outline btn-sm sm:btn-md">
                View All Events
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {upcomingEvents.slice(0, 3).map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,

                    delay: index * 0.08,
                  }}
                  className="group card bg-base-100 border border-base-200 shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  {event.image && (
                    <figure className="h-52 bg-base-200 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title || "Freedom Dance event"}
                        className={`w-full h-full ${
                          event.imageFit === "contain"
                            ? "object-contain p-3"
                            : "object-cover"
                        } transition-transform duration-500 group-hover:scale-105`}
                      />
                    </figure>
                  )}

                  <div className="card-body">
                    <div className="flex flex-wrap gap-2">
                      <span className="badge badge-accent font-semibold">
                        Workshop / Event
                      </span>

                      {event.featured && (
                        <span className="badge badge-warning">Featured</span>
                      )}
                    </div>

                    <h3 className="card-title text-xl mt-2">{event.title}</h3>

                    <div className="space-y-2 text-sm text-base-content/70 mt-1">
                      <p className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-primary" />

                        {getEventDateRange(event)}
                      </p>

                      {event.instructor && (
                        <p className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-secondary" />

                          {event.instructor}
                        </p>
                      )}

                      {event.location && <p>📍 {event.location}</p>}
                    </div>

                    {event.description && (
                      <p className="mt-3 text-sm text-base-content/70 line-clamp-3">
                        {event.description}
                      </p>
                    )}

                    {event.price && (
                      <div className="mt-3 font-bold text-lg">
                        {event.price}
                      </div>
                    )}

                    <div className="card-actions mt-5">
                      <button
                        onClick={() => handleEventBooking(event)}
                        className="btn btn-accent w-full hover:scale-[1.02] transition-transform"
                      >
                        Register Now
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ==================================================



            CANCELLATION NOTICE



        ================================================== */}

        {visibleCancellations.map((cancelled) => (
          <motion.div
            key={cancelled.date}
            initial={{
              opacity: 0,

              y: -25,

              scale: 0.98,
            }}
            animate={{
              opacity: 1,

              y: 0,

              scale: 1,
            }}
            transition={{
              duration: 0.6,

              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mb-10 overflow-hidden rounded-3xl border border-error/30 bg-error/10 shadow-xl"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],

                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 3,

                repeat: Infinity,

                ease: "easeInOut",
              }}
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-error/30 blur-3xl"
            />

            <div className="relative p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-error text-error-content shadow-lg">
                  <CalendarX2 className="h-8 w-8" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-2xl font-black sm:text-3xl">
                      {cancelled.title}
                    </h2>

                    <span className="badge badge-error font-bold">
                      Important
                    </span>
                  </div>

                  <p className="mt-2 text-base text-base-content/70">
                    There will be no regular classes at Freedom Dance Studio on
                    this day.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="badge badge-lg gap-2">
                      📅 {cancelled.date}
                    </span>

                    <span className="badge badge-lg gap-2">🚫 All Day</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-warning/10 p-4">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning" />

                <div>
                  <p className="font-bold">Please plan accordingly.</p>

                  <p className="mt-1 text-sm text-base-content/70">
                    {cancelled.reason} Our regular schedule will continue on the
                    next scheduled day.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* ==================================================



            SCHEDULE SECTION



        ================================================== */}

        <section>
          <div className="mb-7">
            <h2 className="text-3xl sm:text-4xl font-black">
              Weekly Dance Schedule
            </h2>

            <p className="mt-2 text-base-content/60">
              Choose a day and class type to find your next dance experience.
            </p>
          </div>

          {/* ==================================================



              CATEGORY FILTERS



          ================================================== */}

          <div className="grid sm:grid-cols-3 gap-3 mb-7">
            <button
              onClick={() => setScheduleType("all")}
              className={`btn h-auto min-h-14 ${
                scheduleType === "all" ? "btn-primary" : "btn-outline"
              }`}
            >
              <CalendarDays className="h-5 w-5" />

              <div className="text-left">
                <div className="font-bold">All Classes</div>

                <div className="text-xs opacity-70">Freedom + Independent</div>
              </div>
            </button>

            <button
              onClick={() => setScheduleType("freedom")}
              className={`btn h-auto min-h-14 ${
                scheduleType === "freedom" ? "btn-primary" : "btn-outline"
              }`}
            >
              <GraduationCap className="h-5 w-5" />

              <div className="text-left">
                <div className="font-bold">Freedom Classes</div>

                <div className="text-xs opacity-70">Regular studio classes</div>
              </div>
            </button>

            <button
              onClick={() => setScheduleType("independent")}
              className={`btn h-auto min-h-14 ${
                scheduleType === "independent" ? "btn-secondary" : "btn-outline"
              }`}
            >
              <Users className="h-5 w-5" />

              <div className="text-left">
                <div className="font-bold">Independent Instructors</div>

                <div className="text-xs opacity-70">Hosted at Freedom</div>
              </div>
            </button>
          </div>

          <div className="mb-8 rounded-2xl border border-base-300 bg-base-200 p-4 sm:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold">Find your perfect class</h3>

                <p className="text-sm opacity-70">
                  {filteredSchedule.length} matching classes · Choose a day,
                  style, or teacher
                </p>
              </div>

              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={() => {
                  setSelectedDay("All");

                  setSelectedStyle("All");

                  setSelectedInstructor("All");

                  setSearch("");

                  setScheduleType("all");
                }}
              >
                <X className="h-4 w-4" /> Clear filters
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <label className="form-control">
                <span className="label-text mb-1 font-semibold">Day</span>

                <select
                  aria-label="Filter by day"
                  className="select select-bordered w-full"
                  value={selectedDay}
                  onChange={(e) => setSelectedDay(e.target.value)}
                >
                  {days.map((day) => (
                    <option key={day} value={day}>
                      {day === "All" ? "All days" : day}
                    </option>
                  ))}
                </select>
              </label>

              <label className="form-control">
                <span className="label-text mb-1 font-semibold">
                  Dance style
                </span>

                <select
                  aria-label="Filter by dance style"
                  className="select select-bordered w-full"
                  value={selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value)}
                >
                  {danceStyles.map((style) => (
                    <option key={style} value={style}>
                      {style === "All" ? "All styles" : style}
                    </option>
                  ))}
                </select>
              </label>

              <label className="form-control">
                <span className="label-text mb-1 font-semibold">
                  Instructor
                </span>

                <select
                  aria-label="Filter by instructor"
                  className="select select-bordered w-full"
                  value={selectedInstructor}
                  onChange={(e) => setSelectedInstructor(e.target.value)}
                >
                  {instructors.map((name) => (
                    <option key={name} value={name}>
                      {name === "All" ? "All instructors" : name}
                    </option>
                  ))}
                </select>
              </label>

              <label className="form-control">
                <span className="label-text mb-1 font-semibold">Search</span>

                <div className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 opacity-50" />

                  <input
                    type="search"
                    aria-label="Search classes"
                    placeholder="Class or instructor..."
                    className="input input-bordered w-full pl-10"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </label>
            </div>
          </div>

          {selectedDay !== "All" && (
            <div className="mb-6 rounded-2xl border border-base-300 bg-base-100 p-4 sm:p-6 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-bold">
                    {selectedDay} — Choose your classes
                  </h3>
                  <p className="text-sm opacity-70">
                    Select one, several, or every class on {selectedDay}.
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-outline btn-primary btn-sm"
                  disabled={!dayClasses.length}
                  onClick={toggleAllDay}
                >
                  {allDaySelected
                    ? `Remove all ${selectedDay} classes`
                    : `Select all ${selectedDay} classes`}
                </button>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {dayClasses.map((item) => {
                  const checked = selectedClasses.some(
                    (entry) => classKey(entry) === classKey(item),
                  );
                  return (
                    <label
                      key={classKey(item)}
                      className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors ${checked ? "border-primary bg-primary/10" : "border-base-300 hover:border-primary/50"}`}
                    >
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary mt-1"
                        checked={checked}
                        onChange={() => toggleClass(item)}
                      />
                      <span className="min-w-0">
                        <span className="block font-bold">{item.dance}</span>
                        <span className="block text-sm opacity-70">
                          {item.time} · {item.instructor}
                        </span>
                        <span className="block text-sm font-semibold">
                          {item.drop}
                        </span>
                      </span>
                    </label>
                  );
                })}
                {!dayClasses.length && (
                  <p className="text-sm opacity-70">
                    No classes scheduled for this day.
                  </p>
                )}
              </div>
            </div>
          )}

          <div className="mb-6 w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 p-4 sm:p-5">
            <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold">
                  Selected classes ({selectedClasses.length})
                </h3>
                <p className="text-sm opacity-70">
                  Choose multiple classes, including on the same day.
                </p>
                <div className="mt-3 flex max-h-44 min-w-0 flex-wrap gap-2 overflow-x-hidden overflow-y-auto">
                  {selectedClasses.map((item) => (
                    <button
                      key={classKey(item)}
                      type="button"
                      onClick={() => toggleClass(item)}
                      className="inline-flex h-auto max-w-full min-w-0 items-center gap-2 rounded-lg border border-primary/30 bg-primary px-3 py-2 text-left text-xs font-semibold leading-snug text-primary-content transition-opacity hover:opacity-80 sm:text-sm"
                      title="Remove selected class"
                    >
                      <span className="min-w-0 break-words">
                        {item.day} {item.time} · {item.dance}
                      </span>
                      <X className="h-4 w-4 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex w-full min-w-0 flex-col gap-2 sm:flex-row lg:w-auto lg:shrink-0">
                {selectedClasses.length > 0 && (
                  <button
                    type="button"
                    className="btn btn-ghost w-full sm:w-auto"
                    onClick={() => setSelectedClasses([])}
                  >
                    Clear
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-primary h-auto min-h-12 w-full min-w-0 whitespace-normal px-4 py-2 text-center leading-snug sm:w-auto"
                  disabled={!selectedClasses.length}
                  onClick={bookSelectedClasses}
                >
                  Continue with {selectedClasses.length}{" "}
                  {selectedClasses.length === 1 ? "class" : "classes"}
                </button>
              </div>
            </div>
          </div>

          {filteredSchedule.length === 0 && (
            <div className="alert mb-8">
              <span>No classes match your filters. Try clearing a filter.</span>
            </div>
          )}

          {/* ==================================================



              DESKTOP TABLE



          ================================================== */}

          {filteredSchedule.length > 0 && (
            <div className="hidden md:block w-full mb-16">
              <div className="rounded-2xl shadow-xl overflow-hidden border border-base-200">
                <table className="table bg-base-100 w-full">
                  <thead>
                    <tr>
                      <th>Day</th>

                      <th>Time</th>

                      <th>Class</th>

                      <th>Type</th>

                      <th>Level</th>

                      <th>Instructor</th>

                      <th>Drop-In</th>

                      <th></th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredSchedule.map((item) => (
                      <tr
                        key={`${item.type}-${item.id}-${item.day}-${item.time}`}
                        className="transition-all duration-300 hover:bg-base-200"
                      >
                        <td className="font-semibold">{item.day}</td>

                        <td className="font-medium">{item.time}</td>

                        <td className="font-semibold">{item.dance}</td>

                        <td>
                          <span
                            className={`badge ${getTypeBadge(
                              item.type,
                            )} whitespace-nowrap`}
                          >
                            {getTypeLabel(item.type)}
                          </span>
                        </td>

                        <td>
                          <span className="badge badge-outline">
                            {item.level}
                          </span>
                        </td>

                        <td>
                          <div className="flex items-center gap-3">
                            <InstructorAvatar
                              name={item.instructor}
                              image={item.image}
                            />

                            <span className="font-semibold">
                              {item.instructor}
                            </span>
                          </div>
                        </td>

                        <td className="font-bold">{item.drop}</td>

                        <td>
                          <button
                            className={`btn btn-sm ${
                              item.type === "independent"
                                ? "btn-secondary"
                                : "btn-primary"
                            } transition-all duration-300 hover:scale-105`}
                            onClick={() => toggleClass(item)}
                          >
                            {selectedClasses.some(
                              (entry) => classKey(entry) === classKey(item),
                            ) ? (
                              <>
                                <Check className="h-4 w-4" /> Selected
                              </>
                            ) : (
                              "Select Class"
                            )}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ==================================================



              MOBILE SCHEDULE CARDS



          ================================================== */}

          <div className="md:hidden space-y-4 mb-16">
            {filteredSchedule.length === 0
              ? !isDayCancelled(selectedDay) && (
                  <div className="alert alert-info rounded-2xl">
                    <span>No classes match your filters.</span>
                  </div>
                )
              : filteredSchedule.map((item, index) => (
                  <motion.div
                    key={`${item.type}-${item.id}-${item.day}-${item.time}`}
                    initial={{
                      opacity: 0,

                      y: 15,
                    }}
                    animate={{
                      opacity: 1,

                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    className="card bg-base-100 shadow-xl border border-base-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <div className="card-body p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm text-base-content/50">
                            {item.day}
                          </p>

                          <p className="text-xl font-black">{item.time}</p>
                        </div>

                        <span
                          className={`badge ${
                            item.type === "independent"
                              ? "badge-secondary"
                              : "badge-primary"
                          }`}
                        >
                          {item.drop}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className={`badge ${getTypeBadge(item.type)}`}>
                          {getTypeLabel(item.type)}
                        </span>

                        <span className="badge badge-outline">
                          {item.level}
                        </span>
                      </div>

                      <div className="divider my-1" />

                      <h3 className="text-xl font-black">{item.dance}</h3>

                      <div className="flex items-center gap-3 rounded-xl bg-base-200 p-3">
                        <InstructorAvatar
                          name={item.instructor}
                          size="lg"
                          image={item.image}
                        />

                        <div>
                          <p className="text-xs text-base-content/60">
                            Your instructor
                          </p>

                          <p className="font-bold">{item.instructor}</p>
                        </div>
                      </div>

                      <button
                        className={`btn w-full mt-3 ${
                          item.type === "independent"
                            ? "btn-secondary"
                            : "btn-primary"
                        } transition-all duration-300 hover:scale-[1.02]`}
                        onClick={() => toggleClass(item)}
                      >
                        {selectedClasses.some(
                          (entry) => classKey(entry) === classKey(item),
                        )
                          ? "✓ Selected"
                          : "Select Class"}
                      </button>
                    </div>
                  </motion.div>
                ))}
          </div>
        </section>

        {/* ==================================================



            INDEPENDENT INSTRUCTOR MESSAGE



        ================================================== */}

        <section className="mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-secondary/10 border border-secondary/20 p-7 sm:p-10">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />

            <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-7">
              <div>
                <div className="badge badge-secondary mb-4">
                  Independent Dance Community
                </div>

                <h2 className="text-2xl sm:text-3xl font-black">
                  More Instructors. More Styles. More Ways to Dance.
                </h2>

                <p className="mt-3 max-w-2xl text-base-content/70">
                  Freedom Dance Studio is also home to independent instructors
                  who bring their own classes and dance styles into our
                  community. Their classes are hosted at Freedom while remaining
                  independently operated.
                </p>
              </div>

              <Link to="/independent" className="btn btn-secondary shrink-0">
                Meet Independent Instructors
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================================



            SERVICES



        ================================================== */}

        <section>
          <div className="mb-10 text-center">
            <div className="badge badge-primary mb-4">
              Private & Group Experiences
            </div>

            <h2 className="text-3xl sm:text-4xl font-black">Our Services</h2>

            <p className="mt-3 text-base-content/60">
              Choose the experience that fits your goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const {
                icon,

                title,

                description,

                color,

                styles,

                duration,

                price,
              } = service;

              return (
                <motion.div
                  key={service.id}
                  initial={{
                    opacity: 0,

                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,

                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="card bg-base-100 border border-base-200 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="card-body">
                    <div className="text-5xl mb-2">{icon}</div>

                    <h2 className="card-title text-2xl">{title}</h2>

                    <p className="text-base-content/70">{description}</p>

                    <div className="divider" />

                    <div className="space-y-3">
                      <p>
                        <strong>Styles:</strong>
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {styles.map((dance) => (
                          <span key={dance} className={`badge badge-${color}`}>
                            {dance}
                          </span>
                        ))}
                      </div>

                      <p>
                        <strong>Duration:</strong> {duration}
                      </p>

                      <p>
                        <strong>Price:</strong> {price}
                      </p>
                    </div>

                    <div className="card-actions mt-6">
                      <button
                        className="btn btn-primary w-full transition-all duration-300 hover:scale-105"
                        onClick={() => handleServices(service.id)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ==================================================



            FINAL CTA



        ================================================== */}

        <div className="hero bg-primary text-primary-content rounded-3xl mt-20 overflow-hidden shadow-xl">
          <div className="hero-content text-center py-12 px-6">
            <div className="max-w-2xl">
              <div className="badge badge-secondary mb-4">
                Your Dance Journey Starts Here
              </div>

              <h2 className="text-3xl sm:text-4xl font-black">
                Ready to Dance?
              </h2>

              <p className="py-6 opacity-90">
                Join a regular class, discover an independent instructor,
                register for a workshop, or book a private dance experience at
                Freedom.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/teachers"
                  className="btn btn-secondary transition-all duration-300 hover:scale-105"
                >
                  Book Dance Lessons
                </Link>

                <Link
                  to="/events"
                  className="btn btn-accent transition-all duration-300 hover:scale-105"
                >
                  Explore Events
                </Link>

                <Link
                  to="/studiopricing"
                  className="btn btn-outline btn-primary-content transition-all duration-300 hover:scale-105"
                >
                  Rent the Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
