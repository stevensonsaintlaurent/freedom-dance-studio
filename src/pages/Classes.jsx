import React from "react";
import { Link } from "react-router-dom";

const classSchedule = [
  {
    day: "Monday",
    level: "Beginners",
    color: "primary",
    classes: [
      {
        time: "6:00 PM",
        title: "Ladies Styling Bachata",
        instructor: "Luna",
      },
      {
        time: "6:00 PM",
        title: "Beginner Kizomba",
        instructor: "Stevenson",
        note: "FREE",
      },
      {
        time: "7:00 PM",
        title: "Beginner Bachata",
        instructor: "Stevenson",
      },
    ],
  },
  {
    day: "Tuesday",
    level: "Beginners",
    color: "primary",
    classes: [
      {
        time: "6:00 PM",
        title: "Ladies Styling Bachata",
        instructor: "Luna",
      },
      {
        time: "6:00 PM",
        title: "Beginner Kizomba",
        instructor: "Stevenson",
        note: "FREE",
      },
      {
        time: "7:00 PM",
        title: "Beginner Bachata",
        instructor: "Stevenson",
      },
    ],
  },
  {
    day: "Wednesday",
    level: "Intermediate",
    color: "secondary",
    classes: [
      {
        time: "6:00 PM",
        title: "Intermediate Kizomba",
      },
      {
        time: "7:00 PM",
        title: "Intermediate Bachata",
      },
      {
        time: "8:00 PM",
        title: "Practice Hour",
        note: "Included",
      },
    ],
  },

  {
    day: "Thurday",
    level: "Beginners",
    color: "primary",
    classes: [
      {
        time: "6:00 PM",
        title: "Ladies Styling Bachata",
        instructor: "Luna",
      },
      {
        time: "6:00 PM",
        title: "Beginner Kizomba",
        instructor: "Stevenson",
        note: "FREE",
      },
      {
        time: "7:00 PM",
        title: "Beginner Bachata",
        instructor: "Stevenson",
      },
    ],
  },
  {
    day: "Saturday",
    level: "Intermediate",
    color: "secondary",
    classes: [
      {
        time: "6:00 PM",
        title: "Intermediate Kizomba",
      },
      {
        time: "7:00 PM",
        title: "Intermediate Bachata",
      },
      {
        time: "8:00 PM",
        title: "Practice Hour",
        note: "Included",
      },
    ],
  },
];

const Classes = () => {
  return (
    <section id="classes" className="py-20 bg-base-200">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Weekly Classes
          </h2>

          <p className="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
            Whether you're taking your first dance steps or looking to sharpen
            your technique, Freedom Dance Studio offers classes for every level.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {classSchedule.map((day) => (
            <div
              key={day.day}
              className="card bg-base-100 shadow-2xl border border-base-300 hover:shadow-primary/20 transition duration-300"
            >
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <h3 className="card-title text-3xl">{day.day}</h3>

                  <span className={`badge badge-${day.color} badge-lg`}>
                    {day.level}
                  </span>
                </div>

                <div className="divider"></div>

                <div className="space-y-5">
                  {day.classes.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 rounded-xl bg-base-200"
                    >
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>

                        {item.instructor && (
                          <p className="text-sm opacity-70">
                            Instructor: {item.instructor}
                          </p>
                        )}
                      </div>

                      <div className="text-right">
                        <p className="font-bold">{item.time}</p>

                        {item.note && (
                          <span className="badge badge-success mt-1">
                            {item.note}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="divider"></div>

                <div className="card-actions justify-between items-center">
                  <p className="text-sm opacity-70">
                    📍 3110 E Sunset Rd Ste C, Las Vegas, NV
                  </p>

                  <Link to="/schedule" className="btn btn-primary">
                    Join a Class
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="mt-16">
          <div className="card bg-primary text-primary-content shadow-xl">
            <div className="card-body text-center">
              <h3 className="text-3xl font-bold">Drop-In Pricing</h3>

              <div className="mt-6 flex flex-wrap justify-center gap-6">
                <div className="stat w-56">
                  <div className="stat-title text-primary-content">
                    Beginner Kizomba
                  </div>
                  <div className="stat-value text-3xl">FREE</div>
                </div>

                <div className="stat w-56">
                  <div className="stat-title text-primary-content">
                    Drop-In Class
                  </div>
                  <div className="stat-value text-3xl">$15</div>
                </div>
              </div>

              <p className="mt-4 opacity-90">
                Come dance with us and become part of the Freedom Dance Studio
                family!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;
