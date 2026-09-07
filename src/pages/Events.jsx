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

import { events } from "../data/eventsData";

const Events = () => {
  const navigate = useNavigate();

  const handleEvents = (id) => {
    const findEvent = events.find((event) => event.id === id);

    if (!findEvent) return;

    navigate("/book", {
      state: findEvent,
    });
  };

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-base-100 py-20 md:py-28"
    >
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HEADER */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex animate-pulse items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
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

        {/* EVENTS */}

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
              {/* IMAGE */}

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

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* TYPE */}

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

                {/* TITLE */}

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="text-2xl font-black md:text-3xl">
                    {event.title}
                  </h3>

                  {event.instructor && (
                    <p className="mt-1 text-sm font-medium text-white/80">
                      {event.instructor}
                    </p>
                  )}
                </div>
              </figure>

              {/* BODY */}

              <div className="card-body p-6 md:p-7">
                {event.description && (
                  <p className="leading-relaxed text-base-content/70">
                    {event.description}
                  </p>
                )}

                <div className="mt-6 space-y-4">
                  {/* MAIN INFORMATION */}

                  <div className="grid gap-3 sm:grid-cols-2">
                    {event.date && (
                      <div className="rounded-2xl bg-base-200 p-4">
                        <div className="flex items-start gap-3">
                          <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-base-content/40">
                              Date
                            </p>

                            <p className="mt-1 text-sm font-bold">
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

                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-base-content/40">
                              Time
                            </p>

                            <p className="mt-1 text-sm font-bold">
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

                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-base-content/40">
                              Location
                            </p>

                            <p className="mt-1 text-sm font-bold">
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

                          <div>
                            <p className="text-xs font-bold uppercase tracking-wide text-base-content/40">
                              Instructor
                            </p>

                            <p className="mt-1 text-sm font-bold">
                              {event.instructor}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* WORKSHOP */}

                  {event.workshop && (
                    <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                      <div className="mb-4 flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary" />

                        <h4 className="text-lg font-black">
                          {event.workshop.title}
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

                  {/* SOCIAL */}

                  {event.social && (
                    <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-5">
                      <div className="mb-4 flex items-center gap-2">
                        <Music2 className="h-5 w-5 text-primary" />

                        <h4 className="text-lg font-black">
                          {event.social.title}
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

                  {/* PRICE */}

                  {event.price && (
                    <div className="rounded-2xl bg-base-200 p-5">
                      <p className="text-xs font-bold uppercase tracking-widest text-base-content/40">
                        Admission / Pricing
                      </p>

                      <p className="mt-1 text-2xl font-black text-primary">
                        {event.price}
                      </p>

                      {event.priceDetails && (
                        <p className="mt-1 text-sm text-base-content/60">
                          {event.priceDetails}
                        </p>
                      )}
                    </div>
                  )}

                  {/* CONTACT */}

                  {(event.phone || event.instagram) && (
                    <div className="rounded-2xl border border-base-300 p-5">
                      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-base-content/40">
                        Contact & Social
                      </p>

                      <div className="flex flex-wrap gap-4">
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
                            className="font-bold text-primary hover:underline"
                          >
                            Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* REGISTER */}

                <div className="card-actions mt-5">
                  <button
                    className="btn btn-primary w-full gap-2 text-base font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    onClick={() => handleEvents(event.id)}
                  >
                    {event.button || "Register Now"}

                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-16 overflow-hidden rounded-3xl bg-primary p-8 text-primary-content shadow-2xl md:p-12">
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
              className="btn btn-lg border-0 bg-white text-primary shadow-xl hover:bg-white"
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
