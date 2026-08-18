import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Camera,
  CheckCircle2,
  Maximize2,
  Sparkles,
} from "lucide-react";

import rehearsal from "../assets/rehearsal.jpeg";
import mainStudio from "../assets/rent/main.jpg";
import smallStudio from "../assets/rent/small.jpg";
import studioView from "../assets/rent/main5.jpg";

const gallery = [
  {
    image: rehearsal,
    title: "Freedom Dance Studio",
    subtitle: "Your Event Starts Here",
    description:
      "A professional, welcoming space designed for classes, rehearsals, workshops and private events.",
    label: "Studio Interior",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    image: mainStudio,
    title: "Main Studio",
    subtitle: "720 SQ. FT.",
    description:
      "Spacious open floor space for classes, rehearsals, workshops and events.",
    label: "720 SQ. FT.",
    span: "",
  },
  {
    image: smallStudio,
    title: "Studio Space",
    subtitle: "639 SQ. FT.",
    description:
      "A flexible space for smaller classes, rehearsals and private gatherings.",
    label: "639 SQ. FT.",
    span: "",
  },
  {
    image: studioView,
    title: "Flexible Setup",
    subtitle: "Made For Your Vision",
    description:
      "Configure the space around your class, workshop, rehearsal or event.",
    label: "Event Ready",
    span: "md:col-span-2",
  },
];

const features = [
  "Flexible studio layouts",
  "Perfect for classes & workshops",
  "Private events & rehearsals",
  "Professional dance environment",
];

export default function RentalGallery() {
  return (
    <section className="relative overflow-hidden bg-base-200 py-20 sm:py-24 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <Camera size={14} />
              Inside Freedom Dance Studio
            </div>

            <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              See the space.
              <span className="block text-primary">
                Imagine your event here.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-base-content/60 sm:text-lg">
              Take a look at the actual studio spaces available for rent.
              Whether you're teaching a class, hosting a workshop, rehearsing or
              planning a private event, Freedom gives you the room to make it
              happen.
            </p>
          </div>

          <div className="hidden items-center gap-3 rounded-2xl border border-base-300 bg-base-100 px-5 py-4 shadow-sm lg:flex">
            <div className="rounded-xl bg-primary/10 p-2 text-primary">
              <Sparkles size={18} />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-widest text-base-content/40">
                Available
              </p>
              <p className="font-bold">Studio Rental</p>
            </div>
          </div>
        </motion.div>

        {/* GALLERY */}
        <div className="mt-10 grid auto-rows-[230px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[220px] md:grid-cols-4 lg:mt-14">
          {gallery.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              whileHover={{
                y: -6,
              }}
              className={`group relative overflow-hidden rounded-[1.75rem] bg-neutral shadow-xl ${item.span}`}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={`${item.title} - ${item.subtitle}`}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              {/* TOP BADGE */}
              <div className="absolute left-5 top-5">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-white backdrop-blur-xl">
                  <Building2 size={12} />
                  {item.label}
                </div>
              </div>

              {/* VIEW ICON */}
              <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-xl transition-all duration-300 group-hover:rotate-45 group-hover:bg-primary group-hover:text-primary-content">
                <ArrowUpRight size={18} />
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">
                  {item.subtitle}
                </p>

                <h3 className="mt-1 text-2xl font-black text-white sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-white/70">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM INFORMATION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 grid gap-5 lg:grid-cols-[1fr_auto]"
        >
          {/* FEATURES */}
          <div className="rounded-[1.75rem] border border-base-300 bg-base-100 p-6 shadow-lg sm:p-7">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-primary">
                  Built For Your Event
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  A space that works for you.
                </h3>
              </div>

              <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:flex">
                <Maximize2 size={22} />
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-xl bg-base-200 px-4 py-3"
                >
                  <CheckCircle2 size={17} className="shrink-0 text-primary" />

                  <span className="text-sm font-semibold text-base-content/75">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RENTAL CTA */}
          <motion.a
            href="/rentalStudio"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group flex min-h-full min-w-[250px] flex-col justify-between rounded-[1.75rem] bg-neutral p-7 text-white shadow-xl transition-shadow duration-300 hover:shadow-2xl"
          >
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-content">
                <Building2 size={22} />
              </div>

              <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-primary">
                Ready To Rent?
              </p>

              <h3 className="mt-2 text-2xl font-black">Book the studio.</h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                Check availability and find the space that fits your event.
              </p>
            </div>

            <div className="mt-7 flex items-center justify-between">
              <span className="text-sm font-bold">View Rental Options</span>

              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all duration-300 group-hover:rotate-45 group-hover:bg-primary group-hover:text-primary-content">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
