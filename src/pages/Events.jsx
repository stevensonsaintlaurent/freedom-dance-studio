import {
  ArrowRight,
  CalendarDays,
  Clock3,
  MapPin,
  Music2,
  Sparkles,
  Users,
} from "lucide-react";

import lady from "../assets/lady/sandra.jpg";
import social from "../assets/sbkParty/FJ8A6384.jpg";
import workshop from "../assets/konpaClip.jpeg";
import havasu from "../assets/havasu.png";
import { Link, useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    type: "WORKSHOP",
    title: "Salsa On2 Ladies Styling",
    instructor: "with Instructor Sandra",
    date: "August 22, 2026",
    time: "2:00 PM – 4:00 PM",
    location: "Freedom Dance Studio",
    price: "FREE",
    priceDetails: "Members & Instructors",
    extraPrice: "$25 Non-Members",
    image: lady,
    description:
      "Ready to level up your Salsa On2? Join Instructor Sandra for an exciting ladies’ styling workshop designed to bring out your confidence, musicality, and personal style. Explore Mambo footwork, fusion, styling, choreography, and performance quality while building stronger foundations and learning how to truly express yourself on the dance floor. Come ready to move, learn, and shine!",
    button: "Register Now",
    featured: true,
  },

  {
    id: 2,
    type: "SOCIAL",
    title: "Freedom Dance Social",
    instructor: "Salsa • Bachata • More",
    date: "August 14, 2026",
    time: "10:30 PM – 2:00 AM",
    location: "Freedom Dance Studio",
    price: "$20",
    priceDetails: "Admission",
    image: social,
    description:
      "Come dance, connect, meet new people, and enjoy a great night with the Freedom Dance community.",
    button: "Get Your Ticket",
  },

  {
    id: 3,
    type: "WEEKEND INTENSIVE",
    title: "Bachata Weekend Intensive",
    instructor: "Training • Technique • Musicality",
    date: "August 14–16, 2026",
    time: "Full Weekend",
    location: "Freedom Dance Studio",
    price: "$129",
    priceDetails: "Weekend Pass",
    image: workshop,
    description:
      "A complete Bachata weekend designed to help you improve your technique, musicality, connection, body movement, and confidence.",
    button: "Register Now",
    featured: true,
  },

  {
    id: 4,
    type: "TRIP",
    title: "SBK Lake Havasu Trip",
    instructor: "Teachers & Students",
    date: "August 28–30, 2026",
    time: "Friday–Sunday",
    location: "Lake Havasu City, Arizona",
    image: havasu,
    description:
      "Join our Freedom Dance Studio family for an unforgettable Bachata weekend in Lake Havasu! Teachers and students will come together for dancing, social nights, beach time, music, connection, and unforgettable memories by the lake.",
    button: "Join the Trip",
  },
];

const Events = () => {
  const navigate = useNavigate();
  const handleEvents = (id) => {
    const findEvent = events.find((event) => event.id === id);
    navigate("/book", { state: findEvent });
    console.log("event");
  };
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-base-100 py-20 md:py-28"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-primary/10
              px-4
              py-2
              text-sm
              font-bold
              text-primary
              animate-pulse
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
              <figure className="relative h-72 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* DARK GRADIENT */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/30
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

                {/* ================= DETAILS ================= */}
                <div className="mt-5 space-y-3">
                  {/* DATE */}
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <CalendarDays className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-base-content/40">
                        Date
                      </p>

                      <p className="text-sm font-bold">{event.date}</p>
                    </div>
                  </div>

                  {/* TIME */}
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Clock3 className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-base-content/40">
                        Time
                      </p>

                      <p className="text-sm font-bold">{event.time}</p>
                    </div>
                  </div>

                  {/* LOCATION */}
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-base-content/40">
                        Location
                      </p>

                      <p className="text-sm font-bold">{event.location}</p>
                    </div>
                  </div>
                </div>

                {/* ================= PRICE BOX ================= */}
                <div className="mt-6 rounded-2xl bg-base-200 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-base-content/40">
                        Admission
                      </p>

                      <p className="mt-1 text-2xl font-black text-primary">
                        {event.price}
                      </p>

                      <p className="text-sm text-base-content/60">
                        {event.priceDetails}
                      </p>

                      {event.extraPrice && (
                        <p className="mt-1 text-sm font-semibold">
                          {event.extraPrice}
                        </p>
                      )}
                    </div>

                    <div className="hidden h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary sm:grid">
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
