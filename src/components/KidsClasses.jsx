import React from "react";
import kids from "../assets/hero5.jpg";
import { useNavigate } from "react-router-dom";

const classes = [
  {
    day: "Monday",
    time: "4:00 PM - 6:00 PM",
    age: "Ages 4-7",
    dance: "Kids Dance Fundamentals",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800",
    instructor: "staff",
  },
  {
    day: "Tuesday",
    time: "4:00 PM - 6:00 PM",
    age: "Ages 4-7",
    dance: "Kids Dance Fundamentals",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800",
    instructor: "staff",
  },
  {
    day: "Wednesday",
    time: "5:00 PM - 6:00 PM",
    age: "Ages 8-12",
    dance: "Hip Hop & Freestyle",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
    instructor: "staff",
  },
];

const prices = [
  {
    title: "Drop In",
    price: "$35",
    description: "Perfect for trying a class.",
  },
  {
    title: "Monthly Membership",
    price: "$89",
    description: "One  Kids Class per week",
    featured: true,
  },
  {
    title: "Day package",
    price: "$149",
    description: " day ulimited",
  },
  {
    title: "Family Package",
    price: "$189",
    description: "2 Kids Included",
  },
];

function KidsClasses() {
  const navigate = useNavigate();
  // ======== Handle Schedule ==========
  const handleSpot = (days) => {
    const findSpot = classes.find((d) => d.day === days);

    navigate("/book", { state: findSpot });
  };

  // ========= Handle Pricing ========

  const handlePrices = (title) => {
    const findPrice = prices.find((price) => price.title);

    navigate("/membersForm", { state: findPrice });
  };

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="hero rounded-3xl bg-primary text-primary-content mb-16">
          <div className="hero-content flex-col lg:flex-row gap-10">
            <img
              src={kids}
              alt="Kids Dance"
              className="rounded-3xl shadow-2xl w-full max-w-lg"
            />

            <div>
              <h1 className="text-5xl font-bold mb-5">Kids Dance Classes</h1>

              <p className="text-lg mb-6">
                Let your child build confidence, coordination, creativity, and
                friendships while learning dance in a fun and positive
                environment at Freedom Dance Studio.
              </p>

              <button className="btn btn-secondary btn-lg">
                Book a Free Trial
              </button>
            </div>
          </div>
        </div>

        {/* Schedule */}

        <h2 className="text-4xl font-bold text-center mb-10">
          Weekly Schedule
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {classes.map((item, index) => {
            const { dance, age, day, image, time } = item;

            return (
              <div
                key={index}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition"
              >
                <figure>
                  <img
                    src={image}
                    alt={dance}
                    className="h-60 w-full object-cover"
                  />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{dance}</h2>

                  <p>
                    <strong>Day:</strong> {day}
                  </p>

                  <p>
                    <strong>Time:</strong> {time}
                  </p>

                  <p>
                    <strong>{age}</strong>
                  </p>

                  <div className="card-actions justify-end mt-4">
                    <button
                      className="btn btn-primary"
                      onClick={() => handleSpot(day)}
                    >
                      Reserve Spot
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing */}

        <h2 className="text-4xl font-bold text-center mb-10">Pricing</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {prices.map((price, index) => (
            <div
              key={index}
              className={`card shadow-xl ${
                price.featured
                  ? "bg-primary text-primary-content scale-105"
                  : "bg-base-100"
              }`}
            >
              <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">{price.title}</h2>

                <div className="text-6xl font-bold my-6">{price.price}</div>

                <p className="mb-6">{price.description}</p>

                <button
                  className={`btn ${
                    price.featured ? "btn-secondary" : "btn-primary"
                  }`}
                  onClick={() => handlePrices(price)}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose */}

        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-10">
            Why Parents Love Freedom Dance Studio
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <span className="text-5xl">🕺</span>
                <h3 className="font-bold text-xl">Professional Instructors</h3>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <span className="text-5xl">😊</span>
                <h3 className="font-bold text-xl">Confidence Building</h3>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <span className="text-5xl">🎵</span>
                <h3 className="font-bold text-xl">Fun Music & Activities</h3>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <span className="text-5xl">🏆</span>
                <h3 className="font-bold text-xl">Safe Learning Environment</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default KidsClasses;
