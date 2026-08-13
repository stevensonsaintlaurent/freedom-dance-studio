// import { useEffect, useState } from "react";
// import useOnSudmit from "../hooks/useOnSudmit";
// import { useNavigate } from "react-router-dom";

// export default function RentalConfirmation() {
//   const { onSubmit, setText } = useOnSudmit();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     e.target.value;
//   };

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       <div className="card bg-base-100 shadow-2xl">
//         <div className="card-body">
//           <h2 className="text-4xl font-bold text-center text-primary">
//             Studio Rental Reservation
//           </h2>

//           <p className="text-center text-gray-500 mb-6">
//             Complete the information below to reserve your event date. This is a
//             reservation request only.
//           </p>

//           {/* Important Notice */}

//           <div className="alert alert-warning">
//             <div>
//               <h3 className="font-bold text-lg">
//                 Please Read Before Reserving
//               </h3>

//               <ul className="list-disc ml-5 mt-2 space-y-1">
//                 <li>
//                   Reservations are <strong>NOT paid online.</strong>
//                 </li>

//                 <li>
//                   Your requested date and time will be reviewed by our team.
//                 </li>

//                 <li>
//                   We will contact you to confirm availability and provide your
//                   final customized price.
//                 </li>

//                 <li>
//                   Prices vary depending on event type, hours reserved, number of
//                   guests and setup requirements.
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Pricing */}

//           <div className="grid md:grid-cols-3 gap-4 my-6">
//             <div className="stat bg-base-200 rounded-xl">
//               <div className="stat-title">Starting Price</div>
//               <div className="stat-value text-success">$20/hr</div>
//             </div>

//             <div className="stat bg-base-200 rounded-xl">
//               <div className="stat-title">Large Events</div>
//               <div className="stat-value text-warning">$120/hr</div>
//               <div className="stat-desc">25+ Guests</div>
//             </div>

//             <div className="stat bg-base-200 rounded-xl">
//               <div className="stat-title">Cleaning Fee</div>
//               <div className="stat-value">$120</div>
//             </div>
//           </div>

//           <form onSubmit={onSubmit}>
//             <div className="grid md:grid-cols-2 gap-5">
//               <div>
//                 <label className="label">
//                   <span className="label-text">Full Name</span>
//                 </label>

//                 <input
//                   type="text"
//                   name="name"
//                   className="input input-bordered w-full"
//                   placeholder="John Smith"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>

//                 <input
//                   type="email"
//                   name="email"
//                   className="input input-bordered w-full"
//                   placeholder="example@email.com"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="label">
//                   <span className="label-text">Phone Number</span>
//                 </label>

//                 <input
//                   type="tel"
//                   name="phone"
//                   className="input input-bordered w-full"
//                   placeholder="(702) 555-5555"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="label">
//                   <span className="label-text">Event Type</span>
//                 </label>

//                 <select
//                   name="eventType"
//                   className="select select-bordered w-full"
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Choose one</option>
//                   <option>Birthday Party</option>
//                   <option>Wedding Reception</option>
//                   <option>Baby Shower</option>
//                   <option>Dance Rehearsal</option>
//                   <option>Private Class</option>
//                   <option>Workshop</option>
//                   <option>Corporate Event</option>
//                   <option>Meeting</option>
//                   <option>Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="label">
//                   <span className="label-text">Event Date</span>
//                 </label>

//                 <input
//                   type="date"
//                   name="date"
//                   className="input input-bordered w-full"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="label">
//                   <span className="label-text">Estimated Guests</span>
//                 </label>

//                 <input
//                   type="number"
//                   name="guests"
//                   className="input input-bordered w-full"
//                   placeholder="25"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="label">
//                   <span className="label-text">Start Time</span>
//                 </label>

//                 <input
//                   type="time"
//                   name="startTime"
//                   className="input input-bordered w-full"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="label">
//                   <span className="label-text">End Time</span>
//                 </label>

//                 <input
//                   type="time"
//                   name="endTime"
//                   className="input input-bordered w-full  focus:ring-blue-500"
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             <div className="mt-5">
//               <label className="label">
//                 <span className="label-text">Special Requests</span>
//               </label>

//               <textarea
//                 rows="5"
//                 name="notes"
//                 className="textarea textarea-bordered w-full"
//                 placeholder="Tell us about your event..."
//                 onChange={handleChange}
//               ></textarea>
//             </div>

//             <div className="alert alert-info mt-6">
//               <div>
//                 <h3 className="font-bold">Reservation Notice</h3>

//                 <p>
//                   Your reservation will hold your requested date until our team
//                   reviews your request. The final rental price depends on the
//                   event type, number of guests, rental duration, equipment,
//                   decorations, and additional services.
//                 </p>

//                 <p className="mt-2 font-semibold">
//                   No online payment is required at this stage. We will contact
//                   you with the final quote and payment instructions after your
//                   reservation is reviewed.
//                 </p>
//               </div>
//             </div>

//             <div className="card-actions justify-center mt-8">
//               <button
//                 type="submit"
//                 className="btn btn-primary btn-wide"
//                 onClick={() =>
//                   setText(
//                     "Thank you! Your reservation request has been submitted. We will contact you soon with your customized quote.",
//                   )
//                 }
//               >
//                 Reserve My Date
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import useOnSudmit from "../hooks/useOnSudmit";

export default function RentalConfirmation() {
  const { onSubmit, setText, hidden } = useOnSudmit();

  const handleSubmit = (event) => {
    setText(
      "Thank you! Your studio rental request has been submitted. We will contact you soon with availability and your customized quote.",
    );

    onSubmit(event);
  };

  return (
    <div className="min-h-screen bg-base-200 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="card overflow-hidden bg-base-100 shadow-2xl">
          <div className="card-body p-6 sm:p-8 lg:p-10">
            {/* HEADER */}
            <div className="text-center">
              <div className="badge badge-primary badge-lg">Studio Rental</div>

              <h1 className="mt-4 text-3xl font-black text-primary sm:text-4xl">
                Studio Rental Reservation
              </h1>

              <p className="mx-auto mt-3 max-w-2xl text-base-content/60">
                Complete the information below to request your studio rental.
                This is a reservation request only.
              </p>
            </div>

            {/* IMPORTANT NOTICE */}
            <div className="alert alert-warning mt-8">
              <div>
                <h3 className="text-lg font-bold">
                  Please Read Before Reserving
                </h3>

                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  <li>
                    Reservations are <strong>NOT paid online.</strong>
                  </li>

                  <li>
                    Your requested date and time will be reviewed by our team.
                  </li>

                  <li>We will contact you to confirm availability.</li>

                  <li>
                    Your final price will be customized based on your event,
                    rental duration, guests, setup and additional requirements.
                  </li>
                </ul>
              </div>
            </div>

            {/* PRICING */}
            <div className="my-8 grid gap-4 md:grid-cols-3">
              <div className="stat rounded-xl bg-base-200">
                <div className="stat-title">Starting Price</div>

                <div className="stat-value text-success">$20/hr</div>

                <div className="stat-desc">Standard rental</div>
              </div>

              <div className="stat rounded-xl bg-base-200">
                <div className="stat-title">Large Events</div>

                <div className="stat-value text-warning">$120/hr</div>

                <div className="stat-desc">25+ guests</div>
              </div>

              <div className="stat rounded-xl bg-base-200">
                <div className="stat-title">Cleaning Fee</div>

                <div className="stat-value">$120</div>

                <div className="stat-desc">When applicable</div>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit}>
              {/* CONTACT INFORMATION */}
              <div className="divider">Contact Information</div>

              <div className="grid gap-5 md:grid-cols-2">
                {/* NAME */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Full Name</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    className="input input-bordered w-full"
                    placeholder="John Smith"
                    required
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-full"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Phone Number
                    </span>
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    className="input input-bordered w-full"
                    placeholder="(702) 555-5555"
                    required
                  />
                </div>

                {/* EVENT TYPE */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Event Type</span>
                  </label>

                  <select
                    name="eventType"
                    className="select select-bordered w-full"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Choose one
                    </option>

                    <option value="Birthday Party">Birthday Party</option>

                    <option value="Wedding Reception">Wedding Reception</option>

                    <option value="Baby Shower">Baby Shower</option>

                    <option value="Dance Rehearsal">Dance Rehearsal</option>

                    <option value="Private Class">Private Class</option>

                    <option value="Workshop">Workshop</option>

                    <option value="Corporate Event">Corporate Event</option>

                    <option value="Meeting">Meeting</option>

                    <option value="Fitness / Wellness">
                      Fitness / Wellness
                    </option>

                    <option value="Photo / Video Shoot">
                      Photo / Video Shoot
                    </option>

                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* EVENT DETAILS */}
              <div className="divider mt-10">Event Details</div>

              <div className="grid gap-5 md:grid-cols-2">
                {/* DATE */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Event Date</span>
                  </label>

                  <input
                    type="date"
                    name="date"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                {/* GUESTS */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">
                      Estimated Guests
                    </span>
                  </label>

                  <input
                    type="number"
                    name="guests"
                    min="1"
                    className="input input-bordered w-full"
                    placeholder="25"
                    required
                  />
                </div>

                {/* START */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">Start Time</span>
                  </label>

                  <input
                    type="time"
                    name="startTime"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                {/* END */}
                <div>
                  <label className="label">
                    <span className="label-text font-semibold">End Time</span>
                  </label>

                  <input
                    type="time"
                    name="endTime"
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                {/* ROOM */}
                <div className="md:col-span-2">
                  <label className="label">
                    <span className="label-text font-semibold">
                      Preferred Studio Space
                    </span>
                  </label>

                  <select
                    name="studioSpace"
                    className="select select-bordered w-full"
                    defaultValue=""
                  >
                    <option value="">No preference / Please recommend</option>

                    <option value="Main Studio Room">Main Studio Room</option>

                    <option value="Flexible Studio Room">
                      Flexible Studio Room
                    </option>
                  </select>
                </div>
              </div>

              {/* SPECIAL REQUESTS */}
              <div className="mt-6">
                <label className="label">
                  <span className="label-text font-semibold">
                    Special Requests / Additional Information
                  </span>
                </label>

                <textarea
                  rows="6"
                  name="notes"
                  className="textarea textarea-bordered w-full"
                  placeholder="Tell us about your event, setup needs, equipment, decorations, music, class type, or anything else we should know..."
                />
              </div>

              {/* NOTICE */}
              <div className="alert alert-info mt-8">
                <div>
                  <h3 className="font-bold">Reservation Notice</h3>

                  <p className="mt-1 text-sm">
                    Submitting this form does not guarantee your reservation.
                    Our team will review your requested date, time, event type
                    and space requirements before confirming availability.
                  </p>

                  <p className="mt-2 text-sm font-semibold">
                    No online payment is required at this stage.
                  </p>
                </div>
              </div>

              {/* BUTTON */}
              <div className="mt-8 flex justify-center">
                <button
                  type="submit"
                  disabled={hidden}
                  className="btn btn-primary btn-wide"
                >
                  {hidden ? (
                    <>
                      <span className="loading loading-spinner" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Rental Request"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
