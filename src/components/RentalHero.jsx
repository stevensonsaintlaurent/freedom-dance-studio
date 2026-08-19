import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import heroImage from "../assets/rehearsal.jpeg";

const highlights = [
  "Dance classes & private lessons",
  "Workshops & rehearsals",
  "Parties, socials & celebrations",
];

export default function RentalHero() {
  return (
    <section className="relative isolate min-h-[78svh] overflow-hidden bg-neutral text-neutral-content">
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="Freedom Dance Studio"
          className="h-full w-full object-cover object-center"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-neutral/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral via-neutral/80 to-neutral/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral via-transparent to-neutral/30" />
      </div>

      <motion.div
        className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] backdrop-blur-xl"
          >
            <Sparkles size={14} className="text-primary" />
            Freedom Dance Studio • Las Vegas
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl"
          >
            Your Space.
            <span className="block text-primary">Your Event.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg"
          >
            A professional, flexible dance studio for classes, private lessons,
            workshops, rehearsals, celebrations, parties and special events.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-7 grid gap-2 text-sm text-white/80 sm:grid-cols-3"
          >
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#booking" className="btn btn-primary rounded-full px-7">
              Check Availability
              <ArrowRight size={17} />
            </a>

            <a
              href="#pricing"
              className="btn rounded-full border-white/20 bg-white/10 px-7 text-white backdrop-blur-xl"
            >
              View Rental Prices
              <CalendarDays size={17} />
            </a>

            <Link
              to="/contact"
              className="btn rounded-full border-white/20 bg-transparent px-7 text-white"
            >
              <MessageCircle size={17} />
              Contact Us
            </Link>
          </motion.div>

          <motion.a
            href="#pricing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white/45 transition-colors hover:text-white"
          >
            Explore rental options
            <ArrowDown size={14} className="animate-bounce" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
