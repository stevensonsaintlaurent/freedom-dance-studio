import { motion } from "framer-motion";
import { ArrowUpRight, Camera, Sparkles } from "lucide-react";

import heroImage from "../assets/recentClip1.jpeg";
import septemberSocial from "../assets/septemberSocial.png";
import workshop from "../assets/workshop.png";
import havasu from "../assets/havasu.png";

const gallery = [
  {
    image: heroImage,
    title: "Dance Floor",
    label: "Classes • Rehearsals",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    image: septemberSocial,
    title: "Socials",
    label: "Events • Community",
    span: "",
  },
  {
    image: workshop,
    title: "Workshops",
    label: "Training • Movement",
    span: "",
  },
  {
    image: havasu,
    title: "Special Events",
    label: "Experiences • Community",
    span: "md:col-span-2",
  },
];

export default function RentalGallery() {
  return (
    <section className="bg-base-100 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-primary">
              <Camera size={14} />
              The Freedom Experience
            </div>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              See the space.
              <span className="block text-primary">Imagine your event.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-base-content/60">
              From regular classes to packed socials, Freedom Dance Studio is
              built for movement, connection and memorable experiences.
            </p>
          </div>

          <div className="hidden items-center gap-2 text-xs font-bold text-base-content/45 sm:flex">
            <Sparkles size={14} className="text-primary" />
            Scroll to explore
          </div>
        </div>

        <div className="mt-10 grid auto-rows-[190px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[210px] md:grid-cols-4">
          {gallery.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-[1.75rem] bg-neutral ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary">
                      {item.label}
                    </p>
                    <h3 className="mt-1 text-xl font-black text-white sm:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition group-hover:rotate-45">
                    <ArrowUpRight size={17} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-base-content/40">
          Replace these visual references with your latest studio photos when
          you are ready.
        </p>
      </div>
    </section>
  );
}
