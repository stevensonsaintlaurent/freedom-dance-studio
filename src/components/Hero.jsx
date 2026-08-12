import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";

import heroVideo from "../assets/clipVideo/bachataclip2.mp4";
import heroImage from "../assets/recentClip1.jpeg";

const Hero = () => {
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

      {/* Main dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Left-to-right gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-black/80 to-transparent" />

      {/* =====================================================
          DECORATIVE LIGHT
      ====================================================== */}

      <div className="absolute -left-32 top-1/4 z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

      <div className="absolute -right-32 bottom-1/4 z-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

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
              {/* Badge */}

              <div className="mb-6 inline-flex">
                <div className="badge badge-primary badge-lg gap-2 px-4 py-4 shadow-lg shadow-primary/20">
                  <Sparkles size={15} />

                  <span>Las Vegas Dance Community</span>
                </div>
              </div>

              {/* Heading */}

              <h1
                className="
                  text-4xl
                  font-black
                  leading-[1.05]
                  tracking-tight
                  text-white
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
              >
                Dance.
                <span className="text-primary"> Connect.</span>
                <br />
                Live with
                <span className="text-secondary"> Freedom.</span>
              </h1>

              {/* Description */}

              <p
                className="
                  mx-auto
                  mt-6
                  max-w-2xl
                  text-base
                  leading-8
                  text-white/80
                  sm:text-lg
                  lg:mx-0
                "
              >
                Learn Bachata, Salsa, Urban Kiz, Konpa and more in a welcoming
                Las Vegas dance community. Whether you're a beginner,
                experienced dancer, instructor, or performer, there's a place
                for you at Freedom Dance Studio.
              </p>

              {/* =================================================
                  PRIMARY ACTIONS
              ================================================== */}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                {/* Class CTA */}

                <Link
                  to="/schedule"
                  className="
                    btn
                    btn-primary
                    btn-lg
                    rounded-full
                    px-7
                    shadow-xl
                    shadow-primary/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-2xl
                  "
                >
                  <CalendarCheck size={20} />
                  Book Your First Class
                  <ArrowRight size={18} />
                </Link>

                {/* Rental CTA */}

                <Link
                  to="/rentalStudio"
                  className="
                    btn
                    btn-lg
                    rounded-full
                    border
                    border-white/30
                    bg-white/10
                    px-7
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-white/50
                    hover:bg-white/20
                  "
                >
                  <Clock3 size={20} />
                  Rent Our Studio
                </Link>
              </div>

              {/* =================================================
                  RENTAL MINI MESSAGE
              ================================================== */}

              <Link
                to="/rentalStudio"
                className="
                  group
                  mt-6
                  inline-flex
                  max-w-xl
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/25
                  px-4
                  py-3
                  text-left
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-primary/40
                  hover:bg-black/40
                "
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Clock3 size={20} />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-bold text-white">
                    Looking for a studio to teach?
                  </p>

                  <p className="text-xs leading-5 text-white/60 sm:text-sm">
                    Rent our space for classes, private lessons, rehearsals,
                    workshops and events.
                  </p>
                </div>

                <ArrowRight
                  size={18}
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

              {/* =================================================
                  TRUST POINTS
              ================================================== */}

              <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3 text-xs text-white/65 sm:text-sm lg:justify-start">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  All Levels Welcome
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-primary" />
                  Flexible Studio Rental
                </span>

                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-secondary" />
                  Las Vegas
                </span>
              </div>

              {/* =================================================
                  STATS
              ================================================== */}

              <div
                className="
                  mt-10
                  grid
                  grid-cols-3
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/10
                  text-center
                  shadow-2xl
                  backdrop-blur-md
                "
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
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE IMAGE
            ================================================== */}

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Glow */}

              <div className="absolute -inset-4 rounded-[2rem] bg-primary/20 blur-2xl" />

              {/* Image */}

              <div
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  border-white/20
                  bg-white/10
                  p-2
                  shadow-2xl
                  backdrop-blur-sm
                "
              >
                <img
                  src={heroImage}
                  alt="Dancers at Freedom Dance Studio in Las Vegas"
                  className="
                    h-[350px]
                    w-full
                    rounded-[1.5rem]
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-105
                    sm:h-[450px]
                    lg:h-[500px]
                  "
                />

                {/* Image overlay */}

                <div className="absolute inset-x-2 bottom-2 rounded-b-[1.5rem] bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 pt-20">
                  <p className="text-sm font-medium text-primary">
                    Freedom Dance Studio
                  </p>

                  <p className="mt-1 text-xl font-bold text-white">
                    Dance • Learn • Create
                  </p>
                </div>
              </div>

              {/* =================================================
                  FLOATING RENTAL CARD
              ================================================== */}

              <Link
                to="/rentalStudio"
                className="
                  group
                  absolute
                  -bottom-5
                  -left-2
                  flex
                  max-w-[280px]
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-base-300/30
                  bg-base-100
                  p-4
                  shadow-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-primary/20
                  sm:-left-6
                "
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock3 size={22} />
                </div>

                <div>
                  <p className="text-xs font-medium text-base-content/60">
                    Studio Rental
                  </p>

                  <p className="text-sm font-bold">Teach • Rehearse • Create</p>

                  <p className="mt-0.5 text-xs text-primary">
                    View rental options
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
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <a
        href="#classes"
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
          text-white/50
          transition-colors
          hover:text-white
          md:flex
        "
        aria-label="Scroll to classes"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
          Explore
        </span>

        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
