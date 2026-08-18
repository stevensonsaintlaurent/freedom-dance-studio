import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Mail,
  MessageCircle,
  Users,
} from "lucide-react";

const rates = {
  weekday: [
    { label: "9:00 AM – 12:00 PM", rate: 20 },
    { label: "12:00 PM – 6:00 PM", rate: 30 },
    { label: "6:00 PM – 9:00 PM", rate: 50 },
  ],
  weekend: [
    { label: "9:00 AM – 12:00 PM", rate: 30 },
    { label: "12:00 PM – 6:00 PM", rate: 40 },
    { label: "6:00 PM – 9:00 PM", rate: 70 },
  ],
};

export default function RentalBooking() {
  const [day, setDay] = useState("weekday");
  const [time, setTime] = useState(1);
  const [hours, setHours] = useState(2);
  const [guests, setGuests] = useState("");

  const selected = rates[day][time];
  const estimate = useMemo(() => selected.rate * hours, [selected.rate, hours]);

  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-neutral py-20 text-neutral-content sm:py-24 lg:py-28"
    >
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
              Ready to book?
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Let’s plan your
              <span className="block text-primary">rental.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
              Choose the day and time that fits your needs, get a quick
              estimate, then send us your request. We’ll confirm availability
              with you.
            </p>

            <div className="mt-8 space-y-3 text-sm text-white/75">
              <div className="flex items-center gap-3">
                <CalendarDays size={18} className="text-primary" />
                Weekday & weekend options
              </div>
              <div className="flex items-center gap-3">
                <Clock3 size={18} className="text-primary" />
                Flexible hourly rentals
              </div>
              <div className="flex items-center gap-3">
                <Users size={18} className="text-primary" />
                Classes, rehearsals and events
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/contact" className="btn btn-primary rounded-full px-7">
                <MessageCircle size={17} />
                Contact Us
              </a>
              <a
                href="mailto:info@vegasfreedomdancestudio.com"
                className="btn rounded-full border-white/15 bg-white/10 text-white"
              >
                <Mail size={17} />
                Email Us
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl sm:p-7"
          >
            <div className="grid grid-cols-2 gap-2 rounded-2xl bg-black/20 p-2">
              <button
                onClick={() => setDay("weekday")}
                className={`btn rounded-xl border-0 ${day === "weekday" ? "btn-primary" : "bg-white/5 text-white"}`}
              >
                Weekday
              </button>
              <button
                onClick={() => setDay("weekend")}
                className={`btn rounded-xl border-0 ${day === "weekend" ? "btn-primary" : "bg-white/5 text-white"}`}
              >
                Weekend
              </button>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <label className="form-control">
                <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                  Time
                </span>
                <select
                  value={time}
                  onChange={(e) => setTime(Number(e.target.value))}
                  className="select select-bordered rounded-xl border-white/10 bg-white/5 text-white"
                >
                  {rates[day].map((item, index) => (
                    <option
                      key={item.label}
                      value={index}
                      className="text-black"
                    >
                      {item.label} • ${item.rate}/hr
                    </option>
                  ))}
                </select>
              </label>

              <label className="form-control">
                <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                  Hours
                </span>
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={hours}
                  onChange={(e) =>
                    setHours(
                      Math.max(1, Math.min(12, Number(e.target.value) || 1)),
                    )
                  }
                  className="input input-bordered rounded-xl border-white/10 bg-white/5 text-white"
                />
              </label>

              <label className="form-control sm:col-span-2">
                <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                  Estimated guests
                </span>
                <input
                  type="number"
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  placeholder="How many people?"
                  className="input input-bordered rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/25"
                />
              </label>
            </div>

            <div className="mt-6 rounded-2xl bg-primary p-6 text-primary-content">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] opacity-70">
                    Estimated rental
                  </p>
                  <p className="mt-1 text-4xl font-black">${estimate}</p>
                </div>
                <p className="text-right text-xs opacity-70">
                  ${selected.rate}/hr × {hours} hours
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a href="/contact" className="btn btn-primary rounded-xl">
                Request Availability
                <ArrowRight size={17} />
              </a>
              <a
                href="/contact"
                className="btn rounded-xl border-white/10 bg-white/5 text-white"
              >
                Ask a Question
              </a>
            </div>

            <p className="mt-4 text-center text-xs leading-5 text-white/35">
              Estimates do not confirm availability. Events, parties and large
              groups may have different rates and fees.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
