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

                {/* ================= POLICIES & WAIVERS ================= */}
                <div className="rounded-2xl border border-base-300 bg-base-200/60 p-4 sm:p-5 space-y-4">
                  <div>
                    <h4 className="font-bold text-lg">Policies & Waivers</h4>
                    <p className="text-sm text-base-content/60 mt-1">
                      Please review and agree to the following before submitting
                      your booking request.
                    </p>
                  </div>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary mt-0.5"
                      checked={agreements.terms}
                      onChange={(e) =>
                        setAgreements((prev) => ({
                          ...prev,
                          terms: e.target.checked,
                        }))
                      }
                      required
                    />
                    <span className="text-sm leading-relaxed">
                      I agree to the{" "}
                      <strong>Class Booking Terms & Policies</strong>. I
                      understand that this is an independent class, and the
                      independent instructor is responsible for registration,
                      pricing, payments, cancellations, refunds, and
                      class-specific policies. My booking request is not a
                      guarantee of admission until the instructor confirms it.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary mt-0.5"
                      checked={agreements.liability}
                      onChange={(e) =>
                        setAgreements((prev) => ({
                          ...prev,
                          liability: e.target.checked,
                        }))
                      }
                      required
                    />
                    <span className="text-sm leading-relaxed">
                      I acknowledge the{" "}
                      <strong>Participation & Liability Waiver</strong>. I
                      voluntarily participate in dance activities and understand
                      that dance involves physical activity and possible risks,
                      including slips, falls, strains, or other injuries. I
                      agree to participate responsibly, follow studio and
                      instructor instructions, and accept responsibility for my
                      own participation to the extent permitted by law. I
                      understand that Freedom Dance Studio is providing the
                      facility and that this independent class is operated by
                      the instructor.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary mt-0.5"
                      checked={agreements.media}
                      onChange={(e) =>
                        setAgreements((prev) => ({
                          ...prev,
                          media: e.target.checked,
                        }))
                      }
                      required
                    />
                    <span className="text-sm leading-relaxed">
                      I agree to the{" "}
                      <strong>
                        Freedom Dance Studio Photo & Video Marketing Release
                      </strong>
                      . I understand that Freedom Dance Studio and/or its
                      authorized representatives may photograph, film, or
                      otherwise record me during classes, workshops, socials,
                      events, and activities at the studio. I give Freedom Dance
                      Studio permission to use my photograph, video, image,
                      likeness, and/or voice for the studio's{" "}
                      <strong>
                        marketing, advertising, promotional, social media,
                        website, and other business-related promotional purposes
                      </strong>
                      . I understand that these photos and videos may be posted
                      on Freedom Dance Studio's website, Instagram, Facebook,
                      TikTok, YouTube, advertisements, promotional materials,
                      and other studio marketing channels. I understand that I
                      will not receive payment or other compensation for the use
                      of these photos or videos.
                    </span>
                  </label>

                  <div className="alert alert-info">
                    <Sparkles size={18} className="shrink-0" />
                    <span className="text-xs leading-relaxed">
                      Photos and videos may be captured during studio activities
                      for Freedom Dance Studio marketing and promotion. If you
                      do not agree to this release, please speak with the
                      instructor or Freedom Dance Studio before participating.
                    </span>
                  </div>

                  {/* Explicit values sent to Web3Forms */}
                  <input
                    type="hidden"
                    name="booking_terms_agreed"
                    value={agreements.terms ? "Yes" : "No"}
                  />
                  <input
                    type="hidden"
                    name="liability_waiver_agreed"
                    value={agreements.liability ? "Yes" : "No"}
                  />
                  <input
                    type="hidden"
                    name="freedom_dance_studio_photo_video_marketing_release_agreed"
                    value={agreements.media ? "Yes" : "No"}
                  />
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={
                      !agreements.terms ||
                      !agreements.liability ||
                      !agreements.media
                    }
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
              instructor manages registration, pricing, payments, cancellations,
              and class-specific information. By booking, you also acknowledge
              the studio's participation, media, and booking policies shown
              above.
            </span>
          </div>
        </div>
      </div>
    </dialog>
  );
}
