import { useState } from "react";

import RentalHero from "./RentalHero";
import StudioRentalPricing from "./StudioRentalPricing";
import RentalFeatures from "./RentalFeatures";
import RentalGallery from "./RentalGallery";
import RentalVideo from "./RentalVideo";
import RentalBooking from "./RentalBooking";

export default function StudioRentals() {
  const [rentalConfirmed, setRentalConfirmed] = useState(false);
  const [confirmationData, setConfirmationData] = useState(null);

  const handleRentalConfirmed = (data) => {
    setConfirmationData(data);
    setRentalConfirmed(true);

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
        onRentAgain={() => {
          setRentalConfirmed(false);
          setConfirmationData(null);
        }}
      />
    );
  }

  return (
    <main className="min-h-screen bg-base-100">
      <RentalHero />

      <div id="pricing">
        <StudioRentalPricing />
      </div>

      <RentalFeatures />

      <RentalVideo />

      <RentalGallery />

      <RentalBooking onRentalConfirmed={handleRentalConfirmed} />
    </main>
  );
}
