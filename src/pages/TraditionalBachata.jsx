import { useState } from "react";
import ana from "../assets/instructors/ana.jpeg";

const WHATSAPP_NUMBER = "17029856060";

const workshops = [
  {
    id: "both",
    title: "Full Workshop Pass",
    time: "3:00 PM – 5:00 PM",
    duration: "2 Hours",
    description: "Fundamentals, basic movements & partner work.",
    price: 35,
    popular: true,
  },
  {
    id: "fundamentals",
    title: "Fundamentals & Basic Movements",
    time: "3:00 PM – 4:00 PM",
    duration: "1 Hour",
    description: "Learn traditional Bachata foundations.",
    price: 20,
    popular: false,
  },
  {
    id: "partner-work",
    title: "Partner Work",
    time: "4:00 PM – 5:00 PM",
    duration: "1 Hour",
    description: "Improve your partner dancing and connection.",
    price: 20,
    popular: false,
  },
];

export default function TraditionalBachata() {
  const [selectedWorkshop, setSelectedWorkshop] = useState("both");

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    participants: 1,
    experience: "Beginner",
    notes: "",
  });

  const workshop = workshops.find((item) => item.id === selectedWorkshop);

  const total = workshop.price * Number(formData.participants);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "participants" ? Number(value) : value,
    }));
  };

  const handleBooking = (e) => {
    e.preventDefault();

    const message = [
      "Hi Anya! 👋",
      "",
      "I would like to reserve my spot for your Traditional Bachata Workshop.",
      "",
      "💃 WORKSHOP RESERVATION",
      "━━━━━━━━━━━━━━━━━━",
      "",
      "📅 Date: Sunday, December 13, 2026",
      `🎟 Workshop: ${workshop.title}`,
      `⏰ Time: ${workshop.time}`,
      `⌛ Duration: ${workshop.duration}`,
      "",
      "👤 CUSTOMER INFORMATION",
      `Name: ${formData.fullName.trim()}`,
      `Phone: ${formData.phone.trim()}`,
      `Email: ${formData.email.trim()}`,
      `Number of dancers: ${formData.participants}`,
      `Dance experience: ${formData.experience}`,
      "",
      "💰 RESERVATION SUMMARY",
      `Price per person: $${workshop.price}`,
      `Total: $${total}`,
      "",
      "📍 Freedom Dance Studio",
      "3110 E Sunset Rd, Suite C",
      "Las Vegas, NV 89120",
      "",
      `Additional notes: ${formData.notes.trim() || "None"}`,
      "",
      "Please confirm my reservation and let me know how to complete my payment.",
      "",
      "Thank you!",
    ].join("\n");

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message,
    )}`;

    window.location.href = whatsappURL;
  };

  return (
    <section className="min-h-screen bg-base-200 px-4 py-12 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <span className="badge badge-warning mb-5 p-4 font-bold">
            SPECIAL DANCE WORKSHOP
          </span>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Traditional <span className="text-primary">Bachata</span>
          </h1>

          <h2 className="mt-3 text-2xl font-semibold">
            Two-Hour Workshop with Anya
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-base-content/70">
            Discover the roots of Dominican Bachata, develop your fundamentals,
            improve your partner connection, and experience the joy of
            traditional Bachata.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            {/* Event Flyer */}
            <div className="overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl">
              <img
                src={ana}
                alt="Traditional Bachata Workshop with Anya"
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Event Information */}
            <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-lg sm:p-8">
              <h3 className="mb-6 text-2xl font-bold">Workshop Information</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📅</span>

                  <div>
                    <p className="font-bold">Date</p>
                    <p className="text-base-content/70">
                      Sunday, December 13, 2026
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">⏰</span>

                  <div>
                    <p className="font-bold">Time</p>
                    <p className="text-base-content/70">3:00 PM – 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">💃</span>

                  <div>
                    <p className="font-bold">Dance Level</p>
                    <p className="text-base-content/70">Beginner Friendly</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>

                  <div>
                    <p className="font-bold">Freedom Dance Studio</p>

                    <p className="text-base-content/70">
                      3110 E Sunset Rd, Suite C
                    </p>

                    <p className="text-base-content/70">Las Vegas, NV 89120</p>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=3110+E+Sunset+Rd+Suite+C+Las+Vegas+NV+89120"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link link-primary mt-2 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Instructor */}
            <div className="rounded-3xl bg-base-100 p-6 text-center shadow-lg">
              <h3 className="text-xl font-bold">Have Questions?</h3>

              <p className="my-3 text-base-content/70">
                Contact Anya directly for more information about the workshop.
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full border-none bg-[#25D366] text-white hover:bg-[#128C7E]"
              >
                Contact Anya on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — BOOKING FORM */}
          <div className="rounded-3xl border border-base-300 bg-base-100 p-5 shadow-xl sm:p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-black">Reserve Your Spot</h2>

              <p className="mt-2 text-base-content/70">
                Choose your workshop and send your reservation directly to Anya.
              </p>
            </div>

            <form onSubmit={handleBooking} className="space-y-8">
              {/* Workshop Selection */}
              <fieldset>
                <legend className="mb-4 text-lg font-bold">
                  1. Choose Your Workshop
                </legend>

                <div className="space-y-4">
                  {workshops.map((item) => (
                    <label
                      key={item.id}
                      className={`relative block cursor-pointer rounded-2xl border-2 p-5 transition-all duration-200 ${
                        selectedWorkshop === item.id
                          ? "border-primary bg-primary/5"
                          : "border-base-300 hover:border-primary/50"
                      }`}
                    >
                      {item.popular && (
                        <span className="badge badge-warning absolute -top-3 right-4 font-bold">
                          BEST VALUE
                        </span>
                      )}

                      <div className="flex items-start gap-3">
                        <input
                          type="radio"
                          name="workshop"
                          value={item.id}
                          checked={selectedWorkshop === item.id}
                          onChange={() => setSelectedWorkshop(item.id)}
                          className="radio radio-primary mt-1"
                        />

                        <div className="flex-1">
                          <h3 className="text-lg font-bold">{item.title}</h3>

                          <p className="mt-1 text-sm font-medium text-primary">
                            {item.time}
                          </p>

                          <p className="mt-2 text-sm text-base-content/70">
                            {item.description}
                          </p>

                          {item.popular && (
                            <p className="mt-2 text-sm font-semibold text-success">
                              Early sign-up — Save $5 per person
                            </p>
                          )}
                        </div>

                        <div className="shrink-0 text-right">
                          <p className="text-3xl font-black">${item.price}</p>

                          <p className="text-xs text-base-content/60">
                            per person
                          </p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Personal Information */}
              <fieldset className="space-y-4">
                <legend className="mb-4 text-lg font-bold">
                  2. Personal Information
                </legend>

                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Full Name *
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(702) 000-0000"
                    autoComplete="tel"
                    required
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="participants"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Number of Dancers
                    </label>

                    <select
                      id="participants"
                      name="participants"
                      value={formData.participants}
                      onChange={handleChange}
                      className="select select-bordered w-full"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                        <option key={number} value={number}>
                          {number} {number === 1 ? "Dancer" : "Dancers"}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="experience"
                      className="mb-2 block text-sm font-semibold"
                    >
                      Dance Experience
                    </label>

                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="select select-bordered w-full"
                    >
                      <option>Complete Beginner</option>
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="notes"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Additional Notes (Optional)
                  </label>

                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Questions or special requests..."
                    className="textarea textarea-bordered min-h-24 w-full"
                  />
                </div>
              </fieldset>

              {/* Reservation Summary */}
              <div className="rounded-2xl border border-base-300 bg-base-200 p-6">
                <h3 className="mb-5 text-lg font-bold">
                  3. Reservation Summary
                </h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-4">
                    <span className="text-base-content/70">Workshop</span>

                    <span className="text-right font-semibold">
                      {workshop.title}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-base-content/70">
                      Price per person
                    </span>
                    <span>${workshop.price.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-base-content/70">
                      Number of dancers
                    </span>
                    <span>{formData.participants}</span>
                  </div>

                  {selectedWorkshop === "both" && (
                    <div className="flex justify-between font-semibold text-success">
                      <span>Your savings</span>
                      <span>${(5 * formData.participants).toFixed(2)}</span>
                    </div>
                  )}

                  <div className="divider"></div>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">Total</span>

                    <span className="text-4xl font-black text-primary">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="btn btn-lg w-full border-none bg-[#25D366] text-white shadow-lg transition-all hover:bg-[#128C7E]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.793.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.377l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.9 9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.881-9.885 9.881M20.464 3.488A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.479-8.413Z" />
                  </svg>
                  Book via WhatsApp
                </button>

                <p className="mt-4 text-center text-xs leading-relaxed text-base-content/60">
                  You will be redirected to WhatsApp with your reservation
                  details. Send the message to Anya to request confirmation and
                  payment instructions. Your information will be shared with
                  Anya.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
