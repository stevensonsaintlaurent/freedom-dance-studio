import { useEffect, useRef, useState } from "react";
import { testimonials } from "../data/data";
import { FaStar, FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";

import { videos } from "../data/video";

const Reviews = () => {
  const videoRefs = useRef([]);
  const [expandedReviews, setExpandedReviews] = useState({});

  // Only display the first 2 videos
  const reviewVideos = videos.slice(0, 2);

  // Autoplay first video when page loads
  useEffect(() => {
    const firstVideo = videoRefs.current[0];

    if (firstVideo) {
      firstVideo.muted = true;

      const playPromise = firstVideo.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Browser may block autoplay
        });
      }
    }
  }, []);

  // Only allow one video to play at a time
  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });
  };

  // Fullscreen
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

          <div className="grid md:grid-cols-2 gap-10">
            {reviewVideos.map((video, index) => {
              const youtubeId = video.url.split("youtu.be/")[1]?.split("?")[0];

              return (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className="card bg-base-100 shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* YouTube Video */}
                  <div className="relative aspect-video overflow-hidden">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>

                  {/* Video Information */}
                  <div className="card-body">
                    <h3 className="card-title text-xl">{video.title}</h3>

                    <p className="text-base-content/70">
                      Watch and experience the energy of Freedom Dance Studio.
                    </p>

                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary mt-3"
                    >
                      Watch on YouTube
                    </a>
                  </div>
                </motion.div>
              );
            })}
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
