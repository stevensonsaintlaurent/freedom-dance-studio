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
   ANIMATION SETTINGS
========================================================= */

const textVariants = {
  initial: {
    opacity: 0,
    y: 18,
  },

  animate: {
    opacity: 1,
    y: 0,
  },

  exit: {
    opacity: 0,
    y: -12,
  },
};

const textTransition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

const imageVariants = {
  initial: {
    opacity: 0,
    scale: 1.025,
  },

  animate: {
    opacity: 1,
    scale: 1,
  },

  exit: {
    opacity: 0,
    scale: 1.01,
  },
};

const imageTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
};

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
    if (index === activeSlide) return;

    setActiveSlide(index);
  };

  return (
    <section
      id="home"
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        min-h-[100svh]
        lg:min-h-screen
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <AnimatePresence initial={false}>
        <motion.div
          key={`background-${slide.id}`}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={imageTransition}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt=""
            aria-hidden="true"
            className="
              h-full
              w-full
              object-cover
              object-center
            "
          />
        </motion.div>
      </AnimatePresence>

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 bg-black/70 lg:bg-black/65" />

      {/* =====================================================
          DESKTOP GRADIENT
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          hidden
          bg-gradient-to-r
          from-black
          via-black/75
          to-black/25
          lg:block
        "
      />

      {/* =====================================================
          MOBILE GRADIENT
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/80
          via-black/50
          to-black
          lg:hidden
        "
      />

      {/* =====================================================
          BOTTOM GRADIENT
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-transparent
          to-black/30
        "
      />

      {/* =====================================================
          COLOR LIGHT
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.08, 0.16, 0.08],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          top-1/4
          h-[400px]
          w-[400px]
          rounded-full
          bg-primary/20
          blur-[110px]
          lg:h-[500px]
          lg:w-[500px]
        "
      />

      <motion.div
        animate={{
          opacity: [0.06, 0.12, 0.06],
          scale: [1.08, 1, 1.08],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-40
          bottom-1/4
          h-[400px]
          w-[400px]
          rounded-full
          bg-secondary/20
          blur-[110px]
          lg:h-[500px]
          lg:w-[500px]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-20
          flex
          min-h-[100svh]
          items-center
          lg:min-h-screen
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            px-4
            pb-8
            pt-16
            sm:px-6
            sm:pb-14
            sm:pt-20
            lg:px-10
            lg:py-28
          "
        >
          <div
            className="
              grid
              items-center
              gap-8
              lg:grid-cols-[1.05fr_0.95fr]
              lg:gap-12
            "
          >
            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div className="text-center lg:text-left">
              {/* BRAND BADGE */}

              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mb-3 inline-flex sm:mb-5 lg:mb-7"
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/15
                    bg-white/10
                    px-3
                    py-1.5
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-white
                    shadow-xl
                    backdrop-blur-xl
                    sm:px-4
                    sm:py-2
                    sm:text-xs
                    sm:tracking-[0.16em]
                  "
                >
                  <Sparkles
                    size={12}
                    className="shrink-0 text-primary sm:h-[14px] sm:w-[14px]"
                  />

                  {slide.type === "event"
                    ? "Upcoming at Freedom Dance"
                    : "Las Vegas Dance Community"}
                </div>
              </motion.div>

              {/* =================================================
                  SLIDE TEXT
              ================================================== */}

              <div
                className="
                  relative
                  min-h-[410px]
                  sm:min-h-[450px]
                  lg:min-h-[420px]
                "
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={slide.id}
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={textTransition}
                    className="absolute inset-x-0 top-0"
                  >
                    {/* EYEBROW */}

                    <div
                      className="
                        mb-3
                        flex
                        items-center
                        justify-center
                        gap-2
                        lg:mb-5
                        lg:justify-start
                        lg:gap-3
                      "
                    >
                      <span className="h-px w-6 bg-primary sm:w-10" />

                      <span
                        className="
                          max-w-[280px]
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.14em]
                          text-primary
                          sm:text-xs
                          sm:tracking-[0.2em]
                        "
                      >
                        {slide.eyebrow}
                      </span>
                    </div>

                    {/* TITLE */}

                    <h1
                      className="
                        text-[3rem]
                        font-black
                        leading-[0.9]
                        tracking-[-0.045em]
                        text-white
                        sm:text-6xl
                        md:text-7xl
                        lg:text-8xl
                      "
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
                    </h1>

                    {/* DESCRIPTION */}

                    <p
                      className="
                        mx-auto
                        mt-4
                        max-w-[340px]
                        text-sm
                        leading-6
                        text-white/75
                        sm:mt-6
                        sm:max-w-2xl
                        sm:text-lg
                        sm:leading-7
                        lg:mx-0
                      "
                    >
                      {slide.description}
                    </p>

                    {/* =================================================
                        MOBILE EVENT INFORMATION
                    ================================================== */}

                    {slide.type === "event" && (
                      <div
                        className="
                          mx-auto
                          mt-5
                          grid
                          max-w-[360px]
                          grid-cols-3
                          overflow-hidden
                          rounded-2xl
                          border
                          border-white/10
                          bg-black/45
                          backdrop-blur-xl
                          lg:hidden
                        "
                      >
                        {/* DATE */}

                        <div className="min-w-0 p-2.5 text-center">
                          <CalendarCheck
                            size={15}
                            className="mx-auto mb-1 text-primary"
                          />

                          <p className="text-[8px] font-bold uppercase tracking-wider text-white/40">
                            Date
                          </p>

                          <p className="mt-0.5 truncate text-[10px] font-bold text-white">
                            {slide.date}
                          </p>
                        </div>

                        {/* TIME */}

                        <div className="min-w-0 border-x border-white/10 p-2.5 text-center">
                          <Clock3
                            size={15}
                            className="mx-auto mb-1 text-secondary"
                          />

                          <p className="text-[8px] font-bold uppercase tracking-wider text-white/40">
                            Time
                          </p>

                          <p className="mt-0.5 truncate text-[10px] font-bold text-white">
                            {slide.time}
                          </p>
                        </div>

                        {/* PRICE */}

                        <div className="min-w-0 p-2.5 text-center">
                          <Ticket
                            size={15}
                            className="mx-auto mb-1 text-primary"
                          />

                          <p className="text-[8px] font-bold uppercase tracking-wider text-white/40">
                            Cover
                          </p>

                          <p className="mt-0.5 truncate text-[10px] font-black text-primary">
                            {slide.price}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* =================================================
                        DESKTOP EVENT INFORMATION
                    ================================================== */}

                    {slide.type === "event" && (
                      <div
                        className="
                          mt-7
                          hidden
                          flex-wrap
                          justify-center
                          gap-2
                          lg:flex
                          lg:justify-start
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/10
                            bg-white/10
                            px-4
                            py-2
                            text-sm
                            text-white
                            backdrop-blur-xl
                          "
                        >
                          <CalendarCheck size={16} className="text-primary" />

                          {slide.date}
                        </div>

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/10
                            bg-white/10
                            px-4
                            py-2
                            text-sm
                            text-white
                            backdrop-blur-xl
                          "
                        >
                          <Clock3 size={16} className="text-secondary" />

                          {slide.time}
                        </div>

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-primary/30
                            bg-primary/20
                            px-4
                            py-2
                            text-sm
                            font-black
                            text-white
                            backdrop-blur-xl
                          "
                        >
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

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`buttons-${slide.id}`}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    mt-2
                    flex
                    flex-col
                    gap-2.5
                    sm:mt-3
                    sm:flex-row
                    sm:justify-center
                    lg:justify-start
                  "
                >
                  <Link
                    to={slide.link}
                    className="
                      btn
                      btn-primary
                      btn-md
                      w-full
                      rounded-full
                      px-6
                      shadow-2xl
                      shadow-primary/25
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:scale-[1.02]
                      sm:btn-lg
                      sm:w-auto
                      sm:px-8
                    "
                  >
                    <SlideIcon size={18} />

                    {slide.button}

                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    to="/rentalStudio"
                    className="
                      btn
                      btn-md
                      w-full
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      px-6
                      text-white
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-white/20
                      sm:btn-lg
                      sm:w-auto
                      sm:px-8
                    "
                  >
                    <PartyPopper size={18} />
                    Rent the Studio
                  </Link>
                </motion.div>
              </AnimatePresence>

              {/* =================================================
                  SLIDER
              ================================================== */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-1.5
                  lg:mt-8
                  lg:justify-start
                "
              >
                {slides.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => changeSlide(index)}
                    aria-label={`Show ${item.title}`}
                    className="group p-1"
                  >
                    <motion.span
                      animate={{
                        width: activeSlide === index ? 48 : 12,
                        opacity: activeSlide === index ? 1 : 0.45,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="
                        block
                        h-1.5
                        rounded-full
                        bg-primary
                        sm:h-1.5
                      "
                    />
                  </button>
                ))}
              </div>

              {/* SLIDE NUMBER */}

              <div className="mt-2 text-center lg:text-left">
                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-white/40
                  "
                >
                  {String(activeSlide + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </span>
              </div>

              {/* =================================================
                  TRUST POINTS
              ================================================== */}

              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  justify-center
                  gap-x-4
                  gap-y-2
                  text-[10px]
                  text-white/65
                  sm:mt-6
                  sm:text-sm
                  lg:justify-start
                "
              >
                <span className="flex items-center gap-1.5">
                  <CheckCircle2
                    size={13}
                    className="text-primary sm:h-[15px] sm:w-[15px]"
                  />
                  All Levels Welcome
                </span>

                <span className="flex items-center gap-1.5">
                  <CheckCircle2
                    size={13}
                    className="text-primary sm:h-[15px] sm:w-[15px]"
                  />
                  Classes & Workshops
                </span>

                <span className="flex items-center gap-1.5">
                  <MapPin
                    size={13}
                    className="text-secondary sm:h-[15px] sm:w-[15px]"
                  />
                  Las Vegas
                </span>
              </div>

              {/* =================================================
                  STATS
              ================================================== */}

              <div
                className="
                  mx-auto
                  mt-5
                  grid
                  max-w-[360px]
                  grid-cols-3
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/40
                  text-center
                  shadow-2xl
                  backdrop-blur-xl
                  sm:mt-7
                  sm:max-w-xl
                  lg:mx-0
                "
              >
                <div className="p-2.5 sm:p-4">
                  <h2 className="text-lg font-black text-primary sm:text-2xl">
                    130+
                  </h2>

                  <p className="mt-0.5 text-[9px] text-white/50 sm:text-xs">
                    Students
                  </p>
                </div>

                <div className="border-x border-white/10 p-2.5 sm:p-4">
                  <h2 className="text-lg font-black text-secondary sm:text-2xl">
                    10+
                  </h2>

                  <p className="mt-0.5 text-[9px] text-white/50 sm:text-xs">
                    Weekly Classes
                  </p>
                </div>

                <div className="p-2.5 sm:p-4">
                  <h2 className="text-lg font-black text-white sm:text-2xl">
                    10+
                  </h2>

                  <p className="mt-0.5 text-[9px] text-white/50 sm:text-xs">
                    Years
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE / IMAGE
            ================================================== */}

            <div
              className="
                relative
                mx-auto
                w-full
                max-w-xl
                lg:block
              "
            >
              {/* IMAGE GLOW */}

              <div
                className="
                  absolute
                  -inset-4
                  rounded-[2.5rem]
                  bg-primary/15
                  blur-3xl
                "
              />

              {/* IMAGE */}

              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={`visual-${slide.id}`}
                  variants={imageVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={imageTransition}
                  className="
                    relative
                    overflow-hidden
                    rounded-[2rem]
                    border
                    border-white/15
                    bg-white/10
                    p-1.5
                    shadow-2xl
                    backdrop-blur-sm
                    sm:rounded-[2.5rem]
                    sm:p-2
                  "
                >
                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[1.5rem]
                      bg-black
                      sm:rounded-[2rem]
                    "
                  >
                    <img
                      src={slide.image}
                      alt={
                        slide.type === "event"
                          ? slide.title
                          : "Freedom Dance Studio Las Vegas"
                      }
                      className={`
                        h-[270px]
                        w-full
                        sm:h-[430px]
                        lg:h-[620px]
                        ${
                          slide.type === "event"
                            ? "object-contain"
                            : "object-cover"
                        }
                      `}
                    />

                    {/* IMAGE GRADIENT */}

                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black
                        via-transparent
                        to-black/10
                      "
                    />

                    {/* =================================================
                        EVENT IMAGE LABEL
                    ================================================== */}

                    {slide.type === "event" && (
                      <div
                        className="
                          absolute
                          bottom-3
                          left-3
                          right-3
                          sm:bottom-5
                          sm:left-5
                          sm:right-5
                        "
                      >
                        <div
                          className="
                            rounded-xl
                            border
                            border-white/15
                            bg-black/60
                            p-3
                            backdrop-blur-xl
                            sm:rounded-2xl
                            sm:p-5
                          "
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div className="min-w-0">
                              <div
                                className="
                                  mb-1.5
                                  inline-flex
                                  items-center
                                  gap-1.5
                                  rounded-full
                                  bg-primary
                                  px-2
                                  py-1
                                  text-[8px]
                                  font-black
                                  uppercase
                                  tracking-wider
                                  text-primary-content
                                  sm:mb-2
                                  sm:px-3
                                  sm:text-[9px]
                                "
                              >
                                <Sparkles size={9} />
                                Upcoming Event
                              </div>

                              <h3
                                className="
                                  truncate
                                  text-base
                                  font-black
                                  text-white
                                  sm:text-2xl
                                "
                              >
                                {slide.title}{" "}
                                <span className="text-primary">
                                  {slide.highlight}
                                </span>
                              </h3>
                            </div>

                            <div
                              className="
                                hidden
                                rounded-xl
                                border
                                border-white/10
                                bg-white/10
                                px-4
                                py-3
                                text-center
                                sm:block
                              "
                            >
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

                    {/* =================================================
                        MESSAGE IMAGE LABEL
                    ================================================== */}

                    {slide.type !== "event" && (
                      <div
                        className="
                          absolute
                          bottom-3
                          left-3
                          right-3
                          sm:bottom-6
                          sm:left-6
                          sm:right-6
                        "
                      >
                        <div
                          className="
                            rounded-xl
                            border
                            border-white/10
                            bg-black/55
                            p-3
                            backdrop-blur-xl
                            sm:rounded-2xl
                            sm:p-5
                          "
                        >
                          <p
                            className="
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-[0.15em]
                              text-primary
                              sm:text-xs
                            "
                          >
                            Freedom Dance Studio
                          </p>

                          <p
                            className="
                              mt-1
                              text-base
                              font-black
                              text-white
                              sm:text-2xl
                            "
                          >
                            Dance • Learn • Create
                          </p>

                          <p className="mt-1 text-xs text-white/60 sm:text-sm">
                            Your community. Your space. Your freedom.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* =================================================
                  DESKTOP EVENT INFO CARD
              ================================================== */}

              <AnimatePresence mode="wait" initial={false}>
                {slide.type === "event" && (
                  <motion.div
                    key={`event-card-${slide.id}`}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -8,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      absolute
                      -bottom-7
                      left-5
                      right-5
                      z-30
                      hidden
                      rounded-2xl
                      border
                      border-white/15
                      bg-black/85
                      p-3
                      shadow-2xl
                      backdrop-blur-xl
                      sm:left-8
                      sm:right-8
                      sm:p-4
                      lg:block
                    "
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
                  x: -15,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: [0, -5, 0],
                }}
                transition={{
                  opacity: {
                    delay: 0.7,
                    duration: 0.6,
                  },
                  x: {
                    delay: 0.7,
                    duration: 0.6,
                  },
                  y: {
                    delay: 1.4,
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="
                  absolute
                  -bottom-20
                  -left-3
                  z-40
                  hidden
                  sm:block
                  lg:-left-8
                "
              >
                <Link
                  to="/rentalStudio"
                  className="
                    group
                    flex
                    max-w-[300px]
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-white/15
                    bg-white
                    p-4
                    text-black
                    shadow-2xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-primary/30
                  "
                >
                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-primary/10
                      text-primary
                    "
                  >
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
                    className="
                      ml-auto
                      shrink-0
                      text-primary
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
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
                className="
                  absolute
                  -right-3
                  top-8
                  hidden
                  rounded-2xl
                  border
                  border-white/15
                  bg-black/55
                  px-4
                  py-3
                  text-white
                  shadow-xl
                  backdrop-blur-xl
                  sm:block
                  lg:-right-7
                "
              >
                <div className="flex items-center gap-3">
                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-secondary/15
                      text-secondary
                    "
                  >
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
          MOBILE QUICK CTA
      ====================================================== */}

      <div
        className="
          absolute
          bottom-3
          left-4
          right-4
          z-30
          lg:hidden
        "
      >
        <Link
          to="/schedule"
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-full
            border
            border-white/15
            bg-black/45
            px-4
            py-2.5
            text-[10px]
            font-bold
            uppercase
            tracking-[0.12em]
            text-white/70
            backdrop-blur-xl
          "
        >
          <Sparkles size={13} className="text-primary" />
          Explore Freedom Dance
          <ArrowRight size={13} className="text-primary" />
        </Link>
      </div>

      {/* =====================================================
          DESKTOP SCROLL INDICATOR
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
        className="
          absolute
          bottom-5
          left-1/2
          z-30
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-1
          text-white/40
          transition-colors
          hover:text-white
          md:flex
        "
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
