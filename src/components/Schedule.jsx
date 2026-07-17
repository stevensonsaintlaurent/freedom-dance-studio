import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Private Lessons",
    icon: "💃",
    color: "primary",
    description: "One-on-one personalized instruction for faster progress.",
    styles: ["Salsa", "Bachata", "Kizomba", "Konpa"],
    duration: "60 Minutes",
    price: "$80+",
  },
  {
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
    title: "Group Classes",
    icon: "👥",
    color: "accent",
    description: "Fun group classes for beginners through advanced dancers.",
    styles: ["Salsa", "Bachata", "Kizomba", "Konpa"],
    duration: "1 Hour",
    price: "$15 Drop-In",
  },
  {
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
    day: "Monday",
    time: "6:00 PM",
    class: "Beginner Kizomba",
    instructor: "Stevenson",
  },
  {
    day: "Monday",
    time: "6:00 PM",
    class: "Ladies styling",
    instructor: "Stevenson",
  },
  {
    day: "Monday",
    time: "7:00 PM",
    class: "Beginner Bachata",
    instructor: "Stevenson",
  },

  {
    day: "Tuesday",
    time: "6:00 PM",
    class: "Beginner Salsa",
    instructor: "Stevenson",
  },
  {
    day: "Tuesday",
    time: "7:00 PM",
    class: "Beginner Bachata",
    instructor: "Stevenson",
  },
  {
    day: "Tuesday",
    time: "8:00 PM",
    class: "Konpa",
    instructor: "Stevenson",
  },
  {
    day: "Wednesday",
    time: "6:00 PM",
    class: "Intermediate Kizomba",
    instructor: "Staff",
  },
  {
    day: "Wednesday",
    time: "7:00 PM",
    class: "Intermediate Bachata",
    instructor: "Staff",
  },

  {
    day: "Thursday",
    time: "6:30 PM",
    class: "Ladies Styling",
    instructor: "Staff",
  },
  {
    day: "Saturday",
    time: "2:00 PM",
    class: "Open Level Kizomba",
    instructor: "Staff",
  },
  {
    day: "Saturday",
    time: "3:00 PM",
    class: "Open Level Bachata",
    instructor: "Staff",
  },
  {
    day: "Saturday",
    time: "4:00 PM",
    class: "Beginner Salsa",
    instructor: "Desmond",
  },

  {
    day: "Saturday",
    time: "5:00 PM",
    class: "Intermediate Salsa",
    instructor: "Desmond",
  },
];

export default function Schedule() {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-primary">
            Dance Schedule & Bookings
          </h2>

          <p className="mt-4 text-lg opacity-70">
            Learn • Play • Dance • Perform • Celebrate
          </p>
        </div>

        {/* Weekly Schedule */}

        <div className="overflow-x-auto mb-16">
          <table className="table table-zebra bg-base-100 rounded-xl shadow-xl">
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Class</th>
                <th>Instructor</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {weeklySchedule.map((item, index) => {
                const { day, time, class: lesson, instructor } = item;
                return (
                  <tr key={index}>
                    <td>{day}</td>
                    <td>{time}</td>
                    <td>{lesson}</td>
                    <td>{instructor}</td>
                    <td>
                      <button className="btn btn-primary btn-sm">
                        Book Now
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Services */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const { icon, title, description } = service;
            return (
              <div
                key={index}
                className="card bg-base-100 shadow-2xl hover:scale-105 transition"
              >
                <div className="card-body">
                  <h2 className="card-title text-2xl">
                    {icon} {title}
                  </h2>

                  <p>{description}</p>

                  <div className="divider"></div>

                  <div className="space-y-2">
                    <p>
                      <strong>Styles:</strong>
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.styles.map((dance) => (
                        <span
                          key={dance}
                          className={`badge badge-${service.color}`}
                        >
                          {dance}
                        </span>
                      ))}
                    </div>

                    <p>
                      <strong>Duration:</strong> {service.duration}
                    </p>

                    <p>
                      <strong>Price:</strong> {service.price}
                    </p>
                  </div>

                  <div className="card-actions justify-end mt-6">
                    <button className="btn btn-primary w-full">Book Now</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Booking CTA */}

        <div className="hero bg-primary text-primary-content rounded-3xl mt-20">
          <div className="hero-content text-center py-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold">Ready to Dance?</h2>

              <p className="py-6">
                Reserve your private lesson, partner session, group class, or
                book our live Latin Band & Orchestra for your next event.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="teachers" className="btn btn-secondary">
                  Book Dance Lessons
                </Link>

                <button className="btn btn-accent">Hire Live Band</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
