import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
  Clock3,
  SlidersHorizontal,
  MapPin,
  ArrowRight,
  RotateCcw,
  Music2,
} from "lucide-react";
import { events } from "../data/eventsData";
import { specialOffers } from "../data/specialOffers";
import { independentClasses } from "../data/indepedentInstructors";
import lady from "../assets/lady/followerClip1.jpeg";
import steven from "../assets/instructors/steven.png";
import luna from "../assets/adriana.jpg";
import desmond from "../assets/instructors/desmond.jpg";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const weeklySchedule = [
  {
    id: 1,
    day: "Monday",
    time: "6:00 PM",
    dance: "Beginner Kizomba",
    instructor: "Stevenson",
    drop: "Free",
    level: "Beginner Friendly",
    image: steven,
    durationMinutes: 60,
  },
  {
    id: 2,
    day: "Monday",
    time: "6:00 PM",
    dance: "Ladies Styling Bachata",
    instructor: "Luna",
    drop: "$15",
    level: "Beginner Friendly",
    image: luna,
    durationMinutes: 60,
  },
  {
    id: 3,
    day: "Monday",
    time: "7:00 PM",
    dance: "Beginner Bachata",
    instructor: "Stevenson",
    drop: "$15",
    level: "Beginner Friendly",
    image: steven,
    durationMinutes: 60,
  },
  {
    id: 13,
    day: "Monday",
    time: "8:00 PM",
    dance: "Beginner Bachata Man Styling",
    instructor: "Stevenson",
    drop: "$15",
    level: "Beginner Friendly",
    image: steven,
    durationMinutes: 90,
  },
  {
    id: 4,
    day: "Tuesday",
    time: "6:00 PM",
    dance: "Beginner Salsa",
    instructor: "Stevenson",
    drop: "$15",
    level: "Beginner Friendly",
    image: steven,
    durationMinutes: 60,
  },
  {
    id: 5,
    day: "Tuesday",
    time: "7:00 PM",
    dance: "Beginner Bachata",
    instructor: "Stevenson",
    drop: "$15",
    level: "Beginner Friendly",
    image: steven,
    durationMinutes: 60,
  },
  {
    id: 6,
    day: "Tuesday",
    time: "8:00 PM",
    dance: "Konpa",
    instructor: "Stevenson",
    drop: "$15",
    level: "Open Level",
    image: steven,
    durationMinutes: 60,
  },
  {
    id: 7,
    day: "Wednesday",
    time: "6:00 PM",
    dance: "Intermediate & Beyond Kizomba",
    instructor: "Stevenson",
    drop: "$15",
    level: "Intermediate & Beyond",
    image: steven,
    durationMinutes: 60,
  },
  {
    id: 8,
    day: "Wednesday",
    time: "7:00 PM",
    dance: "Intermediate & Beyond Bachata Sensual",
    instructor: "Stevenson",
    drop: "$15",
    level: "Intermediate & Beyond",
    image: steven,
    durationMinutes: 60,
  },
  {
    id: 9,
    day: "Thursday",
    time: "6:30 PM",
    dance: "Ladies Styling Bachata",
    instructor: "Zagir",
    drop: "$15",
    level: "Beginner Friendly",
    image: lady,
    durationMinutes: 60,
  },
  {
    id: 10,
    day: "Saturday",
    time: "2:00 PM",
    dance: "Open Level Kizomba",
    instructor: "Stevenson",
    drop: "$15",
    level: "Open Level",
    image: steven,
    durationMinutes: 60,
  },
  {
    id: 11,
    day: "Saturday",
    time: "3:00 PM",
    dance: "Open Level Bachata",
    instructor: "Stevenson",
    drop: "$15",
    level: "Open Level",
    image: steven,
    durationMinutes: 60,
  },
  {
    id: 12,
    day: "Saturday",
    time: "4:00 PM",
    dance: "Beginner Salsa",
    instructor: "Desmond",
    drop: "$15",
    level: "Beginner Friendly",
    image: desmond,
    durationMinutes: 60,
  },
  {
    id: 15,
    day: "Saturday",
    time: "5:00 PM",
    dance: "Intermediate & Beyond Salsa",
    instructor: "Desmond",
    drop: "$15",
    level: "Intermediate & Beyond",
    image: desmond,
    durationMinutes: 60,
  },
  {
    id: 14,
    day: "Saturday",
    time: "6:00-7:30 PM",
    dance: "Jazz Band",
    instructor: "Steven",
    drop: "Free",
    level: "All Levels",
    image: steven,
    durationMinutes: null,
  },
].map((item) => ({ ...item, type: "freedom" }));

// Duration must be supplied by each independent instructor in independentClasses.
// Supported fields: durationMinutes (number), duration ("60 min" / "1 hour"), or endTime ("8:00 PM").
const cancellations = [
  {
    date: "2026-11-21",
    title: "Regular Saturday classes cancelled",
    reason:
      "Our Salsa & Bachata Weekend Intensive takes place November 20–22. Regular Saturday classes are cancelled on November 21; your membership is unaffected.",
  },
];
const services = [
  {
    id: 1,
    icon: "💃",
    title: "Private Lessons",
    description: "Personalized one-on-one training tailored to your goals.",
    price: "$85",
    duration: "60 minutes",
    styles: "Salsa · Bachata · Kizomba · Konpa",
  },
  {
    id: 2,
    icon: "❤️",
    title: "Partner Lessons",
    description: "Learn together for socials, weddings, and special occasions.",
    price: "$125",
    duration: "60 minutes",
    styles: "Salsa · Bachata · Kizomba · Konpa",
  },
  {
    id: 3,
    icon: "👥",
    title: "Group Classes",
    description: "Friendly, energetic instruction for all experience levels.",
    price: "$15 drop-in",
    duration: "Usually 60 minutes",
    styles: "Salsa · Bachata · Kizomba · Konpa",
  },
  {
    id: 4,
    icon: "🎺",
    title: "Live Band & Orchestra",
    description: "Live music for weddings, celebrations, and special events.",
    price: "Request a quote",
    duration: "Custom",
    styles: "Latin Jazz · Salsa · Caribbean Music",
  },
];

function toMinutes(value) {
  const match = String(value || "")
    .trim()
    .match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)$/i);
  if (!match) return null;
  return (
    ((Number(match[1]) % 12) + (match[3].toUpperCase() === "PM" ? 12 : 0)) *
      60 +
    Number(match[2] || 0)
  );
}
function clock(total) {
  const n = ((total % 1440) + 1440) % 1440;
  const h = Math.floor(n / 60);
  return `${h % 12 || 12}:${String(n % 60).padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`;
}
function durationFor(item) {
  if (
    Number.isFinite(Number(item.durationMinutes)) &&
    item.durationMinutes != null &&
    Number(item.durationMinutes) > 0
  )
    return Number(item.durationMinutes);
  if (
    item.endTime &&
    toMinutes(item.time) != null &&
    toMinutes(item.endTime) != null
  ) {
    const diff = (toMinutes(item.endTime) - toMinutes(item.time) + 1440) % 1440;
    return diff || null;
  }
  const value = String(item.duration || "").toLowerCase();
  const hours = value.match(/(\d+(?:\.\d+)?)\s*(?:hours?|hrs?)/);
  const minutes = value.match(/(\d+)\s*(?:minutes?|mins?)/);
  return hours || minutes
    ? Math.round(Number(hours?.[1] || 0) * 60 + Number(minutes?.[1] || 0))
    : null;
}
function timing(item) {
  const start = toMinutes(item.time);
  const duration = durationFor(item);
  return {
    range:
      start != null && duration
        ? `${clock(start)} – ${clock(start + duration)}`
        : `${item.time || "Time TBA"}${item.endTime ? ` – ${item.endTime}` : ""}`,
    duration: duration ? `${duration} min` : "Duration TBA",
  };
}
function styleOf(name = "") {
  const s = name.toLowerCase();
  if (s.includes("bachata")) return "Bachata";
  if (s.includes("salsa")) return "Salsa";
  if (s.includes("kizomba") || s.includes("urban kiz")) return "Kizomba";
  if (s.includes("konpa") || s.includes("kompa")) return "Konpa";
  if (s.includes("jazz") || s.includes("band")) return "Music";
  return "Other";
}
const keyOf = (item) =>
  `${item.type}-${item.id}-${item.day}-${item.time}-${item.dance}`;
const eventDate = (value) =>
  value
    ? new Date(`${value}T12:00:00`).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Date TBA";
const ease = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.3 },
};

function Avatar({ item }) {
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [item.image]);
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-sm font-black text-primary ring-2 ring-base-100">
      {item.image && !failed ? (
        <img
          src={item.image}
          alt={item.instructor || "Instructor"}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        (item.instructor || "?").slice(0, 2).toUpperCase()
      )}
    </div>
  );
}
function Heading({ eyebrow, title, description }) {
  return (
    <div className="mb-7">
      <p className="mb-2 text-xs font-bold uppercase tracking-[.22em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-black tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-base-content/65 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export default function Schedule() {
  const navigate = useNavigate();
  const [day, setDay] = useState("All");
  const [type, setType] = useState("all");
  const [style, setStyle] = useState("All");
  const [teacher, setTeacher] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const allClasses = useMemo(
    () => [...weeklySchedule, ...independentClasses],
    [],
  );
  const styles = useMemo(
    () => [...new Set(allClasses.map((c) => styleOf(c.dance)))].sort(),
    [allClasses],
  );
  const teachers = useMemo(
    () =>
      [...new Set(allClasses.map((c) => c.instructor).filter(Boolean))].sort(),
    [allClasses],
  );
  const filtered = useMemo(
    () =>
      allClasses
        .filter(
          (c) =>
            (day === "All" || c.day === day) &&
            (type === "all" || c.type === type) &&
            (style === "All" || styleOf(c.dance) === style) &&
            (teacher === "All" || c.instructor === teacher) &&
            [c.dance, c.instructor, c.day, c.level]
              .join(" ")
              .toLowerCase()
              .includes(search.trim().toLowerCase()),
        )
        .sort(
          (a, b) =>
            DAYS.indexOf(a.day) - DAYS.indexOf(b.day) ||
            (toMinutes(a.time) ?? 9999) - (toMinutes(b.time) ?? 9999),
        ),
    [allClasses, day, type, style, teacher, search],
  );
  const grouped = DAYS.map((name) => ({
    day: name,
    classes: filtered.filter((c) => c.day === name),
  })).filter((g) => g.classes.length);
  const selectedKeys = new Set(selected.map(keyOf));
  const toggle = (item) =>
    setSelected((current) =>
      current.some((c) => keyOf(c) === keyOf(item))
        ? current.filter((c) => keyOf(c) !== keyOf(item))
        : [...current, item],
    );
  const chooseDay = () => {
    const items = filtered.filter((c) => c.day === day);
    const allChosen = items.every((c) => selectedKeys.has(keyOf(c)));
    setSelected((current) =>
      allChosen
        ? current.filter((c) => !items.some((i) => keyOf(i) === keyOf(c)))
        : [...current, ...items.filter((c) => !selectedKeys.has(keyOf(c)))],
    );
  };
  const reset = () => {
    setDay("All");
    setType("all");
    setStyle("All");
    setTeacher("All");
    setSearch("");
  };
  const upcoming = useMemo(
    () =>
      events
        .filter(
          (e) =>
            e.eventStart &&
            new Date(`${e.eventStart}T12:00:00`) >=
              new Date(new Date().toDateString()),
        )
        .sort((a, b) => a.eventStart.localeCompare(b.eventStart))
        .slice(0, 3),
    [],
  );
  const activeCancellations = cancellations.filter(
    (c) =>
      c.date >= new Date().toLocaleDateString("en-CA") &&
      (day === "All" ||
        DAYS[
          new Date(`${c.date}T12:00:00`).getDay() === 0
            ? 6
            : new Date(`${c.date}T12:00:00`).getDay() - 1
        ] === day),
  );
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const bookSelected = () => {
    if (!selected.length) return;
    const classes = selected.map((c) => ({
      ...c,
      endTime:
        durationFor(c) && toMinutes(c.time) != null
          ? clock(toMinutes(c.time) + durationFor(c))
          : c.endTime,
      durationMinutes: durationFor(c),
    }));
    navigate("/book", {
      state: {
        bookingType: "multiple-classes",
        selectedClasses: classes,
        classes,
        classCount: classes.length,
        classSummary: classes
          .map(
            (c) => `${c.day} ${timing(c).range} · ${c.dance} (${c.instructor})`,
          )
          .join("; "),
      },
    });
  };
  return (
    <main className="min-h-screen bg-base-200/40 pb-20">
      <div className="mx-auto max-w-7xl px-4 pt-7 sm:px-6 lg:px-8">
        <motion.header
          {...ease}
          className="relative mb-14 overflow-hidden rounded-[2rem] bg-neutral px-6 py-14 text-neutral-content shadow-xl sm:px-12 sm:py-20"
        >
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
          <div className="relative max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest">
              <Sparkles size={15} /> Freedom Dance Studio
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight sm:text-6xl">
              Find your rhythm.
              <br />
              <span className="text-primary">Book your next class.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed opacity-80 sm:text-lg">
              Explore weekly classes, see exact class times and durations, and
              reserve your spot in just a few clicks.
            </p>
            <a href="#weekly-classes" className="btn btn-primary mt-8 gap-2">
              Explore class schedule <ArrowRight size={18} />
            </a>
          </div>
        </motion.header>

        {specialOffers.length > 0 && (
          <section className="mb-16">
            <Heading
              eyebrow="Limited-time packages"
              title="More dancing. More value."
              description="Explore our special training packages and offers."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {specialOffers.map((offer) => (
                <motion.article
                  {...ease}
                  key={offer.id}
                  className="flex flex-col rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="badge badge-primary badge-outline">
                      {offer.badge || "Special offer"}
                    </span>
                    <span className="text-3xl">{offer.icon || "✨"}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-black">{offer.name}</h3>
                  <p className="mt-2 text-sm text-base-content/65">
                    {offer.description}
                  </p>
                  <div className="mt-5">
                    <span className="text-4xl font-black">{offer.price}</span>
                    <span className="ml-2 text-sm text-base-content/60">
                      {offer.period}
                    </span>
                  </div>
                  <ul className="my-6 flex-1 space-y-3">
                    {(offer.features || []).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check
                          size={17}
                          className="mt-0.5 shrink-0 text-success"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="btn btn-primary w-full"
                    onClick={() =>
                      navigate("/membersForm", {
                        state: { ...offer, bookingType: "special-package" },
                      })
                    }
                  >
                    {offer.button || "Explore offer"} <ChevronRight size={16} />
                  </button>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {upcoming.length > 0 && (
          <section className="mb-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <Heading
                eyebrow="What's happening"
                title="Upcoming events"
                description="Workshops, intensives, and special experiences."
              />
              <Link to="/events" className="btn btn-outline btn-sm mb-7">
                All events <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {upcoming.map((event) => (
                <motion.article
                  {...ease}
                  key={event.id}
                  className="flex flex-col overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm"
                >
                  {event.image && (
                    <div className="h-52 bg-base-200">
                      <img
                        src={event.image}
                        alt={event.title || "Dance event"}
                        className={`h-full w-full ${event.imageFit === "contain" ? "object-contain p-2" : "object-cover"}`}
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="badge badge-accent badge-outline">
                      Event / Workshop
                    </span>
                    <h3 className="mt-3 text-xl font-black">{event.title}</h3>
                    <p className="mt-3 flex items-center gap-2 text-sm text-base-content/70">
                      <CalendarDays size={16} />
                      {eventDate(event.eventStart)}
                      {event.eventEnd ? ` – ${eventDate(event.eventEnd)}` : ""}
                    </p>
                    {event.instructor && (
                      <p className="mt-2 flex items-center gap-2 text-sm text-base-content/70">
                        <Users size={16} />
                        {event.instructor}
                      </p>
                    )}
                    {event.location && (
                      <p className="mt-2 flex items-center gap-2 text-sm text-base-content/70">
                        <MapPin size={16} />
                        {event.location}
                      </p>
                    )}
                    {event.description && (
                      <p className="mt-3 line-clamp-3 text-sm text-base-content/65">
                        {event.description}
                      </p>
                    )}
                    {event.price && (
                      <p className="mt-4 text-lg font-black">{event.price}</p>
                    )}
                    <button
                      className="btn btn-primary mt-6 w-full"
                      onClick={() =>
                        navigate("/book", {
                          state: {
                            bookingType: "event",
                            event,
                            findEvent: event,
                          },
                        })
                      }
                    >
                      Register now <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        <section id="weekly-classes" className="scroll-mt-8">
          <Heading
            eyebrow="Your weekly routine"
            title="Weekly class schedule"
            description="Every class shows its start time, end time when known, and total duration. Select multiple classes to book together."
          />
          {activeCancellations.map((c) => (
            <div
              key={c.date}
              role="alert"
              className="mb-6 flex gap-4 rounded-2xl border border-warning/40 bg-warning/10 p-5"
            >
              <CalendarX2 className="shrink-0 text-warning" />
              <div>
                <h3 className="font-bold">
                  {c.title} · {eventDate(c.date)}
                </h3>
                <p className="mt-1 text-sm text-base-content/70">{c.reason}</p>
              </div>
            </div>
          ))}
          <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { value: "all", label: "All classes", icon: CalendarDays },
              {
                value: "freedom",
                label: "Freedom classes",
                icon: GraduationCap,
              },
              {
                value: "independent",
                label: "Independent instructors",
                icon: Users,
              },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setType(option.value)}
                className={`flex min-h-16 items-center gap-3 rounded-2xl border px-5 text-left font-bold transition ${type === option.value ? "border-primary bg-primary text-primary-content shadow-md" : "border-base-300 bg-base-100 hover:border-primary/50"}`}
              >
                <option.icon size={21} />
                {option.label}
              </button>
            ))}
          </div>
          <div className="mb-6 rounded-3xl border border-base-300 bg-base-100 p-4 shadow-sm sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-black">Find your class</h3>
                <p className="text-sm text-base-content/60">
                  {filtered.length} matching classes
                </p>
              </div>
              <div className="flex gap-2">
                <button className="btn btn-ghost btn-sm" onClick={reset}>
                  <RotateCcw size={15} /> Reset
                </button>
                <button
                  className="btn btn-outline btn-sm lg:hidden"
                  onClick={() => setShowFilters((v) => !v)}
                >
                  <SlidersHorizontal size={15} /> Filters
                </button>
              </div>
            </div>
            <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
              {["All", ...DAYS].map((d) => (
                <button
                  key={d}
                  onClick={() => setDay(d)}
                  className={`btn btn-sm shrink-0 rounded-full ${day === d ? "btn-primary" : "btn-ghost border border-base-300"}`}
                >
                  {d}
                </button>
              ))}
            </div>
            <div
              className={`mt-4 grid gap-3 lg:grid-cols-3 ${showFilters ? "grid" : "hidden lg:grid"}`}
            >
              <label className="form-control">
                <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-base-content/60">
                  Dance style
                </span>
                <select
                  className="select select-bordered w-full"
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                >
                  <option value="All">All styles</option>
                  {styles.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
              <label className="form-control">
                <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-base-content/60">
                  Instructor
                </span>
                <select
                  className="select select-bordered w-full"
                  value={teacher}
                  onChange={(e) => setTeacher(e.target.value)}
                >
                  <option value="All">All instructors</option>
                  {teachers.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className="form-control">
                <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-base-content/60">
                  Search
                </span>
                <span className="relative block">
                  <Search
                    className="absolute left-3 top-3.5 text-base-content/40"
                    size={18}
                  />
                  <input
                    className="input input-bordered w-full pl-10"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search classes..."
                  />
                </span>
              </label>
            </div>
          </div>
          {day !== "All" && filtered.length > 0 && (
            <div className="mb-5 flex justify-end">
              <button
                onClick={chooseDay}
                className="btn btn-outline btn-primary btn-sm"
              >
                {filtered.every((c) => selectedKeys.has(keyOf(c)))
                  ? `Remove visible ${day} classes`
                  : `Select all visible ${day} classes`}
              </button>
            </div>
          )}
          {grouped.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-base-300 bg-base-100 p-12 text-center">
              <Search className="mx-auto mb-3 text-base-content/40" />
              <p className="font-bold">No classes match your filters.</p>
              <button onClick={reset} className="btn btn-primary btn-sm mt-4">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="space-y-9">
              {grouped.map((group) => (
                <div key={group.day}>
                  <div className="mb-4 flex items-center gap-3">
                    <h3 className="text-xl font-black sm:text-2xl">
                      {group.day}
                    </h3>
                    <span className="badge badge-ghost">
                      {group.classes.length} classes
                    </span>
                    <div className="h-px flex-1 bg-base-300" />
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {group.classes.map((item) => {
                      const info = timing(item);
                      const chosen = selectedKeys.has(keyOf(item));
                      return (
                        <motion.article
                          {...ease}
                          key={keyOf(item)}
                          className={`flex flex-col rounded-3xl border bg-base-100 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg sm:p-6 ${chosen ? "border-primary ring-2 ring-primary/20" : "border-base-300"}`}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <span
                              className={`badge ${item.type === "independent" ? "badge-secondary" : "badge-primary"} badge-outline text-xs`}
                            >
                              {item.type === "independent"
                                ? "Independent instructor"
                                : "Freedom class"}
                            </span>
                            <span className="text-lg font-black text-primary">
                              {item.drop || "Ask instructor"}
                            </span>
                          </div>
                          <h4 className="mt-4 min-h-12 text-xl font-black leading-tight">
                            {item.dance}
                          </h4>
                          <span className="mt-2 self-start rounded-full bg-base-200 px-3 py-1 text-xs font-semibold text-base-content/70">
                            {item.level || "All levels"}
                          </span>
                          <div className="mt-5 rounded-2xl border border-primary/15 bg-primary/5 p-4">
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-base-content/60">
                              <Clock3 size={15} /> Class time
                            </div>
                            <p className="mt-2 text-lg font-black leading-snug sm:text-xl">
                              {info.range}
                            </p>
                            <span className="mt-3 inline-flex rounded-lg bg-primary px-3 py-1.5 text-sm font-extrabold text-primary-content">
                              <Clock3 size={15} className="mr-2" />
                              {info.duration}
                            </span>
                          </div>
                          <div className="mt-5 flex items-center gap-3">
                            <Avatar item={item} />
                            <div>
                              <p className="text-xs text-base-content/50">
                                Instructor
                              </p>
                              <p className="font-bold">
                                {item.instructor || "To be announced"}
                              </p>
                            </div>
                          </div>
                          <button
                            type="button"
                            aria-pressed={chosen}
                            onClick={() => toggle(item)}
                            className={`btn mt-6 w-full ${chosen ? "btn-outline btn-primary" : item.type === "independent" ? "btn-secondary" : "btn-primary"}`}
                          >
                            {chosen ? (
                              <>
                                <Check size={17} /> Selected — remove
                              </>
                            ) : (
                              <>
                                Select class <ChevronRight size={17} />
                              </>
                            )}
                          </button>
                        </motion.article>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="sticky bottom-3 z-20 mt-8 rounded-2xl border border-primary/25 bg-base-100/95 p-4 shadow-2xl backdrop-blur-md sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0">
                <h3 className="font-black">
                  Your selected classes{" "}
                  <span className="text-primary">({selected.length})</span>
                </h3>
                <p className="text-xs text-base-content/60">
                  Choose one or more classes, then continue to booking.
                </p>
                {selected.length > 0 && (
                  <div className="mt-3 flex max-h-24 flex-wrap gap-2 overflow-y-auto">
                    {selected.map((c) => (
                      <button
                        key={keyOf(c)}
                        onClick={() => toggle(c)}
                        className="inline-flex max-w-full items-center gap-2 rounded-full bg-base-200 px-3 py-1.5 text-left text-xs font-semibold hover:bg-base-300"
                      >
                        <span className="truncate">
                          {c.day} · {c.dance} · {timing(c).duration}
                        </span>
                        <X size={13} className="shrink-0" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex shrink-0 gap-2">
                {selected.length > 0 && (
                  <button
                    onClick={() => setSelected([])}
                    className="btn btn-ghost"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={bookSelected}
                  disabled={!selected.length}
                  className="btn btn-primary flex-1 lg:flex-none"
                >
                  Continue with {selected.length}{" "}
                  {selected.length === 1 ? "class" : "classes"}
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-16 rounded-3xl border border-secondary/25 bg-secondary/10 p-7 sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                Our dance community
              </p>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl">
                Meet our independent instructors
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-base-content/70">
                Explore additional dance styles taught by independent
                professionals who host classes at Freedom Dance Studio. Their
                classes are independently operated.
              </p>
            </div>
            <Link to="/independent" className="btn btn-secondary shrink-0">
              Meet instructors <ArrowRight size={16} />
            </Link>
          </div>
        </section>
        <section className="mt-16">
          <Heading
            eyebrow="Beyond the weekly schedule"
            title="More ways to learn & celebrate"
            description="From private instruction to live entertainment, find the right experience for you."
          />
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.id}
                className="flex flex-col rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm"
              >
                <span className="text-4xl">{s.icon}</span>
                <h3 className="mt-5 text-xl font-black">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-base-content/65">
                  {s.description}
                </p>
                <p className="mt-4 text-xs text-base-content/60">{s.styles}</p>
                <div className="mt-5 rounded-xl bg-base-200 p-3">
                  <p className="flex items-center gap-2 text-sm font-bold">
                    <Clock3 size={15} />
                    {s.duration}
                  </p>
                  <p className="mt-2 text-xl font-black text-primary">
                    {s.price}
                  </p>
                </div>
                <button
                  className="btn btn-primary mt-5 w-full"
                  onClick={() => navigate("/membersForm", { state: s })}
                >
                  Book now <ArrowRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </section>
        <section className="mt-16 rounded-3xl bg-neutral p-8 text-center text-neutral-content sm:p-12">
          <Music2 className="mx-auto mb-4 text-primary" size={34} />
          <h2 className="text-3xl font-black">
            Your dance journey starts here.
          </h2>
          <p className="mx-auto mt-3 max-w-xl opacity-75">
            Find your class, train with our instructors, and become part of the
            Freedom Dance Studio community.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#weekly-classes" className="btn btn-primary">
              View schedule
            </a>
            <Link
              to="/events"
              className="btn btn-outline border-white/40 text-white"
            >
              Explore events
            </Link>
            <Link
              to="/rental"
              className="btn btn-outline border-white/40 text-white"
            >
              Rent the studio
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
