import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Sparkles,
  Users,
  PartyPopper,
  ShieldCheck,
  Info,
} from "lucide-react";
import { Link } from "react-router-dom";

const weekdayRates = [
  { time: "9:00 AM – 12:00 PM", price: 20, label: "Morning" },
  { time: "12:00 PM – 6:00 PM", price: 30, label: "Afternoon" },
  { time: "6:00 PM – 9:00 PM", price: 50, label: "Evening" },
];

const weekendRates = [
  { time: "9:00 AM – 12:00 PM", price: 30, label: "Morning" },
  { time: "12:00 PM – 6:00 PM", price: 40, label: "Afternoon" },
  { time: "6:00 PM – 9:00 PM", price: 70, label: "Evening" },
];

const uses = [
  "Private classes",
  "Group classes",
  "Partner work",
  "Rehearsals & practice",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const RateRow = ({ item, featured = false }) => (
  <motion.div
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
    className={`group flex items-center justify-between gap-4 rounded-2xl border px-4 py-4 transition-all duration-300 sm:px-5 ${
      featured
        ? "border-primary/20 bg-primary/5 hover:border-primary/40 hover:bg-primary/10"
        : "border-base-content/10 bg-base-100/70 hover:border-primary/20 hover:bg-base-100"
    }`}
  >
    <div className="flex min-w-0 items-center gap-3">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          featured
            ? "bg-primary/15 text-primary"
            : "bg-base-200 text-base-content/60"
        }`}
      >
        <Clock3 size={18} />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-base-content sm:text-[15px]">
          {item.time}
        </p>
        <p className="mt-0.5 text-xs text-base-content/45">
          {item.label} rental
        </p>
      </div>
    </div>

    <div className="shrink-0 text-right">
      <span className="text-xl font-black tracking-tight text-base-content sm:text-2xl">
        ${item.price}
      </span>
      <span className="ml-1 text-xs font-medium text-base-content/45">/hr</span>
    </div>
  </motion.div>
);

const RateCard = ({ title, subtitle, rates, weekend = false }) => (
  <motion.div
    variants={fadeUp}
    className="group relative overflow-hidden rounded-[2rem] border border-base-content/10 bg-base-100/90 p-5 shadow-xl shadow-black/5 backdrop-blur-xl sm:p-7"
  >
    <div
      className={`absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
        weekend ? "bg-secondary/15" : "bg-primary/15"
      } opacity-60`}
    />

    <div className="relative">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span
              className={`badge badge-sm font-bold uppercase tracking-wider ${
                weekend ? "badge-secondary" : "badge-primary"
              }`}
            >
              {weekend ? "Sat & Sun" : "Mon – Fri"}
            </span>
          </div>
          <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
            {title}
          </h3>
          <p className="mt-1 text-sm text-base-content/55">{subtitle}</p>
        </div>

        <div
          className={`hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl sm:flex ${
            weekend
              ? "bg-secondary/10 text-secondary"
              : "bg-primary/10 text-primary"
          }`}
        >
          <CalendarDays size={22} />
        </div>
      </div>

      <div className="space-y-2.5">
        {rates.map((item) => (
          <RateRow
            key={item.time}
            item={item}
            featured={item.label === "Evening"}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

const StudioRentalPricing = () => {
  return (
    <section className="relative overflow-hidden bg-base-200 py-20 sm:py-24 lg:py-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.08, 0.14, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.06, 0.12, 0.06] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-secondary blur-[120px]"
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-primary" />
            <span className="badge badge-outline border-primary/30 px-3 py-3 font-bold uppercase tracking-[0.18em] text-primary">
              Studio Rental
            </span>
            <span className="h-px w-10 bg-primary" />
          </div>

          <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Your Space.
            <span className="block text-primary">Your Freedom.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-base-content/60 sm:text-base sm:leading-7">
            Professional studio space for private lessons, group classes,
            partner work, rehearsals, parties, socials, weddings, and special
            events.
          </p>
        </motion.div>

        {/* Main pricing cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          <RateCard
            title="Weekdays"
            subtitle="Private class, group class, or partner work"
            rates={weekdayRates}
          />
          <RateCard
            title="Weekends"
            subtitle="Private class, group class, or partner work"
            rates={weekendRates}
            weekend
          />
        </motion.div>

        {/* Event package */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mt-6"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-base-100 shadow-2xl shadow-primary/5">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

            <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-content shadow-lg shadow-primary/20">
                    <PartyPopper size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-primary">
                      Special Events
                    </span>
                    <h3 className="text-2xl font-black sm:text-3xl">
                      Events, Weddings, Parties & Socials
                    </h3>
                  </div>
                </div>

                <p className="max-w-2xl text-sm leading-6 text-base-content/60 sm:text-base">
                  Planning a larger celebration or special event? Our event
                  rental rate is designed for parties of 25 or more guests and
                  includes a dedicated cleaning fee.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Weddings", "Parties", "Socials", "Special Events"].map(
                    (item) => (
                      <span
                        key={item}
                        className="badge badge-lg border-base-content/10 bg-base-200/70"
                      >
                        <CheckCircle2
                          size={14}
                          className="mr-1.5 text-primary"
                        />
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="flex flex-col justify-center border-t border-base-content/10 bg-base-200/40 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-primary/15 bg-base-100 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-base-content/45">
                      Rental
                    </p>
                    <p className="mt-1 text-3xl font-black text-primary">
                      $120
                    </p>
                    <p className="text-xs text-base-content/45">per hour</p>
                  </div>

                  <div className="rounded-2xl border border-base-content/10 bg-base-100 p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-base-content/45">
                      Cleaning
                    </p>
                    <p className="mt-1 text-3xl font-black">$120</p>
                    <p className="text-xs text-base-content/45">fee</p>
                  </div>
                </div>

                <div className="alert mt-3 border border-warning/20 bg-warning/10 text-sm">
                  <Info size={18} className="shrink-0 text-warning" />
                  <span>
                    For parties of 25+, private/group/partner-work rental
                    increases to $120/hr.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Conditions */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="rounded-[2rem] border border-base-content/10 bg-base-100 p-6 shadow-xl shadow-black/5 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <ShieldCheck size={21} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">
                  Rental Terms
                </p>
                <h3 className="text-xl font-black">Before You Book</h3>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex gap-3">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-primary"
                  size={18}
                />
                <p className="text-sm leading-6 text-base-content/65">
                  A{" "}
                  <strong className="text-base-content">
                    50% non-refundable down payment
                  </strong>{" "}
                  is due at the time of rental.
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-primary"
                  size={18}
                />
                <p className="text-sm leading-6 text-base-content/65">
                  The remaining balance is due according to your rental
                  agreement.
                </p>
              </div>
              <div className="flex gap-3">
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-primary"
                  size={18}
                />
                <p className="text-sm leading-6 text-base-content/65">
                  Event pricing applies automatically for private, group, or
                  partner-work rentals with parties of 25 or more.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-neutral p-6 text-neutral-content shadow-xl sm:p-8">
            <motion.div
              animate={{ rotate: [0, 6, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl"
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-primary">
                  <Users size={21} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-primary">
                    Perfect For
                  </p>
                  <h3 className="text-xl font-black">Make the Studio Yours</h3>
                </div>
              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {uses.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/80"
                  >
                    <CheckCircle2 size={16} className="shrink-0 text-primary" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/rentalStudio"
                  className="btn btn-primary rounded-full px-7 shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Book the Studio
                  <ArrowRight size={17} />
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-ghost rounded-full border border-white/15 text-white hover:bg-white/10 hover:text-white"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-base-content/10 bg-base-100/70 p-4 text-xs leading-5 text-base-content/55 shadow-sm backdrop-blur-xl"
        >
          <Sparkles size={16} className="mt-0.5 shrink-0 text-primary" />
          <p>
            Prices shown are based on the provided studio rental price list.
            Contact Freedom Dance Studio for availability and to confirm your
            rental details before payment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StudioRentalPricing;
