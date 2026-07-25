import React from "react";
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
    dance: "Ladies styling Bachata",
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
    level: "Open level",
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
    level: "Open level",
  },
  {
    id: 11,
    day: "Saturday",
    time: "3:00 PM",
    dance: "Open Level Bachata",
    instructor: "Stevenson",
    drop: 15,
    level: "Open level",
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

export default function Schedule() {
  const navigate = useNavigate();
  const handleBooking = (id) => {
    const findSchedule = weeklySchedule.find((week) => week.id === id);

    navigate("/book", { state: findSchedule });
  };

  // ============= handle services ============
  const handleServices = (id) => {
    const findServices = services.find((service) => service.id === id);
    console.log("service", findServices);
    navigate("/membersForm", { state: findServices });
  };
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
                const { id, day, time, dance, instructor } = item;
                return (
                  <tr key={index}>
                    <td>{day}</td>
                    <td>{time}</td>
                    <td>{dance}</td>
                    <td>{instructor}</td>
                    <td>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleBooking(id)}
                      >
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
                      {service.styles.map((dance) => {
                        return (
                          <span
                            key={dance}
                            className={`badge badge-${service.color}`}
                          >
                            {dance}
                          </span>
                        );
                      })}
                    </div>

                    <p>
                      <strong>Duration:</strong> {service.duration}
                    </p>

                    <p>
                      <strong>Price:</strong> {service.price}
                    </p>
                  </div>

                  <div className="card-actions justify-end mt-6">
                    <button
                      className="btn btn-primary w-full"
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

                <button className="btn btn-accent">Reahersal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
