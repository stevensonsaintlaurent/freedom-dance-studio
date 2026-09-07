import { Link } from "react-router-dom";

import {
  ArrowRight,
  CalendarCheck,
  Clock3,
  PartyPopper,
  Sparkles,
  Ticket,
} from "lucide-react";

import heroImage from "../assets/recentClip1.jpeg";

import { events } from "../data/eventsData";

/*
=========================================================
GET UPCOMING EVENT

1. Ignore events with showInHero: false
2. Ignore events that already ended
3. Prefer featured: true
4. Otherwise show the closest upcoming event
=========================================================
*/

const getUpcomingEvent = () => {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const upcomingEvents = events
    .filter((event) => {
      if (event.showInHero === false) {
        return false;
      }

      if (!event.eventStart) {
        return false;
      }

      const endDate = new Date(
        `${event.eventEnd || event.eventStart}T23:59:59`,
      );

      return endDate >= today;
    })
    .sort((first, second) => {
      // Featured event comes first
      if (first.featured && !second.featured) {
        return -1;
      }

      if (!first.featured && second.featured) {
        return 1;
      }

      // Then sort by date
      const firstDate = new Date(`${first.eventStart}T00:00:00`);

      const secondDate = new Date(`${second.eventStart}T00:00:00`);

      return firstDate - secondDate;
    });

  return upcomingEvents[0] || null;
};

const HeroAnimation = () => {
  const event = getUpcomingEvent();

  /*
  =========================================================
  NO UPCOMING EVENT
  =========================================================
  */

  if (!event) {
    return (
      <div className="relative min-h-[100svh]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Freedom Dance Studio"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />

        <div className="relative z-20 flex min-h-[100svh] items-center">
          <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-10">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-xl">
                <Sparkles size={14} className="text-primary" />
                Freedom Dance Studio
              </div>

              <h1 className="text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-8xl">
                Dance.
                <br />
                Learn.
                <br />
                <span className="text-primary">Connect.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                Join the Freedom Dance community in Las Vegas for Salsa,
                Bachata, Kizomba, Konpa and more.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/schedule"
                  className="btn btn-primary btn-lg rounded-full px-8"
                >
                  View Classes
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/studiopricing"
                  className="btn btn-lg rounded-full border border-white/20 bg-white/10 px-8 text-white"
                >
                  <PartyPopper size={18} />
                  Rent Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /*
  =========================================================
  EVENT HERO
  =========================================================
  */

  return (
    <div className="relative min-h-[100svh]">
      {/* BACKGROUND */}

      <div className="absolute inset-0">
        <img
          src={event.image}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/70 lg:bg-black/65" />

      <div className="absolute inset-0 hidden bg-gradient-to-r from-black via-black/75 to-black/25 lg:block" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black lg:hidden" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* CONTENT */}

      <div className="relative z-20 flex min-h-[100svh] items-center">
        <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-10 lg:py-28">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            {/* LEFT */}

            <div className="text-center lg:text-left">
              <div className="mb-5 inline-flex">
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-xl backdrop-blur-xl">
                  <Sparkles size={12} className="text-primary" />
                  Upcoming Event at Freedom Dance
                </div>
              </div>

              <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
                <span className="h-px w-10 bg-primary" />

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {event.type}
                </span>
              </div>

              {/* EVENT TITLE */}

              <h1 className="text-[3rem] font-black leading-[0.9] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                {event.title}
              </h1>

              {/* INSTRUCTOR */}

              {event.instructor && (
                <p className="mt-4 text-lg font-bold text-primary sm:text-xl">
                  {event.instructor}
                </p>
              )}

              {/* DESCRIPTION */}

              <p className="mx-auto mt-4 max-w-[500px] text-sm leading-6 text-white/75 sm:mt-6 sm:text-lg sm:leading-7 lg:mx-0">
                {event.description}
              </p>

              {/* EVENT INFORMATION */}

              <div className="mx-auto mt-6 grid max-w-[460px] grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-black/45 backdrop-blur-xl lg:mx-0">
                {/* DATE */}

                <div className="p-3 text-center">
                  <CalendarCheck
                    size={17}
                    className="mx-auto mb-1 text-primary"
                  />

                  <p className="text-[8px] font-bold uppercase tracking-wider text-white/40">
                    Date
                  </p>

                  <p className="mt-1 text-[10px] font-bold text-white sm:text-xs">
                    {event.date}
                  </p>
                </div>

                {/* TIME */}

                <div className="border-x border-white/10 p-3 text-center">
                  <Clock3 size={17} className="mx-auto mb-1 text-secondary" />

                  <p className="text-[8px] font-bold uppercase tracking-wider text-white/40">
                    Time
                  </p>

                  <p className="mt-1 text-[10px] font-bold text-white sm:text-xs">
                    {event.time || "See Details"}
                  </p>
                </div>

                {/* PRICE */}

                <div className="p-3 text-center">
                  <Ticket size={17} className="mx-auto mb-1 text-primary" />

                  <p className="text-[8px] font-bold uppercase tracking-wider text-white/40">
                    Price
                  </p>

                  <p className="mt-1 text-sm font-black text-primary">
                    {event.price || "See Details"}
                  </p>

                  {event.priceDetails && (
                    <p className="mt-0.5 text-[7px] text-white/50">
                      {event.priceDetails}
                    </p>
                  )}
                </div>
              </div>

              {/* BUTTONS */}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  to="/book"
                  state={event}
                  className="btn btn-primary btn-md w-full rounded-full px-6 shadow-2xl shadow-primary/25 sm:btn-lg sm:w-auto sm:px-8"
                >
                  {event.button || "Register Now"}

                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/events"
                  className="btn btn-md w-full rounded-full border border-white/20 bg-white/10 px-6 text-white backdrop-blur-xl sm:btn-lg sm:w-auto sm:px-8"
                >
                  View Event
                </Link>

                <Link
                  to="/studiopricing"
                  className="btn btn-md w-full rounded-full border border-white/20 bg-white/10 px-6 text-white backdrop-blur-xl sm:btn-lg sm:w-auto sm:px-8"
                >
                  <PartyPopper size={18} />
                  Rent Studio
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE */}

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-primary/15 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-1.5 shadow-2xl backdrop-blur-sm sm:rounded-[2.5rem] sm:p-2">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-black sm:rounded-[2rem]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className={`h-[380px] w-full sm:h-[500px] lg:h-[620px] ${
                      event.imageFit === "contain"
                        ? "object-contain"
                        : "object-cover"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />

                  {/* BOTTOM EVENT CARD */}

                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5">
                    <div className="rounded-xl border border-white/15 bg-black/65 p-4 backdrop-blur-xl sm:rounded-2xl sm:p-5">
                      <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[9px] font-black uppercase tracking-wider text-primary-content">
                        <Sparkles size={9} />
                        Upcoming Event
                      </div>

                      <h3 className="text-lg font-black text-white sm:text-2xl">
                        {event.title}
                      </h3>

                      {event.instructor && (
                        <p className="mt-1 text-sm text-white/70">
                          {event.instructor}
                        </p>
                      )}

                      <div className="mt-3 flex items-center justify-between gap-4">
                        <p className="text-xs text-white/70">{event.date}</p>

                        {event.price && (
                          <p className="text-xl font-black text-primary">
                            {event.price}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;
