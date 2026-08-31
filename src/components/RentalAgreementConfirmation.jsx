import { useState } from "react";
import {
  AlertTriangle,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileCheck2,
  GlassWater,
  Home,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

/*
=========================================================
FREEDOM DANCE STUDIO
Rental Agreement & Booking Confirmation

Vite + React + Tailwind CSS + DaisyUI
No separate CSS required.

USAGE:

<RentalAgreementConfirmation
  bookingData={bookingData}
  onConfirmed={(data) => {
    console.log("Agreement accepted:", data);
  }}
/>

Expected bookingData can contain:
{
  name,
  email,
  phone,
  rentalDate,
  startTime,
  endTime,
  hours,
  guestCount,
  total,
  deposit,
  location
}
=========================================================
*/

export default function RentalAgreementConfirmation({
  bookingData = {},
  onConfirmed,
}) {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToDeposit, setAgreedToDeposit] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    name = "",
    email = "",
    phone = "",
    rentalDate = "",
    startTime = "",
    endTime = "",
    hours = "",
    guestCount = "",
    total = 0,
    deposit = "",
    location = "Freedom Dance Studio",
  } = bookingData;

  /*
   * If deposit is not supplied, automatically calculate
   * 50% of the rental total.
   */
  const calculatedDeposit =
    deposit !== "" && deposit !== null
      ? Number(deposit)
      : Number(total || 0) * 0.5;

  const formattedTotal = Number(total || 0).toFixed(2);
  const formattedDeposit = Number(calculatedDeposit || 0).toFixed(2);

  const canContinue = agreedToTerms && agreedToDeposit;

  const handleConfirm = () => {
    if (!canContinue) return;

    const confirmationData = {
      ...bookingData,
      agreementAccepted: true,
      depositPercentage: 50,
      depositRequired: Number(calculatedDeposit || 0),
      securityCameraAcknowledged: true,
      noHardLiquorAcknowledged: true,
      agreementAcceptedAt: new Date().toISOString(),
    };

    setSubmitted(true);

    if (onConfirmed) {
      onConfirmed(confirmationData);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-base-200 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex min-h-[80vh] max-w-3xl items-center justify-center">
          <div className="card w-full border border-success/20 bg-base-100 shadow-2xl">
            <div className="card-body items-center p-6 text-center sm:p-10">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
                <CheckCircle2 className="h-12 w-12 text-success" />
              </div>

              <h1 className="text-2xl font-bold sm:text-3xl">
                Rental Agreement Accepted
              </h1>

              <p className="mt-3 max-w-xl text-base-content/70">
                Thank you, {name || "for choosing Freedom Dance Studio"}. Your
                rental agreement has been accepted.
              </p>

              <div className="alert alert-warning mt-6 max-w-xl text-left">
                <AlertTriangle className="h-5 w-5 shrink-0" />
                <span>
                  Your rental is not fully secured until the required 50%
                  deposit has been received and Freedom Dance Studio confirms
                  the reservation.
                </span>
              </div>

              <div className="mt-6 w-full max-w-xl rounded-2xl bg-base-200 p-5 text-left">
                <div className="flex items-center justify-between gap-4 border-b border-base-300 pb-3">
                  <span className="text-sm text-base-content/60">
                    Rental Total
                  </span>
                  <span className="font-bold">${formattedTotal}</span>
                </div>

                <div className="flex items-center justify-between gap-4 pt-3">
                  <span className="text-sm text-base-content/60">
                    Required Deposit — 50%
                  </span>
                  <span className="text-lg font-bold text-primary">
                    ${formattedDeposit}
                  </span>
                </div>
              </div>

              <div className="mt-7 flex w-full max-w-xl flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="btn btn-primary flex-1"
                  onClick={() => {
                    /*
                     * Replace this section with your payment
                     * page/navigation when ready.
                     */
                    if (onConfirmed) {
                      onConfirmed({
                        ...bookingData,
                        agreementAccepted: true,
                        depositPercentage: 50,
                        depositRequired: Number(calculatedDeposit || 0),
                        securityCameraAcknowledged: true,
                        noHardLiquorAcknowledged: true,
                      });
                    }
                  }}
                >
                  Continue to Deposit
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-base-200 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-content shadow-lg">
              <FileCheck2 className="h-8 w-8" />
            </div>
          </div>

          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            Freedom Dance Studio
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Rental Agreement & Booking Confirmation
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base-content/65">
            Please carefully review the rental policies below. Your reservation
            requires agreement to these terms and a 50% deposit.
          </p>
        </div>

        {/* Booking Summary */}
        <section className="card mb-6 border border-base-300 bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <Home className="h-5 w-5" />
              </div>

              <div>
                <h2 className="text-xl font-bold">Your Rental</h2>
                <p className="text-sm text-base-content/60">
                  Please verify your booking information.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {name && (
                <div className="rounded-xl bg-base-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-base-content/50">
                    Renter
                  </p>
                  <p className="mt-1 font-semibold">{name}</p>
                </div>
              )}

              {email && (
                <div className="rounded-xl bg-base-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-base-content/50">
                    Email
                  </p>
                  <p className="mt-1 break-all font-semibold">{email}</p>
                </div>
              )}

              {rentalDate && (
                <div className="rounded-xl bg-base-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-base-content/50">
                    Date
                  </p>
                  <p className="mt-1 font-semibold">{rentalDate}</p>
                </div>
              )}

              {(startTime || endTime) && (
                <div className="rounded-xl bg-base-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-base-content/50">
                    Time
                  </p>
                  <p className="mt-1 flex items-center gap-2 font-semibold">
                    <Clock className="h-4 w-4 text-primary" />
                    {startTime || "--"} {endTime ? `– ${endTime}` : ""}
                  </p>
                </div>
              )}

              {hours && (
                <div className="rounded-xl bg-base-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-base-content/50">
                    Rental Duration
                  </p>
                  <p className="mt-1 font-semibold">{hours} hours</p>
                </div>
              )}

              {guestCount && (
                <div className="rounded-xl bg-base-200 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-base-content/50">
                    Guests
                  </p>
                  <p className="mt-1 flex items-center gap-2 font-semibold">
                    <Users className="h-4 w-4 text-primary" />
                    {guestCount}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-base-300 bg-base-100 p-5">
                <p className="text-sm text-base-content/60">Rental Total</p>
                <p className="mt-1 text-2xl font-bold">${formattedTotal}</p>
              </div>

              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
                <p className="text-sm text-base-content/60">Required Deposit</p>
                <p className="mt-1 text-2xl font-bold text-primary">
                  ${formattedDeposit}
                </p>
                <p className="mt-1 text-xs text-base-content/60">
                  50% of the rental total
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms */}
        <section className="card border border-base-300 bg-base-100 shadow-xl">
          <div className="card-body p-5 sm:p-8">
            <div className="mb-7">
              <h2 className="text-2xl font-bold">
                Freedom Dance Studio Rental Terms
              </h2>

              <p className="mt-2 text-base-content/65">
                By continuing, you acknowledge and agree to the following rental
                requirements.
              </p>
            </div>

            <div className="space-y-4">
              {/* Deposit */}
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="flex gap-4">
                  <div className="shrink-0 rounded-xl bg-primary/10 p-3 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-bold">50% Deposit Required</h3>

                    <p className="mt-1 text-sm leading-6 text-base-content/70">
                      A 50% deposit of the total rental amount is required to
                      secure the reservation. The rental date and time are not
                      considered secured until the required deposit has been
                      received and the reservation has been confirmed by Freedom
                      Dance Studio.
                    </p>
                  </div>
                </div>
              </div>

              {/* Alcohol */}
              <div className="rounded-2xl border border-warning/30 bg-warning/5 p-5">
                <div className="flex gap-4">
                  <div className="shrink-0 rounded-xl bg-warning/10 p-3 text-warning">
                    <GlassWater className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-bold">No Hard Liquor</h3>

                    <p className="mt-1 text-sm leading-6 text-base-content/70">
                      Hard liquor is not permitted on the premises. Renters must
                      follow all applicable studio rules regarding beverages and
                      alcohol. Any violation may result in termination of the
                      rental and additional charges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Respect */}
              <div className="rounded-2xl border border-base-300 p-5">
                <div className="flex gap-4">
                  <div className="shrink-0 rounded-xl bg-base-200 p-3">
                    <Home className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-bold">Respect the Studio</h3>

                    <p className="mt-1 text-sm leading-6 text-base-content/70">
                      The renter agrees to treat the studio, floors, mirrors,
                      speakers, furniture, equipment, walls, and all other
                      property with care. The space must be returned in the same
                      general condition in which it was provided.
                    </p>
                  </div>
                </div>
              </div>

              {/* Guests */}
              <div className="rounded-2xl border border-base-300 p-5">
                <div className="flex gap-4">
                  <div className="shrink-0 rounded-xl bg-base-200 p-3">
                    <Users className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-bold">Responsibility for Guests</h3>

                    <p className="mt-1 text-sm leading-6 text-base-content/70">
                      The renter is responsible for their guests and agrees that
                      everyone attending the rental will follow Freedom Dance
                      Studio policies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cleaning */}
              <div className="rounded-2xl border border-base-300 p-5">
                <div className="flex gap-4">
                  <div className="shrink-0 rounded-xl bg-base-200 p-3">
                    <Sparkles className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-bold">Cleanliness & Care</h3>

                    <p className="mt-1 text-sm leading-6 text-base-content/70">
                      All trash must be disposed of properly. Equipment and
                      furniture must be returned to their original locations.
                      Excessive cleaning or damage may result in additional
                      charges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Time */}
              <div className="rounded-2xl border border-base-300 p-5">
                <div className="flex gap-4">
                  <div className="shrink-0 rounded-xl bg-base-200 p-3">
                    <Clock className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-bold">Reserved Time</h3>

                    <p className="mt-1 text-sm leading-6 text-base-content/70">
                      Renters must remain within their scheduled rental period.
                      Additional time is subject to availability and may result
                      in additional charges.
                    </p>
                  </div>
                </div>
              </div>

              {/* Security Camera */}
              <div className="rounded-2xl border border-info/30 bg-info/5 p-5">
                <div className="flex gap-4">
                  <div className="shrink-0 rounded-xl bg-info/10 p-3 text-info">
                    <Camera className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      Security Cameras & Video Monitoring
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-base-content/70">
                      Freedom Dance Studio uses security cameras in designated
                      areas of the studio for safety, security, and protection
                      of the studio, its guests, and property. By renting the
                      studio, you acknowledge and consent to the presence of
                      security cameras in applicable areas.
                    </p>

                    <p className="mt-3 text-sm font-medium text-base-content/80">
                      Cameras are not intended to be placed in private areas
                      such as bathrooms or changing areas.
                    </p>
                  </div>
                </div>
              </div>

              {/* General */}
              <div className="rounded-2xl border border-base-300 p-5">
                <div className="flex gap-4">
                  <div className="shrink-0 rounded-xl bg-base-200 p-3">
                    <AlertTriangle className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="font-bold">Policy Violations</h3>

                    <p className="mt-1 text-sm leading-6 text-base-content/70">
                      Failure to follow these terms may result in cancellation
                      of the rental, loss of access to the studio, additional
                      cleaning or damage charges, or other action permitted
                      under the rental agreement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Agreements */}
            <div className="divider my-8">Required Acknowledgments</div>

            <div className="space-y-4">
              <label
                className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition ${
                  agreedToTerms
                    ? "border-success bg-success/5"
                    : "border-base-300 hover:border-primary/40"
                }`}
              >
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary mt-1"
                  checked={agreedToTerms}
                  onChange={(event) => setAgreedToTerms(event.target.checked)}
                />

                <span>
                  <span className="block font-bold">
                    I agree to the Freedom Dance Studio Rental Terms &
                    Conditions.
                  </span>

                  <span className="mt-1 block text-sm leading-6 text-base-content/60">
                    I understand that I am responsible for following these rules
                    and for ensuring that my guests follow them as well.
                  </span>
                </span>
              </label>

              <label
                className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition ${
                  agreedToDeposit
                    ? "border-success bg-success/5"
                    : "border-base-300 hover:border-primary/40"
                }`}
              >
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary mt-1"
                  checked={agreedToDeposit}
                  onChange={(event) => setAgreedToDeposit(event.target.checked)}
                />

                <span>
                  <span className="block font-bold">
                    I understand that a 50% deposit is required to secure my
                    reservation.
                  </span>

                  <span className="mt-1 block text-sm leading-6 text-base-content/60">
                    I also acknowledge the studio's security camera disclosure
                    and the no-hard-liquor policy.
                  </span>
                </span>
              </label>
            </div>

            {/* Final action */}
            <div className="mt-8 rounded-2xl bg-base-200 p-5 sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-base-content/60">
                    Required deposit
                  </p>

                  <p className="text-2xl font-bold">${formattedDeposit}</p>

                  <p className="mt-1 text-xs text-base-content/50">
                    50% of ${formattedTotal}
                  </p>
                </div>

                <button
                  type="button"
                  className="btn btn-primary btn-lg w-full sm:w-auto"
                  disabled={!canContinue}
                  onClick={handleConfirm}
                >
                  {canContinue ? (
                    <>
                      Agree & Continue
                      <ChevronRight className="h-5 w-5" />
                    </>
                  ) : (
                    <>Complete Required Agreements</>
                  )}
                </button>
              </div>
            </div>

            <p className="mt-5 text-center text-xs leading-5 text-base-content/50">
              By submitting this confirmation, you acknowledge that you have
              reviewed the rental policies displayed above. This confirmation
              does not replace any separate rental contract that may be required
              by Freedom Dance Studio.
            </p>
          </div>
        </section>

        <footer className="py-8 text-center text-sm text-base-content/50">
          © {new Date().getFullYear()} Freedom Dance Studio
        </footer>
      </div>
    </main>
  );
}
