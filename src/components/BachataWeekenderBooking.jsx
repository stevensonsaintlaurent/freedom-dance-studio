import React, { useRef, useState } from "react";
import useOnSudmit from "./../hooks/useOnSudmit";

// Optional: import your flyer and pass it as the flyer prop.
// import bachaZoukFlyer from "../assets/rodolfo.png";
const EVENT = {
  title: "Las Vegas BachaZouk Weekender",
  date: "December 5–6, 2026",
  venue: "Freedom Dance Studio",
  address: "3110 E. Sunset Rd., Suite C, Las Vegas, NV 89120",
  deadline: "2026-12-03T23:59:00-08:00",
  earlyPrice: 99,
  regularPrice: 129,
  socialPrice: 20,
  // Social date/time and full-pass inclusion have not been announced.
  socialDate: "Schedule coming soon",
  socialIncludedInFullPass: false, // Set true ONLY if you confirm this policy.
  workshops: [], // Add confirmed { id, title, day, time, price } objects later.
};

const money = (n) => `$${n.toFixed(2)}`;
const choices = [
  {
    id: "full",
    number: "01",
    title: "Full weekender",
    detail: "All weekend workshops",
    icon: "✦",
  },
  {
    id: "private",
    number: "02",
    title: "Private training",
    detail: "Lead or follow artist",
    icon: "◈",
  },
  {
    id: "social",
    number: "03",
    title: "Social night",
    detail: "$20 admission",
    icon: "♫",
  },
  {
    id: "workshops",
    number: "04",
    title: "Workshops",
    detail: "Individual sessions",
    icon: "◇",
  },
];

export default function BachaZoukWeekenderBooking({ flyer = null }) {
  const { onSubmit } = useOnSudmit();
  const bookingRef = useRef(null);
  const [bookingType, setBookingType] = useState("full");
  const [artist, setArtist] = useState("lead");
  const [date, setDate] = useState("2026-12-05");
  const [time, setTime] = useState("");
  const [socialAddOn, setSocialAddOn] = useState(false);
  const [selectedWorkshops, setSelectedWorkshops] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [now, setNow] = useState(() => Date.now());

  const early = now <= new Date(EVENT.deadline).getTime();
  const passPrice = early ? EVENT.earlyPrice : EVENT.regularPrice;
  const isFull = bookingType === "full";
  const isPrivate = bookingType === "private";
  const isSocial = bookingType === "social";
  const isWorkshops = bookingType === "workshops";
  const selected = EVENT.workshops.filter((w) =>
    selectedWorkshops.includes(w.id),
  );
  const unknownWorkshopPrice =
    isWorkshops && selected.some((w) => typeof w.price !== "number");
  const socialChosen = isSocial || socialAddOn;
  const socialCharge =
    socialChosen && !(isFull && EVENT.socialIncludedInFullPass)
      ? EVENT.socialPrice
      : 0;
  const knownTotal = !isPrivate && !unknownWorkshopPrice;
  const total = knownTotal
    ? (isFull ? passPrice : 0) +
      (isWorkshops ? selected.reduce((s, w) => s + (w.price || 0), 0) : 0) +
      socialCharge
    : null;
  const valid =
    !submitting &&
    (isFull ||
      isSocial ||
      (isPrivate && !!date && !!time) ||
      (isWorkshops && selected.length > 0));

  const choose = (id) => {
    setBookingType(id);
    setSocialAddOn(false);
    setSelectedWorkshops([]);
    setNow(Date.now());
    bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (!valid) return;
    const data = new FormData(event.currentTarget);
    const summary = {
      name: data.get("FullName"),
      email: data.get("Email"),
      type: bookingType,
      artist: isPrivate
        ? artist === "lead"
          ? "Lead Artist"
          : "Follow Artist"
        : null,
      date: isPrivate ? date : null,
      time: isPrivate ? time : null,
      workshops: selected.map((w) => w.title),
      social: socialChosen,
      total,
      pass: isFull
        ? early
          ? "Early Bird Full Pass"
          : "Regular Full Pass"
        : null,
    };
    try {
      setSubmitting(true);
      // This hook should send the form's hidden fields and customer information.
      await onSubmit(event);
      setReceipt(summary);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("BachaZouk booking error:", error);
      alert("Your request could not be submitted. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const card =
    "rounded-3xl border border-white/10 bg-white/[0.055] backdrop-blur-xl";
  const field =
    "w-full rounded-xl border border-white/15 bg-[#171322] px-4 py-3.5 text-white outline-none placeholder:text-white/35 focus:border-fuchsia-400";

  if (receipt)
    return (
      <section className="min-h-screen bg-[#0d0a14] px-4 py-24 text-white">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-fuchsia-400/30 bg-[#1a1425] p-8 text-center shadow-2xl sm:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-fuchsia-400/15 text-3xl text-fuchsia-300">
            ✓
          </div>
          <p className="text-xs font-bold uppercase tracking-[.3em] text-fuchsia-300">
            Freedom Dance Studio
          </p>
          <h1 className="mt-4 text-3xl font-black sm:text-4xl">
            Request received
          </h1>
          <p className="mt-3 text-white/65">
            Thank you, {receipt.name}. Your request has been submitted. This is
            not yet a confirmed reservation.
          </p>
          <div className="my-8 space-y-3 rounded-2xl bg-white/5 p-6 text-left text-sm">
            <p className="font-bold text-white">{EVENT.title}</p>
            <p className="text-white/65">{EVENT.date}</p>
            <p>
              Booking: <strong className="capitalize">{receipt.type}</strong>
            </p>
            {receipt.pass && <p>Pass: {receipt.pass}</p>}
            {receipt.artist && (
              <p>
                Private: {receipt.artist}, {receipt.date} at {receipt.time}{" "}
                (requested)
              </p>
            )}
            {receipt.workshops.length > 0 && (
              <p>Workshops: {receipt.workshops.join(", ")}</p>
            )}
            {receipt.social && (
              <p>
                Social admission: $20
                {receipt.total === null ? " (added to request)" : ""}
              </p>
            )}
            <p className="border-t border-white/10 pt-4 text-xl font-black text-fuchsia-300">
              {receipt.total === null
                ? "Private rate / final total pending"
                : `Estimated total: ${money(receipt.total)}`}
            </p>
          </div>
          <p className="text-sm text-white/55">
            Availability, any pending rates, and payment must be verified by the
            studio before confirmation.
          </p>
          <button
            type="button"
            onClick={() => {
              setReceipt(null);
              setBookingType("full");
              setSocialAddOn(false);
            }}
            className="mt-8 rounded-full bg-fuchsia-500 px-8 py-3 font-bold text-white hover:bg-fuchsia-400"
          >
            Make another booking
          </button>
        </div>
      </section>
    );

  return (
    <section className="min-h-screen overflow-hidden bg-[#0d0a14] text-white">
      <div className="relative isolate overflow-hidden border-b border-white/10 bg-[#170c25]">
        <div className="pointer-events-none absolute -left-40 top-0 h-[34rem] w-[34rem] rounded-full bg-fuchsia-700/25 blur-[110px]" />
        <div className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-amber-500/15 blur-[100px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-16 lg:py-24">
          <div>
            <p className="mb-6 inline-flex rounded-full border border-fuchsia-400/35 bg-fuchsia-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-fuchsia-200">
              Freedom Dance Company presents
            </p>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[.35em] text-amber-300">
              Las Vegas · December 5–6, 2026
            </p>
            <h1 className="text-5xl font-black uppercase leading-[.98] tracking-tight sm:text-7xl xl:text-8xl">
              BACHA
              <span className="bg-gradient-to-r from-fuchsia-400 via-pink-300 to-amber-200 bg-clip-text text-transparent">
                ZOUK
              </span>
              <span className="mt-3 block text-3xl font-light normal-case italic tracking-normal text-white sm:text-5xl">
                Weekender
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
              The <strong className="text-white">last weekender of 2026</strong>{" "}
              at Freedom Dance Studio. Two days of BachaZouk, artist training,
              and a social night. Don't miss it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-white/20 px-4 py-2">
                ✦ Full weekend
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2">
                ◈ Artist privates
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2">
                ♫ $20 social
              </span>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={() =>
                  bookingRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 px-8 py-4 font-bold shadow-lg shadow-fuchsia-700/30 transition hover:scale-[1.02]"
              >
                Reserve your experience →
              </button>
              <span className="text-sm text-white/60">
                Early Bird ends Dec 3 · 11:59 PM PST
              </span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            {flyer ? (
              <img
                src={flyer}
                alt="Las Vegas BachaZouk Weekender flyer"
                className="w-full rounded-[2rem] border border-white/15 object-contain shadow-2xl shadow-fuchsia-900/30"
              />
            ) : (
              <div className="flex aspect-[4/5] flex-col justify-end rounded-[2rem] border border-white/15 bg-gradient-to-br from-fuchsia-900 via-[#2c173a] to-[#120d21] p-10 shadow-2xl">
                <span className="text-sm font-bold uppercase tracking-[.3em] text-amber-200">
                  Las Vegas
                </span>
                <span className="mt-4 text-5xl font-black uppercase leading-none">
                  BachaZouk
                </span>
                <span className="mt-2 text-4xl italic text-fuchsia-300">
                  Weekender
                </span>
                <span className="mt-8 border-t border-white/20 pt-5 text-xl">
                  DEC 05 — 06, 2026
                </span>
              </div>
            )}
            <div className="absolute -bottom-5 -left-4 rounded-2xl border border-amber-300/30 bg-[#201527] px-6 py-4 shadow-xl sm:-left-8">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-300">
                Weekend passes from
              </p>
              <p className="text-4xl font-black">$99</p>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl space-y-20 px-5 py-16 sm:px-8">
        <section>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[.3em] text-fuchsia-300">
                Choose your moment
              </p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                One weekend. Your experience.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-white/55">
              Choose a pass, request a private with either artist, or join the
              social.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {choices.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => choose(item.id)}
                className={`group rounded-3xl border p-6 text-left transition duration-200 hover:-translate-y-1 ${bookingType === item.id ? "border-fuchsia-400 bg-fuchsia-400/10 shadow-lg shadow-fuchsia-900/20" : "border-white/10 bg-white/[.04] hover:border-white/30"}`}
              >
                <div className="mb-9 flex items-start justify-between">
                  <span className="text-sm text-white/40">{item.number}</span>
                  <span className="text-3xl text-fuchsia-300">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/55">{item.detail}</p>
                <span className="mt-6 block text-xs font-bold uppercase tracking-widest text-fuchsia-300">
                  Select →
                </span>
              </button>
            ))}
          </div>
        </section>

        <section
          className="grid gap-6 lg:grid-cols-[1fr_360px]"
          ref={bookingRef}
          id="booking-form"
        >
          <div className={`${card} scroll-mt-24 p-6 sm:p-9`}>
            <p className="text-xs font-bold uppercase tracking-[.3em] text-fuchsia-300">
              Your booking
            </p>
            <h2 className="mt-2 text-3xl font-black">Make it yours</h2>
            <p className="mt-2 text-sm text-white/55">
              Select your experience and send us your reservation request.
            </p>
            <div className="mt-8 space-y-6">
              {isFull && (
                <div className="rounded-2xl border border-fuchsia-400/30 bg-gradient-to-r from-fuchsia-500/15 to-transparent p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-300">
                    {early ? "Early Bird Full Pass" : "Regular Full Pass"}
                  </p>
                  <div className="mt-3 flex items-end gap-4">
                    <span className="text-5xl font-black">${passPrice}</span>
                    {early && (
                      <span className="pb-1 text-lg text-white/40 line-through">
                        $129
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-white/65">
                    Access to the full weekend workshop program. Social
                    admission is selected separately unless the studio announces
                    otherwise.
                  </p>
                  <p className="mt-4 text-xs text-amber-200">
                    Early Bird ends December 3 at 11:59 PM Las Vegas time.
                  </p>
                </div>
              )}
              {isPrivate && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-bold">
                      Train one-on-one with an artist
                    </h3>
                    <p className="mt-2 text-sm text-white/55">
                      Select a lead or follow artist and your preferred
                      appointment. Rate and availability will be confirmed.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      ["lead", "Lead Artist", "Private lead training"],
                      ["follow", "Follow Artist", "Private follow training"],
                    ].map(([id, title, detail]) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setArtist(id)}
                        className={`rounded-2xl border p-5 text-left ${artist === id ? "border-fuchsia-400 bg-fuchsia-400/10" : "border-white/15 bg-white/5"}`}
                      >
                        <span className="text-2xl text-fuchsia-300">◈</span>
                        <p className="mt-3 font-bold">{title}</p>
                        <p className="mt-1 text-xs text-white/50">{detail}</p>
                      </button>
                    ))}
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block text-sm font-medium">
                      Preferred day
                      <select
                        className={`${field} mt-2`}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      >
                        <option value="2026-12-05">Saturday, December 5</option>
                        <option value="2026-12-06">Sunday, December 6</option>
                      </select>
                    </label>
                    <label className="block text-sm font-medium">
                      Preferred time
                      <input
                        required
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className={`${field} mt-2`}
                      />
                    </label>
                  </div>
                  <p className="text-xs text-amber-200">
                    This is an availability request, not a confirmed
                    appointment.
                  </p>
                </div>
              )}
              {isSocial && (
                <div className="rounded-2xl border border-fuchsia-400/25 bg-fuchsia-500/10 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-fuchsia-300">
                    Social admission
                  </p>
                  <p className="mt-3 text-5xl font-black">$20</p>
                  <p className="mt-3 text-sm text-white/65">
                    Dance with the BachaZouk community. Exact date and start
                    time will be announced.
                  </p>
                </div>
              )}
              {isWorkshops && (
                <div className="space-y-3">
                  <h3 className="text-xl font-bold">Individual workshops</h3>
                  {EVENT.workshops.length === 0 ? (
                    <p className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/65">
                      Individual workshop times and prices are coming soon. Full
                      weekend passes are available now.
                    </p>
                  ) : (
                    EVENT.workshops.map((w) => (
                      <label
                        key={w.id}
                        className="flex cursor-pointer items-center gap-4 rounded-xl border border-white/10 p-4"
                      >
                        <input
                          type="checkbox"
                          checked={selectedWorkshops.includes(w.id)}
                          onChange={() =>
                            setSelectedWorkshops((items) =>
                              items.includes(w.id)
                                ? items.filter((id) => id !== w.id)
                                : [...items, w.id],
                            )
                          }
                          className="checkbox checkbox-secondary"
                        />
                        <span className="flex-1">
                          <strong>{w.title}</strong>
                          <span className="block text-xs text-white/50">
                            {w.day} · {w.time}
                          </span>
                        </span>
                        <span>
                          {typeof w.price === "number" ? money(w.price) : "TBA"}
                        </span>
                      </label>
                    ))
                  )}
                </div>
              )}
              {!isSocial && (
                <label className="flex cursor-pointer items-start gap-4 rounded-2xl border border-white/15 bg-white/[.04] p-5">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary mt-1"
                    checked={socialAddOn}
                    onChange={(e) => setSocialAddOn(e.target.checked)}
                  />
                  <span className="flex-1">
                    <strong className="block">Add social admission</strong>
                    <span className="mt-1 block text-sm text-white/55">
                      Add the social to this request for $20.
                    </span>
                  </span>
                  <strong className="text-lg">$20</strong>
                </label>
              )}
            </div>
            <div className="mt-10 border-t border-white/10 pt-8">
              <h3 className="text-xl font-bold">Your details</h3>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* If your hook already adds the Web3Forms access key, remove this placeholder. */}
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_WEB3FORMS_ACCESS_KEY"
                />
                <input
                  type="hidden"
                  name="FormType"
                  value="BachaZouk Weekender Booking"
                />
                <input type="hidden" name="Event" value={EVENT.title} />
                <input type="hidden" name="EventDates" value={EVENT.date} />
                <input type="hidden" name="BookingType" value={bookingType} />
                <input
                  type="hidden"
                  name="Pass"
                  value={
                    isFull
                      ? early
                        ? "Early Bird Full Pass"
                        : "Regular Full Pass"
                      : ""
                  }
                />
                <input
                  type="hidden"
                  name="Workshops"
                  value={selected
                    .map((w) => `${w.title} (${w.day}, ${w.time})`)
                    .join(" | ")}
                />
                <input
                  type="hidden"
                  name="PrivateArtist"
                  value={
                    isPrivate
                      ? artist === "lead"
                        ? "Lead Artist"
                        : "Follow Artist"
                      : ""
                  }
                />
                <input
                  type="hidden"
                  name="PrivatePreferredDate"
                  value={isPrivate ? date : ""}
                />
                <input
                  type="hidden"
                  name="PrivatePreferredTime"
                  value={isPrivate ? time : ""}
                />
                <input
                  type="hidden"
                  name="SocialAdmission"
                  value={socialChosen ? "$20 requested" : "No"}
                />
                <input
                  type="hidden"
                  name="TotalPrice"
                  value={total === null ? "Rate / total pending" : total}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm">
                    Full name *
                    <input
                      name="FullName"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      className={`${field} mt-2`}
                    />
                  </label>
                  <label className="block text-sm">
                    Phone *
                    <input
                      name="Phone"
                      required
                      type="tel"
                      autoComplete="tel"
                      placeholder="Phone number"
                      className={`${field} mt-2`}
                    />
                  </label>
                </div>
                <label className="block text-sm">
                  Email address *
                  <input
                    name="Email"
                    required
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={`${field} mt-2`}
                  />
                </label>
                <label className="block text-sm">
                  Message / special requests
                  <textarea
                    name="Message"
                    rows={3}
                    placeholder="Anything we should know?"
                    className={`${field} mt-2 resize-y`}
                  />
                </label>
                <label className="flex items-start gap-3 rounded-xl bg-white/5 p-4 text-sm text-white/70">
                  <input
                    type="checkbox"
                    name="PaymentAgreement"
                    value="Agreed"
                    required
                    className="checkbox checkbox-secondary mt-0.5"
                  />
                  <span>
                    I understand this is a booking request. Reservations are
                    confirmed only after Freedom Dance Studio verifies
                    availability and payment. Private rates are quoted
                    separately.
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={!valid}
                  className="w-full rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-6 py-4 text-base font-bold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {submitting ? "Sending request…" : "Submit booking request →"}
                </button>
                <p className="text-center text-xs text-white/40">
                  No payment is collected on this form.
                </p>
              </form>
            </div>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-8 lg:self-start">
            <div className={`${card} p-7`}>
              <p className="text-xs font-bold uppercase tracking-[.25em] text-fuchsia-300">
                Your reservation
              </p>
              <h3 className="mt-3 text-2xl font-black">Booking summary</h3>
              <div className="mt-7 space-y-4 border-b border-white/10 pb-6 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-white/60">Experience</span>
                  <span className="text-right font-semibold">
                    {choices.find((c) => c.id === bookingType)?.title}
                  </span>
                </div>
                {isFull && (
                  <div className="flex justify-between">
                    <span className="text-white/60">Weekend pass</span>
                    <span>{money(passPrice)}</span>
                  </div>
                )}
                {isPrivate && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-white/60">Artist</span>
                      <span>{artist === "lead" ? "Lead" : "Follow"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Private rate</span>
                      <span>On request</span>
                    </div>
                  </>
                )}
                {isWorkshops &&
                  selected.map((w) => (
                    <div key={w.id} className="flex justify-between gap-3">
                      <span>{w.title}</span>
                      <span>
                        {typeof w.price === "number" ? money(w.price) : "TBA"}
                      </span>
                    </div>
                  ))}
                {socialChosen && (
                  <div className="flex justify-between">
                    <span className="text-white/60">Social admission</span>
                    <span>$20</span>
                  </div>
                )}
              </div>
              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="text-white/65">
                  {total === null ? "Estimated total" : "Total"}
                </span>
                <span className="text-3xl font-black text-fuchsia-300">
                  {total === null ? "Pending" : money(total)}
                </span>
              </div>
              {isPrivate && socialChosen && (
                <p className="mt-2 text-xs text-white/50">
                  Includes $20 social; private lesson price will be quoted
                  separately.
                </p>
              )}
              <p className="mt-5 text-xs leading-relaxed text-white/45">
                Requests are subject to availability. Payment instructions
                follow studio confirmation.
              </p>
            </div>
            <div className="rounded-3xl border border-amber-300/20 bg-amber-300/5 p-7">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-200">
                Where to find us
              </p>
              <h3 className="mt-3 text-xl font-bold">Freedom Dance Studio</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                {EVENT.address}
              </p>
              <p className="mt-4 text-xs text-amber-200">
                December 5–6, 2026 · Las Vegas
              </p>
            </div>
          </aside>
        </section>
      </main>
    </section>
  );
}
