import React, { useState } from "react";
import Classes from "./../pages/Classes";
import lady from "../assets/followerClip1.jpeg";
import recent from "../assets/recentClip.jpeg";
import recent1 from "../assets/recentClip1.jpeg";
import recent2 from "../assets/recentClip2.jpeg";
import music from "../assets/concert-freedom-jazz/P1991039.jpg";
import wedn from "../assets/followerClip1.jpeg";
import wen from "../assets/konpaClip.jpeg";
import tued from "../assets/poster3.jpg";
import tues from "../assets/konpaClip.jpeg";
import social from "../assets/sbkParty/FJ8A6429.jpg";
import { data, Link, useNavigate } from "react-router-dom";
import { Button } from "react-scroll";

const schedule = [
  {
    dance: "Bachata Sensual",
    day: "Monday",
    time: "7:00 PM - 8:00 PM",
    instructor: "Steven",
    level: "Beginner",
    image: recent,
  },
  {
    dance: "Bachata Ladies Styling ",
    day: "Monday",
    time: "6:00 PM - 7:00 PM",
    instructor: "Luna",
    level: "Beginner",
    image: lady,
  },

  {
    dance: "Kizomba",
    day: "Monday",
    time: "6:00 PM - 7:00 PM",
    instructor: "Steven",
    level: "Beginner",
    image: recent1,
  },

  {
    dance: "Salsa",
    day: "Tuesday",
    time: "6:00 PM - 7:00 PM",
    instructor: "Steven",
    level: "Beginner",
    image: recent2,
  },
  {
    dance: "Bachata",
    day: "Tuesday",
    time: "7:00 PM - 8:00 PM",
    instructor: "Steven",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800",
  },
  {
    dance: "Konpa",
    day: "Tuesday",
    time: "8:00 PM - 9:00 PM",
    instructor: "Steven",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800",
  },
  {
    dance: "Urban Kiz",
    day: "Wensday",
    time: "6:00 PM - 7:00 PM",
    instructor: "Steven",
    level: "Intermediate",
    image: wen,
  },
  {
    dance: "Bachata Sensual",
    day: "Wensday",
    time: "7:00 PM - 8:00 PM",
    instructor: "Steven",
    level: "Intermediate",
    image: wedn,
  },
  {
    dance: "Bachata Ladies Styling",
    day: "Thursday",
    time: "6:30 PM - 7:30 PM",
    instructor: "Zagir",
    level: "Beginner",
    image: lady,
  },
  {
    dance: "Social Dance Practice",
    day: "Friday",
    time: "8:00 PM - 11:00 PM",
    level: "Open to Everyone",
    image: social,
  },
  {
    dance: "Kizomba",
    day: "Saturday",
    instructor: "Steven",
    time: "2:00 PM - 3:00 PM",
    level: "All Levels",
    image: recent,
  },
  {
    dance: "Bachata",
    day: "Saturday",
    time: "3:00 PM - 4:00 PM",
    instructor: "Steven",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1508973378895-6cf4d0d7b30d?w=800",
  },
  {
    dance: "Salsa",
    day: "Saturday",
    instructor: "Desmond",
    time: "4:00 PM - 5:00 PM",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800",
  },
  {
    dance: "Salsa",
    day: "Saturday",
    instructor: "Desmond",
    time: "5:00 PM - 6:00 PM",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=800",
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

function AdultClasses() {
  const navigate = useNavigate();
  // ======== Handle Schedule ==========
  const handleSpot = (days) => {
    const findSpot = schedule.find((d) => d.day === days);

    navigate("/book", { state: findSpot });
    console.log(findSpot);
  };

  // ========= Handle Pricing ========
  const handlePrices = (plan) => {
    const findPrice = pricing.find((price) => price.price === plan);

    navigate("/membersForm", { state: findPrice });
  };

  const scroolUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="hero bg-base-100 rounded-3xl shadow-xl mb-20">
          <div className="hero-content flex-col lg:flex-row gap-10">
            <img
              src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=900"
              alt="Adult Dance Class"
              className="rounded-3xl shadow-lg max-w-lg w-full"
            />

            <div>
              <h1 className="text-5xl font-bold">Adult Dance Classes</h1>

              <p className="py-6 text-lg">
                Learn Bachata Sensual, Urban Kiz, Konpa, Salsa, and more in a
                welcoming environment. Whether you're a beginner or an
                experienced dancer, Freedom Dance Studio has a class for you.
              </p>

              <button className="btn btn-primary btn-lg">
                Book Your First Class
              </button>
            </div>
          </div>
        </div>

        {/* Schedule */}

        <h2 className="text-4xl font-bold text-center mb-12">
          Weekly Schedule
        </h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {schedule.map((item) => {
            const { dance, day, image, level, time } = item;

            return (
              <div
                key={day}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition"
              >
                <figure>
                  <img
                    src={image}
                    alt={dance}
                    className="h-64 w-full object-cover"
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
                    <strong>Level:</strong> {level}
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

        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            Membership & Pricing
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan) => {
              const { title, description, price } = plan;
              return (
                <div
                  key={title}
                  className={`card shadow-xl ${
                    plan.featured
                      ? "bg-primary text-primary-content scale-105"
                      : "bg-base-100"
                  }`}
                >
                  <div className="card-body text-center">
                    <h2 className="card-title justify-center text-3xl">
                      {title}
                    </h2>

                    <div className="text-6xl font-bold my-5">{price}</div>

                    <p>{description}</p>

                    <button
                      className={`btn mt-6 ${
                        plan.featured ? "btn-secondary" : "btn-primary"
                      }`}
                      onClick={() => {
                        (scroolUp, handlePrices(price));
                      }}
                    >
                      Join Today
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features */}

        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-10">
            Why Dance With Us?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <span className="text-5xl">💃</span>
                <h3 className="font-bold text-xl">Expert Instructors</h3>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <span className="text-5xl">🎶</span>
                <h3 className="font-bold text-xl">Social Dance Events</h3>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <span className="text-5xl">❤️</span>
                <h3 className="font-bold text-xl">Friendly Community</h3>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body items-center text-center">
                <span className="text-5xl">🏆</span>
                <h3 className="font-bold text-xl">Classes for Every Level</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdultClasses;
