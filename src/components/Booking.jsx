import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  CheckCircle2,
  CalendarDays,
  Clock3,
  UserRound,
  MapPin,
  Camera,
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
      <section className="min-h-screen bg-base-200 px-5 py-16 flex items-center">
        <div className="max-w-3xl w-full mx-auto">
          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body items-center text-center p-8 md:p-12">
              {/* SUCCESS ICON */}

              <div className="mb-6">
                <CheckCircle2
                  size={90}
                  className="text-success"
                  strokeWidth={1.5}
                />
              </div>

              {/* TITLE */}

              <h1 className="text-4xl md:text-5xl font-bold text-success">
                Booking Confirmed!
              </h1>

              <p className="text-lg mt-4 max-w-xl">
                Thank you for booking with Freedom Dance Studio. Your
                registration has been successfully submitted.
              </p>

              {/* BOOKING NUMBER */}

              <div className="badge badge-primary badge-lg mt-5 p-4">
                Booking #{bookingReference}
              </div>

              {/* DETAILS */}

              <div className="w-full mt-10">
                <div className="card bg-base-200">
                  <div className="card-body text-left">
                    <h2 className="text-2xl font-bold mb-5 text-center">
                      Your Booking Details
                    </h2>

                    <div className="grid gap-5">
                      {/* CLASS */}

                      <div className="flex items-center gap-4">
                        <CalendarDays className="text-primary" size={25} />

                        <div>
                          <p className="text-sm opacity-60">Class</p>

                          <p className="font-bold text-lg">{className}</p>
                        </div>
                      </div>

                      {/* INSTRUCTOR */}

                      <div className="flex items-center gap-4">
                        <UserRound className="text-primary" size={25} />

                        <div>
                          <p className="text-sm opacity-60">Instructor</p>

                          <p className="font-bold text-lg">
                            {instructor || "Freedom Dance Studio"}
                          </p>
                        </div>
                      </div>

                      {/* DATE */}

                      <div className="flex items-center gap-4">
                        <CalendarDays className="text-primary" size={25} />

                        <div>
                          <p className="text-sm opacity-60">Date</p>

                          <p className="font-bold text-lg">{classDate}</p>
                        </div>
                      </div>

                      {/* TIME */}

                      <div className="flex items-center gap-4">
                        <Clock3 className="text-primary" size={25} />

                        <div>
                          <p className="text-sm opacity-60">Time</p>

                          <p className="font-bold text-lg">
                            {time || "Time not specified"}
                          </p>
                        </div>
                      </div>

                      {/* LOCATION */}

                      <div className="flex items-center gap-4">
                        <MapPin className="text-primary" size={25} />

                        <div>
                          <p className="text-sm opacity-60">Location</p>

                          <p className="font-bold text-lg">
                            Freedom Dance Studio
                          </p>
                        </div>
                      </div>

                      <div className="divider"></div>

                      {/* PRICE */}

                      <div className="flex justify-between items-center">
                        <span className="font-bold">Price</span>

                        <span className="text-success text-xl font-bold">
                          {classPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* EMAIL MESSAGE */}

              <div className="alert alert-info mt-8 text-left">
                <span>
                  📧 Your booking has been received successfully. Please save
                  your booking details above for your records.
                </span>
              </div>

              {/* BUTTONS */}

              <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full">
                <Link to="/schedule" className="btn btn-primary flex-1">
                  View Schedule
                </Link>

                <Link to="/" className="btn btn-outline flex-1">
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
    <section className="bg-base-200 py-16 px-5 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary">
            Confirm Your Booking
          </h1>

          <p className="mt-4 text-lg">
            Review your class information and complete your registration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* =====================================================
              BOOKING SUMMARY
          ===================================================== */}

          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-6">Booking Summary</h2>

              <div className="space-y-4">
                {/* CLASS */}

                <div className="flex justify-between gap-4">
                  <span className="font-bold">Class</span>

                  <input
                    type="text"
                    className="input input-bordered w-full border-0 text-cyan-500"
                    value={className}
                    readOnly
                  />
                </div>

                {/* INSTRUCTOR */}

                <div className="flex justify-between gap-4">
                  <span className="font-bold">Instructor</span>

                  <input
                    type="text"
                    className="input input-bordered w-full border-0 text-cyan-500"
                    value={instructor || ""}
                    readOnly
                  />
                </div>

                {/* DAY */}

                <div className="flex justify-between gap-4">
                  <span className="font-bold">Day</span>

                  <input
                    type="text"
                    className="input input-bordered w-full border-0 text-cyan-500"
                    value={classDate}
                    readOnly
                  />
                </div>

                {/* TIME */}

                <div className="flex justify-between gap-4">
                  <span className="font-bold">Time</span>

                  <input
                    type="text"
                    className="input input-bordered w-full border-0 text-cyan-500"
                    value={time || ""}
                    readOnly
                  />
                </div>

                {/* LOCATION */}

                <div className="flex justify-between">
                  <span className="font-bold">Location</span>

                  <span className="text-cyan-500">Freedom Dance Studio</span>
                </div>

                {/* PRICE */}

                <div className="flex justify-between">
                  <span className="font-bold">Drop-in Price</span>

                  <span className="text-success text-xl font-bold">
                    {classPrice}
                  </span>
                </div>

                <div className="divider"></div>

                <p>✔ Beginner Friendly</p>
                <p>✔ No Partner Required</p>
                <p>✔ Free Parking Available</p>
                <p>✔ Comfortable Clothing Recommended</p>
              </div>
            </div>
          </div>

          {/* =====================================================
              PERSONAL INFORMATION
          ===================================================== */}

          <div className="card bg-base-100 shadow-2xl">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-6">Personal Information</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* NAME */}

                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered w-full"
                  name="fullName"
                  required
                />

                {/* EMAIL */}

                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  name="email"
                  required
                />

                {/* PHONE */}

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                  name="phone"
                  required
                />

                {/* LEVEL */}

                <input
                  className="input input-bordered w-full"
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

                {/* SPECIAL REQUEST */}

                <textarea
                  className="textarea textarea-bordered w-full"
                  rows="4"
                  placeholder="Special Requests"
                  name="message"
                ></textarea>

                {/* =====================================================
                    STUDIO POLICIES
                ===================================================== */}

                <div className="rounded-xl border border-base-300 bg-base-200 p-4">
                  <label className="label cursor-pointer justify-start gap-3 items-start">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary mt-1"
                      name="studioPoliciesAgreement"
                      value="Agreed"
                      required
                    />

                    <span className="text-sm leading-relaxed">
                      I agree to the Freedom Dance Studio policies and
                      cancellation terms.
                    </span>
                  </label>
                </div>

                {/* =====================================================
                    PHOTO & VIDEO RELEASE
                ===================================================== */}

                <div className="rounded-xl border border-primary/30 bg-primary/5 p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Camera className="text-primary" size={24} />

                    <h3 className="font-bold text-lg">Photo & Video Release</h3>
                  </div>

                  <p className="text-sm leading-relaxed mb-4">
                    Freedom Dance Studio may take photographs and/or videos
                    during classes, workshops, socials, events, and other studio
                    activities. These may be used to promote the studio and its
                    dance programs.
                  </p>

                  {/* EXPANDABLE FULL POLICY */}

                  <details className="mb-4">
                    <summary className="cursor-pointer font-semibold text-primary">
                      Read the full Photo & Video Release Policy
                    </summary>

                    <div className="mt-4 text-sm leading-relaxed space-y-3">
                      <p>
                        By agreeing to this Photo & Video Release, I acknowledge
                        that Freedom Dance Studio may photograph, video record,
                        or otherwise capture my image, likeness, voice, or
                        participation during studio classes, workshops, socials,
                        events, performances, and other activities organized or
                        hosted by Freedom Dance Studio.
                      </p>

                      <p>
                        I give Freedom Dance Studio permission to use these
                        photographs and/or recordings for legitimate studio
                        promotional and marketing purposes, including but not
                        limited to:
                      </p>

                      <ul className="list-disc list-inside space-y-1">
                        <li>Instagram</li>
                        <li>TikTok</li>
                        <li>Facebook</li>
                        <li>YouTube</li>
                        <li>Freedom Dance Studio website</li>
                        <li>Online advertisements</li>
                        <li>Promotional videos</li>
                        <li>Flyers and digital promotional materials</li>
                        <li>Social media posts and stories</li>
                        <li>Other studio marketing materials</li>
                      </ul>

                      <p>
                        I understand that these materials may be edited,
                        reproduced, published, displayed, distributed, and
                        shared in connection with the promotion of Freedom Dance
                        Studio and its programs.
                      </p>

                      <p>
                        I understand that I will not receive payment or other
                        compensation for the use of photographs or recordings
                        covered by this release.
                      </p>

                      <p>
                        I understand that Freedom Dance Studio will make
                        reasonable efforts to use images and recordings in a
                        respectful and appropriate manner and will not
                        intentionally use them in a defamatory, misleading, or
                        inappropriate context.
                      </p>

                      <p>
                        If I do not wish to be photographed or recorded, I may
                        notify Freedom Dance Studio staff before or during the
                        activity whenever reasonably possible. I understand that
                        because classes and events may involve group photography
                        or video, Freedom Dance Studio cannot guarantee that
                        every incidental appearance can be identified or removed
                        immediately.
                      </p>

                      <p>
                        For questions regarding this Photo & Video Release,
                        participants may contact Freedom Dance Studio directly.
                      </p>
                    </div>
                  </details>

                  {/* REQUIRED PHOTO/VIDEO CONSENT */}

                  <label className="label cursor-pointer justify-start gap-3 items-start">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary mt-1"
                      name="photoVideoRelease"
                      value="Agreed"
                      required
                    />

                    <span className="text-sm leading-relaxed">
                      <strong>
                        I agree to the Photo & Video Release Policy
                      </strong>{" "}
                      and give Freedom Dance Studio permission to use my
                      photographs and/or video recordings for studio promotional
                      and marketing purposes, including social media such as
                      Instagram and TikTok.
                    </span>
                  </label>
                </div>

                {/* =====================================================
                    SUBMIT BUTTON
                ===================================================== */}

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

                <p className="text-xs text-center opacity-60">
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
