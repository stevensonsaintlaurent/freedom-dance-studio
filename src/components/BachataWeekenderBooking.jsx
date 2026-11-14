import React, { useMemo, useRef, useState } from "react";
import useOnSudmit from "./../hooks/useOnSudmit";
// Set these prices before enabling individual workshop bookings.
const SINGLE_WORKSHOP_PRICE = null;
const TWO_WORKSHOP_PRICE = null;

const passes = [
  {
    id: "early-early",
    title: "Early Early Bird",
    price: 89,
    deadline: "2026-11-18T23:59:00-08:00",
    description: "All 5 main workshops",
  },
  {
    id: "early",
    title: "Early Bird",
    price: 99,
    deadline: "2026-11-20T12:00:00-08:00",
    description: "All 5 main workshops",
  },
  {
    id: "regular",
    title: "Regular Full Pass",
    price: 129,
    deadline: null,
    description: "All 5 main workshops",
  },
];

const workshops = [
  {
    id: "friday-masterclass",
    day: "Friday",
    date: "November 20",
    time: "6:30 PM – 8:00 PM",
    title: "Bachata Masterclass",
  },
  {
    id: "friday-bachata",
    day: "Friday",
    date: "November 20",
    time: "8:30 PM – 10:00 PM",
    title: "Inter-Adv Bachata Workshop",
  },
  {
    id: "saturday-salsa",
    day: "Saturday",
    date: "November 21",
    time: "4:00 PM – 5:30 PM",
    title: "Salsa Workshop",
  },
  {
    id: "saturday-bachata",
    day: "Saturday",
    date: "November 21",
    time: "8:30 PM – 10:00 PM",
    title: "Inter-Adv Bachata Workshop",
  },
  {
    id: "sunday-bachata",
    day: "Sunday",
    date: "November 22",
    time: "4:00 PM – 5:30 PM",
    title: "Inter-Adv Bachata Workshop",
  },
];

const stylingClasses = [
  {
    id: "salsa-styling",
    title: "Salsa Ladies Styling",
    day: "Saturday",
    date: "November 21",
    time: "3:00 PM – 4:00 PM",
    instructor: "Brenda Rodriguez",
  },
  {
    id: "bachata-styling",
    title: "Bachata Ladies Styling",
    day: "Sunday",
    date: "November 22",
    time: "3:00 PM – 4:00 PM",
    instructor: "Brenda Rodriguez",
  },
];

const formatPrice = (price) => `$${price.toFixed(2)}`;

const BachataWeekenderBooking = () => {
  const { onSubmit } = useOnSudmit();
  const formRef = useRef(null);

  const [bookingType, setBookingType] = useState("full");
  const [selectedPass, setSelectedPass] = useState(null);
  const [selectedWorkshops, setSelectedWorkshops] = useState([]);
  const [selectedStyling, setSelectedStyling] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState(null);

  const availablePasses = passes.filter(
    (pass) => !pass.deadline || new Date() <= new Date(pass.deadline),
  );

  const activePass = availablePasses.find((pass) => pass.id === selectedPass);

  const hasFullPass = bookingType === "full" && !!activePass;

  const toggleSelection = (id, setter) => {
    setter((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    );
  };

  const selectPass = (id) => {
    setBookingType("full");
    setSelectedPass(id);
    setSelectedWorkshops([]);

    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const changeBookingType = (type) => {
    setBookingType(type);
    setSelectedPass(null);
    setSelectedWorkshops([]);
    setSelectedStyling([]);
  };

  // Styling pricing:
  // Full pass: $20 per class
  // Other workshop pass holders: $30 per class
  // Styling-only customers: $40 per class

  const stylingPrice = hasFullPass
    ? 20
    : bookingType === "workshops" && selectedWorkshops.length > 0
      ? 30
      : 40;

  const workshopTotal = useMemo(() => {
    const count = selectedWorkshops.length;

    if (count === 0) return 0;

    if (SINGLE_WORKSHOP_PRICE === null) return null;

    if (count === 2 && TWO_WORKSHOP_PRICE !== null) {
      return TWO_WORKSHOP_PRICE;
    }

    return count * SINGLE_WORKSHOP_PRICE;
  }, [selectedWorkshops]);

  const pricingIncomplete =
    bookingType === "workshops" &&
    selectedWorkshops.length > 0 &&
    workshopTotal === null;

  const passTotal = hasFullPass ? activePass.price : 0;

  const stylingTotal = selectedStyling.length * stylingPrice;

  const total = pricingIncomplete
    ? null
    : passTotal + (workshopTotal || 0) + stylingTotal;

  const canSubmit =
    !isSubmitting &&
    !pricingIncomplete &&
    total !== null &&
    (hasFullPass || selectedWorkshops.length > 0 || selectedStyling.length > 0);

  const chosenWorkshops = hasFullPass
    ? workshops
    : workshops.filter((workshop) => selectedWorkshops.includes(workshop.id));

  const chosenStyling = stylingClasses.filter((item) =>
    selectedStyling.includes(item.id),
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!canSubmit) return;

    const formData = new FormData(event.currentTarget);

    const bookingData = {
      fullName: formData.get("FullName"),
      email: formData.get("Email"),
      phone: formData.get("Phone"),
      bookingType,
      pass: hasFullPass ? activePass.title : null,
      workshops: chosenWorkshops.map((item) => item.title),
      styling: chosenStyling.map((item) => item.title),
      total,
      status: "Payment Pending",
    };

    try {
      setIsSubmitting(true);

      // Your existing Web3Forms submission hook.
      await onSubmit(event);

      setConfirmation(bookingData);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Booking submission error:", error);
      alert("Booking failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewBooking = () => {
    setConfirmation(null);
    setBookingType("full");
    setSelectedPass(null);
    setSelectedWorkshops([]);
    setSelectedStyling([]);
  };

  // ================= CONFIRMATION =================

  if (confirmation) {
    return (
      <section
        data-theme="night"
        className="min-h-screen bg-base-300 px-4 py-12"
      >
        <div className="mx-auto max-w-2xl">
          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body gap-6">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-success text-4xl text-success-content">
                  ✓
                </div>

                <h1 className="text-3xl font-black">
                  Booking Request Received!
                </h1>

                <p className="mt-3 text-base-content/70">
                  Thank you, {confirmation.fullName}.
                </p>
              </div>

              <div className="divider" />

              <div className="text-center">
                <h2 className="text-2xl font-bold">
                  Las Vegas Bachata & Salsa Weekender
                </h2>
                <p className="mt-2 text-base-content/60">
                  November 20–22, 2026
                </p>
              </div>

              <div className="rounded-2xl bg-base-200 p-5">
                <h3 className="mb-4 text-lg font-bold">Your Booking</h3>

                {confirmation.pass && (
                  <p className="mb-3">
                    <span className="font-bold">Pass: </span>
                    {confirmation.pass}
                  </p>
                )}

                {confirmation.workshops.length > 0 && (
                  <div className="mb-4">
                    <p className="font-bold">Workshops</p>
                    <ul className="mt-2 list-inside list-disc text-sm">
                      {confirmation.workshops.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {confirmation.styling.length > 0 && (
                  <div className="mb-4">
                    <p className="font-bold">Ladies Styling</p>
                    <ul className="mt-2 list-inside list-disc text-sm">
                      {confirmation.styling.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="divider" />

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-3xl font-black text-warning">
                    {formatPrice(confirmation.total)}
                  </span>
                </div>
              </div>

              <div role="alert" className="alert alert-warning">
                <div>
                  <h3 className="font-bold">PAYMENT PENDING</h3>
                  <p className="mt-1 text-sm">
                    Your booking request has been submitted. Your spot is
                    confirmed only after payment has been received and verified.
                  </p>
                </div>
              </div>

              <div className="text-center text-sm">
                <p>{confirmation.email}</p>
                <p>{confirmation.phone}</p>
              </div>

              <button
                type="button"
                className="btn btn-outline btn-warning w-full"
                onClick={handleNewBooking}
              >
                Make Another Booking
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ================= MAIN PAGE =================

  return (
    <section
      data-theme="night"
      className="min-h-screen bg-base-300 text-base-content"
    >
      {/* HERO */}

      <div className="bg-gradient-to-b from-red-950 via-base-300 to-base-300 px-4 py-16 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-warning">
          Seattle Bachata Collective × Freedom Dance Studio
        </p>

        <h1 className="mt-5 text-4xl font-black sm:text-6xl lg:text-7xl">
          LAS VEGAS
        </h1>

        <h2 className="mt-2 text-2xl font-black text-error sm:text-4xl">
          BACHATA & SALSA
        </h2>

        <p className="mt-3 text-xl font-bold tracking-widest">WEEKENDER</p>

        <p className="mt-5 text-lg text-base-content/70">
          November 20–22, 2026
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <span className="badge badge-warning badge-outline">3 Days</span>
          <span className="badge badge-warning badge-outline">
            5 Main Workshops
          </span>
          <span className="badge badge-warning badge-outline">
            Ladies Styling
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-16 px-4 pb-20">
        {/* SCHEDULE */}

        <div>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black">Weekend Schedule</h2>
            <p className="mt-2 text-base-content/60">
              Choose your favorite workshops or experience the entire weekend.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {["Friday", "Saturday", "Sunday"].map((day) => (
              <div
                key={day}
                className="card border border-base-content/10 bg-base-100 shadow-xl"
              >
                <div className="card-body">
                  <h3 className="text-center text-2xl font-black text-warning">
                    {day}
                  </h3>

                  <div className="divider my-1" />

                  {[
                    ...workshops.map((item) => ({
                      ...item,
                      isStyling: false,
                    })),
                    ...stylingClasses.map((item) => ({
                      ...item,
                      isStyling: true,
                    })),
                  ]
                    .filter((item) => item.day === day)
                    .sort((a, b) => {
                      const time = (item) => {
                        const [hour, minute] = item.time
                          .split(" ")[0]
                          .split(":")
                          .map(Number);

                        return hour * 60 + minute;
                      };

                      return time(a) - time(b);
                    })
                    .map((item) => (
                      <div
                        key={item.id}
                        className={`rounded-xl p-3 ${
                          item.isStyling ? "bg-warning/10" : "bg-base-200"
                        }`}
                      >
                        <p className="text-sm font-bold text-warning">
                          {item.time}
                        </p>
                        <p className="mt-1 font-semibold">{item.title}</p>
                        {item.isStyling && (
                          <p className="mt-1 text-xs text-base-content/60">
                            With Brenda Rodriguez
                          </p>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOOKING OPTIONS */}

        <div>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black">Choose Your Experience</h2>
            <p className="mt-2 text-base-content/60">
              Full weekend, individual workshops, or ladies styling.
            </p>
          </div>

          <div
            role="tablist"
            className="tabs tabs-boxed mx-auto mb-8 flex max-w-2xl flex-wrap justify-center bg-base-100 p-2"
          >
            {[
              ["full", "Full Weekend"],
              ["workshops", "Workshops"],
              ["styling", "Styling Only"],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                role="tab"
                aria-selected={bookingType === value}
                onClick={() => changeBookingType(value)}
                className={`tab flex-1 ${
                  bookingType === value
                    ? "tab-active !bg-warning !text-warning-content"
                    : ""
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* FULL PASSES */}

          {bookingType === "full" && (
            <div className="grid gap-5 md:grid-cols-3">
              {passes.map((pass) => {
                const expired =
                  pass.deadline && new Date() > new Date(pass.deadline);

                const selected = selectedPass === pass.id;

                return (
                  <div
                    key={pass.id}
                    className={`card border-2 bg-base-100 shadow-xl transition ${
                      selected ? "border-warning" : "border-base-content/10"
                    }`}
                  >
                    <div className="card-body items-center text-center">
                      <h3 className="card-title">{pass.title}</h3>

                      <p className="text-sm text-base-content/60">
                        {pass.description}
                      </p>

                      <p className="my-5 text-5xl font-black text-warning">
                        ${pass.price}
                      </p>

                      {expired ? (
                        <span className="badge badge-error">Offer Ended</span>
                      ) : (
                        <span className="badge badge-success">Available</span>
                      )}

                      <button
                        type="button"
                        disabled={expired}
                        onClick={() => selectPass(pass.id)}
                        className={`btn mt-5 w-full ${
                          selected ? "btn-success" : "btn-warning"
                        }`}
                      >
                        {selected
                          ? "Selected ✓"
                          : expired
                            ? "Expired"
                            : "Select Pass"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* INDIVIDUAL WORKSHOPS */}

          {bookingType === "workshops" && (
            <div className="grid gap-3">
              <div role="alert" className="alert alert-info text-sm">
                Individual workshop prices must be configured before these
                bookings can be submitted.
              </div>

              {workshops.map((workshop) => {
                const checked = selectedWorkshops.includes(workshop.id);

                return (
                  <label
                    key={workshop.id}
                    className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-5 transition ${
                      checked
                        ? "border-warning bg-warning/10"
                        : "border-base-content/10 bg-base-100"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-warning"
                      checked={checked}
                      onChange={() =>
                        toggleSelection(workshop.id, setSelectedWorkshops)
                      }
                    />

                    <div className="flex-1">
                      <p className="font-bold">{workshop.title}</p>
                      <p className="mt-1 text-sm text-base-content/60">
                        {workshop.day}, {workshop.date}
                      </p>
                      <p className="text-sm text-warning">{workshop.time}</p>
                    </div>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        {/* LADIES STYLING */}

        <div>
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-black">Brenda's Ladies Styling</h2>
            <p className="mt-2 text-base-content/60">
              Available separately or as an add-on.
            </p>
          </div>

          <div className="mb-6 flex justify-center">
            <div className="badge badge-warning badge-lg p-4">
              ${stylingPrice} per class
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {stylingClasses.map((item) => {
              const checked = selectedStyling.includes(item.id);

              return (
                <label
                  key={item.id}
                  className={`card cursor-pointer border-2 bg-base-100 transition ${
                    checked ? "border-warning" : "border-base-content/10"
                  }`}
                >
                  <div className="card-body">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="card-title">{item.title}</h3>
                        <p className="text-sm text-base-content/60">
                          {item.instructor}
                        </p>
                      </div>

                      <input
                        type="checkbox"
                        className="checkbox checkbox-warning"
                        checked={checked}
                        onChange={() =>
                          toggleSelection(item.id, setSelectedStyling)
                        }
                      />
                    </div>

                    <p className="mt-3 text-warning">
                      {item.day}, {item.date}
                    </p>

                    <p>{item.time}</p>

                    <p className="mt-3 text-3xl font-black">${stylingPrice}</p>
                  </div>
                </label>
              );
            })}
          </div>

          <div className="mt-5 rounded-xl bg-base-100 p-5 text-sm">
            <p className="font-bold">Styling Rates</p>
            <p>Full weekend pass holders: $20/class</p>
            <p>Other workshop pass holders: $30/class</p>
            <p>Everyone else: $40/class</p>
          </div>
        </div>

        {/* BOOKING FORM */}

        <div
          ref={formRef}
          id="booking-form"
          className="mx-auto max-w-3xl scroll-mt-24"
        >
          <div className="card border border-base-content/10 bg-base-100 shadow-2xl">
            <div className="card-body gap-6 p-5 md:p-10">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-warning">
                  Registration
                </p>

                <h2 className="mt-2 text-3xl font-black">
                  Complete Your Booking
                </h2>
              </div>

              {/* SUMMARY */}

              <div className="rounded-2xl bg-base-200 p-5">
                <h3 className="mb-4 text-lg font-bold">Booking Summary</h3>

                {hasFullPass && (
                  <div className="mb-3 flex justify-between gap-3">
                    <span>{activePass.title}</span>
                    <span>${activePass.price}</span>
                  </div>
                )}

                {!hasFullPass &&
                  chosenWorkshops.map((item) => (
                    <p key={item.id} className="mb-2 text-sm">
                      • {item.title} — {item.day}
                    </p>
                  ))}

                {chosenStyling.map((item) => (
                  <div
                    key={item.id}
                    className="mb-2 flex justify-between gap-3 text-sm"
                  >
                    <span>{item.title}</span>
                    <span>${stylingPrice}</span>
                  </div>
                ))}

                <div className="divider" />

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">Total</span>

                  <span className="text-3xl font-black text-warning">
                    {total === null ? "Price Pending" : formatPrice(total)}
                  </span>
                </div>
              </div>

              {/* FORM */}

              <form className="space-y-5" onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_WEB3FORMS_ACCESS_KEY"
                />

                <input
                  type="hidden"
                  name="FormType"
                  value="Weekender Booking"
                />

                <input
                  type="hidden"
                  name="Event"
                  value="Las Vegas Bachata & Salsa Weekender"
                />

                <input
                  type="hidden"
                  name="EventDates"
                  value="November 20–22, 2026"
                />

                <input type="hidden" name="BookingType" value={bookingType} />

                <input
                  type="hidden"
                  name="Pass"
                  value={hasFullPass ? activePass.title : ""}
                />

                <input
                  type="hidden"
                  name="Workshops"
                  value={chosenWorkshops
                    .map((item) => `${item.day}: ${item.title} (${item.time})`)
                    .join(" | ")}
                />

                <input
                  type="hidden"
                  name="LadiesStyling"
                  value={chosenStyling
                    .map((item) => `${item.day}: ${item.title} (${item.time})`)
                    .join(" | ")}
                />

                <input type="hidden" name="TotalPrice" value={total ?? ""} />

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name *</span>
                    </label>

                    <input
                      type="text"
                      name="FullName"
                      required
                      autoComplete="name"
                      placeholder="Your full name"
                      className="input input-bordered w-full"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number *</span>
                    </label>

                    <input
                      type="tel"
                      name="Phone"
                      required
                      autoComplete="tel"
                      placeholder="Your phone number"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email Address *</span>
                  </label>

                  <input
                    type="email"
                    name="Email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message (Optional)</span>
                  </label>

                  <textarea
                    name="Message"
                    rows={4}
                    placeholder="Questions or special requests..."
                    className="textarea textarea-bordered w-full"
                  />
                </div>

                <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-base-200 p-4">
                  <input
                    type="checkbox"
                    name="PaymentAgreement"
                    value="Agreed"
                    required
                    className="checkbox checkbox-warning mt-1"
                  />

                  <span className="text-sm">
                    I understand that my booking is confirmed only after payment
                    has been received and verified by Freedom Dance Studio.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="btn btn-warning btn-lg w-full"
                >
                  {isSubmitting
                    ? "Submitting..."
                    : !canSubmit
                      ? "Select a Valid Booking"
                      : `Submit Booking • ${formatPrice(total)}`}
                </button>

                <p className="text-center text-xs text-base-content/60">
                  Payment instructions will be provided after your booking
                  request is received.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* LOCATION */}

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-warning">
            Event Location
          </p>

          <h3 className="mt-3 text-xl font-black">Freedom Dance Studio</h3>

          <address className="mt-2 not-italic text-base-content/60">
            3110 E Sunset Rd, Suite C
            <br />
            Las Vegas, NV 89120
          </address>
        </div>
      </div>
    </section>
  );
};

export default BachataWeekenderBooking;
