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
  Music2,
  Plane,
  Ticket,
} from "lucide-react";

import heroImage from "../assets/recentClip1.jpeg";

import septemberSocial from "../assets/septemberSocial.png";
import workshop from "../assets/workshop.png";
import havasu from "../assets/havasu.png";

/* =========================================================
   HERO SLIDES
========================================================= */

const slides = [
  {
    id: "social",
    type: "event",
    eyebrow: "UPCOMING EVENT • FREEDOM DANCE",
    title: "Freedom Dance",
    highlight: "Social.",
    description:
      "Join us for a night of Salsa, Bachata and Kizomba. Enjoy a free Bachata and Kizomba class, a special Kizomba performance, and dance with the Freedom Dance community.",
    date: "September 4, 2026",
    time: "9:00 PM – 2:00 AM",
    price: "$20",
    image: septemberSocial,
    button: "View Social",
    link: "/book",
    icon: Music2,
    accent: "primary",
  },

  {
    id: "workshop",
    type: "event",
    eyebrow: "BACHATA • TRAINING • INTENSIVE",
    title: "Bachata Weekend",
    highlight: "Intensive.",
    description:
      "A full weekend dedicated to training, technique, musicality and improving your Bachata dancing.",
    date: "August 14–16, 2026",
    time: "Full Weekend",
    price: "$129",
    image: workshop,
    button: "View Workshop",
    link: "/book",
    icon: Sparkles,
    accent: "secondary",
  },

  {
    id: "havasu",
    type: "event",
    eyebrow: "DANCE • TRAVEL • COMMUNITY",
    title: "SBK Lake Havasu",
    highlight: "Trip.",
    description:
      "Travel, dance and connect with the Freedom Dance community. Join teachers and students for an unforgettable weekend together.",
    date: "August 28–30, 2026",
    time: "Friday – Sunday",
    price: "Join Us",
    image: havasu,
    button: "View Trip",
    link: "/book",
    icon: Plane,
    accent: "primary",
  },

  {
    id: "learn",
    type: "message",
    eyebrow: "LEARN • DANCE • GROW",
    title: "Learn How to",
    highlight: "Dance.",
    description:
      "Book your first class and discover Salsa, Bachata, Urban Kiz, Konpa and more in a welcoming dance community.",
    button: "Book a Class",
    link: "/schedule",
    icon: CalendarCheck,
    accent: "primary",
    image: heroImage,
  },

  {
    id: "studio",
    type: "message",
    eyebrow: "YOUR CLASS • YOUR EVENT • YOUR STUDIO",
    title: "Host Your Class.",
    highlight: "Your Place.",
    description:
      "Need a space for your dance class, workshop, rehearsal, private lesson, celebration, or special event? Make Freedom Dance Studio your space.",
    button: "Book the Studio",
    link: "/rentalStudio",
    icon: PartyPopper,
    accent: "secondary",
    image: heroImage,
  },

  {
    id: "community",
    type: "message",
    eyebrow: "FREEDOM DANCE COMMUNITY",
    title: "Dance More.",
    highlight: "Connect More.",
    description:
      "Meet dancers, make friends, learn new styles, and become part of a growing community that loves to dance.",
    button: "Join Our Community",
    link: "/schedule",
    icon: Users,
    accent: "primary",
    image: heroImage,
  },
];

/* =========================================================
   HERO
========================================================= */

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slide = slides[activeSlide];
  const SlideIcon = slide.icon;

  /* =========================================================
     AUTO SLIDE
  ========================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  /* =========================================================
     MANUAL SLIDE
  ========================================================= */

  const changeSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* =====================================================
          FULL SCREEN BACKGROUND IMAGE
      ====================================================== */}

      <AnimatePresence mode="wait">
        <motion.div
          key={`background-${slide.id}`}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 8, ease: "easeOut" },
          }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* =====================================================
          PROFESSIONAL DARK OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 bg-black/65" />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

      {/* =====================================================
          SUBTLE COLOR LIGHT
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.12, 0.22, 0.12],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"
      />

      <motion.div
        animate={{
          opacity: [0.08, 0.18, 0.08],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-secondary/20 blur-[120px]"
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-20 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-7xl px-5 py-28 sm:px-8 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="text-center lg:text-left">
              {/* BRAND BADGE */}

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-7 inline-flex"
              >
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-xl backdrop-blur-xl">
                  <Sparkles size={14} className="text-primary" />

                  {slide.type === "event"
                    ? "Upcoming at Freedom Dance"
                    : "Las Vegas Dance Community"}
                </div>
              </motion.div>

              {/* =================================================
                  SLIDE TEXT
              ================================================== */}

              <div className="relative min-h-[310px] sm:min-h-[330px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={slide.id}
                    initial={{
                      opacity: 0,
                      y: 35,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -25,
                    }}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {/* EYEBROW */}

                    <div className="mb-5 flex items-center justify-center gap-3 lg:justify-start">
                      <span className="h-px w-10 bg-primary" />

                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        {slide.eyebrow}
                      </span>
                    </div>

                    {/* TITLE */}

                    <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
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
                    </h1>

                    {/* DESCRIPTION */}

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg lg:mx-0">
                      {slide.description}
                    </p>

                    {/* =================================================
                        EVENT INFORMATION
                    ================================================== */}

                    {slide.type === "event" && (
                      <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-xl">
                          <CalendarCheck size={16} className="text-primary" />
                          {slide.date}
                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-xl">
                          <Clock3 size={16} className="text-secondary" />
                          {slide.time}
                        </div>

                        <div className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/20 px-4 py-2 text-sm font-black text-white backdrop-blur-xl">
                          <Ticket size={16} />
                          {slide.price}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* =================================================
                  BUTTONS
              ================================================== */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`buttons-${slide.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                  className="mt-3 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
                >
                  <Link
                    to={slide.link}
                    className="btn btn-primary btn-lg rounded-full px-8 shadow-2xl shadow-primary/25 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                  >
                    <SlideIcon size={19} />

                    {slide.button}

                    <ArrowRight size={18} />
                  </Link>

                  <Link
                    to="/rentalStudio"
                    className="btn btn-lg rounded-full border border-white/20 bg-white/10 px-8 text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                  >
                    <PartyPopper size={19} />
                    Rent the Studio
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* =================================================
                  SLIDER
              ================================================== */}

              <div className="mt-8 flex items-center justify-center gap-2 lg:justify-start">
                {slides.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => changeSlide(index)}
                    aria-label={`Show ${item.title}`}
                    className="group"
                  >
                    <span
                      className={`block h-1.5 rounded-full transition-all duration-500 ${
                        activeSlide === index
                          ? "w-12 bg-primary"
                          : "w-3 bg-white/30 group-hover:bg-white/60"
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="mt-3 text-center lg:text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
                  {String(activeSlide + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>

              {/* =================================================
                  TRUST POINTS
              ================================================== */}

              <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs text-white/65 sm:text-sm lg:justify-start">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-primary" />
                  All Levels Welcome
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={15} className="text-primary" />
                  Classes & Workshops
                </span>

                <span className="flex items-center gap-2">
                  <MapPin size={15} className="text-secondary" />
                  Las Vegas
                </span>
              </div>

              {/* =================================================
                  STATS
              ================================================== */}

              <div className="mt-7 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-black/35 text-center shadow-2xl backdrop-blur-xl">
                <div className="p-3 sm:p-4">
                  <h2 className="text-xl font-black text-primary sm:text-2xl">
                    130+
                  </h2>

                  <p className="mt-1 text-[10px] text-white/50 sm:text-xs">
                    Students
                  </p>
                </div>

                <div className="border-x border-white/10 p-3 sm:p-4">
                  <h2 className="text-xl font-black text-secondary sm:text-2xl">
                    10+
                  </h2>

                  <p className="mt-1 text-[10px] text-white/50 sm:text-xs">
                    Weekly Classes
                  </p>
                </div>

                <div className="p-3 sm:p-4">
                  <h2 className="text-xl font-black text-white sm:text-2xl">
                    10+
                  </h2>

                  <p className="mt-1 text-[10px] text-white/50 sm:text-xs">
                    Years
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE
            ================================================== */}

            <div className="relative mx-auto w-full max-w-xl">
              {/* IMAGE GLOW */}

              <div className="absolute -inset-4 rounded-[2.5rem] bg-primary/15 blur-3xl" />

              {/* IMAGE */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`visual-${slide.id}`}
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                    x: 30,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                    x: -25,
                  }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur-sm"
                >
                  <div className="relative overflow-hidden rounded-[2rem] bg-black">
                    <img
                      src={slide.image}
                      alt={
                        slide.type === "event"
                          ? slide.title
                          : "Freedom Dance Studio Las Vegas"
                      }
                      className={`h-[430px] w-full transition-transform duration-[8000ms] hover:scale-105 sm:h-[550px] lg:h-[620px] ${
                        slide.type === "event"
                          ? "object-contain"
                          : "object-cover"
                      }`}
                    />

                    {/* IMAGE GRADIENT */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />

                    {/* EVENT LABEL */}

                    {slide.type === "event" && (
                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="rounded-2xl border border-white/15 bg-black/55 p-4 backdrop-blur-xl sm:p-5">
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-[9px] font-black uppercase tracking-wider text-primary-content">
                                <Sparkles size={10} />
                                Upcoming Event
                              </div>

                              <h3 className="text-xl font-black text-white sm:text-2xl">
                                {slide.title}{" "}
                                <span className="text-primary">
                                  {slide.highlight}
                                </span>
                              </h3>
                            </div>

                            <div className="hidden rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-center sm:block">
                              <p className="text-[9px] uppercase tracking-wider text-white/40">
                                Cover
                              </p>

                              <p className="text-lg font-black text-primary">
                                {slide.price}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* MESSAGE LABEL */}

                    {slide.type !== "event" && (
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="rounded-2xl border border-white/10 bg-black/50 p-5 backdrop-blur-xl">
                          <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">
                            Freedom Dance Studio
                          </p>

                          <p className="mt-1 text-xl font-black text-white sm:text-2xl">
                            Dance • Learn • Create
                          </p>

                          <p className="mt-1 text-sm text-white/60">
                            Your community. Your space. Your freedom.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* =================================================
                  EVENT INFO CARD
              ================================================== */}

              <AnimatePresence mode="wait">
                {slide.type === "event" && (
                  <motion.div
                    key={`event-card-${slide.id}`}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -15,
                    }}
                    className="absolute -bottom-7 left-5 right-5 z-30 rounded-2xl border border-white/15 bg-black/85 p-3 shadow-2xl backdrop-blur-xl sm:left-8 sm:right-8 sm:p-4"
                  >
                    <div className="grid grid-cols-3 gap-3">
                      <div className="flex items-center gap-2">
                        <CalendarCheck
                          size={17}
                          className="shrink-0 text-primary"
                        />

                        <div className="min-w-0">
                          <p className="text-[8px] uppercase tracking-wider text-white/40">
                            Date
                          </p>

                          <p className="truncate text-[11px] font-bold text-white sm:text-sm">
                            {slide.date}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock3 size={17} className="shrink-0 text-secondary" />

                        <div className="min-w-0">
                          <p className="text-[8px] uppercase tracking-wider text-white/40">
                            Time
                          </p>

                          <p className="truncate text-[11px] font-bold text-white sm:text-sm">
                            {slide.time}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={17} className="shrink-0 text-white" />

                        <div className="min-w-0">
                          <p className="text-[8px] uppercase tracking-wider text-white/40">
                            Location
                          </p>

                          <p className="truncate text-[11px] font-bold text-white sm:text-sm">
                            Las Vegas
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* =================================================
                  RENTAL FLOATING CARD
              ================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -20,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -5, 0],
                }}
                transition={{
                  opacity: {
                    delay: 0.8,
                    duration: 0.6,
                  },
                  x: {
                    delay: 0.8,
                    duration: 0.6,
                  },
                  y: {
                    delay: 1.5,
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="absolute -bottom-20 -left-3 z-40 hidden sm:block lg:-left-8"
              >
                <Link
                  to="/rentalStudio"
                  className="group flex max-w-[300px] items-center gap-3 rounded-2xl border border-white/15 bg-white p-4 text-black shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/30"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <PartyPopper size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-black/50">
                      Need a space in Las Vegas?
                    </p>

                    <p className="text-sm font-black">
                      Host Your Class or Event
                    </p>

                    <p className="mt-0.5 text-xs font-bold text-primary">
                      Explore Studio Rental →
                    </p>
                  </div>

                  <ArrowRight
                    size={17}
                    className="ml-auto shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>

              {/* =================================================
                  COMMUNITY BADGE
              ================================================== */}

              <motion.div
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-3 top-8 hidden rounded-2xl border border-white/15 bg-black/55 px-4 py-3 text-white shadow-xl backdrop-blur-xl sm:block lg:-right-7"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                    <Users size={17} />
                  </div>

                  <div>
                    <p className="text-[10px] text-white/50">Freedom Dance</p>

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
        animate={{
          y: [0, 7, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-5 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/40 transition-colors hover:text-white md:flex"
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
