import kidsImg from "../assets/kids.jpeg";
import adultsImg from "../assets/recentClip.jpeg";
import musicImg from "../assets/concert-freedom-jazz/P1990974.jpg";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Music2,
  Sparkles,
  Users,
} from "lucide-react";

import { Link } from "react-router-dom";

const classes = [
  {
    id: 1,
    title: "Kids Dance Classes",
    image: kidsImg,
    description:
      "Fun and energetic dance classes designed to help children build confidence, coordination, rhythm, and teamwork.",
    ages: "Ages 4–12",
    schedule: "Mon, Tue & Wed • 4:00 PM",
    badge: "Popular",
    link: "/kids",
    icon: Users,
  },
  {
    id: 2,
    title: "Adult Dance Classes",
    image: adultsImg,
    description:
      "Learn Bachata, Salsa, Urban Kiz, Konpa, and more in beginner and intermediate classes for adults.",
    ages: "13+",
    schedule: "Mon, Thu & Sat • 6:00 PM",
    badge: "Best Seller",
    link: "/adult",
    icon: Music2,
  },
  {
    id: 3,
    title: "Music",
    image: musicImg,
    description:
      "Develop your musical skills through instrument lessons, rhythm training, and live band experience.",
    ages: "All Ages",
    schedule: "Saturday • 10:30 AM",
    badge: "New",
    link: "/music",
    icon: Music2,
  },
];

export default function Classes() {
  return (
    <section
      id="classes"
      className="relative overflow-hidden bg-base-200 py-20 sm:py-24 lg:py-28"
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ===================================================
            SECTION HEADER
        ==================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="badge badge-primary badge-lg gap-2 px-4 py-4">
            <Sparkles size={15} />
            Our Programs
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Find Your
            <span className="text-primary"> Perfect Class</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-base-content/70 sm:text-lg">
            Whether you're looking for dance classes for your child, adult
            social dancing, or music education, Freedom Dance Studio has a
            program for everyone.
          </p>

          {/* Quick action */}

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/schedule"
              className="btn btn-primary rounded-full px-6 shadow-lg shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
            >
              <CalendarDays size={18} />
              View Full Schedule
            </Link>

            <Link
              to="/classes"
              className="btn btn-outline rounded-full px-6 transition-all duration-300 hover:-translate-y-1"
            >
              Explore All Classes
            </Link>
          </div>
        </div>

        {/* ===================================================
            CLASS CARDS
        ==================================================== */}

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="
                  group
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-base-300
                  bg-base-100
                  shadow-lg
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-primary/30
                  hover:shadow-2xl
                "
              >
                {/* ==========================================
                    IMAGE
                =========================================== */}

                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      h-60
                      w-full
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                      sm:h-64
                    "
                  />

                  {/* Image gradient */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Badge */}

                  <div className="absolute right-4 top-4">
                    <div className="badge badge-secondary gap-1 px-3 py-3 font-semibold shadow-lg">
                      <Sparkles size={12} />
                      {item.badge}
                    </div>
                  </div>

                  {/* Bottom icon */}

                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-black/30 text-white backdrop-blur-md">
                    <Icon size={21} />
                  </div>
                </div>

                {/* ==========================================
                    CONTENT
                =========================================== */}

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-base-content/65">
                    {item.description}
                  </p>

                  {/* Divider */}

                  <div className="my-6 h-px bg-base-300" />

                  {/* Details */}

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Users size={17} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wide text-base-content/50">
                          Age Group
                        </p>

                        <p className="font-semibold">{item.ages}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                        <Clock3 size={17} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wide text-base-content/50">
                          Schedule
                        </p>

                        <p className="text-sm font-semibold sm:text-base">
                          {item.schedule}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ========================================
                      BUTTONS
                  ========================================= */}

                  <div className="mt-auto pt-7">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Link
                        to={item.link}
                        className="
                          btn
                          btn-primary
                          flex-1
                          rounded-xl
                          shadow-md
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                        "
                      >
                        Book Now
                        <ArrowRight size={17} />
                      </Link>

                      <Link
                        to="/schedule"
                        className="
                          btn
                          btn-outline
                          flex-1
                          rounded-xl
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                        "
                      >
                        Schedule
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ===================================================
            INSTRUCTOR / RENTAL CTA
        ==================================================== */}

        <div className="mt-20">
          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              bg-neutral
              shadow-2xl
            "
          >
            {/* Decorative circles */}

            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

            <div className="relative grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
              {/* Text */}

              <div>
                <div className="badge badge-primary badge-lg gap-2">
                  <Sparkles size={14} />
                  For Instructors & Creators
                </div>

                <h3 className="mt-5 text-3xl font-black text-white sm:text-4xl">
                  Already teaching?
                  <span className="text-primary"> Use Our Studio.</span>
                </h3>

                <p className="mt-4 max-w-2xl leading-7 text-white/65 sm:text-lg">
                  Looking for a professional space for your weekly classes,
                  private lessons, rehearsals, workshops, fitness sessions or
                  events? Freedom Dance Studio offers flexible rental options in
                  Las Vegas.
                </p>

                {/* Benefits */}

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 size={17} className="text-primary" />
                    Flexible rental times
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 size={17} className="text-primary" />
                    Professional dance space
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 size={17} className="text-primary" />
                    Recurring weekly options
                  </div>

                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 size={17} className="text-primary" />
                    Classes, rehearsals & events
                  </div>
                </div>
              </div>

              {/* CTA */}

              <div className="lg:pr-2">
                <Link
                  to="/rentalStudio"
                  className="
                    btn
                    btn-primary
                    btn-lg
                    w-full
                    rounded-full
                    px-8
                    shadow-xl
                    shadow-primary/20
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    sm:w-auto
                  "
                >
                  Rent the Studio
                  <ArrowRight size={19} />
                </Link>

                <p className="mt-3 text-center text-xs text-white/40 lg:text-right">
                  View spaces, pricing & availability
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
