// components/RentalPrices.jsx

import { Clock3, Users, CalendarDays } from "lucide-react";

const rates = {
  weekday: [
    {
      time: "9:00 AM – 12:00 PM",
      rate: 20,
    },
    {
      time: "12:00 PM – 6:00 PM",
      rate: 30,
    },
    {
      time: "6:00 PM – 9:00 PM",
      rate: 50,
    },
  ],

  weekend: [
    {
      time: "9:00 AM – 12:00 PM",
      rate: 30,
    },
    {
      time: "12:00 PM – 6:00 PM",
      rate: 40,
    },
    {
      time: "6:00 PM – 9:00 PM",
      rate: 70,
    },
  ],
};

const largeGroupRate = 120;

function PriceCard({ title, type, rates }) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <CalendarDays size={24} />
        </div>

        <div>
          <h3 className="text-2xl font-black text-white">{title}</h3>
          <p className="text-sm text-white/45">Studio rental rates</p>
        </div>
      </div>

      <div className="space-y-3">
        {rates.map((item) => (
          <div
            key={item.time}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-4"
          >
            <div className="flex items-center gap-3">
              <Clock3 size={18} className="text-primary" />

              <span className="text-sm font-medium text-white/75">
                {item.time}
              </span>
            </div>

            <span className="text-lg font-black text-primary">
              ${item.rate}
              <span className="ml-1 text-xs font-medium text-white/45">
                /hr
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function RentalPrices() {
  return (
    <section
      id="prices"
      className="relative overflow-hidden bg-neutral px-4 py-20 text-neutral-content sm:px-6 sm:py-24 lg:px-10"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
            Simple pricing
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            Studio rental <span className="text-primary">prices.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-white/60">
            Choose the day and time that works best for your class, rehearsal,
            workshop, or private event.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <PriceCard title="Weekday" type="weekday" rates={rates.weekday} />

          <PriceCard title="Weekend" type="weekend" rates={rates.weekend} />
        </div>

        <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-primary/20 bg-primary/10 p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-content">
              <Users size={21} />
            </div>

            <div>
              <h3 className="font-black text-white">
                Large groups: 25+ guests
              </h3>

              <p className="mt-1 text-sm leading-6 text-white/60">
                Groups of 25 guests or more are charged at a flat rate of{" "}
                <span className="font-black text-primary">
                  ${largeGroupRate}/hour
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-5 text-white/35">
          Prices are estimates and do not guarantee availability. Events,
          parties, and large groups may have additional rates or fees.
        </p>
      </div>
    </section>
  );
}
