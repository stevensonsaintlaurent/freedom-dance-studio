import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  CheckCircle2,
  CalendarDays,
  Clock3,
  UserRound,
  MapPin,
} from "lucide-react";
import useOnSudmit from "../hooks/useOnSudmit";

const Booking = () => {
  const { setText, onSubmit } = useOnSudmit();
  const location = useLocation();

  const [confirm] = useState(location.state || {});
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingReference, setBookingReference] = useState("");

  const {
    name,
    title,
    dance,
    age,
    day,
    time,
    level,
    instructor,
    drop,
    date,
    price,
    priceDetails,
    extraPrice,
  } = confirm;

  const className = dance || title || name || "Dance Class";
  const classDate = day || date || "Date not specified";

  const classPrice =
    drop || price || (price && priceDetails && extraPrice) || "Contact Studio";

  const handleChange = () => {
    // Form values are handled directly by the form.
  };

  /*
   * =========================================================
   * SUBMIT BOOKING
   * =========================================================
   */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const result = await onSubmit(e);

      /*
       * ONLY show "Booking Confirmed"
       * if Web3Forms says the submission was successful.
       */

      if (result?.success) {
        const reference = `FDS-${Date.now().toString().slice(-6)}`;

        setBookingReference(reference);

        setText(
          `Your class has been booked successfully with ${
            instructor || "Freedom Dance Studio"
          }.`,
        );

        setBookingConfirmed(true);
      }
    } catch (error) {
      console.error("Booking failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /*
   * =========================================================
   * SUCCESS SCREEN
   * =========================================================
   */

  if (bookingConfirmed) {
    return (
      <section className="min-h-screen w-full overflow-x-hidden bg-base-200 px-4 sm:px-5 py-12 sm:py-16 flex items-center">
        <div className="max-w-3xl w-full min-w-0 mx-auto">
          <div className="card bg-base-100 shadow-2xl w-full min-w-0 overflow-hidden">
            <div className="card-body items-center text-center p-6 sm:p-8 md:p-12 min-w-0">
              {/* SUCCESS ICON */}

              <div className="mb-6">
                <CheckCircle2
                  size={90}
                  className="text-success"
                  strokeWidth={1.5}
                />
              </div>

              {/* TITLE */}

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-success break-words">
                Booking Confirmed!
              </h1>

              <p className="text-base sm:text-lg mt-4 max-w-xl break-words">
                Thank you for booking with Freedom Dance Studio. Your
                registration has been successfully submitted.
              </p>

              {/* BOOKING NUMBER */}

              <div className="badge badge-primary badge-lg mt-5 p-4 max-w-full">
                Booking #{bookingReference}
              </div>

              {/* DETAILS */}

              <div className="w-full min-w-0 mt-10">
                <div className="card bg-base-200 w-full min-w-0 overflow-hidden">
                  <div className="card-body text-left p-5 sm:p-6 min-w-0">
                    <h2 className="text-xl sm:text-2xl font-bold mb-5 text-center break-words">
                      Your Booking Details
                    </h2>

                    <div className="grid gap-5 min-w-0">
                      {/* CLASS */}

                      <div className="flex items-start gap-4 min-w-0">
                        <CalendarDays
                          className="text-primary flex-shrink-0"
                          size={25}
                        />

                        <div className="min-w-0">
                          <p className="text-sm opacity-60">Class</p>

                          <p className="font-bold text-lg break-words">
                            {className}
                          </p>
                        </div>
                      </div>

                      {/* INSTRUCTOR */}

                      <div className="flex items-start gap-4 min-w-0">
                        <UserRound
                          className="text-primary flex-shrink-0"
                          size={25}
                        />

                        <div className="min-w-0">
                          <p className="text-sm opacity-60">Instructor</p>

                          <p className="font-bold text-lg break-words">
                            {instructor || "Freedom Dance Studio"}
                          </p>
                        </div>
                      </div>

                      {/* DATE */}

                      <div className="flex items-start gap-4 min-w-0">
                        <CalendarDays
                          className="text-primary flex-shrink-0"
                          size={25}
                        />

                        <div className="min-w-0">
                          <p className="text-sm opacity-60">Date</p>

                          <p className="font-bold text-lg break-words">
                            {classDate}
                          </p>
                        </div>
                      </div>

                      {/* TIME */}

                      <div className="flex items-start gap-4 min-w-0">
                        <Clock3
                          className="text-primary flex-shrink-0"
                          size={25}
                        />

                        <div className="min-w-0">
                          <p className="text-sm opacity-60">Time</p>

                          <p className="font-bold text-lg break-words">
                            {time || "Time not specified"}
                          </p>
                        </div>
                      </div>

                      {/* LOCATION */}

                      <div className="flex items-start gap-4 min-w-0">
                        <MapPin
                          className="text-primary flex-shrink-0"
                          size={25}
                        />

                        <div className="min-w-0">
                          <p className="text-sm opacity-60">Location</p>

                          <p className="font-bold text-lg break-words">
                            Freedom Dance Studio
                          </p>
                        </div>
                      </div>

                      <div className="divider"></div>

                      {/* PRICE */}

                      <div className="flex flex-wrap justify-between items-center gap-3">
                        <span className="font-bold">Price</span>

                        <span className="text-success text-xl font-bold break-words">
                          {classPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* EMAIL MESSAGE */}

              <div className="alert alert-info mt-8 text-left w-full min-w-0 overflow-hidden">
                <span className="break-words">
                  📧 Your booking has been received successfully. Please save
                  your booking details above for your records.
                </span>
              </div>

              {/* BUTTONS */}

              <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full min-w-0">
                <Link to="/schedule" className="btn btn-primary flex-1 min-w-0">
                  View Schedule
                </Link>

                <Link to="/" className="btn btn-outline flex-1 min-w-0">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /*
   * =========================================================
   * BOOKING FORM
   * =========================================================
   */

  return (
    <section className="bg-base-200 py-10 sm:py-16 px-4 sm:px-5 min-h-screen w-full overflow-x-hidden">
      <div className="max-w-7xl w-full min-w-0 mx-auto">
        {/* HEADER */}

        <div className="text-center mb-8 sm:mb-12 min-w-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary break-words">
            Confirm Your Booking
          </h1>

          <p className="mt-4 text-base sm:text-lg break-words">
            Review your class information and complete your registration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 w-full min-w-0">
          {/* =====================================================
              BOOKING SUMMARY
          ===================================================== */}

          <div className="card bg-base-100 shadow-2xl w-full min-w-0 overflow-hidden">
            <div className="card-body min-w-0 p-5 sm:p-6">
              <h2 className="card-title text-2xl sm:text-3xl mb-6 break-words">
                Booking Summary
              </h2>

              <div className="space-y-4 min-w-0">
                {/* CLASS */}

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 min-w-0">
                  <span className="font-bold flex-shrink-0">Class</span>

                  <input
                    type="text"
                    className="input input-bordered w-full min-w-0 border-0 text-cyan-500"
                    value={className}
                    readOnly
                  />
                </div>

                {/* INSTRUCTOR */}

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 min-w-0">
                  <span className="font-bold flex-shrink-0">Instructor</span>

                  <input
                    type="text"
                    className="input input-bordered w-full min-w-0 border-0 text-cyan-500"
                    value={instructor || ""}
                    readOnly
                  />
                </div>

                {/* DAY */}

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 min-w-0">
                  <span className="font-bold flex-shrink-0">Day</span>

                  <input
                    type="text"
                    className="input input-bordered w-full min-w-0 border-0 text-cyan-500"
                    value={classDate}
                    readOnly
                  />
                </div>

                {/* TIME */}

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 min-w-0">
                  <span className="font-bold flex-shrink-0">Time</span>

                  <input
                    type="text"
                    className="input input-bordered w-full min-w-0 border-0 text-cyan-500"
                    value={time || ""}
                    readOnly
                  />
                </div>

                {/* LOCATION */}

                <div className="flex flex-wrap justify-between gap-2 min-w-0">
                  <span className="font-bold">Location</span>

                  <span className="text-cyan-500 break-words">
                    Freedom Dance Studio
                  </span>
                </div>

                {/* PRICE */}

                <div className="flex flex-wrap justify-between gap-2 min-w-0">
                  <span className="font-bold">Drop-in Price</span>

                  <span className="text-success text-xl font-bold break-words">
                    {classPrice}
                  </span>
                </div>

                <div className="divider"></div>

                <p className="break-words">✔ Beginner Friendly</p>
                <p className="break-words">✔ No Partner Required</p>
                <p className="break-words">✔ Free Parking Available</p>
                <p className="break-words">
                  ✔ Comfortable Clothing Recommended
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              PERSONAL INFORMATION
          ===================================================== */}

          <div className="card bg-base-100 shadow-2xl w-full min-w-0 overflow-hidden">
            <div className="card-body min-w-0 p-5 sm:p-6">
              <h2 className="card-title text-2xl sm:text-3xl mb-6 break-words">
                Personal Information
              </h2>

              <form
                onSubmit={handleSubmit}
                className="space-y-5 w-full min-w-0"
              >
                {/* NAME */}

                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered w-full min-w-0"
                  name="fullName"
                  required
                />

                {/* EMAIL */}

                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full min-w-0"
                  name="email"
                  required
                />

                {/* PHONE */}

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input input-bordered w-full min-w-0"
                  name="phone"
                  required
                />

                {/* LEVEL */}

                <input
                  className="input input-bordered w-full min-w-0"
                  name="level"
                  value={level || age || ""}
                  onChange={handleChange}
                  placeholder="Dance Level"
                />

                {/* HIDDEN BOOKING INFORMATION */}

                <input type="hidden" name="day" value={classDate} readOnly />

                <input type="hidden" name="time" value={time || ""} readOnly />

                <input type="hidden" name="dance" value={className} readOnly />

                <input
                  type="hidden"
                  name="instructor"
                  value={instructor || ""}
                  readOnly
                />

                <input
                  type="hidden"
                  name="bookingReference"
                  value={bookingReference}
                />

                {/* SPECIAL REQUEST */}

                <textarea
                  className="textarea textarea-bordered w-full min-w-0"
                  rows="4"
                  placeholder="Special Requests"
                  name="message"
                ></textarea>

                {/* =====================================================
                    STUDIO POLICIES
                ===================================================== */}

                <div className="divider"></div>

                <label className="label cursor-pointer justify-start gap-3 items-start w-full min-w-0 p-0">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary mt-1 flex-shrink-0"
                    name="studioPoliciesAgreement"
                    value="Agreed"
                    required
                  />

                  <span className="min-w-0 flex-1 break-words whitespace-normal text-sm leading-relaxed">
                    I agree to the studio policies and cancellation terms.
                  </span>
                </label>

                {/* =====================================================
                    PHOTO & VIDEO RELEASE
                ===================================================== */}

                <div className="w-full min-w-0 overflow-hidden">
                  <h3 className="font-semibold text-base mb-2 break-words">
                    Photo & Video Release
                  </h3>

                  <p className="text-sm opacity-70 leading-relaxed break-words whitespace-normal">
                    Freedom Dance Studio may photograph or record classes,
                    workshops, socials, events, and other studio activities for
                    promotional purposes.
                  </p>

                  <details className="w-full min-w-0 mt-2">
                    <summary className="cursor-pointer text-primary font-medium text-sm break-words">
                      Read Photo & Video Policy
                    </summary>

                    <div className="mt-3 w-full min-w-0 bg-base-200 rounded-lg p-3 overflow-hidden">
                      <div className="text-sm leading-relaxed break-words whitespace-normal space-y-3">
                        <p>
                          By participating in activities at Freedom Dance
                          Studio, I understand that photographs and/or video
                          recordings may be taken that include my image,
                          likeness, or voice.
                        </p>

                        <p>
                          I give Freedom Dance Studio permission to use
                          photographs and video recordings of me for legitimate
                          promotional and marketing purposes, including:
                        </p>

                        <ul className="list-disc list-inside space-y-1">
                          <li>Instagram</li>
                          <li>TikTok</li>
                          <li>Facebook</li>
                          <li>YouTube</li>
                          <li>Freedom Dance Studio's website</li>
                          <li>Online advertising and promotional materials</li>
                        </ul>

                        <p>
                          I understand that these photographs and recordings may
                          be edited, published, displayed, and shared for the
                          promotion of Freedom Dance Studio and its programs.
                        </p>

                        <p>
                          I understand that I will not receive compensation for
                          the use of photographs or recordings covered by this
                          release.
                        </p>

                        <p>
                          If I do not wish to be photographed or recorded, I
                          should notify Freedom Dance Studio staff before
                          participating whenever reasonably possible.
                        </p>
                      </div>
                    </div>
                  </details>

                  {/* REQUIRED PHOTO / VIDEO CONSENT */}

                  <label className="label cursor-pointer justify-start gap-3 items-start w-full min-w-0 p-0 mt-3">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary mt-1 flex-shrink-0"
                      name="photoVideoRelease"
                      value="Agreed"
                      required
                    />

                    <span className="min-w-0 flex-1 break-words whitespace-normal text-sm leading-relaxed">
                      <strong>I agree to the Photo & Video Release</strong> and
                      give Freedom Dance Studio permission to use my image
                      and/or recordings for promotional purposes, including
                      social media.
                    </span>
                  </label>
                </div>

                {/* SUBMIT BUTTON */}

                <button
                  className="btn btn-primary w-full text-lg"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Processing Booking...
                    </>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>

                <p className="text-xs text-center opacity-60 leading-relaxed break-words">
                  By submitting this form, you confirm that the information
                  provided is accurate and that you have agreed to the required
                  studio policies and Photo & Video Release.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
