import React, { useMemo, useState } from "react";
import useOnSudmit from "../hooks/useOnSudmit";

const EVENT = {
  name: "Freedom Live Band Concert",
  date: "Sunday, December 20, 2026",
  ticketPrice: 20,
  venue: "Venue to be announced",
  time: "Time to be announced",
};

const instruments = [
  "Alto Saxophone",
  "Tenor Saxophone",
  "Baritone Saxophone",
  "Trumpet",
  "Trombone",
  "Bass Trombone",
  "Piano / Keyboard",
  "Bass Guitar",
  "Upright Bass",
  "Drums",
  "Percussion",
  "Vocals",
  "Other",
];

const money = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    n,
  );

export default function FreedomLiveBandBooking({ flyer }) {
  const { onSubmit } = useOnSudmit();
  const [mode, setMode] = useState("tickets");
  const [quantity, setQuantity] = useState(1);
  const [instrument, setInstrument] = useState("");
  const [rehearsals, setRehearsals] = useState("");
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState(null);
  const total = useMemo(() => quantity * EVENT.ticketPrice, [quantity]);

  const switchMode = (next) => {
    setMode(next);
    setResult(null);
  };

  const submit = async (event) => {
    event.preventDefault();
    if (sending) return;
    if (mode === "musician" && (!instrument || !rehearsals)) return;
    setSending(true);
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("FullName") || "Guest");
    try {
      // The existing hook handles Web3Forms delivery.
      // Hidden inputs below ensure all booking details are included.
      await onSubmit(event);
      setResult({
        name,
        mode,
        quantity: mode === "tickets" ? quantity : null,
        total: mode === "tickets" ? total : null,
      });
      form.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Concert form submission failed:", error);
      alert("We couldn't send your request. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full rounded-xl border border-amber-200/20 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20";
  const label = "mb-2 block text-sm font-semibold text-amber-100/90";

  return (
    <main className="min-h-screen bg-[#100a0b] text-white" data-theme="night">
      <div className="relative overflow-hidden border-b border-amber-400/15 bg-gradient-to-br from-[#431019] via-[#1e1015] to-[#100a0b]">
        <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-rose-700/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.1fr_.9fr] md:items-center md:py-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.3em] text-amber-300">
              Freedom Dance Company Presents
            </p>
            <h1 className="mt-5 font-serif text-5xl font-bold leading-tight sm:text-6xl">
              Freedom <span className="text-amber-300">Live Band</span> Concert
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/70">
              An unforgettable evening of live jazz, Latin, swing, and big band
              music. Join the audience or apply to perform with the band.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-amber-200">
                December 20, 2026
              </span>
              <span className="rounded-full border border-white/15 px-4 py-2">
                Advance tickets {money(20)}
              </span>
            </div>
            <p className="mt-5 text-sm text-white/55">
              {EVENT.time} · {EVENT.venue}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => {
                  switchMode("tickets");
                  document
                    .getElementById("concert-register")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-xl bg-amber-400 px-6 py-3 font-bold text-[#24100d] transition hover:bg-amber-300"
              >
                Reserve Tickets
              </button>
              <button
                type="button"
                onClick={() => {
                  switchMode("musician");
                  document
                    .getElementById("concert-register")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-xl border border-amber-400/50 px-6 py-3 font-bold text-amber-200 transition hover:bg-amber-400/10"
              >
                Join the Band
              </button>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-amber-400/20 bg-white/5 p-2 shadow-2xl shadow-black/50">
            {flyer ? (
              <img
                src={flyer}
                alt="Freedom Live Band Concert promotional flyer"
                className="max-h-[550px] w-full rounded-xl object-contain"
              />
            ) : (
              <div className="flex min-h-80 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-amber-900/30 to-rose-950 p-8 text-center">
                <span className="text-7xl">🎷</span>
                <p className="mt-5 font-serif text-3xl text-amber-200">
                  Live Music. Real Connection.
                </p>
                <p className="mt-3 text-sm text-white/60">
                  Pass your concert flyer using the flyer prop.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <section
        id="concert-register"
        className="mx-auto max-w-6xl px-5 py-14 md:py-20"
      >
        <div className="mb-9 text-center">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-amber-300">
            Registration
          </p>
          <h2 className="mt-3 font-serif text-4xl">
            Be Part of the Experience
          </h2>
          <p className="mt-3 text-white/60">
            Choose how you would like to participate.
          </p>
        </div>
        <div className="mx-auto mb-8 grid max-w-2xl grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-2">
          <button
            type="button"
            aria-pressed={mode === "tickets"}
            onClick={() => switchMode("tickets")}
            className={`rounded-xl px-3 py-4 text-sm font-bold transition sm:text-base ${mode === "tickets" ? "bg-amber-400 text-[#24100d]" : "text-white/70 hover:bg-white/10"}`}
          >
            🎟 Reserve Tickets
          </button>
          <button
            type="button"
            aria-pressed={mode === "musician"}
            onClick={() => switchMode("musician")}
            className={`rounded-xl px-3 py-4 text-sm font-bold transition sm:text-base ${mode === "musician" ? "bg-amber-400 text-[#24100d]" : "text-white/70 hover:bg-white/10"}`}
          >
            🎺 Musician Application
          </button>
        </div>

        {result ? (
          <div
            role="status"
            className="mx-auto max-w-2xl rounded-2xl border border-amber-400/30 bg-amber-400/10 p-8 text-center"
          >
            <div className="text-4xl">✓</div>
            <h3 className="mt-4 font-serif text-3xl">Request Received</h3>
            <p className="mt-3 text-white/75">
              Thank you, {result.name}.{" "}
              {result.mode === "tickets"
                ? `Your request for ${result.quantity} ticket(s), totaling ${money(result.total)}, has been submitted. Tickets are not confirmed until payment is received and verified.`
                : "Your musician application has been submitted for review. Participation is not confirmed until the band organizer contacts you."}
            </p>
            <button
              type="button"
              onClick={() => setResult(null)}
              className="mt-7 rounded-xl bg-amber-400 px-6 py-3 font-bold text-[#24100d]"
            >
              Make Another Request
            </button>
          </div>
        ) : (
          <div className="mx-auto grid max-w-5xl gap-7 lg:grid-cols-[1fr_1.5fr]">
            <aside className="h-fit rounded-2xl border border-amber-400/20 bg-gradient-to-b from-[#37171b] to-[#1a1114] p-7">
              {mode === "tickets" ? (
                <>
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-300">
                    Advance Admission
                  </p>
                  <p className="mt-4 font-serif text-5xl font-bold">
                    $20
                    <span className="ml-2 text-base font-normal text-white/60">
                      per person
                    </span>
                  </p>
                  <p className="mt-4 text-white/65">
                    Reserve your place for our December 20 live band concert.
                  </p>
                  <label
                    htmlFor="ticket-quantity"
                    className="mt-7 block text-sm font-bold"
                  >
                    Number of tickets
                  </label>
                  <div className="mt-3 flex items-center justify-between rounded-xl border border-white/15 bg-black/20 p-2">
                    <button
                      type="button"
                      aria-label="Remove one ticket"
                      disabled={quantity <= 1}
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="h-11 w-11 rounded-lg bg-white/10 text-xl disabled:opacity-30"
                    >
                      −
                    </button>
                    <span
                      id="ticket-quantity"
                      className="text-xl font-bold"
                      aria-live="polite"
                    >
                      {quantity}
                    </span>
                    <button
                      type="button"
                      aria-label="Add one ticket"
                      disabled={quantity >= 20}
                      onClick={() => setQuantity((q) => Math.min(20, q + 1))}
                      className="h-11 w-11 rounded-lg bg-white/10 text-xl disabled:opacity-30"
                    >
                      +
                    </button>
                  </div>
                  <div className="mt-7 flex items-center justify-between border-t border-white/15 pt-5">
                    <span className="text-white/65">Ticket total</span>
                    <span className="text-3xl font-bold text-amber-300">
                      {money(total)}
                    </span>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-white/50">
                    This is a reservation request, not an online payment.
                    Payment instructions will be provided separately.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-300">
                    Perform With Us
                  </p>
                  <h3 className="mt-4 font-serif text-3xl">
                    Join Freedom Live Band
                  </h3>
                  <p className="mt-4 text-white/70">
                    We're welcoming musicians interested in jazz, Latin, swing,
                    and big band performances.
                  </p>
                  <div className="mt-7 space-y-4 border-t border-white/15 pt-5 text-sm text-white/75">
                    <p>
                      <strong className="text-amber-200">Rehearsals:</strong>{" "}
                      Saturdays, 6:00–7:30 PM
                    </p>
                    <p>
                      <strong className="text-amber-200">Location:</strong>{" "}
                      Freedom Dance Studio
                    </p>
                    <p>
                      <strong className="text-amber-200">Concert:</strong>{" "}
                      December 20, 2026
                    </p>
                    <p>
                      <strong className="text-amber-200">Selection:</strong>{" "}
                      Applications reviewed by the organizer
                    </p>
                  </div>
                </>
              )}
            </aside>

            <div className="rounded-2xl border border-white/10 bg-[#1d1417] p-6 shadow-2xl sm:p-9">
              <h3 className="font-serif text-2xl font-bold">
                {mode === "tickets"
                  ? "Complete Your Ticket Request"
                  : "Musician Participation Form"}
              </h3>
              <p className="mt-2 text-sm text-white/60">
                Please provide your contact details so our team can follow up.
              </p>
              <form className="mt-8 space-y-5" onSubmit={submit}>
                <input
                  type="hidden"
                  name="FormType"
                  value={
                    mode === "tickets"
                      ? "Concert Ticket Reservation"
                      : "Concert Musician Application"
                  }
                />
                <input type="hidden" name="Event" value={EVENT.name} />
                <input type="hidden" name="EventDate" value={EVENT.date} />
                <input type="hidden" name="BookingType" value={mode} />
                <input
                  type="hidden"
                  name="TicketQuantity"
                  value={mode === "tickets" ? quantity : ""}
                />
                <input
                  type="hidden"
                  name="TicketPrice"
                  value={mode === "tickets" ? EVENT.ticketPrice : ""}
                />
                <input
                  type="hidden"
                  name="TotalPrice"
                  value={mode === "tickets" ? total : ""}
                />
                <input
                  type="hidden"
                  name="Instrument"
                  value={mode === "musician" ? instrument : ""}
                />
                <input
                  type="hidden"
                  name="RehearsalAvailability"
                  value={mode === "musician" ? rehearsals : ""}
                />
                <input
                  type="hidden"
                  name="Status"
                  value={
                    mode === "tickets" ? "Payment Pending" : "Pending Review"
                  }
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="concert-name" className={label}>
                      Full Name *
                    </label>
                    <input
                      id="concert-name"
                      name="FullName"
                      type="text"
                      autoComplete="name"
                      required
                      className={field}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="concert-phone" className={label}>
                      Phone *
                    </label>
                    <input
                      id="concert-phone"
                      name="Phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      className={field}
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="concert-email" className={label}>
                    Email Address *
                  </label>
                  <input
                    id="concert-email"
                    name="Email"
                    type="email"
                    autoComplete="email"
                    required
                    className={field}
                    placeholder="you@example.com"
                  />
                </div>
                {mode === "musician" && (
                  <>
                    <div>
                      <label htmlFor="concert-instrument" className={label}>
                        Primary Instrument *
                      </label>
                      <select
                        id="concert-instrument"
                        className={field}
                        value={instrument}
                        onChange={(e) => setInstrument(e.target.value)}
                        required
                      >
                        <option value="" className="bg-[#1d1417]">
                          Select an instrument
                        </option>
                        {instruments.map((item) => (
                          <option
                            key={item}
                            value={item}
                            className="bg-[#1d1417]"
                          >
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="concert-experience" className={label}>
                        Experience and Background *
                      </label>
                      <textarea
                        id="concert-experience"
                        name="Experience"
                        required
                        rows={3}
                        className={field}
                        placeholder="Tell us about your playing experience, ensembles, and musical styles..."
                      />
                    </div>
                    <div>
                      <label htmlFor="concert-rehearsals" className={label}>
                        Can you attend Saturday rehearsals (6:00–7:30 PM)? *
                      </label>
                      <select
                        id="concert-rehearsals"
                        value={rehearsals}
                        onChange={(e) => setRehearsals(e.target.value)}
                        className={field}
                        required
                      >
                        <option value="" className="bg-[#1d1417]">
                          Choose availability
                        </option>
                        <option value="Yes, regularly" className="bg-[#1d1417]">
                          Yes, regularly
                        </option>
                        <option value="Some Saturdays" className="bg-[#1d1417]">
                          Some Saturdays
                        </option>
                        <option
                          value="Need to discuss"
                          className="bg-[#1d1417]"
                        >
                          Need to discuss
                        </option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="concert-links" className={label}>
                        Performance Video or Portfolio (optional)
                      </label>
                      <input
                        id="concert-links"
                        name="PerformanceLink"
                        type="url"
                        className={field}
                        placeholder="https://..."
                      />
                    </div>
                  </>
                )}
                <div>
                  <label htmlFor="concert-message" className={label}>
                    {mode === "tickets"
                      ? "Special Requests (optional)"
                      : "Additional Information (optional)"}
                  </label>
                  <textarea
                    id="concert-message"
                    name="Message"
                    rows={3}
                    className={field}
                    placeholder="Anything else you'd like us to know?"
                  />
                </div>
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-black/20 p-4 text-sm text-white/70">
                  <input
                    type="checkbox"
                    name="Agreement"
                    value="Agreed"
                    required
                    className="checkbox checkbox-warning mt-0.5"
                  />
                  <span>
                    {mode === "tickets"
                      ? "I understand my tickets are confirmed only after payment has been received and verified."
                      : "I understand this is an application and participation is subject to review and confirmation by the organizer."}
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={
                    sending ||
                    (mode === "musician" && (!instrument || !rehearsals))
                  }
                  className="w-full rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 px-6 py-4 text-lg font-extrabold text-[#28130c] shadow-lg shadow-amber-900/20 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {sending
                    ? "Submitting..."
                    : mode === "tickets"
                      ? `Request ${quantity} Ticket${quantity > 1 ? "s" : ""} · ${money(total)}`
                      : "Submit Musician Application"}
                </button>
                <p className="text-center text-xs text-white/45">
                  No payment is collected on this page. Our team will follow up
                  with next steps.
                </p>
              </form>
            </div>
          </div>
        )}
      </section>
      <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-white/50">
        Freedom Dance Company · Freedom Live Band · Las Vegas, Nevada
      </footer>
    </main>
  );
}
