import kidsImg from "../assets/kids.jpeg";
import adultsImg from "../assets/recentClip.jpeg";
import musicImg from "../assets/concert-freedom-jazz/p1991039.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

const classes = [
  {
    id: 1,
    title: "Kids Dance Classes",
    image: kidsImg,
    description:
      "Fun and energetic dance classes designed to help children build confidence, coordination, rhythm, and teamwork.",
    ages: "Ages 4-12",
    schedule: "Mon, Tue & Wed • 4:00 PM",
    badge: "Popular",
    link: "/kids",
  },
  {
    id: 2,
    title: "Adult Dance Classes",
    image: adultsImg,
    description:
      "Learn Bachata, Salsa, Urban Kiz, Konpa, and more in beginner and intermediate classes for adults.",
    ages: "13+",
    schedule: "Mon, Thu & Sat • 6:00 PM",
    badge: "Best Seller",
    link: "/adult",
  },
  {
    id: 3,
    title: "Music",
    image: musicImg,
    description:
      "Develop your musical skills through instrument lessons, rhythm training, and live band experience.",
    ages: "All Ages",
    schedule: "Saturday • 10:30 AM",
    badge: "New",
    link: "/music",
  },
];

export default function Classes() {
  const [selectedClass, setSelectClass] = useState();
  return (
    <section id="classes" className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="badge badge-primary badge-lg">Our Programs</div>

          <h2 className="text-5xl font-bold mt-4">Find Your Perfect Class</h2>

          <p className="max-w-2xl mx-auto mt-5 text-base-content/70">
            Whether you're looking for dance classes for your child, adult
            social dancing, or music education, Freedom Dance Studio has a
            program for everyone.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((item) => (
            <div
              key={item.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <figure className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover"
                />

                <div className="badge badge-secondary absolute top-4 right-4">
                  {item.badge}
                </div>
              </figure>

              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>

                <p className="text-base-content/70">{item.description}</p>

                <div className="divider my-2"></div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold">Age Group</span>
                    <span>{item.ages}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-semibold">Schedule</span>
                    <span>{item.schedule}</span>
                  </div>
                </div>

                <div className="card-actions justify-between mt-6">
                  <Link to={item.link} className="btn btn-primary">
                    Book Now
                  </Link>

                  <Link to="/schedule" className="btn btn-outline">
                    See Schedule
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
