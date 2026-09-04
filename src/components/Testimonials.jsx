import { useState } from "react";
import { testimonials } from "../data/data";
import { FaStar } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import { videos } from "../data/video";

const Reviews = () => {
  const [expandedReviews, setExpandedReviews] = useState({});
  const shouldReduceMotion = useReducedMotion();

  // Only display the first 2 video testimonials
  const reviewVideos = videos?.slice(0, 2) || [];

  // Expand / collapse review
  const toggleReview = (id) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Get YouTube video ID from different YouTube URL formats
  const getYouTubeId = (url) => {
    if (!url) return null;

    try {
      const parsedUrl = new URL(url);

      // youtu.be/VIDEO_ID
      if (parsedUrl.hostname.includes("youtu.be")) {
        return parsedUrl.pathname.replace("/", "").split("/")[0];
      }

      // youtube.com/watch?v=VIDEO_ID
      const watchId = parsedUrl.searchParams.get("v");

      if (watchId) {
        return watchId;
      }

      // youtube.com/embed/VIDEO_ID
      if (parsedUrl.pathname.includes("/embed/")) {
        return parsedUrl.pathname.split("/embed/")[1]?.split("/")[0];
      }

      // youtube.com/shorts/VIDEO_ID
      if (parsedUrl.pathname.includes("/shorts/")) {
        return parsedUrl.pathname.split("/shorts/")[1]?.split("/")[0];
      }

      return null;
    } catch (error) {
      console.error("Invalid YouTube URL:", url);
      return null;
    }
  };

  /*
   * MOBILE-FRIENDLY ANIMATION
   *
   * On mobile:
   * - Smaller movement
   * - Faster animation
   * - Almost no delay
   *
   * On desktop:
   * - Slightly more movement
   * - Smooth stagger
   */
  const getCardAnimation = (index) => {
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 1 },
        whileInView: { opacity: 1 },
      };
    }

    return {
      initial: {
        opacity: 0,
        y: 20,
      },
      whileInView: {
        opacity: 1,
        y: 0,
      },
      viewport: {
        once: true,
        amount: 0.15,
      },
      transition: {
        duration: 0.4,
        delay: Math.min(index * 0.05, 0.2),
        ease: "easeOut",
      },
    };
  };

  const getVideoAnimation = (index) => {
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 1 },
        whileInView: { opacity: 1 },
      };
    }

    return {
      initial: {
        opacity: 0,
        y: 20,
      },
      whileInView: {
        opacity: 1,
        y: 0,
      },
      viewport: {
        once: true,
        amount: 0.15,
      },
      transition: {
        duration: 0.45,
        delay: Math.min(index * 0.08, 0.16),
        ease: "easeOut",
      },
    };
  };

  return (
    <section className="py-16 md:py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ==============================
            HEADER
        ============================== */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }
            }
            whileInView={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            What Our Students Say
          </motion.h2>

          <motion.p
            className="text-base md:text-lg opacity-70 max-w-2xl mx-auto leading-relaxed"
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }
            }
            whileInView={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.4,
              delay: 0.05,
              ease: "easeOut",
            }}
          >
            Discover why dancers, musicians, families, and event organizers love
            Freedom Dance Studio.
          </motion.p>
        </div>

        {/* ==============================
            WRITTEN REVIEWS
        ============================== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials?.map((review, index) => {
            const isExpanded = expandedReviews[review.id];

            const reviewText =
              review.review?.length > 120
                ? isExpanded
                  ? review.review
                  : `${review.review.substring(0, 120)}...`
                : review.review;

            return (
              <motion.div
                key={review.id ?? index}
                {...getCardAnimation(index)}
                className="
                  card
                  bg-base-100
                  shadow-lg
                  overflow-hidden
                  transition-shadow
                  duration-300
                  md:hover:shadow-2xl
                  md:hover:-translate-y-1
                "
              >
                {/* IMAGE */}
                {review.image && (
                  <figure className="overflow-hidden">
                    <img
                      src={review.image}
                      alt={`${review.name || "Student"} testimonial`}
                      className="
                        h-64
                        sm:h-72
                        w-full
                        object-cover
                        md:hover:scale-105
                        transition-transform
                        duration-500
                      "
                      loading="lazy"
                    />
                  </figure>
                )}

                {/* CONTENT */}
                <div className="card-body p-5 md:p-6">
                  {/* STARS */}
                  <div
                    className="flex gap-1 mb-2"
                    aria-label={`${review.rating || 5} out of 5 stars`}
                  >
                    {Array.from({
                      length: Math.min(Math.max(review.rating || 5, 0), 5),
                    }).map((_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        className="text-yellow-400 text-sm"
                      />
                    ))}
                  </div>

                  {/* NAME */}
                  <h3 className="font-bold text-lg md:text-xl">
                    {review.name || "Freedom Dance Student"}
                  </h3>

                  {/* TITLE */}
                  {review.title && (
                    <span className="text-primary font-semibold text-sm md:text-base">
                      {review.title}
                    </span>
                  )}

                  {/* REVIEW */}
                  {review.review && (
                    <p className="mt-3 opacity-80 leading-relaxed text-sm md:text-base">
                      &quot;{reviewText}&quot;
                    </p>
                  )}

                  {/* READ MORE */}
                  {review.review?.length > 120 && (
                    <button
                      type="button"
                      onClick={() => toggleReview(review.id)}
                      className="
                        text-primary
                        font-semibold
                        text-sm
                        mt-2
                        hover:underline
                        text-left
                        w-fit
                        active:scale-95
                        transition-transform
                      "
                    >
                      {isExpanded ? "Read less" : "Read more"}
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ==============================
            VIDEO TESTIMONIALS
        ============================== */}
        {reviewVideos.length > 0 && (
          <div className="mt-20 md:mt-24">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12"
              initial={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }
              }
              whileInView={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              Video Testimonials
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              {reviewVideos.map((video, index) => {
                const youtubeId = getYouTubeId(video.url);

                return (
                  <motion.div
                    key={video.id ?? index}
                    {...getVideoAnimation(index)}
                    className="
                      card
                      bg-base-100
                      shadow-lg
                      overflow-hidden
                      transition-shadow
                      duration-300
                      md:hover:shadow-2xl
                      md:hover:-translate-y-1
                    "
                  >
                    {/* YOUTUBE VIDEO */}
                    {youtubeId ? (
                      <div className="relative aspect-video overflow-hidden bg-black">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`https://www.youtube.com/embed/${youtubeId}`}
                          title={
                            video.title ||
                            "Freedom Dance Studio video testimonial"
                          }
                          loading="lazy"
                          allow="
                            accelerometer;
                            autoplay;
                            clipboard-write;
                            encrypted-media;
                            gyroscope;
                            picture-in-picture;
                            web-share
                          "
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div className="aspect-video flex items-center justify-center bg-base-300">
                        <p className="text-base-content/60">
                          Video unavailable
                        </p>
                      </div>
                    )}

                    {/* VIDEO INFORMATION */}
                    <div className="card-body p-5 md:p-6">
                      <h3 className="card-title text-lg md:text-xl">
                        {video.title || "Freedom Dance Studio Testimonial"}
                      </h3>

                      <p className="text-base-content/70 text-sm md:text-base">
                        Watch and experience the energy, community, and
                        atmosphere of Freedom Dance Studio.
                      </p>

                      {video.url && (
                        <a
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            btn
                            btn-primary
                            mt-3
                            w-full
                            sm:w-auto
                          "
                        >
                          Watch on YouTube
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* ==============================
            WHY PEOPLE LOVE THE STUDIO
        ============================== */}
        <div className="mt-20 md:mt-24">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-12"
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }
            }
            whileInView={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
            }
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            Why People Love Freedom Dance Studio
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* AMAZING CLASSES */}
            <motion.div
              className="
                card
                bg-primary
                text-primary-content
                shadow-lg
                transition-transform
                duration-300
                md:hover:scale-[1.03]
              "
              {...getCardAnimation(0)}
            >
              <div className="card-body">
                <h3 className="text-xl md:text-2xl font-bold">
                  Amazing Classes
                </h3>

                <p>
                  Salsa, Bachata, Urban Kiz, Konpa, Kids Dance, Ballet, Hip-Hop,
                  Yoga, and more.
                </p>
              </div>
            </motion.div>

            {/* PROFESSIONAL INSTRUCTORS */}
            <motion.div
              className="
                card
                bg-secondary
                text-secondary-content
                shadow-lg
                transition-transform
                duration-300
                md:hover:scale-[1.03]
              "
              {...getCardAnimation(1)}
            >
              <div className="card-body">
                <h3 className="text-xl md:text-2xl font-bold">
                  Professional Instructors
                </h3>

                <p>
                  Friendly teachers focused on helping every student grow from
                  beginner to advanced.
                </p>
              </div>
            </motion.div>

            {/* LIVE MUSIC */}
            <motion.div
              className="
                card
                bg-accent
                text-accent-content
                shadow-lg
                transition-transform
                duration-300
                md:hover:scale-[1.03]
              "
              {...getCardAnimation(2)}
            >
              <div className="card-body">
                <h3 className="text-xl md:text-2xl font-bold">Live Music</h3>

                <p>
                  Dance with live bands and musicians during special events and
                  socials.
                </p>
              </div>
            </motion.div>

            {/* BEAUTIFUL DANCE FLOOR */}
            <motion.div
              className="
                card
                bg-info
                text-info-content
                shadow-lg
                transition-transform
                duration-300
                md:hover:scale-[1.03]
              "
              {...getCardAnimation(3)}
            >
              <div className="card-body">
                <h3 className="text-xl md:text-2xl font-bold">
                  Beautiful Dance Floor
                </h3>

                <p>
                  Spacious dance rooms with professional flooring, mirrors, and
                  lighting.
                </p>
              </div>
            </motion.div>

            {/* EVENT RENTALS */}
            <motion.div
              className="
                card
                bg-success
                text-success-content
                shadow-lg
                transition-transform
                duration-300
                md:hover:scale-[1.03]
              "
              {...getCardAnimation(4)}
            >
              <div className="card-body">
                <h3 className="text-xl md:text-2xl font-bold">Event Rentals</h3>

                <p>
                  Perfect for birthdays, weddings, rehearsals, workshops,
                  private classes, and celebrations.
                </p>
              </div>
            </motion.div>

            {/* FRIENDLY COMMUNITY */}
            <motion.div
              className="
                card
                bg-warning
                shadow-lg
                transition-transform
                duration-300
                md:hover:scale-[1.03]
              "
              {...getCardAnimation(5)}
            >
              <div className="card-body">
                <h3 className="text-xl md:text-2xl font-bold">
                  Friendly Community
                </h3>

                <p>
                  Join a welcoming family where everyone supports each other's
                  dance journey.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
