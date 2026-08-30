import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Music2,
  Sparkles,
  Users,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import lady from "../assets/lady/sandra.jpg";
import septemberSocial from "../assets/freeman.jpeg";
import workshop from "../assets/sofi.jpeg";
import havasu from "../assets/havasu.png";
import karol_profil3 from "../public/images/4.jpeg";
import Rodolfo from "../assets/instructors/Rodolfo.jpeg";

const events = [
  // {
  //   id: 1,
  //   type: "WORKSHOP",
  //   title: "Salsa On2 Ladies Styling",
  //   instructor: "with Instructor Sandra",
  //   date: "August 22, 2026",
  //   time: "2:00 PM – 4:00 PM",
  //   location: "Freedom Dance Studio",
  //   price: "$25 Non-Members",
  //   priceDetails: "Members & Instructors",
  //   extraPrice: "",
  //   image: lady,
  //   description:
  //     "Ready to level up your Salsa On2? Join Instructor Sandra for an exciting ladies’ styling workshop designed to bring out your confidence, musicality, and personal style. Explore Mambo footwork, fusion, styling, choreography, and performance quality while building stronger foundations and learning how to truly express yourself on the dance floor. Come ready to move, learn, and shine!",
  //   button: "Register Now",
  //   featured: true,
  // },

  {
    id: 2,
    type: "SOCIAL",
    title: "Freedom Dance Social",
    instructor: "Salsa • Bachata • Kizomba • More",
    date: "September 4, 2026",

    workshop: {
      title: "Salsa on 2 Workshop",
      instructor: "Freeman",
      time: "8:00 PM – 10:00 PM",
      earlyBird: "$25",
      membersAndInstructors: "FREE",
      doorPrice: "$35 at the door",
    },

    social: {
      title: "Freedom Dance Social",
      time: "10:00 PM – 2:00 AM",
      musicBy: "Maximo",
    },

    location: "Freedom Dance Studio",
    price: "$20",
    priceDetails: "Admission",
    image: septemberSocial,

    // Keeps the entire portrait flyer visible
    imageFit: "contain",

    description:
      "Join us for a Salsa on 2 workshop with Freeman from 8:00 PM–10:00 PM, followed by the Freedom Dance Social from 10:00 PM–2:00 AM with music by Maximo. Early bird workshop price is $25. Free for members and instructors. $35 at the door.",

    button: "Get Your Ticket",
  },

  {
    id: 3,
    type: "WEEKEND INTENSIVE",
    title: "Bachata Weekend Intensive",
    instructor: "Training • Technique • Musicality",
    date: "September 11–13, 2026",
    time: "Full Weekend",
    location: "Freedom Dance Studio",
    price: "$99",
    priceDetails: "Early Bird Weekend Pass",
    image: workshop,
    description:
      "A complete Bachata weekend designed to help you improve your technique, musicality, connection, body movement, and confidence.",
    button: "Register Now",
    featured: true,
  },

  // {
  //   id: 4,
  //   type: "TRIP",
  //   title: "SBK Lake Havasu Trip",
  //   instructor: "Teachers & Students",
  //   date: "August 28–30, 2026",
  //   time: "Friday–Sunday",
  //   location: "Lake Havasu City, Arizona",
  //   image: havasu,
  //   description:
  //     "Join our Freedom Dance Studio family for an unforgettable weekend in Lake Havasu! Teachers and students will come together for dancing, social nights, beach time, music, connection, and unforgettable memories by the lake.",
  //   button: "Join the Trip",
  // },

  // {
  //   id: 6,
  //   day: "Thursday",
  //   date: "Every Thursday",
  //   title: "Salsa Rueda de Casino",
  //   time: "6:30 PM – 7:30 PM",
  //   instructor: "Rodolfo",
  //   category: "Salsa / Latin",
  //   phone: "702-591-6499",
  //   location: "Freedom Dance Studio",
  //   price: "Free",
  //   instagram: "https://www.instagram.com/law.soon7?igsi=MWd3OGFlMWwzaWdraw==",
  //   description:
  //     "Learn partner patterns, Cuban-style movements, timing, musicality, and energetic Rueda combinations.",
  //   image: Rodolfo,
  //   video:
  //     "https://cdn.coverr.co/videos/coverr-dancing-in-a-club-1575/1080p.mp4",
  //   button: "Register Now",
  // },

  {
    id: 7,
    day: "Friday",
    date: "Starting September 11, 2026",
    title: "Kids Acting Classes",
    time: "4:00 PM – 5:00 PM",
    instructor: "Karol Di Nassif",
    category: "Acting / Kids",
    location: "Freedom Dance Studio",
    price: "$25-$80",
    phone: "702-496-7934",
    instagram: "",
    description:
      "A creative acting experience for children ages 6–12 designed to build confidence, self-expression, storytelling, improvisation, camera skills, audition techniques, and performance skills. Learn from professional actress, TV presenter, stage performer, and acting coach Karol Di Nassif.",
    image: karol_profil3,
    video: "",
    button: "Register Now",
  },
];

const Events = () => {
  const navigate = useNavigate();

  const handleEvents = (id) => {
    const findEvent = events.find((event) => event.id === id);

    navigate("/book", {
      state: findEvent,
    });
  };

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-base-100 py-20 md:py-28"
    >
      {/* ================= BACKGROUND GLOW ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div
            className="
              mb-5
              inline-flex
              animate-pulse
              items-center
              gap-2
              rounded-full
              bg-primary/10
              px-4
              py-2
              text-sm
              font-bold
              text-primary
            "
          >
            <Sparkles className="h-4 w-4" />
            FREEDOM DANCE EVENTS
          </div>

          <h2 className="text-4xl font-black tracking-tight md:text-6xl">
            What's Happening
            <span className="block text-primary">at Freedom Dance</span>
          </h2>

          <p className="mt-5 text-base-content/70 md:text-lg">
            Workshops, socials, intensives, and bootcamps. Discover what's
            happening at Freedom Dance Studio and come dance with us!
          </p>
        </div>

        {/* ================= EVENTS GRID ================= */}

        <div className="grid gap-8 md:grid-cols-2">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`
                group
                card
                overflow-hidden
                border
                border-base-300
                bg-base-100
                shadow-xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
                animate-[fadeInUp_0.7s_ease-out_both]
                ${event.featured ? "ring-2 ring-primary/20" : ""}
              `}
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* ================= IMAGE ================= */}

              <figure className="relative aspect-[2/3] overflow-hidden bg-black">
                <img
                  src={event.image}
                  alt={event.title}
                  className={`
                    h-full
                    w-full
                    transition-transform
                    duration-700
                    ${
                      event.imageFit === "contain"
                        ? "object-contain"
                        : "object-cover"
                    }
                    group-hover:scale-[1.02]
                  `}
                />

                {/* DARK GRADIENT */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/20
                    to-transparent
                  "
                />

                {/* CATEGORY */}

                <div className="absolute left-5 top-5">
                  <span className="badge badge-primary gap-2 px-4 py-4 font-bold shadow-lg">
                    <Sparkles className="h-3.5 w-3.5" />
                    {event.type}
                  </span>
                </div>

                {/* FEATURED */}

                {event.featured && (
                  <div className="absolute right-5 top-5">
                    <span className="badge badge-warning px-4 py-3 font-bold shadow-lg">
                      FEATURED
                    </span>
                  </div>
                )}

                {/* IMAGE TITLE */}

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="text-2xl font-black md:text-3xl">
                    {event.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-white/80">
                    {event.instructor}
                  </p>
                </div>
              </figure>

              {/* ================= CARD BODY ================= */}

              <div className="card-body p-6 md:p-7">
                {/* DESCRIPTION */}

                <p className="leading-relaxed text-base-content/70">
                  {event.description}
                </p>

                {/* ================= ALL EVENT DETAILS ================= */}

                <div className="mt-6 space-y-4">
                  {/* CORE DETAILS */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {event.date && (
                      <div className="rounded-2xl bg-base-200 p-4">
                        <div className="flex items-start gap-3">
                          <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <div className="min-w-0">
                            <p className="text-xs font-bold uppercase tracking-wide text-base-content/40">
                              Date
                            </p>
                            <p className="mt-1 break-words text-sm font-bold">
                              {event.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {event.time && (
                      <div className="rounded-2xl bg-base-200 p-4">
                        <div className="flex items-start gap-3">
                          <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <div className="min-w-0">
                            <p className="text-xs font-bold uppercase tracking-wide text-base-content/40">
                              Time
                            </p>
                            <p className="mt-1 break-words text-sm font-bold">
                              {event.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {event.location && (
                      <div className="rounded-2xl bg-base-200 p-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <div className="min-w-0">
                            <p className="text-xs font-bold uppercase tracking-wide text-base-content/40">
                              Location
                            </p>
                            <p className="mt-1 break-words text-sm font-bold">
                              {event.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {event.instructor && (
                      <div className="rounded-2xl bg-base-200 p-4">
                        <div className="flex items-start gap-3">
                          <Users className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <div className="min-w-0">
                            <p className="text-xs font-bold uppercase tracking-wide text-base-content/40">
                              Instructor
                            </p>
                            <p className="mt-1 break-words text-sm font-bold">
                              {event.instructor}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {event.day && (
                      <div className="rounded-2xl bg-base-200 p-4">
                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-wide text-base-content/40">
                            Day
                          </p>
                          <p className="mt-1 break-words text-sm font-bold">
                            {event.day}
                          </p>
                        </div>
                      </div>
                    )}

                    {event.category && (
                      <div className="rounded-2xl bg-base-200 p-4">
                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-wide text-base-content/40">
                            Category
                          </p>
                          <p className="mt-1 break-words text-sm font-bold">
                            {event.category}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* SOCIAL / WORKSHOP DETAILS */}
                  {(event.workshop || event.social) && (
                    <div className="grid gap-4 md:grid-cols-2">
                      {event.workshop && (
                        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                          <div className="mb-4 flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-primary" />
                            <h4 className="text-lg font-black">
                              {event.workshop.title || "Workshop"}
                            </h4>
                          </div>

                          <div className="space-y-2 text-sm">
                            {event.workshop.instructor && (
                              <p>
                                <span className="font-bold">Instructor:</span>{" "}
                                {event.workshop.instructor}
                              </p>
                            )}

                            {event.workshop.time && (
                              <p>
                                <span className="font-bold">Time:</span>{" "}
                                {event.workshop.time}
                              </p>
                            )}

                            {event.workshop.earlyBird && (
                              <p>
                                <span className="font-bold">Early Bird:</span>{" "}
                                {event.workshop.earlyBird}
                              </p>
                            )}

                            {event.workshop.membersAndInstructors && (
                              <p>
                                <span className="font-bold">
                                  Members & Instructors:
                                </span>{" "}
                                {event.workshop.membersAndInstructors}
                              </p>
                            )}

                            {event.workshop.doorPrice && (
                              <p>
                                <span className="font-bold">At the Door:</span>{" "}
                                {event.workshop.doorPrice}
                              </p>
                            )}
                          </div>
                        </div>
                      )}

                      {event.social && (
                        <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-5">
                          <div className="mb-4 flex items-center gap-2">
                            <Music2 className="h-5 w-5 text-primary" />
                            <h4 className="text-lg font-black">
                              {event.social.title || "Social"}
                            </h4>
                          </div>

                          <div className="space-y-2 text-sm">
                            {event.social.time && (
                              <p>
                                <span className="font-bold">Time:</span>{" "}
                                {event.social.time}
                              </p>
                            )}

                            {event.social.musicBy && (
                              <p>
                                <span className="font-bold">Music By:</span>{" "}
                                {event.social.musicBy}
                              </p>
                            )}

                            {event.social.admission && (
                              <p>
                                <span className="font-bold">Admission:</span>{" "}
                                {event.social.admission}
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* PRICE */}
                  {(event.price || event.priceDetails || event.extraPrice) && (
                    <div className="rounded-2xl bg-base-200 p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-widest text-base-content/40">
                            Admission / Pricing
                          </p>

                          {event.price && (
                            <p className="mt-1 break-words text-2xl font-black text-primary">
                              {event.price}
                            </p>
                          )}

                          {event.priceDetails && (
                            <p className="mt-1 break-words text-sm text-base-content/60">
                              {event.priceDetails}
                            </p>
                          )}

                          {event.extraPrice && (
                            <p className="mt-1 break-words text-sm font-semibold">
                              {event.extraPrice}
                            </p>
                          )}
                        </div>

                        <div className="hidden h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/10 text-primary sm:grid">
                          {event.type === "SOCIAL" ? (
                            <Music2 className="h-6 w-6" />
                          ) : event.type === "BOOTCAMP" ? (
                            <Users className="h-6 w-6" />
                          ) : (
                            <Sparkles className="h-6 w-6" />
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CONTACT / SOCIAL LINKS */}
                  {(event.phone || event.instagram) && (
                    <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
                      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
                        Contact & Social
                      </p>

                      <div className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-5">
                        {event.phone && (
                          <a
                            href={`tel:${event.phone}`}
                            className="font-bold text-primary hover:underline"
                          >
                            📞 {event.phone}
                          </a>
                        )}

                        {event.instagram && (
                          <a
                            href={event.instagram}
                            target="_blank"
                            rel="noreferrer"
                            className="max-w-full break-all font-bold text-primary hover:underline"
                          >
                            Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* VIDEO */}
                  {event.video && (
                    <div className="overflow-hidden rounded-2xl border border-base-300">
                      <video
                        src={event.video}
                        controls
                        className="h-auto max-h-96 w-full bg-black object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* ================= REGISTER ================= */}

                <div className="card-actions mt-5">
                  <button
                    className="
                      btn
                      btn-primary
                      w-full
                      gap-2
                      text-base
                      font-bold
                      transition-all
                      duration-300
                      hover:scale-[1.02]
                      hover:shadow-lg
                    "
                    onClick={() => handleEvents(event.id)}
                  >
                    {event.button}

                    <ArrowRight
                      className="
                        h-5
                        w-5
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= COMMUNITY CTA ================= */}

        <div
          className="
            mt-16
            overflow-hidden
            rounded-3xl
            bg-primary
            p-8
            text-primary-content
            shadow-2xl
            md:p-12
          "
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <div className="mb-3 flex items-center justify-center gap-2 md:justify-start">
                <Sparkles className="h-5 w-5" />

                <span className="font-bold uppercase tracking-wider">
                  Join the Freedom Dance Community
                </span>
              </div>

              <h3 className="text-3xl font-black md:text-4xl">
                Dance more. Learn more. Connect more.
              </h3>

              <p className="mt-3 max-w-2xl text-primary-content/80">
                From weekly socials to workshops, bootcamps, and weekend
                intensives — there's always something happening at Freedom Dance
                Studio.
              </p>
            </div>

            <Link
              to="/contact"
              className="
                btn
                btn-lg
                border-0
                bg-white
                text-primary
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white
              "
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
