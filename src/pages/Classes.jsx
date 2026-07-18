// import React from "react";
// import { Link } from "react-router-dom";

// const classSchedule = [
//   {
//     day: "Monday",
//     level: "Beginners",
//     color: "primary",
//     classes: [
//       {
//         time: "6:00 PM",
//         title: "Ladies Styling Bachata",
//         instructor: "Luna",
//       },
//       {
//         time: "6:00 PM",
//         title: "Beginner Kizomba",
//         instructor: "Stevenson",
//         note: "FREE",
//       },
//       {
//         time: "7:00 PM",
//         title: "Beginner Bachata",
//         instructor: "Stevenson",
//       },
//     ],
//   },
//   {
//     day: "Tuesday",
//     level: "Beginners",
//     color: "primary",
//     classes: [
//       {
//         time: "6:00 PM",
//         title: "Ladies Styling Bachata",
//         instructor: "Luna",
//       },
//       {
//         time: "6:00 PM",
//         title: "Beginner Kizomba",
//         instructor: "Stevenson",
//         note: "FREE",
//       },
//       {
//         time: "7:00 PM",
//         title: "Beginner Bachata",
//         instructor: "Stevenson",
//       },
//     ],
//   },
//   {
//     day: "Wednesday",
//     level: "Intermediate",
//     color: "secondary",
//     classes: [
//       {
//         time: "6:00 PM",
//         title: "Intermediate Kizomba",
//       },
//       {
//         time: "7:00 PM",
//         title: "Intermediate Bachata",
//       },
//       {
//         time: "8:00 PM",
//         title: "Practice Hour",
//         note: "Included",
//       },
//     ],
//   },

//   {
//     day: "Thurday",
//     level: "Beginners",
//     color: "primary",
//     classes: [
//       {
//         time: "6:00 PM",
//         title: "Ladies Styling Bachata",
//         instructor: "Luna",
//       },
//       {
//         time: "6:00 PM",
//         title: "Beginner Kizomba",
//         instructor: "Stevenson",
//         note: "FREE",
//       },
//       {
//         time: "7:00 PM",
//         title: "Beginner Bachata",
//         instructor: "Stevenson",
//       },
//     ],
//   },
//   {
//     day: "Saturday",
//     level: "Intermediate",
//     color: "secondary",
//     classes: [
//       {
//         time: "6:00 PM",
//         title: "Intermediate Kizomba",
//       },
//       {
//         time: "7:00 PM",
//         title: "Intermediate Bachata",
//       },
//       {
//         time: "8:00 PM",
//         title: "Practice Hour",
//         note: "Included",
//       },
//     ],
//   },
// ];

// const Classes = () => {
//   return (
//     <section id="classes" className="py-20 bg-base-200">
//       <div className="container mx-auto px-6">
//         {/* Heading */}
//         <div className="text-center mb-14">
//           <h2 className="text-4xl md:text-5xl font-bold text-primary">
//             Weekly Classes
//           </h2>

//           <p className="mt-4 text-lg text-base-content/70 max-w-2xl mx-auto">
//             Whether you're taking your first dance steps or looking to sharpen
//             your technique, Freedom Dance Studio offers classes for every level.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid gap-8 lg:grid-cols-2">
//           {classSchedule.map((day) => (
//             <div
//               key={day.day}
//               className="card bg-base-100 shadow-2xl border border-base-300 hover:shadow-primary/20 transition duration-300"
//             >
//               <div className="card-body">
//                 <div className="flex justify-between items-center">
//                   <h3 className="card-title text-3xl">{day.day}</h3>

//                   <span className={`badge badge-${day.color} badge-lg`}>
//                     {day.level}
//                   </span>
//                 </div>

//                 <div className="divider"></div>

//                 <div className="space-y-5">
//                   {day.classes.map((item, index) => (
//                     <div
//                       key={index}
//                       className="flex justify-between items-center p-4 rounded-xl bg-base-200"
//                     >
//                       <div>
//                         <h4 className="font-bold text-lg">{item.title}</h4>

//                         {item.instructor && (
//                           <p className="text-sm opacity-70">
//                             Instructor: {item.instructor}
//                           </p>
//                         )}
//                       </div>

//                       <div className="text-right">
//                         <p className="font-bold">{item.time}</p>

//                         {item.note && (
//                           <span className="badge badge-success mt-1">
//                             {item.note}
//                           </span>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="divider"></div>

//                 <div className="card-actions justify-between items-center">
//                   <p className="text-sm opacity-70">
//                     📍 3110 E Sunset Rd Ste C, Las Vegas, NV
//                   </p>

//                   <Link to="/schedule" className="btn btn-primary">
//                     Join a Class
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pricing */}
//         <div className="mt-16">
//           <div className="card bg-primary text-primary-content shadow-xl">
//             <div className="card-body text-center">
//               <h3 className="text-3xl font-bold">Drop-In Pricing</h3>

//               <div className="mt-6 flex flex-wrap justify-center gap-6">
//                 <div className="stat w-56">
//                   <div className="stat-title text-primary-content">
//                     Beginner Kizomba
//                   </div>
//                   <div className="stat-value text-3xl">FREE</div>
//                 </div>

//                 <div className="stat w-56">
//                   <div className="stat-title text-primary-content">
//                     Drop-In Class
//                   </div>
//                   <div className="stat-value text-3xl">$15</div>
//                 </div>
//               </div>

//               <p className="mt-4 opacity-90">
//                 Come dance with us and become part of the Freedom Dance Studio
//                 family!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Classes;

import kidsImg from "../assets/kids.jpeg";
import adultsImg from "../assets/recentClip.jpeg";
import musicImg from "../assets/concert-freedom-jazz/p1991039.jpg";

const classes = [
  {
    id: 1,
    title: "Kids Dance Classes",
    image: kidsImg,
    description:
      "Fun and energetic dance classes designed to help children build confidence, coordination, rhythm, and teamwork.",
    ages: "Ages 4-12",
    schedule: "Mon & Wed • 5:00 PM",
    badge: "Popular",
    link: "/book/kids",
  },
  {
    id: 2,
    title: "Adult Dance Classes",
    image: adultsImg,
    description:
      "Learn Bachata, Salsa, Urban Kiz, Konpa, and more in beginner and intermediate classes for adults.",
    ages: "13+",
    schedule: "Tue, Thu & Fri • 7:00 PM",
    badge: "Best Seller",
    link: "/book/adults",
  },
  {
    id: 3,
    title: "Music Classes",
    image: musicImg,
    description:
      "Develop your musical skills through instrument lessons, rhythm training, and live band experience.",
    ages: "All Ages",
    schedule: "Saturday • 12:00 PM",
    badge: "New",
    link: "/book/music",
  },
];

export default function Classes() {
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
                  <a href={item.link} className="btn btn-primary">
                    Book Now
                  </a>

                  <button className="btn btn-outline">Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
