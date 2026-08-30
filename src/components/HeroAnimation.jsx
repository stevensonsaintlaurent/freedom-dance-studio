import { Link } from "react-router-dom";

import {
  ArrowRight,
  CalendarCheck,
  Clock3,
  Sparkles,
  Ticket,
  PartyPopper,
  Music2,
  Plane,
  Users,
} from "lucide-react";

import heroImage from "../assets/recentClip1.jpeg";
import septemberSocial from "../assets/freeman.jpeg";
import workshop from "../assets/lady/sandra.jpg";
import havasu from "../assets/havasu.png";

/* =========================================================
   HERO DATA

   EVENT RULE:
   - eventStart determines whether an event is upcoming.
   - Past events are automatically removed.
   - The closest upcoming event is automatically displayed.
   - You do NOT need to manually change the active Hero.
========================================================= */

const HERO_DATA = {
  workshop: {
    type: "event",

    eyebrow: "UPCOMING WORKSHOP • SALSA ON2",

    title: "Salsa On2",

    highlight: "Ladies Styling.",

    description:
      "Join Sandra for a special Salsa On2 Ladies Styling workshop focused on Mambo Footwork & Fusion, Ladies' Styling, Choreography and Performance Quality. Beginner / Level 1 friendly.",

    eventStart: "2026-08-22",

    date: "August 22, 2026",

    time: "2:00 PM – 4:00 PM",

    price: "$25",

    priceLabel: "Non-Members",

    secondaryPrice: "FREE",

    secondaryPriceLabel: "Members & Instructors",

    image: workshop,

    button: "View Workshop",

    link: "/events",

    icon: Sparkles,

    accent: "secondary",
  },

  havasu: {
    type: "event",

    eyebrow: "UPCOMING EVENT • DANCE • TRAVEL",

    title: "SBK Lake Havasu",

    highlight: "Trip.",

    description:
      "Travel, dance and connect with the Freedom Dance community. Join teachers and students for an unforgettable weekend together.",

    eventStart: "2026-08-28",

    date: "August 28–30, 2026",

    time: "Friday – Sunday",

    price: "Join Us",

    priceLabel: "Trip",

    image: havasu,

    button: "View Trip",

    link: "/events",

    icon: Plane,

    accent: "primary",
  },

  social: {
    type: "event",

    eyebrow: "UPCOMING EVENT • FREEDOM DANCE",

    title: "Freedom Dance",

    highlight: "Social.",

    description:
      "Join us for a night of Salsa, Bachata and Kizomba. Enjoy a free Bachata and Kizomba class, a special Kizomba performance, and dance with the Freedom Dance community.",

    eventStart: "2026-09-04",

    date: "September 4, 2026",

    time: "9:00 PM – 2:00 AM",

    price: "$20",

    priceLabel: "Cover",

    image: septemberSocial,

    button: "Register Now",

    link: "/book",

    icon: Music2,

    accent: "primary",
  },

  learn: {
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

  studio: {
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

  community: {
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
};

/* =========================================================
   GET THE NEXT UPCOMING EVENT

   Events are automatically sorted by date.

   Example on August 20, 2026:

   August 22 → Salsa On2 Ladies Styling
   August 28 → SBK Lake Havasu
   September 4 → Freedom Dance Social

   Any event before today is ignored.
========================================================= */

const getUpcomingEvent = () => {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const upcomingEvents = Object.values(HERO_DATA)
    .filter((hero) => {
      if (hero.type !== "event" || !hero.eventStart) {
        return false;
      }

      const eventDate = new Date(`${hero.eventStart}T00:00:00`);

      return eventDate >= today;
    })
    .sort((first, second) => {
      const firstDate = new Date(`${first.eventStart}T00:00:00`);
      const secondDate = new Date(`${second.eventStart}T00:00:00`);

      return firstDate - secondDate;
    });

  return upcomingEvents[0] || HERO_DATA.community;
};

const HeroAnimation = () => {
  const hero = getUpcomingEvent();

  const HeroIcon = hero.icon;

  return (
    <div className="relative min-h-[100svh]">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0">
        <img
          src={hero.image}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/70 lg:bg-black/65" />

      <div className="absolute inset-0 hidden bg-gradient-to-r from-black via-black/75 to-black/25 lg:block" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black lg:hidden" />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-20 flex min-h-[100svh] items-center">
        <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-14 sm:pt-24 lg:px-10 lg:py-28">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <div className="text-center lg:text-left">
              {/* Top Badge */}

              <div className="mb-3 inline-flex sm:mb-6 lg:mb-7">
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white shadow-xl backdrop-blur-xl sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.16em]">
                  <Sparkles size={12} className="shrink-0 text-primary" />

                  {hero.type === "event"
                    ? "Upcoming Event at Freedom Dance"
                    : "Las Vegas Dance Community"}
                </div>
              </div>

              <div className="min-h-[420px] sm:min-h-[440px] lg:min-h-[500px]">
                {/* Eyebrow */}

                <div className="mb-3 flex items-center justify-center gap-2 lg:mb-5 lg:justify-start lg:gap-3">
                  <span className="h-px w-6 bg-primary sm:w-10" />

                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-primary sm:text-xs sm:tracking-[0.2em]">
                    {hero.eyebrow}
                  </span>
                </div>

                {/* Title */}

                <h1 className="text-[3rem] font-black leading-[0.9] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  {hero.title}

                  <br />

                  <span
                    className={
                      hero.accent === "secondary"
                        ? "text-secondary"
                        : "text-primary"
                    }
                  >
                    {hero.highlight}
                  </span>
                </h1>

                {/* Description */}

                <p className="mx-auto mt-4 max-w-[340px] text-sm leading-6 text-white/75 sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-7 lg:mx-0">
                  {hero.description}
                </p>

                {/* =================================================
                    EVENT INFORMATION
                ================================================= */}

                {hero.type === "event" && (
                  <div className="mx-auto mt-5 grid max-w-[390px] grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-black/45 backdrop-blur-xl">
                    {/* Date */}

                    <div className="p-2.5 text-center">
                      <CalendarCheck
                        size={15}
                        className="mx-auto mb-1 text-primary"
                      />

                      <p className="text-[8px] font-bold uppercase tracking-wider text-white/40">
                        Date
                      </p>

                      <p className="mt-0.5 text-[10px] font-bold text-white">
                        {hero.date}
                      </p>
                    </div>

                    {/* Time */}

                    <div className="border-x border-white/10 p-2.5 text-center">
                      <Clock3
                        size={15}
                        className="mx-auto mb-1 text-secondary"
                      />

                      <p className="text-[8px] font-bold uppercase tracking-wider text-white/40">
                        Time
                      </p>

                      <p className="mt-0.5 text-[10px] font-bold text-white">
                        {hero.time}
                      </p>
                    </div>

                    {/* Price */}

                    <div className="p-2.5 text-center">
                      <Ticket size={15} className="mx-auto mb-1 text-primary" />

                      <p className="text-[8px] font-bold uppercase tracking-wider text-white/40">
                        Price
                      </p>

                      {hero.secondaryPrice ? (
                        <>
                          <p className="mt-0.5 text-[9px] font-black text-primary">
                            {hero.secondaryPrice}
                          </p>

                          <p className="text-[7px] text-white/50">
                            {hero.secondaryPriceLabel}
                          </p>

                          <p className="mt-0.5 text-[9px] font-black text-primary">
                            {hero.price}
                          </p>

                          <p className="text-[7px] text-white/50">
                            {hero.priceLabel}
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="mt-0.5 text-[10px] font-black text-primary">
                            {hero.price}
                          </p>

                          {hero.priceLabel && (
                            <p className="text-[7px] text-white/50">
                              {hero.priceLabel}
                            </p>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* =================================================
                    BUTTONS
                ================================================= */}

                <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:justify-center lg:justify-start">
                  <Link
                    to={hero.link}
                    className="btn btn-primary btn-md w-full rounded-full px-6 shadow-2xl shadow-primary/25 sm:btn-lg sm:w-auto sm:px-8"
                  >
                    <HeroIcon size={18} />

                    {hero.button}

                    <ArrowRight size={17} />
                  </Link>

                  <Link
                    to="/studiopricing"
                    className="btn btn-md w-full rounded-full border border-white/20 bg-white/10 px-6 text-white backdrop-blur-xl sm:btn-lg sm:w-auto sm:px-8"
                  >
                    <PartyPopper size={18} />
                    Rent the Studio
                  </Link>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT SIDE IMAGE
            ================================================= */}

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-primary/15 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-1.5 shadow-2xl backdrop-blur-sm sm:rounded-[2.5rem] sm:p-2">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-black sm:rounded-[2rem]">
                  <img
                    src={hero.image}
                    alt={
                      hero.type === "event"
                        ? hero.title
                        : "Freedom Dance Studio Las Vegas"
                    }
                    className={`h-[270px] w-full sm:h-[430px] lg:h-[620px] ${
                      hero.type === "event" ? "object-contain" : "object-cover"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />

                  {/* =================================================
                      EVENT CARD
                  ================================================= */}

                  {hero.type === "event" ? (
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5">
                      <div className="rounded-xl border border-white/15 bg-black/60 p-3 backdrop-blur-xl sm:rounded-2xl sm:p-5">
                        <div className="flex items-center justify-between gap-3">
                          <div className="min-w-0">
                            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[9px] font-black uppercase tracking-wider text-primary-content">
                              <Sparkles size={9} />
                              Upcoming Event
                            </div>

                            <h3 className="truncate text-base font-black text-white sm:text-2xl">
                              {hero.title}{" "}
                              <span
                                className={
                                  hero.accent === "secondary"
                                    ? "text-secondary"
                                    : "text-primary"
                                }
                              >
                                {hero.highlight}
                              </span>
                            </h3>
                          </div>

                          <div className="hidden rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-center sm:block">
                            {hero.secondaryPrice ? (
                              <>
                                <p className="text-[9px] uppercase tracking-wider text-white/40">
                                  Members
                                </p>

                                <p className="text-lg font-black text-primary">
                                  FREE
                                </p>

                                <p className="mt-1 text-[9px] uppercase tracking-wider text-white/40">
                                  Non-Members
                                </p>

                                <p className="text-lg font-black text-primary">
                                  {hero.price}
                                </p>
                              </>
                            ) : (
                              <>
                                <p className="text-[9px] uppercase tracking-wider text-white/40">
                                  {hero.priceLabel || "Cover"}
                                </p>

                                <p className="text-lg font-black text-primary">
                                  {hero.price}
                                </p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* =================================================
                       MESSAGE CARD
                    ================================================= */

                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
                      <div className="rounded-xl border border-white/10 bg-black/55 p-3 backdrop-blur-xl sm:rounded-2xl sm:p-5">
                        <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-primary sm:text-xs">
                          Freedom Dance Studio
                        </p>

                        <p className="mt-1 text-base font-black text-white sm:text-2xl">
                          Dance • Learn • Create
                        </p>

                        <p className="mt-1 text-xs text-white/60 sm:text-sm">
                          Your community. Your space. Your freedom.
                        </p>
                      </div>
                    </div>
                  )}
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
