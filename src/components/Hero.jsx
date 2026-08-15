import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  Sparkles,
  Users,
  PartyPopper,
} from "lucide-react";

import heroVideo from "../assets/clipVideo/bachataclip2.mp4";
import heroImage from "../assets/recentClip1.jpeg";

const slides = [
  {
    id: 1,
    eyebrow: "LEARN • DANCE • GROW",
    title: "Learn How to",
    highlight: "Dance.",
    description:
      "Book your first class and discover Salsa, Bachata, Urban Kiz, Konpa and more in a welcoming dance community.",
    button: "Book a Class",
    link: "/schedule",
    icon: CalendarCheck,
    accent: "primary",
  },

  {
    id: 2,
    eyebrow: "YOUR CLASS • YOUR EVENT • YOUR STUDIO",
    title: "Host Your Class.",
    highlight: "Your Place.",
    description:
      "Need a space for your dance class, workshop, rehearsal, private lesson, celebration, or special event? Make Freedom Dance Studio your space.",
    button: "Book the Studio",
    link: "/rentalStudio",
    icon: Clock3,
    accent: "secondary",
  },

  {
    id: 3,
    eyebrow: "FREEDOM DANCE COMMUNITY",
    title: "Dance More.",
    highlight: "Connect More.",
    description:
      "Meet dancers, make friends, learn new styles, and become part of a growing community that loves to dance.",
    button: "Join Our Community",
    link: "/schedule",
    icon: Users,
    accent: "primary",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slide = slides[activeSlide];
  const SlideIcon = slide.icon;

  // Automatically change the message
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-neutral"
    >
      {/* =====================================================
          BACKGROUND VIDEO
      ====================================================== */}

      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* =====================================================
          OVERLAYS
      ====================================================== */}

      <div className="absolute inset-0 z-10 bg-black/65" />

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/95 via-black/65 to-black/30" />

      <div className="absolute inset-x-0 bottom-0 z-10 h-64 bg-gradient-to-t from-black/90 to-transparent" />

      {/* =====================================================
          DECORATIVE LIGHT
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 top-1/4 z-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 bottom-1/4 z-10 h-80 w-80 rounded-full bg-secondary/20 blur-3xl"
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-20 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            {/* =================================================
                LEFT SIDE
            ================================================== */}

            <div className="text-center lg:text-left">
              {/* TOP BADGE */}

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-6 inline-flex"
              >
                <div className="badge badge-primary badge-lg gap-2 px-4 py-4 shadow-lg shadow-primary/20">
                  <Sparkles size={15} />
                  <span>Las Vegas Dance Community</span>
                </div>
              </motion.div>

              {/* =================================================
                  ANIMATED SLICE CONTENT
              ================================================== */}

              <div className="relative min-h-[250px] sm:min-h-[270px] md:min-h-[290px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.id}
                    initial={{
                      opacity: 0,
                      y: 45,
                      clipPath: "inset(100% 0 0 0)",
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      clipPath: "inset(0% 0 0 0)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -35,
                      clipPath: "inset(0 0 100% 0)",
                    }}
                    transition={{
                      duration: 0.75,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute inset-0"
                  >
                    {/* EYEBROW */}

                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.15,
                        duration: 0.5,
                      }}
                      className="mb-4 flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] text-primary lg:justify-start"
                    >
                      <span className="h-px w-8 bg-primary" />
                      {slide.eyebrow}
                      <span className="h-px w-8 bg-primary lg:hidden" />
                    </motion.div>

                    {/* TITLE */}

                    <motion.h1
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.2,
                        duration: 0.6,
                      }}
                      className="text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                      {slide.title}

                      <br />

                      <span
                        className={
                          slide.accent === "secondary"
                            ? "text-secondary"
                            : "text-primary"
                        }
                      >
                        {slide.highlight}
                      </span>
                    </motion.h1>

                    {/* DESCRIPTION */}

                    <motion.p
                      initial={{ opacity: 0, x: -35 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.3,
                        duration: 0.6,
                      }}
                      className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg lg:mx-0"
                    >
                      {slide.description}
                    </motion.p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* =================================================
                  CTA BUTTONS
              ================================================== */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`buttons-${slide.id}`}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
                >
                  {/* MAIN BUTTON */}

                  <Link
                    to={slide.link}
                    className="btn btn-primary btn-lg rounded-full px-7 shadow-xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl"
                  >
                    <SlideIcon size={20} />

                    {slide.button}

                    <ArrowRight size={18} />
                  </Link>

                  {/* SECOND BUTTON */}

                  <Link
                    to={slide.id === 2 ? "/schedule" : "/rentalStudio"}
                    className="btn btn-lg rounded-full border border-white/30 bg-white/10 px-7 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/20"
                  >
                    {slide.id === 2 ? (
                      <>
                        <CalendarCheck size={20} />
                        Learn to Dance
                      </>
                    ) : (
                      <>
                        <Clock3 size={20} />
                        Rent Our Studio
                      </>
                    )}
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* =================================================
                  SLIDE INDICATORS
              ================================================== */}

              <div className="mt-7 flex items-center justify-center gap-2 lg:justify-start">
                {slides.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show slide ${index + 1}`}
                    className="group flex items-center gap-2"
                  >
                    <span
                      className={`
                        block
                        h-1.5
                        rounded-full
                        transition-all
                        duration-500
                        ${
                          activeSlide === index
                            ? "w-10 bg-primary"
                            : "w-3 bg-white/30 group-hover:bg-white/60"
                        }
                      `}
                    />
                  </button>
                ))}
              </div>

              {/* =================================================
                  TRUST POINTS
              ================================================== */}

              <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs text-white/65 sm:text-sm lg:justify-start">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  All Levels Welcome
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  Studio Rental
                </span>

                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-secondary" />
                  Las Vegas
                </span>
              </div>

              {/* =================================================
                  STATS
              ================================================== */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                className="mt-8 grid grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-white/10 text-center shadow-2xl backdrop-blur-md"
              >
                <div className="p-4 sm:p-5">
                  <h2 className="text-xl font-black text-primary sm:text-2xl">
                    130+
                  </h2>

                  <p className="mt-1 text-[11px] text-white/60 sm:text-sm">
                    Students
                  </p>
                </div>

                <div className="border-x border-white/10 p-4 sm:p-5">
                  <h2 className="text-xl font-black text-secondary sm:text-2xl">
                    10+
                  </h2>

                  <p className="mt-1 text-[11px] text-white/60 sm:text-sm">
                    Weekly Classes
                  </p>
                </div>

                <div className="p-4 sm:p-5">
                  <h2 className="text-xl font-black text-white sm:text-2xl">
                    10+
                  </h2>

                  <p className="mt-1 text-[11px] text-white/60 sm:text-sm">
                    Years
                  </p>
                </div>
              </motion.div>
            </div>

            {/* =================================================
                RIGHT SIDE
            ================================================== */}

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* GLOW */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-5 rounded-[2rem] bg-primary/20 blur-2xl"
              />

              {/* IMAGE */}

              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 40 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-sm"
              >
                <img
                  src={heroImage}
                  alt="Dancers at Freedom Dance Studio in Las Vegas"
                  className="h-[350px] w-full rounded-[1.5rem] object-cover transition duration-700 group-hover:scale-105 sm:h-[450px] lg:h-[500px]"
                />

                {/* IMAGE OVERLAY */}

                <div className="absolute inset-x-2 bottom-2 rounded-b-[1.5rem] bg-gradient-to-t from-black/95 via-black/50 to-transparent p-6 pt-24">
                  <p className="text-sm font-medium text-primary">
                    Freedom Dance Studio
                  </p>

                  <p className="mt-1 text-2xl font-black text-white">
                    Dance • Learn • Create
                  </p>

                  <p className="mt-1 text-sm text-white/70">
                    Your community. Your space. Your freedom.
                  </p>
                </div>
              </motion.div>

              {/* =================================================
                  FLOATING RENTAL CARD
              ================================================== */}

              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -6, 0],
                }}
                transition={{
                  opacity: { delay: 0.8, duration: 0.6 },
                  x: { delay: 0.8, duration: 0.6 },
                  y: {
                    delay: 1.2,
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Link
                  to="/rentalStudio"
                  className="group absolute -bottom-5 -left-2 flex max-w-[290px] items-center gap-3 rounded-2xl border border-base-300/30 bg-base-100 p-4 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/20 sm:-left-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <PartyPopper size={22} />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-base-content/60">
                      Need a space?
                    </p>

                    <p className="text-sm font-bold">
                      Host Your Class or Event
                    </p>

                    <p className="mt-0.5 text-xs text-primary">
                      Book the studio →
                    </p>
                  </div>

                  <ArrowRight
                    size={17}
                    className="ml-auto shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              {/* =================================================
                  FLOATING COMMUNITY BADGE
              ================================================== */}

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-3 top-8 hidden rounded-2xl border border-white/20 bg-black/50 px-4 py-3 text-white shadow-xl backdrop-blur-md sm:block lg:-right-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                    <Users size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-white/60">Freedom Dance</p>

                    <p className="text-sm font-bold">Join the Community</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <motion.a
        href="#classes"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/50 transition-colors hover:text-white md:flex"
        aria-label="Scroll to classes"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
          Explore
        </span>

        <ChevronDown size={20} />
      </motion.a>
    </section>
  );
};

export default Hero;
