import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CalendarX2, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

// ==============================
// SERVICES
// ==============================

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

// ==============================
// WEEKLY SCHEDULE
// ==============================

const weeklySchedule = [
  {
    id: 1,
    day: "Monday",
    time: "6:00 PM",
    dance: "Beginner Kizomba",
    instructor: "Stevenson",
    drop: 0,
    level: "Beginner",
  },
  {
    id: 2,
    day: "Monday",
    time: "6:00 PM",
    dance: "Ladies Styling Bachata",
    instructor: "Luna",
    drop: "$15",
    level: "Beginner",
  },
  {
    id: 3,
    day: "Monday",
    time: "7:00 PM",
    dance: "Beginner Bachata",
    instructor: "Stevenson",
    drop: "$15",
    level: "Beginner",
  },
  {
    id: 4,
    day: "Tuesday",
    time: "6:00 PM",
    dance: "Beginner Salsa",
    instructor: "Stevenson",
    drop: "$15",
    level: "Beginner",
  },
  {
    id: 5,
    day: "Tuesday",
    time: "7:00 PM",
    dance: "Beginner Bachata",
    instructor: "Stevenson",
    drop: "$15",
    level: "Beginner",
  },
  {
    id: 6,
    day: "Tuesday",
    time: "8:00 PM",
    dance: "Konpa",
    instructor: "Stevenson",
    drop: "$15",
    level: "Open Level",
  },
  {
    id: 7,
    day: "Wednesday",
    time: "6:00 PM",
    dance: "Intermediate Kizomba",
    instructor: "Stevenson",
    drop: "$15",
    level: "Intermediate",
  },
  {
    id: 8,
    day: "Wednesday",
    time: "7:00 PM",
    dance: "Intermediate Bachata Sensual",
    instructor: "Stevenson",
    drop: "$15",
    level: "Intermediate",
  },
  {
    id: 9,
    day: "Thursday",
    time: "6:30 PM",
    dance: "Ladies Styling Bachata",
    instructor: "Zagir",
    drop: "$15",
    level: "Beginner",
  },
  {
    id: 10,
    day: "Saturday",
    time: "2:00 PM",
    dance: "Open Level Kizomba",
    instructor: "Stevenson",
    drop: "$15",
    level: "Open Level",
  },
  {
    id: 11,
    day: "Saturday",
    time: "3:00 PM",
    dance: "Open Level Bachata",
    instructor: "Stevenson",
    drop: "$15",
    level: "Open Level",
  },
  {
    id: 12,
    day: "Saturday",
    time: "4:00 PM",
    dance: "Beginner Salsa",
    instructor: "Desmond",
    drop: "$15",
    level: "Beginner",
  },
  {
    id: 13,
    day: "Saturday",
    time: "5:00 PM",
    dance: "Intermediate Salsa",
    instructor: "Desmond",
    drop: "$15",
    level: "Intermediate",
  },
  {
    id: 14,
    day: "Saturday",
    time: "5:00 PM",
    dance: "Jazz Band ",
    instructor: "Alain",
    drop: "Free",
    level: "All Levels",
  },
];

// ==============================
// DAYS
// ==============================

const days = [
  "All",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// ==================================================
// CANCELLED DAYS
// ==================================================
//
// To cancel an entire day, add it here.
//
// Example:
// {
//   day: "Thursday",
//   date: "August 27, 2026",
//   reason: "All classes are cancelled for this day.",
// }
//
// When a day is added here:
// 1. The cancellation announcement appears.
// 2. All classes for that day disappear.
// 3. Nobody can book a cancelled class.
// 4. The other days continue normally.
//
// ==================================================

// const cancelledDays = [
//   {
//     day: "Friday",
//     date: "August 28, 2026",
//     title: "All Classes Cancelled",
//     reason:
//       "Our Freedom Dance Studio students and instructors will be traveling together for our Lake Havasu trip. All regular classes are cancelled while our community enjoys this special weekend together.",
//   },
//   {
//     day: "Saturday",
//     date: "August 29, 2026",
//     title: "All Classes Cancelled",
//     reason:
//       "Our Freedom Dance Studio students and instructors are away together for our Lake Havasu trip. Regular classes are cancelled so our community can enjoy this special weekend together.",
//   },
//   {
//     day: "Sunday",
//     date: "August 30, 2026",
//     title: "All Classes Cancelled",
//     reason:
//       "Our Freedom Dance Studio students and instructors are returning from our Lake Havasu trip. Regular classes are cancelled for the day.",
//   },
// ];
const cancelledDays = [];

// ==============================
// COMPONENT
// ==============================

export default function Schedule() {
  const navigate = useNavigate();

  const [selectedDay, setSelectedDay] = useState("All");

  // ==============================
  // BOOKING
  // ==============================

  const handleBooking = (id) => {
    const findSchedule = weeklySchedule.find((week) => week.id === id);

    navigate("/book", {
      state: findSchedule,
    });
  };

  // ==============================
  // SERVICES
  // ==============================

  const handleServices = (id) => {
    const findService = services.find((service) => service.id === id);

    navigate("/membersForm", {
      state: findService,
    });
  };

  // ==============================
  // CHECK IF DAY IS CANCELLED
  // ==============================

  const isDayCancelled = (day) => {
    return cancelledDays.some((cancelled) => cancelled.day === day);
  };

  // ==============================
  // FILTER SCHEDULE
  // ==============================

  const filteredSchedule = useMemo(() => {
    // Remove ALL cancelled days first.
    const activeSchedule = weeklySchedule.filter(
      (item) => !isDayCancelled(item.day),
    );

    // If "All Days" is selected,
    // show all classes except cancelled days.
    if (selectedDay === "All") {
      return activeSchedule;
    }

    // If a cancelled day is selected,
    // return nothing.
    if (isDayCancelled(selectedDay)) {
      return [];
    }

    // Otherwise show the selected day.
    return activeSchedule.filter((item) => item.day === selectedDay);
  }, [selectedDay]);

  // ==============================
  // CURRENT CANCELLATION
  // ==============================

  const visibleCancellations = useMemo(() => {
    return cancelledDays.filter(
      (cancelled) => selectedDay === "All" || cancelled.day === selectedDay,
    );
  }, [selectedDay]);

  // ==============================
  // SCROLL TO TOP
  // ==============================

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="w-full overflow-x-hidden py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        {/* ==============================
            HEADER
        ============================== */}

        <div className="text-center mb-10">
          <h1
            className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              animate-[pulse_3s_ease-in-out_infinite]
            "
          >
            Dance Schedule & Bookings
          </h1>

          <p className="mt-4 text-lg opacity-70">
            Learn • Play • Dance • Perform • Celebrate
          </p>
        </div>

        {/* ==============================
            FULL DAY CANCELLATION
        ============================== */}

        {visibleCancellations.map((cancelled) => (
          <motion.div
            key={cancelled.date}
            initial={{
              opacity: 0,
              y: -35,
              scale: 0.96,
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
            className="
              relative
              mb-8
              overflow-hidden
              rounded-3xl
              border
              border-error/30
              bg-error/10
              shadow-xl
            "
          >
            {/* Animated glow */}

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
              className="
                absolute
                -right-20
                -top-20
                h-56
                w-56
                rounded-full
                bg-error/30
                blur-3xl
              "
            />

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.1, 0.25, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="
                absolute
                -bottom-20
                -left-20
                h-56
                w-56
                rounded-full
                bg-warning/20
                blur-3xl
              "
            />

            <div className="relative p-6 sm:p-8">
              {/* Main announcement */}

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                {/* Icon */}

                <motion.div
                  animate={{
                    rotate: [0, -8, 8, -5, 5, 0],
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.3,
                  }}
                  className="
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-error
                    text-error-content
                    shadow-lg
                  "
                >
                  <CalendarX2 className="h-8 w-8" />
                </motion.div>

                {/* Text */}

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-2xl font-black sm:text-3xl">
                      All Classes Cancelled
                    </h2>

                    <span className="badge badge-error font-bold">
                      Important
                    </span>
                  </div>

                  <p className="mt-2 text-base text-base-content/70">
                    There will be no regular classes at Freedom Dance Studio on
                    this day.
                  </p>

                  {/* Date */}

                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="badge badge-lg gap-2">
                      📅 {cancelled.date}
                    </span>

                    <span className="badge badge-lg gap-2">🚫 All Day</span>
                  </div>
                </div>
              </div>

              {/* Warning message */}

              <div
                className="
                  mt-6
                  flex
                  items-start
                  gap-3
                  rounded-2xl
                  bg-warning/10
                  p-4
                "
              >
                <AlertTriangle
                  className="
                    mt-0.5
                    h-5
                    w-5
                    shrink-0
                    text-warning
                  "
                />

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

        {/* ==============================
            DAY FILTER
        ============================== */}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold">Weekly Classes</h2>

            <p className="text-sm opacity-60 mt-1">
              Choose a day to see available classes.
            </p>
          </div>

          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="select select-primary w-full sm:w-56"
          >
            {days.map((day) => (
              <option key={day} value={day}>
                {day === "All" ? "All Days" : day}
              </option>
            ))}
          </select>
        </div>

        {/* ==============================
            CANCELLED DAY MESSAGE
        ============================== */}

        {selectedDay !== "All" && isDayCancelled(selectedDay) && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mb-16"
          >
            <div className="alert alert-error shadow-xl rounded-2xl">
              <CalendarX2 className="h-6 w-6" />

              <div>
                <h3 className="font-bold">No Classes on {selectedDay}</h3>

                <p className="text-sm">
                  All classes have been cancelled for this day.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* ==============================
            DESKTOP TABLE
        ============================== */}

        {filteredSchedule.length > 0 && (
          <div className="hidden md:block w-full max-w-full mb-16">
            <div className="rounded-xl shadow-xl overflow-hidden">
              <table className="table table-zebra bg-base-100 w-full">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Class</th>
                    <th>Level</th>
                    <th>Instructor</th>
                    <th>Drop-In</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {filteredSchedule.map((item) => (
                    <tr
                      key={item.id}
                      className="
                        transition-all
                        duration-300
                        hover:bg-base-200
                      "
                    >
                      <td className="font-semibold">{item.day}</td>

                      <td>{item.time}</td>

                      <td className="font-medium">{item.dance}</td>

                      <td>
                        <span className="badge badge-outline">
                          {item.level}
                        </span>
                      </td>

                      <td>{item.instructor}</td>

                      <td>{item.drop}</td>

                      <td>
                        <button
                          className="
                            btn
                            btn-primary
                            btn-sm
                            transition-all
                            duration-300
                            hover:scale-105
                          "
                          onClick={() => handleBooking(item.id)}
                        >
                          Book Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ==============================
            MOBILE SCHEDULE CARDS
        ============================== */}

        <div className="md:hidden space-y-4 mb-16">
          {filteredSchedule.length === 0
            ? !isDayCancelled(selectedDay) && (
                <div className="alert alert-info">
                  <span>No classes scheduled for this day.</span>
                </div>
              )
            : filteredSchedule.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.06,
                  }}
                  className="
                  card
                  bg-base-100
                  shadow-xl
                  border
                  border-base-200
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-2xl
                "
                >
                  <div className="card-body p-5">
                    {/* Day + Time */}

                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm opacity-60">{item.day}</p>

                        <p className="text-xl font-bold">{item.time}</p>
                      </div>

                      <span className="badge badge-primary">${item.drop}</span>
                    </div>

                    <div className="divider my-1"></div>

                    {/* Class */}

                    <h3 className="text-xl font-bold">{item.dance}</h3>

                    {/* Details */}

                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="badge badge-outline">{item.level}</span>

                      <span className="badge badge-ghost">
                        👤 {item.instructor}
                      </span>
                    </div>

                    {/* Button */}

                    <button
                      className="
                      btn
                      btn-primary
                      w-full
                      mt-4
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                    "
                      onClick={() => handleBooking(item.id)}
                    >
                      Book Now
                    </button>
                  </div>
                </motion.div>
              ))}
        </div>

        {/* ==============================
            SERVICES
        ============================== */}

        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Our Services</h2>

          <p className="mt-3 opacity-70">
            Choose the experience that fits your goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const { icon, title, description, color, styles, duration, price } =
              service;

            return (
              <div
                key={service.id}
                className="
                  card
                  bg-base-100
                  shadow-2xl
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:scale-[1.02]
                "
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="card-body">
                  <div className="text-5xl mb-2">{icon}</div>

                  <h2 className="card-title text-2xl">{title}</h2>

                  <p className="opacity-80">{description}</p>

                  <div className="divider"></div>

                  {/* Styles */}

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
                      className="
                        btn
                        btn-primary
                        w-full
                        transition-all
                        duration-300
                        hover:scale-105
                      "
                      onClick={() => handleServices(service.id)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==============================
            BOOKING CTA
        ============================== */}

        <div
          className="
            hero
            bg-primary
            text-primary-content
            rounded-3xl
            mt-20
            overflow-hidden
            transition-all
            duration-500
            hover:shadow-2xl
          "
        >
          <div className="hero-content text-center py-12 px-6">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Ready to Dance?
              </h2>

              <p className="py-6">
                Reserve your private lesson, partner session, group class, or
                book our live Latin Band & Orchestra for your next event.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/teachers"
                  className="
                    btn
                    btn-secondary
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Book Dance Lessons
                </Link>

                <button
                  className="
                    btn
                    btn-accent
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  Rehearsal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
