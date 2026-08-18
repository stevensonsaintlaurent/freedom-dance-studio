import { motion } from "framer-motion";
import {
  Check,
  Music2,
  Maximize2,
  Users,
  CalendarCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Maximize2,
    title: "Flexible Space",
    text: "A versatile room that works for classes, rehearsals, private lessons and events.",
  },
  {
    icon: Music2,
    title: "Dance Ready",
    text: "A space designed around movement, music and a great dance experience.",
  },
  {
    icon: Users,
    title: "Small or Large Groups",
    text: "Choose a setup that fits your class, workshop, party or gathering.",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Scheduling",
    text: "Weekday, weekend and special-event rates make planning easier.",
  },
  {
    icon: Sparkles,
    title: "Make It Yours",
    text: "Bring your concept, your instructor, your music and your community.",
  },
  {
    icon: Check,
    title: "Simple Booking",
    text: "Tell us what you need and we can help you choose the right rental option.",
  },
];

export default function RentalFeatures() {
  return (
    <section className="bg-base-200 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
            Why Freedom Dance
          </p>
          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            More than a room.
            <span className="block text-primary">A space for your vision.</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-base-content/10 bg-base-100 p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={21} />
                </div>
                <h3 className="mt-5 text-lg font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-base-content/55">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
