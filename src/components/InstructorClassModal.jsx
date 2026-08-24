import { useState } from "react";
import {
  CalendarDays,
  Clock,
  Users,
  Phone,
  ArrowRight,
  UserRound,
  X,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { BsInstagram } from "react-icons/bs";
import useOnSudmit from "../hooks/useOnSudmit";

export default function InstructorClassModal({ danceClass, onClose }) {
  const [showBooking, setShowBooking] = useState(false);
  const { onSubmit, submitted } = useOnSudmit();

  if (!danceClass) return null;

  return (
    <dialog
      open
      className="modal modal-open items-start sm:items-center overflow-y-auto"
    >
      {/* ================= BACKDROP ================= */}
      <div className="fixed inset-0 bg-black/60" onClick={onClose} />

      {/* ================= MODAL BOX ================= */}
      <div
        className="
          relative
          z-10
          w-11/12
          max-w-4xl
          my-6
          sm:my-10
          max-h-[calc(100vh-3rem)]
          overflow-y-auto
          rounded-2xl
          bg-base-100
          shadow-2xl
        "
      >
        {/* ================= IMAGE ================= */}
        <div className="relative">
          <img
            src={danceClass.image}
            alt={danceClass.instructor}
            className={`w-full h-60 sm:h-80 ${
              danceClass.imageFit === "contain"
                ? "object-contain bg-neutral"
                : "object-cover"
            }`}
          />

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="
              btn
              btn-circle
              btn-sm
              absolute
              top-4
              right-4
              bg-black/70
              text-white
              border-none
              hover:bg-black/90
              z-20
            "
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* Instructor Name */}
          <div className="absolute bottom-4 left-5 right-5">
            <div className="badge badge-warning mb-2">
              Independent Instructor
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white drop-shadow-lg">
              {danceClass.instructor}
            </h2>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="p-5 sm:p-7">
          {/* Instructor */}
          <div className="flex items-center gap-3 mb-6">
            <div className="avatar placeholder">
              <div className="bg-primary text-primary-content rounded-full w-12">
                <UserRound size={22} />
              </div>
            </div>

            <div>
              <p className="text-sm text-base-content/60">
                Independent Instructor
              </p>

              <h3 className="font-bold text-lg">{danceClass.instructor}</h3>
            </div>
          </div>

          {/* ================= CLASS INFO ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
            <div className="p-4 rounded-xl bg-base-200">
              <CalendarDays size={20} className="text-primary mb-2" />

              <p className="text-sm text-base-content/60">Schedule</p>

              <p className="font-semibold">{danceClass.date}</p>
            </div>

            <div className="p-4 rounded-xl bg-base-200">
              <Clock size={20} className="text-primary mb-2" />

              <p className="text-sm text-base-content/60">Time</p>

              <p className="font-semibold">{danceClass.time}</p>
            </div>

            <div className="p-4 rounded-xl bg-base-200">
              <Users size={20} className="text-primary mb-2" />

              <p className="text-sm text-base-content/60">Style</p>

              <p className="font-semibold">{danceClass.category}</p>
            </div>
          </div>

          {/* ================= BIO ================= */}
          <div className="mb-7">
            <h3 className="text-2xl font-bold mb-3">
              About {danceClass.instructor}
            </h3>

            <p className="text-base-content/70 leading-relaxed">
              {danceClass.bio ||
                `${danceClass.instructor} is an independent instructor hosting classes at Freedom Dance Studio.`}
            </p>
          </div>

          {/* ================= CLASS DESCRIPTION ================= */}
          <div className="mb-7">
            <h3 className="text-2xl font-bold mb-3">About This Class</h3>

            <p className="text-base-content/70 leading-relaxed">
              {danceClass.description}
            </p>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="p-4 sm:p-5 rounded-2xl bg-base-200 mb-7">
            <h3 className="font-bold text-lg mb-4">
              Contact {danceClass.instructor}
            </h3>

            <div className="flex flex-wrap gap-3">
              {danceClass.phone && (
                <a
                  href={`tel:${danceClass.phone}`}
                  className="btn btn-outline gap-2"
                >
                  <Phone size={18} />
                  Call Instructor
                </a>
              )}

              {danceClass.instagram && (
                <a
                  href={
                    danceClass.instagram.startsWith("http")
                      ? danceClass.instagram
                      : `https://instagram.com/${danceClass.instagram}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline gap-2"
                >
                  <BsInstagram size={18} />
                  Instagram
                </a>
              )}
            </div>
          </div>

          {/* ================= BOOKING BUTTON ================= */}
          {!showBooking && !submitted && (
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setShowBooking(true)}
                className="btn btn-primary flex-1 gap-2"
              >
                Book This Class
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                onClick={onClose}
                className="btn btn-outline"
              >
                Close
              </button>
            </div>
          )}

          {/* ================= BOOKING FORM ================= */}
          {showBooking && !submitted && (
            <div className="border border-base-300 rounded-2xl p-5 sm:p-6">
              <div className="mb-6">
                <div className="badge badge-primary mb-3">Class Booking</div>

                <h3 className="text-2xl font-bold">Book {danceClass.title}</h3>

                <p className="text-base-content/60 mt-1">
                  with {danceClass.instructor}
                </p>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Full Name</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Phone Number
                    </span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                {/* Info data in my data form submite but not in client  */}
                <input
                  type="text"
                  name="instructor"
                  hidden
                  value={danceClass.instructor}
                  required
                />
                <input
                  type="text"
                  name="day"
                  hidden
                  value={danceClass.date}
                  required
                />
                <input
                  type="text"
                  name="time"
                  hidden
                  value={danceClass.time}
                  required
                />

                {/* Message */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Message</span>
                  </label>

                  <textarea
                    name="message"
                    rows="4"
                    className="textarea textarea-bordered w-full"
                    placeholder="Anything you'd like the instructor to know?"
                  />
                </div>

                {/* Selected Class */}
                <div className="alert alert-info">
                  <div>
                    <p className="font-bold">{danceClass.title}</p>

                    <p className="text-sm">{danceClass.date}</p>

                    <p className="text-sm">{danceClass.time}</p>

                    <p className="text-sm">
                      Instructor: {danceClass.instructor}
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary flex-1 gap-2"
                  >
                    Submit Booking
                    <CheckCircle2 size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowBooking(false)}
                    className="btn btn-outline"
                  >
                    Back
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ================= SUCCESS ================= */}
          {submitted && (
            <div className="text-center py-8">
              <div className="flex justify-center mb-5">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center">
                  <CheckCircle2 size={36} className="text-success" />
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold">
                Booking Request Sent!
              </h3>

              <p className="text-base-content/70 mt-3 max-w-lg mx-auto">
                Thank you for your interest in{" "}
                <strong>{danceClass.title}</strong>. Please contact{" "}
                <strong>{danceClass.instructor}</strong> directly for
                confirmation, pricing, and registration details.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="btn btn-primary mt-6"
              >
                Done
              </button>
            </div>
          )}

          {/* ================= NOTICE ================= */}
          <div className="alert alert-warning mt-6">
            <Sparkles size={20} className="shrink-0" />

            <span className="text-sm">
              This is an independent class hosted at Freedom Dance Studio. The
              instructor manages registration, pricing, and class-specific
              information.
            </span>
          </div>
        </div>
      </div>
    </dialog>
  );
}
