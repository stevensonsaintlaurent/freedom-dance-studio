import { useState } from "react";

import RentalHero from "./RentalHero";
import StudioRentalPricing from "./StudioRentalPricing";
import RentalFeatures from "./RentalFeatures";
import RentalGallery from "./RentalGallery";
import RentalVideo from "./RentalVideo";
import RentalBooking from "./RentalBooking";
import RentalAgreementConfirmation from "./RentalAgreementConfirmation";

export default function StudioRentals() {
  const [rentalConfirmed, setRentalConfirmed] = useState(false);
  const [agreementAccepted, setAgreementAccepted] = useState(false);
  const [confirmationData, setConfirmationData] = useState(null);

  const handleRentalConfirmed = (data) => {
    setConfirmationData(data);
    setAgreementAccepted(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAgreementAccepted = (data) => {
    setConfirmationData(data);
    setAgreementAccepted(true);
    setRentalConfirmed(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleRentAgain = () => {
    setRentalConfirmed(false);
    setAgreementAccepted(false);
    setConfirmationData(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (rentalConfirmed) {
    return (
      <RentalBooking
        confirmationData={confirmationData}
        isConfirmationOnly={true}
        onRentAgain={handleRentAgain}
      />
    );
  }

  if (confirmationData && !agreementAccepted) {
    const agreementData = {
      ...confirmationData,

      name: confirmationData.form?.name || "",
      email: confirmationData.form?.email || "",
      phone: confirmationData.form?.phone || "",

      rentalDate:
        confirmationData.form?.date ||
        confirmationData.form?.requestedDate ||
        "",

      startTime: confirmationData.startTime || "",
      endTime: confirmationData.endTime || "",

      hours: confirmationData.rental?.hours ?? 0,

      guestCount: confirmationData.guestCount ?? "",

      total: confirmationData.rental?.total ?? confirmationData.estimate ?? 0,

      location: "Freedom Dance Studio",
    };

    return (
      <RentalAgreementConfirmation
        bookingData={agreementData}
        onConfirmed={handleAgreementAccepted}
      />
    );
  }

  return (
    <main className="min-h-screen bg-base-100">
      <RentalHero />

      {/* <div id="pricing">
        <StudioRentalPricing />
      </div> */}

      <RentalFeatures />

      <RentalVideo />

      <RentalGallery />

      <RentalBooking onRentalConfirmed={handleRentalConfirmed} />
    </main>
  );
}
