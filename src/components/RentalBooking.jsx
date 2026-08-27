// import { useMemo, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   ArrowRight,
//   CalendarDays,
//   CheckCircle2,
//   Clock3,
//   Mail,
//   MapPin,
//   MessageCircle,
//   Phone,
//   Send,
//   Sparkles,
//   User,
//   Users,
//   X,
// } from "lucide-react";
// import useOnSudmit from "../hooks/useOnSudmit";

// /*
// =========================================================
// RENTAL RATES
// =========================================================
// */

// const rates = {
//   weekday: [
//     {
//       start: 9 * 60,
//       end: 12 * 60,
//       rate: 20,
//       label: "9:00 AM – 12:00 PM",
//     },
//     {
//       start: 12 * 60,
//       end: 18 * 60,
//       rate: 30,
//       label: "12:00 PM – 6:00 PM",
//     },
//     {
//       start: 18 * 60,
//       end: 21 * 60,
//       rate: 50,
//       label: "6:00 PM – 9:00 PM",
//     },
//   ],

//   weekend: [
//     {
//       start: 9 * 60,
//       end: 12 * 60,
//       rate: 30,
//       label: "9:00 AM – 12:00 PM",
//     },
//     {
//       start: 12 * 60,
//       end: 18 * 60,
//       rate: 40,
//       label: "12:00 PM – 6:00 PM",
//     },
//     {
//       start: 18 * 60,
//       end: 21 * 60,
//       rate: 70,
//       label: "6:00 PM – 9:00 PM",
//     },
//   ],
// };

// const LARGE_GROUP_RATE = 120;
// const LARGE_GROUP_MIN = 25;

// const OPENING_TIME = 9 * 60;
// const CLOSING_TIME = 21 * 60;

// /*
// =========================================================
// HELPERS
// =========================================================
// */

// const timeToMinutes = (time) => {
//   if (!time) return 0;

//   const [hours, minutes] = time.split(":").map(Number);

//   return hours * 60 + minutes;
// };

// const minutesToTime = (minutes) => {
//   const hours = Math.floor(minutes / 60);
//   const mins = minutes % 60;

//   return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
// };

// const formatTime = (time) => {
//   if (!time) return "";

//   const [hourString, minuteString] = time.split(":");

//   let hour = Number(hourString);
//   const minute = minuteString;

//   const suffix = hour >= 12 ? "PM" : "AM";

//   if (hour === 0) hour = 12;
//   if (hour > 12) hour -= 12;

//   return `${hour}:${minute} ${suffix}`;
// };

// const formatHours = (minutes) => {
//   const hours = minutes / 60;

//   return Number.isInteger(hours) ? hours : hours.toFixed(2);
// };

// const formatRequestedDate = (dateValue) => {
//   if (!dateValue) return "Date not selected";

//   const date = new Date(`${dateValue}T00:00:00`);

//   if (Number.isNaN(date.getTime())) {
//     return dateValue;
//   }

//   return date.toLocaleDateString("en-US", {
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   });
// };

// /*
// =========================================================
// CALCULATE RENTAL
// =========================================================
// */

// const calculateRental = ({ day, startTime, endTime, guestCount }) => {
//   const start = timeToMinutes(startTime);
//   const end = timeToMinutes(endTime);

//   if (!startTime || !endTime || end <= start) {
//     return {
//       minutes: 0,
//       hours: 0,
//       total: 0,
//       effectiveRate: 0,
//       breakdown: [],
//     };
//   }

//   const duration = end - start;

//   /*
//    * 25+ guests = $120/hour
//    */
//   if (guestCount >= LARGE_GROUP_MIN) {
//     return {
//       minutes: duration,
//       hours: duration / 60,
//       total: (duration / 60) * LARGE_GROUP_RATE,
//       effectiveRate: LARGE_GROUP_RATE,
//       breakdown: [
//         {
//           start,
//           end,
//           minutes: duration,
//           rate: LARGE_GROUP_RATE,
//           amount: (duration / 60) * LARGE_GROUP_RATE,
//         },
//       ],
//     };
//   }

//   const dayRates = rates[day];

//   let total = 0;
//   const breakdown = [];

//   for (const period of dayRates) {
//     const overlapStart = Math.max(start, period.start);
//     const overlapEnd = Math.min(end, period.end);

//     if (overlapEnd > overlapStart) {
//       const minutes = overlapEnd - overlapStart;
//       const amount = (minutes / 60) * period.rate;

//       total += amount;

//       breakdown.push({
//         start: overlapStart,
//         end: overlapEnd,
//         minutes,
//         rate: period.rate,
//         amount,
//       });
//     }
//   }

//   return {
//     minutes: duration,
//     hours: duration / 60,
//     total,
//     effectiveRate: duration > 0 ? total / (duration / 60) : 0,
//     breakdown,
//   };
// };

// /*
// =========================================================
// COMPONENT
// =========================================================
// */

// export default function RentalBooking({
//   onRentalConfirmed,
//   isConfirmationOnly = false,
//   confirmationData = null,
//   onRentAgain,
// }) {
//   const { onSubmit, hidden, setText } = useOnSudmit();

//   /*
//    * =========================================================
//    * CONFIRMATION-ONLY MODE
//    *
//    * This is rendered by StudioRentals after successful submit.
//    * Because StudioRentals returns this component instead of
//    * the rest of the rental page, the entire rental page
//    * disappears.
//    * =========================================================
//    */

//   if (isConfirmationOnly && confirmationData) {
//     const {
//       reference,
//       form,
//       day,
//       startTime,
//       endTime,
//       guestCount,
//       rental,
//       estimate,
//       hourlyRate,
//     } = confirmationData;

//     return (
//       <section className="min-h-screen bg-base-200 px-5 py-16 flex items-center">
//         <div className="max-w-4xl w-full mx-auto">
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 25,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.5,
//             }}
//             className="card bg-base-100 shadow-2xl"
//           >
//             <div className="card-body items-center text-center p-8 md:p-12">
//               {/* SUCCESS ICON */}

//               <div className="mb-6">
//                 <CheckCircle2
//                   size={90}
//                   className="text-success"
//                   strokeWidth={1.5}
//                 />
//               </div>

//               {/* TITLE */}

//               <h1 className="text-4xl md:text-5xl font-bold text-success">
//                 Rental Request Received!
//               </h1>

//               <p className="text-lg mt-4 max-w-2xl">
//                 Thank you for requesting Freedom Dance Studio. We received your
//                 rental request successfully.
//               </p>

//               {/* CONFIRMATION CODE */}

//               <div className="badge badge-primary badge-lg mt-5 p-4 text-base">
//                 Confirmation #{reference}
//               </div>

//               {/* REQUEST DETAILS */}

//               <div className="w-full mt-10">
//                 <div className="card bg-base-200">
//                   <div className="card-body text-left">
//                     <h2 className="text-2xl font-bold mb-6 text-center">
//                       Your Rental Request
//                     </h2>

//                     <div className="grid gap-5">
//                       {/* DATE */}

//                       <div className="flex items-center gap-4">
//                         <CalendarDays className="text-primary" size={25} />

//                         <div>
//                           <p className="text-sm opacity-60">Requested Date</p>

//                           <p className="font-bold text-lg">
//                             {formatRequestedDate(form.date)}
//                           </p>
//                         </div>
//                       </div>

//                       {/* RENTAL TYPE */}

//                       <div className="flex items-center gap-4">
//                         <CalendarDays className="text-primary" size={25} />

//                         <div>
//                           <p className="text-sm opacity-60">Rental Type</p>

//                           <p className="font-bold text-lg">
//                             {day === "weekday" ? "Weekday" : "Weekend"}
//                           </p>
//                         </div>
//                       </div>

//                       {/* TIME */}

//                       <div className="flex items-center gap-4">
//                         <Clock3 className="text-primary" size={25} />

//                         <div>
//                           <p className="text-sm opacity-60">Requested Time</p>

//                           <p className="font-bold text-lg">
//                             {formatTime(startTime)} – {formatTime(endTime)}
//                           </p>
//                         </div>
//                       </div>

//                       {/* DURATION */}

//                       <div className="flex items-center gap-4">
//                         <Clock3 className="text-primary" size={25} />

//                         <div>
//                           <p className="text-sm opacity-60">Duration</p>

//                           <p className="font-bold text-lg">
//                             {formatHours(rental.minutes)} hour
//                             {rental.minutes !== 60 ? "s" : ""}
//                           </p>
//                         </div>
//                       </div>

//                       {/* GUESTS */}

//                       <div className="flex items-center gap-4">
//                         <Users className="text-primary" size={25} />

//                         <div>
//                           <p className="text-sm opacity-60">Guests</p>

//                           <p className="font-bold text-lg">
//                             {guestCount || "Not specified"}
//                           </p>
//                         </div>
//                       </div>

//                       {/* EVENT TYPE */}

//                       <div className="flex items-center gap-4">
//                         <Sparkles className="text-primary" size={25} />

//                         <div>
//                           <p className="text-sm opacity-60">Event Type</p>

//                           <p className="font-bold text-lg">
//                             {form.eventType || "Not specified"}
//                           </p>
//                         </div>
//                       </div>

//                       {/* LOCATION */}

//                       <div className="flex items-center gap-4">
//                         <MapPin className="text-primary" size={25} />

//                         <div>
//                           <p className="text-sm opacity-60">Location</p>

//                           <p className="font-bold text-lg">
//                             Freedom Dance Studio
//                           </p>
//                         </div>
//                       </div>

//                       <div className="divider"></div>

//                       {/* RATE */}

//                       <div className="flex justify-between items-center">
//                         <span className="font-bold">Hourly Rate</span>

//                         <span className="text-primary text-lg font-bold">
//                           ${hourlyRate.toFixed(2)}/hr
//                         </span>
//                       </div>

//                       {/* TOTAL */}

//                       <div className="flex justify-between items-center">
//                         <span className="font-bold">Estimated Total</span>

//                         <span className="text-success text-2xl font-bold">
//                           ${estimate.toFixed(2)}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* IMPORTANT MESSAGE */}

//               <div className="alert alert-info mt-8 text-left">
//                 <span>
//                   📧 Your rental request has been received successfully. Please
//                   save your confirmation number. This request does not
//                   automatically confirm your reservation. Freedom Dance Studio
//                   will contact you to confirm availability and final pricing.
//                 </span>
//               </div>

//               {/* BUTTONS */}

//               <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full">
//                 <a href="/" className="btn btn-primary flex-1">
//                   Back to Home
//                 </a>

//                 <button
//                   type="button"
//                   onClick={onRentAgain}
//                   className="btn btn-outline flex-1"
//                 >
//                   Rent the Studio Again
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     );
//   }

//   /*
//    * =========================================================
//    * NORMAL BOOKING MODE
//    * =========================================================
//    */

//   const [day, setDay] = useState("weekday");

//   const [startTime, setStartTime] = useState("12:00");
//   const [endTime, setEndTime] = useState("14:00");

//   const [guests, setGuests] = useState("");

//   const [showRequest, setShowRequest] = useState(false);

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     eventType: "",
//     date: "",
//     message: "",
//   });

//   const guestCount = Number(guests) || 0;

//   const isLargeGroup = guestCount >= LARGE_GROUP_MIN;

//   const rental = useMemo(
//     () =>
//       calculateRental({
//         day,
//         startTime,
//         endTime,
//         guestCount,
//       }),
//     [day, startTime, endTime, guestCount],
//   );

//   const estimate = rental.total;

//   const hourlyRate = rental.effectiveRate;

//   /*
//    * =========================================================
//    * TIME / FORM HANDLERS
//    * =========================================================
//    */

//   const handleDayChange = (newDay) => {
//     setDay(newDay);
//   };

//   const handleStartTimeChange = (e) => {
//     const newStart = e.target.value;

//     setStartTime(newStart);

//     const startMinutes = timeToMinutes(newStart);

//     const currentEndMinutes = timeToMinutes(endTime);

//     if (currentEndMinutes <= startMinutes) {
//       const suggestedEnd = Math.min(startMinutes + 60, CLOSING_TIME);

//       if (suggestedEnd > startMinutes) {
//         setEndTime(minutesToTime(suggestedEnd));
//       }
//     }
//   };

//   const handleEndTimeChange = (e) => {
//     setEndTime(e.target.value);
//   };

//   const handleGuestsChange = (e) => {
//     const value = e.target.value;

//     if (value === "") {
//       setGuests("");
//       return;
//     }

//     setGuests(Math.max(1, Number(value) || 1));
//   };

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;

//     setForm((previous) => ({
//       ...previous,
//       [name]: value,
//     }));
//   };

//   /*
//    * =========================================================
//    * MODAL
//    * =========================================================
//    */

//   const openRequest = () => {
//     setShowRequest(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeRequest = () => {
//     setShowRequest(false);
//     document.body.style.overflow = "";
//   };

//   /*
//    * =========================================================
//    * VALIDATION
//    * =========================================================
//    */

//   const invalidTime =
//     !startTime ||
//     !endTime ||
//     timeToMinutes(endTime) <= timeToMinutes(startTime);

//   const outsideHours =
//     timeToMinutes(startTime) < OPENING_TIME ||
//     timeToMinutes(endTime) > CLOSING_TIME;

//   const canRequest = !invalidTime && !outsideHours && rental.minutes > 0;

//   /*
//    * =========================================================
//    * SUBMIT
//    * =========================================================
//    */

//   const handleRentalSubmit = async (event) => {
//     event.preventDefault();

//     if (isSubmitting) return;

//     if (!canRequest) return;

//     setIsSubmitting(true);

//     setText(
//       "Your studio rental request has been received successfully. We will contact you to confirm availability and final pricing.",
//     );

//     try {
//       const result = await onSubmit(event);

//       if (result?.success) {
//         const reference = `FDS-${Math.floor(100000 + Math.random() * 900000)}`;

//         /*
//          * Close modal.
//          */

//         setShowRequest(false);

//         document.body.style.overflow = "";

//         /*
//          * IMPORTANT:
//          *
//          * Instead of setting confirmation locally,
//          * tell StudioRentals that the request succeeded.
//          *
//          * StudioRentals will then completely replace
//          * the RentalStudio page with the confirmation screen.
//          */

//         if (onRentalConfirmed) {
//           onRentalConfirmed({
//             reference,
//             form,
//             day,
//             startTime,
//             endTime,
//             guestCount,
//             rental,
//             estimate,
//             hourlyRate,
//           });
//         }
//       }
//     } catch (error) {
//       console.error("Rental request failed:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   /*
//    * =========================================================
//    * RENTAL PAGE
//    * =========================================================
//    */

//   return (
//     <>
//       <section
//         id="booking"
//         className="relative overflow-hidden bg-neutral py-20 text-neutral-content sm:py-24 lg:py-28"
//       >
//         <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />

//         <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

//         <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
//           <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
//             {/* LEFT */}

//             <div>
//               <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
//                 Ready to book?
//               </p>

//               <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
//                 Let’s plan your
//                 <span className="block text-primary">rental.</span>
//               </h2>

//               <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
//                 Choose your day, your exact start and end time, and the number
//                 of guests. We'll calculate your estimated rental price
//                 automatically.
//               </p>

//               <div className="mt-8 space-y-3 text-sm text-white/75">
//                 <div className="flex items-center gap-3">
//                   <CalendarDays size={18} className="text-primary" />
//                   Weekday & weekend options
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <Clock3 size={18} className="text-primary" />
//                   Choose your exact rental time
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <Users size={18} className="text-primary" />
//                   Classes, rehearsals and events
//                 </div>
//               </div>

//               <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//                 <a
//                   href="/contact"
//                   className="btn btn-primary rounded-full px-7"
//                 >
//                   <MessageCircle size={17} />
//                   Contact Us
//                 </a>

//                 <a
//                   href="mailto:info@vegasfreedomdancestudio.com"
//                   className="btn rounded-full border-white/15 bg-white/10 text-white hover:bg-white/15"
//                 >
//                   <Mail size={17} />
//                   Email Us
//                 </a>
//               </div>
//             </div>

//             {/* BOOKING CARD */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 24,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//               }}
//               transition={{
//                 duration: 0.7,
//               }}
//               className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl sm:p-7"
//             >
//               {/* DAY */}

//               <div className="grid grid-cols-2 gap-2 rounded-2xl bg-black/20 p-2">
//                 <button
//                   type="button"
//                   onClick={() => handleDayChange("weekday")}
//                   className={`btn rounded-xl border-0 transition-all duration-300 ${
//                     day === "weekday"
//                       ? "btn-primary shadow-lg shadow-primary/20"
//                       : "bg-white/5 text-white hover:bg-white/10"
//                   }`}
//                 >
//                   Week day
//                 </button>

//                 <button
//                   type="button"
//                   onClick={() => handleDayChange("weekend")}
//                   className={`btn rounded-xl border-0 transition-all duration-300 ${
//                     day === "weekend"
//                       ? "btn-primary shadow-lg shadow-primary/20"
//                       : "bg-white/5 text-white hover:bg-white/10"
//                   }`}
//                 >
//                   Weekend
//                 </button>
//               </div>

//               {/* TIME */}

//               <div className="mt-6 grid gap-5 sm:grid-cols-2">
//                 <label className="form-control">
//                   <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
//                     Start Time
//                   </span>

//                   <input
//                     type="time"
//                     min="09:00"
//                     max="20:00"
//                     step="1800"
//                     value={startTime}
//                     onChange={handleStartTimeChange}
//                     className="input input-bordered w-full rounded-xl border-white/10 bg-white/10 text-white outline-none transition-all duration-300 hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
//                   />

//                   <span className="mt-2 text-xs text-white/40">
//                     {formatTime(startTime)}
//                   </span>
//                 </label>

//                 <label className="form-control">
//                   <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
//                     End Time
//                   </span>

//                   <input
//                     type="time"
//                     min="10:00"
//                     max="21:00"
//                     step="1800"
//                     value={endTime}
//                     onChange={handleEndTimeChange}
//                     className="input input-bordered w-full rounded-xl border-white/10 bg-white/10 text-white outline-none transition-all duration-300 hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
//                   />

//                   <span className="mt-2 text-xs text-white/40">
//                     {formatTime(endTime)}
//                   </span>
//                 </label>

//                 {/* GUESTS */}

//                 <label className="form-control sm:col-span-2">
//                   <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
//                     Estimated Guests
//                   </span>

//                   <input
//                     type="number"
//                     min="1"
//                     value={guests}
//                     onChange={handleGuestsChange}
//                     placeholder="How many people?"
//                     className="input input-bordered rounded-xl border-white/10 bg-white/10 text-white placeholder:text-white/25 outline-none transition-all duration-300 hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
//                   />

//                   {isLargeGroup && (
//                     <motion.div
//                       initial={{
//                         opacity: 0,
//                         y: -6,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         y: 0,
//                       }}
//                       className="mt-2 flex items-center gap-2 text-xs font-semibold text-primary"
//                     >
//                       <CheckCircle2 size={15} />
//                       Groups of 25 guests or more:
//                       <span className="font-black">$120/hour</span>
//                     </motion.div>
//                   )}
//                 </label>
//               </div>

//               {/* VALIDATION */}

//               {invalidTime && (
//                 <div className="alert alert-error mt-5 text-sm">
//                   <Clock3 size={18} />
//                   <span>End time must be later than the start time.</span>
//                 </div>
//               )}

//               {outsideHours && !invalidTime && (
//                 <div className="alert alert-warning mt-5 text-sm">
//                   <Clock3 size={18} />
//                   <span>
//                     Studio rentals are available between 9:00 AM and 9:00 PM.
//                   </span>
//                 </div>
//               )}

//               {/* PRICE */}

//               <motion.div
//                 key={`${day}-${startTime}-${endTime}-${guestCount}`}
//                 initial={{
//                   opacity: 0.6,
//                   scale: 0.98,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                 }}
//                 transition={{
//                   duration: 0.25,
//                 }}
//                 className="mt-6 rounded-2xl bg-primary p-6 text-primary-content"
//               >
//                 <div className="flex items-end justify-between gap-4">
//                   <div>
//                     <p className="text-xs font-black uppercase tracking-[0.18em] opacity-70">
//                       Estimated Rental
//                     </p>

//                     <p className="mt-1 text-4xl font-black">
//                       ${estimate.toFixed(2)}
//                     </p>
//                   </div>

//                   <div className="text-right">
//                     <p className="text-xs opacity-70">
//                       {formatTime(startTime)} – {formatTime(endTime)}
//                     </p>

//                     <p className="mt-1 text-xs opacity-70">
//                       {formatHours(rental.minutes)} hour
//                       {rental.minutes !== 60 ? "s" : ""}
//                     </p>
//                   </div>
//                 </div>

//                 {/* BREAKDOWN */}

//                 {rental.breakdown.length > 0 && (
//                   <div className="mt-5 border-t border-white/20 pt-4">
//                     <p className="mb-2 text-[10px] font-black uppercase tracking-wider opacity-60">
//                       Price Breakdown
//                     </p>

//                     <div className="space-y-1">
//                       {rental.breakdown.map((item, index) => (
//                         <div
//                           key={index}
//                           className="flex justify-between gap-4 text-xs"
//                         >
//                           <span>
//                             {formatTime(
//                               minutesToTime(
//                                 item.start ?? timeToMinutes(startTime),
//                               ),
//                             )}
//                             {" – "}
//                             {formatTime(
//                               minutesToTime(item.end ?? timeToMinutes(endTime)),
//                             )}
//                           </span>

//                           <span className="font-bold">
//                             {item.minutes / 60} hr × ${item.rate} = $
//                             {item.amount.toFixed(2)}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {isLargeGroup && (
//                   <p className="mt-3 text-[10px] font-bold uppercase tracking-wider opacity-60">
//                     25+ guest rate applied: $120/hour
//                   </p>
//                 )}
//               </motion.div>

//               {/* BUTTONS */}

//               <div className="mt-5 grid gap-3 sm:grid-cols-2">
//                 <button
//                   type="button"
//                   onClick={openRequest}
//                   disabled={!canRequest}
//                   className="btn btn-primary rounded-xl disabled:opacity-40"
//                 >
//                   Request Availability
//                   <ArrowRight size={17} />
//                 </button>

//                 <a
//                   href="/contact"
//                   className="btn rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10"
//                 >
//                   Ask a Question
//                 </a>
//               </div>

//               <p className="mt-4 text-center text-xs leading-5 text-white/35">
//                 Estimates do not confirm availability. Events, parties and large
//                 groups may have different rates and fees.
//               </p>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* REQUEST MODAL */}

//       <AnimatePresence>
//         {showRequest && (
//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             exit={{
//               opacity: 0,
//             }}
//             className="fixed inset-0 z-[999] flex items-center justify-center p-4"
//           >
//             {/* BACKDROP */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               exit={{
//                 opacity: 0,
//               }}
//               onClick={closeRequest}
//               className="absolute inset-0 bg-black/80 backdrop-blur-md"
//             />

//             {/* MODAL */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 40,
//                 scale: 0.96,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//               }}
//               exit={{
//                 opacity: 0,
//                 y: 30,
//                 scale: 0.96,
//               }}
//               transition={{
//                 duration: 0.3,
//                 ease: "easeOut",
//               }}
//               className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-neutral shadow-2xl"
//             >
//               {/* HEADER */}

//               <div className="sticky top-0 z-20 border-b border-white/10 bg-neutral/95 p-5 backdrop-blur-xl sm:p-7">
//                 <div className="flex items-start justify-between gap-5">
//                   <div>
//                     <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-primary">
//                       <Sparkles size={13} />
//                       Rental Request
//                     </div>

//                     <h3 className="text-2xl font-black text-white sm:text-3xl">
//                       Request Studio Availability
//                     </h3>

//                     <p className="mt-2 max-w-xl text-sm leading-6 text-white/50">
//                       Tell us about your rental and we'll get back to you to
//                       confirm availability.
//                     </p>
//                   </div>

//                   <button
//                     type="button"
//                     onClick={closeRequest}
//                     className="btn btn-circle btn-sm border-white/10 bg-white/5 text-white hover:bg-white/10"
//                   >
//                     <X size={18} />
//                   </button>
//                 </div>
//               </div>

//               {/* BODY */}

//               <div className="p-5 sm:p-7">
//                 {/* SUMMARY */}

//                 <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
//                   <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">
//                     <CheckCircle2 size={15} />
//                     Your Rental Selection
//                   </div>

//                   <div className="mt-4 grid gap-4 sm:grid-cols-2">
//                     <div>
//                       <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
//                         Requested Date
//                       </p>

//                       <p className="mt-1 font-bold text-white">
//                         {formatRequestedDate(form.date)}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
//                         Day
//                       </p>

//                       <p className="mt-1 font-bold text-white">
//                         {day === "weekday" ? "Weekday" : "Weekend"}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
//                         Start Time
//                       </p>

//                       <p className="mt-1 font-bold text-white">
//                         {formatTime(startTime)}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
//                         End Time
//                       </p>

//                       <p className="mt-1 font-bold text-white">
//                         {formatTime(endTime)}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
//                         Duration
//                       </p>

//                       <p className="mt-1 font-bold text-white">
//                         {formatHours(rental.minutes)} hour
//                         {rental.minutes !== 60 ? "s" : ""}
//                       </p>
//                     </div>

//                     <div>
//                       <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
//                         Guests
//                       </p>

//                       <p className="mt-1 font-bold text-white">
//                         {guestCount || "Not specified"}
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-5 border-t border-primary/10 pt-5">
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-white/40">
//                         Estimated Total
//                       </span>

//                       <span className="text-2xl font-black text-primary">
//                         ${estimate.toFixed(2)}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* FORM */}

//                 <form onSubmit={handleRentalSubmit} className="mt-7 space-y-5">
//                   <input
//                     type="hidden"
//                     name="subject"
//                     value={`New Studio Rental Request - ${
//                       form.name || "Customer"
//                     }`}
//                     readOnly
//                   />

//                   <input
//                     type="hidden"
//                     name="rentalType"
//                     value="Studio Rental"
//                   />

//                   <input
//                     type="hidden"
//                     name="rentalDay"
//                     value={day === "weekday" ? "Weekday" : "Weekend"}
//                   />

//                   <input type="hidden" name="requestedDate" value={form.date} />

//                   <input
//                     type="hidden"
//                     name="startTime"
//                     value={formatTime(startTime)}
//                   />

//                   <input
//                     type="hidden"
//                     name="endTime"
//                     value={formatTime(endTime)}
//                   />

//                   <input
//                     type="hidden"
//                     name="requestedTime"
//                     value={`${formatTime(startTime)} - ${formatTime(endTime)}`}
//                   />

//                   <input
//                     type="hidden"
//                     name="hours"
//                     value={formatHours(rental.minutes)}
//                   />

//                   <input
//                     type="hidden"
//                     name="guestCount"
//                     value={guestCount || "Not specified"}
//                   />

//                   <input
//                     type="hidden"
//                     name="hourlyRate"
//                     value={hourlyRate.toFixed(2)}
//                   />

//                   <input
//                     type="hidden"
//                     name="estimatedTotal"
//                     value={estimate.toFixed(2)}
//                   />

//                   {/* NAME + PHONE */}

//                   <div className="grid gap-5 sm:grid-cols-2">
//                     <label className="form-control">
//                       <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
//                         Your Name
//                       </span>

//                       <div className="relative">
//                         <User
//                           size={17}
//                           className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
//                         />

//                         <input
//                           required
//                           type="text"
//                           name="name"
//                           value={form.name}
//                           onChange={handleFormChange}
//                           placeholder="Your full name"
//                           className="input input-bordered w-full rounded-xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-white/25 focus:border-primary focus:outline-none"
//                         />
//                       </div>
//                     </label>

//                     <label className="form-control">
//                       <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
//                         Phone
//                       </span>

//                       <div className="relative">
//                         <Phone
//                           size={17}
//                           className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
//                         />

//                         <input
//                           required
//                           type="tel"
//                           name="phone"
//                           value={form.phone}
//                           onChange={handleFormChange}
//                           placeholder="(702) 000-0000"
//                           className="input input-bordered w-full rounded-xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-white/25 focus:border-primary focus:outline-none"
//                         />
//                       </div>
//                     </label>
//                   </div>

//                   {/* EMAIL + EVENT */}

//                   <div className="grid gap-5 sm:grid-cols-2">
//                     <label className="form-control">
//                       <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
//                         Email
//                       </span>

//                       <div className="relative">
//                         <Mail
//                           size={17}
//                           className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
//                         />

//                         <input
//                           required
//                           type="email"
//                           name="email"
//                           value={form.email}
//                           onChange={handleFormChange}
//                           placeholder="you@example.com"
//                           className="input input-bordered w-full rounded-xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-white/25 focus:border-primary focus:outline-none"
//                         />
//                       </div>
//                     </label>

//                     <label className="form-control">
//                       <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
//                         Event Type
//                       </span>

//                       <select
//                         required
//                         name="eventType"
//                         value={form.eventType}
//                         onChange={handleFormChange}
//                         className="select select-bordered w-full rounded-xl border-white/10 bg-white/5 text-white focus:border-primary focus:outline-none"
//                       >
//                         <option value="" disabled className="bg-neutral">
//                           Select event type
//                         </option>

//                         <option
//                           value="Private Event"
//                           className="bg-neutral text-white"
//                         >
//                           Private Event
//                         </option>

//                         <option
//                           value="Dance Class"
//                           className="bg-neutral text-white"
//                         >
//                           Dance Class
//                         </option>

//                         <option
//                           value="Workshop"
//                           className="bg-neutral text-white"
//                         >
//                           Workshop
//                         </option>

//                         <option
//                           value="Rehearsal"
//                           className="bg-neutral text-white"
//                         >
//                           Rehearsal
//                         </option>

//                         <option
//                           value="Photo / Video"
//                           className="bg-neutral text-white"
//                         >
//                           Photo / Video
//                         </option>

//                         <option value="Other" className="bg-neutral text-white">
//                           Other
//                         </option>
//                       </select>
//                     </label>
//                   </div>

//                   {/* DATE */}

//                   <label className="form-control">
//                     <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
//                       Requested Date
//                     </span>

//                     <input
//                       required
//                       type="date"
//                       name="date"
//                       value={form.date}
//                       onChange={handleFormChange}
//                       className="input input-bordered w-full rounded-xl border-white/10 bg-white/5 text-white focus:border-primary focus:outline-none"
//                     />
//                   </label>

//                   {/* MESSAGE */}

//                   <label className="form-control">
//                     <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
//                       Special Request / Additional Details
//                     </span>

//                     <textarea
//                       name="message"
//                       value={form.message}
//                       onChange={handleFormChange}
//                       rows="4"
//                       placeholder="Tell us about your event, setup needs, equipment, special requests, etc."
//                       className="textarea textarea-bordered w-full resize-none rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/25 focus:border-primary focus:outline-none"
//                     />
//                   </label>

//                   {/* TOTAL */}

//                   <div className="rounded-2xl bg-white/5 p-5">
//                     <div className="flex items-center justify-between gap-4">
//                       <div>
//                         <p className="text-xs font-black uppercase tracking-wider text-white/40">
//                           Estimated Total
//                         </p>

//                         <p className="mt-1 text-3xl font-black text-primary">
//                           ${estimate.toFixed(2)}
//                         </p>
//                       </div>

//                       <div className="text-right text-xs text-white/40">
//                         <p>
//                           {formatTime(startTime)} – {formatTime(endTime)}
//                         </p>

//                         <p>
//                           {formatHours(rental.minutes)} hour
//                           {rental.minutes !== 60 ? "s" : ""}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   {/* SUBMIT */}

//                   <button
//                     type="submit"
//                     disabled={hidden || isSubmitting || !canRequest}
//                     className="btn btn-primary btn-lg w-full rounded-xl shadow-lg shadow-primary/20 disabled:opacity-40"
//                   >
//                     {hidden || isSubmitting ? (
//                       <>
//                         <span className="loading loading-spinner"></span>
//                         Sending Request...
//                       </>
//                     ) : (
//                       <>
//                         <Send size={18} />
//                         Send Rental Request
//                       </>
//                     )}
//                   </button>

//                   <p className="text-center text-xs leading-5 text-white/30">
//                     Sending this request does not guarantee your reservation.
//                     Freedom Dance Studio will contact you to confirm
//                     availability and final pricing.
//                   </p>
//                 </form>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  User,
  Users,
  X,
} from "lucide-react";
import useOnSudmit from "../hooks/useOnSudmit";

/*
=========================================================
RENTAL RATES
=========================================================
*/

const rates = {
  weekday: [
    {
      start: 9 * 60,
      end: 12 * 60,
      rate: 20,
      label: "9:00 AM – 12:00 PM",
    },
    {
      start: 12 * 60,
      end: 18 * 60,
      rate: 30,
      label: "12:00 PM – 6:00 PM",
    },
    {
      start: 18 * 60,
      end: 21 * 60,
      rate: 50,
      label: "6:00 PM – 9:00 PM",
    },
  ],

  weekend: [
    {
      start: 9 * 60,
      end: 12 * 60,
      rate: 30,
      label: "9:00 AM – 12:00 PM",
    },
    {
      start: 12 * 60,
      end: 18 * 60,
      rate: 40,
      label: "12:00 PM – 6:00 PM",
    },
    {
      start: 18 * 60,
      end: 21 * 60,
      rate: 70,
      label: "6:00 PM – 9:00 PM",
    },
  ],
};

const LARGE_GROUP_RATE = 120;
const LARGE_GROUP_MIN = 25;

const OPENING_TIME = 9 * 60;
const CLOSING_TIME = 21 * 60;

/*
=========================================================
HELPERS
=========================================================
*/

const timeToMinutes = (time) => {
  if (!time) return 0;

  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
};

const minutesToTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
};

const formatTime = (time) => {
  if (!time) return "";

  const [hourString, minuteString] = time.split(":");

  let hour = Number(hourString);
  const minute = minuteString;

  const suffix = hour >= 12 ? "PM" : "AM";

  if (hour === 0) hour = 12;
  if (hour > 12) hour -= 12;

  return `${hour}:${minute} ${suffix}`;
};

const formatHours = (minutes) => {
  const hours = minutes / 60;

  return Number.isInteger(hours) ? hours : hours.toFixed(2);
};

const formatRequestedDate = (dateValue) => {
  if (!dateValue) return "Date not selected";

  const date = new Date(`${dateValue}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

/*
=========================================================
CALCULATE RENTAL
=========================================================
*/

const calculateRental = ({ day, startTime, endTime, guestCount }) => {
  const start = timeToMinutes(startTime);
  const end = timeToMinutes(endTime);

  if (!startTime || !endTime || end <= start) {
    return {
      minutes: 0,
      hours: 0,
      total: 0,
      effectiveRate: 0,
      breakdown: [],
    };
  }

  const duration = end - start;

  /*
   * 25+ guests = $120/hour
   */
  if (guestCount >= LARGE_GROUP_MIN) {
    return {
      minutes: duration,
      hours: duration / 60,
      total: (duration / 60) * LARGE_GROUP_RATE,
      effectiveRate: LARGE_GROUP_RATE,
      breakdown: [
        {
          start,
          end,
          minutes: duration,
          rate: LARGE_GROUP_RATE,
          amount: (duration / 60) * LARGE_GROUP_RATE,
        },
      ],
    };
  }

  const dayRates = rates[day];

  let total = 0;
  const breakdown = [];

  for (const period of dayRates) {
    const overlapStart = Math.max(start, period.start);
    const overlapEnd = Math.min(end, period.end);

    if (overlapEnd > overlapStart) {
      const minutes = overlapEnd - overlapStart;
      const amount = (minutes / 60) * period.rate;

      total += amount;

      breakdown.push({
        start: overlapStart,
        end: overlapEnd,
        minutes,
        rate: period.rate,
        amount,
      });
    }
  }

  return {
    minutes: duration,
    hours: duration / 60,
    total,
    effectiveRate: duration > 0 ? total / (duration / 60) : 0,
    breakdown,
  };
};

/*
=========================================================
COMPONENT
=========================================================
*/

export default function RentalBooking({
  onRentalConfirmed,
  isConfirmationOnly = false,
  confirmationData = null,
  onRentAgain,
}) {
  const { onSubmit, hidden, setText } = useOnSudmit();

  /*
   * =========================================================
   * CONFIRMATION-ONLY MODE
   *
   * This is rendered by StudioRentals after successful submit.
   * Because StudioRentals returns this component instead of
   * the rest of the rental page, the entire rental page
   * disappears.
   * =========================================================
   */

  if (isConfirmationOnly && confirmationData) {
    const {
      reference,
      form,
      day,
      startTime,
      endTime,
      guestCount,
      rental,
      estimate,
      hourlyRate,
    } = confirmationData;

    return (
      <section className="fixed inset-0 z-[99999] min-h-screen w-full overflow-y-auto bg-base-200 px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
        <div className="mx-auto flex min-h-full w-full max-w-6xl items-center justify-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="card w-full bg-base-100 shadow-2xl"
          >
            <div className="card-body items-center text-center p-6 sm:p-8 md:p-12">
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
                Rental Request Received!
              </h1>

              <p className="text-lg mt-4 max-w-2xl">
                Thank you for requesting Freedom Dance Studio. We received your
                rental request successfully.
              </p>

              {/* CONFIRMATION CODE */}

              <div className="badge badge-primary badge-lg mt-5 p-4 text-base">
                Confirmation #{reference}
              </div>

              {/* REQUEST DETAILS */}

              <div className="w-full mt-10">
                <div className="card bg-base-200">
                  <div className="card-body text-left">
                    <h2 className="text-2xl font-bold mb-6 text-center">
                      Your Rental Request
                    </h2>

                    <div className="grid gap-5">
                      {/* DATE */}

                      <div className="flex items-center gap-4">
                        <CalendarDays className="text-primary" size={25} />

                        <div>
                          <p className="text-sm opacity-60">Requested Date</p>

                          <p className="font-bold text-lg">
                            {formatRequestedDate(form.date)}
                          </p>
                        </div>
                      </div>

                      {/* RENTAL TYPE */}

                      <div className="flex items-center gap-4">
                        <CalendarDays className="text-primary" size={25} />

                        <div>
                          <p className="text-sm opacity-60">Rental Type</p>

                          <p className="font-bold text-lg">
                            {day === "weekday" ? "Weekday" : "Weekend"}
                          </p>
                        </div>
                      </div>

                      {/* TIME */}

                      <div className="flex items-center gap-4">
                        <Clock3 className="text-primary" size={25} />

                        <div>
                          <p className="text-sm opacity-60">Requested Time</p>

                          <p className="font-bold text-lg">
                            {formatTime(startTime)} – {formatTime(endTime)}
                          </p>
                        </div>
                      </div>

                      {/* DURATION */}

                      <div className="flex items-center gap-4">
                        <Clock3 className="text-primary" size={25} />

                        <div>
                          <p className="text-sm opacity-60">Duration</p>

                          <p className="font-bold text-lg">
                            {formatHours(rental.minutes)} hour
                            {rental.minutes !== 60 ? "s" : ""}
                          </p>
                        </div>
                      </div>

                      {/* GUESTS */}

                      <div className="flex items-center gap-4">
                        <Users className="text-primary" size={25} />

                        <div>
                          <p className="text-sm opacity-60">Guests</p>

                          <p className="font-bold text-lg">
                            {guestCount || "Not specified"}
                          </p>
                        </div>
                      </div>

                      {/* EVENT TYPE */}

                      <div className="flex items-center gap-4">
                        <Sparkles className="text-primary" size={25} />

                        <div>
                          <p className="text-sm opacity-60">Event Type</p>

                          <p className="font-bold text-lg">
                            {form.eventType || "Not specified"}
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

                      {/* RATE */}

                      <div className="flex justify-between items-center">
                        <span className="font-bold">Hourly Rate</span>

                        <span className="text-primary text-lg font-bold">
                          ${hourlyRate.toFixed(2)}/hr
                        </span>
                      </div>

                      {/* TOTAL */}

                      <div className="flex justify-between items-center">
                        <span className="font-bold">Estimated Total</span>

                        <span className="text-success text-2xl font-bold">
                          ${estimate.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* IMPORTANT MESSAGE */}

              <div className="alert alert-info mt-8 text-left">
                <span>
                  📧 Your rental request has been received successfully. Please
                  save your confirmation number. This request does not
                  automatically confirm your reservation. Freedom Dance Studio
                  will contact you to confirm availability and final pricing.
                </span>
              </div>

              {/* BUTTONS */}

              <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full">
                <a href="/" className="btn btn-primary flex-1">
                  Back to Home
                </a>

                <button
                  type="button"
                  onClick={onRentAgain}
                  className="btn btn-outline flex-1"
                >
                  Rent the Studio Again
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  /*
   * =========================================================
   * NORMAL BOOKING MODE
   * =========================================================
   */

  const [day, setDay] = useState("weekday");

  const [startTime, setStartTime] = useState("12:00");
  const [endTime, setEndTime] = useState("14:00");

  const [guests, setGuests] = useState("");

  const [showRequest, setShowRequest] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  });

  const guestCount = Number(guests) || 0;

  const isLargeGroup = guestCount >= LARGE_GROUP_MIN;

  const rental = useMemo(
    () =>
      calculateRental({
        day,
        startTime,
        endTime,
        guestCount,
      }),
    [day, startTime, endTime, guestCount],
  );

  const estimate = rental.total;

  const hourlyRate = rental.effectiveRate;

  /*
   * =========================================================
   * TIME / FORM HANDLERS
   * =========================================================
   */

  const handleDayChange = (newDay) => {
    setDay(newDay);
  };

  const handleStartTimeChange = (e) => {
    const newStart = e.target.value;

    setStartTime(newStart);

    const startMinutes = timeToMinutes(newStart);

    const currentEndMinutes = timeToMinutes(endTime);

    if (currentEndMinutes <= startMinutes) {
      const suggestedEnd = Math.min(startMinutes + 60, CLOSING_TIME);

      if (suggestedEnd > startMinutes) {
        setEndTime(minutesToTime(suggestedEnd));
      }
    }
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setGuests("");
      return;
    }

    setGuests(Math.max(1, Number(value) || 1));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  /*
   * =========================================================
   * MODAL
   * =========================================================
   */

  const openRequest = () => {
    setShowRequest(true);
    document.body.style.overflow = "hidden";
  };

  const closeRequest = () => {
    setShowRequest(false);
    document.body.style.overflow = "";
  };

  /*
   * =========================================================
   * VALIDATION
   * =========================================================
   */

  const invalidTime =
    !startTime ||
    !endTime ||
    timeToMinutes(endTime) <= timeToMinutes(startTime);

  const outsideHours =
    timeToMinutes(startTime) < OPENING_TIME ||
    timeToMinutes(endTime) > CLOSING_TIME;

  const canRequest = !invalidTime && !outsideHours && rental.minutes > 0;

  /*
   * =========================================================
   * SUBMIT
   * =========================================================
   */

  const handleRentalSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    if (!canRequest) return;

    setIsSubmitting(true);

    setText(
      "Your studio rental request has been received successfully. We will contact you to confirm availability and final pricing.",
    );

    try {
      const result = await onSubmit(event);

      if (result?.success) {
        const reference = `FDS-${Math.floor(100000 + Math.random() * 900000)}`;

        /*
         * Close modal.
         */

        setShowRequest(false);

        document.body.style.overflow = "";

        /*
         * IMPORTANT:
         *
         * Instead of setting confirmation locally,
         * tell StudioRentals that the request succeeded.
         *
         * StudioRentals will then completely replace
         * the RentalStudio page with the confirmation screen.
         */

        if (onRentalConfirmed) {
          onRentalConfirmed({
            reference,
            form,
            day,
            startTime,
            endTime,
            guestCount,
            rental,
            estimate,
            hourlyRate,
          });
        }
      }
    } catch (error) {
      console.error("Rental request failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /*
   * =========================================================
   * RENTAL PAGE
   * =========================================================
   */

  return (
    <>
      <section
        id="booking"
        className="relative overflow-hidden bg-neutral py-20 text-neutral-content sm:py-24 lg:py-28"
      >
        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT */}

            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">
                Ready to book?
              </p>

              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
                Let’s plan your
                <span className="block text-primary">rental.</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
                Choose your day, your exact start and end time, and the number
                of guests. We'll calculate your estimated rental price
                automatically.
              </p>

              <div className="mt-8 space-y-3 text-sm text-white/75">
                <div className="flex items-center gap-3">
                  <CalendarDays size={18} className="text-primary" />
                  Weekday & weekend options
                </div>

                <div className="flex items-center gap-3">
                  <Clock3 size={18} className="text-primary" />
                  Choose your exact rental time
                </div>

                <div className="flex items-center gap-3">
                  <Users size={18} className="text-primary" />
                  Classes, rehearsals and events
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="btn btn-primary rounded-full px-7"
                >
                  <MessageCircle size={17} />
                  Contact Us
                </a>

                <a
                  href="mailto:info@vegasfreedomdancestudio.com"
                  className="btn rounded-full border-white/15 bg-white/10 text-white hover:bg-white/15"
                >
                  <Mail size={17} />
                  Email Us
                </a>
              </div>
            </div>

            {/* BOOKING CARD */}

            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl sm:p-7"
            >
              {/* DAY */}

              <div className="grid grid-cols-2 gap-2 rounded-2xl bg-black/20 p-2">
                <button
                  type="button"
                  onClick={() => handleDayChange("weekday")}
                  className={`btn rounded-xl border-0 transition-all duration-300 ${
                    day === "weekday"
                      ? "btn-primary shadow-lg shadow-primary/20"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Week day
                </button>

                <button
                  type="button"
                  onClick={() => handleDayChange("weekend")}
                  className={`btn rounded-xl border-0 transition-all duration-300 ${
                    day === "weekend"
                      ? "btn-primary shadow-lg shadow-primary/20"
                      : "bg-white/5 text-white hover:bg-white/10"
                  }`}
                >
                  Weekend
                </button>
              </div>

              {/* TIME */}

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="form-control">
                  <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                    Start Time
                  </span>

                  <input
                    type="time"
                    min="09:00"
                    max="20:00"
                    step="1800"
                    value={startTime}
                    onChange={handleStartTimeChange}
                    className="input input-bordered w-full rounded-xl border-white/10 bg-white/10 text-white outline-none transition-all duration-300 hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />

                  <span className="mt-2 text-xs text-white/40">
                    {formatTime(startTime)}
                  </span>
                </label>

                <label className="form-control">
                  <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                    End Time
                  </span>

                  <input
                    type="time"
                    min="10:00"
                    max="21:00"
                    step="1800"
                    value={endTime}
                    onChange={handleEndTimeChange}
                    className="input input-bordered w-full rounded-xl border-white/10 bg-white/10 text-white outline-none transition-all duration-300 hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />

                  <span className="mt-2 text-xs text-white/40">
                    {formatTime(endTime)}
                  </span>
                </label>

                {/* GUESTS */}

                <label className="form-control sm:col-span-2">
                  <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                    Estimated Guests
                  </span>

                  <input
                    type="number"
                    min="1"
                    value={guests}
                    onChange={handleGuestsChange}
                    placeholder="How many people?"
                    className="input input-bordered rounded-xl border-white/10 bg-white/10 text-white placeholder:text-white/25 outline-none transition-all duration-300 hover:border-primary/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />

                  {isLargeGroup && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -6,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="mt-2 flex items-center gap-2 text-xs font-semibold text-primary"
                    >
                      <CheckCircle2 size={15} />
                      Groups of 25 guests or more:
                      <span className="font-black">$120/hour</span>
                    </motion.div>
                  )}
                </label>
              </div>

              {/* VALIDATION */}

              {invalidTime && (
                <div className="alert alert-error mt-5 text-sm">
                  <Clock3 size={18} />
                  <span>End time must be later than the start time.</span>
                </div>
              )}

              {outsideHours && !invalidTime && (
                <div className="alert alert-warning mt-5 text-sm">
                  <Clock3 size={18} />
                  <span>
                    Studio rentals are available between 9:00 AM and 9:00 PM.
                  </span>
                </div>
              )}

              {/* PRICE */}

              <motion.div
                key={`${day}-${startTime}-${endTime}-${guestCount}`}
                initial={{
                  opacity: 0.6,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="mt-6 rounded-2xl bg-primary p-6 text-primary-content"
              >
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] opacity-70">
                      Estimated Rental
                    </p>

                    <p className="mt-1 text-4xl font-black">
                      ${estimate.toFixed(2)}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs opacity-70">
                      {formatTime(startTime)} – {formatTime(endTime)}
                    </p>

                    <p className="mt-1 text-xs opacity-70">
                      {formatHours(rental.minutes)} hour
                      {rental.minutes !== 60 ? "s" : ""}
                    </p>
                  </div>
                </div>

                {/* BREAKDOWN */}

                {rental.breakdown.length > 0 && (
                  <div className="mt-5 border-t border-white/20 pt-4">
                    <p className="mb-2 text-[10px] font-black uppercase tracking-wider opacity-60">
                      Price Breakdown
                    </p>

                    <div className="space-y-1">
                      {rental.breakdown.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between gap-4 text-xs"
                        >
                          <span>
                            {formatTime(
                              minutesToTime(
                                item.start ?? timeToMinutes(startTime),
                              ),
                            )}
                            {" – "}
                            {formatTime(
                              minutesToTime(item.end ?? timeToMinutes(endTime)),
                            )}
                          </span>

                          <span className="font-bold">
                            {item.minutes / 60} hr × ${item.rate} = $
                            {item.amount.toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {isLargeGroup && (
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-wider opacity-60">
                    25+ guest rate applied: $120/hour
                  </p>
                )}
              </motion.div>

              {/* BUTTONS */}

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={openRequest}
                  disabled={!canRequest}
                  className="btn btn-primary rounded-xl disabled:opacity-40"
                >
                  Request Availability
                  <ArrowRight size={17} />
                </button>

                <a
                  href="/contact"
                  className="btn rounded-xl border-white/10 bg-white/5 text-white hover:bg-white/10"
                >
                  Ask a Question
                </a>
              </div>

              <p className="mt-4 text-center text-xs leading-5 text-white/35">
                Estimates do not confirm availability. Events, parties and large
                groups may have different rates and fees.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* REQUEST MODAL */}

      <AnimatePresence>
        {showRequest && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          >
            {/* BACKDROP */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={closeRequest}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* MODAL */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-white/10 bg-neutral shadow-2xl"
            >
              {/* HEADER */}

              <div className="sticky top-0 z-20 border-b border-white/10 bg-neutral/95 p-5 backdrop-blur-xl sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-primary">
                      <Sparkles size={13} />
                      Rental Request
                    </div>

                    <h3 className="text-2xl font-black text-white sm:text-3xl">
                      Request Studio Availability
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-white/50">
                      Tell us about your rental and we'll get back to you to
                      confirm availability.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closeRequest}
                    className="btn btn-circle btn-sm border-white/10 bg-white/5 text-white hover:bg-white/10"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* BODY */}

              <div className="p-5 sm:p-7">
                {/* SUMMARY */}

                <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-primary">
                    <CheckCircle2 size={15} />
                    Your Rental Selection
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
                        Requested Date
                      </p>

                      <p className="mt-1 font-bold text-white">
                        {formatRequestedDate(form.date)}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
                        Day
                      </p>

                      <p className="mt-1 font-bold text-white">
                        {day === "weekday" ? "Weekday" : "Weekend"}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
                        Start Time
                      </p>

                      <p className="mt-1 font-bold text-white">
                        {formatTime(startTime)}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
                        End Time
                      </p>

                      <p className="mt-1 font-bold text-white">
                        {formatTime(endTime)}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
                        Duration
                      </p>

                      <p className="mt-1 font-bold text-white">
                        {formatHours(rental.minutes)} hour
                        {rental.minutes !== 60 ? "s" : ""}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-white/35">
                        Guests
                      </p>

                      <p className="mt-1 font-bold text-white">
                        {guestCount || "Not specified"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-primary/10 pt-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/40">
                        Estimated Total
                      </span>

                      <span className="text-2xl font-black text-primary">
                        ${estimate.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* FORM */}

                <form onSubmit={handleRentalSubmit} className="mt-7 space-y-5">
                  <input
                    type="hidden"
                    name="subject"
                    value={`New Studio Rental Request - ${
                      form.name || "Customer"
                    }`}
                    readOnly
                  />

                  <input
                    type="hidden"
                    name="rentalType"
                    value="Studio Rental"
                  />

                  <input
                    type="hidden"
                    name="rentalDay"
                    value={day === "weekday" ? "Weekday" : "Weekend"}
                  />

                  <input type="hidden" name="requestedDate" value={form.date} />

                  <input
                    type="hidden"
                    name="startTime"
                    value={formatTime(startTime)}
                  />

                  <input
                    type="hidden"
                    name="endTime"
                    value={formatTime(endTime)}
                  />

                  <input
                    type="hidden"
                    name="requestedTime"
                    value={`${formatTime(startTime)} - ${formatTime(endTime)}`}
                  />

                  <input
                    type="hidden"
                    name="hours"
                    value={formatHours(rental.minutes)}
                  />

                  <input
                    type="hidden"
                    name="guestCount"
                    value={guestCount || "Not specified"}
                  />

                  <input
                    type="hidden"
                    name="hourlyRate"
                    value={hourlyRate.toFixed(2)}
                  />

                  <input
                    type="hidden"
                    name="estimatedTotal"
                    value={estimate.toFixed(2)}
                  />

                  {/* NAME + PHONE */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="form-control">
                      <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                        Your Name
                      </span>

                      <div className="relative">
                        <User
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                        />

                        <input
                          required
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleFormChange}
                          placeholder="Your full name"
                          className="input input-bordered w-full rounded-xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-white/25 focus:border-primary focus:outline-none"
                        />
                      </div>
                    </label>

                    <label className="form-control">
                      <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                        Phone
                      </span>

                      <div className="relative">
                        <Phone
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                        />

                        <input
                          required
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleFormChange}
                          placeholder="(702) 000-0000"
                          className="input input-bordered w-full rounded-xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-white/25 focus:border-primary focus:outline-none"
                        />
                      </div>
                    </label>
                  </div>

                  {/* EMAIL + EVENT */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="form-control">
                      <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                        Email
                      </span>

                      <div className="relative">
                        <Mail
                          size={17}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
                        />

                        <input
                          required
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleFormChange}
                          placeholder="you@example.com"
                          className="input input-bordered w-full rounded-xl border-white/10 bg-white/5 pl-11 text-white placeholder:text-white/25 focus:border-primary focus:outline-none"
                        />
                      </div>
                    </label>

                    <label className="form-control">
                      <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                        Event Type
                      </span>

                      <select
                        required
                        name="eventType"
                        value={form.eventType}
                        onChange={handleFormChange}
                        className="select select-bordered w-full rounded-xl border-white/10 bg-white/5 text-white focus:border-primary focus:outline-none"
                      >
                        <option value="" disabled className="bg-neutral">
                          Select event type
                        </option>

                        <option
                          value="Private Event"
                          className="bg-neutral text-white"
                        >
                          Private Event
                        </option>

                        <option
                          value="Dance Class"
                          className="bg-neutral text-white"
                        >
                          Dance Class
                        </option>

                        <option
                          value="Workshop"
                          className="bg-neutral text-white"
                        >
                          Workshop
                        </option>

                        <option
                          value="Rehearsal"
                          className="bg-neutral text-white"
                        >
                          Rehearsal
                        </option>

                        <option
                          value="Photo / Video"
                          className="bg-neutral text-white"
                        >
                          Photo / Video
                        </option>

                        <option value="Other" className="bg-neutral text-white">
                          Other
                        </option>
                      </select>
                    </label>
                  </div>

                  {/* DATE */}

                  <label className="form-control">
                    <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                      Requested Date
                    </span>

                    <input
                      required
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleFormChange}
                      className="input input-bordered w-full rounded-xl border-white/10 bg-white/5 text-white focus:border-primary focus:outline-none"
                    />
                  </label>

                  {/* MESSAGE */}

                  <label className="form-control">
                    <span className="mb-2 text-xs font-black uppercase tracking-wider text-white/40">
                      Special Request / Additional Details
                    </span>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleFormChange}
                      rows="4"
                      placeholder="Tell us about your event, setup needs, equipment, special requests, etc."
                      className="textarea textarea-bordered w-full resize-none rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/25 focus:border-primary focus:outline-none"
                    />
                  </label>

                  {/* TOTAL */}

                  <div className="rounded-2xl bg-white/5 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-wider text-white/40">
                          Estimated Total
                        </p>

                        <p className="mt-1 text-3xl font-black text-primary">
                          ${estimate.toFixed(2)}
                        </p>
                      </div>

                      <div className="text-right text-xs text-white/40">
                        <p>
                          {formatTime(startTime)} – {formatTime(endTime)}
                        </p>

                        <p>
                          {formatHours(rental.minutes)} hour
                          {rental.minutes !== 60 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    disabled={hidden || isSubmitting || !canRequest}
                    className="btn btn-primary btn-lg w-full rounded-xl shadow-lg shadow-primary/20 disabled:opacity-40"
                  >
                    {hidden || isSubmitting ? (
                      <>
                        <span className="loading loading-spinner"></span>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Rental Request
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs leading-5 text-white/30">
                    Sending this request does not guarantee your reservation.
                    Freedom Dance Studio will contact you to confirm
                    availability and final pricing.
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
