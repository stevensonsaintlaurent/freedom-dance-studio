import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  UserRound,
  Mail,
  Phone,
  CalendarDays,
  Music2,
  CreditCard,
  ShieldCheck,
  Camera,
  CheckCircle2,
  ArrowRight,
  Info,
  Heart,
  Sparkles,
} from "lucide-react";
import useOnSudmit from "../hooks/useOnSudmit";

const MembershipForm = () => {
  const location = useLocation();

  const membership = location.state || {};

  const { name: membershipName, title, price, description } = membership;

  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const { setText, onSubmit } = useOnSudmit();

  const membershipTitle =
    title || membershipName || "Freedom Dance Studio Membership";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      return;
    }

    setText(
      "We've received your Freedom Dance Studio membership request. A team member will contact you shortly to confirm your membership.",
    );

    try {
      await onSubmit(e);
      setSubmitted(true);
    } catch (error) {
      console.error("Membership submission error:", error);
    }
  };

  /* =========================================================
     SUCCESS SCREEN
  ========================================================= */

  if (submitted) {
    return (
      <section className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-2xl">
          <div className="card bg-base-100 border border-base-300 shadow-2xl overflow-hidden">
            {/* Success Header */}
            <div className="bg-primary text-primary-content px-6 py-10 md:px-10 text-center">
              <div className="flex justify-center mb-5">
                <div className="w-20 h-20 rounded-full bg-white/15 flex items-center justify-center">
                  <CheckCircle2 size={48} />
                </div>
              </div>

              <p className="text-sm uppercase tracking-[0.2em] font-semibold opacity-90">
                Freedom Dance Studio
              </p>

              <h1 className="text-3xl md:text-4xl font-bold mt-2">
                Request Received!
              </h1>
            </div>

            <div className="card-body p-6 md:p-10 text-center">
              <p className="text-lg leading-relaxed text-base-content/70">
                Thank you for choosing{" "}
                <strong className="text-base-content">
                  Freedom Dance Studio
                </strong>
                .
              </p>

              <p className="mt-3 text-base-content/70 leading-relaxed">
                We've received your membership request. A member of our team
                will review your information and contact you shortly.
              </p>

              {/* Membership Summary */}
              <div className="bg-base-200 rounded-2xl p-6 mt-7 text-left border border-base-300">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CreditCard size={20} className="text-primary" />
                  </div>

                  <div>
                    <h2 className="font-bold text-lg">Your Membership</h2>

                    <p className="text-sm text-base-content/60">
                      Membership requested
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div>
                    <p className="font-bold text-xl">{membershipTitle}</p>

                    {description && (
                      <p className="text-sm text-base-content/60 mt-1">
                        {description}
                      </p>
                    )}
                  </div>

                  {price && (
                    <div className="sm:text-right">
                      <p className="text-sm text-base-content/60">Price</p>

                      <p className="text-2xl font-bold text-primary">{price}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Information */}
              <div className="alert alert-info mt-6 text-left">
                <CreditCard size={22} className="shrink-0" />

                <div>
                  <p className="font-bold">Payment is completed in person</p>

                  <p className="text-sm mt-1 leading-relaxed">
                    Your membership request does not process an online payment.
                    Please visit Freedom Dance Studio to complete your
                    membership payment before your first class.
                  </p>
                </div>
              </div>

              {/* Final Message */}
              <div className="flex items-center justify-center gap-2 mt-7 text-base-content/60">
                <Heart size={18} className="text-primary" />

                <p className="text-sm">
                  We look forward to welcoming you to the Freedom Dance family!
                </p>
              </div>

              <button
                type="button"
                className="btn btn-primary mt-8"
                onClick={() => window.location.reload()}
              >
                Register Another Member
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* =========================================================
     MAIN FORM
  ========================================================= */

  return (
    <section className="min-h-screen bg-base-200 py-10 md:py-16 px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* =====================================================
            PAGE HEADER
        ===================================================== */}

        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              <Sparkles size={16} />
              Freedom Dance Studio
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Become a Member
          </h1>

          <p className="mt-5 text-base md:text-lg text-base-content/70 leading-relaxed">
            Join our dance community and enjoy access to our regular studio
            classes, workshops, social events, and member benefits.
          </p>
        </div>

        {/* =====================================================
            IMPORTANT INFORMATION
        ===================================================== */}

        <div className="grid md:grid-cols-2 gap-5 mb-10">
          {/* Payment Notice */}
          <div className="rounded-2xl bg-base-100 border border-base-300 shadow-sm p-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-warning/15 flex items-center justify-center shrink-0">
                <CreditCard size={21} className="text-warning" />
              </div>

              <div>
                <h2 className="font-bold text-lg">Payment is In Person</h2>

                <p className="text-sm text-base-content/70 mt-2 leading-relaxed">
                  This form submits a membership request only. No payment is
                  processed online. Membership payment must be completed at the
                  studio.
                </p>
              </div>
            </div>
          </div>

          {/* Schedule Notice */}
          <div className="rounded-2xl bg-base-100 border border-base-300 shadow-sm p-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <CalendarDays size={21} className="text-primary" />
              </div>

              <div className="flex-1">
                <h2 className="font-bold text-lg">Check the Class Schedule</h2>

                <p className="text-sm text-base-content/70 mt-2 leading-relaxed">
                  Review our weekly schedule to find the classes available
                  through your membership.
                </p>

                <Link
                  to="/schedule"
                  className="btn btn-sm btn-outline btn-primary mt-4"
                >
                  View Class Schedule
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            INDEPENDENT CLASS NOTICE
        ===================================================== */}

        <div className="rounded-2xl border border-info/30 bg-info/5 p-6 mb-10">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-info/15 flex items-center justify-center shrink-0">
              <Info size={22} className="text-info" />
            </div>

            <div>
              <h2 className="font-bold text-lg">
                Important: Independent Instructor Classes
              </h2>

              <p className="text-sm md:text-base text-base-content/70 mt-2 leading-relaxed">
                Freedom Dance Studio also hosts classes taught by independent
                instructors. These classes are{" "}
                <strong className="text-base-content">
                  not included in studio memberships.
                </strong>
              </p>

              <p className="text-sm text-base-content/70 mt-2 leading-relaxed">
                Independent instructors manage their own registration, pricing,
                payments, class policies, and cancellations. Please check the
                schedule and individual class information for details.
              </p>

              <Link
                to="/schedule"
                className="link link-info font-semibold text-sm inline-block mt-3"
              >
                View all classes →
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            FORM
        ===================================================== */}

        <form
          onSubmit={handleSubmit}
          className="card bg-base-100 border border-base-300 shadow-xl overflow-hidden"
        >
          <div className="card-body p-5 sm:p-7 md:p-10">
            {/* =================================================
                SECTION 1 — PERSONAL INFORMATION
            ================================================= */}

            <div className="mb-7">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <UserRound size={22} className="text-primary" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">Personal Information</h2>

                  <p className="text-sm text-base-content/60 mt-1">
                    Please provide your contact information.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* First Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">First Name *</span>
                </label>

                <input
                  required
                  type="text"
                  name="firstName"
                  placeholder="John"
                  className="input input-bordered w-full"
                  autoComplete="given-name"
                />
              </div>

              {/* Last Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Last Name *</span>
                </label>

                <input
                  required
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  className="input input-bordered w-full"
                  autoComplete="family-name"
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Email Address *
                  </span>
                </label>

                <label className="input input-bordered flex items-center gap-3 w-full">
                  <Mail size={18} className="text-base-content/40 shrink-0" />

                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="john@email.com"
                    className="grow"
                    autoComplete="email"
                  />
                </label>
              </div>

              {/* Phone */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Phone Number *
                  </span>
                </label>

                <label className="input input-bordered flex items-center gap-3 w-full">
                  <Phone size={18} className="text-base-content/40 shrink-0" />

                  <input
                    required
                    type="tel"
                    name="phone"
                    placeholder="(702) 555-5555"
                    className="grow"
                    autoComplete="tel"
                  />
                </label>
              </div>

              {/* Date of Birth */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Date of Birth *
                  </span>
                </label>

                <label className="input input-bordered flex items-center gap-3 w-full">
                  <CalendarDays
                    size={18}
                    className="text-base-content/40 shrink-0"
                  />

                  <input
                    required
                    type="date"
                    name="dateOfBirth"
                    className="grow"
                  />
                </label>
              </div>

              {/* Gender */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Gender</span>
                </label>

                <select
                  name="gender"
                  defaultValue=""
                  className="select select-bordered w-full"
                >
                  <option value="" disabled>
                    Select an option
                  </option>

                  <option value="Male">Male</option>

                  <option value="Female">Female</option>

                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>
            </div>

            {/* =================================================
                SECTION 2 — DANCE INFORMATION
            ================================================= */}

            <div className="divider my-10"></div>

            <div className="mb-7">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Music2 size={22} className="text-secondary" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">Dance Information</h2>

                  <p className="text-sm text-base-content/60 mt-1">
                    Help us understand your dance interests and experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Dance Style */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Preferred Dance Style *
                  </span>
                </label>

                <select
                  required
                  name="danceStyle"
                  defaultValue=""
                  className="select select-bordered w-full"
                >
                  <option value="" disabled>
                    Select a dance style
                  </option>

                  <option value="Salsa">Salsa</option>

                  <option value="Bachata">Bachata</option>

                  <option value="Kizomba">Kizomba</option>

                  <option value="Konpa">Konpa</option>

                  <option value="Multiple / Other">Multiple / Other</option>
                </select>
              </div>

              {/* Experience Level */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Experience Level
                  </span>
                </label>

                <select
                  name="experienceLevel"
                  defaultValue=""
                  className="select select-bordered w-full"
                >
                  <option value="" disabled>
                    Select your level
                  </option>

                  <option value="Beginner">Beginner</option>

                  <option value="Improver">Improver</option>

                  <option value="Intermediate">Intermediate</option>

                  <option value="Intermediate & Beyond">
                    Intermediate & Beyond
                  </option>

                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            {/* Dance Experience */}
            <div className="form-control mt-5">
              <label className="label">
                <span className="label-text font-semibold">
                  Tell Us About Your Dance Experience
                </span>
              </label>

              <textarea
                name="danceExperience"
                className="textarea textarea-bordered min-h-32 w-full"
                placeholder="Tell us about your dance experience, goals, or what you'd like to learn..."
              ></textarea>

              <label className="label">
                <span className="label-text-alt text-base-content/50">
                  Optional
                </span>
              </label>
            </div>

            {/* =================================================
                SECTION 3 — MEMBERSHIP
            ================================================= */}

            <div className="divider my-10"></div>

            <div className="mb-7">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                  <CreditCard size={22} className="text-accent" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">Membership Selection</h2>

                  <p className="text-sm text-base-content/60 mt-1">
                    Review the membership you selected.
                  </p>
                </div>
              </div>
            </div>

            {/* Membership Card */}
            <div className="rounded-2xl bg-base-200 border border-base-300 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-primary mb-2">
                    Selected Membership
                  </p>

                  <h3 className="text-2xl font-bold">{membershipTitle}</h3>

                  {description && (
                    <p className="text-sm text-base-content/60 mt-2 max-w-xl leading-relaxed">
                      {description}
                    </p>
                  )}
                </div>

                {price && (
                  <div className="md:text-right shrink-0">
                    <p className="text-xs uppercase tracking-wider text-base-content/50">
                      Membership Price
                    </p>

                    <p className="text-3xl font-bold text-primary mt-1">
                      {price}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Hidden Membership Values */}
            <input type="hidden" name="membership" value={membershipTitle} />

            <input type="hidden" name="membershipPrice" value={price || ""} />

            <input
              type="hidden"
              name="membershipDescription"
              value={description || ""}
            />

            {/* =================================================
                SECTION 4 — SCHEDULE INFORMATION
            ================================================= */}

            <div className="rounded-2xl bg-primary/5 border border-primary/20 p-6 mt-6">
              <div className="flex items-start gap-4">
                <CalendarDays
                  size={22}
                  className="text-primary shrink-0 mt-1"
                />

                <div className="flex-1">
                  <h3 className="font-bold text-lg">Choose Your Classes</h3>

                  <p className="text-sm text-base-content/70 mt-2 leading-relaxed">
                    Memberships apply to eligible Freedom Dance Studio classes
                    listed on our schedule. Class availability, times, and
                    instructors may change.
                  </p>

                  <Link to="/schedule" className="btn btn-primary btn-sm mt-4">
                    View Weekly Schedule
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Independent Classes Reminder */}
            <div className="alert alert-info mt-5">
              <Info size={20} className="shrink-0" />

              <div>
                <p className="font-semibold">
                  Independent classes are not included
                </p>

                <p className="text-sm mt-1 leading-relaxed">
                  Some classes at Freedom Dance Studio are taught by independent
                  instructors. These classes are separate from studio
                  memberships and may have their own pricing, registration, and
                  policies.
                </p>
              </div>
            </div>

            {/* =================================================
                SECTION 5 — POLICIES & AGREEMENTS
            ================================================= */}

            <div className="divider my-10"></div>

            <div className="mb-7">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-error/10 flex items-center justify-center">
                  <ShieldCheck size={22} className="text-error" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">Policies & Agreements</h2>

                  <p className="text-sm text-base-content/60 mt-1">
                    Please review each item carefully before submitting.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {/* Membership Policy */}
              <label className="block cursor-pointer">
                <div className="rounded-2xl border border-base-300 bg-base-100 p-5 hover:border-primary/40 transition-all">
                  <div className="flex items-start gap-4">
                    <input
                      required
                      type="checkbox"
                      name="membershipPolicyAgreement"
                      value="Agreed"
                      className="checkbox checkbox-primary mt-1"
                    />

                    <div>
                      <p className="font-bold">Membership Policy Agreement *</p>

                      <p className="text-sm text-base-content/70 mt-2 leading-relaxed">
                        I understand that my membership is subject to Freedom
                        Dance Studio's membership terms, class guidelines,
                        scheduling policies, cancellation policies, and studio
                        rules.
                      </p>
                    </div>
                  </div>
                </div>
              </label>

              {/* Liability Waiver */}
              <label className="block cursor-pointer">
                <div className="rounded-2xl border border-base-300 bg-base-100 p-5 hover:border-primary/40 transition-all">
                  <div className="flex items-start gap-4">
                    <input
                      required
                      type="checkbox"
                      name="liabilityWaiverAgreement"
                      value="Agreed"
                      className="checkbox checkbox-primary mt-1"
                    />

                    <div>
                      <p className="font-bold">Liability Waiver & Release *</p>

                      <p className="text-sm text-base-content/70 mt-2 leading-relaxed">
                        I understand that dancing, physical exercise, and
                        participation in studio activities involve inherent
                        risks, including the possibility of injury. I
                        voluntarily participate in these activities and agree to
                        release and hold harmless Freedom Dance Studio, its
                        owners, instructors, staff, and representatives from
                        claims arising from my participation, to the extent
                        permitted by applicable law.
                      </p>

                      <p className="text-xs text-base-content/50 mt-3">
                        Please review the complete studio waiver before agreeing
                        to this section.
                      </p>
                    </div>
                  </div>
                </div>
              </label>

              {/* Studio Conduct */}
              <label className="block cursor-pointer">
                <div className="rounded-2xl border border-base-300 bg-base-100 p-5 hover:border-primary/40 transition-all">
                  <div className="flex items-start gap-4">
                    <input
                      required
                      type="checkbox"
                      name="studioConductAgreement"
                      value="Agreed"
                      className="checkbox checkbox-primary mt-1"
                    />

                    <div>
                      <p className="font-bold">Studio Conduct & Respect *</p>

                      <p className="text-sm text-base-content/70 mt-2 leading-relaxed">
                        I agree to contribute to a welcoming studio environment
                        based on respect, kindness, consent, and consideration
                        for other students, instructors, and staff. I understand
                        that inappropriate or disrespectful behavior may result
                        in removal from studio activities.
                      </p>
                    </div>
                  </div>
                </div>
              </label>

              {/* Payment Agreement */}
              <label className="block cursor-pointer">
                <div className="rounded-2xl border border-base-300 bg-base-100 p-5 hover:border-primary/40 transition-all">
                  <div className="flex items-start gap-4">
                    <input
                      required
                      type="checkbox"
                      name="paymentAgreement"
                      value="Agreed"
                      className="checkbox checkbox-primary mt-1"
                    />

                    <div>
                      <p className="font-bold">
                        Membership Payment Agreement *
                      </p>

                      <p className="text-sm text-base-content/70 mt-2 leading-relaxed">
                        I understand that this online form does not process
                        payment. My membership payment must be completed in
                        person at Freedom Dance Studio before my membership
                        becomes active.
                      </p>
                    </div>
                  </div>
                </div>
              </label>

              {/* Independent Class Agreement */}
              <label className="block cursor-pointer">
                <div className="rounded-2xl border border-info/30 bg-info/5 p-5 hover:border-info/50 transition-all">
                  <div className="flex items-start gap-4">
                    <input
                      required
                      type="checkbox"
                      name="independentClassAgreement"
                      value="Acknowledged"
                      className="checkbox checkbox-info mt-1"
                    />

                    <div>
                      <p className="font-bold">
                        Independent Class Acknowledgment *
                      </p>

                      <p className="text-sm text-base-content/70 mt-2 leading-relaxed">
                        I understand that classes taught by independent
                        instructors are not included in my Freedom Dance Studio
                        membership and may require separate registration and
                        payment directly with the independent instructor.
                      </p>
                    </div>
                  </div>
                </div>
              </label>
            </div>

            {/* =================================================
                SECTION 6 — PHOTO / VIDEO
            ================================================= */}

            <div className="divider my-10"></div>

            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Camera size={22} className="text-secondary" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">Photo & Video</h2>

                  <p className="text-sm text-base-content/60 mt-1">
                    Choose whether you would like to participate.
                  </p>
                </div>
              </div>
            </div>

            {/* Media Consent */}
            <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
              <label className="flex items-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  name="mediaRelease"
                  value="Agreed"
                  className="checkbox checkbox-primary mt-1"
                />

                <div>
                  <p className="font-bold">I consent to Photo & Video Use</p>

                  <p className="text-sm text-base-content/70 mt-2 leading-relaxed">
                    I understand that photographs or videos may be taken during
                    classes, workshops, social events, or other studio
                    activities and may be used by Freedom Dance Studio for
                    promotional, educational, website, or social media purposes.
                  </p>

                  <p className="text-xs text-base-content/50 mt-3">
                    This consent is optional and is separate from the membership
                    agreement.
                  </p>
                </div>
              </label>
            </div>

            {/* =================================================
                SECTION 7 — FINAL CONFIRMATION
            ================================================= */}

            <div className="divider my-10"></div>

            <div className="mb-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-success/10 flex items-center justify-center">
                  <CheckCircle2 size={22} className="text-success" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold">Final Confirmation</h2>

                  <p className="text-sm text-base-content/60 mt-1">
                    One final step before submitting your request.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-base-200 border border-base-300 p-6">
              <label className="flex items-start gap-4 cursor-pointer">
                <input
                  required
                  type="checkbox"
                  name="finalMembershipConfirmation"
                  value="Confirmed"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="checkbox checkbox-primary mt-1"
                />

                <div>
                  <p className="font-bold text-lg">
                    I confirm my membership request *
                  </p>

                  <p className="text-sm text-base-content/70 mt-2 leading-relaxed">
                    I confirm that the information I have provided is accurate.
                    I acknowledge that I have reviewed the membership
                    information, studio policies, liability waiver, payment
                    terms, and independent class information provided above.
                  </p>
                </div>
              </label>
            </div>

            {/* =================================================
                PRIVACY NOTICE
            ================================================= */}

            <div className="flex items-start gap-3 mt-6 px-1">
              <ShieldCheck size={19} className="text-primary shrink-0 mt-0.5" />

              <p className="text-xs text-base-content/50 leading-relaxed">
                Your information will be used by Freedom Dance Studio to process
                your membership request and communicate with you about your
                membership.
              </p>
            </div>

            {/* =================================================
                SUBMIT BUTTON
            ================================================= */}

            <button
              type="submit"
              disabled={!agreed}
              className="btn btn-primary btn-lg w-full mt-8"
            >
              Submit Membership Request
              <ArrowRight size={19} />
            </button>

            <p className="text-center text-xs text-base-content/50 mt-4">
              Membership payment is completed in person at Freedom Dance Studio.
            </p>
          </div>
        </form>

        {/* =====================================================
            BOTTOM STUDIO MESSAGE
        ===================================================== */}

        <div className="text-center mt-10 max-w-2xl mx-auto">
          <div className="flex justify-center mb-3">
            <Heart size={22} className="text-primary" />
          </div>

          <p className="font-semibold">Dance. Connect. Grow.</p>

          <p className="text-sm text-base-content/60 mt-2">
            We're excited to have you be part of the Freedom Dance Studio
            community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MembershipForm;
