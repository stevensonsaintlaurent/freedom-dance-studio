import React, { useMemo, useRef, useState } from "react";
import useOnSudmit from "./../hooks/useOnSudmit";

const BachataIntensiveBooking = () => {
  const { onSubmit } = useOnSudmit();

  const formRef = useRef(null);

  const [selection, setSelection] = useState(null);
  const [selectedDays, setSelectedDays] = useState([]);

  // NEW: booking confirmation
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // =========================
  // PASSES
  // =========================

  const passes = [
    {
      id: "full",
      title: "Full Pass",
      subtitle: "Complete Weekend Experience",
      daysRequired: 0,
      early: 99,
      regular: 129,
      badge: "BEST VALUE",
    },
    {
      id: "two",
      title: "Two-Day Pass",
      subtitle: "Choose Any 2 Days",
      daysRequired: 2,
      early: 79,
      regular: 109,
    },
    {
      id: "one",
      title: "One-Day Pass",
      subtitle: "Choose Any 1 Day",
      daysRequired: 1,
      early: 45,
      regular: 65,
    },
  ];

  // =========================
  // SCHEDULE
  // =========================

  const schedule = [
    {
      day: "Friday",
      date: "October 2",
      time: "8:30 PM – 10:00 PM",
    },
    {
      day: "Saturday",
      date: "October 3",
      time: "8:30 PM – 10:00 PM",
    },
    {
      day: "Sunday",
      date: "October 4",
      time: "5:00 PM – 6:30 PM",
    },
  ];

  // =========================
  // PRIVATE LESSONS
  // =========================

  const privates = [
    {
      pass: "Full Pass",
      carlos: 100,
      michelle: 90,
    },
    {
      pass: "2-Day Pass",
      carlos: 120,
      michelle: 110,
    },
    {
      pass: "1-Day Pass",
      carlos: 125,
      michelle: 115,
    },
    {
      pass: "No Pass",
      carlos: 135,
      michelle: 125,
    },
  ];

  // =========================
  // HELPERS
  // =========================

  const scrollToForm = () => {
    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const selectBooking = (type, item) => {
    setSelection({
      type,
      ...item,
    });

    setSelectedDays([]);
    scrollToForm();
  };

  const handleDayChange = (day) => {
    if (!selection?.daysRequired) return;

    setSelectedDays((current) => {
      if (current.includes(day)) {
        return current.filter((selectedDay) => selectedDay !== day);
      }

      if (current.length >= selection.daysRequired) {
        return current;
      }

      return [...current, day];
    });
  };

  const daySelectionComplete = useMemo(() => {
    if (!selection) return false;

    if (!selection.daysRequired) return true;

    return selectedDays.length === selection.daysRequired;
  }, [selection, selectedDays]);

  const selectedDaysText =
    selectedDays.length > 0 ? selectedDays.join(", ") : "";

  // =========================
  // SUBMIT
  // =========================

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selection) {
      return;
    }

    if (!daySelectionComplete) {
      alert(
        `Please select ${selection.daysRequired} ${
          selection.daysRequired === 1 ? "day" : "days"
        } before submitting your booking.`,
      );

      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const confirmationData = {
      fullName: formData.get("FullName"),
      email: formData.get("Email"),
      phone: formData.get("Phone"),

      bookingType: selection.type,
      selection: selection.name,
      price: selection.price,

      selectedDays:
        selection.id === "full" ? "Friday, Saturday, Sunday" : selectedDaysText,

      privateTime: formData.get("PreferredPrivateTime") || "",
    };

    try {
      setIsSubmitting(true);

      // Send through your existing submission hook
      await onSubmit(event);

      // Save confirmation
      setBookingConfirmation(confirmationData);
      setBookingSubmitted(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Booking submission failed:", error);

      alert(
        "We couldn't submit your booking. Please try again or contact Freedom Dance Studio.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // =========================
  // NEW BOOKING
  // =========================

  const handleNewBooking = () => {
    setBookingSubmitted(false);
    setBookingConfirmation(null);
    setSelection(null);
    setSelectedDays([]);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =====================================================
  // CONFIRMATION SCREEN
  // =====================================================

  if (bookingSubmitted && bookingConfirmation) {
    return (
      <section className="min-h-screen bg-black text-white px-4 py-12 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-zinc-950 border border-yellow-500/40 rounded-3xl overflow-hidden shadow-2xl">
            {/* SUCCESS HEADER */}

            <div className="bg-yellow-500 text-black px-6 py-10 md:py-12 text-center">
              <div className="w-20 h-20 mx-auto bg-black text-yellow-400 rounded-full flex items-center justify-center text-4xl font-black">
                ✓
              </div>

              <p className="uppercase tracking-[0.25em] text-xs font-black mt-6">
                Freedom Dance Studio
              </p>

              <h1 className="text-3xl md:text-4xl font-black mt-2">
                Booking Request Received!
              </h1>

              <p className="mt-3 font-semibold">
                Thank you, {bookingConfirmation.fullName}.
              </p>
            </div>

            <div className="p-6 md:p-10">
              {/* EVENT */}

              <div className="text-center">
                <p className="text-gray-400">You registered for</p>

                <h2 className="text-2xl md:text-3xl font-black mt-2">
                  Bachata Intensive Vol. 5
                </h2>

                <p className="text-yellow-400 font-semibold mt-2">
                  Michelle 🇺🇸 & Carlos 🇪🇸
                </p>

                <p className="text-gray-400 mt-1">October 2–4, 2026</p>
              </div>

              {/* BOOKING DETAILS */}

              <div className="mt-8">
                <p className="text-xs text-yellow-400 font-bold uppercase tracking-[0.2em] mb-3">
                  Your Booking
                </p>

                <div className="bg-black border border-zinc-800 rounded-2xl overflow-hidden divide-y divide-zinc-800">
                  <div className="flex justify-between gap-5 p-4">
                    <span className="text-gray-500">Name</span>

                    <span className="font-semibold text-right">
                      {bookingConfirmation.fullName}
                    </span>
                  </div>

                  <div className="flex justify-between gap-5 p-4">
                    <span className="text-gray-500">Booking</span>

                    <span className="font-bold text-right">
                      {bookingConfirmation.selection}
                    </span>
                  </div>

                  <div className="flex justify-between gap-5 p-4">
                    <span className="text-gray-500">Type</span>

                    <span className="font-semibold text-right">
                      {bookingConfirmation.bookingType}
                    </span>
                  </div>

                  {bookingConfirmation.selectedDays && (
                    <div className="flex justify-between gap-5 p-4">
                      <span className="text-gray-500">Selected Days</span>

                      <span className="font-semibold text-right">
                        {bookingConfirmation.selectedDays}
                      </span>
                    </div>
                  )}

                  {bookingConfirmation.privateTime && (
                    <div className="flex justify-between gap-5 p-4">
                      <span className="text-gray-500">
                        Preferred Private Time
                      </span>

                      <span className="font-semibold text-right">
                        {bookingConfirmation.privateTime}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between items-center gap-5 p-4">
                    <span className="text-gray-500">Price</span>

                    <span className="text-3xl font-black text-yellow-400">
                      ${bookingConfirmation.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* STATUS */}

              <div className="mt-6 bg-yellow-500/10 border border-yellow-500/40 rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />

                  <h3 className="text-yellow-400 font-black">
                    PAYMENT PENDING
                  </h3>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mt-3">
                  We received your booking request. Your spot is officially
                  confirmed only after your payment has been received and
                  verified by Freedom Dance Studio.
                </p>
              </div>

              {/* NEXT STEP */}

              <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
                  What's Next?
                </p>

                <h3 className="text-xl font-black mt-2">
                  Complete Your Payment
                </h3>

                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  Freedom Dance Studio will provide payment instructions for
                  your registration. Once your payment is received and verified,
                  your registration will be officially confirmed.
                </p>
              </div>

              {/* CONTACT */}

              <div className="mt-8 text-center">
                <p className="text-gray-500 text-sm">
                  Booking request submitted for
                </p>

                <p className="font-bold mt-1">{bookingConfirmation.email}</p>

                <p className="text-gray-500 text-sm mt-1">
                  {bookingConfirmation.phone}
                </p>
              </div>

              {/* LOCATION */}

              <div className="mt-8 border-t border-zinc-800 pt-8 text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-yellow-400 font-bold">
                  Event Location
                </p>

                <h3 className="font-black text-xl mt-3">
                  Freedom Dance Studio
                </h3>

                <address className="not-italic text-gray-400 mt-2 leading-relaxed">
                  3110 E. Sunset Rd., Ste. C
                  <br />
                  Las Vegas, NV 89120
                </address>
              </div>

              {/* BUTTON */}

              <button
                type="button"
                onClick={handleNewBooking}
                className="w-full mt-8 border border-zinc-700 hover:border-yellow-500 hover:text-yellow-400 py-4 rounded-xl font-black transition"
              >
                MAKE ANOTHER BOOKING
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // =====================================================
  // MAIN BOOKING PAGE
  // =====================================================

  return (
    <section className="min-h-screen bg-black text-white">
      {/* HERO */}

      <div className="relative overflow-hidden border-b border-yellow-500/20">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 via-transparent to-black pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 md:py-20 text-center">
          <p className="text-yellow-400 text-xs sm:text-sm font-bold tracking-[0.25em] sm:tracking-[0.4em] uppercase">
            Freedom Dance Studio Presents
          </p>

          <h1 className="mt-5 text-5xl sm:text-6xl md:text-8xl font-black tracking-tight">
            BACHATA
          </h1>

          <h2 className="mt-1 text-3xl sm:text-5xl md:text-6xl font-bold italic text-red-500">
            Intensive Vol. 5
          </h2>

          <div className="mt-8">
            <p className="text-2xl md:text-3xl font-semibold">
              Michelle 🇺🇸 <span className="text-yellow-400">&</span> Carlos 🇪🇸
            </p>

            <p className="mt-3 text-lg md:text-xl text-gray-300">
              October 2–4, 2026
            </p>

            <p className="mt-1 text-gray-500">
              Freedom Dance Studio • Las Vegas
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* SCHEDULE */}

        <div className="mb-20">
          <div className="text-center mb-8">
            <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm">
              Weekend Schedule
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Three Days of Training
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {schedule.map((item, index) => (
              <div
                key={item.day}
                className="relative bg-zinc-950 border border-zinc-800 hover:border-yellow-500/70 transition rounded-2xl p-7 text-center"
              >
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-yellow-500 text-black flex items-center justify-center font-black">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold">{item.day}</h3>

                <p className="text-yellow-400 font-semibold mt-1">
                  {item.date}
                </p>

                <div className="w-10 h-px bg-zinc-700 mx-auto my-4" />

                <p className="font-medium">{item.time}</p>

                <p className="text-sm text-gray-500 mt-2">Bachata Intensive</p>
              </div>
            ))}
          </div>
        </div>

        {/* PASSES */}

        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm">
              Registration
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Choose Your Pass
            </h2>

            <p className="text-gray-400 mt-3">
              Early Bird pricing available until October 1 at 11:59 PM.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {passes.map((pass) => (
              <div
                key={pass.id}
                className={`relative flex flex-col rounded-3xl p-7 md:p-8 transition ${
                  pass.id === "full"
                    ? "bg-zinc-900 border-2 border-yellow-500 lg:-translate-y-3"
                    : "bg-zinc-950 border border-zinc-800 hover:border-yellow-500/50"
                }`}
              >
                {pass.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-black tracking-wider px-4 py-1.5 rounded-full">
                    {pass.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-2xl font-bold">{pass.title}</h3>

                  <p className="text-gray-400 mt-1">{pass.subtitle}</p>
                </div>

                <div className="my-8">
                  <p className="text-xs font-bold tracking-[0.2em] text-yellow-400 uppercase">
                    Early Bird
                  </p>

                  <div className="flex items-end justify-center mt-2">
                    <span className="text-2xl font-bold mb-2">$</span>

                    <span className="text-6xl font-black">{pass.early}</span>
                  </div>

                  <p className="text-gray-500 mt-3">
                    Regular price:{" "}
                    <span className="line-through">${pass.regular}</span>
                  </p>
                </div>

                <div className="mt-auto">
                  <button
                    type="button"
                    onClick={() =>
                      selectBooking("Intensive Pass", {
                        id: pass.id,
                        name: pass.title,
                        price: pass.early,
                        regularPrice: pass.regular,
                        daysRequired: pass.daysRequired,
                      })
                    }
                    className={`w-full py-4 rounded-xl font-black tracking-wide transition ${
                      pass.id === "full"
                        ? "bg-yellow-500 hover:bg-yellow-400 text-black"
                        : "bg-white hover:bg-yellow-500 text-black"
                    }`}
                  >
                    SELECT PASS
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INSTRUCTOR CLASS */}

        <div className="mb-20">
          <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900 to-black border-2 border-yellow-500 rounded-3xl p-7 md:p-12">
            <div className="absolute top-0 right-0 w-52 h-52 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-3xl mx-auto text-center">
              <span className="inline-block bg-yellow-500 text-black px-4 py-1.5 rounded-full text-xs font-black tracking-wider">
                VEGAS INSTRUCTORS ONLY
              </span>

              <h2 className="text-3xl md:text-5xl font-black mt-6">
                Instructor Bachata Class
              </h2>

              <p className="text-xl text-yellow-400 mt-3">Michelle & Carlos</p>

              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-8 mt-6 text-gray-300">
                <p>Saturday, October 3</p>

                <p className="hidden sm:block">•</p>

                <p>6:30 PM – 8:00 PM</p>
              </div>

              <p className="text-6xl font-black mt-8">$60</p>

              <p className="text-gray-400 mt-3">
                Limited availability • Advance registration required
              </p>

              <button
                type="button"
                onClick={() =>
                  selectBooking("Instructor Class", {
                    name: "Instructor Bachata Class • Michelle & Carlos",
                    price: 60,
                    daysRequired: 0,
                  })
                }
                className="w-full sm:w-auto bg-red-600 hover:bg-red-500 transition px-10 py-4 rounded-xl font-black mt-8"
              >
                BOOK INSTRUCTOR CLASS
              </button>
            </div>
          </div>
        </div>

        {/* PRIVATE LESSONS */}

        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-yellow-400 font-bold uppercase tracking-widest text-sm">
              One-on-One Training
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Private Lesson Rates
            </h2>

            <p className="text-gray-400 mt-3">
              Train privately with Michelle or Carlos during the weekend.
            </p>
          </div>

          <div className="overflow-hidden border border-zinc-800 rounded-2xl">
            <div className="hidden md:grid grid-cols-3 bg-zinc-900 px-6 py-4 font-bold">
              <p>Pass Type</p>
              <p className="text-center">Michelle</p>
              <p className="text-center">Carlos</p>
            </div>

            {privates.map((rate) => (
              <div
                key={rate.pass}
                className="grid md:grid-cols-3 gap-4 items-center border-t first:border-t-0 md:first:border-t border-zinc-800 p-5 md:px-6"
              >
                <div>
                  <p className="text-xs text-gray-500 md:hidden">PASS TYPE</p>

                  <h3 className="font-bold text-lg text-yellow-400">
                    {rate.pass}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    selectBooking("Private Lesson", {
                      name: `Michelle Private Lesson • ${rate.pass}`,
                      price: rate.michelle,
                      daysRequired: 0,
                    })
                  }
                  className="bg-zinc-900 hover:bg-yellow-500 hover:text-black transition rounded-xl p-4 text-left md:text-center"
                >
                  <span className="text-xs text-gray-400 md:hidden">
                    MICHELLE
                  </span>

                  <span className="block text-2xl font-black">
                    ${rate.michelle}
                    <span className="text-sm font-normal">/hr</span>
                  </span>

                  <span className="text-xs">Select</span>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    selectBooking("Private Lesson", {
                      name: `Carlos Private Lesson • ${rate.pass}`,
                      price: rate.carlos,
                      daysRequired: 0,
                    })
                  }
                  className="bg-zinc-900 hover:bg-yellow-500 hover:text-black transition rounded-xl p-4 text-left md:text-center"
                >
                  <span className="text-xs text-gray-400 md:hidden">
                    CARLOS
                  </span>

                  <span className="block text-2xl font-black">
                    ${rate.carlos}
                    <span className="text-sm font-normal">/hr</span>
                  </span>

                  <span className="text-xs">Select</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-5 bg-red-950/40 border border-red-700/60 rounded-xl p-5 text-center">
            <p className="text-sm md:text-base text-red-100">
              <strong>Studio Fee:</strong> Private lessons held at Freedom Dance
              Studio require an additional{" "}
              <strong>$15 per hour studio rental fee.</strong>
            </p>
          </div>
        </div>

        {/* BOOKING FORM */}

        <div
          ref={formRef}
          id="booking-form"
          className="scroll-mt-24 max-w-3xl mx-auto"
        >
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden">
            <div className="p-7 md:p-10 border-b border-zinc-800">
              <p className="text-yellow-400 font-bold uppercase tracking-widest text-xs">
                Registration Form
              </p>

              <h2 className="text-3xl md:text-4xl font-black mt-2">
                Complete Your Booking
              </h2>

              <p className="text-gray-400 mt-2">
                Select your pass, class, or private lesson before submitting.
              </p>
            </div>

            <div className="p-7 md:p-10">
              {/* SELECTED ITEM */}

              {selection ? (
                <div className="bg-black border border-yellow-500/50 rounded-2xl p-5 mb-7">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        Your Selection
                      </p>

                      <p className="text-xl font-bold mt-1">{selection.name}</p>

                      <p className="text-sm text-gray-400 mt-1">
                        {selection.type}
                      </p>
                    </div>

                    <p className="text-4xl font-black text-yellow-400">
                      ${selection.price}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelection(null);
                      setSelectedDays([]);
                    }}
                    className="text-sm text-red-400 hover:text-red-300 mt-4"
                  >
                    Change selection
                  </button>
                </div>
              ) : (
                <div className="bg-black border border-zinc-800 rounded-2xl p-5 mb-7">
                  <p className="text-gray-400">
                    No booking option selected yet. Choose an option above to
                    continue.
                  </p>
                </div>
              )}

              {/* DAY SELECTION */}

              {selection?.daysRequired > 0 && (
                <div className="mb-7">
                  <label className="block font-bold mb-3">
                    Choose {selection.daysRequired}{" "}
                    {selection.daysRequired === 1 ? "Day" : "Days"}
                    <span className="text-red-500"> *</span>
                  </label>

                  <div className="grid sm:grid-cols-3 gap-3">
                    {schedule.map((item) => {
                      const selected = selectedDays.includes(item.day);

                      return (
                        <button
                          key={item.day}
                          type="button"
                          onClick={() => handleDayChange(item.day)}
                          className={`rounded-xl border p-4 text-left transition ${
                            selected
                              ? "bg-yellow-500 border-yellow-500 text-black"
                              : "bg-black border-zinc-700 hover:border-yellow-500"
                          }`}
                        >
                          <span className="font-bold block">{item.day}</span>

                          <span
                            className={`text-sm ${
                              selected ? "text-black/70" : "text-gray-400"
                            }`}
                          >
                            {item.date}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <p className="text-sm text-gray-500 mt-3">
                    {selectedDays.length} of {selection.daysRequired} selected
                  </p>
                </div>
              )}

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
                  value="Bachata Intensive Booking"
                />

                <input
                  type="hidden"
                  name="Event"
                  value="Bachata Intensive Vol. 5"
                />

                <input
                  type="hidden"
                  name="EventDates"
                  value="October 2–4, 2026"
                />

                <input type="hidden" name="Artists" value="Michelle & Carlos" />

                <input
                  type="hidden"
                  name="BookingType"
                  value={selection?.type || ""}
                />

                <input
                  type="hidden"
                  name="Selection"
                  value={selection?.name || ""}
                />

                <input
                  type="hidden"
                  name="SelectedDays"
                  value={
                    selection?.id === "full"
                      ? "Friday, Saturday, Sunday"
                      : selectedDaysText
                  }
                />

                <input
                  type="hidden"
                  name="Price"
                  value={selection?.price || ""}
                />

                {/* NAME + PHONE */}

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="FullName"
                      className="block text-sm font-semibold mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="FullName"
                      type="text"
                      name="FullName"
                      autoComplete="name"
                      required
                      placeholder="Your full name"
                      className="w-full bg-black border border-zinc-700 focus:border-yellow-500 focus:outline-none rounded-xl p-4 transition"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="Phone"
                      className="block text-sm font-semibold mb-2"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="Phone"
                      type="tel"
                      name="Phone"
                      autoComplete="tel"
                      required
                      placeholder="(702) 555-0000"
                      className="w-full bg-black border border-zinc-700 focus:border-yellow-500 focus:outline-none rounded-xl p-4 transition"
                    />
                  </div>
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="Email"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="Email"
                    type="email"
                    name="Email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-black border border-zinc-700 focus:border-yellow-500 focus:outline-none rounded-xl p-4 transition"
                  />
                </div>

                {/* PRIVATE TIME */}

                {selection?.type === "Private Lesson" && (
                  <div>
                    <label
                      htmlFor="PreferredPrivateTime"
                      className="block text-sm font-semibold mb-2"
                    >
                      Preferred Private Lesson Date & Time
                    </label>

                    <input
                      id="PreferredPrivateTime"
                      type="text"
                      name="PreferredPrivateTime"
                      placeholder="Example: Friday Oct. 2 around 4:00 PM"
                      className="w-full bg-black border border-zinc-700 focus:border-yellow-500 focus:outline-none rounded-xl p-4 transition"
                    />
                  </div>
                )}

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="Message"
                    className="block text-sm font-semibold mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="Message"
                    name="Message"
                    placeholder="Questions, requests, or anything we should know..."
                    rows={4}
                    className="w-full bg-black border border-zinc-700 focus:border-yellow-500 focus:outline-none rounded-xl p-4 resize-none transition"
                  />
                </div>

                {/* AGREEMENT */}

                <label className="flex items-start gap-3 bg-black border border-zinc-800 rounded-xl p-4 cursor-pointer">
                  <input
                    type="checkbox"
                    name="PaymentAgreement"
                    value="Agreed"
                    required
                    className="mt-1 accent-yellow-500 w-4 h-4"
                  />

                  <span className="text-sm text-gray-300 leading-relaxed">
                    I understand that submitting this form does not guarantee my
                    spot. My registration is confirmed only after payment is
                    received and verified.
                  </span>
                </label>

                {/* SUBMIT */}

                <button
                  disabled={!selection || !daySelectionComplete || isSubmitting}
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-400 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed text-black font-black text-lg py-4 rounded-xl transition"
                >
                  {isSubmitting
                    ? "SUBMITTING BOOKING..."
                    : !selection
                      ? "SELECT A BOOKING OPTION FIRST"
                      : !daySelectionComplete
                        ? `SELECT ${selection.daysRequired} ${
                            selection.daysRequired === 1 ? "DAY" : "DAYS"
                          }`
                        : `SUBMIT BOOKING • $${selection.price}`}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  You will receive payment instructions after your booking
                  request is submitted.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* LOCATION */}

        <div className="mt-16 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-yellow-400 font-bold">
            Location
          </p>

          <h3 className="font-black text-xl mt-3">Freedom Dance Studio</h3>

          <address className="not-italic text-gray-400 mt-2 leading-relaxed">
            3110 E. Sunset Rd., Ste. C
            <br />
            Las Vegas, NV 89120
          </address>
        </div>
      </div>
    </section>
  );
};

export default BachataIntensiveBooking;
