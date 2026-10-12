import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import lady from "../assets/lady/followerClip1.jpeg";
import recent from "../assets/recentClip.jpeg";
import recent1 from "../assets/recentClip1.jpeg";
import recent2 from "../assets/recentClip2.jpeg";
import social from "../assets/sbkParty/FJ8A6429.jpg";
import steven from "../assets/instructors/steven.png";
import luna from "../assets/adriana.jpg";
import desmond from "../assets/instructors/desmond.jpg";

const schedule = [
  {
    dance: "Bachata Sensual",

    day: "Monday",

    time: "7:00 PM - 8:00 PM",

    instructor: "Steven",

    level: "Beginner",

    image: steven,

    drop: 15,
  },

  {
    dance: "Bachata Ladies Styling ",

    day: "Monday",

    time: "6:00 PM - 7:00 PM",

    instructor: "Luna",

    level: "Beginner",

    image: luna,

    drop: 15,
  },

  {
    dance: "Kizomba",

    day: "Monday",

    time: "6:00 PM - 7:00 PM",

    instructor: "Steven",

    level: "Beginner",

    image: steven,

    drop: 0,
  },

  {
    dance: "Salsa",

    day: "Tuesday",

    time: "6:00 PM - 7:00 PM",

    instructor: "Steven",

    level: "Beginner",

    image: steven,

    drop: 15,
  },

  {
    dance: "Bachata",

    day: "Tuesday",

    time: "7:00 PM - 8:00 PM",

    instructor: "Steven",

    level: "Beginner",

    image: steven,

    drop: 15,
  },

  {
    dance: "Konpa",

    day: "Tuesday",

    time: "8:00 PM - 9:00 PM",

    instructor: "Steven",

    level: "All Levels",

    image: steven,

    drop: 15,
  },

  {
    dance: "Urban Kiz",

    day: "Wednesday",

    time: "6:00 PM - 7:00 PM",

    instructor: "Steven",

    level: "Intermediate",

    image: steven,

    drop: 15,
  },

  {
    dance: "Bachata Sensual",

    day: "Wednesday",

    time: "7:00 PM - 8:00 PM",

    instructor: "Steven",

    level: "Intermediate",

    image: steven,

    drop: 15,
  },

  {
    dance: "Bachata Ladies Styling",

    day: "Thursday",

    time: "6:30 PM - 7:30 PM",

    instructor: "Zagir",

    level: "Beginner",

    image: lady,

    drop: 15,
  },

  {
    dance: "Social Dance Practice",

    day: "Friday",

    time: "8:00 PM - 11:00 PM",

    level: "Open to Everyone",

    image: social,

    drop: 15,
  },

  {
    dance: "Kizomba",

    day: "Saturday",

    instructor: "Steven",

    time: "2:00 PM - 3:00 PM",

    level: "All Levels",

    image: steven,

    drop: 15,
  },

  {
    dance: "Bachata",

    day: "Saturday",

    time: "3:00 PM - 4:00 PM",

    instructor: "Steven",

    level: "All Levels",

    image: steven,

    drop: 15,
  },

  {
    dance: "Salsa",

    day: "Saturday",

    instructor: "Desmond",

    time: "4:00 PM - 5:00 PM",

    level: "Beginner",

    image: desmond,

    drop: 15,
  },

  {
    dance: "Salsa",

    day: "Saturday",

    instructor: "Desmond",

    time: "5:00 PM - 6:00 PM",

    level: "Intermediate",

    image: desmond,

    drop: 15,
  },

  {
    dance: "Restorative Yoga",

    day: "Friday",

    level: "All Levels",

    instructor: "Olivia Wilson",

    time: "5:00 PM - 6:15 PM",

    description:
      "A calming practice using props and gentle poses to reduce stress, promote healing, and restore both body and mind.",

    image: recent,

    drop: 15,
  },
];

const pricing = [
  {
    title: "Single Class",

    price: "$15",

    description: "One class admission",
  },

  {
    title: "Monthly Unlimited",

    price: "$99",

    description: "Unlimited Adult Classes",

    featured: true,
  },

  {
    title: "Couple ",

    price: "$189",

    description: "Unlimited Adult Classes",
  },
];

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const styles = [
  "All Styles",
  ...new Set(schedule.map((item) => item.dance.trim())),
].sort((a, b) =>
  a === "All Styles" ? -1 : b === "All Styles" ? 1 : a.localeCompare(b),
);

function minutesFromTime(range) {
  const match = range.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!match) return 0;
  const hour =
    (Number(match[1]) % 12) + (match[3].toUpperCase() === "PM" ? 12 : 0);
  return hour * 60 + Number(match[2]);
}

export default function AdultClasses() {
  const navigate = useNavigate();
  const [dayFilter, setDayFilter] = useState("All Days");
  const [styleFilter, setStyleFilter] = useState("All Styles");
  const [levelFilter, setLevelFilter] = useState("All Levels");

  const filteredClasses = useMemo(
    () =>
      schedule
        .filter((item) => dayFilter === "All Days" || item.day === dayFilter)
        .filter(
          (item) =>
            styleFilter === "All Styles" || item.dance.trim() === styleFilter,
        )
        .filter(
          (item) => levelFilter === "All Levels" || item.level === levelFilter,
        )
        .sort(
          (a, b) =>
            days.indexOf(a.day) - days.indexOf(b.day) ||
            minutesFromTime(a.time) - minutesFromTime(b.time) ||
            a.dance.localeCompare(b.dance),
        ),
    [dayFilter, styleFilter, levelFilter],
  );

  const reserve = (item) => navigate("/book", { state: item });
  const join = (plan) => navigate("/membersForm", { state: plan });
  const clearFilters = () => {
    setDayFilter("All Days");
    setStyleFilter("All Styles");
    setLevelFilter("All Levels");
  };

  return (
    <section className="bg-base-200 min-h-screen py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="hero bg-base-100 rounded-3xl shadow-xl mb-14 overflow-hidden">
          <div className="hero-content flex-col lg:flex-row gap-8 py-10">
            <img
              src={recent1}
              alt="Adult dance class"
              className="rounded-2xl shadow-lg w-full lg:w-1/2 max-h-80 object-cover"
            />
            <div>
              <h1 className="text-3xl md:text-5xl font-bold">
                Adult Dance Classes
              </h1>
              <p className="py-5 text-lg">
                Find your next Salsa, Bachata, Kizomba, Konpa, or Urban Kiz
                class at Freedom Dance Studio. All experience levels welcome!
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  document
                    .getElementById("weekly-schedule")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Classes
              </button>
            </div>
          </div>
        </div>

        <div id="weekly-schedule" className="scroll-mt-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Weekly Schedule
          </h2>
          <p className="text-center opacity-70 mt-3 mb-8">
            Choose a day, dance style, or level to find your class.
          </p>

          <div className="bg-base-100 rounded-2xl shadow p-5 mb-8 space-y-5">
            <div>
              <label className="block font-semibold mb-3">Choose a day</label>
              <div className="flex flex-wrap gap-2">
                {["All Days", ...days].map((day) => (
                  <button
                    type="button"
                    key={day}
                    onClick={() => setDayFilter(day)}
                    aria-pressed={dayFilter === day}
                    className={`btn btn-sm ${dayFilter === day ? "btn-primary" : "btn-outline"}`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="form-control w-full">
                <span className="label-text font-semibold mb-2">
                  Dance style
                </span>
                <select
                  className="select select-bordered w-full"
                  value={styleFilter}
                  onChange={(e) => setStyleFilter(e.target.value)}
                >
                  {styles.map((style) => (
                    <option key={style} value={style}>
                      {style}
                    </option>
                  ))}
                </select>
              </label>
              <label className="form-control w-full">
                <span className="label-text font-semibold mb-2">
                  Experience level
                </span>
                <select
                  className="select select-bordered w-full"
                  value={levelFilter}
                  onChange={(e) => setLevelFilter(e.target.value)}
                >
                  {[
                    "All Levels",
                    ...new Set(schedule.map((item) => item.level)),
                  ].map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="font-medium" aria-live="polite">
                {filteredClasses.length}{" "}
                {filteredClasses.length === 1 ? "class" : "classes"} found
              </span>
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={clearFilters}
              >
                Clear filters
              </button>
            </div>
          </div>

          {filteredClasses.length ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredClasses.map((item, index) => (
                <article
                  key={`${item.day}-${item.time}-${item.dance}-${item.instructor || index}`}
                  className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                >
                  <figure>
                    <img
                      src={item.image}
                      alt={`${item.dance} class`}
                      loading="lazy"
                      className="w-full h-56 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="card-title">{item.dance.trim()}</h3>
                      <span className="badge badge-primary badge-outline shrink-0">
                        {item.drop === 0 ? "Free" : `$${item.drop}`}
                      </span>
                    </div>
                    <p>
                      <strong>Day:</strong> {item.day}
                    </p>
                    <p>
                      <strong>Time:</strong> {item.time}
                    </p>
                    <p>
                      <strong>Level:</strong> {item.level}
                    </p>
                    {item.instructor && (
                      <p>
                        <strong>Instructor:</strong> {item.instructor}
                      </p>
                    )}
                    {item.description && (
                      <p className="text-sm opacity-75">{item.description}</p>
                    )}
                    <div className="card-actions mt-4">
                      <button
                        type="button"
                        className="btn btn-primary w-full"
                        onClick={() => reserve(item)}
                      >
                        Reserve Spot
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center bg-base-100 rounded-2xl p-12">
              <h3 className="text-xl font-semibold">
                No classes match these filters
              </h3>
              <p className="my-3 opacity-70">
                Try another day, style, or level.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={clearFilters}
              >
                Show all classes
              </button>
            </div>
          )}
        </div>

        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Membership & Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pricing.map((plan) => (
              <div
                key={plan.title}
                className={`card shadow-xl ${plan.featured ? "bg-primary text-primary-content" : "bg-base-100"}`}
              >
                <div className="card-body text-center">
                  <h3 className="text-2xl font-bold">{plan.title}</h3>
                  <div className="text-5xl font-bold my-4">{plan.price}</div>
                  <p>{plan.description}</p>
                  <button
                    type="button"
                    className={`btn mt-5 ${plan.featured ? "btn-secondary" : "btn-primary"}`}
                    onClick={() => join(plan)}
                  >
                    Join Today
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Why Dance With Us?
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["💃", "Expert Instructors"],
              ["🎶", "Social Dance Events"],
              ["❤️", "Friendly Community"],
              ["🏆", "Classes for Every Level"],
            ].map(([emoji, title]) => (
              <div key={title} className="card bg-base-100 shadow-lg">
                <div className="card-body items-center text-center">
                  <span className="text-4xl" aria-hidden="true">
                    {emoji}
                  </span>
                  <h3 className="font-bold">{title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
