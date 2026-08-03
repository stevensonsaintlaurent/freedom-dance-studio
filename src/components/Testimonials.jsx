import reviews from "../data/review/reviewsData";
import { FaStar, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">What Our Students Say</h2>

          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Discover why dancers, musicians, families, and event organizers love
            Freedom Dance Studio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: review.id * 0.15,
              }}
            >
              <figure className="overflow-hidden">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-72 w-full object-cover hover:scale-110 duration-700"
                />
              </figure>

              <div className="card-body">
                <div className="flex mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                <h3 className="font-bold text-xl">{review.name}</h3>

                <span className="text-primary font-semibold">
                  {review.title}
                </span>

                <p className="mt-3 opacity-80">"{review.review}"</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIDEO TESTIMONIALS */}

        <div className="mt-24">
          <h2 className="text-center text-4xl font-bold mb-12">
            Video Testimonials
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="relative rounded-xl overflow-hidden shadow-xl group">
              <video
                controls
                className="w-full h-[400px] object-cover"
                poster="/reviews/student1.jpg"
              >
                <source src="/reviews/interview.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 flex justify-center items-center pointer-events-none group-hover:bg-black/30 duration-300">
                <FaPlay className="text-white text-6xl animate-pulse" />
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-xl group">
              <video
                controls
                className="w-full h-[400px] object-cover"
                poster="/reviews/student3.jpg"
              >
                <source src="/reviews/rental.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 flex justify-center items-center pointer-events-none group-hover:bg-black/30 duration-300">
                <FaPlay className="text-white text-6xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* HIGHLIGHTS */}

        <div className="mt-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why People Love Freedom Dance Studio
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card bg-primary text-primary-content shadow-xl hover:scale-105 duration-500">
              <div className="card-body">
                <h3 className="text-2xl font-bold">Amazing Classes</h3>

                <p>
                  Salsa, Bachata, Urban Kiz, Konpa, Kids Dance, Ballet, Hip-Hop,
                  Yoga, and more.
                </p>
              </div>
            </div>

            <div className="card bg-secondary text-secondary-content shadow-xl hover:scale-105 duration-500">
              <div className="card-body">
                <h3 className="text-2xl font-bold">Professional Instructors</h3>

                <p>
                  Friendly teachers focused on helping every student grow from
                  beginner to advanced.
                </p>
              </div>
            </div>

            <div className="card bg-accent text-accent-content shadow-xl hover:scale-105 duration-500">
              <div className="card-body">
                <h3 className="text-2xl font-bold">Live Music</h3>

                <p>
                  Dance with live bands and musicians during special events and
                  socials.
                </p>
              </div>
            </div>

            <div className="card bg-info text-info-content shadow-xl hover:scale-105 duration-500">
              <div className="card-body">
                <h3 className="text-2xl font-bold">Beautiful Dance Floor</h3>

                <p>
                  Spacious dance rooms with professional flooring, mirrors and
                  lighting.
                </p>
              </div>
            </div>

            <div className="card bg-success text-success-content shadow-xl hover:scale-105 duration-500">
              <div className="card-body">
                <h3 className="text-2xl font-bold">Event Rentals</h3>

                <p>
                  Perfect for birthdays, weddings, rehearsals, workshops and
                  private celebrations.
                </p>
              </div>
            </div>

            <div className="card bg-warning shadow-xl hover:scale-105 duration-500">
              <div className="card-body">
                <h3 className="text-2xl font-bold">Friendly Community</h3>

                <p>
                  Join a welcoming family where everyone supports each other's
                  dance journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

// import { useEffect, useRef, useState } from "react";

// import next_icon from "../../../assets/next-icon.png";
// import back_icon from "../../../assets/back-icon.png";
// import TestiSlider from "./TestiSlider";
// import { testimonials } from "../Contact/data";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const Testimonials = () => {
//   const [people, setPeople] = useState(testimonials);
//   const [currentPerson, setCurrentPerson] = useState(0);
//   console.log(people);

//   const prevSlide = () => {
//     setCurrentPerson((oldPerson) => {
//       const result = (oldPerson - 1 + people.length) % people.length;
//       return result;
//     });
//   };

//   const nextSlide = () => {
//     setCurrentPerson((oldPerson) => {
//       const result = (oldPerson + 1) % people.length;
//       return result;
//     });
//   };

//   useEffect(() => {
//     let slider = setInterval(() => {
//       nextSlide();
//     }, 2000);
//     return () => clearInterval(slider);
//   }, [currentPerson]);

//   const slider = useRef();
//   let tx = 0;

//   const slideForward = () => {
//     if (tx > -40) {
//       tx -= 25;

//       slider.current.style.transform = `translateX(${tx}%)`;
//     }
//   };

//   const slideBackward = () => {
//     if (tx < 0) {
//       tx += 25;

//       slider.current.style.transform = `translateX(${tx}%)`;
//     }
//   };
//   return (
//     <div className="slider-container " id="testimonials">
//       {/* <button type="button" className="prev" onClick={prevSlide}>
//         <FiChevronLeft />
//       </button>
//       <button className="next" onClick={nextSlide}>
//         <FiChevronRight />
//       </button> */}

//       <TestiSlider />
//     </div>
//   );
// };

// export default Testimonials;
