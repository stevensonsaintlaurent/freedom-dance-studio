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

  const [agreements, setAgreements] = useState({
    terms: false,
    liability: false,
    media: false,
  });

  const { onSubmit, submitted } = useOnSudmit();

  if (!danceClass) return null;

  const allAgreementsAccepted =
    agreements.terms && agreements.liability && agreements.media;

  const handleAgreementChange = (name) => {
    setAgreements((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleSubmit = async (event) => {
    if (!allAgreementsAccepted) {
      event.preventDefault();
      return;
    }

    await onSubmit(event);
  };

  return (
    <dialog
      open
      className="modal modal-open items-start overflow-y-auto sm:items-center"
    >
      {/* Backdrop */}
      <div
        className="modal-backdrop fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="
          relative
          z-10
          my-4
          flex
          w-[calc(100%-1rem)]
          max-w-6xl
          flex-col
          overflow-hidden
          rounded-3xl
          bg-base-100
          shadow-2xl
          sm:my-8
          sm:w-11/12
          lg:max-h-[90vh]
          lg:flex-row
        "
      >
        {/* =========================================================
            LEFT SIDE — INSTRUCTOR IMAGE
        ========================================================== */}
        <div
          className="
            relative
            h-[320px]
            shrink-0
            overflow-hidden
            bg-neutral
            sm:h-[420px]
            lg:h-auto
            lg:min-h-[700px]
            lg:w-[45%]
            xl:w-[42%]
          "
        >
          {/* Blurred background */}
          <div
            className="
              absolute
              inset-0
              scale-110
              bg-cover
              bg-center
              blur-2xl
            "
            style={{
              backgroundImage: `url("${danceClass.image}")`,
            }}
          />

          {/* Dark background overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Main instructor image */}
          <img
            src={danceClass.image}
            alt={`${danceClass.instructor} - ${danceClass.title}`}
            className="
              absolute
              inset-0
              z-10
              h-full
              w-full
              object-cover
              object-center
            "
            onError={(e) => {
              console.error(
                "Instructor image failed to load:",
                danceClass.image,
              );

              e.currentTarget.style.display = "none";
            }}
          />

          {/* Gradient */}
          <div
            className="
              absolute
              inset-0
              z-20
              bg-gradient-to-t
              from-black/95
              via-black/25
              to-transparent
            "
          />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="
              btn
              btn-circle
              btn-sm
              absolute
              right-4
              top-4
              z-40
              border-none
              bg-black/70
              text-white
              shadow-xl
              backdrop-blur-sm
              hover:bg-black/90
            "
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* Instructor information over image */}
          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              z-30
              p-5
              text-white
              sm:p-7
              lg:p-8
            "
          >
            <div
              className="
                mb-3
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/20
                bg-black/50
                px-3
                py-1.5
                text-xs
                font-bold
                backdrop-blur-md
              "
            >
              <Sparkles size={13} />
              Independent Instructor
            </div>

            <h2
              className="
                text-3xl
                font-black
                tracking-tight
                drop-shadow-lg
                sm:text-4xl
                lg:text-5xl
              "
            >
              {danceClass.instructor}
            </h2>

            <p className="mt-1 text-base font-semibold text-white/80 sm:text-lg">
              {danceClass.title}
            </p>
          </div>
        </div>

        {/* =========================================================
            RIGHT SIDE — CONTENT
        ========================================================== */}
        <div
          className="
            min-w-0
            flex-1
            overflow-y-auto
            bg-base-100
            p-5
            sm:p-7
            lg:p-8
          "
        >
          {/* Mobile close button */}
          <div className="mb-5 flex items-center justify-between lg:hidden">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                Independent Class
              </p>

              <h3 className="mt-1 text-xl font-black">{danceClass.title}</h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="btn btn-circle btn-sm"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* =======================================================
              CLASS INFORMATION
          ======================================================== */}
          {!showBooking && !submitted && (
            <>
              {/* Category */}
              {danceClass.category && (
                <div className="mb-4">
                  <span className="badge badge-primary badge-outline font-bold">
                    {danceClass.category}
                  </span>
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl font-black leading-tight sm:text-4xl">
                {danceClass.title}
              </h1>

              {danceClass.description && (
                <p className="mt-4 text-base leading-7 text-base-content/70">
                  {danceClass.description}
                </p>
              )}

              {/* ===================================================
                  CLASS DETAILS
              ==================================================== */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {/* Date */}
                {danceClass.date && (
                  <div className="flex items-center gap-3 rounded-2xl bg-base-200 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <CalendarDays size={20} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wide text-base-content/50">
                        Schedule
                      </p>

                      <p className="mt-0.5 font-bold">{danceClass.date}</p>
                    </div>
                  </div>
                )}

                {/* Time */}
                {danceClass.time && (
                  <div className="flex items-center gap-3 rounded-2xl bg-base-200 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Clock size={20} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wide text-base-content/50">
                        Time
                      </p>

                      <p className="mt-0.5 font-bold">{danceClass.time}</p>
                    </div>
                  </div>
                )}

                {/* Level */}
                {danceClass.level && (
                  <div className="flex items-center gap-3 rounded-2xl bg-base-200 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Users size={20} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wide text-base-content/50">
                        Level
                      </p>

                      <p className="mt-0.5 font-bold">{danceClass.level}</p>
                    </div>
                  </div>
                )}

                {/* Drop-in */}
                {danceClass.drop && (
                  <div className="flex items-center gap-3 rounded-2xl bg-base-200 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Sparkles size={20} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wide text-base-content/50">
                        Drop-In
                      </p>

                      <p className="mt-0.5 font-bold">{danceClass.drop}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* ===================================================
                  BIO
              ==================================================== */}
              {danceClass.bio && (
                <div className="mt-8">
                  <div className="mb-3 flex items-center gap-2">
                    <UserRound size={19} className="text-primary" />

                    <h3 className="text-lg font-black">About the Instructor</h3>
                  </div>

                  <div className="rounded-2xl border border-base-300 bg-base-200/50 p-5">
                    <p className="leading-7 text-base-content/75">
                      {danceClass.bio}
                    </p>
                  </div>
                </div>
              )}

              {/* ===================================================
                  INDEPENDENT INSTRUCTOR NOTE
              ==================================================== */}
              <div className="mt-7 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="flex gap-3">
                  <Sparkles
                    size={20}
                    className="mt-0.5 shrink-0 text-primary"
                  />

                  <div>
                    <h3 className="font-black">Independent Instructor</h3>

                    <p className="mt-1 text-sm leading-6 text-base-content/70">
                      This class is independently operated by the instructor and
                      hosted at Freedom Dance Studio. Please contact the
                      instructor directly for class-specific questions, payment,
                      and registration.
                    </p>
                  </div>
                </div>
              </div>

              {/* ===================================================
                  CONTACT BUTTONS
              ==================================================== */}
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {danceClass.phone && (
                  <a
                    href={`tel:${danceClass.phone}`}
                    className="btn btn-outline"
                  >
                    <Phone size={18} />
                    Contact Instructor
                  </a>
                )}

                {danceClass.instagram && (
                  <a
                    href={
                      danceClass.instagram.startsWith("http")
                        ? danceClass.instagram
                        : `https://instagram.com/${danceClass.instagram.replace(
                            "@",
                            "",
                          )}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    <BsInstagram size={18} />
                    Instagram
                  </a>
                )}
              </div>

              {/* ===================================================
                  BOOKING BUTTON
              ==================================================== */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setShowBooking(true)}
                  className="btn btn-primary btn-lg w-full rounded-2xl font-black shadow-lg"
                >
                  Request to Join Class
                  <ArrowRight size={20} />
                </button>
              </div>
            </>
          )}

          {/* =======================================================
              BOOKING FORM
          ======================================================== */}
          {showBooking && !submitted && (
            <div>
              {/* Header */}
              <div className="mb-7">
                <button
                  type="button"
                  onClick={() => setShowBooking(false)}
                  className="mb-5 flex items-center gap-2 text-sm font-bold text-base-content/60 transition hover:text-primary"
                >
                  <ArrowRight size={16} className="rotate-180" />
                  Back to class
                </button>

                <p className="text-xs font-bold uppercase tracking-widest text-primary">
                  Class Registration
                </p>

                <h2 className="mt-1 text-3xl font-black">Request to Join</h2>

                <p className="mt-2 text-sm leading-6 text-base-content/60">
                  Complete the form below and we will receive your registration
                  request.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Web3Forms */}
                <input
                  type="hidden"
                  name="subject"
                  value={`Independent Class Registration - ${danceClass.title} - ${danceClass.instructor}`}
                />

                <input type="hidden" name="Class" value={danceClass.title} />

                <input
                  type="hidden"
                  name="Instructor"
                  value={danceClass.instructor}
                />

                <input
                  type="hidden"
                  name="Schedule"
                  value={`${danceClass.date || ""} ${danceClass.time || ""}`}
                />

                <input
                  type="hidden"
                  name="Hosted At"
                  value="Freedom Dance Studio"
                />

                {/* Name */}
                <div>
                  <label
                    htmlFor="student-name"
                    className="mb-2 block text-sm font-bold"
                  >
                    Full Name *
                  </label>

                  <input
                    id="student-name"
                    type="text"
                    name="Name"
                    required
                    placeholder="Your full name"
                    className="input input-bordered w-full rounded-xl"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="student-email"
                    className="mb-2 block text-sm font-bold"
                  >
                    Email *
                  </label>

                  <input
                    id="student-email"
                    type="email"
                    name="Email"
                    required
                    placeholder="you@example.com"
                    className="input input-bordered w-full rounded-xl"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="student-phone"
                    className="mb-2 block text-sm font-bold"
                  >
                    Phone *
                  </label>

                  <input
                    id="student-phone"
                    type="tel"
                    name="Phone"
                    required
                    placeholder="(702) 555-1234"
                    className="input input-bordered w-full rounded-xl"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label
                    htmlFor="experience"
                    className="mb-2 block text-sm font-bold"
                  >
                    Dance Experience
                  </label>

                  <select
                    id="experience"
                    name="Dance Experience"
                    className="select select-bordered w-full rounded-xl"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your experience
                    </option>

                    <option value="Beginner">Beginner</option>

                    <option value="Intermediate">Intermediate</option>

                    <option value="Advanced">Advanced</option>

                    <option value="Professional">Professional</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="student-message"
                    className="mb-2 block text-sm font-bold"
                  >
                    Message
                  </label>

                  <textarea
                    id="student-message"
                    name="Message"
                    rows="4"
                    placeholder="Anything you would like the instructor to know?"
                    className="textarea textarea-bordered w-full rounded-xl"
                  />
                </div>

                {/* =================================================
                    AGREEMENTS
                ================================================== */}
                <div className="space-y-3 rounded-2xl border border-base-300 bg-base-200/50 p-5">
                  <h3 className="mb-4 font-black">Required Agreements</h3>

                  {/* Terms */}
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={agreements.terms}
                      onChange={() => handleAgreementChange("terms")}
                      className="checkbox checkbox-primary mt-0.5"
                    />

                    <span className="text-sm leading-6">
                      I agree to the studio and class terms and conditions.
                    </span>
                  </label>

                  {/* Liability */}
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={agreements.liability}
                      onChange={() => handleAgreementChange("liability")}
                      className="checkbox checkbox-primary mt-0.5"
                    />

                    <span className="text-sm leading-6">
                      I understand that dance activities involve physical
                      activity and I accept responsibility for participating.
                    </span>
                  </label>

                  {/* Media */}
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={agreements.media}
                      onChange={() => handleAgreementChange("media")}
                      className="checkbox checkbox-primary mt-0.5"
                    />

                    <span className="text-sm leading-6">
                      I allow photos and videos taken during studio activities
                      to be used for promotional purposes, including social
                      media and the studio website.
                    </span>
                  </label>
                </div>

                {/* Warning */}
                {!allAgreementsAccepted && (
                  <p className="text-sm font-medium text-warning">
                    Please accept all required agreements before submitting.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!allAgreementsAccepted}
                  className="btn btn-primary btn-lg w-full rounded-2xl font-black"
                >
                  Submit Registration
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          )}

          {/* =======================================================
              SUCCESS
          ======================================================== */}
          {submitted && (
            <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/10 text-success">
                <CheckCircle2 size={46} />
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-success">
                Registration Received
              </p>

              <h2 className="mt-2 text-3xl font-black">Thank You!</h2>

              <p className="mx-auto mt-4 max-w-md leading-7 text-base-content/70">
                Your request to join <strong>{danceClass.title}</strong> with{" "}
                <strong>{danceClass.instructor}</strong> has been submitted
                successfully.
              </p>

              <p className="mt-3 text-sm text-base-content/50">
                The instructor or Freedom Dance Studio will follow up with you
                with the next steps.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="btn btn-primary mt-8 rounded-xl px-8"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
