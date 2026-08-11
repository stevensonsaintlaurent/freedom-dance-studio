import { useEffect, useRef, useState } from "react";
import { testimonials } from "../data/data";
import { FaStar, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import interview from "../assets/reviews/interviewClip.mp4";
import interview1 from "../assets/reviews/freemanInterview.mp4";

const Reviews = () => {
  const videoRefs = useRef([]);
  const [expandedReviews, setExpandedReviews] = useState({});

  // Autoplay the first video when the page loads
  useEffect(() => {
    const firstVideo = videoRefs.current[0];

    if (firstVideo) {
      firstVideo.muted = true;

      const playPromise = firstVideo.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, []);

  // Make sure only one video can play at a time
  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });
  };

  // Fullscreen when clicking the video
  const handleVideoClick = async (video) => {
    try {
      if (video.requestFullscreen) {
        await video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    } catch (error) {
      console.log("Fullscreen request failed:", error);
    }
  };

  // Expand/collapse review
  const toggleReview = (id) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">What Our Students Say</h2>

          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Discover why dancers, musicians, families, and event organizers love
            Freedom Dance Studio.
          </p>
        </div>

        {/* REVIEWS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((review) => {
            const isExpanded = expandedReviews[review.id];

            return (
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
                  {/* STARS */}
                  <div className="flex mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>

                  {/* NAME */}
                  <h3 className="font-bold text-xl">{review.name}</h3>

                  {/* TITLE */}
                  <span className="text-primary font-semibold">
                    {review.title}
                  </span>

                  {/* REVIEW */}
                  <p className="mt-3 opacity-80 leading-relaxed">
                    "
                    {isExpanded
                      ? review.review
                      : review.review.length > 120
                        ? `${review.review.substring(0, 120)}...`
                        : review.review}
                    "
                  </p>

                  {/* READ MORE */}
                  {review.review.length > 120 && (
                    <button
                      type="button"
                      onClick={() => toggleReview(review.id)}
                      className="text-primary font-semibold text-sm mt-2 hover:underline text-left"
                    >
                      {isExpanded ? "Read less" : "Read more"}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* VIDEO TESTIMONIALS */}
        <div className="mt-24">
          <h2 className="text-center text-4xl font-bold mb-12">
            Video Testimonials
          </h2>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* VIDEO 1 */}
            <div
              className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer"
              onClick={(e) => {
                if (e.target.tagName !== "VIDEO") return;

                const video = videoRefs.current[0];

                if (video) {
                  handleVideoClick(video);
                }
              }}
            >
              <video
                ref={(el) => (videoRefs.current[0] = el)}
                muted
                playsInline
                controls
                preload="metadata"
                onPlay={() => handlePlay(0)}
                className="w-full h-[400px] object-cover"
                poster="/reviews/student1.jpg"
              >
                <source src={interview1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="absolute inset-0 flex justify-center items-center pointer-events-none group-hover:bg-black/30 duration-300">
                <FaPlay className="text-white text-6xl animate-pulse" />
              </div>
            </div>

            {/* VIDEO 2 */}
            <div
              className="relative rounded-xl overflow-hidden shadow-xl group cursor-pointer"
              onClick={(e) => {
                if (e.target.tagName !== "VIDEO") return;

                const video = videoRefs.current[1];

                if (video) {
                  handleVideoClick(video);
                }
              }}
            >
              <video
                ref={(el) => (videoRefs.current[1] = el)}
                muted
                playsInline
                controls
                preload="metadata"
                onPlay={() => handlePlay(1)}
                className="w-full h-[400px] object-cover"
                poster="/reviews/student3.jpg"
              >
                <source src={interview} type="video/mp4" />
                Your browser does not support the video tag.
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
