import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  User,
  Users,
  X,
} from "lucide-react";
import useOnSudmit from "../hooks/useOnSudmit";
import { useFormAction, useSubmit } from "react-router-dom";

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

const LARGE_GROUP_RATE = 120;
const LARGE_GROUP_MIN = 25;

export default function RentalBooking() {
  const { onSubmit } = useOnSudmit();

  const [day, setDay] = useState("weekday");
  const [time, setTime] = useState(1);
  const [hours, setHours] = useState(2);
  const [guests, setGuests] = useState("");
  const [showRequest, setShowRequest] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  });

  const selected = rates[day][time];
  const guestCount = Number(guests) || 0;

  // 25 guests or more = $120/hour
  const isLargeGroup = guestCount >= LARGE_GROUP_MIN;

  const hourlyRate = isLargeGroup ? LARGE_GROUP_RATE : selected.rate;

  const estimate = useMemo(() => hourlyRate * hours, [hourlyRate, hours]);

  const handleDayChange = (newDay) => {
    setDay(newDay);

    setTime((currentTime) => Math.min(currentTime, rates[newDay].length - 1));
  };

  const handleGuestsChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setGuests("");
      return;
    }

    setGuests(Math.max(1, Number(value) || 1));
  };

  const handleHoursChange = (e) => {
    const value = Number(e.target.value) || 1;

    setHours(Math.max(1, Math.min(12, value)));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const openRequest = () => {
    setShowRequest(true);
    document.body.style.overflow = "hidden";
  };

  const closeRequest = () => {
    setShowRequest(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      {/* RENTAL BOOKING */}
      <section
        id="booking"
        className="relative overflow-hidden bg-neutral py-20 text-neutral-content sm:py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT SIDE */}
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
                <a
                  href="/contact"
                  className="btn btn-primary rounded-full px-7"
                >
                  <MessageCircle size={17} />
                  Contact Us
                </a>

                <a
                  href="mailto:info@vegasfreedomdancestudio.com"
                  className="btn rounded-full border-white/15 bg-white/10 text-white hover:bg-white/15"
                >
                  <Mail size={17} />
                  Email Us
                </a>
              </div>
            </div>

            {/* BOOKING CARD */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl sm:p-7"
            >
              {/* DAY */}
              <div className="grid grid-cols-2 gap-2 rounded-2xl bg-black/20 p-2">
                <button
                  type="button"
                  onClick={() => handleDayChange("weekday")}
                  className={`btn rounded-xl border-0 transition-all duration-300 ${
                    day === "weekday"
                      ? "btn-primary shadow-lg shadow-primary/20"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Weekday
                </button>

                <button
                  type="button"
                  onClick={() => handleDayChange("weekend")}
                  className={`btn rounded-xl border-0 transition-all duration-300 ${
                    day === "weekend"
                      ? "btn-primary shadow-lg shadow-primary/20"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Weekend
                </button>
              </div>

              {/* FORM OPTIONS */}
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {/* TIME */}
                <label className="form-control">
                  <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                    Time
                  </span>

                  <select
                    value={time}
                    onChange={(e) => setTime(Number(e.target.value))}
                    className="select select-bordered w-full rounded-xl border-white/10 bg-white/10 text-white outline-none transition-all duration-300 hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    {rates[day].map((item, index) => (
                      <option
                        key={item.label}
                        value={index}
                        className="bg-neutral text-white"
                      >
                        {item.label} • ${item.rate}/hr
                      </option>
                    ))}
                  </select>
                </label>

                {/* HOURS */}
                <label className="form-control">
                  <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                    Hours
                  </span>

                  <input
                    type="number"
                    min="1"
                    max="12"
                    value={hours}
                    onChange={handleHoursChange}
                    className="input input-bordered rounded-xl border-white/10 bg-white/10 text-white outline-none transition-all duration-300 hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </label>

                {/* GUESTS */}
                <label className="form-control sm:col-span-2">
                  <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                    Estimated guests
                  </span>

                  <input
                    type="number"
                    min="1"
                    value={guests}
                    onChange={handleGuestsChange}
                    placeholder="How many people?"
                    className="input input-bordered rounded-xl border-white/10 bg-white/10 text-white placeholder:text-white/25 outline-none transition-all duration-300 hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />

                  {isLargeGroup && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 flex items-center gap-2 text-xs font-semibold text-primary"
                    >
                      <CheckCircle2 size={15} />
                      Groups of 25 guests or more:
                      <span className="font-black">$120/hour</span>
                    </motion.div>
                  )}
                </label>
              </div>

              {/* ESTIMATE */}
              <motion.div
                key={`${day}-${time}-${hours}-${guestCount}`}
                initial={{ opacity: 0.6, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="mt-6 rounded-2xl bg-primary p-6 text-primary-content"
              >
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] opacity-70">
                      Estimated rental
                    </p>

                    <p className="mt-1 text-4xl font-black">${estimate}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs opacity-70">
                      ${hourlyRate}/hr × {hours} hours
                    </p>

                    {isLargeGroup && (
                      <p className="mt-1 text-[10px] font-bold uppercase tracking-wider opacity-60">
                        Large group rate applied
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* BUTTONS */}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={openRequest}
                  className="btn btn-primary rounded-xl"
                >
                  Request Availability
                  <ArrowRight size={17} />
                </button>

                <a
                  href="/contact"
                  className="btn rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10"
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

      {/* REQUEST AVAILABILITY MODAL */}
      <AnimatePresence>
        {showRequest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          >
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeRequest}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* MODAL */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-neutral shadow-2xl"
            >
              {/* HEADER */}
              <div className="sticky top-0 z-20 border-b border-white/10 bg-neutral/95 p-5 backdrop-blur-xl sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-primary">
                      <Sparkles size={13} />
                      Rental Request
                    </div>

                    <h3 className="text-2xl font-black text-white sm:text-3xl">
                      Request Studio Availability
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/50">
                      Tell us about your rental and we'll get back to you to
                      confirm availability.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closeRequest}
                    className="btn btn-circle btn-sm border-white/10 bg-white/5 text-white hover:bg-white/10"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* BODY */}
              <div className="p-5 sm:p-7">
                {/* RENTAL SUMMARY */}
                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">
                    <CheckCircle2 size={15} />
                    Your Rental Selection
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
                        Day
                      </p>

                      <p className="mt-1 font-bold text-white">
                        {day === "weekday" ? "Weekday" : "Weekend"}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
                        Time
                      </p>

                      <p className="mt-1 font-bold text-white">
                        {selected.label}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
                        Guests
                      </p>

                      <p className="mt-1 font-bold text-white">
                        {guestCount || "Not specified"}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
                        Estimate
                      </p>

                      <p className="mt-1 font-black text-primary">
                        ${estimate}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-primary/10 pt-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/40">Hourly rate</span>

                      <span className="font-black text-primary">
                        ${hourlyRate}/hour
                      </span>
                    </div>

                    {isLargeGroup && (
                      <p className="mt-1 text-[10px] text-white/40">
                        25+ guest rate applied
                      </p>
                    )}
                  </div>
                </div>

                {/* FORM */}
                <form onSubmit={onSubmit} className="mt-7 space-y-5">
                  {/* RENTAL DATA SENT TO WEB3FORMS */}
                  <input
                    type="hidden"
                    name="rentalDay"
                    value={day === "weekday" ? "Weekday" : "Weekend"}
                  />

                  <input
                    type="hidden"
                    name="rentalTime"
                    value={selected.label}
                  />

                  <input type="hidden" name="hours" value={hours} />

                  <input type="hidden" name="guests" value={guestCount} />

                  <input type="hidden" name="hourlyRate" value={hourlyRate} />

                  <input type="hidden" name="estimatedTotal" value={estimate} />

                  <input
                    type="hidden"
                    name="rentalType"
                    value="Studio Rental"
                  />

                  {/* NAME + PHONE */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="form-control">
                      <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                        Your Name
                      </span>

                      <div className="relative">
                        <User
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                        />

                        <input
                          required
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleFormChange}
                          placeholder="Your full name"
                          className="input input-bordered w-full rounded-xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-white/25 focus:border-primary focus:outline-none"
                        />
                      </div>
                    </label>

                    <label className="form-control">
                      <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                        Phone
                      </span>

                      <div className="relative">
                        <Phone
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                        />

                        <input
                          required
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleFormChange}
                          placeholder="(702) 000-0000"
                          className="input input-bordered w-full rounded-xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-white/25 focus:border-primary focus:outline-none"
                        />
                      </div>
                    </label>
                  </div>

                  {/* EMAIL + EVENT TYPE */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="form-control">
                      <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                        Email
                      </span>

                      <div className="relative">
                        <Mail
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                        />

                        <input
                          required
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleFormChange}
                          placeholder="you@example.com"
                          className="input input-bordered w-full rounded-xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-white/25 focus:border-primary focus:outline-none"
                        />
                      </div>
                    </label>

                    <label className="form-control">
                      <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                        Event Type
                      </span>

                      <select
                        required
                        name="eventType"
                        value={form.eventType}
                        onChange={handleFormChange}
                        className="select select-bordered w-full rounded-xl border-white/10 bg-white/5 text-white focus:border-primary focus:outline-none"
                      >
                        <option value="" disabled className="bg-neutral">
                          Select event type
                        </option>

                        <option
                          value="Private Event"
                          className="bg-neutral text-white"
                        >
                          Private Event
                        </option>

                        <option
                          value="Dance Class"
                          className="bg-neutral text-white"
                        >
                          Dance Class
                        </option>

                        <option
                          value="Workshop"
                          className="bg-neutral text-white"
                        >
                          Workshop
                        </option>

                        <option
                          value="Rehearsal"
                          className="bg-neutral text-white"
                        >
                          Rehearsal
                        </option>

                        <option
                          value="Photo / Video"
                          className="bg-neutral text-white"
                        >
                          Photo / Video
                        </option>

                        <option value="Other" className="bg-neutral text-white">
                          Other
                        </option>
                      </select>
                    </label>
                  </div>

                  {/* DATE */}
                  <label className="form-control">
                    <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                      Requested Date
                    </span>

                    <input
                      required
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleFormChange}
                      className="input input-bordered w-full rounded-xl border-white/10 bg-white/5 text-white focus:border-primary focus:outline-none"
                    />
                  </label>

                  {/* SPECIAL REQUEST */}
                  <label className="form-control">
                    <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                      Special Request / Additional Details
                    </span>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleFormChange}
                      rows="4"
                      placeholder="Tell us about your event, setup needs, equipment, special requests, etc."
                      className="textarea textarea-bordered w-full resize-none rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/25 focus:border-primary focus:outline-none"
                    />
                  </label>

                  {/* FINAL PRICE */}
                  <div className="rounded-2xl bg-white/5 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-wider text-white/40">
                          Estimated Total
                        </p>

                        <p className="mt-1 text-3xl font-black text-primary">
                          ${estimate}
                        </p>
                      </div>

                      <div className="text-right text-xs text-white/40">
                        <p>${hourlyRate}/hour</p>

                        <p>
                          {hours} hour
                          {hours !== 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-full rounded-xl shadow-lg shadow-primary/20"
                  >
                    <Send size={18} />
                    Send Rental Request
                  </button>

                  <p className="text-center text-xs leading-5 text-white/30">
                    Sending this request does not guarantee your reservation.
                    Freedom Dance Studio will contact you to confirm
                    availability and final pricing.
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
