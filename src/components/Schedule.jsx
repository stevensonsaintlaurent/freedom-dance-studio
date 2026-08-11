import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

const weeklySchedule = [
  {
    id: 1,
    day: "Monday",
    time: "6:00 PM",
    dance: "Beginner Kizomba",
    instructor: "Stevenson",
    drop: 15,
    level: "Beginner",
  },
  {
    id: 2,
    day: "Monday",
    time: "6:00 PM",
    dance: "Ladies Styling Bachata",
    instructor: "Luna",
    drop: 15,
    level: "Beginner",
  },
  {
    id: 3,
    day: "Monday",
    time: "7:00 PM",
    dance: "Beginner Bachata",
    instructor: "Stevenson",
    drop: 15,
    level: "Beginner",
  },
  {
    id: 4,
    day: "Tuesday",
    time: "6:00 PM",
    dance: "Beginner Salsa",
    instructor: "Stevenson",
    drop: 15,
    level: "Beginner",
  },
  {
    id: 5,
    day: "Tuesday",
    time: "7:00 PM",
    dance: "Beginner Bachata",
    instructor: "Stevenson",
    drop: 15,
    level: "Beginner",
  },
  {
    id: 6,
    day: "Tuesday",
    time: "8:00 PM",
    dance: "Konpa",
    instructor: "Stevenson",
    drop: 15,
    level: "Open Level",
  },
  {
    id: 7,
    day: "Wednesday",
    time: "6:00 PM",
    dance: "Intermediate Kizomba",
    instructor: "Stevenson",
    drop: 15,
    level: "Intermediate",
  },
  {
    id: 8,
    day: "Wednesday",
    time: "7:00 PM",
    dance: "Intermediate Bachata Sensual",
    instructor: "Stevenson",
    drop: 15,
    level: "Intermediate",
  },
  {
    id: 9,
    day: "Thursday",
    time: "6:30 PM",
    dance: "Ladies Styling Bachata",
    instructor: "Zagir",
    drop: 15,
    level: "Beginner",
  },
  {
    id: 10,
    day: "Saturday",
    time: "2:00 PM",
    dance: "Open Level Kizomba",
    instructor: "Stevenson",
    drop: 15,
    level: "Open Level",
  },
  {
    id: 11,
    day: "Saturday",
    time: "3:00 PM",
    dance: "Open Level Bachata",
    instructor: "Stevenson",
    drop: 15,
    level: "Open Level",
  },
  {
    id: 12,
    day: "Saturday",
    time: "4:00 PM",
    dance: "Beginner Salsa",
    instructor: "Desmond",
    drop: 15,
    level: "Beginner",
  },
  {
    id: 13,
    day: "Saturday",
    time: "5:00 PM",
    dance: "Intermediate Salsa",
    instructor: "Desmond",
    drop: 15,
    level: "Intermediate",
  },
];

const days = [
  "All",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

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
  // FILTER SCHEDULE
  // ==============================

  const filteredSchedule = useMemo(() => {
    if (selectedDay === "All") {
      return weeklySchedule;
    }

    return weeklySchedule.filter((item) => item.day === selectedDay);
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
            DESKTOP TABLE
        ============================== */}

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
                      <span className="badge badge-outline">{item.level}</span>
                    </td>

                    <td>{item.instructor}</td>

                    <td>${item.drop}</td>

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

        {/* ==============================
            MOBILE SCHEDULE CARDS
        ============================== */}

        <div className="md:hidden space-y-4 mb-16">
          {filteredSchedule.length === 0 ? (
            <div className="alert alert-info">
              <span>No classes scheduled for this day.</span>
            </div>
          ) : (
            filteredSchedule.map((item, index) => (
              <div
                key={item.id}
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
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
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
              </div>
            ))
          )}
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
