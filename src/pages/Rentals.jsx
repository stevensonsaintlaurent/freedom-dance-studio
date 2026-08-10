// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import rehearsal from "../assets/rehearsal.jpeg";

// const StudioRental = () => {
//   const navigate = useNavigate();
//   const handleRental = () => {
//     navigate("/rentalStudio");
//   };

//   const scroolUp = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     scroolUp();
//   });
//   return (
//     <section className="bg-base-200 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-5xl font-bold text-primary">Rent Our Studio</h2>

//           <p className="mt-5 text-lg max-w-3xl mx-auto">
//             Looking for the perfect venue for your next event? Freedom Dance
//             Studio offers a beautiful, spacious, and welcoming environment for
//             parties, rehearsals, workshops, private lessons, fitness sessions,
//             meetings, and special celebrations.
//           </p>
//         </div>

//         {/* Images */}
//         <div className="grid lg:grid-cols-2 gap-8 mb-14">
//           <div className="card bg-base-100 shadow-xl overflow-hidden">
//             <figure>
//               <img
//                 src={rehearsal}
//                 alt="Dance Studio"
//                 className="h-80 w-full object-cover"
//               />
//             </figure>
//           </div>

//           <div className="card bg-base-100 shadow-xl overflow-hidden">
//             <figure>
//               <img
//                 src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
//                 alt="Studio Event Space"
//                 className="h-80 w-full object-cover"
//               />
//             </figure>
//           </div>
//         </div>

//         {/* Pricing */}
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="card bg-base-100 shadow-xl">
//             <div className="card-body text-center">
//               <h3 className="card-title justify-center">Hourly Rental</h3>

//               <div className="text-5xl font-bold text-success mt-4">$20</div>

//               <p className="text-lg mt-2">Starting price per hour</p>
//             </div>
//           </div>

//           <div className="card bg-primary text-primary-content shadow-xl">
//             <div className="card-body text-center">
//               <h3 className="card-title justify-center">Large Events</h3>

//               <div className="text-5xl font-bold mt-4">$120</div>

//               <p className="mt-2">
//                 Events with more than <strong>25 guests</strong>
//               </p>
//             </div>
//           </div>

//           <div className="card bg-error text-white shadow-xl">
//             <div className="card-body text-center">
//               <h3 className="card-title justify-center">Cleaning Fee</h3>

//               <div className="text-5xl font-bold mt-4">$120</div>

//               <p className="mt-2">Required after every event</p>
//             </div>
//           </div>
//         </div>

//         {/* Information */}
//         <div className="grid lg:grid-cols-2 gap-10 mt-16">
//           {/* Perfect For */}
//           <div className="card bg-base-100 shadow-xl">
//             <div className="card-body">
//               <h3 className="text-3xl font-bold mb-5">Perfect For</h3>

//               <ul className="space-y-3 text-lg">
//                 <li>🎉 Birthday Parties</li>
//                 <li>💃 Dance Rehearsals</li>
//                 <li>🧘 Yoga & Fitness Classes</li>
//                 <li>🎵 Music Rehearsals</li>
//                 <li>👨‍🏫 Workshops</li>
//                 <li>👥 Private Classes</li>
//                 <li>📸 Photo & Video Shoots</li>
//                 <li>🎭 Community Events</li>
//               </ul>
//             </div>
//           </div>

//           {/* Rental Details */}
//           <div className="card bg-base-100 shadow-xl">
//             <div className="card-body">
//               <h3 className="text-3xl font-bold mb-5">Rental Details</h3>

//               <div className="space-y-4 text-lg">
//                 <p>
//                   ✅ Minimum rental price:
//                   <span className="font-bold text-success"> $20/hour</span>
//                 </p>

//                 <p>
//                   ✅ Events with more than
//                   <strong> 25 guests </strong>
//                   are charged
//                   <span className="font-bold text-primary"> $120/hour</span>
//                 </p>

//                 <p>
//                   ✅ Mandatory cleaning fee:
//                   <span className="font-bold text-error"> $120</span>
//                 </p>

//                 <p>✅ Spacious dance floor</p>

//                 <p>✅ Mirrors & Sound System Available</p>

//                 <p>✅ Air Conditioned</p>

//                 <p>✅ Free Parking</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="text-center mt-16">
//           <h3 className="text-3xl font-bold mb-5">Reserve Your Date Today</h3>

//           <p className="max-w-2xl mx-auto mb-8 text-lg">
//             Whether you're hosting a private class, rehearsal, birthday
//             celebration, workshop, or special event, Freedom Dance Studio
//             provides a clean, modern, and welcoming space for your guests.
//           </p>

//           <button className="btn btn-primary btn-lg" onClick={handleRental}>
//             Book Your Event
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StudioRental;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import rehearsal from "../assets/rehearsal.jpeg";
import room1 from "../assets/rent/main.jpg";
import room2 from "../assets/rent/small.jpg";
import studio from "../assets/rent/main5.jpg";

const StudioRental = () => {
  const navigate = useNavigate();

  const handleRental = () => {
    navigate("/rentalStudio");
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const images = [
    {
      src: rehearsal,
      title: "Main Dance Room",
      description: "Spacious dance floor perfect for rehearsals and classes.",
    },
    {
      src: room1,
      title: "Studio Room 1",
      description: "A comfortable space for private classes and small events.",
    },
    {
      src: room2,
      title: "Studio Room 2",
      description: "Flexible space for workshops, rehearsals and celebrations.",
    },
    {
      src: studio,
      title: "Event Space",
      description: "A welcoming environment for your special events.",
    },
  ];

  return (
    <section className="min-h-screen bg-base-200 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="badge badge-primary badge-lg mb-5">STUDIO RENTAL</div>

          <h1 className="text-5xl md:text-6xl font-extrabold">
            Rent Our Studio
          </h1>

          <p className="mt-6 text-lg md:text-xl text-base-content/70 leading-relaxed">
            Looking for the perfect venue for your next event? Freedom Dance
            Studio offers beautiful, spacious, and welcoming rooms for parties,
            rehearsals, workshops, private lessons, fitness sessions, meetings,
            photo shoots, and special celebrations.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <div className="badge badge-outline badge-lg">💃 Dance Floor</div>
            <div className="badge badge-outline badge-lg">🔊 Sound System</div>
            <div className="badge badge-outline badge-lg">
              ❄️ Air Conditioned
            </div>
            <div className="badge badge-outline badge-lg">🚗 Free Parking</div>
          </div>
        </motion.div>

        {/* Rooms */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">Our Studio Spaces</h2>

            <p className="mt-3 text-base-content/70 text-lg">
              Choose from our two flexible studio rooms for your event.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Room 1 */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="card bg-base-100 shadow-xl overflow-hidden"
            >
              <figure className="relative">
                <img
                  src={room1}
                  alt="Freedom Dance Studio Room 1"
                  className="w-full h-80 object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute bottom-4 left-4">
                  <div className="badge badge-primary badge-lg">Room 1</div>
                </div>
              </figure>

              <div className="card-body">
                <h3 className="card-title text-2xl">Main Studio Room</h3>

                <p className="text-base-content/70">
                  Perfect for dance classes, rehearsals, workshops, private
                  lessons, fitness sessions, and larger gatherings.
                </p>
              </div>
            </motion.div>

            {/* Room 2 */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="card bg-base-100 shadow-xl overflow-hidden"
            >
              <figure className="relative">
                <img
                  src={room2}
                  alt="Freedom Dance Studio Room 2"
                  className="w-full h-80 object-cover transition duration-700 hover:scale-105"
                />

                <div className="absolute bottom-4 left-4">
                  <div className="badge badge-secondary badge-lg">Room 2</div>
                </div>
              </figure>

              <div className="card-body">
                <h3 className="card-title text-2xl">Flexible Studio Room</h3>

                <p className="text-base-content/70">
                  A versatile space for private classes, rehearsals, meetings,
                  photo shoots, small celebrations, and more.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">Take a Look Inside</h2>

            <p className="mt-3 text-base-content/70">
              A clean, comfortable and welcoming space for your next event.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {images.map((image, index) => (
              <motion.div
                key={image.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ scale: 1.03 }}
                className={`card bg-base-100 shadow-lg overflow-hidden ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <figure className="relative">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-72 object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition duration-500">
                    <div className="absolute bottom-0 p-5 text-white">
                      <h3 className="text-xl font-bold">{image.title}</h3>

                      <p className="text-sm mt-1">{image.description}</p>
                    </div>
                  </div>
                </figure>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">Simple & Transparent Pricing</h2>

            <p className="mt-3 text-base-content/70">
              Choose the option that works best for your event.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Hourly */}
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className="card bg-base-100 shadow-xl border border-base-300"
            >
              <div className="card-body text-center">
                <div className="text-4xl mb-3">⏱️</div>

                <h3 className="text-2xl font-bold">Hourly Rental</h3>

                <div className="text-5xl font-extrabold text-success mt-4">
                  $20
                </div>

                <p className="text-lg text-base-content/70">
                  Starting price per hour
                </p>
              </div>
            </motion.div>

            {/* Large Events */}
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className="card bg-primary text-primary-content shadow-xl"
            >
              <div className="card-body text-center">
                <div className="text-4xl mb-3">🎉</div>

                <h3 className="text-2xl font-bold">Large Events</h3>

                <div className="text-5xl font-extrabold mt-4">$120</div>

                <p className="text-lg opacity-90">
                  For events with more than 25 guests
                </p>
              </div>
            </motion.div>

            {/* Cleaning */}
            <motion.div
              whileHover={{ y: -10, scale: 1.02 }}
              className="card bg-error text-error-content shadow-xl"
            >
              <div className="card-body text-center">
                <div className="text-4xl mb-3">🧹</div>

                <h3 className="text-2xl font-bold">Cleaning Fee</h3>

                <div className="text-5xl font-extrabold mt-4">$120</div>

                <p className="text-lg opacity-90">Required after every event</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Perfect For + Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeLeft}
            className="card bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h3 className="text-3xl font-bold mb-5">Perfect For</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "🎉 Birthday Parties",
                  "💃 Dance Rehearsals",
                  "🧘 Yoga & Fitness Classes",
                  "🎵 Music Rehearsals",
                  "👨‍🏫 Workshops",
                  "👥 Private Classes",
                  "📸 Photo & Video Shoots",
                  "🎭 Community Events",
                ].map((item) => (
                  <div
                    key={item}
                    className="p-3 rounded-xl bg-base-200 hover:bg-primary hover:text-primary-content transition duration-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeRight}
            className="card bg-base-100 shadow-xl"
          >
            <div className="card-body">
              <h3 className="text-3xl font-bold mb-5">Rental Details</h3>

              <div className="space-y-4 text-lg">
                <div className="flex gap-3">
                  <span>✅</span>
                  <p>
                    Minimum rental:
                    <strong className="text-success ml-1">$20/hour</strong>
                  </p>
                </div>

                <div className="flex gap-3">
                  <span>✅</span>
                  <p>
                    More than <strong>25 guests</strong>:
                    <strong className="text-primary ml-1">$120/hour</strong>
                  </p>
                </div>

                <div className="flex gap-3">
                  <span>✅</span>
                  <p>
                    Mandatory cleaning fee:
                    <strong className="text-error ml-1">$120</strong>
                  </p>
                </div>

                <div className="flex gap-3">
                  <span>✅</span>
                  <p>Spacious dance floor</p>
                </div>

                <div className="flex gap-3">
                  <span>✅</span>
                  <p>Mirrors & Sound System Available</p>
                </div>

                <div className="flex gap-3">
                  <span>✅</span>
                  <p>Air Conditioned</p>
                </div>

                <div className="flex gap-3">
                  <span>✅</span>
                  <p>Free Parking</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hero rounded-3xl bg-primary text-primary-content shadow-2xl"
        >
          <div className="hero-content text-center py-16 px-6">
            <div className="max-w-3xl">
              <div className="text-5xl mb-5">📅</div>

              <h2 className="text-4xl md:text-5xl font-extrabold">
                Reserve Your Date Today
              </h2>

              <p className="text-lg md:text-xl mt-6 opacity-90">
                Whether you're hosting a private class, rehearsal, birthday
                celebration, workshop, photo shoot, or special event, Freedom
                Dance Studio provides a clean, modern, and welcoming space for
                your guests.
              </p>

              <button
                className="btn btn-lg bg-base-100 text-base-content border-none hover:scale-105 mt-8 transition-transform"
                onClick={handleRental}
              >
                Book Your Event
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudioRental;
